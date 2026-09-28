import type { ChangeEvent } from "react";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormDialog } from "@/components/form-dialog";
import { FormField } from "@/components/form-field";
import { PageHeader, PageShell } from "@/components/page-shell";

import apiClient from "src/services/api";

import { useMediaUpload } from "@/hooks/use-media-upload";
import { VideoUploader } from "@/components/video-uploader";

interface Episode {
  id: string;
  title: string;
  episode_number: number;
  file_url: string;
}

export function EpisodeListView() {
  const { seasonId } = useParams();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState<Episode | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    episode_number: null as number | null,
    file_url: "",
  });

  // In edit mode the episode exists, so a finished upload can write its own
  // URL onto the record and the dialog is free to close.
  const uploader = useMediaUpload("video", {
    label: editItem ? `Episode - ${editItem.title}` : "Episode video",
    attach: editItem
      ? { endpoint: `/api/content/episodes/${editItem.id}/`, field: "file_url" }
      : undefined,
  });

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
    <PageShell>
      <PageHeader
        title="Episodes"
        description="Episodes in this season."
        actions={
          <Button onClick={() => handleOpen()}>
            <PlusIcon />
            Create Episode
          </Button>
        }
      />
      {episodes.length === 0 ? (
        <div className="flex min-h-40 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
          No episodes yet.
        </div>
      ) : (
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
          {episodes.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>Episode {item.episode_number}</CardDescription>
              </CardHeader>
              <CardFooter className="justify-end gap-1">
                <Button variant="ghost" size="sm" onClick={() => handleOpen(item)}>
                  Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <FormDialog
        open={open}
        onClose={handleClose}
        title={editItem ? "Edit Episode" : "Create Episode"}
        footer={
          <>
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Save</Button>
          </>
        }
      >
        <FormField label="Title" htmlFor="episode-title">
          <Input id="episode-title" autoFocus name="title" value={formData.title} onChange={handleChange} />
        </FormField>
        <FormField label="Episode Number" htmlFor="episode-number">
          <Input
            id="episode-number"
            name="episode_number"
            type="number"
            value={formData.episode_number || ""}
            onChange={handleChange}
          />
        </FormField>
        <VideoUploader
          label="Episode Video"
          status={uploader.status}
          progress={uploader.progress}
          error={uploader.error}
          finalUrl={formData.file_url}
          onUpload={uploader.uploadFile}
        />
      </FormDialog>
    </PageShell>
  );
}
