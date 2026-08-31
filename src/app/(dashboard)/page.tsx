'use client';

import apiClient from '@/services/api';
import { Button } from '@mui/material';

// import { DashboardPage } from "@";

export default function Page() {
  // Was `GET /api/content/search`. That route rebuilt the whole Meilisearch
  // index, which made an unauthenticated GET destructive for every client; it
  // is now a read-only search endpoint. The rebuild moved to
  // POST /api/content/reindex/ (admin only).
  //
  // The trailing slash is required: Django's APPEND_SLASH cannot redirect a
  // POST without discarding the request, so `/reindex` would fail where
  // `/reindex/` succeeds.
  const handleSync = async () => {
    try {
      const response = await apiClient.post('/api/content/reindex/');
      alert(response?.data?.message ?? 'Search data synced.');
    } catch (error) {
      const status = (error as { response?: { status?: number } })?.response?.status;
      const message = (error as { response?: { data?: { message?: string } } })?.response
        ?.data?.message;
      if (status === 401 || status === 403) {
        alert('Sync failed: this action requires an admin account.');
      } else {
        alert(`Sync failed: ${message ?? (error as Error).message}`);
      }
    }
  };

  return (
    <section className="px-6 lg:px-10">
      <Button variant="contained" color="primary" onClick={() => handleSync()}>
        Sync Search Data
      </Button>
    </section>
  );
}
