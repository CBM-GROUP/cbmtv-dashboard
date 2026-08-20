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

  const uploadFile = async (file: File) => {
    setStatus("uploading");
    setError("");
    try {
      const response = await apiClient.post<UploadTarget>("/api/content/media/upload-target/", {
        filename: file.name,
        content_type: file.type,
        media_type: mediaType,
      });
      await axios.put(response.data.upload_url, file, {
        headers: response.data.headers,
        transformRequest: [(data) => data],
      });
      setFinalUrl(response.data.delivery_url);
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

  return { status, finalUrl, error, uploadFile };
}
