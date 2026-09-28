import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

import { useMediaUpload } from "@/hooks/use-media-upload";
import { VideoUploader } from "@/components/video-uploader";
import { ImageUploader } from "@/components/image-uploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormDialog } from "@/components/form-dialog";
import { FormField } from "@/components/form-field";

import { miniseriesEpisodeService } from "src/services/miniseriesEpisodeService";

import { Episode } from "@/types";

dayjs.extend(duration);

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
    duration: "",
    thumbnail: "",
  });

  const uploader = useMediaUpload("video");

  useEffect(() => {
    if (editItem) {
      setFormData(editItem);
    } else {
      setFormData({
        title: "",
        miniseries_no: 1,
        streaming_link: "",
        duration: "",
        thumbnail: "",
      });
    }
  }, [editItem]);

  useEffect(() => {
    if (uploader.finalUrl) {
      setFormData((prev) => ({ ...prev, streaming_link: uploader.finalUrl }));
    }
  }, [uploader.finalUrl]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? parseInt(value, 10) || 0 : value,
    });
  };

  const handleSubmit = async () => {
    try {
      const data = {
        ...formData,
        content: parseInt(contentId, 10),
      };

      if (editItem) {
        await miniseriesEpisodeService.updateMiniseriesEpisode(editItem.id, data);
      } else {
        await miniseriesEpisodeService.createMiniseriesEpisode(data);
      }
      onSave();
      onClose();
    } catch (error) {
      console.error("Failed to save episode", error);
    }
  };

  return (
    <FormDialog
      open={open}
      onClose={onClose}
      title={editItem ? "Edit Episode" : "Create Episode"}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </>
      }
    >
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
      <VideoUploader
        label="Streaming Video"
        status={uploader.status}
        progress={uploader.progress}
        error={uploader.error}
        finalUrl={formData.streaming_link}
        onUpload={uploader.uploadFile}
      />
      <ImageUploader
        label="Thumbnail URL"
        value={formData.thumbnail}
        onUpload={(url) => setFormData({ ...formData, thumbnail: url })}
      />
      <FormField
        label="Duration (in seconds)"
        htmlFor="miniseries-episode-duration"
        hint={
          formData.duration && !isNaN(Number(formData.duration))
            ? dayjs.duration(Number(formData.duration), "seconds").format("HH:mm:ss")
            : undefined
        }
      >
        <Input
          id="miniseries-episode-duration"
          name="duration"
          value={formData.duration ?? ""}
          onChange={handleChange}
        />
      </FormField>
    </FormDialog>
  );
}
