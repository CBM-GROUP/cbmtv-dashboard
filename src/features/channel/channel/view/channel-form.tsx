import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormDialog } from '@/components/form-dialog';
import { FormField, StatusAlert } from '@/components/form-field';

import { channelService } from 'src/services/channelService';
import { getApiErrorMessage } from 'src/services/apiError';
import { ImageUploader } from '@/components/image-uploader';

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

  useEffect(() => {
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
  }, [editItem]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setSaving(true);
    setError(null);
    try {
      if (editItem) {
        await channelService.updateChannel(editItem.id, formData);
      } else {
        await channelService.createChannel(formData);
      }
      onSave();
      onClose();
    } catch (err) {
      // The dialog stays open on failure: closing it discarded the user's
      // input and left them with nothing but a console line to go on.
      const message = getApiErrorMessage(err, 'Failed to save channel');
      console.error('Failed to save channel', message, err);
      setError(message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <FormDialog
      open={open}
      onClose={onClose}
      title={editItem ? 'Edit Channel' : 'Create Channel'}
      footer={
        <>
          <Button variant="outline" onClick={onClose} disabled={saving}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={saving || !formData.name.trim()}>
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
        label="Logo URL"
        value={formData.logo_url}
        onUpload={(url) => setFormData({ ...formData, logo_url: url })}
      />
      <ImageUploader
        label="Cover Image URL"
        value={formData.cover_image_url}
        onUpload={(url) => setFormData({ ...formData, cover_image_url: url })}
      />
    </FormDialog>
  );
}
