import type { ChangeEvent } from "react";
import { useId } from "react";
import { FileVideoIcon, LoaderCircleIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { buttonVariants } from "@/components/ui/button";
import { FormField } from "@/components/form-field";
import { cn } from "@/lib/utils";

interface VideoUploaderProps {
  label: string;
  status: string;
  progress: number;
  error: string;
  /** Null/empty until the video is uploaded. */
  finalUrl: string | null | undefined;
  onUpload: (file: File) => Promise<string>;
}

export function VideoUploader({ label, status, progress, error, finalUrl, onUpload }: VideoUploaderProps) {
  const id = useId();
  const uploading = status === "uploading";

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) await onUpload(file).catch(() => undefined);
    event.target.value = "";
  };

  return (
    <FormField label={label} htmlFor={id} error={status === "error" ? error : undefined}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label
          aria-disabled={uploading}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "cursor-pointer focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50",
            uploading && "pointer-events-none opacity-50",
          )}
        >
          {uploading ? <LoaderCircleIcon className="animate-spin" /> : <FileVideoIcon />}
          {uploading ? `Uploading... ${progress}%` : `Select ${label}`}
          <input
            className="sr-only"
            type="file"
            disabled={uploading}
            accept="video/mp4,video/x-m4v,video/quicktime,video/webm"
            onChange={handleChange}
          />
        </label>
        <Input
          id={id}
          type="text"
          aria-label={`${label} URL`}
          value={finalUrl ?? ""}
          placeholder="No video uploaded"
          readOnly
          disabled
        />
      </div>
      {uploading && <Progress value={progress} aria-label={`${label} upload progress`} />}
    </FormField>
  );
}
