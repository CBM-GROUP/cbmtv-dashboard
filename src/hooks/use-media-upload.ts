import { useCallback, useRef, useState } from "react";

import type { AttachTarget, MediaType } from "@/components/upload/upload-manager";
import { useUploadManager } from "@/components/upload/upload-manager";

interface UseMediaUploadOptions {
  /**
   * Where to write the delivery URL when the upload finishes. Pass this
   * whenever the record already exists -- it is what lets the upload survive
   * the dialog closing, because the URL no longer has to come back through
   * component state to be saved.
   */
  attach?: AttachTarget;
  /**
   * Resolves the attach target when the user picks a file, for records that do
   * not exist yet -- a "create" form saves itself here and returns the new
   * record's path. Throwing aborts the upload and surfaces the message.
   * Takes precedence over `attach`.
   */
  resolveAttach?: () => Promise<AttachTarget | undefined>;
  /** Shown in the upload tray once the dialog is gone. Defaults to the filename. */
  label?: string;
}

/**
 * Thin view onto one job in the global upload manager.
 *
 * The transfer itself lives in `<UploadProvider>`, so it keeps running (and
 * keeps reporting into the tray) after this component unmounts. What is lost on
 * unmount is only this local mirror of the job's state.
 */
export function useMediaUpload(mediaType: MediaType, options?: UseMediaUploadOptions) {
  const { jobs, enqueue } = useUploadManager();
  const [jobId, setJobId] = useState<string | null>(null);

  const job = jobs.find((candidate) => candidate.id === jobId);

  // Callers build `options` inline, so it is a new object every render. Read it
  // through a ref to keep `uploadFile` stable -- it is passed straight to
  // VideoUploader/ImageUploader as a prop.
  const optionsRef = useRef(options);
  optionsRef.current = options;

  // Failures that happen before a job exists (e.g. the record could not be
  // saved), which therefore have nowhere else to be reported.
  const [preflightError, setPreflightError] = useState("");

  const uploadFile = useCallback(
    async (file: File) => {
      const current = optionsRef.current;
      setPreflightError("");

      let attach = current?.attach;
      if (current?.resolveAttach) {
        try {
          attach = await current.resolveAttach();
        } catch (error) {
          setPreflightError(
            error instanceof Error ? error.message : "Could not prepare the upload.",
          );
          setJobId(null);
          throw error;
        }
      }

      const { jobId: id, done } = enqueue(file, mediaType, {
        attach,
        label: current?.label ? `${current.label} — ${file.name}` : file.name,
      });
      setJobId(id);
      return done;
    },
    [enqueue, mediaType],
  );

  let status: "idle" | "uploading" | "success" | "error" = "idle";
  if (preflightError) {
    status = "error";
  } else if (job) {
    if (job.status === "success") status = "success";
    else if (job.status === "error") status = "error";
    else if (job.status === "canceled") status = "idle";
    else status = "uploading";
  }

  return {
    status,
    finalUrl: job?.deliveryUrl ?? "",
    error: preflightError || job?.error || "",
    progress: job?.progress ?? 0,
    uploadFile,
  };
}
