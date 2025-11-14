import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

import { useMuxUpload } from "@/hooks/use-mux-upload";
import { VideoUploader } from "@/components/video-uploader";
import { ImageUploader } from "@/components/image-uploader";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

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

  const uploader = useMuxUpload();

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
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {editItem ? "Edit Episode" : "Create Episode"}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="miniseries_no"
          label="Episode Number"
          type="number"
          fullWidth
          value={formData.miniseries_no}
          onChange={handleChange}
        />
        <VideoUploader
          label="Streaming Video"
          uploadUrl={uploader.uploadUrl}
          status={uploader.status}
          isPolling={uploader.isPolling}
          finalUrl={formData.streaming_link}
          onSuccess={uploader.startPolling}
        />
        <ImageUploader
          label="Thumbnail URL"
          value={formData.thumbnail}
          onUpload={(url) => setFormData({ ...formData, thumbnail: url })}
        />
        <TextField
          margin="dense"
          name="duration"
          label="Duration (in seconds)"
          type="text"
          fullWidth
          value={formData.duration}
          onChange={handleChange}
        />
        <Typography variant="caption">
          {formData.duration && !isNaN(Number(formData.duration))
            ? dayjs
                .duration(Number(formData.duration), "seconds")
                .format("HH:mm:ss")
            : ""}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
