import { useEffect, useState } from 'react';

import { readVideoDuration } from '@/lib/video-metadata';

export function useVideoMetadata(file: File | null) {
  const [result, setResult] = useState<{ file: File; duration: string | null } | null>(null);
  useEffect(() => {
    if (!file) return;
    const controller = new AbortController();
    void readVideoDuration(file, controller.signal).then((duration) => {
      if (!controller.signal.aborted) setResult({ file, duration });
    });
    return () => controller.abort();
  }, [file]);
  const current = file && result?.file === file ? result : null;
  return { loading: Boolean(file && !current), duration: current?.duration ?? null };
}
