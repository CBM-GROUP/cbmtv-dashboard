"use client";

import { useState } from "react";
import { BiCloudUpload, BiCopy } from "react-icons/bi";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useMediaUpload } from "@/hooks/use-media-upload";

export default function AwsVideoUploadPage() {
  const uploader = useMediaUpload("video");
  const [copied, setCopied] = useState(false);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setCopied(false);
    await uploader.uploadFile(file).catch(() => undefined);
  };

  const copyDeliveryUrl = async () => {
    if (!uploader.finalUrl) return;
    await navigator.clipboard.writeText(uploader.finalUrl);
    setCopied(true);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: 960, mx: "auto" }}>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Typography variant="h4">AWS Media Upload</Typography>
        <Typography color="text.secondary">
          Videos upload directly from your browser to S3. After upload, use the CloudFront URL
          when creating or editing content.
        </Typography>
      </Stack>

      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Button
              component="label"
              variant="contained"
              startIcon={<BiCloudUpload />}
              disabled={uploader.status === "uploading"}
              sx={{ alignSelf: "flex-start" }}
            >
              {uploader.status === "uploading"
                ? `Uploading ${uploader.progress}%`
                : "Select video"}
              <input
                hidden
                type="file"
                accept="video/mp4,video/x-m4v,video/quicktime,video/webm"
                onChange={(event) => {
                  void handleFile(event.target.files?.[0]);
                  event.target.value = "";
                }}
              />
            </Button>

            {uploader.status === "uploading" && (
              <LinearProgress variant="determinate" value={uploader.progress} />
            )}

            {uploader.status === "error" && <Alert severity="error">{uploader.error}</Alert>}
            {uploader.status === "success" && (
              <Alert severity="success">Upload completed successfully.</Alert>
            )}

            {uploader.finalUrl && (
              <>
                <TextField
                  label="CloudFront delivery URL"
                  value={uploader.finalUrl}
                  fullWidth
                  slotProps={{ input: { readOnly: true } }}
                />
                <Button
                  variant="outlined"
                  startIcon={<BiCopy />}
                  onClick={() => void copyDeliveryUrl()}
                  sx={{ alignSelf: "flex-start" }}
                >
                  {copied ? "Copied" : "Copy URL"}
                </Button>
                <Box
                  component="video"
                  src={uploader.finalUrl}
                  controls
                  sx={{ width: "100%", maxHeight: "65vh", bgcolor: "black", borderRadius: 1 }}
                >
                  Your browser does not support video playback.
                </Box>
              </>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
