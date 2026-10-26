import { useRef, useState } from 'react';
import { useVideoMetadata } from './use-video-metadata';
import { useUploadManager } from '@/components/upload/upload-manager';
import { attachmentMatches } from '@/components/upload/attachment';

/** Episode/part forms upload on Save and retain successful bytes on save retry. */
export function useSelectedVideo(open: boolean) {
  const [file, setFile] = useState<File | null>(null);
  const uploaded = useRef<{ file: File; jobId: string; url: string } | null>(null);
  const metadata = useVideoMetadata(open ? file : null);
  const { enqueue, confirmAttachment } = useUploadManager();
  const select = (next: File | null) => {
    uploaded.current = null;
    setFile(next);
  };
  const uploadForSave = async () => {
    if (!file) return {};
    if (metadata.loading) throw new Error('Wait for video details to finish reading.');
    if (uploaded.current?.file !== file) {
      const job = enqueue(file, 'video', { label: file.name });
      uploaded.current = { file, jobId: job.jobId, url: await job.done };
    }
    return { streaming_link: uploaded.current.url, duration: metadata.duration };
  };
  const confirmSaved = (saved: unknown, endpoint: string) => {
    if (!uploaded.current) return;
    if (!attachmentMatches(uploaded.current.url, endpoint, 'streaming_link', saved)) {
      throw new Error('The record was saved but its video link could not be confirmed. Inspect the saved record before continuing.');
    }
    confirmAttachment(uploaded.current.jobId, { endpoint, field: 'streaming_link' }, saved);
  };
  return { file, select, metadata, uploadForSave, confirmSaved };
}
