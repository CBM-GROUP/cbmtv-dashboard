'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PageHeader, PageShell } from '@/components/page-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StatusAlert } from '@/components/form-field';
import { useAuth } from '@/features/auth/context';
import { advertisingService, advertisingError, type AdvertisingSettings } from '@/services/advertisingService';

const fields = [
  { key: 'enabled', label: 'Master advertising', detail: 'Allow paid advertising where its placement and channel are enabled.' },
  { key: 'homepage_enabled', label: 'Homepage advertising', detail: 'Allow configured paid homepage placements.' },
  { key: 'video_enabled', label: 'Video advertising', detail: 'Allow paid pre-roll, mid-roll and post-roll placements.' },
] as const;

export default function AdvertisingSettingsPage() {
  const { user } = useAuth()!;
  const [settings, setSettings] = useState<AdvertisingSettings | null>(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    advertisingService.settings().then(setSettings).catch(cause => setError(advertisingError(cause)));
  }, []);
  const save = async () => {
    if (!settings) return;
    setSaving(true); setError(''); setMessage('');
    try {
      const next = await advertisingService.saveSettings({ enabled: settings.enabled, homepage_enabled: settings.homepage_enabled, video_enabled: settings.video_enabled });
      setSettings(next); setMessage('Advertising settings saved.');
    } catch (cause) { setError(advertisingError(cause)); }
    finally { setSaving(false); }
  };
  return <PageShell><PageHeader title="Advertising settings" description="Control paid advertising within the existing CBM TV dashboard." />
    <div className="mb-4"><Link className="underline" href="/advertising">Back to Advertising</Link></div>
    {error && <StatusAlert>{error}</StatusAlert>}{message && <p role="status">{message}</p>}
    {!settings ? <p role="status">Loading advertising settings...</p> : <Card className="grid gap-5 p-5">
      <p className="text-sm">Environment kill switch: <strong>{settings.environment_enabled ? 'On' : 'Off'}</strong>. Effective delivery: <strong>{settings.effective_enabled ? 'On' : 'Off'}</strong>. The environment switch always takes precedence.</p>
      {fields.map(({ key, label, detail }) => <label key={key} className="flex items-start gap-3"><input type="checkbox" className="mt-1" checked={settings[key]} disabled={!user?.is_superuser || saving} onChange={event => setSettings(current => current && ({ ...current, [key]: event.target.checked }))} /><span><strong>{label}</strong><span className="block text-sm text-muted-foreground">{detail}</span></span></label>)}
      {user?.is_superuser ? <Button className="w-fit" disabled={saving} onClick={() => void save()}>{saving ? 'Saving...' : 'Save settings'}</Button> : <p className="text-sm text-muted-foreground">Only a dashboard superuser can change activation.</p>}
    </Card>}
  </PageShell>;
}
