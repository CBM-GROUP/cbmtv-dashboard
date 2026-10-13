import apiClient from './api';

export type CountRow = { count: number };
export type RankedTitle = { content_id: number; title: string; status: string | null };
export type DashboardAnalytics = {
  content: {
    total_records: number;
    by_status: (CountRow & { status: string })[];
    by_type: (CountRow & { type: string })[];
    channel_count: number;
    advert_count: number;
  };
  users: { total: number; active: number; inactive: number; pending_activation: number };
  saved: {
    total_records: number;
    distinct_users: number;
    most_saved_titles: (RankedTitle & { saved_records: number })[];
  };
  progress: {
    users_with_records: number;
    unfinished_records: number;
    unfinished_titles: (RankedTitle & { users_with_unfinished_progress: number })[];
  };
};

export const analyticsService = {
  async overview() {
    const response = await apiClient.get<DashboardAnalytics>('/api/dashboard/analytics/');
    return response.data;
  },
};
