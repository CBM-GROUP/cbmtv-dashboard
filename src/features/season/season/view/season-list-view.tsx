import type { ChangeEvent } from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { useParams } from "next/navigation";

import apiClient from "src/services/api";

import { useAuth } from "src/features/auth/context";

interface Season {
  id: string;
  title: string;
  season_number: number;
}

export function SeasonListView() {
  const { user } = useAuth()!;
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
      const response = await apiClient.get(
        `/api/content/seasons/?content=${contentId}`,
      );
      setSeasons(response.data);
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
        : { title: "", season_number: null },
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

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
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
        <Typography variant="h4">Seasons</Typography>
        {user?.role === "admin" && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpen()}
          >
            Create Season
          </Button>
        )}
      </Box>
      <TableContainer component={Card}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Season Number</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {seasons
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.season_number}</TableCell>
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
                    <Button
                      size="small"
                      component={Link}
                      href={`/season/${item.id}/episodes`}
                    >
                      Manage Episodes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={seasons.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editItem ? "Edit Season" : "Create Season"}</DialogTitle>
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
            name="season_number"
            label="Season Number"
            type="number"
            fullWidth
            value={formData.season_number || ""}
            onChange={handleChange}
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
