'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { PageHeader, PageShell } from '@/components/page-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormField, StatusAlert } from '@/components/form-field';
import { VideoUploader } from '@/components/video-uploader';
import { useMediaUpload } from '@/hooks/use-media-upload';
import { useAuth } from '@/features/auth/context';
import { advertisingService as api, advertisingError, workflowActions, campaignPayloadValid, type Resource, type AdRecord, type AdReport, type TargetOptions } from '@/services/advertisingService';

const tabs = ['Overview', 'Advertisers', 'Campaigns', 'Creatives', 'Placements', 'Reports'] as const;
type Tab = typeof tabs[number];
const resources: Resource[] = ['advertisers', 'campaigns', 'creatives', 'placements'];
type Data = Record<Resource, AdRecord[]>;
const empty: Data = { advertisers: [], campaigns: [], creatives: [], placements: [] };
const text = (value: unknown) => value === null || value === undefined ? '—' : typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value);
const label = (value: string) => value.replaceAll('decision__', '').replaceAll('campaign__', '').replaceAll('advertiser__', '').replaceAll('_', ' ');
const inputClass = 'min-h-10 w-full rounded-md border bg-background px-3 text-sm';
const number = (value: unknown) => value === '' || value === undefined || value === null ? null : Number(value);

function Targeting({ value, onChange }: { value: unknown; onChange: (value: unknown) => void }) {
  const rules = (value ?? {}) as Record<string, (string | number)[]>;
  const [regions, setRegions] = useState((rules.regions ?? []).join(','));
  const [options, setOptions] = useState<TargetOptions | null>(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => { void api.targets(query, controller.signal).then(setOptions).catch(cause => { if (!controller.signal.aborted) setError(advertisingError(cause)); }); }, 250);
    return () => { controller.abort(); clearTimeout(timer); };
  }, [query]);
  return <fieldset className="col-span-full grid gap-3 rounded-lg border p-4"><legend className="px-2 font-medium">Contextual targeting</legend>
    <p className="text-sm text-muted-foreground">Empty groups match any context. Groups combine with AND; choices within a group combine with OR. Homepage placements cannot match title metadata targets.</p>
    <Input aria-label="Search targeting options" placeholder="Find categories, genres, channels or titles" value={query} onChange={event => setQuery(event.target.value)} />
    {error && <StatusAlert>{error}</StatusAlert>}
    <div className="grid gap-3 sm:grid-cols-2">{(['categories', 'genres', 'channels', 'contents'] as const).map(key => <fieldset key={key} className="rounded border p-3"><legend>{label(key)}</legend>
      <p className="text-xs text-muted-foreground">Selected: {(rules[key] ?? []).join(', ') || 'Any'}</p><div className="max-h-40 space-y-1 overflow-auto">{options?.[key].map(option => <label key={option.id} className="flex min-h-8 items-center gap-2 text-sm"><input type="checkbox" checked={(rules[key] ?? []).includes(option.id)} onChange={event => onChange({ ...rules, [key]: event.target.checked ? [...(rules[key] ?? []), option.id] : (rules[key] ?? []).filter(id => id !== option.id) })} />{option.name}</label>)}</div>
      <Button type="button" size="sm" variant="ghost" onClick={() => onChange({ ...rules, [key]: [] })}>Clear {key}</Button>
    </fieldset>)}</div>
    <FormField label="Permitted regions (optional, e.g. UG,KE)" htmlFor="regions"><Input id="regions" value={regions} onChange={event => { const raw = event.target.value.toUpperCase(); setRegions(raw); onChange({ ...rules, regions: raw.split(',').map(v => v.trim()).filter(Boolean) }); }} /></FormField>
    <p className="text-xs text-muted-foreground">Geographic campaigns require trusted country information from the server ingress.</p>
  </fieldset>;
}

function Editor({ resource, initial, data, onSaved, cancel }: { resource: Resource; initial: AdRecord; data: Data; onSaved: () => void; cancel: () => void }) {
  const [draft, setDraft] = useState<AdRecord>(initial);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [videoUrl, setVideoUrl] = useState(String(initial.media_reference ?? ''));
  const [breakpointText, setBreakpointText] = useState(((initial.breakpoints ?? []) as number[]).join(','));
  const upload = useMediaUpload('video', { purpose: 'protected', label: 'Advertising creative' });
  const set = (key: string, value: unknown) => setDraft(old => ({ ...old, [key]: value }));
  const field = (key: string, title: string, type = 'text', required = false) => <FormField key={key} label={title} htmlFor={`ad-${key}`}><Input id={`ad-${key}`} type={type} required={required} min={type === 'number' ? 0 : undefined} value={String(draft[key] ?? '')} onChange={event => set(key, type === 'number' ? number(event.target.value) : event.target.value)} /></FormField>;
  const select = (key: string, title: string, options: { id: string | number; name: string }[], nullable = false) => <FormField key={key} label={title} htmlFor={`ad-${key}`}><select className={inputClass} id={`ad-${key}`} required={!nullable} value={String(draft[key] ?? '')} onChange={event => set(key, event.target.value === '' ? null : options.some(row => typeof row.id === 'number') ? Number(event.target.value) : event.target.value)}><option value="">{nullable ? 'None' : 'Choose…'}</option>{options.map(row => <option key={row.id} value={row.id}>{row.name}</option>)}</select></FormField>;
  const placementPicker = <fieldset className="col-span-full rounded-lg border p-3"><legend className="px-2">Eligible placements</legend><div className="grid gap-2 sm:grid-cols-2">{data.placements.map(p => <label key={p.code} className="flex min-h-8 items-center gap-2 text-sm"><input type="checkbox" checked={((draft.placements ?? []) as string[]).includes(p.code!)} onChange={event => set('placements', event.target.checked ? [...((draft.placements ?? []) as string[]), p.code] : ((draft.placements ?? []) as string[]).filter(code => code !== p.code))} />{label(p.code!)}</label>)}</div></fieldset>;
  const uploadImage = async (file?: File) => {
    if (!file) return;
    setBusy(true); setError('');
    try { const result = await api.uploadImage(file); set('image', result.id); set('media', null); }
    catch (cause) { setError(advertisingError(cause)); }
    finally { setBusy(false); }
  };
  return <Card className="p-5"><h2 className="mb-3 text-lg font-semibold">{draft.id || draft.code ? 'Edit' : 'Create'} {resource.slice(0, -1)}</h2>
    {error && <StatusAlert>{error}</StatusAlert>}
    <form onSubmit={event => {
      event.preventDefault();
      if (resource === 'campaigns' && !campaignPayloadValid(draft)) { setError('Provide a name, advertiser, valid schedule and at least one placement.'); return; }
      setBusy(true); setError('');
      const payload = { ...draft };
      if (resource === 'campaigns') for (const key of ['starts_at', 'ends_at']) payload[key] = new Date(String(payload[key])).toISOString();
      void api.save(resource, payload).then(saved => { if (resource === 'creatives') upload.confirmSaved(saved, `/api/advertising/creatives/${saved.id}/`, 'media_reference'); onSaved(); }).catch(cause => setError(advertisingError(cause))).finally(() => setBusy(false));
    }}><fieldset disabled={busy || upload.status === 'uploading'} className="grid gap-4 border-0 sm:grid-cols-2">
      {resource !== 'placements' && field('name', 'Name', 'text', true)}
      {resource === 'advertisers' && <>{field('contact_name', 'Contact name')}{field('email', 'Contact email', 'email')}{field('phone', 'Contact phone')}{field('billing_reference', 'Billing reference')}<label className="flex items-center gap-2"><input type="checkbox" checked={Boolean(draft.active)} onChange={event => set('active', event.target.checked)} />Active advertiser</label></>}
      {resource === 'campaigns' && <>
        {select('advertiser', 'Advertiser', data.advertisers.map(a => ({ id: a.id!, name: a.name! })))}
        {field('description', 'Objective or description')}{field('starts_at', 'Starts (local time)', 'datetime-local', true)}{field('ends_at', 'Ends (local time)', 'datetime-local', true)}
        {field('priority', 'Priority (1–100)', 'number')}{field('impression_limit', 'Lifetime impression cap (blank = unlimited)', 'number')}{field('daily_limit', 'Daily UTC impression cap (blank = unlimited)', 'number')}{field('session_limit', 'Impressions per session (1–20)', 'number')}{field('skippable_after', 'Allow skip after seconds (blank = no skip)', 'number')}
        {placementPicker}<Targeting value={draft.targeting} onChange={value => set('targeting', value)} />
        <p className="col-span-full text-sm text-muted-foreground">Saving changes returns the campaign to Draft and pauses delivery. Submit for review, approve, then resume to activate.</p>
      </>}
      {resource === 'creatives' && <>
        {select('campaign', 'Campaign', data.campaigns.map(c => ({ id: c.id!, name: c.name! })))}
        <FormField label="Creative type" htmlFor="creative-kind"><select id="creative-kind" className={inputClass} value={String(draft.kind)} onChange={event => { set('kind', event.target.value); set('image', null); set('media', null); }} disabled={Boolean(draft.id)}><option value="image">Image</option><option value="video">Video</option></select></FormField>
        {field('destination_url', 'Approved HTTPS destination', 'url')}{field('cta', 'Call to action (optional)')}{placementPicker}
        {draft.kind === 'image' ? <FormField label="Upload image (JPEG, PNG or WebP, up to 5 MiB)" htmlFor="ad-image"><Input id="ad-image" type="file" accept="image/jpeg,image/png,image/webp" onChange={event => void uploadImage(event.target.files?.[0])} /><p className="text-xs text-muted-foreground">{draft.image ? 'Verified image attached. Save and preview before approval.' : '320–8192 pixels wide, at least 90 pixels high.'}</p></FormField> : <div className="col-span-full"><VideoUploader label="Advertisement video" status={upload.status} progress={upload.progress} error={upload.error} finalUrl={videoUrl} onUpload={async file => {
          try {
          setError('');
          if (file.size > 1024 ** 3) throw new Error('Advertising videos must be no larger than 1 GiB.');
          const url = await upload.uploadFile(file); setVideoUrl(url);
          const media = await api.media(url);
          if (!media.media_id) throw new Error('Upload completed but its media record is unavailable.');
          set('media', media.media_id); set('image', null); return url;
          } catch (cause) { setError(advertisingError(cause)); throw cause; }
        }} /><p className="text-xs text-muted-foreground">Protected HLS processing starts after saving. Only ready videos up to five minutes can be approved.</p></div>}
        <PromotedFields draft={draft} set={set} />
        <p className="col-span-full text-sm text-muted-foreground">Saving changes resets creative approval. Submit, preview the latest media, then approve.</p>
      </>}
      {resource === 'placements' && <>
        <p className="font-medium">{label(draft.code!)}</p><label className="flex items-center gap-2"><input type="checkbox" checked={Boolean(draft.enabled)} onChange={event => set('enabled', event.target.checked)} />Enable placement</label>
        {draft.code === 'midroll' && <FormField label="Breakpoints in main-video seconds (up to three, minimum 60)" htmlFor="breakpoints"><Input id="breakpoints" value={breakpointText} onChange={event => { setBreakpointText(event.target.value); set('breakpoints', event.target.value.split(',').filter(v => v.trim()).map(Number)); }} /></FormField>}
        <p className="col-span-full text-sm text-muted-foreground">Ad failures continue authorized content. Homepage ordering and visibility are managed in <Link className="underline" href="/homepage">Homepage Management</Link>.</p>
      </>}
      <div className="col-span-full flex gap-2"><Button type="submit">{busy ? 'Saving…' : 'Save'}</Button><Button type="button" variant="outline" onClick={cancel}>Cancel</Button></div>
    </fieldset></form>
  </Card>;
}

function PromotedFields({ draft, set }: { draft: AdRecord; set: (key: string, value: unknown) => void }) {
  const [options, setOptions] = useState<TargetOptions | null>(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  useEffect(() => { const controller = new AbortController(); const timer = setTimeout(() => { void api.targets(query, controller.signal).then(setOptions).catch(cause => { if (!controller.signal.aborted) setError(advertisingError(cause)); }); }, 250); return () => { controller.abort(); clearTimeout(timer); }; }, [query]);
  return <fieldset className="col-span-full grid gap-3 rounded border p-3 sm:grid-cols-2"><legend>Sponsored content (optional)</legend><Input className="sm:col-span-2" aria-label="Search promoted titles and channels" placeholder="Find a published title or active channel" value={query} onChange={event => setQuery(event.target.value)} />{error && <StatusAlert>{error}</StatusAlert>}
    <fieldset className="sm:col-span-2 rounded border p-3"><legend>Sponsored collection (up to six published titles)</legend><p className="text-xs text-muted-foreground">Selected: {((draft.promoted_contents ?? []) as number[]).join(', ') || 'None'}</p><div className="max-h-36 overflow-auto">{options?.contents.map(option => <label key={option.id} className="flex min-h-8 items-center gap-2 text-sm"><input type="checkbox" checked={((draft.promoted_contents ?? []) as number[]).includes(Number(option.id))} disabled={!((draft.promoted_contents ?? []) as number[]).includes(Number(option.id)) && ((draft.promoted_contents ?? []) as number[]).length >= 6} onChange={event => set('promoted_contents', event.target.checked ? [...((draft.promoted_contents ?? []) as number[]), option.id] : ((draft.promoted_contents ?? []) as number[]).filter(id => id !== option.id))} />{option.name}</label>)}</div></fieldset>
    {(['contents', 'channels'] as const).map(kind => { const key = kind === 'contents' ? 'promoted_content' : 'promoted_channel'; return <FormField key={key} label={kind === 'contents' ? 'Promoted title' : 'Promoted channel'} htmlFor={key}><select id={key} className={inputClass} value={String(draft[key] ?? '')} onChange={event => set(key, number(event.target.value))}><option value="">None</option>{draft[key] != null && !options?.[kind].some(o => o.id === draft[key]) && <option value={String(draft[key])}>Selected #{text(draft[key])}</option>}{options?.[kind].map(option => <option key={option.id} value={option.id}>{option.name}</option>)}</select></FormField>; })}
  </fieldset>;
}

function ReportTable({ title, rows }: { title: string; rows: AdRecord[] }) {
  const columns = rows.length ? Object.keys(rows[0]) : [];
  return <Card className="min-w-0 p-4"><h2 className="mb-3 font-semibold">{title}</h2>{!rows.length ? <p className="text-sm text-muted-foreground">No recorded activity for this range.</p> : <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr>{columns.map(key => <th className="whitespace-nowrap border-b p-2 capitalize" key={key}>{label(key)}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={index}>{columns.map(key => <td className="border-b p-2" key={key}>{key.endsWith('_rate') && typeof row[key] === 'number' ? `${((row[key] as number) * 100).toFixed(1)}%` : text(row[key])}</td>)}</tr>)}</tbody></table></div>}</Card>;
}

export default function AdvertisingManagement() {
  const { user } = useAuth()!;
  const canApprove = Boolean(user?.is_superuser || user?.dashboard_permissions?.includes('advertising_approval'));
  const [tab, setTab] = useState<Tab>('Overview');
  const [data, setData] = useState<Data>(empty);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [editor, setEditor] = useState<{ resource: Resource; initial: AdRecord } | null>(null);
  const [preview, setPreview] = useState<{ kind: string; url: string } | null>(null);
  const [report, setReport] = useState<AdReport | null>(null);
  const today = new Date().toISOString().slice(0, 10);
  const [from, setFrom] = useState(new Date(Date.now() - 6 * 86400000).toISOString().slice(0, 10));
  const [to, setTo] = useState(today);
  const [filterCampaign, setFilterCampaign] = useState('');
  const [filterAdvertiser, setFilterAdvertiser] = useState('');
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    const controller = new AbortController(); setLoading(true); setError('');
    void Promise.all(resources.map(resource => api.list(resource, controller.signal))).then(rows => {
      if (!controller.signal.aborted) setData(Object.fromEntries(resources.map((resource, i) => [resource, rows[i]])) as Data);
    }).catch(cause => { if (!controller.signal.aborted) setError(advertisingError(cause)); }).finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [refresh]);
  useEffect(() => {
    const controller = new AbortController(); setReport(null);
    if (!from || !to) return;
    void api.reports(from, to, number(filterCampaign) ?? undefined, number(filterAdvertiser) ?? undefined, controller.signal).then(result => { if (!controller.signal.aborted) setReport(result); }).catch(cause => { if (!controller.signal.aborted) setError(advertisingError(cause)); });
    return () => controller.abort();
  }, [from, to, filterCampaign, filterAdvertiser, refresh]);
  const run = async (operation: () => Promise<unknown>, success: string) => {
    setBusy(true); setError(''); setMessage('');
    try { await operation(); setMessage(success); setRefresh(value => value + 1); }
    catch (cause) { setError(advertisingError(cause)); }
    finally { setBusy(false); }
  };
  const resource = tab.toLowerCase() as Resource;
  const rows = resource === 'campaigns' && filterAdvertiser ? data.campaigns.filter(row => Number(row.advertiser) === Number(filterAdvertiser)) : data[resource] ?? [];
  const defaults = (value: Resource): AdRecord => value === 'advertisers' ? { name: '', active: true } : value === 'campaigns' ? {
    name: '', advertiser: null, description: '', starts_at: `${today}T00:00`, ends_at: `${today}T23:59`, priority: 1,
    placements: [], targeting: {}, impression_limit: null, daily_limit: null, session_limit: 3, skippable_after: null,
  } : { name: '', campaign: null, kind: 'image', placements: [], destination_url: '', cta: '', image: null, media: null };
  return <PageShell><PageHeader title="Advertising" description="Manage sponsors, review creatives and measure recorded delivery." actions={<Button variant="outline" disabled={busy || loading} onClick={() => setRefresh(value => value + 1)}>Refresh</Button>} />
    <nav aria-label="Advertising workspace" className="mb-5 flex flex-wrap gap-2">{tabs.map(name => <Button key={name} variant={tab === name ? 'default' : 'outline'} onClick={() => { setTab(name); setEditor(null); setPreview(null); }}>{name}</Button>)}</nav>
    {error && <StatusAlert>{error}</StatusAlert>}{message && <p className="mb-3 text-sm" role="status">{message}</p>}
    {loading ? <p role="status">Loading advertising…</p> : <>
      {tab === 'Overview' && <div className="grid gap-4"><Card className="p-5"><h2 className="font-semibold">{report?.enabled ? 'Advertising delivery enabled' : 'Advertising delivery disabled'}</h2><p className="mt-2 text-sm text-muted-foreground">Activation requires the server feature flag, enabled placement, approved campaign, active advertiser and ready approved creative. Editorial Featured Hero remains separate.</p><div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">{resources.map(key => <div key={key}><strong className="text-2xl">{data[key].length}</strong><p className="capitalize text-muted-foreground">{key}</p></div>)}</div></Card><ReportTable title="Recorded performance (selected UTC dates)" rows={report ? [report.summary] : []} /></div>}
      {resources.includes(resource) && <div className="grid gap-4">
        {resource === 'campaigns' && <FormField label="Filter campaigns by advertiser" htmlFor="campaign-advertiser-filter"><select id="campaign-advertiser-filter" className={inputClass} value={filterAdvertiser} onChange={event => setFilterAdvertiser(event.target.value)}><option value="">All advertisers</option>{data.advertisers.map(row => <option key={row.id} value={row.id}>{row.name}</option>)}</select></FormField>}
        {resource !== 'placements' && !editor && <div><Button onClick={() => setEditor({ resource, initial: defaults(resource) })}>Create {resource.slice(0, -1)}</Button></div>}
        {editor && <Editor key={`${editor.resource}:${editor.initial.id ?? editor.initial.code ?? 'new'}`} {...editor} data={data} cancel={() => setEditor(null)} onSaved={() => { setEditor(null); setMessage('Saved.'); setRefresh(value => value + 1); }} />}
        {!rows.length ? <Card className="p-5">No {resource} match this view.</Card> : <Card className="min-w-0 overflow-x-auto p-4"><table className="w-full text-left text-sm"><thead><tr>{['Name', 'Status', 'Details', 'Actions'].map(title => <th className="border-b p-3" key={title}>{title}</th>)}</tr></thead><tbody>{rows.map(row => <tr key={row.id ?? row.code}>
          <td className="border-b p-3 font-medium">{row.name ?? label(row.code!)}</td><td className="border-b p-3">{resource === 'advertisers' ? (row.active ? 'Active' : 'Inactive') : resource === 'placements' ? (row.enabled ? 'Enabled' : 'Disabled') : `${text(row.approval)} / ${resource === 'campaigns' ? text(row.status) : row.ready ? 'Ready' : 'Processing or unavailable'}`}</td>
          <td className="border-b p-3">{resource === 'advertisers' ? <>{text(row.contact_name)}<br />{text(row.email)}<br />{text(row.phone)}<br />Billing: {text(row.billing_reference)}</> : resource === 'campaigns' ? <>{text(row.impressions)} / {text(row.impression_limit)} lifetime impressions<br />{text(row.starts_at)} → {text(row.ends_at)}</> : resource === 'creatives' ? <>{text(row.kind)} · Campaign #{text(row.campaign)}</> : <>{text((row.breakpoints as number[]).join(', ')) || 'No mid-roll breaks'}</>}</td>
          <td className="border-b p-3"><div className="flex flex-wrap gap-2"><Button size="sm" variant="outline" disabled={busy} onClick={() => {
            const initial = { ...row }; if (resource === 'campaigns') for (const key of ['starts_at', 'ends_at']) { const date = new Date(String(row[key])); initial[key] = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16); }
            setEditor({ resource, initial }); setPreview(null);
          }}>Edit</Button>
            {resource === 'advertisers' && <><Button size="sm" variant="outline" disabled={busy} onClick={() => void run(() => api.save(resource, { id: row.id, active: !row.active }), 'Advertiser updated.')}>{row.active ? 'Deactivate' : 'Activate'}</Button><Button size="sm" variant="outline" onClick={() => { setFilterAdvertiser(String(row.id)); setTab('Campaigns'); }}>View campaigns</Button></>}
            {resource === 'creatives' && <Button size="sm" variant="outline" disabled={busy} onClick={() => void run(async () => setPreview(await api.preview(row.id!)), 'Preview opened.')}>Preview</Button>}
            {workflowActions(row, resource, canApprove).map(operation => <Button size="sm" variant="outline" key={operation} disabled={busy} onClick={() => void run(() => api.workflow(resource as 'campaigns' | 'creatives', row.id!, operation), `${operation} succeeded.`)}>{label(operation)}</Button>)}
          </div></td>
        </tr>)}</tbody></table></Card>}
        {preview && <Card className="p-4"><div className="mb-3 flex justify-between"><h2 className="font-semibold">Creative preview</h2><Button size="sm" variant="outline" onClick={() => setPreview(null)}>Close preview</Button></div>{preview.kind === 'video' ? <video src={preview.url} controls playsInline className="max-h-96 w-full" /> : <Image src={preview.url} alt="Advertising creative preview" width={1600} height={900} unoptimized className="max-h-96 w-full object-contain" />}</Card>}
      </div>}
      {tab === 'Reports' && <div className="grid min-w-0 gap-4"><Card className="grid gap-3 p-4 sm:grid-cols-4"><FormField label="From (UTC)" htmlFor="report-from"><Input id="report-from" type="date" value={from} max={today} onChange={event => setFrom(event.target.value)} /></FormField><FormField label="To (UTC)" htmlFor="report-to"><Input id="report-to" type="date" value={to} max={today} onChange={event => setTo(event.target.value)} /></FormField><FormField label="Campaign" htmlFor="report-campaign"><select id="report-campaign" className={inputClass} value={filterCampaign} onChange={event => setFilterCampaign(event.target.value)}><option value="">All campaigns</option>{data.campaigns.map(row => <option key={row.id} value={row.id}>{row.name}</option>)}</select></FormField><FormField label="Advertiser" htmlFor="report-advertiser"><select id="report-advertiser" className={inputClass} value={filterAdvertiser} onChange={event => setFilterAdvertiser(event.target.value)}><option value="">All advertisers</option>{data.advertisers.map(row => <option key={row.id} value={row.id}>{row.name}</option>)}</select></FormField></Card>
        {!report ? <p role="status">Choose valid dates to load reports.</p> : <><ReportTable title="Performance" rows={[report.summary]} />{(['by_campaign', 'by_advertiser', 'by_placement', 'by_date', 'cap_utilization', 'no_ad_reasons'] as const).map(key => <ReportTable key={key} title={label(key)} rows={report[key]} />)}</>}
        <p className="text-sm text-muted-foreground">Rates use recorded impressions and starts. A dash means no denominator. Events are retained for 90 days; lifetime cap counters persist. No billing or revenue is inferred.</p>
      </div>}
    </>}
  </PageShell>;
}
