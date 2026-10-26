import type { ChangeEvent } from "react";

import { useState, useEffect, useRef } from "react";
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
import { FormField, StatusAlert } from "@/components/form-field";
import { PageHeader, PageShell } from "@/components/page-shell";

import apiClient from "src/services/api";
import { createRecord } from '@/services/createRecord';
import { fetchAllPages } from "src/services/fetchAllPages";

import { useSelectedVideo } from "@/hooks/use-selected-video";

interface Episode {
  id: string;
  title: string;
  episode_number: number;
  streaming_link: string;
}

export function EpisodeListView() {
  const { seasonId } = useParams();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState<Episode | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    episode_number: null as number | null,
    streaming_link: "",
  });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const savedId = useRef<string | null>(null);
  const creationKey = useRef('');
  const video = useSelectedVideo(open);

  const fetchEpisodes = async () => {
    try {
      setEpisodes(await fetchAllPages<Episode>(apiClient, `/api/content/episodes/?season=${seasonId}&scope=dashboard`));
    } catch {
      console.error("Failed to fetch episodes");
    }
  };

  useEffect(() => {
    fetchEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seasonId]);

  const handleOpen = (item: Episode | null = null) => {
    creationKey.current = crypto.randomUUID();
    savedId.current = null;
    setSaveError('');
    video.select(null);
    setEditItem(item);
    setFormData(
      item
        ? {
            title: item.title,
            episode_number: item.episode_number,
            streaming_link: item.streaming_link || "",
          }
        : { title: "", episode_number: null, streaming_link: "" }
    );
    setOpen(true);
  };

  const handleClose = () => {
    if (saving) return;
    setOpen(false);
    setEditItem(null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (saving || video.metadata.loading) return;
    if (!formData.title.trim() || !Number.isInteger(Number(formData.episode_number)) || Number(formData.episode_number) <= 0) {
      setSaveError('Add an episode title and positive episode number.');
      return;
    }
    setSaving(true);
    setSaveError('');
    try {
      const data = { ...formData, season: seasonId, ...await video.uploadForSave() };
      const id = editItem?.id ?? savedId.current;
      const response = id ? await apiClient.patch<Episode>(`/api/content/episodes/${id}/`, data)
        : { data: await createRecord<Episode>('/api/content/episodes/', data, creationKey.current) };
      if (!/^[1-9]\d*$/.test(String(response.data?.id)) || (id && String(response.data.id) !== String(id))) throw new Error('The saved episode could not be confirmed. Inspect the episode list before retrying.');
      savedId.current = response.data.id;
      video.confirmSaved(response.data, `/api/content/episodes/${response.data.id}/`);
      void fetchEpisodes();
      setOpen(false);
      setEditItem(null);
    } catch {
      setSaveError('Episode save or media confirmation failed. Uploaded files are retained for retry. If the request response was lost, inspect the episode list before retrying creation.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await apiClient.delete(`/api/content/episodes/${id}/`);
      fetchEpisodes();
    } catch {
      console.error("Failed to delete episode");
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
            <Button variant="outline" onClick={handleClose} disabled={saving}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={saving || video.metadata.loading}>{saving ? 'Uploading and saving…' : 'Save'}</Button>
          </>
        }
      >
        {saveError && <StatusAlert>{saveError}</StatusAlert>}
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
        <FormField label="Episode Video" htmlFor="episode-video">
          <Input id="episode-video" type="file" accept="video/mp4,video/x-m4v,video/quicktime,video/webm" disabled={saving}
            onChange={(event) => { video.select(event.target.files?.[0] ?? null); event.target.value = ''; }} />
          <p className="text-xs text-muted-foreground" role="status">{video.file
            ? `${video.file.name}. ${video.metadata.loading ? 'Reading video details…' : video.metadata.duration ? 'Duration detected.' : 'Duration unavailable; it will remain unknown.'}`
            : formData.streaming_link || 'Select a video. Upload starts on Save.'}</p>
        </FormField>
      </FormDialog>
    </PageShell>
  );
}
