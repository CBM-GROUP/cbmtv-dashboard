import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

import { advertService } from "src/services/advertService";

import { useMediaUpload } from "@/hooks/use-media-upload";
import { VideoUploader } from "@/components/video-uploader";
import { ImageUploader } from "@/components/image-uploader";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { Advert } from "@/types";

interface AdvertFormProps {
  open: boolean;
  onClose: () => void;
  item: Advert | null;
  onSave: () => void;
}

export function AdvertForm({ open, onClose, item: editItem, onSave }: AdvertFormProps) {
  const [formData, setFormData] = useState({
    advert_type: "middle",
    advert_name: "",
    advert_description: "",
    advert_link: "",
    stream_link: "",
    advert_thumbnail: "",
  });

  const uploader = useMediaUpload("video");

  useEffect(() => {
    if (editItem) {
      setFormData(editItem);
    } else {
      setFormData({
        advert_type: "middle",
        advert_name: "",
        advert_description: "",
        advert_link: "",
        stream_link: "",
        advert_thumbnail: "",
      });
    }
  }, [editItem]);

  useEffect(() => {
    if (uploader.finalUrl) {
      setFormData((prev) => ({ ...prev, stream_link: uploader.finalUrl }));
    }
  }, [uploader.finalUrl]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }> | SelectChangeEvent,
  ) => {
    setFormData({ ...formData, [e.target.name as string]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (editItem) {
        await advertService.updateAdvert(editItem.id, formData);
      } else {
        await advertService.createAdvert(formData);
      }
      onSave();
      onClose();
    } catch (error) {
      console.error("Failed to save advert", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{editItem ? "Edit Advert" : "Create Advert"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="advert_name"
          label="Advert Name"
          type="text"
          fullWidth
          value={formData.advert_name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="advert_description"
          label="Advert Description"
          type="text"
          fullWidth
          value={formData.advert_description}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="advert_link"
          label="Advert Link"
          type="text"
          fullWidth
          value={formData.advert_link}
          onChange={handleChange}
        />

        <FormControl fullWidth margin="dense">
          <InputLabel>Advert Type</InputLabel>
          <Select
            name="advert_type"
            value={formData.advert_type}
            onChange={handleChange}
          >
            <MenuItem value="hello">Hello</MenuItem>
            <MenuItem value="stream">Stream</MenuItem>
            <MenuItem value="middle">Middle</MenuItem>
            <MenuItem value="end">End</MenuItem>
          </Select>
        </FormControl>

        <VideoUploader
          label="Advert Video"
          status={uploader.status}
          progress={uploader.progress}
          error={uploader.error}
          finalUrl={formData.stream_link}
          onUpload={uploader.uploadFile}
        />

        <ImageUploader
          label="Advert Thumbnail URL"
          value={formData.advert_thumbnail}
          onUpload={(url) => setFormData({ ...formData, advert_thumbnail: url })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          disabled={uploader.status === "uploading"}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
