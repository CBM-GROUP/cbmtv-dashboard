/** Exact bytes fit the backend's nullable 20-character size string. No MB rounding. */
export const videoSizeBytes = (file: Pick<File, 'size'>): string => String(file.size);

/** DRF DurationField accepts decimal seconds; unknown must never become zero. */
export function durationSeconds(value: number): string | null {
  if (!Number.isFinite(value) || value <= 0) return null;
  const seconds = Math.round(value * 1_000_000) / 1_000_000;
  return Number.isFinite(seconds) && seconds > 0 ? String(seconds) : null;
}

export function readVideoDuration(file: File, signal: AbortSignal, timeoutMs = 10_000): Promise<string | null> {
  if (signal.aborted) return Promise.resolve(null);
  return new Promise((resolve) => {
    const video = document.createElement('video');
    let objectUrl: string | undefined;
    let finished = false;
    const finish = (duration: string | null) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      signal.removeEventListener('abort', onAbort);
      video.onloadedmetadata = null;
      video.onerror = null;
      video.removeAttribute('src');
      try { video.load(); } catch { /* Some unsupported media implementations cannot reset. */ }
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      resolve(duration);
    };
    const onAbort = () => finish(null);
    signal.addEventListener('abort', onAbort, { once: true });
    video.preload = 'metadata';
    video.onloadedmetadata = () => finish(durationSeconds(video.duration));
    video.onerror = () => finish(null);
    const timer = setTimeout(() => finish(null), timeoutMs);
    try {
      objectUrl = URL.createObjectURL(file);
      video.src = objectUrl;
    } catch {
      finish(null);
    }
  });
}
