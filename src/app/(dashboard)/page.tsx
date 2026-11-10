'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RefreshCwIcon } from 'lucide-react';
import apiClient from '@/services/api';
import { analyticsService, type DashboardAnalytics } from '@/services/analyticsService';
import { advertisingService, type AdReport } from '@/services/advertisingService';
import { discoveryService, type DiscoveryAnalytics } from '@/services/discoveryService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatusAlert } from '@/components/form-field';
import { PageHeader, PageShell } from '@/components/page-shell';
import { useAuth } from '@/features/auth/context';

const date = (offset = 0) => new Date(Date.now() + offset * 86400000).toISOString().slice(0, 10);

function Metric({ title, value, href }: { title: string; value: number | null; href?: string }) {
  const content = <>
    <span className="block text-xs text-muted-foreground">{title}</span>
    <strong className="text-xl tabular-nums">{value === null ? 'Unavailable' : value.toLocaleString()}</strong>
  </>;
  return href ? <Link href={href} className="rounded-lg border p-3 hover:bg-muted focus-visible:outline-2 focus-visible:outline-primary">{content}</Link>
    : <div className="rounded-lg border p-3">{content}</div>;
}

function DailyBars({ rows }: { rows: DiscoveryAnalytics['views_over_time'] }) {
  const max = Math.max(1, ...rows.map(row => row.count));
  if (!rows.length) return <p className="text-sm text-muted-foreground">No recorded views in this range.</p>;
  return <div className="grid gap-2">{rows.map(row => <div key={row.day} className="grid grid-cols-[6rem_1fr_3rem] items-center gap-2 text-xs">
    <span>{row.day}</span><div className="h-2 rounded bg-muted"><div className="h-2 rounded bg-primary" style={{ width: `${row.count / max * 100}%` }} /></div>
    <span className="text-right tabular-nums">{row.count}</span>
  </div>)}</div>;
}

export default function Page() {
  const { user } = useAuth()!;
  const can = (permission: string) => Boolean(user?.is_superuser || user?.dashboard_permissions?.includes(permission));
  const [snapshot, setSnapshot] = useState<DashboardAnalytics | null>(null);
  const [discovery, setDiscovery] = useState<DiscoveryAnalytics | null>(null);
  const [adReport, setAdReport] = useState<AdReport | null>(null);
  const [campaigns, setCampaigns] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<{ variant: 'info' | 'error'; message: string } | null>(null);
  useEffect(() => {
    let active = true;
    Promise.allSettled([
      analyticsService.overview(),
      discoveryService.analytics(date(-6), date()),
      advertisingService.reports(date(-6), date()),
      advertisingService.list('campaigns'),
    ]).then(([counts, activity, ads, campaignRows]) => {
      if (!active) return;
      if (counts.status === 'fulfilled') setSnapshot(counts.value);
      if (activity.status === 'fulfilled') setDiscovery(activity.value);
      if (ads.status === 'fulfilled') setAdReport(ads.value);
      if (campaignRows.status === 'fulfilled') setCampaigns(campaignRows.value.length);
      setLoading(false);
    });
    return () => { active = false; };
  }, []);
  const sync = async () => {
    setSyncing(true); setSyncMessage(null);
    try {
      await apiClient.post('/api/content/reindex/');
      setSyncMessage({ variant: 'info', message: 'Search index rebuild requested.' });
    } catch {
      setSyncMessage({ variant: 'error', message: 'Search index rebuild failed. Check your access and try again.' });
    } finally { setSyncing(false); }
  };
  return <PageShell>
    <PageHeader title="Dashboard" description="Platform performance and recorded activity." />
    <details open className="rounded-lg border p-4">
      <summary className="cursor-pointer font-semibold">Platform Overview</summary>
      <p className="mt-1 text-sm text-muted-foreground">Current records across CBM TV. Select a metric to manage its records.</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
        <Metric title="Channels" value={snapshot?.content.channel_count ?? null} href={can('channels') ? '/channel-list' : undefined} />
        <Metric title="Content" value={snapshot?.content.total_records ?? null} href={can('content') ? '/content-list' : undefined} />
        <Metric title="Adverts" value={snapshot?.content.advert_count ?? null} href={can('adverts') ? '/advertising#all-adverts' : undefined} />
        <Metric title="Users" value={snapshot?.users.total ?? null} href={can('users') ? '/user-management#users' : undefined} />
        <Metric title="Campaigns" value={campaigns} href={can('adverts') ? '/advertising#campaigns' : undefined} />
      </div>
    </details>
    <section aria-labelledby="performance-title" className="grid gap-3">
      <h2 id="performance-title" className="font-semibold">Performance &amp; Analytics</h2>
      {loading && <p role="status">Loading recorded analytics…</p>}
      <div className="grid gap-3 lg:grid-cols-2">
        <Card><CardHeader><CardTitle>Content performance</CardTitle></CardHeader><CardContent className="grid gap-3">
          {!discovery?.available ? <p className="text-sm text-muted-foreground">Discovery activity is unavailable.</p> : <>
            <div className="grid grid-cols-2 gap-2 text-sm"><span>Qualified views: {discovery.summary.qualified_views}</span><span>Playback starts: {discovery.summary.playback_starts}</span></div>
            <DailyBars rows={discovery.views_over_time} />
            <ol className="text-sm">{discovery.most_watched.slice(0, 3).map(row => <li key={row.content_id}>{row.title}: {row.count} views</li>)}</ol>
          </>}
          <Link className="text-sm underline" href="/discovery-analytics">View content and channel analytics</Link>
        </CardContent></Card>
        <Card><CardHeader><CardTitle>Advertising performance</CardTitle></CardHeader><CardContent className="grid gap-3 text-sm">
          {adReport ? <>
            <p>Recorded impressions: {adReport.summary.impression ?? 0}</p>
            <p>Recorded clicks: {adReport.summary.click ?? 0}</p>
            <p>Campaigns with recorded events: {adReport.by_campaign.length}</p>
          </> : <p className="text-muted-foreground">Advertising reports are unavailable for this account or this request.</p>}
          {can('adverts') && <Link className="underline" href="/advertising#reports">View advertising reports</Link>}
        </CardContent></Card>
      </div>
    </section>
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="outline" onClick={sync} disabled={syncing}><RefreshCwIcon />{syncing ? 'Rebuilding…' : 'Rebuild / Repair Search Index'}</Button>
      {syncMessage && <StatusAlert variant={syncMessage.variant}>{syncMessage.message}</StatusAlert>}
    </div>
  </PageShell>;
}
