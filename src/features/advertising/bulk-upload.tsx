'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useMediaUpload } from '@/hooks/use-media-upload';
import { AdRecord, advertisingError, advertisingService as api } from '@/services/advertisingService';
import { EntityPicker } from './entity-picker';

type UploadRow = { key: string; file: File; name: string; destination_url: string; cta: string;
  state: 'waiting' | 'uploading' | 'saving' | 'saved' | 'failed' | 'check'; error?: string; savedId?: number;
  payload?: AdRecord; confirm?: (saved: unknown, endpoint: string, field: string) => boolean };
const imageTypes = new Set(['image/jpeg', 'image/png', 'image/webp']);
const videoTypes = new Set(['video/mp4', 'video/x-m4v', 'video/quicktime', 'video/webm']);

export function BulkUpload({ onSaved, canCreateClient, canCreateCampaign }: {
  onSaved: () => void; canCreateClient: boolean; canCreateCampaign: boolean }) {
  const [client, setClient] = useState('');
  const [campaign, setCampaign] = useState('');
  const [newClient, setNewClient] = useState('');
  const [newCampaign, setNewCampaign] = useState('');
  const [creationError, setCreationError] = useState('');
  const [rows, setRows] = useState<UploadRow[]>([]);
  const [running, setRunning] = useState(false);
  const locked = running || rows.some(row => row.state === 'saved' || row.state === 'check');
  const video = useMediaUpload('video', { purpose: 'protected', label: 'Advertising creative' });
  const change = (key: string, patch: Partial<UploadRow>) => setRows(old => old.map(row => row.key === key ? { ...row, ...patch } : row));
  const upload = async (row: UploadRow) => {
    if (!client || row.savedId) return;
    let createStarted = false;
    try {
      let payload = row.payload;
      let confirm = row.confirm;
      if (!payload) {
        change(row.key, { state: 'uploading', error: '' });
        const kind = imageTypes.has(row.file.type) ? 'image' : 'video';
        let image: string | null = null;
        let media: string | null = null;
        if (kind === 'image') image = (await api.uploadImage(row.file)).id;
        else {
          if (row.file.size > 1024 ** 3) throw new Error('Videos must be no larger than 1 GiB.');
          const proof = await video.uploadWithProof(row.file);
          media = (await api.media(proof.url)).media_id ?? null;
          if (!media) throw new Error('The protected video media record is unavailable.');
          confirm = proof.confirm;
        }
        payload = { name: row.name, advertiser: Number(client), campaign: campaign ? Number(campaign) : null,
          kind, image, media, destination_url: row.destination_url, cta: row.cta };
        change(row.key, { payload, confirm });
      }
      change(row.key, { state: 'saving' });
      createStarted = true;
      const saved = await api.save('creatives', payload, row.key);
      change(row.key, { state: 'saved', savedId: saved.id });
      if (confirm) confirm(saved, `/api/advertising/creatives/${saved.id}/`, 'media_reference');
      onSaved();
    } catch (cause) {
      const response = (cause as { response?: { status?: number } })?.response;
      const uncertain = createStarted && (!response || !response.status || response.status >= 500);
      change(row.key, { state: uncertain ? 'check' : 'failed', error: uncertain
        ? 'Save result is uncertain. Retry safely with the same request key.' : advertisingError(cause) });
    }
  };
  return <Card className="grid gap-4 p-5">
    <div><h2 className="font-semibold">Upload creatives</h2><p className="text-sm text-muted-foreground">Each file becomes a separate Draft creative. Placement and schedule can be set later.</p></div>
    <div className="grid gap-3 sm:grid-cols-2"><EntityPicker resource="advertisers" label="Client" value={client ? Number(client) : null} disabled={locked} emptyLabel="Select client" onChange={id => { setClient(id ? String(id) : ''); setCampaign(''); }} />
      <EntityPicker resource="campaigns" label="Campaign (optional)" value={campaign ? Number(campaign) : null} disabled={locked || !client} filters={{ advertiser: Number(client) || undefined }} emptyLabel="Direct client creative" onChange={id => setCampaign(id ? String(id) : '')} /></div>
    {creationError && <p role="alert" className="text-sm text-destructive">{creationError}</p>}
    {canCreateClient && <div className="flex flex-wrap gap-2"><Input className="max-w-sm" aria-label="New client name" placeholder="New client name" value={newClient} disabled={locked} onChange={event => setNewClient(event.target.value)} /><Button variant="outline" disabled={!newClient.trim() || locked} onClick={() => { setRunning(true); setCreationError(''); void api.save('advertisers', { name: newClient.trim(), active: true }).then(saved => { setClient(String(saved.id)); setCampaign(''); setNewClient(''); onSaved(); }).catch(cause => setCreationError(advertisingError(cause))).finally(() => setRunning(false)); }}>Create client</Button></div>}
    {canCreateCampaign && <div className="flex flex-wrap gap-2"><Input className="max-w-sm" aria-label="New campaign name" placeholder="New campaign name (optional)" value={newCampaign} disabled={locked} onChange={event => setNewCampaign(event.target.value)} /><Button variant="outline" disabled={!client || !newCampaign.trim() || locked} onClick={() => { setRunning(true); setCreationError(''); void api.save('campaigns', { name: newCampaign.trim(), advertiser: Number(client), placements: [] }).then(saved => { setCampaign(String(saved.id)); setNewCampaign(''); onSaved(); }).catch(cause => setCreationError(advertisingError(cause))).finally(() => setRunning(false)); }}>Create campaign</Button></div>}
    <Input aria-label="Select creative files" type="file" multiple accept="image/jpeg,image/png,image/webp,video/mp4,video/x-m4v,video/quicktime,video/webm" onChange={event => {
      const selected = Array.from(event.target.files ?? []).filter(file => imageTypes.has(file.type) || videoTypes.has(file.type));
      setRows(old => [...old, ...selected.map(file => ({ key: crypto.randomUUID(), file, name: file.name.replace(/\.[^.]+$/, ''), destination_url: '', cta: '', state: 'waiting' as const }))]);
      event.target.value = '';
    }} />
    {rows.map(row => <div key={row.key} className="grid gap-2 rounded border p-3 sm:grid-cols-3"><div className="sm:col-span-3"><strong>{row.file.name}</strong> · {row.state === 'waiting' ? 'Ready' : row.state}{row.savedId ? ` · Creative #${row.savedId}` : ''}{row.error && <p role="alert" className="text-sm text-destructive">{row.error}</p>}</div>
      <Input aria-label={`Name for ${row.file.name}`} value={row.name} disabled={running || row.state === 'saved' || Boolean(row.payload)} onChange={event => change(row.key, { name: event.target.value })} />
      <Input aria-label={`Destination for ${row.file.name}`} type="url" placeholder="HTTPS destination (optional)" value={row.destination_url} disabled={running || row.state === 'saved' || Boolean(row.payload)} onChange={event => change(row.key, { destination_url: event.target.value })} />
      <Input aria-label={`CTA for ${row.file.name}`} placeholder="CTA (optional)" value={row.cta} disabled={running || row.state === 'saved' || Boolean(row.payload)} onChange={event => change(row.key, { cta: event.target.value })} />
      {(row.state === 'failed' || row.state === 'check') && <Button className="w-fit sm:col-span-3" variant="outline" disabled={running || !client} onClick={() => { setRunning(true); void upload(row).finally(() => setRunning(false)); }}>Retry this file</Button>}</div>)}
    {locked && !running && <Button className="w-fit" variant="outline" onClick={() => { setRows([]); setClient(''); setCampaign(''); video.reset(); }}>Start another batch</Button>}
    <Button disabled={!client || running || !rows.some(row => row.state === 'waiting' || row.state === 'failed')} onClick={() => { void (async () => { setRunning(true); try { for (const row of rows.filter(item => item.state === 'waiting' || item.state === 'failed')) await upload(row); } finally { setRunning(false); } })(); }}>{running ? 'Uploading…' : 'Upload and save'}</Button>
  </Card>;
}
