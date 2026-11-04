const CONCURRENCY = 4;
const MAX_ATTEMPTS = 3;

export interface TransferOptions {
  parallelism?: number;
  /** Zero-based indexes confirmed by the server, never inferred from local progress. */
  uploadedParts?: ReadonlySet<number>;
  /** Keep successful parts after a network failure so a later attempt can resume. */
  preserveOnFailure?: boolean;
}

export async function transferParts(
  fileSize: number,
  partSize: number,
  partCount: number,
  signal: AbortSignal,
  uploadPart: (index: number, reportBytes: (bytes: number) => void, signal: AbortSignal) => Promise<void>,
  finish: (signal: AbortSignal) => Promise<string>,
  abort: () => Promise<void>,
  onProgress: (percent: number) => void,
  options: TransferOptions = {},
): Promise<string> {
  if (!Number.isSafeInteger(fileSize) || fileSize <= 0 || !Number.isSafeInteger(partSize) || partSize <= 0 ||
    !Number.isSafeInteger(partCount) || partCount !== Math.ceil(fileSize / partSize)) {
    throw new Error("Invalid multipart upload dimensions.");
  }
  const parallelism = Number.isFinite(options.parallelism)
    ? Math.max(1, Math.min(8, Math.floor(options.parallelism!))) : CONCURRENCY;
  const transfer = new AbortController();
  const cancelTransfer = () => transfer.abort();
  signal.addEventListener("abort", cancelTransfer, { once: true });
  if (signal.aborted) transfer.abort();
  const loaded = Array.from({ length: partCount }, (_, index) => options.uploadedParts?.has(index)
    ? Math.min(partSize, fileSize - index * partSize) : 0);
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
      if (options.uploadedParts?.has(index)) continue;
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
    report();
    const workers = Array.from({ length: Math.min(parallelism, partCount) }, worker);
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
    if (!completed && (signal.aborted || !options.preserveOnFailure)) await abort().catch(() => undefined);
  }
}
