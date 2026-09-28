'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FormField } from '@/components/form-field';
import { PageHeader, PageShell } from '@/components/page-shell';
import { heroSettingsService } from '@/services/heroSettingsService';

export default function HeroSettingsPage() {
  const [duration, setDuration] = useState(20);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    heroSettingsService.get()
      .then((settings) => setDuration(settings.image_duration_seconds))
      .catch(() => setMessage('Could not load hero settings. Check that the backend migration is deployed.'))
      .finally(() => setLoading(false));
  }, []);

  const save = async () => {
    if (!Number.isInteger(duration) || duration < 5 || duration > 120) {
      setMessage('Choose a duration between 5 and 120 seconds.');
      return;
    }
    setSaving(true);
    setMessage('');
    try {
      const settings = await heroSettingsService.update(duration);
      setDuration(settings.image_duration_seconds);
      setMessage('Hero settings saved.');
    } catch {
      setMessage('Could not save hero settings.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <PageShell>
      <PageHeader title="Homepage hero settings" description="Control how long image slides stay on screen. Videos advance when they finish." />
      <Card className="max-w-xl">
        <CardContent className="grid gap-5">
          <FormField label="Image slide duration (seconds)" htmlFor="hero-image-duration">
            <Input
              id="hero-image-duration"
              type="number"
              min={5}
              max={120}
              value={duration}
              disabled={loading || saving}
              onChange={(event) => setDuration(Number(event.target.value))}
            />
          </FormField>
          <p className="text-sm text-muted-foreground">Set each slide’s visibility and order from its advert form.</p>
          {message && <p role="status" className="text-sm">{message}</p>}
          <Button onClick={save} disabled={loading || saving} className="w-fit">{saving ? 'Saving…' : 'Save settings'}</Button>
        </CardContent>
      </Card>
    </PageShell>
  );
}
