import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

import { useAuth } from 'src/features/auth/context';
import { channelService } from 'src/services/channelService';

import { Channel } from '@/types';

import { ChannelForm } from './channel-form';

export function ChannelListView() {
  const { user, loading } = useAuth()!;
  const [channels, setChannels] = useState<Channel[]>([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState<Channel | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const fetchChannels = async () => {
    try {
      const data = await channelService.getChannels();
      setChannels(data);
    } catch (error) {
      console.error('Failed to fetch channels', error);
    }
  };

  useEffect(() => {
    if (!loading && user) {
      fetchChannels();
    }
  }, [loading, user]);

  const handleOpen = (item: Channel | null = null) => {
    setEditItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditItem(null);
  };

  const handleSave = () => {
    fetchChannels();
  };

  const handleDelete = async (id: string) => {
    try {
      await channelService.deleteChannel(id);
      fetchChannels();
    } catch (error) {
      console.error('Failed to delete channel', error);
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
          {/*<Typography variant="h4">Channels</Typography>*/}
          <TextField
            label="Search Channels"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ minWidth: 240 }}
          />
        </Box>
        
          <Button variant="contained" color="primary" onClick={() => handleOpen()}>
            Create Channel
          </Button>
        
      </Box>
      <TableContainer component={Card}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Logo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {channels
              .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Image
                      src={item.cover_image_url}
                      alt={item.name}
                      width={50}
                      height={50}
                      style={{
                        borderRadius: 8,
                        objectFit: 'cover',
                      }}
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    
                      <>
                        <Button size="small" onClick={() => handleOpen(item)}>
                          Edit
                        </Button>
                        <Button size="small" color="error" onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                        <Button
                          size="small"
                          component={Link}
                          href={`/content-list?channel=${item.id}`}
                        >
                          View
                        </Button>
                      </>
                    
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={channels.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <ChannelForm open={open} onClose={handleClose} item={editItem} onSave={handleSave} />
    </Box>
  );
}
