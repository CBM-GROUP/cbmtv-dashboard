import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormDialog } from "@/components/form-dialog";
import { FormField, StatusAlert } from "@/components/form-field";

import { contentService } from "src/services/contentService";

import { ImageUploader } from "@/components/image-uploader";
import { useMediaUpload } from "@/hooks/use-media-upload";
import { VideoUploader } from "@/components/video-uploader";

import { Content, Channel } from "@/types";

dayjs.extend(duration);

const CONTENT_TYPES = [
  { value: "animations", label: "Animations" },
  { value: "series", label: "Series" },
  { value: "movie", label: "Movie" },
  { value: "music", label: "Music" },
  { value: "documentary", label: "Documentary" },
  { value: "miniseries", label: "Miniseries" },
  { value: "original", label: "Original" },
];

const STATUSES = [
  { value: "preview", label: "Preview" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
  { value: "comingsoon", label: "Comingsoon" },
];

/**
 * The API stores duration as a Django DurationField, which DRF serialises as
 * "[DD ]HH:MM:SS[.ffffff]" but accepts as either that or a bare second count.
 * The form edits it as a plain number of seconds, so incoming values have to be
 * normalised — `parseInt("00:01:30")` silently yields 0.
 */
function durationToSeconds(value: string | number | null | undefined): number {
  if (value === null || value === undefined || value === "") return 0;
  if (typeof value === "number") return Number.isFinite(value) ? Math.floor(value) : 0;

  const trimmed = value.trim();
  if (!trimmed) return 0;
  if (/^\d+$/.test(trimmed)) return Number(trimmed);

  const [dayPart, clockPart] = trimmed.includes(" ")
    ? [trimmed.slice(0, trimmed.indexOf(" ")), trimmed.slice(trimmed.indexOf(" ") + 1)]
    : ["0", trimmed];

  const parts = clockPart.split(":").map(Number);
  if (parts.some((part) => !Number.isFinite(part))) return 0;
  while (parts.length < 3) parts.unshift(0);

  const [hours, minutes, seconds] = parts;
  const days = Number(dayPart);
  return (
    (Number.isFinite(days) ? days : 0) * 86400 +
    hours * 3600 +
    minutes * 60 +
    Math.floor(seconds)
  );
}

interface ContentFormProps {
  open: boolean;
  onClose: () => void;
  item: Content | null;
  channels: Channel[];
  onSave: () => void;
}

export function ContentForm({ open, onClose, item: editItem, channels, onSave }: ContentFormProps) {
  const [formData, setFormData] = useState<Omit<Content, "id">>({
    title: "",
    content_type: "series",
    channel: 0,
    description: "",
    trailer_link: "",
    streaming_link: "",
    thumbnail: "",
    director: "",
    writer: "",
    genre: "",
    country: "",
    status: "preview",
    size: "",
    duration: "",
  });
  const [formError, setFormError] = useState("");

  /**
   * Set when a *new* item is saved early to give a background upload something
   * to attach to. From then on this dialog edits that record rather than
   * creating another one.
   */
  const [autoSavedId, setAutoSavedId] = useState<string | null>(null);
  const contentId = editItem?.id ?? autoSavedId;

  /**
   * Videos are uploaded straight to S3 and the URL is PATCHed onto the record
   * when the transfer finishes, so the record has to exist first. For a new
   * item that means saving it now -- which is why picking a video needs the
   * same validation as Save.
   */
  const ensureSaved = async () => {
    if (contentId) return contentId;

    if (!formData.title.trim()) {
      throw new Error("Add a title before uploading video.");
    }
    if (Number(formData.channel) <= 0) {
      throw new Error("Select a channel before uploading video.");
    }

    const created = await contentService.createContent(buildPayload());
    setAutoSavedId(created.id);
    onSave();
    return created.id as string;
  };

  const attachTo = (field: "trailer_link" | "streaming_link") => async () => ({
    endpoint: `/api/content/${await ensureSaved()}/`,
    field,
  });

  const trailerUploader = useMediaUpload("video", {
    label: "Trailer",
    resolveAttach: attachTo("trailer_link"),
  });
  const streamUploader = useMediaUpload("video", {
    label: "Streaming video",
    resolveAttach: attachTo("streaming_link"),
  });

  useEffect(() => {
    setFormError("");
    setAutoSavedId(null);
    if (editItem) {
      setFormData({
        ...editItem,
        duration: editItem.duration ? String(durationToSeconds(editItem.duration)) : "",
      });
    } else {
      setFormData({
        title: "",
        content_type: "series",
        channel: 0,
        description: "",
        trailer_link: "",
        streaming_link: "",
        thumbnail: "",
        director: "",
        writer: "",
        genre: "",
        country: "",
        status: "preview",
        size: "",
        duration: "",
      });
    }
  }, [editItem]);

  useEffect(() => {
    if (trailerUploader.finalUrl) {
      setFormData((prev) => ({ ...prev, trailer_link: trailerUploader.finalUrl }));
    }
  }, [trailerUploader.finalUrl]);

  useEffect(() => {
    if (streamUploader.finalUrl) {
      setFormData((prev) => ({ ...prev, streaming_link: streamUploader.finalUrl }));
    }
  }, [streamUploader.finalUrl]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: "content_type" | "channel" | "status", value: string | null) => {
    if (value === null) return;
    if (name === "channel") {
      setFormError("");
    }
    setFormData({ ...formData, [name]: value });
  };

  // A function declaration so `ensureSaved`, defined above it, can call it.
  function buildPayload() {
    const trimmedDuration = (formData.duration ?? "").trim();
    const trimmedSize = (formData.size ?? "").trim();

    return {
      ...formData,
      channel: Number(formData.channel),
      // Both are nullable on the model; send null rather than coercing a
      // blank field to "0", which previously overwrote real values.
      size: trimmedSize === "" ? null : trimmedSize,
      duration: trimmedDuration === "" ? null : String(durationToSeconds(trimmedDuration)),
    };
  }

  const handleSubmit = async () => {
    if (Number(formData.channel) <= 0) {
      setFormError("Select a channel before saving content.");
      return;
    }

    try {
      // `contentId` covers the auto-save that a background upload triggers, so
      // saving afterwards updates that record instead of creating a duplicate.
      if (contentId) {
        await contentService.updateContent(contentId, buildPayload());
      } else {
        await contentService.createContent(buildPayload());
      }
      onSave();
      onClose();
    } catch (error) {
      console.error("Failed to save content", error);
    }
  };

  const channelItems = channels.map((channel) => ({ value: String(channel.id), label: channel.name }));
  const hasChannel = Number(formData.channel) > 0;

  return (
    <FormDialog
      open={open}
      onClose={onClose}
      title={editItem || autoSavedId ? "Edit Content" : "Create Content"}
      className="sm:max-w-2xl"
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={Number(formData.channel) <= 0}>
            Save
          </Button>
        </>
      }
    >
      {autoSavedId && (
        <StatusAlert variant="info">
          Saved so the upload can finish in the background. You can close this
          dialog — the video link is attached when it completes.
        </StatusAlert>
      )}
      <FormField label="Title" htmlFor="content-title">
        <Input id="content-title" autoFocus name="title" value={formData.title} onChange={handleChange} />
      </FormField>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Content Type" htmlFor="content-type">
          <Select
            items={CONTENT_TYPES}
            value={formData.content_type}
            onValueChange={(value) => handleSelectChange("content_type", value)}
          >
            <SelectTrigger id="content-type" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CONTENT_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
        <FormField label="Channel" htmlFor="content-channel" error={formError || undefined}>
          <Select
            items={channelItems}
            value={hasChannel ? String(formData.channel) : null}
            onValueChange={(value) => handleSelectChange("channel", value)}
          >
            <SelectTrigger id="content-channel" className="w-full" aria-invalid={Boolean(formError)}>
              <SelectValue placeholder="Select a channel" />
            </SelectTrigger>
            <SelectContent>
              {channelItems.map((channel) => (
                <SelectItem key={channel.value} value={channel.value}>
                  {channel.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
      </div>
      <FormField label="Description" htmlFor="content-description">
        <Input
          id="content-description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </FormField>
      <VideoUploader
        label="Trailer Video"
        status={trailerUploader.status}
        progress={trailerUploader.progress}
        error={trailerUploader.error}
        finalUrl={formData.trailer_link}
        onUpload={trailerUploader.uploadFile}
      />
      <VideoUploader
        label="Streaming Video"
        status={streamUploader.status}
        progress={streamUploader.progress}
        error={streamUploader.error}
        finalUrl={formData.streaming_link}
        onUpload={streamUploader.uploadFile}
      />
      <ImageUploader
        label="Thumbnail URL"
        value={formData.thumbnail}
        onUpload={(url) => setFormData({ ...formData, thumbnail: url })}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Director" htmlFor="content-director">
          <Input id="content-director" name="director" value={formData.director} onChange={handleChange} />
        </FormField>
        <FormField label="Writer" htmlFor="content-writer">
          <Input id="content-writer" name="writer" value={formData.writer} onChange={handleChange} />
        </FormField>
        <FormField label="Genre" htmlFor="content-genre">
          <Input id="content-genre" name="genre" value={formData.genre} onChange={handleChange} />
        </FormField>
        <FormField label="Country" htmlFor="content-country">
          <Input id="content-country" name="country" value={formData.country} onChange={handleChange} />
        </FormField>
        <FormField label="Status" htmlFor="content-status">
          <Select
            items={STATUSES}
            value={formData.status}
            onValueChange={(value) => handleSelectChange("status", value)}
          >
            <SelectTrigger id="content-status" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {STATUSES.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
        <FormField label="Size" htmlFor="content-size">
          <Input id="content-size" name="size" type="number" value={formData.size ?? ""} onChange={handleChange} />
        </FormField>
      </div>
      <FormField
        label="Duration (in seconds)"
        htmlFor="content-duration"
        hint={
          formData.duration && !isNaN(Number(formData.duration))
            ? dayjs.duration(Number(formData.duration), "seconds").format("HH:mm:ss")
            : undefined
        }
      >
        <Input id="content-duration" name="duration" value={formData.duration ?? ""} onChange={handleChange} />
      </FormField>
    </FormDialog>
  );
}
