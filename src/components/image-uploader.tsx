import type { ChangeEvent } from 'react';
import { useEffect, useId, useState } from 'react';
import Image from 'next/image';
import { ImageUpIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { FormField } from '@/components/form-field';
import { useMediaUpload } from '@/hooks/use-media-upload';

interface ImageUploaderProps {
  onUpload: (url: string) => void;
  /** Null until an editor uploads one; the API returns null for unset media. */
  value: string | null | undefined;
  label: string;
}

export function ImageUploader({ onUpload, value, label }: ImageUploaderProps) {
  const id = useId();
  const uploader = useMediaUpload('image');
  const [previewFailed, setPreviewFailed] = useState(false);
  const uploading = uploader.status === 'uploading';

  useEffect(() => {
    setPreviewFailed(false);
  }, [value]);

  const hasValidPreviewUrl = (() => {
    if (!value) return false;

    try {
      const url = new URL(value);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  })();

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    try {
      onUpload(await uploader.uploadFile(file));
    } catch (error) {
      console.error('Failed to upload image', error);
    }
  };

  const error =
    uploader.error ||
    (value && !hasValidPreviewUrl ? 'Thumbnail URL must be a complete HTTP or HTTPS URL.' : '') ||
    (hasValidPreviewUrl && previewFailed ? 'The uploaded thumbnail could not be displayed.' : '');

  return (
    <FormField label={label} htmlFor={id} error={error || undefined}>
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-dashed border-input bg-muted/50 text-muted-foreground transition-colors hover:bg-muted focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50',
            uploading && 'animate-pulse',
          )}
        >
          <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            aria-label={`Upload ${label}`}
            className="absolute inset-0 z-10 cursor-pointer opacity-0"
          />
          {uploading ? (
            <span className="text-xs font-medium tabular-nums">{uploader.progress}%</span>
          ) : (
            <ImageUpIcon className="size-5" />
          )}
        </div>
        <Input id={id} type="text" value={value ?? ''} placeholder="Upload an image" readOnly disabled />
      </div>
      {hasValidPreviewUrl && !previewFailed && (
        <div className="mt-1 flex justify-center overflow-hidden rounded-lg border bg-muted/30">
          <Image
            src={value as string}
            alt="Preview"
            width={480}
            height={270}
            sizes="(max-width: 600px) 100vw, 480px"
            // Previews point at whatever host an editor saved. next/image
            // THROWS during render for a hostname missing from next.config.js
            // remotePatterns, which takes down the whole form and never
            // reaches onError. unoptimized skips that host check.
            unoptimized
            onError={() => setPreviewFailed(true)}
            className="h-auto max-h-[270px] w-full object-contain"
          />
        </div>
      )}
    </FormField>
  );
}
