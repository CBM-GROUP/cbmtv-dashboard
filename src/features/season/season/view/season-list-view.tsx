import type { ChangeEvent } from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FormDialog } from "@/components/form-dialog";
import { FormField } from "@/components/form-field";
import { DataTablePagination } from "@/components/data-table-pagination";
import { PageHeader, PageShell } from "@/components/page-shell";

import apiClient from "src/services/api";
import { fetchAllPages } from "src/services/fetchAllPages";

interface Season {
  id: string;
  title: string;
  season_number: number;
}

export function SeasonListView() {
  const { contentId } = useParams();
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState<Season | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    season_number: null as number | null,
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchSeasons = async () => {
    try {
      setSeasons(await fetchAllPages<Season>(
        apiClient, `/api/content/seasons/?content=${contentId}&scope=dashboard`,
      ));
    } catch (error) {
      console.error("Failed to fetch seasons", error);
    }
  };

  useEffect(() => {
    fetchSeasons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentId]);

  const handleOpen = (item: Season | null = null) => {
    setEditItem(item);
    setFormData(
      item
        ? { title: item.title, season_number: item.season_number }
        : { title: "", season_number: null }
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

  const handleChangeRowsPerPage = (value: number) => {
    setRowsPerPage(value);
    setPage(0);
  };

  const handleSubmit = async () => {
    const data = { ...formData, content: contentId };
    try {
      if (editItem) {
        await apiClient.patch(`/api/content/seasons/${editItem.id}/`, data);
      } else {
        await apiClient.post("/api/content/seasons/", data);
      }
      fetchSeasons();
      handleClose();
    } catch (error) {
      console.error("Failed to save season", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await apiClient.delete(`/api/content/seasons/${id}/`);
      fetchSeasons();
    } catch (error) {
      console.error("Failed to delete season", error);
    }
  };

  const rows = seasons.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <PageShell>
      <PageHeader
        title="Seasons"
        description="Seasons of this series. Open one to manage its episodes."
        actions={
          <Button onClick={() => handleOpen()}>
            <PlusIcon />
            Create Season
          </Button>
        }
      />
      <Card className="gap-0 py-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="pl-4">Title</TableHead>
              <TableHead>Season Number</TableHead>
              <TableHead className="pr-4 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
                  No seasons yet.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="pl-4 font-medium">{item.title}</TableCell>
                  <TableCell className="tabular-nums">{item.season_number}</TableCell>
                  <TableCell className="pr-4">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="sm" onClick={() => handleOpen(item)}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        nativeButton={false}
                        render={<Link href={`/season/${item.id}/episodes`} />}
                      >
                        Manage Episodes
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <DataTablePagination
          count={seasons.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={setPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>

      <FormDialog
        open={open}
        onClose={handleClose}
        title={editItem ? "Edit Season" : "Create Season"}
        footer={
          <>
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Save</Button>
          </>
        }
      >
        <FormField label="Title" htmlFor="season-title">
          <Input id="season-title" autoFocus name="title" value={formData.title} onChange={handleChange} />
        </FormField>
        <FormField label="Season Number" htmlFor="season-number">
          <Input
            id="season-number"
            name="season_number"
            type="number"
            value={formData.season_number || ""}
            onChange={handleChange}
          />
        </FormField>
      </FormDialog>
    </PageShell>
  );
}
