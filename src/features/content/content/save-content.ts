import type { ContentPayload } from "@/types";

export type MediaField = "trailer_link" | "streaming_link" | "thumbnail";

export const MEDIA_FIELDS = [
  { field: "trailer_link", label: "Trailer Video", type: "video", accept: "video/mp4,video/x-m4v,video/quicktime,video/webm" },
  { field: "streaming_link", label: "Streaming Video", type: "video", accept: "video/mp4,video/x-m4v,video/quicktime,video/webm" },
  { field: "thumbnail", label: "Thumbnail", type: "image", accept: "image/*" },
] as const;

export type SelectedMedia = Record<MediaField, File | null>;
export type UploadedMedia = Partial<Record<MediaField, { file: File; url: string }>>;

export class ContentSaveFailure extends Error {
  constructor(public readonly stage: "upload" | "save", cause: unknown) {
    super(`Content ${stage} failed`, { cause });
  }
}

/** Uploads selected files first; the caller's single DB write is the last step. */
export async function saveContentWithMedia(
  payload: ContentPayload,
  selected: SelectedMedia,
  uploaded: UploadedMedia,
  upload: (file: File, type: "video" | "image", label: string) => Promise<string>,
  persist: (data: ContentPayload) => Promise<unknown>,
): Promise<void> {
  const urls: Partial<Record<MediaField, string>> = {};
  try {
    for (const media of MEDIA_FIELDS) {
      const file = selected[media.field];
      if (!file) continue;
      const cached = uploaded[media.field];
      const url = cached?.file === file
        ? cached.url
        : await upload(file, media.type, `${media.label} — ${file.name}`);
      uploaded[media.field] = { file, url };
      urls[media.field] = url;
    }
  } catch (cause) {
    throw new ContentSaveFailure("upload", cause);
  }

  try {
    await persist({ ...payload, ...urls });
  } catch (cause) {
    throw new ContentSaveFailure("save", cause);
  }
}
