'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRightIcon, LoaderCircleIcon, RefreshCwIcon } from 'lucide-react';

import apiClient from '@/services/api';
import { advertService } from '@/services/advertService';
import { channelService } from '@/services/channelService';
import { contentService } from '@/services/contentService';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { StatusAlert } from '@/components/form-field';
import { PageHeader, PageShell } from '@/components/page-shell';

type Count = number | 'error' | null;

const SUMMARIES = [
  { key: 'channels', title: 'Channels', href: '/channel-list', load: () => channelService.getChannels() },
  { key: 'content', title: 'Content', href: '/content-list', load: () => contentService.getContent() },
  { key: 'adverts', title: 'Adverts', href: '/advert-list', load: () => advertService.getAdverts() },
] as const;

function SummaryCard({ title, href, count }: { title: string; href: string; count: Count }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-3xl font-semibold tabular-nums">
          {count === null ? <Skeleton className="h-9 w-16" /> : count === 'error' ? '—' : count}
        </CardTitle>
        <CardAction>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={`Open ${title}`}
            nativeButton={false}
            render={<Link href={href} />}
          >
            <ArrowRightIcon />
          </Button>
        </CardAction>
      </CardHeader>
      {count === 'error' && (
        <CardContent className="text-xs text-muted-foreground">Could not load this count.</CardContent>
      )}
    </Card>
  );
}

export default function Page() {
  const [counts, setCounts] = useState<Record<string, Count>>({});
  const [syncing, setSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<{ variant: 'info' | 'error'; message: string } | null>(
    null,
  );

  useEffect(() => {
    let cancelled = false;
    // Each count resolves on its own so one slow or failing endpoint does not
    // hold back the others.
    SUMMARIES.forEach(({ key, load }) => {
      load()
        .then((items) => !cancelled && setCounts((prev) => ({ ...prev, [key]: items.length })))
        .catch(() => !cancelled && setCounts((prev) => ({ ...prev, [key]: 'error' })));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Was `GET /api/content/search`. That route rebuilt the whole Meilisearch
  // index, which made an unauthenticated GET destructive for every client; it
  // is now a read-only search endpoint. The rebuild moved to
  // POST /api/content/reindex/ (admin only).
  //
  // The trailing slash is required: Django's APPEND_SLASH cannot redirect a
  // POST without discarding the request, so `/reindex` would fail where
  // `/reindex/` succeeds.
  const handleSync = async () => {
    setSyncing(true);
    setSyncResult(null);
    try {
      const response = await apiClient.post('/api/content/reindex/');
      setSyncResult({ variant: 'info', message: response?.data?.message ?? 'Search data synced.' });
    } catch (error) {
      const status = (error as { response?: { status?: number } })?.response?.status;
      const message = (error as { response?: { data?: { message?: string } } })?.response
        ?.data?.message;
      if (status === 401 || status === 403) {
        setSyncResult({ variant: 'error', message: 'Sync failed: this action requires an admin account.' });
      } else {
        setSyncResult({ variant: 'error', message: `Sync failed: ${message ?? (error as Error).message}` });
      }
    } finally {
      setSyncing(false);
    }
  };

  return (
    <PageShell>
      <PageHeader title="Dashboard" description="An overview of the CBM TV catalogue." />
      <div className="grid gap-4 md:grid-cols-3">
        {SUMMARIES.map(({ key, title, href }) => (
          <SummaryCard key={key} title={title} href={href} count={counts[key] ?? null} />
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Search index</CardTitle>
          <CardDescription>
            Rebuild the search index after bulk changes so new and edited titles show up in app
            search. Requires an admin account.
          </CardDescription>
        </CardHeader>
        {syncResult && (
          <CardContent>
            <StatusAlert variant={syncResult.variant} onDismiss={() => setSyncResult(null)}>
              {syncResult.message}
            </StatusAlert>
          </CardContent>
        )}
        <CardFooter>
          <Button onClick={handleSync} disabled={syncing}>
            {syncing ? <LoaderCircleIcon className="animate-spin" /> : <RefreshCwIcon />}
            {syncing ? 'Syncing…' : 'Sync Search Data'}
          </Button>
        </CardFooter>
      </Card>
    </PageShell>
  );
}
