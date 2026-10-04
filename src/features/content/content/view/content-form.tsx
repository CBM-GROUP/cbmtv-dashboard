import type { ChangeEvent } from "react";
import { useEffect, useRef, useState } from "react";
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

import { useUploadManager } from "@/components/upload/upload-manager";

import { Content, Channel } from "@/types";
import {
  ContentSaveFailure, MEDIA_FIELDS, saveContentWithMedia,
  type SelectedMedia, type UploadedMedia,
} from "../save-content";

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
  const [saving, setSaving] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<SelectedMedia>({
    trailer_link: null, streaming_link: null, thumbnail: null,
  });
  // A successful upload may precede a later upload or DB failure. Reuse its
  // URL on Save retry instead of creating another orphaned S3 object.
  const uploadedMedia = useRef<UploadedMedia>({});
  const { enqueue } = useUploadManager();

  useEffect(() => {
    if (!open) return;
    setFormError("");
    setSelectedMedia({ trailer_link: null, streaming_link: null, thumbnail: null });
    uploadedMedia.current = {};
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
  }, [editItem, open]);

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
    if (saving) return;
    if (!formData.title.trim()) {
      setFormError("Add a title before saving content.");
      return;
    }
    if (Number(formData.channel) <= 0) {
      setFormError("Select a channel before saving content.");
      return;
    }

    setSaving(true);
    setFormError("");
    try {
      await saveContentWithMedia(
        buildPayload(), selectedMedia, uploadedMedia.current,
        (file, type, label) => enqueue(file, type, { label }).done,
        (payload) => editItem
          ? contentService.updateContent(editItem.id, payload)
          : contentService.createContent(payload),
      );
      onSave();
      onClose();
    } catch (error) {
      console.error("Failed to save content", error);
      setFormError(error instanceof ContentSaveFailure && error.stage === "upload"
        ? `Media upload failed. ${editItem ? "Existing content was not changed" : "Content was not created"}. Your form and selected files are ready to retry.`
        : `Content save failed. ${editItem ? "Existing content was not changed" : "Content was not created"}. Your form is ready to retry.`);
    } finally {
      setSaving(false);
    }
  };

  const channelItems = channels.map((channel) => ({ value: String(channel.id), label: channel.name }));
  const hasChannel = Number(formData.channel) > 0;

  return (
    <FormDialog
      open={open}
      onClose={() => { if (!saving) onClose(); }}
      title={editItem ? "Edit Content" : "Create Content"}
      className="sm:max-w-2xl"
      footer={
        <>
          <Button variant="outline" onClick={onClose} disabled={saving}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={saving || Number(formData.channel) <= 0}>
            {saving ? "Uploading and saving..." : "Save"}
          </Button>
        </>
      }
    >
      {formError && <StatusAlert variant="error">{formError}</StatusAlert>}
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
        <FormField label="Channel" htmlFor="content-channel">
          <Select
            items={channelItems}
            value={hasChannel ? String(formData.channel) : null}
            onValueChange={(value) => handleSelectChange("channel", value)}
          >
            <SelectTrigger id="content-channel" className="w-full">
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
      {MEDIA_FIELDS.map((media) => (
        <FormField key={media.field} label={media.label} htmlFor={`content-${media.field}`}>
          <Input
            id={`content-${media.field}`}
            type="file"
            accept={media.accept}
            disabled={saving}
            onChange={(event) => {
              const file = event.target.files?.[0] ?? null;
              uploadedMedia.current[media.field] = undefined;
              setSelectedMedia((previous) => ({ ...previous, [media.field]: file }));
              setFormError("");
              event.target.value = "";
            }}
          />
          <span className="text-xs text-muted-foreground">
            {selectedMedia[media.field]
              ? `Selected: ${selectedMedia[media.field]?.name}. Upload starts when you click Save.`
              : formData[media.field] || "No media selected"}
          </span>
        </FormField>
      ))}
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
