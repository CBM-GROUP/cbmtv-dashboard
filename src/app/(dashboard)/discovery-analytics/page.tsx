'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader, PageShell } from '@/components/page-shell';
import { discoveryService, type DiscoveryAnalytics } from '@/services/discoveryService';
import { analyticsState, validRange } from '@/lib/discovery-analytics';

const utcDate = (offset = 0) => new Date(Date.now() + offset * 86400000).toISOString().slice(0, 10);

function Bars({ rows, label }: { rows: { label: string; count: number }[]; label: string }) {
  const max = Math.max(1, ...rows.map(row => row.count));
  return <Card><CardHeader><CardTitle>{label}</CardTitle></CardHeader><CardContent>
    {!rows.length ? <p className="text-sm text-muted-foreground">No activity in this range.</p> :
      <div className="grid gap-3">{rows.map(row => <div key={row.label}>
        <div className="flex justify-between gap-3 text-sm"><span className="truncate">{row.label}</span><span className="tabular-nums">{row.count.toLocaleString()}</span></div>
        <div className="mt-1 h-2 rounded bg-muted"><div className="h-2 rounded bg-primary" style={{ width: `${100 * row.count / max}%` }} /></div>
      </div>)}</div>}
  </CardContent></Card>;
}

function Names({ title, rows }: { title: string; rows: { title: string; count?: number }[] }) {
  return <Card><CardHeader><CardTitle>{title}</CardTitle></CardHeader><CardContent>
    {!rows.length ? <p className="text-sm text-muted-foreground">No qualifying activity in this range.</p> :
      <ol className="grid gap-2 text-sm">{rows.map((row, index) => <li key={`${row.title}-${index}`} className="flex justify-between gap-3 border-b pb-2 last:border-0">
        <span className="min-w-0 truncate">{index + 1}. {row.title}</span><span className="tabular-nums">{row.count?.toLocaleString()}</span>
      </li>)}</ol>}
  </CardContent></Card>;
}

export default function DiscoveryAnalyticsPage() {
  const [from, setFrom] = useState(() => utcDate(-6));
  const [to, setTo] = useState(() => utcDate());
  const [applied, setApplied] = useState({ from: utcDate(-6), to: utcDate() });
  const [data, setData] = useState<DiscoveryAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<'forbidden' | 'error' | null>(null);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    discoveryService.analytics(applied.from, applied.to, controller.signal).then(result => {
      if (!controller.signal.aborted) { setData(result); setError(null); }
    }).catch(cause => {
      if (!controller.signal.aborted) setError(axios.isAxiosError(cause) && cause.response?.status === 403 ? 'forbidden' : 'error');
    }).finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [applied, attempt]);
  const state = analyticsState(data, loading, error);
  return <PageShell>
    <PageHeader title="Discovery Analytics" description="Qualified viewing and explicit search activity, aggregated hourly (UTC)."
      actions={<Button variant="outline" onClick={() => setAttempt(value => value + 1)} disabled={loading}>Refresh</Button>} />
    <form className="flex flex-wrap items-end gap-3" onSubmit={event => { event.preventDefault(); if (validRange(from, to)) setApplied({ from, to }); }}>
      <label className="grid gap-1 text-sm">From (UTC)<input aria-label="From date" type="date" value={from} onChange={event => setFrom(event.target.value)} className="rounded border bg-background p-2" /></label>
      <label className="grid gap-1 text-sm">To (UTC)<input aria-label="To date" type="date" value={to} onChange={event => setTo(event.target.value)} className="rounded border bg-background p-2" /></label>
      <Button type="submit" disabled={!validRange(from, to)}>Apply range</Button>
    </form>
    {state === 'loading' && <p role="status">Loading discovery analytics…</p>}
    {state === 'forbidden' && <p role="alert">You do not have permission to view discovery analytics.</p>}
    {state === 'error' && <p role="alert">Discovery analytics could not be loaded. Try again.</p>}
    {state === 'unavailable' && <p role="status">Aggregation has not run yet. No discovery metrics are available.</p>}
    {state === 'empty' && <p role="status">Aggregation is available, but there was no qualifying activity in this date range.</p>}
    {data && (state === 'ready' || state === 'empty') && <>
      {data.stale && <p role="status" className="text-amber-600">Analytics are stale; check the aggregation worker. Last successful run: {data.aggregate_updated_at || 'never'}.</p>}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[
        ['Qualified views', data.summary.qualified_views], ['Search submissions', data.summary.submissions],
        ['Search result clicks', data.summary.search_clicks], ['Zero-result searches', data.summary.zero_results],
        ['Search-to-click conversion', `${(data.summary.conversion_rate * 100).toFixed(1)}%`],
        ['Playback starts', data.summary.playback_starts], ['Completions', data.summary.completions],
        ['Detail opens (not views)', data.summary.detail_opens],
      ].map(([label, value]) => <Card key={label}><CardHeader><CardTitle className="text-sm text-muted-foreground">{label}</CardTitle></CardHeader><CardContent className="text-2xl font-semibold tabular-nums">{value}</CardContent></Card>)}</div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Names title="Most Watched" rows={data.most_watched} />
        <Names title="Most Searched (selected results)" rows={data.most_searched} />
        <Names title="Trending (recent growth)" rows={data.trending} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Bars label="Views over time" rows={data.views_over_time.map(row => ({ label: row.day, count: row.count }))} />
        <Bars label="Searches over time" rows={data.searches_over_time.map(row => ({ label: row.day, count: row.count }))} />
        <Bars label="Popular search terms" rows={data.popular_queries.map(row => ({ label: `${row.term} (${row.mode})`, count: row.count }))} />
        <Bars label="Zero-result searches" rows={data.zero_result_queries.map(row => ({ label: `${row.term} (${row.mode})`, count: row.count }))} />
        <Bars label="Category performance (views)" rows={data.categories.map(row => ({ label: row.content__category || 'Unassigned', count: row.count }))} />
        <Bars label="Channel performance (views)" rows={data.channels.map(row => ({ label: row.content__channel__name, count: row.count }))} />
      </div>
    </>}
  </PageShell>;
}
