import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Typography from "@mui/material/Typography";
import TablePagination from "@mui/material/TablePagination";

import { formatDuration } from "src/utils/format-time";
import { useAuth } from "src/features/auth/context";
import { miniseriesEpisodeService } from "src/services/miniseriesEpisodeService";

import { MiniseriesEpisodeForm } from "./miniseries-episode-form";

import { Episode } from "@/types";

dayjs.extend(duration);

interface MiniseriesEpisodeListViewProps {
  contentId: string;
}

export function MiniseriesEpisodeListView({
  contentId,
}: MiniseriesEpisodeListViewProps) {
  const { user } = useAuth()!;
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState<Episode | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
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
        <Typography variant="h4">Miniseries Episodes</Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen()}
        >
          Create Episode
        </Button>
      </Box>

      <TableContainer component={Card}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Thumbnail</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Episode Number</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={80}
                      height={45}
                      style={{ borderRadius: 4, objectFit: "cover" }}
                    />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.miniseries_no}</TableCell>
                  <TableCell>{formatDuration(item.duration)}</TableCell>
                  <TableCell>
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
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={episodes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <MiniseriesEpisodeForm
        open={open}
        onClose={handleClose}
        item={editItem}
        contentId={contentId}
        onSave={handleSave}
      />
    </Box>
  );
}
