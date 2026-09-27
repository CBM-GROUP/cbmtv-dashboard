import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";

import { advertService } from "src/services/advertService";

import { useMediaUpload } from "@/hooks/use-media-upload";
import { VideoUploader } from "@/components/video-uploader";
import { ImageUploader } from "@/components/image-uploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormDialog } from "@/components/form-dialog";
import { FormField } from "@/components/form-field";

import { Advert } from "@/types";

const ADVERT_TYPES = [
  { value: "hello", label: "Hello" },
  { value: "stream", label: "Stream" },
  { value: "middle", label: "Middle" },
  { value: "end", label: "End" },
];

interface AdvertFormProps {
  open: boolean;
  onClose: () => void;
  item: Advert | null;
  onSave: () => void;
}

export function AdvertForm({ open, onClose, item: editItem, onSave }: AdvertFormProps) {
  const [saveError, setSaveError] = useState("");
  const [formData, setFormData] = useState({
    advert_type: "middle",
    advert_name: "",
    advert_description: "",
    advert_link: "",
    stream_link: "",
    advert_thumbnail: "",
    show_in_hero: true,
    hero_order: 0,
  });

  // In edit mode the advert exists, so a finished upload can write its own
  // URL onto the record and the dialog is free to close.
  const uploader = useMediaUpload("video", {
    label: editItem ? `Advert - ${editItem.advert_name}` : "Advert video",
    attach: editItem
      ? { endpoint: `/api/content/adverts/${editItem.id}/`, field: "stream_link" }
      : undefined,
  });

  useEffect(() => {
    setSaveError("");
    if (editItem) {
      setFormData({
        advert_type: editItem.advert_type,
        advert_name: editItem.advert_name,
        advert_description: editItem.advert_description,
        advert_link: editItem.advert_link,
        stream_link: editItem.stream_link,
        advert_thumbnail: editItem.advert_thumbnail,
        show_in_hero: editItem.show_in_hero !== false,
        hero_order: editItem.hero_order ?? 0,
      });
    } else {
      setFormData({
        advert_type: "middle",
        advert_name: "",
        advert_description: "",
        advert_link: "",
        stream_link: "",
        advert_thumbnail: "",
        show_in_hero: true,
        hero_order: 0,
      });
    }
  }, [editItem]);

  useEffect(() => {
    if (uploader.finalUrl) {
      setFormData((prev) => ({ ...prev, stream_link: uploader.finalUrl }));
    }
  }, [uploader.finalUrl]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "hero_order") {
      setFormData({ ...formData, hero_order: Math.max(0, Number(e.target.value) || 0) });
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setSaveError("");
    try {
      let saved: Advert;
      if (editItem) {
        saved = await advertService.updateAdvert(editItem.id, formData);
      } else {
        saved = await advertService.createAdvert(formData);
      }
      onSave();
      if (saved.show_in_hero === undefined || saved.hero_order === undefined) {
        setSaveError("The advert was saved, but this backend cannot store homepage hero settings yet.");
        return;
      }
      onClose();
    } catch (error) {
      console.error("Failed to save advert", error);
      setSaveError("Could not save advert. Please try again.");
    }
  };

  return (
    <FormDialog
      open={open}
      onClose={onClose}
      title={editItem ? "Edit Advert" : "Create Advert"}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={uploader.status === "uploading"}>
            Save
          </Button>
        </>
      }
    >
      {saveError && <p role="alert" className="text-sm text-destructive">{saveError}</p>}
      <FormField label="Advert name / hero title" htmlFor="advert-name">
        <Input
          id="advert-name"
          autoFocus
          name="advert_name"
          value={formData.advert_name}
          onChange={handleChange}
        />
      </FormField>

      <div className="flex items-center gap-3">
        <Checkbox
          id="show-in-hero"
          checked={formData.show_in_hero}
          onCheckedChange={(checked) => setFormData({ ...formData, show_in_hero: checked === true })}
        />
        <label htmlFor="show-in-hero" className="text-sm font-medium">Show on homepage hero</label>
      </div>
      <FormField label="Hero slide order" htmlFor="hero-order">
        <Input
          id="hero-order"
          type="number"
          min={0}
          name="hero_order"
          value={formData.hero_order}
          onChange={handleChange}
        />
      </FormField>
      <FormField label="Description / hero summary" htmlFor="advert-description">
        <Input
          id="advert-description"
          name="advert_description"
          value={formData.advert_description}
          onChange={handleChange}
        />
      </FormField>
      <FormField label="Watch link (full URL)" htmlFor="advert-link">
        <Input
          id="advert-link"
          name="advert_link"
          value={formData.advert_link}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Advert Type" htmlFor="advert-type">
        <Select
          items={ADVERT_TYPES}
          value={formData.advert_type}
          onValueChange={(value) => value && setFormData({ ...formData, advert_type: value })}
        >
          <SelectTrigger id="advert-type" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {ADVERT_TYPES.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <VideoUploader
        label="Advert Video"
        status={uploader.status}
        progress={uploader.progress}
        error={uploader.error}
        finalUrl={formData.stream_link}
        onUpload={uploader.uploadFile}
      />
      <p className="text-sm text-muted-foreground">Leave the video empty for an image slide. A thumbnail also serves as the poster for a video slide.</p>

      <ImageUploader
        label="Advert Thumbnail URL"
        value={formData.advert_thumbnail}
        onUpload={(url) => setFormData({ ...formData, advert_thumbnail: url })}
      />
    </FormDialog>
  );
}
