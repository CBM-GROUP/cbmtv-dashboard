"use client";

import type { ReactNode } from "react";
import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import axios from "axios";

import apiClient from "@/services/api";
import { uploadMultipartVideo } from "./multipart-video";
import { attachedJob, attachmentMatches, reusableUpload, type CompletedUpload } from "./attachment";

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
 * orphaned in S3. Upload-first forms confirm attachment after their final save.
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
  /** Set only after storage accepted all bytes, never inferred from progress. */
  transferComplete?: boolean;
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
  confirmAttachment: (jobId: string, target: AttachTarget, saved: unknown) => boolean;
  /** Notified after a job writes its URL onto a record, so lists can refetch. */
  subscribeToAttached: (listener: (job: UploadJob) => void) => () => void;
}

const UploadManagerContext = createContext<UploadManagerValue | null>(null);

// Presigning lives on the backend (Django `MediaUploadTargetView`) so AWS
// credentials stay server-side in one place. apiClient attaches the bearer
// token and refreshes it on 401, so no manual retry is needed here.
const UPLOAD_TARGET_URL = "/api/content/media/upload-target/";
const MULTIPART_THRESHOLD = 32 * 1024 * 1024;

interface UploadTargetResponse {
  upload_url: string;
  object_key: string;
  delivery_url: string;
  headers: Record<string, string>;
  /** Seconds the upload URL stays valid; sized by the backend to size_bytes. */
  expires_in?: number;
}

const ACTIVE_STATUSES: UploadStatus[] = ["presigning", "uploading", "attaching"];

export function isActive(job: UploadJob) {
  return ACTIVE_STATUSES.includes(job.status);
}

export function UploadProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobsState] = useState<UploadJob[]>([]);
  const jobsRef = useRef<UploadJob[]>([]);
  // Promise chains can finish before React commits a render. Keep job state
  // current synchronously so save confirmation never sees a stale closure.
  const setJobs = useCallback((update: (previous: UploadJob[]) => UploadJob[]) => {
    jobsRef.current = update(jobsRef.current);
    setJobsState(jobsRef.current);
  }, []);

  // Kept out of state: mutating these must not re-render, and the File handles
  // are what make retry possible after a presigned URL expires.
  const controllers = useRef(new Map<string, AbortController>());
  const files = useRef(new Map<string, File>());
  const uploadedUrls = useRef(new Map<string, string>());
  const successfulFiles = useRef(new WeakMap<File, CompletedUpload>());
  const activeFiles = useRef(new WeakMap<File, EnqueuedUpload>());
  const listeners = useRef(new Set<(job: UploadJob) => void>());
  const nextId = useRef(0);

  const patchJob = useCallback((jobId: string, changes: Partial<UploadJob>) => {
    setJobs((previous) =>
      previous.map((job) => (job.id === jobId ? { ...job, ...changes } : job)),
    );
  }, [setJobs]);

  const subscribeToAttached = useCallback((listener: (job: UploadJob) => void) => {
    listeners.current.add(listener);
    return () => {
      listeners.current.delete(listener);
    };
  }, []);

  const confirmAttachment = useCallback((jobId: string, target: AttachTarget, saved: unknown) => {
    const job = jobsRef.current.find((candidate) => candidate.id === jobId);
    const attached = attachedJob(job, target, saved);
    if (!attached || !job) return false;
    if (job.status === 'success' && job.attach?.endpoint === target.endpoint && job.attach.field === target.field) return true;
    const file = files.current.get(jobId);
    if (file) successfulFiles.current.set(file, { jobId, url: job.deliveryUrl, mediaType: job.mediaType });
    controllers.current.delete(jobId);
    files.current.delete(jobId);
    uploadedUrls.current.delete(jobId);
    patchJob(jobId, { attach: target, status: 'success', error: '' });
    listeners.current.forEach((listener) => {
      try { listener(attached); } catch { console.error('Upload attachment listener failed.'); }
    });
    return true;
  }, [patchJob]);

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

      let deliveryUrl = uploadedUrls.current.get(jobId);
      if (!deliveryUrl) {
        patchJob(jobId, { status: "presigning", progress: 0, error: "" });
        try {
          if (mediaType === "video" && file.size >= MULTIPART_THRESHOLD) {
            patchJob(jobId, { status: "uploading" });
            deliveryUrl = await uploadMultipartVideo(file, controller.signal, (progress) => patchJob(jobId, { progress }));
          } else {
            const response = await apiClient.post<UploadTargetResponse>(UPLOAD_TARGET_URL, {
              filename: file.name,
              content_type: file.type,
              media_type: mediaType,
              size_bytes: file.size,
            }, { signal: controller.signal });
            const target = response.data;
            patchJob(jobId, { status: "uploading" });
            // S3 never receives the dashboard bearer token.
            await axios.put(target.upload_url, file, {
              headers: target.headers,
              transformRequest: [(body) => body],
              signal: controller.signal,
              onUploadProgress: ({ loaded, total }) => {
                if (total) patchJob(jobId, { progress: Math.round((loaded / total) * 100) });
              },
            });
            deliveryUrl = target.delivery_url;
          }
          uploadedUrls.current.set(jobId, deliveryUrl);
        } catch (error) {
          if (axios.isAxiosError(error) && !error.response) {
            failed("Storage could not be reached from this browser. Check the S3 CORS policy for this dashboard origin and your connection, then retry.");
          } else if (axios.isAxiosError(error) && error.response?.status === 403) {
            failed("Storage rejected the upload (403). The signed link may have expired; retry for a fresh link.");
          } else {
            failed((axios.isAxiosError(error) && error.response?.data?.error) || "Upload failed. Retry to continue.");
          }
          throw error;
        }
      }

      if (controller.signal.aborted) throw new DOMException('Upload canceled', 'AbortError');
      patchJob(jobId, { progress: 100, deliveryUrl, transferComplete: true });

      if (attach) {
        patchJob(jobId, { status: "attaching" });
        try {
          const saved = await apiClient.patch(attach.endpoint, { [attach.field]: deliveryUrl }, { signal: controller.signal });
          if (!attachmentMatches(deliveryUrl, attach.endpoint, attach.field, saved.data)) {
            throw new Error('The saved record did not confirm this media link.');
          }
        } catch (error) {
          // The file is in S3 and the URL is retained for an attachment-only retry.
          failed("Uploaded, but saving the link to the record failed. Retry or copy the URL.");
          throw error;
        }
      }

      if (controller.signal.aborted) throw new DOMException('Upload canceled', 'AbortError');
      patchJob(jobId, { status: "success" });
      successfulFiles.current.set(file, { jobId, url: deliveryUrl, mediaType });
      controllers.current.delete(jobId);
      files.current.delete(jobId);
      uploadedUrls.current.delete(jobId);

      if (attach) {
        const finished: UploadJob = {
          id: jobId,
          fileName: file.name,
          label: "",
          mediaType,
          status: "success",
          progress: 100,
          error: "",
          deliveryUrl,
          attach,
        };
        listeners.current.forEach((listener) => {
          try { listener(finished); } catch { console.error('Upload attachment listener failed.'); }
        });
      }

      return deliveryUrl;
    },
    [patchJob],
  );

  const enqueue = useCallback(
    (file: File, mediaType: MediaType, options?: StartUploadOptions): EnqueuedUpload => {
      const active = activeFiles.current.get(file);
      const activeJob = active && jobsRef.current.find(job => job.id === active.jobId);
      if (active && activeJob && isActive(activeJob) && activeJob.mediaType === mediaType &&
        activeJob.attach?.endpoint === options?.attach?.endpoint && activeJob.attach?.field === options?.attach?.field) return active;
      // A tray retry can finish after the original form promise rejected.
      // Reuse those bytes when that same selected File is saved again.
      const completed = successfulFiles.current.get(file);
      const completedJob = completed && jobsRef.current.find((job) => job.id === completed.jobId);
      const reusable = reusableUpload(completed, completedJob, mediaType);
      if (!options?.attach && reusable) {
        return { jobId: reusable.jobId, done: Promise.resolve(reusable.url) };
      }
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

      const result = { jobId, done: run(jobId, file, mediaType, options?.attach) };
      activeFiles.current.set(file, result);
      const release = () => { if (activeFiles.current.get(file)?.jobId === jobId) activeFiles.current.delete(file); };
      void result.done.then(release, release);
      return result;
    },
    [run, setJobs],
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
      const job = jobsRef.current.find((candidate) => candidate.id === jobId);
      if (!job || isActive(job)) return;
      // Nothing awaits a retry, so swallow the rejection the job already records.
      const done = run(jobId, file, job.mediaType, job.attach);
      activeFiles.current.set(file, { jobId, done });
      const release = () => { if (activeFiles.current.get(file)?.jobId === jobId) activeFiles.current.delete(file); };
      void done.then(release, release);
    },
    [run],
  );

  const dismissJob = useCallback((jobId: string) => {
    controllers.current.get(jobId)?.abort();
    controllers.current.delete(jobId);
    files.current.delete(jobId);
    uploadedUrls.current.delete(jobId);
    setJobs((previous) => previous.filter((job) => job.id !== jobId));
  }, [setJobs]);

  const dismissFinished = useCallback(() => {
    setJobs((previous) => {
      previous.filter((job) => !isActive(job)).forEach((job) => files.current.delete(job.id));
      previous.filter((job) => !isActive(job)).forEach((job) => uploadedUrls.current.delete(job.id));
      return previous.filter(isActive);
    });
  }, [setJobs]);

  const value = useMemo(
    () => ({
      jobs,
      enqueue,
      cancelUpload,
      retryUpload,
      dismissJob,
      dismissFinished,
      confirmAttachment,
      subscribeToAttached,
    }),
    [jobs, enqueue, cancelUpload, retryUpload, dismissJob, dismissFinished, confirmAttachment, subscribeToAttached],
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
