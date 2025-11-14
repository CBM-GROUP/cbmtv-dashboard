import type { ChangeEvent } from "react";

import { useState, useEffect, useRef } from "react";
import MuxUploader from "@mux/mux-uploader-react";
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

  // Mux Uploader State
  const [uploadUrl, setUploadUrl] = useState("");
  const [uploadId, setUploadId] = useState("");
  const [uploadStatus, setUploadStatus] = useState("initializing");
  const [isPolling, setIsPolling] = useState(false);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    async function getUploadUrl() {
      try {
        setUploadStatus("fetching");
        const res = await fetch("/api/create-upload", { method: "POST" });
        const data = await res.json();
        if (data.data?.url) {
          setUploadUrl(data.data.url);
          setUploadId(data.data.id);
          setUploadStatus("ready");
        } else {
          setUploadStatus("error");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setUploadStatus("error");
      }
    }
    if (open) {
      getUploadUrl();
    }
  }, [open]);

  const getAssetDetails = async (assetId: string) => {
    try {
      const res = await fetch(`/api/asset-details?assetId=${assetId}`);
      const data = await res.json();
      if (data.data?.playback_ids?.[0]?.id) {
        const playbackId = data.data.playback_ids[0].id;
        const playbackUrl = `https://stream.mux.com/${playbackId}.m3u8`;
        setFormData(prev => ({ ...prev, file_url: playbackUrl }));
      }
    } catch (error) {
      console.error("Failed to get asset details:", error);
    }
  };

  const checkUploadStatus = async () => {
    if (!uploadId) return;
    try {
      const res = await fetch(`/api/upload-status?uploadId=${uploadId}`);
      const data = await res.json();
      if (data.data?.status === "asset_created" && data.data?.asset_id) {
        await getAssetDetails(data.data.asset_id);
        stopPolling();
      } else if (data.data?.status === "errored") {
        stopPolling();
      }
    } catch (error) {
      console.error("Failed to check upload status:", error);
      stopPolling();
    }
  };

  const startPolling = () => {
    if (pollingRef.current) clearInterval(pollingRef.current);
    setIsPolling(true);
    pollingRef.current = setInterval(checkUploadStatus, 3000);
    setTimeout(stopPolling, 300000); // 5 minutes timeout
  };

  const stopPolling = () => {
    if (pollingRef.current) clearInterval(pollingRef.current);
    setIsPolling(false);
  };

  const fetchEpisodes = async () => {
    try {
      const response = await apiClient.get(
        `/api/content/episodes/?season=${seasonId}`,
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
        : { title: "", episode_number: null, file_url: "" },
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditItem(null);
    stopPolling();
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
        {user?.role === "admin" && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpen()}
          >
            Create Episode
          </Button>
        )}
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
              {user?.role === "admin" && (
                <Box
                  sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}
                >
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
              )}
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
          <Typography sx={{ mt: 2 }}>Episode Video</Typography>
          {uploadStatus === 'error' && <p>Error loading uploader</p>}
          {uploadStatus === 'ready' && uploadUrl ? (
            <MuxUploader
                endpoint={uploadUrl}
                onSuccess={startPolling}
            />
          ) : (
            <p>Loading uploader...</p>
          )}
          {isPolling && <p>Processing...</p>}
          <TextField
            margin="dense"
            name="file_url"
            label="File URL"
            type="text"
            fullWidth
            value={formData.file_url || ""}
            onChange={handleChange}
            disabled
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