import { useState, useEffect } from 'react';
import { PlusIcon, SearchIcon } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
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
import { DataTablePagination } from '@/components/data-table-pagination';
import { PageHeader, PageShell, PageToolbar } from '@/components/page-shell';

import { advertService } from 'src/services/advertService';

import { Advert } from "@/types";

import { AdvertForm } from "./advert-form";

export function AdvertListView() {
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

  const handleChangeRowsPerPage = (value: number) => {
    setRowsPerPage(value);
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

  const rows = adverts
    .filter((item) => item.advert_name.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <PageShell>
      <PageHeader
        title="Adverts"
        description="Manage adverts and the image or video slides shown on the homepage."
        actions={
          <>
            <Link href="/hero-settings" className={buttonVariants({ variant: 'outline' })}>Hero settings</Link>
            <Button onClick={() => handleOpen()}><PlusIcon />Create Advert</Button>
          </>
        }
      />
      <PageToolbar>
        <div className="relative w-full sm:w-64">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            aria-label="Search Adverts"
            placeholder="Search adverts..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </PageToolbar>
      <Card className="gap-0 py-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="pl-4">Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="pr-4 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                  No adverts found.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="pl-4 font-medium">{item.advert_name}</TableCell>
                  <TableCell className="max-w-xs truncate text-muted-foreground">
                    {item.advert_description}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="capitalize">{item.advert_type}</Badge>
                      {item.show_in_hero !== false && <Badge variant="outline">Hero #{item.hero_order ?? 0}</Badge>}
                    </div>
                  </TableCell>
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
          count={adverts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={setPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>

      <AdvertForm open={open} onClose={handleClose} item={editItem} onSave={handleSave} />
    </PageShell>
  );
}
