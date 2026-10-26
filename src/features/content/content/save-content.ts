import type { Content, ContentPayload } from "@/types";
import { attachmentMatches } from "../../../components/upload/attachment";
import { videoSizeBytes } from "../../../lib/video-metadata";

export type MediaField = "trailer_link" | "streaming_link" | "thumbnail";

export const MEDIA_FIELDS = [
  { field: "trailer_link", label: "Trailer Video", type: "video", accept: "video/mp4,video/x-m4v,video/quicktime,video/webm" },
  { field: "streaming_link", label: "Streaming Video", type: "video", accept: "video/mp4,video/x-m4v,video/quicktime,video/webm" },
  { field: "thumbnail", label: "Thumbnail", type: "image", accept: "image/*" },
] as const;

export type SelectedMedia = Record<MediaField, File | null>;
export type UploadedMedia = Partial<Record<MediaField, { file: File; url: string; jobId: string }>>;

/** Metadata edits deliberately omit publication status and unchanged asset metadata. */
export function contentPayload(content: Omit<Content, 'id'>, main: File | null, duration: string | null): ContentPayload {
  return {
    title: content.title, description: content.description, content_type: content.content_type,
    channel: Number(content.channel), trailer_link: content.trailer_link, streaming_link: content.streaming_link,
    thumbnail: content.thumbnail, director: content.director, writer: content.writer,
    genre: content.genre, country: content.country,
    is_featured: content.is_featured ?? false, is_trending: content.is_trending ?? false,
    ...(main ? { size: videoSizeBytes(main), duration } : {}),
  };
}

export class ContentSaveFailure extends Error {
  constructor(public readonly stage: "upload" | "save" | "confirmation", cause: unknown) {
    super(`Content ${stage} failed`, { cause });
  }
}

/** Uploads selected files first; the caller's single DB write is the last step. */
export async function saveContentWithMedia(
  payload: ContentPayload,
  selected: SelectedMedia,
  uploaded: UploadedMedia,
  upload: (file: File, type: "video" | "image", label: string) => Promise<{ jobId: string; url: string }>,
  persist: (data: ContentPayload) => Promise<Content>,
  confirm: (jobId: string, endpoint: string, field: MediaField, saved: Content) => void,
  expectedId?: string,
): Promise<Content> {
  const urls: Partial<Record<MediaField, string>> = {};
  try {
    for (const media of MEDIA_FIELDS) {
      const file = selected[media.field];
      if (!file) continue;
      const cached = uploaded[media.field];
      const result = cached?.file === file
        ? cached
        : await upload(file, media.type, `${media.label} — ${file.name}`);
      uploaded[media.field] = { file, ...result };
      urls[media.field] = result.url;
    }
  } catch (cause) {
    throw new ContentSaveFailure("upload", cause);
  }

  let saved: Content;
  try {
    saved = await persist({ ...payload, ...urls });
  } catch (cause) {
    throw new ContentSaveFailure("save", cause);
  }
  const endpoint = `/api/content/${saved?.id}/`;
  if (!saved || !/^[1-9]\d*$/.test(String(saved.id)) ||
    (expectedId !== undefined && String(saved.id) !== String(expectedId)) || MEDIA_FIELDS.some(({ field }) =>
    urls[field] !== undefined && !attachmentMatches(urls[field]!, endpoint, field, saved))) {
    throw new ContentSaveFailure('confirmation', new Error('The saved record did not confirm its media.'));
  }
  for (const { field } of MEDIA_FIELDS) {
    const result = uploaded[field];
    if (selected[field] && result && urls[field]) confirm(result.jobId, endpoint, field, saved);
  }
  return saved;
}
