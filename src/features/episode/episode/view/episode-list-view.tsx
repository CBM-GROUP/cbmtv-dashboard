import type { ChangeEvent } from "react";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import apiClient from "src/services/api";

import { useAuth } from "src/features/auth/context";
import { useMediaUpload } from "@/hooks/use-media-upload";
import { VideoUploader } from "@/components/video-uploader";

interface Episode {
  id: string;
  title: string;
  episode_number: number;
  file_url: string;
}

export function EpisodeListView() {
  const { user } = useAuth()!;
  const { seasonId } = useParams();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState<Episode | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    episode_number: null as number | null,
    file_url: "",
  });

  const uploader = useMediaUpload("video");

  useEffect(() => {
    if (uploader.finalUrl) {
      setFormData((previous) => ({ ...previous, file_url: uploader.finalUrl }));
    }
  }, [uploader.finalUrl]);

  const fetchEpisodes = async () => {
    try {
      const response = await apiClient.get(
        `/api/content/episodes/?season=${seasonId}`
      );
      setEpisodes(response.data);
    } catch (error) {
      console.error("Failed to fetch episodes", error);
    }
  };

  useEffect(() => {
    fetchEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seasonId]);

  const handleOpen = (item: Episode | null = null) => {
    setEditItem(item);
    setFormData(
      item
        ? {
            title: item.title,
            episode_number: item.episode_number,
            file_url: item.file_url || "",
          }
        : { title: "", episode_number: null, file_url: "" }
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditItem(null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = { ...formData, season: seasonId };
    try {
      if (editItem) {
        await apiClient.patch(`/api/content/episodes/${editItem.id}/`, data);
      } else {
        await apiClient.post("/api/content/episodes/", data);
      }
      fetchEpisodes();
      handleClose();
    } catch (error) {
      console.error("Failed to save episode", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await apiClient.delete(`/api/content/episodes/${id}/`);
      fetchEpisodes();
    } catch (error) {
      console.error("Failed to delete episode", error);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4">Episodes</Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen()}
        >
          Create Episode
        </Button>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        }}
      >
        {episodes.map((item) => (
          <Card key={item.id}>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>Episode {item.episode_number}</Typography>

              <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                <Button size="small" onClick={() => handleOpen(item)}>
                  Edit
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Dialog open={open} onClose={handleClose}>
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
            name="episode_number"
            label="Episode Number"
            type="number"
            fullWidth
            value={formData.episode_number || ""}
            onChange={handleChange}
          />
          <VideoUploader
            label="Episode Video"
            status={uploader.status}
            error={uploader.error}
            finalUrl={formData.file_url}
            onUpload={uploader.uploadFile}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
