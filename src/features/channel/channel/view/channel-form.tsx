import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import { channelService } from 'src/services/channelService';
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

  useEffect(() => {
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
    try {
      if (editItem) {
        await channelService.updateChannel(editItem.id, formData);
      } else {
        await channelService.createChannel(formData);
      }
      onSave();
      onClose();
    } catch (error) {
      console.error('Failed to save channel', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{editItem ? 'Edit Channel' : 'Create Channel'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          type="text"
          fullWidth
          multiline
          minRows={2}
          value={formData.description}
          onChange={handleChange}
        />
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
