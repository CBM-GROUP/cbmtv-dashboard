'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { advertisingService as api, type AdRecord, type AdvertisingFilters } from '@/services/advertisingService';

type Resource = 'advertisers' | 'campaigns' | 'creatives';

export function EntityPicker({ resource, label, value, onChange, filters = {}, emptyLabel = 'All', disabled = false, id }: {
  resource: Resource; label: string; value: number | null; onChange: (id: number | null) => void;
  filters?: AdvertisingFilters; emptyLabel?: string; disabled?: boolean; id?: string;
}) {
  const [query, setQuery] = useState('');
  const [rows, setRows] = useState<AdRecord[]>([]);
  const [selected, setSelected] = useState<AdRecord | null>(null);
  const [error, setError] = useState('');
  const advertiser = filters.advertiser;
  const campaign = filters.campaign;
  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      void api.page(resource, 1, controller.signal, { q: query || undefined, advertiser, campaign })
        .then(result => { if (!controller.signal.aborted) { setRows(result.results); setError(''); } })
        .catch(() => { if (!controller.signal.aborted) setError(`Could not search ${label.toLowerCase()}.`); });
    }, 250);
    return () => { controller.abort(); clearTimeout(timer); };
  }, [resource, query, advertiser, campaign, label]);
  useEffect(() => {
    if (!value || rows.some(row => row.id === value)) return;
    const controller = new AbortController();
    void api.get(resource, value, controller.signal).then(row => { if (!controller.signal.aborted) setSelected(row); }).catch(() => undefined);
    return () => controller.abort();
  }, [resource, value, rows]);
  const options = selected && !rows.some(row => row.id === selected.id) ? [selected, ...rows] : rows;
  return <label className="grid min-w-0 gap-1 text-sm">{label}
    <Input aria-label={`Search ${label.toLowerCase()}`} placeholder={`Search ${label.toLowerCase()}`} value={query} disabled={disabled} onChange={event => setQuery(event.target.value)} />
    <select id={id} aria-label={label} className="min-h-10 rounded border bg-background px-2" value={value ?? ''} disabled={disabled} onChange={event => onChange(event.target.value ? Number(event.target.value) : null)}>
      <option value="">{emptyLabel}</option>{options.map(row => <option key={row.id} value={row.id}>{row.name}</option>)}
    </select>{error && <span role="alert" className="text-destructive">{error}</span>}
  </label>;
}
