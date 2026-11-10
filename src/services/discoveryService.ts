import apiClient from './api';

export type TitleCount = { content_id: number; title: string; count: number };
export type DayCount = { day: string; count: number; zero?: number };
export type DiscoveryAnalytics = {
  available: boolean;
  stale: boolean;
  aggregate_updated_at: string | null;
  from: string;
  to: string;
  summary: { qualified_views: number; search_clicks: number; detail_opens: number;
    playback_starts: number; completions: number; submissions: number; zero_results: number;
    conversions: number; conversion_rate: number };
  most_watched: TitleCount[];
  most_searched: TitleCount[];
  trending: { content_id: number; title: string }[];
  popular_queries: { term: string; mode: string; count: number; zero: number; clicks: number }[];
  zero_result_queries: { term: string; mode: string; count: number }[];
  views_over_time: DayCount[];
  searches_over_time: DayCount[];
  categories: { content__category: string | null; count: number }[];
  channels: { content__channel_id: number; content__channel__name: string; count: number }[];
  channel_top_content: Record<number, TitleCount[]>;
};

export const discoveryService = {
  async analytics(from: string, to: string, signal?: AbortSignal): Promise<DiscoveryAnalytics> {
    const { data } = await apiClient.get<DiscoveryAnalytics>('/api/discovery/analytics/', {
      params: { from, to }, signal,
    });
    return data;
  },
};
