import axios from "axios";

import apiClient from "@/services/api";
import { transferParts } from "./multipart-transfer";

const BASE = "/api/content/media/multipart/";

type Session = { token: string; part_size: number; part_count: number; parallelism?: number; delivery_url?: string };
type SessionStatus = Partial<Session> & {
  parts: { PartNumber: number; ETag: string; Size: number }[];
  completed?: boolean;
};

const sessions = new Map<string, Session>();

function accountId(): string {
  try {
    const token = localStorage.getItem("access_token") ?? "";
    const payload = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    if (payload.user_id !== undefined && payload.user_id !== null) return String(payload.user_id);
  } catch { /* Missing or invalid sessions must authenticate before uploading. */ }
  throw new Error("Sign in again before uploading media.");
}

async function resumeKey(file: File, owner: string, purpose: "protected" | "public"): Promise<string> {
  // Bounded hashing avoids reading a multi-gigabyte video into browser memory.
  const sampleSize = 1024 * 1024;
  const sample = new Blob([file.slice(0, sampleSize), file.slice(Math.max(sampleSize, file.size - sampleSize))]);
  const digest = await crypto.subtle.digest("SHA-256", await sample.arrayBuffer());
  const hash = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
  return `cbmtv:multipart:v1:${owner}:${purpose}:${JSON.stringify([file.name, file.size, file.lastModified, file.type, hash])}`;
}

function readSession(key: string): Session | undefined {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      const session = JSON.parse(stored) as Session;
      if (typeof session.token === "string" && Number.isSafeInteger(session.part_size) && Number.isSafeInteger(session.part_count)) {
        return session;
      }
    }
  } catch { /* Browsers may disable storage; in-page retry still works. */ }
  return sessions.get(key);
}

function saveSession(key: string, session?: Session) {
  if (session) sessions.set(key, session);
  else sessions.delete(key);
  try {
    if (session) localStorage.setItem(key, JSON.stringify(session));
    else localStorage.removeItem(key);
  } catch { /* A storage quota error must not fail a storage transfer. */ }
}

export async function uploadMultipartVideo(
  file: File,
  signal: AbortSignal,
  onProgress: (percent: number) => void,
  purpose: "protected" | "public" = "protected",
): Promise<string> {
  const owner = accountId();
  const key = await resumeKey(file, owner, purpose);
  const abortSession = async (token: string) => {
    // Cleanup is independent of the canceled transfer, but never crosses accounts.
    try {
      if (accountId() === owner) await apiClient.post(`${BASE}abort/`, { token });
    } finally { saveSession(key); }
  };
  const assertCurrent = () => {
    if (signal.aborted) throw new DOMException("Upload canceled", "AbortError");
    if (accountId() !== owner) throw new Error("The signed-in account changed. Select this file again after signing in.");
  };
  let session = readSession(key);
  if (signal.aborted && signal.reason !== 'account-changed' && session) await abortSession(session.token).catch(() => undefined);
  assertCurrent();
  const uploadedParts = new Set<number>();
  if (session) {
    try {
      const result = await apiClient.post<SessionStatus>(`${BASE}status/`, { token: session.token }, { signal });
      assertCurrent();
      if (result.data.completed && result.data.delivery_url) {
        saveSession(key);
        onProgress(100);
        return result.data.delivery_url;
      }
      if ((result.data.part_size !== undefined && result.data.part_size !== session.part_size) ||
        (result.data.part_count !== undefined && result.data.part_count !== session.part_count)) {
        throw new Error("The resumed upload does not match its original part dimensions.");
      }
      for (const part of result.data.parts) {
        const expected = Math.min(session.part_size, file.size - (part.PartNumber - 1) * session.part_size);
        if (Number.isInteger(part.PartNumber) && part.PartNumber >= 1 && part.PartNumber <= session.part_count &&
          part.ETag && part.Size === expected) uploadedParts.add(part.PartNumber - 1);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && [400, 404, 410].includes(error.response?.status ?? 0)) {
        saveSession(key);
        session = undefined;
      } else {
        if (signal.aborted && signal.reason !== 'account-changed') {
          // Do not let an aborted status request leave a canceled multipart upload behind.
          await abortSession(session.token).catch(() => undefined);
        }
        throw error;
      }
    }
  }
  if (!session) {
    assertCurrent();
    const started = await apiClient.post<Session>(`${BASE}start/`, {
      filename: file.name,
      content_type: file.type,
      size_bytes: file.size,
      purpose,
    }, { signal });
    session = started.data;
    saveSession(key, session);
  }
  const current = session;
  return transferParts(
    file.size, current.part_size, current.part_count, signal,
    async (index, reportBytes, transferSignal) => {
      assertCurrent();
      const signed = await apiClient.post<{ upload_url: string }>(`${BASE}part/`, {
        token: current.token, part_number: index + 1,
      }, { signal: transferSignal });
      assertCurrent();
      const chunk = file.slice(index * current.part_size, Math.min(file.size, (index + 1) * current.part_size));
      // S3 receives no dashboard token. Completion reads ETags server-side.
      await axios.put(signed.data.upload_url, chunk, {
        transformRequest: [(body) => body], signal: transferSignal,
        onUploadProgress: ({ loaded }) => reportBytes(loaded),
      });
    },
    async (transferSignal) => {
      assertCurrent();
      const result = await apiClient.post<{ delivery_url: string }>(`${BASE}complete/`, {
        token: current.token,
      }, { signal: transferSignal });
      assertCurrent();
      saveSession(key);
      return result.data.delivery_url;
    },
    async () => {
      // Transfer cancellation cannot cancel the cleanup request.
      if (signal.reason === 'account-changed') return;
      await abortSession(current.token);
    },
    onProgress,
    { uploadedParts, parallelism: current.parallelism, preserveOnFailure: true },
  );
}
