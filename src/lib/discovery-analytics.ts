import type { DiscoveryAnalytics } from '@/services/discoveryService';

export type AnalyticsState = 'loading' | 'forbidden' | 'error' | 'unavailable' | 'empty' | 'ready';

export function analyticsState(data: DiscoveryAnalytics | null, loading: boolean, error: 'forbidden' | 'error' | null): AnalyticsState {
  if (loading) return 'loading';
  if (error) return error;
  if (!data || !data.available) return 'unavailable';
  if (!data.summary.qualified_views && !data.summary.submissions && !data.summary.search_clicks) return 'empty';
  return 'ready';
}

export function validRange(from: string, to: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to)) return false;
  const start = Date.parse(`${from}T00:00:00Z`), end = Date.parse(`${to}T00:00:00Z`);
  return Number.isFinite(start) && Number.isFinite(end)
    && new Date(start).toISOString().slice(0, 10) === from
    && new Date(end).toISOString().slice(0, 10) === to
    && end >= start && end - start < 90 * 86400000;
}
