import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PlusIcon, SearchIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { StatusAlert } from '@/components/form-field';
import { DataTablePagination } from '@/components/data-table-pagination';
import { PageHeader, PageShell, PageToolbar } from '@/components/page-shell';

import { useAuth } from 'src/features/auth/context';
import { channelService } from 'src/services/channelService';
import { getApiErrorMessage } from 'src/services/apiError';

import { RemoteThumbnail } from 'src/components/remote-thumbnail';

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
  const [error, setError] = useState<string | null>(null);

  const handleChangeRowsPerPage = (value: number) => {
    setRowsPerPage(value);
    setPage(0);
  };

  const fetchChannels = async () => {
    try {
      const data = await channelService.getChannels();
      setChannels(data);
      setError(null);
    } catch (err) {
      // Without this the table just renders empty on a failed load, which
      // reads as "no channels yet" and invites duplicate-name create attempts.
      const message = getApiErrorMessage(err, 'Failed to load channels');
      console.error('Failed to fetch channels', message, err);
      setError(message);
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
    } catch (err) {
      const message = getApiErrorMessage(err, 'Failed to delete channel');
      console.error('Failed to delete channel', message, err);
      setError(message);
    }
  };

  const rows = channels
    .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <PageShell>
      <PageHeader
        title="Channels"
        description="Channels group content in the CBM TV catalogue."
        actions={
          <Button onClick={() => handleOpen()}>
            <PlusIcon />
            Create Channel
          </Button>
        }
      />
      <PageToolbar>
        <div className="relative w-full sm:w-64">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            aria-label="Search Channels"
            placeholder="Search channels..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </PageToolbar>
      {error && <StatusAlert onDismiss={() => setError(null)}>{error}</StatusAlert>}
      <Card className="gap-0 py-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-20 pl-4">Logo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="pr-4 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
                  No channels found.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="pl-4">
                    <RemoteThumbnail
                      src={item.cover_image_url}
                      label={item.name}
                      width={50}
                      height={50}
                      borderRadius={8}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
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
                        render={<Link href={`/content-list?channel=${item.id}`} />}
                      >
                        View
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <DataTablePagination
          count={channels.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={setPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>

      <ChannelForm open={open} onClose={handleClose} item={editItem} onSave={handleSave} />
    </PageShell>
  );
}
