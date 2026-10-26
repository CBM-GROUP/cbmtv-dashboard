'use client';

import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/features/auth/context';
import { CREATIONS_CHANGED, type CreationOperation } from '@/lib/creation-operation';
import { createRecord, creationJournal } from '@/services/createRecord';
import { Button } from '@/components/ui/button';
import { useUploadManager } from './upload-manager';

export function PendingCreations() {
  const auth = useAuth();
  const { jobs, confirmAttachment } = useUploadManager();
  const [pending, setPending] = useState<CreationOperation[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const refresh = useCallback(() => {
    if (!auth?.user) { setPending([]); return; }
    try { setPending(creationJournal().pending()); }
    catch { setMessage('Pending saves could not be read. Keep browser data and inspect saved records.'); }
  }, [auth?.user]);
  useEffect(() => {
    refresh();
    window.addEventListener(CREATIONS_CHANGED, refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener(CREATIONS_CHANGED, refresh); window.removeEventListener('storage', refresh); };
  }, [refresh]);
  if (!auth?.user || (!pending.length && !message)) return null;
  const recover = async (operation: CreationOperation) => {
    if (busy) return;
    setBusy(true);
    try {
      const saved = await createRecord<Record<string, unknown> & { id: string }>(operation.endpoint, operation.payload, operation.key);
      for (const field of ['streaming_link', 'trailer_link', 'thumbnail', 'stream_link', 'advert_thumbnail', 'logo_url', 'cover_image_url']) {
        for (const job of jobs) {
          if (job.deliveryUrl && saved[field] === job.deliveryUrl) {
            confirmAttachment(job.id, { endpoint: `${operation.endpoint}${saved.id}/`, field }, saved);
          }
        }
      }
      setMessage(`Save recovered as record #${saved.id}. Refresh its list to view it.`);
      refresh();
    } catch { setMessage('Recovery could not be confirmed. The same save remains available; no new upload was started.'); }
    finally { setBusy(false); }
  };
  return <aside aria-label="Pending saves" className="fixed right-2 top-16 z-[70] max-h-72 w-80 overflow-auto rounded-lg border bg-background p-3 shadow-lg">
    <p className="font-medium">Pending saves</p>
    {message && <p role="status" className="my-2 text-sm">{message}</p>}
    {pending.map(operation => <div key={operation.key} className="mt-2 flex items-center justify-between gap-2 text-sm">
      <span className="truncate">{String(operation.payload.title || operation.payload.advert_name || operation.payload.name || 'New record')}</span>
      <Button size="sm" disabled={busy} onClick={() => { void recover(operation); }}>Recover save</Button>
    </div>)}
    {!pending.length && <Button size="sm" variant="ghost" onClick={() => setMessage('')}>Dismiss</Button>}
  </aside>;
}
