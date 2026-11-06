'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FormField } from '@/components/form-field';
import { PageHeader, PageShell } from '@/components/page-shell';
import { heroSettingsService, type HeroSettings } from '@/services/heroSettingsService';

export default function HeroSettingsPage() {
  const [settings, setSettings] = useState<HeroSettings>({ image_duration_seconds: 5, display_mode: 'thumbnail_trailer', trailer_preview_seconds: 20 });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    heroSettingsService.get()
      .then((saved) => setSettings({ image_duration_seconds: saved.image_duration_seconds, display_mode: saved.display_mode ?? 'thumbnail_trailer', trailer_preview_seconds: saved.trailer_preview_seconds ?? 20 }))
      .catch(() => setMessage('Could not load hero settings. Check that the backend migration is deployed.'))
      .finally(() => setLoading(false));
  }, []);

  const save = async () => {
    if (!Number.isInteger(settings.image_duration_seconds) || settings.image_duration_seconds < 5 || settings.image_duration_seconds > 120 ||
        !Number.isInteger(settings.trailer_preview_seconds) || settings.trailer_preview_seconds < 1 || settings.trailer_preview_seconds > 120) {
      setMessage('Choose a thumbnail duration of 5–120 seconds and a trailer duration of 1–120 seconds.');
      return;
    }
    setSaving(true);
    setMessage('');
    try {
      const saved = await heroSettingsService.update(settings);
      setSettings(saved);
      setMessage('Hero settings saved.');
    } catch {
      setMessage('Could not save hero settings.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <PageShell>
      <PageHeader title="Homepage hero settings" description="Control thumbnail and trailer previews for the homepage hero." />
      <Card className="max-w-xl">
        <CardContent className="grid gap-5">
          <FormField label="Hero display mode" htmlFor="hero-display-mode">
            <select id="hero-display-mode" className="flex h-9 w-full rounded-md border bg-transparent px-3 text-sm" value={settings.display_mode} disabled={loading || saving} onChange={(event) => setSettings({ ...settings, display_mode: event.target.value as HeroSettings['display_mode'] })}>
              <option value="thumbnails_only">Thumbnails only</option>
              <option value="thumbnail_trailer">Thumbnail + trailer</option>
            </select>
          </FormField>
          <FormField label="Thumbnail duration (seconds)" htmlFor="hero-image-duration">
            <Input
              id="hero-image-duration"
              type="number"
              min={5}
              max={120}
              value={settings.image_duration_seconds}
              disabled={loading || saving}
              onChange={(event) => setSettings({ ...settings, image_duration_seconds: Number(event.target.value) })}
            />
          </FormField>
          <FormField label="Trailer preview duration (seconds)" htmlFor="hero-trailer-duration">
            <Input id="hero-trailer-duration" type="number" min={1} max={120} value={settings.trailer_preview_seconds} disabled={loading || saving || settings.display_mode === 'thumbnails_only'} onChange={(event) => setSettings({ ...settings, trailer_preview_seconds: Number(event.target.value) })} />
          </FormField>
          <p className="text-sm text-muted-foreground">Set each slide’s visibility and order from its advert form.</p>
          {message && <p role="status" className="text-sm">{message}</p>}
          <Button onClick={save} disabled={loading || saving} className="w-fit">{saving ? 'Saving…' : 'Save settings'}</Button>
        </CardContent>
      </Card>
    </PageShell>
  );
}
