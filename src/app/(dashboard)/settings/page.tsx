import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader, PageShell } from '@/components/page-shell';

export default function SettingsPage() {
  return (
    <PageShell>
      <PageHeader title="Settings" description="Configure how CBM TV appears to viewers." />
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
