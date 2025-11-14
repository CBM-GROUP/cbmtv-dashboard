import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';

import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';


import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';


import { useAuth } from 'src/features/auth/context';
import { advertService } from 'src/services/advertService';

import { Advert } from "@/types";

import { AdvertForm } from "./advert-form";

export function AdvertListView() {
  const { user } = useAuth()!;
  const [adverts, setAdverts] = useState<Advert[]>([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState<Advert | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchAdverts = async () => {
    try {
      const data = await advertService.getAdverts();
      setAdverts(data);
    } catch (error) {
      console.error('Failed to fetch adverts', error);
    }
  };

  useEffect(() => {
    fetchAdverts();
  }, []);

  const handleOpen = (item: Advert | null = null) => {
    setEditItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditItem(null);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSave = () => {
    fetchAdverts();
  };

  const handleDelete = async (id: string) => {
    try {
      await advertService.deleteAdvert(id);
      fetchAdverts();
    } catch (error) {
      console.error('Failed to delete advert', error);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {/*<Typography variant="h4">Adverts</Typography>*/}
          <TextField
            label="Search Adverts"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ minWidth: 240 }}
          />
        </Box>
        
          <Button variant="contained" color="primary" onClick={() => handleOpen()}>
            Create Advert
          </Button>
       
      </Box>
      <TableContainer component={Card}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adverts
              .filter((item) => item.advert_name.toLowerCase().includes(searchQuery.toLowerCase()))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.advert_name}</TableCell>
                  <TableCell>{item.advert_description}</TableCell>
                  <TableCell>{item.advert_type}</TableCell>
                  <TableCell>
                    <Button size="small" onClick={() => handleOpen(item)}>
                      Edit
                    </Button>
                    <Button size="small" color="error" onClick={() => handleDelete(item.id)}>
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
          count={adverts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <AdvertForm open={open} onClose={handleClose} item={editItem} onSave={handleSave} />
    </Box>
  );
}
