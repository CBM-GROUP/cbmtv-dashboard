import { useState, useEffect, useCallback } from "react";
import { PlusIcon } from "lucide-react";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "@/components/data-table-pagination";
import { PageHeader, PageShell } from "@/components/page-shell";

import { formatDuration } from "src/utils/format-time";
import { miniseriesEpisodeService } from "src/services/miniseriesEpisodeService";

import { MiniseriesEpisodeForm } from "./miniseries-episode-form";

import { Episode } from "@/types";
import { RemoteThumbnail } from "src/components/remote-thumbnail";

dayjs.extend(duration);

interface MiniseriesEpisodeListViewProps {
  contentId: string;
}

export function MiniseriesEpisodeListView({
  contentId,
}: MiniseriesEpisodeListViewProps) {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState<Episode | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangeRowsPerPage = (value: number) => {
    setRowsPerPage(value);
    setPage(0);
  };

  const fetchEpisodes = useCallback(async () => {
    if (!contentId) return;
    try {
      const data = await miniseriesEpisodeService.getMiniseriesEpisodes(
        contentId
      );
      setEpisodes(data);
    } catch (error) {
      console.error("Failed to fetch episodes", error);
    }
  }, [contentId]);

  useEffect(() => {
    fetchEpisodes();
  }, [contentId, fetchEpisodes]);

  const handleOpen = (item: Episode | null = null) => {
    setEditItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditItem(null);
  };

  const handleSave = () => {
    fetchEpisodes();
  };

  const handleDelete = async (id: string) => {
    try {
      await miniseriesEpisodeService.deleteMiniseriesEpisode(id);
      fetchEpisodes();
    } catch (error) {
      console.error("Failed to delete episode", error);
    }
  };

  const rows = episodes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <PageShell>
      <PageHeader
        title="Miniseries Episodes"
        description="Episodes that make up this miniseries."
        actions={
          <Button onClick={() => handleOpen()}>
            <PlusIcon />
            Create Episode
          </Button>
        }
      />

      <Card className="gap-0 py-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-24 pl-4">Thumbnail</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Episode Number</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead className="pr-4 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  No episodes yet.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="pl-4">
                    <RemoteThumbnail src={item.thumbnail} label={item.title} />
                  </TableCell>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell className="tabular-nums">{item.miniseries_no}</TableCell>
                  <TableCell className="tabular-nums">{formatDuration(item.duration)}</TableCell>
                  <TableCell className="pr-4">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="sm" onClick={() => handleOpen(item)}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <DataTablePagination
          count={episodes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={setPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>

      <MiniseriesEpisodeForm
        open={open}
        onClose={handleClose}
        item={editItem}
        contentId={contentId}
        onSave={handleSave}
      />
    </PageShell>
  );
}
