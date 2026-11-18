'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/features/auth/context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { advertisingError, advertisingService as api, type AdvertisingOperation } from '@/services/advertisingService';

export function AdvertisingSettings() {
  const { user } = useAuth()!;
  const canManage = Boolean(user?.is_superuser || user?.dashboard_permissions?.includes('advertising_settings'));
  const canView = Boolean(canManage || user?.dashboard_permissions?.includes('adverts') || user?.dashboard_permissions?.includes('advertising_view'));
  const [operation, setOperation] = useState<AdvertisingOperation | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => { if (canView) void api.operation().then(setOperation).catch(cause => setError(advertisingError(cause))); }, [canView]);
  if (!canView) return null;
  return <Card className="max-w-xl"><CardHeader><CardTitle>Advertising availability</CardTitle><CardDescription>Paid advertising requires both the backend safety switch and the operational setting. Changes are audited by the backend.</CardDescription></CardHeader>
    <CardContent className="grid gap-3 text-sm">{error && <p role="alert" className="text-destructive">{error}</p>}{!operation ? <p>Loading advertising settings…</p> : <><p>Backend emergency availability: <strong>{operation.backend_enabled ? 'Enabled' : 'Disabled'}</strong></p><p>Dashboard operational status: <strong>{operation.operational_enabled ? 'Enabled' : 'Paused'}</strong></p><p>Effective paid advertising: <strong>{operation.effective_enabled ? 'Available' : 'Unavailable'}</strong></p>
      {canManage && <Button className="w-fit" disabled={busy || !operation.backend_enabled && !operation.operational_enabled} variant={operation.operational_enabled ? 'destructive' : 'default'} onClick={() => {
        if (!window.confirm(`${operation.operational_enabled ? 'Pause' : 'Enable'} paid advertising?`)) return;
        setBusy(true); setError(''); void api.setOperation(!operation.operational_enabled).then(setOperation).catch(cause => setError(advertisingError(cause))).finally(() => setBusy(false));
      }}>{busy ? 'Saving…' : operation.operational_enabled ? 'Pause advertising' : 'Enable advertising'}</Button>}
      {!operation.backend_enabled && <p>The backend safety switch is disabled. Dashboard settings cannot override it.</p>}</>}</CardContent></Card>;
}
