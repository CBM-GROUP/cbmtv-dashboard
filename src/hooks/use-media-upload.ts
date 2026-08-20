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

export function useMediaUpload(mediaType: MediaType) {
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [finalUrl, setFinalUrl] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);

  const requestUploadTarget = async (file: File) => {
    const payload = {
      filename: file.name,
      content_type: file.type,
      media_type: mediaType,
    };
    const request = () =>
      axios.post<UploadTarget>("/api/media/upload-target", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token") ?? ""}`,
        },
      });

    try {
      return await request();
    } catch (uploadTargetError) {
      if (!axios.isAxiosError(uploadTargetError) || uploadTargetError.response?.status !== 401) {
        throw uploadTargetError;
      }

      await apiClient.get("/api/accounts/profile/");
      return request();
    }
  };

  const uploadFile = async (file: File) => {
    setStatus("uploading");
    setError("");
    setProgress(0);
    try {
      const response = await requestUploadTarget(file);
      await axios.put(response.data.upload_url, file, {
        headers: response.data.headers,
        transformRequest: [(data) => data],
        onUploadProgress: ({ loaded, total }) => {
          if (total) setProgress(Math.round((loaded / total) * 100));
        },
      });
      setFinalUrl(response.data.delivery_url);
      setProgress(100);
      setStatus("success");
      return response.data.delivery_url;
    } catch (uploadError) {
      const message = axios.isAxiosError(uploadError)
        ? uploadError.response?.data?.error || "Upload failed. Please try again."
        : "Upload failed. Please try again.";
      setError(message);
      setStatus("error");
      throw uploadError;
    }
  };

  return { status, finalUrl, error, progress, uploadFile };
}
