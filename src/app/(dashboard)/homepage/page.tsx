'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp, X } from 'lucide-react';
import { PageHeader, PageShell } from '@/components/page-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FormField, StatusAlert } from '@/components/form-field';
import { contentService } from '@/services/contentService';
import { channelService } from '@/services/channelService';
import { homepageService, moveItem, sectionLabels, advertisingSections, validateHomepage, type HomepageConfig, type HomepagePreview } from '@/services/homepageService';
import type { Channel, Content } from '@/types';

function errorMessage(cause: unknown): string {
  const data = (cause as { response?: { data?: unknown } })?.response?.data;
  const flatten = (value: unknown): string => {
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value.map(flatten).filter(Boolean).join(' ');
    if (value && typeof value === 'object') return Object.entries(value).map(([key, child]) => `${key}: ${flatten(child)}`).join(' ');
    return '';
  };
  return flatten(data) || (cause instanceof Error ? cause.message : 'Could not update homepage.');
}

function localTime(value: string | null): string {
  if (!value) return '';
  const date = new Date(value);
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
}

function OrderButtons({ label, index, length, move, minimum = 0 }: {
  label: string; index: number; length: number; move: (offset: number) => void; minimum?: number;
}) {
  return <span className="inline-flex gap-1">
    <Button variant="outline" size="icon" aria-label={`Move ${label} up`} disabled={index <= minimum} onClick={() => move(-1)}><ArrowUp size={16} /></Button>
    <Button variant="outline" size="icon" aria-label={`Move ${label} down`} disabled={index < minimum || index === length - 1} onClick={() => move(1)}><ArrowDown size={16} /></Button>
  </span>;
}

export default function HomepageManagement() {
  const [config, setConfig] = useState<HomepageConfig | null>(null);
  const [saved, setSaved] = useState<HomepageConfig | null>(null);
  const [titles, setTitles] = useState<Content[]>([]);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [titleQuery, setTitleQuery] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState<HomepagePreview | null>(null);

  const load = async () => {
    setBusy(true); setError('');
    try {
      const [initial, content, channelList] = await Promise.all([homepageService.get(), contentService.getContent(), channelService.getChannels('dashboard')]);
      setConfig(initial); setSaved(initial); setTitles(content); setChannels(channelList);
    } catch (cause) { setError(errorMessage(cause)); }
    finally { setBusy(false); }
  };
  useEffect(() => { void load(); }, []);

  const edit = (next: HomepageConfig) => { setConfig(next); setPreview(null); setMessage(''); setError(''); };
  const submit = async (previewOnly: boolean) => {
    if (!config || busy) return;
    const invalid = validateHomepage(config);
    if (invalid) { setError(invalid); return; }
    setBusy(true); setError(''); setMessage('');
    try {
      if (previewOnly) setPreview(await homepageService.preview(config));
      else {
        const result = await homepageService.save(config);
        setConfig(result); setSaved(result); setPreview(null); setMessage('Homepage saved.');
      }
    } catch (cause) { setError(errorMessage(cause)); }
    finally { setBusy(false); }
  };

  return <PageShell>
    <PageHeader title="Homepage Management" description="Choose featured titles, then arrange the homepage. Channels appear automatically."
      actions={<><Button variant="outline" disabled={!config || busy} onClick={() => { setConfig(saved); setPreview(null); setError(''); setMessage('Changes cancelled.'); }}>Cancel</Button>
        <Button variant="outline" disabled={!config || busy} onClick={() => void submit(true)}>Preview</Button>
        <Button disabled={!config || busy} onClick={() => void submit(false)}>{busy ? 'Working...' : 'Save changes'}</Button></>} />
    {error && <StatusAlert>{error}</StatusAlert>}
    {message && <div role="status"><StatusAlert variant="info">{message}</StatusAlert></div>}
    {!config ? <div role="status">{busy ? 'Loading homepage...' : <Button onClick={() => void load()}>Retry loading</Button>}</div> :
    <fieldset disabled={busy} className="grid min-w-0 gap-6 border-0 p-0">
      <Card className="p-5"><h2 className="text-lg font-semibold">Featured Titles</h2>
        <p className="text-sm text-muted-foreground">Approved titles only. Schedules use your local timezone ({Intl.DateTimeFormat().resolvedOptions().timeZone}). Leave dates blank for no time limit.</p>
        <Input aria-label="Search approved titles" placeholder="Search approved titles..." value={titleQuery} onChange={(event) => setTitleQuery(event.target.value)} />
        <div className="max-h-48 space-y-2 overflow-auto" aria-label="Available titles">{titles.filter((title) => title.status === 'approved' && channels.some((channel) => Number(channel.id) === title.channel && channel.is_active !== false) && !config.featured_titles.some((p) => p.content === Number(title.id)) && title.title.toLowerCase().includes(titleQuery.toLowerCase())).slice(0, 30).map((title) =>
          <div key={title.id} className="flex items-center justify-between gap-3 text-sm"><span>{title.title}</span><Button size="sm" variant="outline" disabled={config.featured_titles.length >= 20} onClick={() => edit({ ...config, featured_titles: [...config.featured_titles, { content: Number(title.id), start_at: null, end_at: null, detail: title }] })}>Add {title.title}</Button></div>)}</div>
        {!config.featured_titles.length && <p className="text-sm text-muted-foreground">No placements. Existing featured titles provide a fallback; otherwise viewers see Browse content.</p>}
        {config.featured_titles.map((placement, index) => {
          const title = placement.detail ?? titles.find((item) => Number(item.id) === placement.content);
          const label = title?.title ?? `Title ${placement.content}`;
          const updateDate = (key: 'start_at' | 'end_at', value: string) => {
            if (value && !Number.isFinite(new Date(value).getTime())) { setError('Enter a valid schedule date.'); return; }
            edit({ ...config, featured_titles: config.featured_titles.map((row, i) => i === index ? { ...row, [key]: value ? new Date(value).toISOString() : null } : row) });
          };
          return <div key={placement.content} className="space-y-3 rounded-lg border p-3">
            <div className="flex flex-wrap items-center justify-between gap-2"><strong>{index + 1}. {label}</strong><span className="flex gap-2"><OrderButtons label={label} index={index} length={config.featured_titles.length} move={(offset) => edit({ ...config, featured_titles: moveItem(config.featured_titles, index, offset) })} /><Button variant="outline" size="icon" aria-label={`Remove ${label}`} onClick={() => edit({ ...config, featured_titles: config.featured_titles.filter((_, i) => i !== index) })}><X size={16} /></Button></span></div>
            {(title?.status !== 'approved' || !channels.some((channel) => Number(channel.id) === title?.channel && channel.is_active !== false)) && <p className="text-sm text-destructive">This title is unavailable. Remove it before saving.</p>}
            <div className="grid gap-3 sm:grid-cols-2"><FormField label="Starts (optional)" htmlFor={`start-${placement.content}`}><Input id={`start-${placement.content}`} type="datetime-local" value={localTime(placement.start_at)} onChange={(event) => updateDate('start_at', event.target.value)} /></FormField><FormField label="Ends (optional)" htmlFor={`end-${placement.content}`}><Input id={`end-${placement.content}`} type="datetime-local" value={localTime(placement.end_at)} onChange={(event) => updateDate('end_at', event.target.value)} /></FormField></div>
          </div>;
        })}
      </Card>
      <Card className="p-5"><h2 className="text-lg font-semibold">Featured movie adverts</h2>
        <p className="text-sm text-muted-foreground">Insert an eligible campaign advert after each interval of featured movies. The movie order stays as selected above; unavailable adverts leave no gap.</p>
        <label className="mt-4 flex items-center gap-2 text-sm"><input type="checkbox" checked={config.advert_insertion.enabled} onChange={(event) => edit({ ...config, advert_insertion: { ...config.advert_insertion, enabled: event.target.checked } })} />Enable advert insertion</label>
        <div className="mt-3 max-w-xs"><FormField label="Movies between adverts" htmlFor="advert-interval"><Input id="advert-interval" type="number" min={1} max={1000} step={1} value={config.advert_insertion.interval} onChange={(event) => edit({ ...config, advert_insertion: { ...config.advert_insertion, interval: Number(event.target.value) } })} /></FormField></div>
        <p className="mt-2 text-xs text-muted-foreground">Default: 3. Adverts must be approved and eligible for the featured sponsor placement.</p>
      </Card>
      <Card className="p-5"><h2 className="text-lg font-semibold">Homepage Layout</h2>
        <div className="my-3 flex flex-wrap gap-2">{Object.entries(advertisingSections).filter(([id]) => !config.sections.some(row => row.id === id)).map(([id, label]) => <Button key={id} variant="outline" size="sm" onClick={() => edit({ ...config, sections: [...config.sections, { id, enabled: false }] })}>Add {label}</Button>)}</div>
        <p className="mb-3 text-sm text-muted-foreground">Sponsored sections also require an enabled placement and approved campaign in Advertising. Enable up to two, after the first three browsing sections.</p>
        {config.sections.map((section, index) => <div key={section.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border p-3">
          <label className="flex items-center gap-2"><input type="checkbox" checked={section.enabled} disabled={['featured_hero', 'continue_watching'].includes(section.id)} onChange={(event) => edit({ ...config, sections: config.sections.map((row) => row.id === section.id ? { ...row, enabled: event.target.checked } : row) })} />{sectionLabels[section.id]}{['featured_hero', 'continue_watching'].includes(section.id) && <small className="text-muted-foreground">Required</small>}</label>
          <OrderButtons label={sectionLabels[section.id]} index={index} length={config.sections.length} minimum={1} move={(offset) => edit({ ...config, sections: moveItem(config.sections, index, offset) })} />
        </div>)}
        <p className="text-sm text-muted-foreground">Continue Watching is generated privately for each viewer and only appears when there is something to resume.</p>
      </Card>
      <Card className="p-5"><h2 className="text-lg font-semibold">New Releases Settings</h2><p className="text-sm text-muted-foreground">Up to six currently published titles, newest first by their first publication on CBM TV. Titles with unknown publication dates are excluded.</p>
        <div className="grid gap-3 sm:grid-cols-2"><FormField label="Eligibility duration" htmlFor="release-duration"><Input id="release-duration" type="number" min={1} max={1000} value={config.new_releases.duration} onChange={(event) => edit({ ...config, new_releases: { ...config.new_releases, duration: Number(event.target.value) } })} /></FormField>
          <FormField label="Duration unit" htmlFor="release-unit"><select id="release-unit" className="h-9 rounded-md border bg-background px-3 text-sm" value={config.new_releases.unit} onChange={(event) => edit({ ...config, new_releases: { ...config.new_releases, unit: event.target.value as HomepageConfig['new_releases']['unit'] } })}>{['hours', 'days', 'months', 'years'].map((unit) => <option key={unit}>{unit}</option>)}</select></FormField></div>
      </Card>
      {preview && <Card className="p-5" aria-label="Homepage preview"><h2 className="text-lg font-semibold">Homepage Preview</h2><p className="text-sm text-muted-foreground">Current eligibility and schedules are applied. Personal viewing history is hidden.</p>
        {preview.sections.filter((section) => section.enabled && section.items.length).map((section) => <section key={section.id}><h3 className="font-semibold">{section.label}</h3><div className="flex gap-3 overflow-x-auto py-2">{section.items.map((item) => <div key={item.id} className="w-48 shrink-0 rounded-lg border p-2">{('title' in item ? item.thumbnail : item.cover_image_url || item.logo_url) && <div className="mb-2 aspect-video rounded bg-cover bg-center" role="img" aria-label={'title' in item ? item.title : item.name} style={{ backgroundImage: `url(${JSON.stringify('title' in item ? item.thumbnail : item.cover_image_url || item.logo_url)})` }} />}<span className="text-sm">{'title' in item ? item.title : item.name}</span></div>)}</div></section>)}
        {!preview.sections.some((section) => section.enabled && section.items.length) && <p>Viewers will see the Browse content fallback.</p>}
      </Card>}
    </fieldset>}
  </PageShell>;
}
