import type { ChangeEvent } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

interface VideoUploaderProps {
  label: string;
  status: string;
  progress: number;
  error: string;
  finalUrl: string;
  onUpload: (file: File) => Promise<string>;
}

export function VideoUploader({ label, status, progress, error, finalUrl, onUpload }: VideoUploaderProps) {
  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) await onUpload(file).catch(() => undefined);
    event.target.value = "";
  };

  return (
    <>
      <Typography sx={{ mt: 2 }}>{label}</Typography>
      <Button component="label" variant="outlined" disabled={status === "uploading"} sx={{ my: 1 }}>
        {status === "uploading" ? `Uploading... ${progress}%` : `Select ${label}`}
        <input hidden type="file" accept="video/mp4,video/x-m4v,video/quicktime,video/webm" onChange={handleChange} />
      </Button>
      {status === "error" && <p role="alert">{error}</p>}
      <TextField
        margin="dense"
        label={`${label} URL`}
        type="text"
        fullWidth
        value={finalUrl}
        disabled
      />
    </>
  );
}
