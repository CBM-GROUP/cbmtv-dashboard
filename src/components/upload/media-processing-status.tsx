"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";

import apiClient from "@/services/api";
import { Button } from "@/components/ui/button";

interface MediaStatus {
  state: "uploaded" | "queued" | "processing" | "ready" | "failed" | "canceled" | "legacy";
  error: string;
  ready: boolean;
  media_id?: string;
  source_uploaded?: boolean;
  renditions?: unknown[];
}

function statusLabel(media: MediaStatus): string {
  if (media.ready) return "Ready to play";
  switch (media.state) {
    case "uploaded": return "Source uploaded — waiting for processing";
    case "queued": return "Source uploaded — queued for processing";
    case "processing": return "Source uploaded — processing video";
    case "ready": return media.ready ? "Ready to play" : "Processing video";
    case "failed": return "Video processing failed";
    case "canceled": return "Upload canceled";
    case "legacy": return "Legacy source — playback availability is checked when opened";
    default: return "Checking media availability";
  }
}

export function MediaProcessingStatus({ referenceUrl }: { referenceUrl?: string | null }) {
  const [snapshot, setSnapshot] = useState<{ url: string; media: MediaStatus } | null>(null);
  const [notice, setNotice] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [retrying, setRetrying] = useState(false);
  const retryRequest = useRef<AbortController | null>(null);
  const media = snapshot && snapshot.url === referenceUrl ? snapshot.media : null;

  useEffect(() => {
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined;
    setSnapshot(null);
    setNotice("");
    setRetrying(false);
    if (!referenceUrl) return () => controller.abort();

    const poll = async () => {
      try {
        const result = await apiClient.get<MediaStatus>("/api/content/media/status/", {
          params: { reference_url: referenceUrl }, signal: controller.signal,
        });
        if (controller.signal.aborted) return;
        setSnapshot({ url: referenceUrl, media: result.data });
        setNotice("");
        if (!result.data.ready && ["uploaded", "queued", "processing", "ready"].includes(result.data.state)) {
          timer = setTimeout(poll, 5000);
        }
      } catch (error) {
        if (controller.signal.aborted) return;
        const status = axios.isAxiosError(error) ? error.response?.status : undefined;
        if (status === 401 || status === 403) {
          setNotice("Sign in with an authorized staff account to check media processing.");
        } else {
          setNotice("Media status could not be checked. Trying again shortly.");
          timer = setTimeout(poll, 5000);
        }
      }
    };
    void poll();
    return () => {
      controller.abort();
      if (timer) clearTimeout(timer);
      retryRequest.current?.abort();
      retryRequest.current = null;
    };
  }, [referenceUrl, refresh]);

  const retry = async () => {
    if (!media?.media_id || retryRequest.current) return;
    const controller = new AbortController();
    retryRequest.current = controller;
    setRetrying(true);
    setNotice("");
    try {
      await apiClient.post(`/api/content/media/${encodeURIComponent(media.media_id)}/retry/`, {}, { signal: controller.signal });
      if (!controller.signal.aborted) setRefresh(value => value + 1);
    } catch {
      if (!controller.signal.aborted) setNotice("Processing could not be retried. Check your access and try again.");
    } finally {
      if (!controller.signal.aborted) {
        retryRequest.current = null;
        setRetrying(false);
      }
    }
  };

  if (!referenceUrl) return null;
  return (
    <div className="grid gap-1 text-xs text-muted-foreground" aria-live="polite">
      <p role="status">{media ? statusLabel(media) : "Checking media processing…"}</p>
      {media?.state === "failed" && (
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-destructive">{media.error || "The source is retained. Retry processing to prepare playback."}</p>
          {media.media_id && <Button type="button" variant="outline" size="xs" disabled={retrying} onClick={() => void retry()}>
            {retrying ? "Retrying…" : "Retry processing"}
          </Button>}
        </div>
      )}
      {notice && <p role="alert">{notice}</p>}
    </div>
  );
}
