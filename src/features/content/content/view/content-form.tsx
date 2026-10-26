import type { ChangeEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useVideoMetadata } from "@/hooks/use-video-metadata";
import { Checkbox } from "@/components/ui/checkbox";

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
  ContentSaveFailure, MEDIA_FIELDS, contentPayload, saveContentWithMedia,
  type SelectedMedia, type UploadedMedia,
} from "../save-content";

const CONTENT_TYPES = [
  { value: "animations", label: "Animations" },
  { value: "series", label: "Series" },
  { value: "movie", label: "Movie" },
  { value: "music", label: "Music" },
  { value: "documentary", label: "Documentary" },
  { value: "miniseries", label: "Miniseries" },
  { value: "original", label: "Original" },
];

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
  const creationKey = useRef('');
  const { enqueue, confirmAttachment } = useUploadManager();
  const metadata = useVideoMetadata(open ? selectedMedia.streaming_link : null);
  const [confirmationFailed, setConfirmationFailed] = useState(false);

  useEffect(() => {
    if (!open) return;
    setFormError("");
    setConfirmationFailed(false);
    setSelectedMedia({ trailer_link: null, streaming_link: null, thumbnail: null });
    uploadedMedia.current = {};
    creationKey.current = crypto.randomUUID();
    if (editItem) {
      setFormData({
        ...editItem,
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

  const handleSelectChange = (name: "content_type" | "channel", value: string | null) => {
    if (value === null) return;
    if (name === "channel") {
      setFormError("");
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (saving || metadata.loading || confirmationFailed) return;
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
        contentPayload(formData, selectedMedia.streaming_link, metadata.duration), selectedMedia, uploadedMedia.current,
        async (file, type, label) => {
          const upload = enqueue(file, type, { label });
          return { jobId: upload.jobId, url: await upload.done };
        },
        (payload) => editItem
          ? contentService.updateContent(editItem.id, payload)
          : contentService.createContent(payload, creationKey.current),
        (jobId, endpoint, field, saved) => { confirmAttachment(jobId, { endpoint, field }, saved); },
        editItem?.id,
      );
      onSave();
      onClose();
    } catch (error) {
      if (error instanceof ContentSaveFailure && error.stage === 'confirmation') {
        setConfirmationFailed(true);
        onSave();
        setFormError('The record was saved, but its media links could not be confirmed. Close this form and inspect the saved record before continuing.');
        return;
      }
      setFormError(error instanceof ContentSaveFailure && error.stage === "upload"
        ? `Media upload failed. ${editItem ? "Existing content was not changed" : "Content was not created"}. Your form and selected files are ready to retry.`
        : 'Content save could not be confirmed. Your form and uploaded files are retained. If the response was interrupted, close this form and inspect the content list before continuing.');
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
          <Button onClick={handleSubmit} disabled={saving || metadata.loading || confirmationFailed || Number(formData.channel) <= 0}>
            {saving ? "Uploading and saving..." : "Save"}
          </Button>
        </>
      }
    >
      {formError && <StatusAlert variant="error">{formError}</StatusAlert>}
      {!editItem && <p className="text-sm text-muted-foreground">New content is saved as Preview. Approve it from the content table after inspection.</p>}
      {selectedMedia.streaming_link && <p className="text-sm text-muted-foreground" role="status">
        {metadata.loading ? 'Reading video details…' : metadata.duration
          ? 'Video details detected automatically.' : 'Duration could not be read. It will remain unknown; you can choose the video again to retry.'}
      </p>}
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
      </div>
      <div className="flex flex-wrap gap-6">
        {(['is_featured', 'is_trending'] as const).map((flag) => <label key={flag} className="flex items-center gap-2 text-sm">
          <Checkbox checked={formData[flag] ?? false} disabled={saving}
            onCheckedChange={(checked) => setFormData((previous) => ({ ...previous, [flag]: checked === true }))} />
          {flag === 'is_featured' ? 'Featured' : 'Trending'}
        </label>)}
      </div>
      <p className="text-xs text-muted-foreground">Featured and Trending are editorial selections. They do not publish Preview content.</p>
    </FormDialog>
  );
}
