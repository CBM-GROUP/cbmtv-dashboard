'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHeader, PageShell } from '@/components/page-shell';
import { analyticsService, type DashboardAnalytics } from '@/services/analyticsService';

function Metric({ label, value, description }: { label: string; value: number; description?: string }) {
  return <Card><CardHeader><CardTitle className="text-sm text-muted-foreground">{label}</CardTitle></CardHeader><CardContent>
    <p className="text-3xl font-semibold tabular-nums">{value.toLocaleString()}</p>
    {description && <p className="mt-1 text-xs text-muted-foreground">{description}</p>}
  </CardContent></Card>;
}

function Breakdown({ title, rows, total }: { title: string; rows: { label: string; count: number }[]; total: number }) {
  return <Card><CardHeader><CardTitle>{title}</CardTitle></CardHeader><CardContent className="grid gap-3">
    {rows.length === 0 ? <p className="text-sm text-muted-foreground">No records yet.</p> : rows.map((row) => (
      <div key={row.label}>
        <div className="mb-1 flex justify-between gap-3 text-sm"><span className="capitalize">{row.label}</span><span className="tabular-nums">{row.count.toLocaleString()}</span></div>
        <div className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${total ? 100 * row.count / total : 0}%` }} /></div>
      </div>
    ))}
  </CardContent></Card>;
}

function Ranking({ title, rows, countLabel }: { title: string; rows: { content_id: number; title: string; status: string | null; count: number }[]; countLabel: string }) {
  return <Card><CardHeader><CardTitle>{title}</CardTitle></CardHeader><CardContent>
    {rows.length === 0 ? <p className="text-sm text-muted-foreground">No records yet.</p> :
      <ol className="grid gap-3">{rows.map((row, index) => <li key={row.content_id} className="flex items-center justify-between gap-3 border-b border-border pb-2 text-sm last:border-0">
        <span className="min-w-0 truncate">{index + 1}. {row.title} <span className="text-muted-foreground">({row.status ?? 'unassigned'})</span></span>
        <span className="shrink-0 tabular-nums">{row.count.toLocaleString()} {countLabel}</span>
      </li>)}</ol>}
  </CardContent></Card>;
}

export function OverviewAnalyticsView() {
  const [data, setData] = useState<DashboardAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let active = true;
    analyticsService.overview().then((result) => {
      if (active) { setData(result); setError(null); }
    }).catch((failure: unknown) => {
      if (active) {
        setError(axios.isAxiosError(failure) && failure.response?.status === 403
          ? 'You do not have permission to view analytics.'
          : 'Analytics could not be loaded. Try again.');
      }
    }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [retry]);

  const refresh = () => { setLoading(true); setRetry((value) => value + 1); };
  return <PageShell>
    <PageHeader title="Dashboard analytics" description="Current counts from the database. Progress records are not play counts."
      actions={<Button variant="outline" onClick={refresh} disabled={loading}>Refresh</Button>} />
    {loading ? <p role="status" className="text-muted-foreground">Loading analytics…</p> : error ?
      <Card><CardContent><p role="alert">{error}</p><Button className="mt-3" onClick={refresh}>Retry</Button></CardContent></Card> : data ? <>
        <section aria-label="Summary metrics" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Metric label="Content records" value={data.content.total_records} />
          <Metric label="Channels" value={data.content.channel_count} />
          <Metric label="Adverts" value={data.content.advert_count} />
          <Metric label="Registered users" value={data.users.total} />
          <Metric label="Saved records" value={data.saved.total_records} description="Saves, not views" />
          <Metric label="Users with saved Content" value={data.saved.distinct_users} />
          <Metric label="Users with progress records" value={data.progress.users_with_records} />
          <Metric label="Unfinished progress records" value={data.progress.unfinished_records} description="Current state, not total plays" />
        </section>
        <section aria-label="Breakdowns" className="grid gap-4 lg:grid-cols-3">
          <Breakdown title="Publication status" rows={data.content.by_status.map((row) => ({ label: row.status, count: row.count }))} total={data.content.total_records} />
          <Breakdown title="Content type" rows={data.content.by_type.map((row) => ({ label: row.type, count: row.count }))} total={data.content.total_records} />
          <Breakdown title="Account status" rows={[
            { label: 'Active', count: data.users.active },
            { label: 'Inactive', count: data.users.inactive },
            { label: 'Pending activation', count: data.users.pending_activation },
          ]} total={data.users.total} />
        </section>
        <section aria-label="Title rankings" className="grid gap-4 lg:grid-cols-2">
          <Ranking title="Most-saved Content" rows={data.saved.most_saved_titles.map((row) => ({ ...row, count: row.saved_records }))} countLabel="saves" />
          <Ranking title="Titles with unfinished progress" rows={data.progress.unfinished_titles.map((row) => ({ ...row, count: row.users_with_unfinished_progress }))} countLabel="users" />
        </section>
      </> : null}
  </PageShell>;
}
