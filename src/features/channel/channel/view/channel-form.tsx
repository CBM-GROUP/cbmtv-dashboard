import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormDialog } from '@/components/form-dialog';
import { FormField, StatusAlert } from '@/components/form-field';

import { channelService } from 'src/services/channelService';
import { getApiErrorMessage } from 'src/services/apiError';
import { ImageUploader, type ConfirmImage } from '@/components/image-uploader';

import { Channel } from '@/types';

interface ChannelFormProps {
  open: boolean;
  onClose: () => void;
  item: Channel | null;
  onSave: () => void;
}

export function ChannelForm({ open, onClose, item: editItem, onSave }: ChannelFormProps) {
  const [formData, setFormData] = useState<Omit<Channel, 'id'>>({
    name: '',
    description: '',
    logo_url: '',
    cover_image_url: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const confirmations = useRef<Partial<Record<'logo_url' | 'cover_image_url', ConfirmImage>>>({});
  const savedId = useRef<string | null>(null);
  const creationKey = useRef('');
  const [pendingImages, setPendingImages] = useState({ logo_url: false, cover_image_url: false });
  const imageUploading = pendingImages.logo_url || pendingImages.cover_image_url;

  useEffect(() => {
    if (!open) return;
    creationKey.current = crypto.randomUUID();
    confirmations.current = {};
    savedId.current = null;
    setPendingImages({ logo_url: false, cover_image_url: false });
    setError(null);
    if (editItem) {
      setFormData({
        name: editItem.name ?? '',
        description: editItem.description ?? '',
        logo_url: editItem.logo_url ?? '',
        cover_image_url: editItem.cover_image_url ?? '',
      });
    } else {
      setFormData({
        name: '',
        description: '',
        logo_url: '',
        cover_image_url: '',
      });
    }
  }, [editItem, open]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (saving || imageUploading) return;
    setSaving(true);
    setError(null);
    try {
      const id = editItem?.id ?? savedId.current;
      const saved = id ? await channelService.updateChannel(id, formData) : await channelService.createChannel(formData, creationKey.current);
      if (!/^[1-9]\d*$/.test(String(saved?.id)) || (id && String(saved.id) !== String(id))) throw new Error('Channel save could not be confirmed.');
      savedId.current = saved.id;
      for (const field of ['logo_url', 'cover_image_url'] as const) {
        const confirm = confirmations.current[field];
        if (confirm && !confirm(saved, `/api/channels/${saved.id}/`, field)) {
          throw new Error('Channel was saved but its image attachment could not be confirmed.');
        }
      }
      onSave();
      onClose();
    } catch (err) {
      // The dialog stays open on failure: closing it discarded the user's
      // input and left them with nothing but a console line to go on.
      const message = getApiErrorMessage(err, 'Failed to save channel');
      setError(message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <FormDialog
      open={open}
      onClose={() => { if (!saving) onClose(); }}
      title={editItem ? 'Edit Channel' : 'Create Channel'}
      footer={
        <>
          <Button variant="outline" onClick={onClose} disabled={saving}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={saving || imageUploading || !formData.name.trim()}>
            {saving ? 'Saving...' : 'Save'}
          </Button>
        </>
      }
    >
      {error && <StatusAlert>{error}</StatusAlert>}
      <FormField label="Name" htmlFor="channel-name">
        <Input id="channel-name" autoFocus name="name" value={formData.name} onChange={handleChange} />
      </FormField>
      <FormField label="Description" htmlFor="channel-description">
        <Textarea
          id="channel-description"
          name="description"
          rows={2}
          value={formData.description}
          onChange={handleChange}
        />
      </FormField>
      <ImageUploader
        key={`logo:${open}:${editItem?.id ?? 'new'}`}
        disabled={saving}
        onPendingChange={(pending) => setPendingImages((previous) => ({ ...previous, logo_url: pending }))}
        label="Logo URL"
        value={formData.logo_url}
        onUpload={(url, confirm) => { confirmations.current.logo_url = confirm; setFormData((previous) => ({ ...previous, logo_url: url })); }}
      />
      <ImageUploader
        key={`cover:${open}:${editItem?.id ?? 'new'}`}
        disabled={saving}
        onPendingChange={(pending) => setPendingImages((previous) => ({ ...previous, cover_image_url: pending }))}
        label="Cover Image URL"
        value={formData.cover_image_url}
        onUpload={(url, confirm) => { confirmations.current.cover_image_url = confirm; setFormData((previous) => ({ ...previous, cover_image_url: url })); }}
      />
    </FormDialog>
  );
}
