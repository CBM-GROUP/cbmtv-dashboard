'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { PageHeader, PageShell } from '@/components/page-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormField, StatusAlert } from '@/components/form-field';
import { VideoUploader } from '@/components/video-uploader';
import { useMediaUpload } from '@/hooks/use-media-upload';
import { useAuth } from '@/features/auth/context';
import { advertisingService as api, advertisingError, workflowActions, campaignPayloadValid, type Resource, type AdRecord, type AdReport, type TargetOptions, type AdvertisingOperation } from '@/services/advertisingService';
import { BulkUpload } from '@/features/advertising/bulk-upload';
import { EntityPicker } from '@/features/advertising/entity-picker';

const tabs = ['Clients', 'Ad Library', 'Delivery', 'Reports'] as const;
type Tab = typeof tabs[number];
const tabHash: Record<Tab, string> = { Clients: 'clients', 'Ad Library': 'ad-library', Delivery: 'delivery', Reports: 'reports' };
const resources: Resource[] = ['placements'];
type Data = Record<Resource, AdRecord[]>;
const empty: Data = { advertisers: [], campaigns: [], creatives: [], placements: [], allocations: [] };
const text = (value: unknown) => value === null || value === undefined ? '—' : typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value);
const label = (value: string) => ({ impression: 'Impressions', complete: 'Completed views', video_start: 'Video starts',
  click: 'Clicks', skip: 'Skips', click_through_rate: 'CTR', completion_rate: 'Completion rate', skip_rate: 'Skip rate' }[value]
  ?? value.replaceAll('decision__', '').replaceAll('campaign__', '').replaceAll('advertiser__', '').replaceAll('_', ' '));
const inputClass = 'min-h-10 w-full rounded-md border bg-background px-3 text-sm';
const number = (value: unknown) => value === '' || value === undefined || value === null ? null : Number(value);
const eligibilityLabels: Record<string, string> = {
  backend_disabled: 'Backend emergency switch is off', operation_paused: 'Advertising is paused',
  allocation_strategy_disabled: 'Campaign selection strategy is active', placement_disabled: 'Placement is disabled',
  allocation_inactive: 'Allocation is paused or complete', scheduled: 'Start time has not arrived',
  expired: 'Allocation has expired', client_inactive: 'Client is inactive', creative_unapproved: 'Creative is not approved',
  media_unready: 'Media is not ready', promotion_unavailable: 'Promoted content is unavailable',
  campaign_inactive: 'Campaign approval, status, or schedule blocks serving',
  campaign_placement: 'Campaign or creative does not include this placement', client_mismatch: 'Creative and campaign clients differ',
  campaign_targeting: 'Campaign targeting excludes this request', daily_cap: 'Daily cap reached', lifetime_cap: 'Lifetime cap reached',
  video_too_long: 'Video exceeds this placement’s duration limit',
};
function allocationEligibility(row: AdRecord) {
  const result = row.eligibility as { eligible?: boolean; reasons?: string[] } | undefined;
  if (row.status !== 'active') return { title: row.status === 'completed' ? 'Completed' : 'Dormant / paused', reasons: result?.reasons ?? [] };
  if (result?.eligible) return { title: 'Eligible for selection', reasons: [] };
  const reasons = result?.reasons ?? [];
  const title = reasons.includes('scheduled') ? 'Scheduled' : reasons.includes('expired') ? 'Expired' : 'Blocked';
  return { title, reasons };
}

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
      if (resource === 'campaigns' && !campaignPayloadValid(draft)) { setError('Provide a name and client. Set both dates if scheduling now.'); return; }
      setBusy(true); setError('');
      const payload = { ...draft };
      if (resource === 'campaigns') for (const key of ['starts_at', 'ends_at']) payload[key] = payload[key] ? new Date(String(payload[key])).toISOString() : null;
      void api.save(resource, payload).then(saved => { if (resource === 'creatives') upload.confirmSaved(saved, `/api/advertising/creatives/${saved.id}/`, 'media_reference'); onSaved(); }).catch(cause => setError(advertisingError(cause))).finally(() => setBusy(false));
    }}><fieldset disabled={busy || upload.status === 'uploading'} className="grid gap-4 border-0 sm:grid-cols-2">
      {resource !== 'placements' && field('name', 'Name', 'text', true)}
      {resource === 'advertisers' && <>{field('contact_name', 'Contact name')}{field('email', 'Contact email', 'email')}{field('phone', 'Contact phone')}{field('billing_reference', 'Billing reference')}{field('default_destination_url', 'Default HTTPS destination', 'url')}<label className="flex items-center gap-2"><input type="checkbox" checked={Boolean(draft.active)} onChange={event => set('active', event.target.checked)} />Active client</label></>}
      {resource === 'campaigns' && <>
        <EntityPicker id="ad-advertiser" resource="advertisers" label="Client" value={number(draft.advertiser)} emptyLabel="Select client" onChange={id => set('advertiser', id)} />
        {field('description', 'Objective or description')}{field('default_destination_url', 'Default HTTPS destination', 'url')}{field('starts_at', 'Starts (local time, optional)', 'datetime-local')}{field('ends_at', 'Ends (local time, optional)', 'datetime-local')}
        {field('priority', 'Priority (1–100)', 'number')}{field('impression_limit', 'Lifetime impression cap (blank = unlimited)', 'number')}{field('daily_limit', 'Daily UTC impression cap (blank = unlimited)', 'number')}{field('session_limit', 'Impressions per session (1–20)', 'number')}{field('skippable_after', 'Allow skip after seconds (blank = no skip)', 'number')}
        {placementPicker}<Targeting value={draft.targeting} onChange={value => set('targeting', value)} />
        <p className="col-span-full text-sm text-muted-foreground">Saving changes returns the campaign to Draft and pauses delivery. Submit for review, approve, then resume to activate.</p>
      </>}
      {resource === 'creatives' && <>
        <EntityPicker id="ad-advertiser" resource="advertisers" label="Client" value={number(draft.advertiser)} emptyLabel="Select client" disabled={Boolean(draft.id)} onChange={id => setDraft(old => ({ ...old, advertiser: id, campaign: null }))} />
        <EntityPicker id="ad-campaign" resource="campaigns" label="Campaign (optional)" value={number(draft.campaign)} filters={{ advertiser: number(draft.advertiser) ?? undefined }} emptyLabel="Direct client creative" disabled={Boolean(draft.id) || !draft.advertiser} onChange={id => set('campaign', id)} />
        <FormField label="Creative type" htmlFor="creative-kind"><select id="creative-kind" className={inputClass} value={String(draft.kind)} onChange={event => { set('kind', event.target.value); set('image', null); set('media', null); }} disabled={Boolean(draft.id)}><option value="image">Image</option><option value="video">Video</option></select></FormField>
        {field('destination_url', 'Creative HTTPS destination (optional)', 'url')}{field('cta', 'Call to action (optional)')}{placementPicker}
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
        {['preroll', 'midroll', 'postroll'].includes(String(draft.code)) && <>
          <FormField label="Skip after seconds (blank = non-skippable)" htmlFor="placement-skip"><Input id="placement-skip" type="number" min={0} max={300} value={String(draft.skippable_after ?? '')} onChange={event => set('skippable_after', event.target.value === '' ? null : Number(event.target.value))} /></FormField>
          <FormField label="Maximum ad duration in seconds (1–300)" htmlFor="placement-duration"><Input id="placement-duration" type="number" min={1} max={300} value={String(draft.max_video_duration ?? 300)} onChange={event => set('max_video_duration', Number(event.target.value))} /></FormField>
          {draft.code === 'midroll' && <FormField label="Maximum mid-roll interruptions (0–2)" htmlFor="placement-midroll-max"><Input id="placement-midroll-max" type="number" min={0} max={2} value={String(draft.max_midroll_interruptions ?? 2)} onChange={event => set('max_midroll_interruptions', Number(event.target.value))} /></FormField>}
          <p className="col-span-full text-sm text-muted-foreground">Campaign skip settings take precedence for campaign creatives. Direct creatives use this placement’s skip setting.</p>
        </>}
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

function HierarchyReport({ report }: { report: AdReport }) {
  const rows = report.by_creative.map(row => {
    return { client: row.decision__creative__advertiser__name ?? 'Client unavailable', campaign: row.decision__campaign__name ?? 'Direct',
      format: row.decision__creative__kind ?? 'Unknown',
      creative: row.decision__creative__name ?? 'Unknown',
      impression: row.impression, click: row.click, click_through_rate: row.click_through_rate,
      video_start: row.video_start, complete: row.complete, completion_rate: row.completion_rate,
      skip: row.skip, skip_rate: row.skip_rate, first_quartile: row.first_quartile, midpoint: row.midpoint, third_quartile: row.third_quartile };
  }).sort((a, b) => `${a.client}/${a.campaign}/${a.format}/${a.creative}`.localeCompare(`${b.client}/${b.campaign}/${b.format}/${b.creative}`));
  return <ReportTable title="Client → campaign → format → creative" rows={rows} />;
}

export default function AdvertisingManagement() {
  const { user } = useAuth()!;
  const allowed = useCallback((permission: string) => Boolean(user?.is_superuser || user?.dashboard_permissions?.includes(permission) || user?.dashboard_permissions?.includes('adverts')), [user?.is_superuser, user?.dashboard_permissions]);
  const canApprove = Boolean(user?.is_superuser || user?.dashboard_permissions?.some(permission => ['advertising_approve_creatives', 'advertising_approval'].includes(permission)));
  const canApproveCampaign = Boolean(user?.is_superuser || user?.dashboard_permissions?.includes('advertising_approval'));
  const visibleTabs = tabs.filter(name => name === 'Clients' ? allowed('advertising_view') || allowed('advertising_manage_clients')
    : name === 'Ad Library' ? allowed('advertising_view') || allowed('advertising_upload_creatives') || allowed('advertising_edit_creatives') || canApprove
    : name === 'Delivery' ? allowed('advertising_view') || allowed('advertising_create_campaigns') || allowed('advertising_manage_delivery') || allowed('advertising_activate')
    : allowed('advertising_reports'));
  const [tab, setTab] = useState<Tab>('Clients');
  const [deliveryView, setDeliveryView] = useState<'campaigns' | 'placements' | 'allocations'>('campaigns');
  const [data, setData] = useState<Data>(empty);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [editor, setEditor] = useState<{ resource: Resource; initial: AdRecord } | null>(null);
  const [preview, setPreview] = useState<{ kind: string; url: string } | null>(null);
  const [report, setReport] = useState<AdReport | null>(null);
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [clientRecord, setClientRecord] = useState<AdRecord | null>(null);
  const [clientPage, setClientPage] = useState(1);
  const [clientCount, setClientCount] = useState(0);
  const [clientCampaigns, setClientCampaigns] = useState<AdRecord[]>([]);
  const [clientCampaignPage, setClientCampaignPage] = useState(1);
  const [clientCampaignCount, setClientCampaignCount] = useState(0);
  const [clientCreatives, setClientCreatives] = useState<AdRecord[]>([]);
  const [clientCreativePage, setClientCreativePage] = useState(1);
  const [clientCreativeCount, setClientCreativeCount] = useState(0);
  const [libraryPage, setLibraryPage] = useState(1);
  const [libraryCount, setLibraryCount] = useState(0);
  const [libraryLoading, setLibraryLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filterCampaign, setFilterCampaign] = useState('');
  const [filterAdvertiser, setFilterAdvertiser] = useState('');
  const [filterCreative, setFilterCreative] = useState('');
  const [filterAllocation, setFilterAllocation] = useState('');
  const [filterKind, setFilterKind] = useState('');
  const [filterApproval, setFilterApproval] = useState('');
  const [allocationDraft, setAllocationDraft] = useState<AdRecord | null>(null);
  const [campaignPage, setCampaignPage] = useState(1);
  const [campaignCount, setCampaignCount] = useState(0);
  const [allocationPage, setAllocationPage] = useState(1);
  const [allocationCount, setAllocationCount] = useState(0);
  const [deliveryStatus, setDeliveryStatus] = useState('');
  const [deliveryPlacement, setDeliveryPlacement] = useState('');
  const [operation, setOperation] = useState<AdvertisingOperation | null>(null);
  const [refresh, setRefresh] = useState(0);
  const today = new Date().toISOString().slice(0, 10);
  const [from, setFrom] = useState(new Date(Date.now() - 6 * 86400000).toISOString().slice(0, 10));
  const [to, setTo] = useState(today);
  useEffect(() => { if (!visibleTabs.includes(tab) && visibleTabs.length) setTab(visibleTabs[0]); }, [tab, visibleTabs]);
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      const tabFromHash = tabs.find(name => tabHash[name] === hash);
      if (tabFromHash) setTab(tabFromHash);
      else if (['all-adverts', 'creatives'].includes(hash)) setTab('Ad Library');
      else if (hash === 'advertisers' || hash === 'overview') setTab('Clients');
      else if (hash === 'campaigns' || hash === 'placements') setTab('Delivery');
    };
    sync(); window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);
  useEffect(() => {
    const controller = new AbortController(); if (refresh === 0) setLoading(true); setError('');
    const readGrant: Record<Resource, string> = { advertisers: 'advertising_manage_clients', campaigns: 'advertising_create_campaigns',
      creatives: 'advertising_edit_creatives', placements: 'advertising_manage_delivery', allocations: 'advertising_manage_delivery' };
    void Promise.allSettled(resources.map(resource => allowed('advertising_view') || allowed(readGrant[resource])
      ? api.list(resource, controller.signal) : Promise.resolve([]))).then(results => {
      if (controller.signal.aborted) return;
      setData(old => ({ ...old, ...Object.fromEntries(resources.map((resource, i) => [resource, results[i].status === 'fulfilled' ? results[i].value : []])) }));
      const failure = results.find(result => result.status === 'rejected' && (result.reason as { response?: { status?: number } })?.response?.status !== 403);
      if (failure?.status === 'rejected') setError(advertisingError(failure.reason));
    }).finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [refresh, allowed]);
  useEffect(() => {
    if (tab !== 'Clients') return;
    const controller = new AbortController();
    const timer = setTimeout(() => {
      void api.page('advertisers', clientPage, controller.signal, { q: search || undefined })
        .then(result => { if (!controller.signal.aborted) { setData(old => ({ ...old, advertisers: result.results })); setClientCount(result.count); } })
        .catch(cause => { if (!controller.signal.aborted) setError(advertisingError(cause)); });
    }, 250);
    return () => { controller.abort(); clearTimeout(timer); };
  }, [tab, clientPage, search, refresh]);
  useEffect(() => {
    const controller = new AbortController(); setReport(null);
    if (!from || !to || tab !== 'Reports' && !(tab === 'Clients' && selectedClient)) return;
    void api.reports(from, to, tab === 'Reports' ? number(filterCampaign) ?? undefined : undefined,
      tab === 'Clients' ? selectedClient ?? undefined : number(filterAdvertiser) ?? undefined, controller.signal,
      tab === 'Reports' ? number(filterCreative) ?? undefined : undefined,
      tab === 'Reports' ? deliveryPlacement || undefined : undefined, tab === 'Reports' ? filterKind || undefined : undefined,
      tab === 'Reports' ? number(filterAllocation) ?? undefined : undefined)
      .then(result => { if (!controller.signal.aborted) setReport(result); })
      .catch(cause => { if (!controller.signal.aborted) setError(advertisingError(cause)); });
    return () => controller.abort();
  }, [from, to, filterCampaign, filterAdvertiser, filterCreative, filterAllocation, deliveryPlacement, filterKind, refresh, tab, selectedClient]);
  useEffect(() => {
    if (tab !== 'Ad Library') return;
    const controller = new AbortController(); setLibraryLoading(true);
    const timer = setTimeout(() => { void api.page('creatives', libraryPage, controller.signal, {
      advertiser: number(filterAdvertiser) ?? undefined, campaign: number(filterCampaign) ?? undefined,
      kind: filterKind || undefined, approval: filterApproval || undefined, q: search || undefined })
      .then(result => { if (!controller.signal.aborted) { setData(old => ({ ...old, creatives: result.results })); setLibraryCount(result.count); } })
      .catch(cause => { if (!controller.signal.aborted) setError(advertisingError(cause)); })
      .finally(() => { if (!controller.signal.aborted) setLibraryLoading(false); }); }, 250);
    return () => { controller.abort(); clearTimeout(timer); };
  }, [tab, libraryPage, filterAdvertiser, filterCampaign, filterKind, filterApproval, search, refresh]);
  useEffect(() => {
    if (!selectedClient || tab !== 'Clients') return;
    const controller = new AbortController();
    void Promise.all([api.get('advertisers', selectedClient, controller.signal),
      api.page('campaigns', clientCampaignPage, controller.signal, { advertiser: selectedClient }),
      api.page('creatives', clientCreativePage, controller.signal, { advertiser: selectedClient })])
      .then(([client, campaigns, creatives]) => { if (!controller.signal.aborted) {
        setClientRecord(client); setClientCampaigns(campaigns.results); setClientCampaignCount(campaigns.count);
        setClientCreatives(creatives.results); setClientCreativeCount(creatives.count);
      } }).catch(cause => { if (!controller.signal.aborted) setError(advertisingError(cause)); });
    return () => controller.abort();
  }, [selectedClient, tab, clientCampaignPage, clientCreativePage, refresh]);
  useEffect(() => {
    if (tab !== 'Delivery' || deliveryView === 'placements') return;
    const controller = new AbortController();
    const resource = deliveryView;
    void api.page(resource, resource === 'campaigns' ? campaignPage : allocationPage, controller.signal, {
      advertiser: number(filterAdvertiser) ?? undefined, creative: resource === 'allocations' ? number(filterCreative) ?? undefined : undefined,
      placement: resource === 'allocations' ? deliveryPlacement || undefined : undefined,
      status: deliveryStatus || undefined,
    }).then(result => { if (!controller.signal.aborted) {
      setData(old => ({ ...old, [resource]: result.results }));
      if (resource === 'campaigns') setCampaignCount(result.count); else setAllocationCount(result.count);
    } }).catch(cause => { if (!controller.signal.aborted) setError(advertisingError(cause)); });
    return () => controller.abort();
  }, [tab, deliveryView, campaignPage, allocationPage, filterAdvertiser, filterCreative, deliveryStatus, deliveryPlacement, refresh]);
  useEffect(() => {
    if (tab !== 'Delivery') return;
    void api.operation().then(setOperation).catch(cause => setError(advertisingError(cause)));
  }, [tab, refresh]);
  const run = async (operation: () => Promise<unknown>, success: string) => {
    setBusy(true); setError(''); setMessage('');
    try { await operation(); setMessage(success); setRefresh(value => value + 1); }
    catch (cause) { setError(advertisingError(cause)); }
    finally { setBusy(false); }
  };
  const defaults = (resource: Resource, advertiser?: number): AdRecord => resource === 'advertisers' ? { name: '', active: true, default_destination_url: '' }
    : resource === 'campaigns' ? { name: '', advertiser: advertiser ?? null, description: '', default_destination_url: '', starts_at: null, ends_at: null,
      priority: 1, placements: [], targeting: {}, impression_limit: null, daily_limit: null, session_limit: 3, skippable_after: null }
    : { name: '', advertiser: advertiser ?? null, campaign: null, kind: 'image', placements: [], destination_url: '', cta: '', image: null, media: null };
  const openEditor = (resource: Resource, row: AdRecord) => {
    const initial = { ...row };
    if (resource === 'campaigns') for (const key of ['starts_at', 'ends_at']) if (row[key]) {
      const date = new Date(String(row[key])); initial[key] = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    }
    setEditor({ resource, initial }); setPreview(null);
  };
  const client = clientRecord;
  const library = data.creatives;
  const deliveryRows = data[deliveryView];
  const allocationStatus = (creative: AdRecord) => {
    const count = Number(creative.allocation_count ?? 0);
    const states = creative.allocation_statuses as Record<string, number> | undefined;
    return count ? `${count} configured · ${Object.entries(states ?? {}).filter(([, value]) => value).map(([state, value]) => `${value} ${state}`).join(', ')} (allocation status; see Delivery for eligibility)` : 'Not allocated';
  };
  const edit = editor && (editor.resource === 'advertisers' ? tab === 'Clients' : editor.resource === 'creatives' ? tab === 'Ad Library' : tab === 'Delivery');
  return <PageShell><PageHeader title="Advertising" description="Manage clients, creative review, delivery configuration and recorded results." actions={<Button variant="outline" disabled={busy || loading} onClick={() => setRefresh(value => value + 1)}>Refresh</Button>} />
    <nav aria-label="Advertising workspace" className="mb-5 flex flex-wrap gap-2">{visibleTabs.map(name => <Button key={name} variant={tab === name ? 'default' : 'outline'} onClick={() => { setTab(name); window.location.hash = tabHash[name]; setEditor(null); setPreview(null); setSearch(''); }}>{name}</Button>)}</nav>
    {error && <StatusAlert>{error}</StatusAlert>}{message && <p role="status" className="mb-3 text-sm">{message}</p>}
    {loading ? <p role="status">Loading advertising…</p> : <div className="grid gap-4">
      {edit && editor && <Editor key={`${editor.resource}:${editor.initial.id ?? editor.initial.code ?? 'new'}`} {...editor} data={data} cancel={() => setEditor(null)} onSaved={() => { setEditor(null); setMessage('Saved.'); setRefresh(value => value + 1); }} />}
      {tab === 'Clients' && <>
        <div className="flex flex-wrap gap-3"><Input className="max-w-sm" aria-label="Search clients" placeholder="Search clients" value={search} onChange={event => { setSearch(event.target.value); setClientPage(1); }} />{allowed('advertising_manage_clients') && <Button onClick={() => openEditor('advertisers', defaults('advertisers'))}>New client</Button>}</div>
        <div className="grid gap-4 lg:grid-cols-[minmax(16rem,1fr)_minmax(0,2fr)]"><Card className="max-h-[34rem] overflow-auto p-3"><h2 className="mb-2 font-semibold">Clients</h2>{data.advertisers.map(row => <button type="button" key={row.id} className={`block w-full rounded border-b p-3 text-left hover:bg-muted ${selectedClient === row.id ? 'bg-muted' : ''}`} onClick={() => { setSelectedClient(row.id!); setClientRecord(row); setClientCampaignPage(1); setClientCreativePage(1); setClientCreatives([]); setFilterAdvertiser(String(row.id)); setFilterCampaign(''); setFilterCreative(''); }}>{row.name}<span className="block text-xs text-muted-foreground">{row.active ? 'Active' : 'Inactive'}</span></button>)}{!data.advertisers.length && <p className="p-3 text-sm">No clients match.</p>}<div className="mt-3 flex items-center gap-2"><Button size="sm" variant="outline" disabled={clientPage <= 1} onClick={() => setClientPage(page => page - 1)}>Previous</Button><span>Page {clientPage} of {Math.max(1, Math.ceil(clientCount / 20))}</span><Button size="sm" variant="outline" disabled={clientPage * 20 >= clientCount} onClick={() => setClientPage(page => page + 1)}>Next</Button></div></Card>
          <Card className="min-w-0 p-5">{!client ? <p>Select a client to see its campaigns, creatives and results.</p> : <><div className="flex flex-wrap items-center justify-between gap-2"><h2 className="text-lg font-semibold">{client.name}</h2>{allowed('advertising_manage_clients') && <Button variant="outline" onClick={() => openEditor('advertisers', client)}>Edit client</Button>}</div><p className="mt-2 text-sm">Contact: {text(client.contact_name)} · {text(client.email)} · {text(client.phone)}</p><p className="text-sm">Default destination: {text(client.default_destination_url)}</p>
            {allowed('advertising_create_campaigns') && <Button className="mt-4" variant="outline" onClick={() => { setDeliveryView('campaigns'); setTab('Delivery'); openEditor('campaigns', defaults('campaigns', client.id)); }}>New campaign</Button>}
            {clientCampaigns.length > 0 && <section className="mt-5"><h3 className="font-semibold">Campaigns</h3>{clientCampaigns.map(campaign => <div key={campaign.id} className="mt-2 rounded border p-3"><strong>{campaign.name}</strong> · {campaign.approval} / {campaign.status}<p className="text-xs">{clientCreatives.filter(row => row.campaign === campaign.id).map(row => row.name).join(', ') || 'No creatives on this page'}</p></div>)}<p className="mt-2 text-xs">Campaign page {clientCampaignPage} of {Math.max(1, Math.ceil(clientCampaignCount / 20))}</p><div className="flex gap-2"><Button size="sm" variant="outline" disabled={clientCampaignPage <= 1} onClick={() => setClientCampaignPage(page => page - 1)}>Previous</Button><Button size="sm" variant="outline" disabled={clientCampaignPage * 20 >= clientCampaignCount} onClick={() => setClientCampaignPage(page => page + 1)}>Next</Button></div></section>}
            <section className="mt-5"><h3 className="font-semibold">Direct client creatives</h3><p className="text-sm">{clientCreatives.filter(row => !row.campaign).map(row => row.name).join(', ') || 'No direct creatives on this page.'}</p><p className="mt-2 text-xs">Creative page {clientCreativePage} of {Math.max(1, Math.ceil(clientCreativeCount / 20))}</p><div className="flex gap-2"><Button size="sm" variant="outline" disabled={clientCreativePage <= 1} onClick={() => setClientCreativePage(page => page - 1)}>Previous</Button><Button size="sm" variant="outline" disabled={clientCreativePage * 20 >= clientCreativeCount} onClick={() => setClientCreativePage(page => page + 1)}>Next</Button></div></section>
            <section className="mt-5"><h3 className="font-semibold">Recorded performance</h3>{report ? <ReportTable title="Selected period" rows={[report.summary]} /> : <p className="text-sm">No report available.</p>}</section></>}</Card></div>
      </>}
      {tab === 'Ad Library' && <>
        {allowed('adverts') && <Card className="p-4"><h2 className="font-semibold">Legacy homepage adverts</h2><p className="text-sm text-muted-foreground">Existing homepage advert records remain available in their original management view.</p><Button className="mt-2" variant="outline" render={<Link href="/advert-list" />}>Open legacy adverts</Button></Card>}
        <div className="flex flex-wrap gap-3"><Input className="max-w-sm" aria-label="Search creatives" placeholder="Search creatives" value={search} onChange={event => { setSearch(event.target.value); setLibraryPage(1); }} />{allowed('advertising_upload_creatives') && <Button onClick={() => openEditor('creatives', defaults('creatives', number(filterAdvertiser) ?? undefined))}>New creative</Button>}</div>
        <div className="grid gap-3 sm:grid-cols-4"><EntityPicker resource="advertisers" label="Client filter" value={number(filterAdvertiser)} emptyLabel="All clients" onChange={id => { setFilterAdvertiser(id ? String(id) : ''); setFilterCampaign(''); setLibraryPage(1); }} /><EntityPicker resource="campaigns" label="Campaign filter" value={number(filterCampaign)} filters={{ advertiser: number(filterAdvertiser) ?? undefined }} emptyLabel="All campaigns" onChange={id => { setFilterCampaign(id ? String(id) : ''); setLibraryPage(1); }} /><select aria-label="Filter by format" className={inputClass} value={filterKind} onChange={event => { setFilterKind(event.target.value); setLibraryPage(1); }}><option value="">All formats</option><option value="image">Image</option><option value="video">Video</option></select><select aria-label="Filter by approval" className={inputClass} value={filterApproval} onChange={event => { setFilterApproval(event.target.value); setLibraryPage(1); }}><option value="">All approval states</option>{['draft', 'review', 'approved', 'rejected'].map(value => <option key={value} value={value}>{value === 'draft' ? 'Preview' : value}</option>)}</select></div>
        {allowed('advertising_upload_creatives') && <BulkUpload canCreateClient={allowed('advertising_manage_clients')} canCreateCampaign={allowed('advertising_create_campaigns')} onSaved={() => setRefresh(value => value + 1)} />}
        <Card className="overflow-x-auto p-4"><h2 className="mb-3 font-semibold">Creatives</h2>{libraryLoading && <p role="status">Loading page…</p>}{!library.length ? <p>No creatives match these filters.</p> : <table className="w-full text-left text-sm"><thead><tr>{['Creative', 'Client / campaign', 'Approval', 'Delivery configuration', 'Destination', 'Actions'].map(value => <th key={value} className="border-b p-2">{value}</th>)}</tr></thead><tbody>{library.map(row => <tr key={row.id}><td className="border-b p-2">{row.name}<br /><span className="text-xs">{text(row.kind)} · {row.ready ? 'Ready' : 'Processing'}</span></td><td className="border-b p-2">{text(row.advertiser_name ?? row.advertiser)}<br />{row.campaign ? text(row.campaign_name ?? row.campaign) : 'Direct client creative'}</td><td className="border-b p-2">{row.approval === 'draft' ? 'Preview' : text(row.approval)}</td><td className="border-b p-2">{allocationStatus(row)}</td><td className="border-b p-2">{row.effective_destination_url ? <>{text(row.effective_destination_url)}<br /><small>From {text(row.destination_source)}</small></> : 'No destination'}</td><td className="border-b p-2"><div className="flex flex-wrap gap-1">{allowed('advertising_edit_creatives') && <Button size="sm" variant="outline" onClick={() => openEditor('creatives', row)}>Edit</Button>}<Button size="sm" variant="outline" onClick={() => void run(async () => setPreview(await api.preview(row.id!)), 'Preview opened.')}>Preview</Button><Button size="sm" variant="outline" onClick={() => { setFilterCreative(String(row.id)); setTab('Reports'); }}>Report</Button>{workflowActions(row, 'creatives', canApprove).filter(action => action !== 'submit' || allowed('advertising_edit_creatives')).map(action => <Button key={action} size="sm" variant="outline" disabled={busy} onClick={() => void run(() => api.workflow('creatives', row.id!, action), `${action} succeeded.`)}>{action}</Button>)}</div></td></tr>)}</tbody></table>}<div className="mt-3 flex items-center gap-2"><Button size="sm" variant="outline" disabled={libraryPage <= 1 || libraryLoading} onClick={() => setLibraryPage(page => page - 1)}>Previous</Button><span>Page {libraryPage} of {Math.max(1, Math.ceil(libraryCount / 20))} · {libraryCount} creatives</span><Button size="sm" variant="outline" disabled={libraryPage * 20 >= libraryCount || libraryLoading} onClick={() => setLibraryPage(page => page + 1)}>Next</Button></div></Card>
        {preview && <Card className="p-4"><div className="mb-3 flex justify-between"><h2 className="font-semibold">Creative preview</h2><Button size="sm" variant="outline" onClick={() => setPreview(null)}>Close</Button></div>{preview.kind === 'video' ? <video src={preview.url} controls playsInline className="max-h-96 w-full" /> : <Image src={preview.url} alt="Advertising creative" width={1600} height={900} unoptimized className="max-h-96 w-full object-contain" />}</Card>}
      </>}
      {tab === 'Delivery' && <>
        <Card className="p-4"><h2 className="font-semibold">Delivery paths</h2><p className="text-sm">{operation?.strategy === 'allocation' ? 'Allocation selection is configured in this environment.' : 'Legacy campaign selection is configured in this environment.'} Allocations can be selected only when the backend allocation strategy and every eligibility gate are enabled. Eligibility does not prove impressions were delivered. Direct allocations use their own impression caps; campaign-linked creatives use campaign caps.</p></Card>
        <div className="flex flex-wrap gap-2">{(['campaigns', 'placements', 'allocations'] as const).map(view => <Button key={view} variant={deliveryView === view ? 'default' : 'outline'} onClick={() => { setDeliveryView(view); setEditor(null); setAllocationDraft(null); }}>{view === 'campaigns' ? 'Campaign delivery' : view === 'placements' ? 'Placements' : 'Creative allocations'}</Button>)}</div>
        {deliveryView === 'campaigns' && allowed('advertising_create_campaigns') && <Button className="w-fit" onClick={() => openEditor('campaigns', defaults('campaigns', number(filterAdvertiser) ?? undefined))}>New campaign</Button>}
        {deliveryView === 'allocations' && allowed('advertising_manage_delivery') && <Button className="w-fit" onClick={() => setAllocationDraft({ creative: null, placement: null, starts_at: '', ends_at: null, priority: 1 })}>New allocation</Button>}
        {allocationDraft && <Card className="grid gap-3 p-4 sm:grid-cols-2"><h3 className="sm:col-span-2 font-semibold">{allocationDraft.id ? 'Edit' : 'Create'} allocation</h3><EntityPicker resource="creatives" label="Allocation creative" value={number(allocationDraft.creative)} disabled={Boolean(allocationDraft.id)} emptyLabel="Select creative" onChange={id => setAllocationDraft({ ...allocationDraft, creative: id })} /><select aria-label="Allocation placement" className={inputClass} value={String(allocationDraft.placement ?? '')} onChange={event => setAllocationDraft({ ...allocationDraft, placement: event.target.value })}><option value="">Select placement</option>{data.placements.map(row => <option key={row.code} value={row.code}>{row.code}</option>)}</select><Input aria-label="Allocation start" type="datetime-local" value={String(allocationDraft.starts_at ?? '')} onChange={event => setAllocationDraft({ ...allocationDraft, starts_at: event.target.value })} /><Input aria-label="Allocation end" type="datetime-local" value={String(allocationDraft.ends_at ?? '')} onChange={event => setAllocationDraft({ ...allocationDraft, ends_at: event.target.value || null })} /><Input aria-label="Allocation priority" type="number" min={1} max={100} value={String(allocationDraft.priority ?? 1)} onChange={event => setAllocationDraft({ ...allocationDraft, priority: Number(event.target.value) })} /><Input aria-label="Daily allocation impression cap (blank = unlimited)" type="number" min={1} value={String(allocationDraft.daily_limit === undefined ? 100 : (allocationDraft.daily_limit ?? ''))} onChange={event => setAllocationDraft({ ...allocationDraft, daily_limit: event.target.value === "" ? null : Number(event.target.value) })} /><Input aria-label="Lifetime allocation impression cap (blank = unlimited)" type="number" min={1} value={String(allocationDraft.impression_limit === undefined ? 10000 : (allocationDraft.impression_limit ?? ''))} onChange={event => setAllocationDraft({ ...allocationDraft, impression_limit: event.target.value === "" ? null : Number(event.target.value) })} /><div className="flex gap-2"><Button disabled={busy} onClick={() => void run(async () => { await api.save('allocations', { ...allocationDraft, starts_at: new Date(String(allocationDraft.starts_at)).toISOString(), ends_at: allocationDraft.ends_at ? new Date(String(allocationDraft.ends_at)).toISOString() : null }); setAllocationDraft(null); }, 'Allocation saved. Review its eligibility before expecting delivery.')}>Save</Button><Button variant="outline" onClick={() => setAllocationDraft(null)}>Cancel</Button></div></Card>}
        {deliveryView !== 'placements' && <div className="grid gap-3 sm:grid-cols-4"><EntityPicker resource="advertisers" label="Client filter" value={number(filterAdvertiser)} emptyLabel="All clients" onChange={id => { setFilterAdvertiser(id ? String(id) : ''); setCampaignPage(1); setAllocationPage(1); }} />{deliveryView === 'allocations' && <EntityPicker resource="creatives" label="Creative filter" value={number(filterCreative)} filters={{ advertiser: number(filterAdvertiser) ?? undefined }} emptyLabel="All creatives" onChange={id => { setFilterCreative(id ? String(id) : ''); setAllocationPage(1); }} />}{deliveryView === 'allocations' && <select aria-label="Delivery placement" className={inputClass} value={deliveryPlacement} onChange={event => { setDeliveryPlacement(event.target.value); setAllocationPage(1); }}><option value="">All placements</option>{data.placements.map(row => <option key={row.code} value={row.code}>{row.code}</option>)}</select>}<select aria-label="Delivery status" className={inputClass} value={deliveryStatus} onChange={event => { setDeliveryStatus(event.target.value); setCampaignPage(1); setAllocationPage(1); }}><option value="">All statuses</option>{['paused', 'active', 'completed'].map(value => <option key={value} value={value}>{value}</option>)}</select></div>}
        <Card className="overflow-x-auto p-4"><h2 className="mb-3 font-semibold">{deliveryView === 'campaigns' ? 'Campaign delivery' : deliveryView === 'placements' ? 'Placements' : 'Creative allocations'}</h2>{!deliveryRows.length ? <p>No records yet.</p> : <table className="w-full text-left text-sm"><thead><tr><th className="border-b p-2">Record</th><th className="border-b p-2">State</th><th className="border-b p-2">Details</th><th className="border-b p-2">Actions</th></tr></thead><tbody>{deliveryRows.map(row => <tr key={row.id ?? row.code}><td className="border-b p-2">{row.name ?? `#${row.id ?? row.code}`}</td><td className="border-b p-2">{deliveryView === 'campaigns' ? `${row.approval} / ${row.status}` : deliveryView === 'placements' ? (row.enabled ? 'Enabled' : 'Disabled') : allocationEligibility(row).title}</td><td className="border-b p-2">{deliveryView === 'campaigns' ? `${text(row.starts_at)} → ${text(row.ends_at)} · priority ${text(row.priority)}` : deliveryView === 'placements' ? text(row.code) : <><span>{`Creative #${text(row.creative)} · ${text(row.placement)} · ${text(row.starts_at)} → ${text(row.ends_at)}`}</span><span className="block text-xs text-muted-foreground">{allocationEligibility(row).reasons.map(reason => eligibilityLabels[reason] ?? reason).join('; ') || 'All configured gates pass. Impressions are reported separately.'}</span></>}</td><td className="border-b p-2"><div className="flex flex-wrap gap-1">{deliveryView === 'allocations' ? <>{allowed('advertising_manage_delivery') && <Button size="sm" variant="outline" onClick={() => setAllocationDraft({ ...row, starts_at: row.starts_at ? String(row.starts_at).slice(0, 16) : '', ends_at: row.ends_at ? String(row.ends_at).slice(0, 16) : '' })}>Edit</Button>}{allowed('advertising_activate') && (row.status === 'active' ? ['pause', 'complete'] : row.status !== 'completed' ? ['activate', 'complete'] : []).map(action => <Button key={action} size="sm" variant="outline" disabled={busy} onClick={() => { if (window.confirm(`${action} this allocation? Selection still depends on all serving gates.`)) void run(() => api.allocationWorkflow(row.id!, action as 'activate' | 'pause' | 'complete'), 'Allocation updated.'); }}>{action}</Button>)}</> : <>{allowed(deliveryView === 'campaigns' ? 'advertising_create_campaigns' : 'advertising_manage_delivery') && <Button size="sm" variant="outline" onClick={() => openEditor(deliveryView, row)}>Edit</Button>}{deliveryView === 'campaigns' && workflowActions(row, 'campaigns', canApproveCampaign).filter(action => action === 'submit' ? allowed('advertising_create_campaigns') : ['approve', 'reject'].includes(action) ? canApproveCampaign : allowed('advertising_activate')).map(action => <Button key={action} size="sm" variant="outline" disabled={busy} onClick={() => { if (['resume', 'pause', 'complete'].includes(action) && !window.confirm(`${action} campaign delivery?`)) return; void run(() => api.workflow('campaigns', row.id!, action), `${action} succeeded.`); }}>{action}</Button>)}</>}</div></td></tr>)}</tbody></table>}{deliveryView !== 'placements' && <div className="mt-3 flex items-center gap-2"><Button size="sm" variant="outline" disabled={(deliveryView === 'campaigns' ? campaignPage : allocationPage) <= 1} onClick={() => deliveryView === 'campaigns' ? setCampaignPage(page => page - 1) : setAllocationPage(page => page - 1)}>Previous</Button><span>Page {deliveryView === 'campaigns' ? campaignPage : allocationPage} of {Math.max(1, Math.ceil((deliveryView === 'campaigns' ? campaignCount : allocationCount) / 20))}</span><Button size="sm" variant="outline" disabled={(deliveryView === 'campaigns' ? campaignPage * 20 >= campaignCount : allocationPage * 20 >= allocationCount)} onClick={() => deliveryView === 'campaigns' ? setCampaignPage(page => page + 1) : setAllocationPage(page => page + 1)}>Next</Button></div>}</Card>
      </>}
      {tab === 'Reports'  && <><Card className="grid gap-3 p-4 sm:grid-cols-3"><FormField label="From (UTC)" htmlFor="report-from"><Input id="report-from" type="date" value={from} max={today} onChange={event => setFrom(event.target.value)} /></FormField><FormField label="To (UTC)" htmlFor="report-to"><Input id="report-to" type="date" value={to} max={today} onChange={event => setTo(event.target.value)} /></FormField><EntityPicker resource="advertisers" label="Client" value={number(filterAdvertiser)} emptyLabel="All clients" onChange={id => { setFilterAdvertiser(id ? String(id) : ''); setFilterCampaign(''); setFilterCreative(''); }} /><EntityPicker resource="campaigns" label="Campaign" value={number(filterCampaign)} filters={{ advertiser: number(filterAdvertiser) ?? undefined }} emptyLabel="All campaigns" onChange={id => setFilterCampaign(id ? String(id) : '')} /><EntityPicker resource="creatives" label="Creative" value={number(filterCreative)} filters={{ advertiser: number(filterAdvertiser) ?? undefined, campaign: number(filterCampaign) ?? undefined }} emptyLabel="All creatives" onChange={id => setFilterCreative(id ? String(id) : '')} /><select aria-label="Report placement" className={inputClass} value={deliveryPlacement} onChange={event => setDeliveryPlacement(event.target.value)}><option value="">All placements</option>{data.placements.map(row => <option key={row.code} value={row.code}>{row.code}</option>)}</select><select aria-label="Report format" className={inputClass} value={filterKind} onChange={event => setFilterKind(event.target.value)}><option value="">All formats</option><option value="image">Image</option><option value="video">Video</option></select></Card>
        <FormField label="Allocation ID (optional)" htmlFor="report-allocation"><Input id="report-allocation" type="number" min={1} value={filterAllocation} onChange={event => setFilterAllocation(event.target.value)} /></FormField>{report ? <><ReportTable title="Recorded performance" rows={[report.summary]} /><HierarchyReport report={report} /><Card className="p-4"><h2 className="mb-3 font-semibold">Daily impressions</h2><div className="flex h-36 items-end gap-2 overflow-x-auto">{report.by_date.map((row, i) => <div key={i} className="min-w-8 bg-primary" title={`${text(row.day)}: ${text(row.impression)} impressions`} style={{ height: `${Math.max(3, Number(row.impression || 0) / Math.max(1, ...report.by_date.map(item => Number(item.impression || 0))) * 100)}%` }} />)}</div>{!report.by_date.length && <p>No recorded activity.</p>}</Card>{(['by_advertiser', 'by_campaign', 'by_creative', 'by_allocation', 'by_placement', 'by_date'] as const).map(key => <ReportTable key={key} title={label(key)} rows={report[key] ?? []} />)}</> : <p role="status">Choose valid dates to load reports.</p>}
        <p className="text-sm text-muted-foreground">Metrics use recorded events from the past 90 days. Completion and skip rates divide by video starts; CTR divides by impressions. A dash means no denominator. Demographic and revenue data are unavailable.</p></>}
    </div>}
  </PageShell>;
}
