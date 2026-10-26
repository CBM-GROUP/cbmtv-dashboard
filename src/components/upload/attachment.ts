/** A saved API response, not completed transfer progress, proves attachment. */
export function attachmentMatches(
  deliveryUrl: string, endpoint: string, field: string, saved: unknown,
): boolean {
  if (!saved || typeof saved !== 'object' || !deliveryUrl) return false;
  const record = saved as Record<string, unknown>;
  const id = record.id;
  return (typeof id === 'number' || typeof id === 'string') && /^[1-9]\d*$/.test(String(id)) &&
    endpoint.split('/').filter(Boolean).at(-1) === String(id) && record[field] === deliveryUrl;
}
import type { AttachTarget, MediaType, UploadJob } from './upload-manager';

export type CompletedUpload = { jobId: string; url: string; mediaType: MediaType };


export function attachedJob(job: UploadJob | undefined, target: AttachTarget, saved: unknown): UploadJob | null {
  const attachmentFailed = job?.status === 'error' && job.transferComplete &&
    job.attach?.endpoint === target.endpoint && job.attach.field === target.field;
  if (!job || (job.status !== 'success' && !attachmentFailed) ||
    !attachmentMatches(job.deliveryUrl, target.endpoint, target.field, saved)) return null;
  return { ...job, status: 'success', error: '', attach: target };
}

/** A callback retained by a form belongs to one completed job, not the latest selection. */
export function uploadConfirmation(jobId: string, url: string,
  confirm: (id: string, target: AttachTarget, saved: unknown) => boolean) {
  return (saved: unknown, endpoint: string, field: string) =>
    attachmentMatches(url, endpoint, field, saved) && confirm(jobId, { endpoint, field }, saved);
}

export function reusableUpload(completed: CompletedUpload | undefined, job: UploadJob | undefined, mediaType: MediaType) {
  return completed?.mediaType === mediaType && job?.id === completed.jobId &&
    job.status === 'success' && !job.attach && job.deliveryUrl === completed.url ? completed : undefined;
}
