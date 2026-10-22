import axios from "axios";

import apiClient from "@/services/api";
import { transferParts } from "./multipart-transfer";

const BASE = "/api/content/media/multipart/";

type Session = { token: string; part_size: number; part_count: number };

export async function uploadMultipartVideo(
  file: File,
  signal: AbortSignal,
  onProgress: (percent: number) => void,
): Promise<string> {
  const started = await apiClient.post<Session>(`${BASE}start/`, {
    filename: file.name,
    content_type: file.type,
    size_bytes: file.size,
  }, { signal });
  const session = started.data;
  return transferParts(
    file.size, session.part_size, session.part_count, signal,
    async (index, reportBytes, transferSignal) => {
      const signed = await apiClient.post<{ upload_url: string }>(`${BASE}part/`, {
        token: session.token, part_number: index + 1,
      }, { signal: transferSignal });
      const chunk = file.slice(index * session.part_size, Math.min(file.size, (index + 1) * session.part_size));
      // S3 receives no dashboard token. Completion reads ETags server-side.
      await axios.put(signed.data.upload_url, chunk, {
        transformRequest: [(body) => body], signal: transferSignal,
        onUploadProgress: ({ loaded }) => reportBytes(loaded),
      });
    },
    async (transferSignal) => {
      const result = await apiClient.post<{ delivery_url: string }>(`${BASE}complete/`, {
        token: session.token,
      }, { signal: transferSignal });
      return result.data.delivery_url;
    },
    async () => {
      // Transfer cancellation cannot cancel the cleanup request.
      await apiClient.post(`${BASE}abort/`, { token: session.token });
    },
    onProgress,
  );
}
