'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader, PageShell } from '@/components/page-shell';
import { useAuth } from '@/features/auth/context';

export default function SettingsPage() {
  const { user } = useAuth()!;
  return (
    <PageShell>
      <PageHeader title="Settings" description="Configure how CBM TV appears to viewers." />
      {(user?.is_superuser || user?.dashboard_permissions?.includes('content')) && <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Homepage Management</CardTitle>
          <CardDescription>Arrange featured titles and homepage sections.</CardDescription>
        </CardHeader>
        <CardContent><Button render={<Link href="/homepage" />}>Manage homepage</Button></CardContent>
      </Card>}
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Homepage hero</CardTitle>
          <CardDescription>Set how long hero images stay on screen. Configure each slide in Adverts.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button render={<Link href="/hero-settings" />}>Manage hero settings</Button>
        </CardContent>
      </Card>
    </PageShell>
  );
}
