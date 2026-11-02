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

import { Content, Channel, CategoryOption, ContentCategory, ContentFormat, Genre } from "@/types";
import { genreService } from "src/services/genreService";
import { getApiErrorMessage } from 'src/services/apiError';
import {
  ContentSaveFailure, MEDIA_FIELDS, contentPayload, saveContentWithMedia,
  type SelectedMedia, type UploadedMedia,
} from "../save-content";

const FORMATS = [
  { value: "standalone", label: "Standalone" },
  { value: "series", label: "Series" },
];

function legacyType(category: ContentCategory, format: ContentFormat) {
  if (format === 'series') return 'series';
  return { movies: 'movie', tv_shows: 'tv_show', documentaries: 'documentary', animations: 'animations' }[category];
}

interface ContentFormProps {
  open: boolean;
  onClose: () => void;
  item: Content | null;
  channels: Channel[];
  categories: CategoryOption[];
  onSave: () => void;
}

export function ContentForm({ open, onClose, item: editItem, channels, categories, onSave }: ContentFormProps) {
  const [formData, setFormData] = useState<Omit<Content, "id">>({
    title: "",
    content_type: "movie",
    category: null,
    format: 'standalone',
    genres: [],
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
  const [genreChoices, setGenreChoices] = useState<Genre[]>([]);
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
        category: editItem.category ?? null,
        format: editItem.format ?? null,
        genres: editItem.genres ?? [],
      });
    } else {
      setFormData({
        title: "",
        content_type: "movie",
        category: null,
        format: 'standalone',
        genres: [],
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

  useEffect(() => {
    if (!open) return;
    genreService.getGenres().then(setGenreChoices).catch(() => setFormError('Genres could not be loaded. Close and retry before changing genre assignments.'));
  }, [open]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: "category" | "format" | "channel", value: string | null) => {
    if (value === null) return;
    if (name === "channel") {
      setFormError("");
    }
    setFormData((previous) => {
      const next = { ...previous, [name]: name === 'channel' ? Number(value) : value };
      if (name === 'category' && value === 'movies') next.format = 'standalone';
      if ((name === 'category' || name === 'format') && next.category && next.format &&
          editItem?.content_type !== 'miniseries') {
        next.content_type = legacyType(next.category as ContentCategory, next.format as ContentFormat);
      }
      return next;
    });
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
    if (!editItem && (!formData.category || !formData.format)) {
      setFormError('Select one category and a format before saving content.');
      return;
    }
    if (formData.category && !formData.format) {
      setFormError('Select a format for this category.');
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
        : error instanceof ContentSaveFailure && error.stage === 'save'
          ? getApiErrorMessage(error.cause, 'Content save failed. Your form and uploaded files are retained.')
          : 'Content save could not be confirmed. Your form and uploaded files are retained. If the response was interrupted, close this form and inspect the content list before continuing.');
    } finally {
      setSaving(false);
    }
  };

  const channelItems = channels.map((channel) => ({ value: String(channel.id), label: channel.name }));
  const hasChannel = Number(formData.channel) > 0;
  const availableGenres = genreChoices.filter((genre) =>
    (formData.category && genre.categories.includes(formData.category) && genre.is_active) ||
    formData.genres?.includes(genre.id));

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
          <Button onClick={handleSubmit} disabled={saving || metadata.loading || confirmationFailed || Number(formData.channel) <= 0 || (!editItem && !formData.category)}>
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
        <FormField label="Primary Category" htmlFor="content-category">
          <Select
            items={categories.map((category) => ({ value: category.id, label: category.label }))}
            value={formData.category ?? null}
            onValueChange={(value) => handleSelectChange("category", value)}
          >
            <SelectTrigger id="content-category" className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
        <FormField label="Format" htmlFor="content-format">
          <Select items={FORMATS} value={formData.format ?? null}
            onValueChange={(value) => handleSelectChange('format', value)}>
            <SelectTrigger id="content-format" className="w-full"><SelectValue placeholder="Select a format" /></SelectTrigger>
            <SelectContent>
              {FORMATS.filter((item) => formData.category !== 'movies' || item.value === 'standalone').map((item) =>
                <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
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
      <p className="text-xs text-muted-foreground">One channel owns each title. Series use seasons and episodes; standalone titles can upload a principal video.</p>
      <FormField label="Description" htmlFor="content-description">
        <Input
          id="content-description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </FormField>
      {MEDIA_FIELDS.filter((media) => media.field !== 'streaming_link' || formData.format !== 'series').map((media) => (
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
        <FormField label="Legacy genre text" htmlFor="content-genre">
          <Input id="content-genre" name="genre" value={formData.genre} onChange={handleChange} />
        </FormField>
        <FormField label="Country" htmlFor="content-country">
          <Input id="content-country" name="country" value={formData.country} onChange={handleChange} />
        </FormField>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Genres</p>
        {!formData.category && <p className="text-xs text-muted-foreground">Select a category to see applicable genres.</p>}
        {formData.category && availableGenres.length === 0 && <p className="text-xs text-muted-foreground">No genres available. Create one in Genre Management.</p>}
        <div className="grid gap-2 sm:grid-cols-2">
          {availableGenres.map((genre) => <label key={genre.id} className="flex items-center gap-2 text-sm">
            <Checkbox checked={formData.genres?.includes(genre.id) ?? false} disabled={saving}
              onCheckedChange={(checked) => setFormData((previous) => ({ ...previous,
                genres: checked === true
                  ? [...(previous.genres ?? []), genre.id]
                  : (previous.genres ?? []).filter((id) => id !== genre.id),
              }))} />
            {genre.name}{!genre.is_active ? ' (inactive)' : ''}
            {formData.category && !genre.categories.includes(formData.category) ? ' (not applicable; remove before saving)' : ''}
          </label>)}
        </div>
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
