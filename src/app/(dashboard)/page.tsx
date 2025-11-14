'use client';

import apiClient from '@/services/api';
import { Button } from '@mui/material';

// import { DashboardPage } from "@";

export default function Page() {
  const handleSync = async () => {
    const response = await apiClient.get('/api/content/search');
    alert(response?.data?.message);
  };

  return (
    <section className="px-6 lg:px-10">
      <Button variant="contained" color="primary" onClick={() => handleSync()}>
        Sync Search Data
      </Button>
    </section>
  );
}
