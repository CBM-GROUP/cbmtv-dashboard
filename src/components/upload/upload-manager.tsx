"use client";

import type { ReactNode } from "react";
import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import axios from "axios";

import apiClient from "@/services/api";

export type MediaType = "video" | "image";

export type UploadStatus =
  | "presigning"
  | "uploading"
  | "attaching"
  | "success"
  | "error"
  | "canceled";

/**
 * Where the finished delivery URL should be written.
 *
 * Omit it only when the record does not exist yet. Without a target the URL is
 * held in the tray and is lost on reload, which is how uploads used to be
 * orphaned in S3 -- prefer saving the record first and passing a target.
 */
export interface AttachTarget {
  /** API path of the record, e.g. "/api/content/12/". */
  endpoint: string;
  /** Field on that record that receives the delivery URL. */
  field: string;
}

export interface UploadJob {
  id: string;
  fileName: string;
  /** Human-readable origin, e.g. "Streaming Video - The King Returns". */
  label: string;
  mediaType: MediaType;
  status: UploadStatus;
  /** 0-100, bytes transferred to S3. Attaching happens after this hits 100. */
  progress: number;
  error: string;
  deliveryUrl: string;
  attach?: AttachTarget;
}

export interface StartUploadOptions {
  attach?: AttachTarget;
  label?: string;
}

interface EnqueuedUpload {
  jobId: string;
  /** Resolves with the delivery URL. Rejects if the upload fails or is canceled. */
  done: Promise<string>;
}

interface UploadManagerValue {
  jobs: UploadJob[];
  enqueue: (file: File, mediaType: MediaType, options?: StartUploadOptions) => EnqueuedUpload;
  cancelUpload: (jobId: string) => void;
  retryUpload: (jobId: string) => void;
  dismissJob: (jobId: string) => void;
  dismissFinished: () => void;
  /** Notified after a job writes its URL onto a record, so lists can refetch. */
  subscribeToAttached: (listener: (job: UploadJob) => void) => () => void;
}

const UploadManagerContext = createContext<UploadManagerValue | null>(null);

// Presigning lives on the backend (Django `MediaUploadTargetView`) so AWS
// credentials stay server-side in one place. apiClient attaches the bearer
// token and refreshes it on 401, so no manual retry is needed here.
const UPLOAD_TARGET_URL = "/api/content/media/upload-target/";

interface UploadTargetResponse {
  upload_url: string;
  object_key: string;
  delivery_url: string;
  headers: Record<string, string>;
}

const ACTIVE_STATUSES: UploadStatus[] = ["presigning", "uploading", "attaching"];

export function isActive(job: UploadJob) {
  return ACTIVE_STATUSES.includes(job.status);
}

export function UploadProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<UploadJob[]>([]);

  // Kept out of state: mutating these must not re-render, and the File handles
  // are what make retry possible after a presigned URL expires.
  const controllers = useRef(new Map<string, AbortController>());
  const files = useRef(new Map<string, File>());
  const listeners = useRef(new Set<(job: UploadJob) => void>());
  const nextId = useRef(0);

  const patchJob = useCallback((jobId: string, changes: Partial<UploadJob>) => {
    setJobs((previous) =>
      previous.map((job) => (job.id === jobId ? { ...job, ...changes } : job)),
    );
  }, []);

  const subscribeToAttached = useCallback((listener: (job: UploadJob) => void) => {
    listeners.current.add(listener);
    return () => {
      listeners.current.delete(listener);
    };
  }, []);

  /**
   * Drives one job to completion. Split out from `enqueue` so `retryUpload` can
   * re-run it against the same job id -- a retry always presigns again, because
   * an expired target is the most likely reason a long upload failed.
   */
  const run = useCallback(
    async (jobId: string, file: File, mediaType: MediaType, attach?: AttachTarget) => {
      const controller = new AbortController();
      controllers.current.set(jobId, controller);

      const failed = (message: string) => {
        // A cancel aborts the same request, so don't overwrite that status.
        if (controller.signal.aborted) return;
        patchJob(jobId, { status: "error", error: message });
      };

      patchJob(jobId, { status: "presigning", progress: 0, error: "" });

      let target: UploadTargetResponse;
      try {
        const response = await apiClient.post<UploadTargetResponse>(
          UPLOAD_TARGET_URL,
          { filename: file.name, content_type: file.type, media_type: mediaType },
          { signal: controller.signal },
        );
        target = response.data;
      } catch (error) {
        const message =
          (axios.isAxiosError(error) && error.response?.data?.error) ||
          "Could not start the upload. Please try again.";
        failed(message);
        throw error;
      }

      patchJob(jobId, { status: "uploading" });

      try {
        // Sent straight to S3, so this must not carry the API's Authorization
        // header -- hence bare axios rather than apiClient.
        await axios.put(target.upload_url, file, {
          headers: target.headers,
          transformRequest: [(body) => body],
          signal: controller.signal,
          onUploadProgress: ({ loaded, total }) => {
            if (total) patchJob(jobId, { progress: Math.round((loaded / total) * 100) });
          },
        });
      } catch (error) {
        failed(
          "Upload to storage failed. The upload link is valid for one hour -- retry to get a fresh one.",
        );
        throw error;
      }

      patchJob(jobId, { progress: 100, deliveryUrl: target.delivery_url });

      if (attach) {
        patchJob(jobId, { status: "attaching" });
        try {
          await apiClient.patch(attach.endpoint, { [attach.field]: target.delivery_url });
        } catch (error) {
          // The file is in S3 and the URL is on the job, so this is recoverable:
          // retry re-uploads, or the URL can be copied out of the tray.
          failed("Uploaded, but saving the link to the record failed. Retry or copy the URL.");
          throw error;
        }
      }

      patchJob(jobId, { status: "success" });
      controllers.current.delete(jobId);

      if (attach) {
        const finished: UploadJob = {
          id: jobId,
          fileName: file.name,
          label: "",
          mediaType,
          status: "success",
          progress: 100,
          error: "",
          deliveryUrl: target.delivery_url,
          attach,
        };
        listeners.current.forEach((listener) => listener(finished));
      }

      return target.delivery_url;
    },
    [patchJob],
  );

  const enqueue = useCallback(
    (file: File, mediaType: MediaType, options?: StartUploadOptions): EnqueuedUpload => {
      nextId.current += 1;
      const jobId = `upload-${nextId.current}`;

      files.current.set(jobId, file);

      setJobs((previous) => [
        ...previous,
        {
          id: jobId,
          fileName: file.name,
          label: options?.label ?? file.name,
          mediaType,
          status: "presigning",
          progress: 0,
          error: "",
          deliveryUrl: "",
          attach: options?.attach,
        },
      ]);

      return { jobId, done: run(jobId, file, mediaType, options?.attach) };
    },
    [run],
  );

  const cancelUpload = useCallback(
    (jobId: string) => {
      controllers.current.get(jobId)?.abort();
      controllers.current.delete(jobId);
      patchJob(jobId, { status: "canceled", error: "" });
    },
    [patchJob],
  );

  const retryUpload = useCallback(
    (jobId: string) => {
      const file = files.current.get(jobId);
      if (!file) return;
      const job = jobs.find((candidate) => candidate.id === jobId);
      if (!job) return;
      // Nothing awaits a retry, so swallow the rejection the job already records.
      run(jobId, file, job.mediaType, job.attach).catch(() => undefined);
    },
    [jobs, run],
  );

  const dismissJob = useCallback((jobId: string) => {
    controllers.current.get(jobId)?.abort();
    controllers.current.delete(jobId);
    files.current.delete(jobId);
    setJobs((previous) => previous.filter((job) => job.id !== jobId));
  }, []);

  const dismissFinished = useCallback(() => {
    setJobs((previous) => {
      previous.filter((job) => !isActive(job)).forEach((job) => files.current.delete(job.id));
      return previous.filter(isActive);
    });
  }, []);

  const value = useMemo(
    () => ({
      jobs,
      enqueue,
      cancelUpload,
      retryUpload,
      dismissJob,
      dismissFinished,
      subscribeToAttached,
    }),
    [jobs, enqueue, cancelUpload, retryUpload, dismissJob, dismissFinished, subscribeToAttached],
  );

  return <UploadManagerContext.Provider value={value}>{children}</UploadManagerContext.Provider>;
}

export function useUploadManager() {
  const context = useContext(UploadManagerContext);
  if (!context) {
    throw new Error("useUploadManager must be used inside <UploadProvider>");
  }
  return context;
}
