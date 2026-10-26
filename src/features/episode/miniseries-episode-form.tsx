import type { ChangeEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { useSelectedVideo } from "@/hooks/use-selected-video";
import { ImageUploader, type ConfirmImage } from "@/components/image-uploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormDialog } from "@/components/form-dialog";
import { FormField, StatusAlert } from "@/components/form-field";

import { miniseriesEpisodeService } from "src/services/miniseriesEpisodeService";

import { Episode } from "@/types";

interface MiniseriesEpisodeFormProps {
  open: boolean;
  onClose: () => void;
  item: Episode | null;
  contentId: string;
  onSave: () => void;
}

export function MiniseriesEpisodeForm({ open, onClose, item: editItem, contentId, onSave }: MiniseriesEpisodeFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    miniseries_no: 1,
    streaming_link: "",
    thumbnail: "",
  });

  const video = useSelectedVideo(open);
  const savedId = useRef<string | null>(null);
  const creationKey = useRef('');
  const confirmImage = useRef<ConfirmImage | undefined>(undefined);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [imageUploading, setImageUploading] = useState(false);

  useEffect(() => {
    if (!open) return;
    creationKey.current = crypto.randomUUID();
    savedId.current = null;
    confirmImage.current = undefined;
    setSaveError('');
    setImageUploading(false);
    video.select(null);
    if (editItem) {
      setFormData({ title: editItem.title, miniseries_no: editItem.miniseries_no,
        streaming_link: editItem.streaming_link, thumbnail: editItem.thumbnail });
    } else {
      setFormData({
        title: "",
        miniseries_no: 1,
        streaming_link: "",
        thumbnail: "",
      });
    }
    // Only a new editing session resets selected media.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editItem, open]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? parseInt(value, 10) || 0 : value,
    });
  };

  const handleSubmit = async () => {
    if (saving || imageUploading || video.metadata.loading) return;
    if (!formData.title.trim() || !Number.isInteger(formData.miniseries_no) || formData.miniseries_no <= 0) {
      setSaveError('Add a title and positive episode number.'); return;
    }
    setSaving(true);
    setSaveError('');
    try {
      const data = {
        ...formData,
        content: parseInt(contentId, 10),
        ...await video.uploadForSave(),
      };
      const id = editItem?.id ?? savedId.current;
      const saved = id ? await miniseriesEpisodeService.updateMiniseriesEpisode(id, data)
        : await miniseriesEpisodeService.createMiniseriesEpisode(data, creationKey.current);
      if (!/^[1-9]\d*$/.test(String(saved?.id)) || (id && String(saved.id) !== String(id))) throw new Error('Save was not confirmed.');
      savedId.current = saved.id;
      const endpoint = `/api/content/miniseries/${saved.id}/`;
      video.confirmSaved(saved, endpoint);
      if (confirmImage.current && !confirmImage.current(saved, endpoint, 'thumbnail')) throw new Error('Image attachment was not confirmed.');
      onSave();
      onClose();
    } catch {
      setSaveError('Save or attachment confirmation failed. Uploaded files remain available for retry. Inspect the episode list first if a creation response was lost.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <FormDialog
      open={open}
      onClose={() => { if (!saving) onClose(); }}
      title={editItem ? "Edit Episode" : "Create Episode"}
      footer={
        <>
          <Button variant="outline" onClick={onClose} disabled={saving}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={saving || imageUploading || video.metadata.loading}>{saving ? 'Uploading and saving…' : 'Save'}</Button>
        </>
      }
    >
      {saveError && <StatusAlert>{saveError}</StatusAlert>}
      <FormField label="Title" htmlFor="miniseries-episode-title">
        <Input
          id="miniseries-episode-title"
          autoFocus
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </FormField>
      <FormField label="Episode Number" htmlFor="miniseries-episode-number">
        <Input
          id="miniseries-episode-number"
          name="miniseries_no"
          type="number"
          value={formData.miniseries_no}
          onChange={handleChange}
        />
      </FormField>
      <FormField label="Streaming Video" htmlFor="miniseries-video">
        <Input id="miniseries-video" type="file" accept="video/mp4,video/x-m4v,video/quicktime,video/webm" disabled={saving}
          onChange={(event) => { video.select(event.target.files?.[0] ?? null); event.target.value = ''; }} />
        <p className="text-xs text-muted-foreground" role="status">{video.file
          ? `${video.file.name}. ${video.metadata.loading ? 'Reading video details…' : video.metadata.duration ? 'Duration detected.' : 'Duration unavailable; it will remain unknown.'}`
          : formData.streaming_link || 'Select a video. Upload starts on Save.'}</p>
      </FormField>
      <ImageUploader
        key={`${open}:${editItem?.id ?? 'new'}`}
        disabled={saving}
        onPendingChange={setImageUploading}
        label="Thumbnail URL"
        value={formData.thumbnail}
        onUpload={(url, confirm) => { confirmImage.current = confirm; setFormData((previous) => ({ ...previous, thumbnail: url })); }}
      />
    </FormDialog>
  );
}
