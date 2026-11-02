"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormDialog } from '@/components/form-dialog';
import { FormField, StatusAlert } from '@/components/form-field';
import { PageHeader, PageShell, PageToolbar } from '@/components/page-shell';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { contentService } from '@/services/contentService';
import { genreService, type GenreInput } from '@/services/genreService';
import { getApiErrorMessage } from '@/services/apiError';
import type { CategoryOption, ContentCategory, Genre } from '@/types';

const emptyForm = (): GenreInput => ({
  name: '', description: '', categories: [], parent: null, is_active: true,
});

export default function GenreManagementPage() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState<Genre | null>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<GenreInput>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [listError, setListError] = useState('');

  const reload = async () => {
    try {
      const [rows, choices] = await Promise.all([genreService.getGenres(), contentService.getCategories()]);
      setGenres(rows);
      setCategories(choices);
      setListError('');
    } catch (cause) {
      setListError(getApiErrorMessage(cause, 'Could not load genres.'));
    }
  };

  useEffect(() => { void reload(); }, []);

  const startEdit = (genre: Genre | null) => {
    setEditing(genre);
    setForm(genre ? {
      name: genre.name, description: genre.description, categories: [...genre.categories],
      parent: genre.parent, is_active: genre.is_active,
    } : emptyForm());
    setError('');
    setOpen(true);
  };

  const save = async () => {
    if (saving) return;
    if (!form.name.trim() || form.categories.length === 0) {
      setError('Add a name and select at least one applicable category.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      if (editing) await genreService.update(editing.id, form);
      else await genreService.create(form);
      setOpen(false);
      await reload();
    } catch (cause) {
      setError(getApiErrorMessage(cause, 'Could not save genre.'));
    } finally {
      setSaving(false);
    }
  };

  const filtered = genres.filter((genre) =>
    `${genre.name} ${genre.description}`.toLowerCase().includes(query.toLowerCase()));
  const parentItems = [{ value: 'none', label: 'No parent' }, ...genres
    .filter((genre) => genre.parent === null && genre.id !== editing?.id)
    .map((genre) => ({ value: String(genre.id), label: genre.name }))];

  return <PageShell>
    <PageHeader title="Genre Management" description="Manage genres and one level of subgenres for the four content categories."
      actions={<>
        <Button variant="outline" nativeButton={false} render={<Link href="/content-list" />}>Back to Content</Button>
        <Button onClick={() => startEdit(null)}>Create Genre</Button>
      </>} />
    {listError && <StatusAlert variant="error">{listError}</StatusAlert>}
    <PageToolbar><Input aria-label="Search genres" placeholder="Search genres..." value={query}
      onChange={(event) => setQuery(event.target.value)} className="w-full sm:max-w-sm" /></PageToolbar>
    <Card className="gap-0 py-0"><Table>
      <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Description</TableHead>
        <TableHead>Categories</TableHead><TableHead>Parent</TableHead><TableHead>Titles</TableHead>
        <TableHead>Status</TableHead><TableHead className="text-right">Action</TableHead></TableRow></TableHeader>
      <TableBody>{filtered.length ? filtered.map((genre) => <TableRow key={genre.id}>
        <TableCell className="font-medium">{genre.name}</TableCell>
        <TableCell>{genre.description || '—'}</TableCell>
        <TableCell>{genre.categories.map((id) => categories.find((category) => category.id === id)?.label ?? id).join(', ')}</TableCell>
        <TableCell>{genres.find((candidate) => candidate.id === genre.parent)?.name ?? '—'}</TableCell>
        <TableCell>{genre.used_count}</TableCell>
        <TableCell>{genre.is_active ? 'Active' : 'Inactive'}</TableCell>
        <TableCell className="text-right"><Button variant="outline" size="sm" onClick={() => startEdit(genre)}>Edit</Button></TableCell>
      </TableRow>) : <TableRow><TableCell colSpan={7} className="h-24 text-center">No genres found.</TableCell></TableRow>}</TableBody>
    </Table></Card>
    <FormDialog open={open} onClose={() => { if (!saving) setOpen(false); }}
      title={editing ? `Edit ${editing.name}` : 'Create Genre'}
      description="Deactivate a genre to stop new assignments while keeping existing titles."
      footer={<><Button variant="outline" disabled={saving} onClick={() => setOpen(false)}>Cancel</Button>
        <Button disabled={saving} onClick={() => void save()}>{saving ? 'Saving...' : 'Save Genre'}</Button></>}>
      {error && <StatusAlert variant="error">{error}</StatusAlert>}
      <FormField label="Name" htmlFor="genre-name"><Input id="genre-name" value={form.name}
        onChange={(event) => setForm((previous) => ({ ...previous, name: event.target.value }))} /></FormField>
      <FormField label="Description" htmlFor="genre-description"><Input id="genre-description" value={form.description}
        onChange={(event) => setForm((previous) => ({ ...previous, description: event.target.value }))} /></FormField>
      <div className="space-y-2"><p className="text-sm font-medium">Applicable categories</p>
        <div className="grid gap-2 sm:grid-cols-2">{categories.map((category) => <label key={category.id} className="flex items-center gap-2 text-sm">
          <Checkbox checked={form.categories.includes(category.id)} disabled={saving}
            onCheckedChange={(checked) => setForm((previous) => ({ ...previous,
              categories: checked === true
                ? [...previous.categories, category.id]
                : previous.categories.filter((id: ContentCategory) => id !== category.id),
            }))} />{category.label}
        </label>)}</div>
      </div>
      <FormField label="Parent genre (optional)" htmlFor="genre-parent">
        <Select items={parentItems} value={form.parent === null ? 'none' : String(form.parent)}
          onValueChange={(value) => setForm((previous) => ({ ...previous,
            parent: value === 'none' || value === null ? null : Number(value),
          }))}>
          <SelectTrigger id="genre-parent" className="w-full"><SelectValue /></SelectTrigger>
          <SelectContent>{parentItems.map((item) => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}</SelectContent>
        </Select>
      </FormField>
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={form.is_active} disabled={saving}
        onCheckedChange={(checked) => setForm((previous) => ({ ...previous, is_active: checked === true }))} />Active</label>
    </FormDialog>
  </PageShell>;
}
