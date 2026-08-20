import type { SelectChangeEvent } from "@mui/material/Select";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";


import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { contentService } from "src/services/contentService";

import { ImageUploader } from "@/components/image-uploader";
import { useMediaUpload } from "@/hooks/use-media-upload";
import { VideoUploader } from "@/components/video-uploader";

import { Content, Channel } from "@/types";

dayjs.extend(duration);

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
  const [duration, setDuration] = useState({ hours: 0, minutes: 0 });
  const [formError, setFormError] = useState("");

  const trailerUploader = useMediaUpload("video");
  const streamUploader = useMediaUpload("video");

  useEffect(() => {
    setFormError("");
    if (editItem) {
      setFormData(editItem);
      if (editItem.duration) {
        const totalMinutes = parseInt(editItem.duration, 10);
        setDuration({
          hours: Math.floor(totalMinutes / 60),
          minutes: totalMinutes % 60,
        });
      }
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

  useEffect(() => {
    const totalMinutes = duration.hours * 60 + duration.minutes;
    setFormData((prev) => ({ ...prev, duration: String(totalMinutes) }));
  }, [duration]);

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
      | SelectChangeEvent,
  ) => {
    if (e.target.name === "channel") {
      setFormError("");
    }
    setFormData({
      ...formData,
      [e.target.name as string]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (Number(formData.channel) <= 0) {
      setFormError("Select a channel before saving content.");
      return;
    }

    try {
      const data = {
        ...formData,
        channel: Number(formData.channel),
        size: String(parseInt(formData.size, 10) || 0),
        duration: formData.duration,
      };

      if (editItem) {
        await contentService.updateContent(editItem.id, data);
      } else {
        await contentService.createContent(data);
      }
      onSave();
      onClose();
    } catch (error) {
      console.error("Failed to save content", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {editItem ? "Edit Content" : "Create Content"}
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
        <FormControl fullWidth margin="dense">
          <InputLabel>Content Type</InputLabel>
          <Select
            name="content_type"
            value={formData.content_type}
            onChange={handleChange}
          >
            <MenuItem value="animations">Animations</MenuItem>
            <MenuItem value="series">Series</MenuItem>
            <MenuItem value="movie">Movie</MenuItem>
            <MenuItem value="music">Music</MenuItem>
            <MenuItem value="documentary">Documentary</MenuItem>
            <MenuItem value="miniseries">Miniseries</MenuItem>
            <MenuItem value="original">Original</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense" error={Boolean(formError)}>
          <InputLabel>Channel</InputLabel>
          <Select
            name="channel"
            value={String(formData.channel)}
            onChange={handleChange}
          >
            {channels.map((channel) => (
              <MenuItem key={channel.id} value={String(channel.id)}>
                {channel.name}
              </MenuItem>
            ))}
          </Select>
          {formError && <FormHelperText>{formError}</FormHelperText>}
        </FormControl>
        <TextField
          margin="dense"
          name="description"
          label="Description"
          type="text"
          fullWidth
          value={formData.description}
          onChange={handleChange}
        />
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
        <TextField
          margin="dense"
          name="director"
          label="Director"
          type="text"
          fullWidth
          value={formData.director}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="writer"
          label="Writer"
          type="text"
          fullWidth
          value={formData.writer}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="genre"
          label="Genre"
          type="text"
          fullWidth
          value={formData.genre}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="country"
          label="Country"
          type="text"
          fullWidth
          value={formData.country}
          onChange={handleChange}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel>Status</InputLabel>
          <Select name="status" value={formData.status} onChange={handleChange}>
            <MenuItem value="preview">Preview</MenuItem>
            <MenuItem value="approved">Approved</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
            <MenuItem value="comingsoon">Comingsoon</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          name="size"
          label="Size"
          type="number"
          fullWidth
          value={formData.size}
          onChange={handleChange}
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
            ? dayjs.duration(Number(formData.duration), "seconds").format("HH:mm:ss")
            : ""}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} disabled={Number(formData.channel) <= 0}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
