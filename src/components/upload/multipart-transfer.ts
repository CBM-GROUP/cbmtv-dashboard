const CONCURRENCY = 4;
const MAX_ATTEMPTS = 3;

export async function transferParts(
  fileSize: number,
  partSize: number,
  partCount: number,
  signal: AbortSignal,
  uploadPart: (index: number, reportBytes: (bytes: number) => void, signal: AbortSignal) => Promise<void>,
  finish: (signal: AbortSignal) => Promise<string>,
  abort: () => Promise<void>,
  onProgress: (percent: number) => void,
): Promise<string> {
  const transfer = new AbortController();
  const cancelTransfer = () => transfer.abort();
  signal.addEventListener("abort", cancelTransfer, { once: true });
  if (signal.aborted) transfer.abort();
  const loaded = new Array<number>(partCount).fill(0);
  let nextPart = 0;
  let completed = false;
  const stopped = () => {
    if (transfer.signal.aborted) throw new DOMException("Upload canceled", "AbortError");
  };
  const report = () => onProgress(Math.min(99, Math.round(loaded.reduce((sum, bytes) => sum + bytes, 0) / fileSize * 100)));
  const worker = async () => {
    while (nextPart < partCount) {
      stopped();
      const index = nextPart++;
      for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        stopped();
        try {
          await uploadPart(index, (bytes) => {
            loaded[index] = Math.min(bytes, Math.min(partSize, fileSize - index * partSize));
            report();
          }, transfer.signal);
          loaded[index] = Math.min(partSize, fileSize - index * partSize);
          report();
          break;
        } catch (error) {
          if (transfer.signal.aborted || attempt === MAX_ATTEMPTS) throw error;
          loaded[index] = 0;
          report();
          await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
        }
      }
    }
  };
  try {
    const workers = Array.from({ length: Math.min(CONCURRENCY, partCount) }, worker);
    try {
      await Promise.all(workers);
    } catch (error) {
      transfer.abort();
      await Promise.allSettled(workers);
      throw error;
    }
    stopped();
    const url = await finish(transfer.signal);
    completed = true;
    onProgress(100);
    return url;
  } finally {
    signal.removeEventListener("abort", cancelTransfer);
    if (!completed) await abort().catch(() => undefined);
  }
}
