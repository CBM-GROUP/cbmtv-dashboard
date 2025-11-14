import type { ChangeEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BiLoader, BiUpload } from 'react-icons/bi';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image';

interface ImageUploaderProps {
  onUpload: (url: string) => void;
  value: string;
  label: string;
}

export function ImageUploader({ onUpload, value, label }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    setIsUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(
        'https://development.autofore.com/api/upload-image',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      onUpload(response.data);
    } catch (error) {
      console.error('Failed to upload image', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <div
          className={`relative h-[80px] w-[80px] bg-gray-200 flex-shrink-0 rounded-[8px] mr-[10px] flex items-center justify-center overflow-hidden ${isUploading && 'animate-pulse'}`}
        >
          <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="w-full h-full absolute top-0 left-0 z-10 opacity-0 cursor-pointer"
          />
          <div className="w-full h-full flex items-center justify-center bg-gray-200 border-0">
            {isUploading ? <BiLoader /> : <BiUpload />}
          </div>
        </div>

        <TextField margin="dense" label={label} type="text" fullWidth value={value} disabled />
      </div>
      {value && (
        <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src={value}
            alt="Preview"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover"
            style={{ width: '100%', height: 'auto', maxHeight: 200, borderRadius: 8 }}
          />
        </Box>
      )}
    </>
  );
}
