import { useState } from "react";
import axios from "axios";

import apiClient from "src/services/api";

type MediaType = "video" | "image";

interface UploadTarget {
  upload_url: string;
  object_key: string;
  delivery_url: string;
  headers: Record<string, string>;
}

// Presigning lives on the backend (Django `MediaUploadTargetView`) so AWS
// credentials stay server-side in one place. apiClient attaches the bearer
// token and refreshes it on 401, so no manual retry is needed here.
const UPLOAD_TARGET_URL = "/api/content/media/upload-target/";

export function useMediaUpload(mediaType: MediaType) {
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [finalUrl, setFinalUrl] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);

  const uploadFile = async (file: File) => {
    setStatus("uploading");
    setError("");
    setProgress(0);

    let target: UploadTarget;
    try {
      const response = await apiClient.post<UploadTarget>(UPLOAD_TARGET_URL, {
        filename: file.name,
        content_type: file.type,
        media_type: mediaType,
      });
      target = response.data;
    } catch (uploadTargetError) {
      const message =
        (axios.isAxiosError(uploadTargetError) && uploadTargetError.response?.data?.error) ||
        "Could not start the upload. Please try again.";
      setError(message);
      setStatus("error");
      throw uploadTargetError;
    }

    try {
      // Sent straight to S3, so this must not carry the API's Authorization
      // header — hence bare axios rather than apiClient.
      await axios.put(target.upload_url, file, {
        headers: target.headers,
        transformRequest: [(body) => body],
        onUploadProgress: ({ loaded, total }) => {
          if (total) setProgress(Math.round((loaded / total) * 100));
        },
      });
    } catch (uploadError) {
      setError("Upload to storage failed. Please try again.");
      setStatus("error");
      throw uploadError;
    }

    setFinalUrl(target.delivery_url);
    setProgress(100);
    setStatus("success");
    return target.delivery_url;
  };

  return { status, finalUrl, error, progress, uploadFile };
}
