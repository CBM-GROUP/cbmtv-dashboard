import MuxUploader from "@mux/mux-uploader-react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

interface VideoUploaderProps {
  label: string;
  uploadUrl: string;
  status: string;
  isPolling: boolean;
  finalUrl: string;
  onSuccess: () => void;
}

export function VideoUploader({ label, uploadUrl, status, isPolling, finalUrl, onSuccess }: VideoUploaderProps) {
  return (
    <>
      <Typography sx={{ mt: 2 }}>{label}</Typography>
      {status === "error" && <p>Error loading uploader.</p>}
      {status === "fetching" && <p>Loading uploader...</p>}
      {status === "ready" && uploadUrl ? (
        <MuxUploader endpoint={uploadUrl} onSuccess={onSuccess} />
      ) : null}
      {isPolling && <p>Processing video...</p>}
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
