"use client";

import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import type { UploadJob } from "./upload-manager";
import { isActive, useUploadManager } from "./upload-manager";

function statusLine(job: UploadJob) {
  switch (job.status) {
    case "presigning":
      return "Preparing…";
    case "uploading":
      return `${job.progress}%`;
    case "attaching":
      return "Saving link…";
    case "success":
      return job.attach ? "Done" : "Done — not attached to a record";
    case "canceled":
      return "Canceled";
    case "error":
      return job.error;
    default:
      return "";
  }
}

export function UploadTray() {
  const { jobs, cancelUpload, retryUpload, dismissJob, dismissFinished } = useUploadManager();
  const [collapsed, setCollapsed] = useState(false);

  const activeCount = jobs.filter(isActive).length;

  // Closing the tab kills the XHR and S3 discards the partial upload, so warn
  // while anything is still in flight. Browsers show their own generic text.
  useEffect(() => {
    if (activeCount === 0) return undefined;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [activeCount]);

  if (jobs.length === 0) return null;

  const heading =
    activeCount > 0
      ? `Uploading ${activeCount} file${activeCount === 1 ? "" : "s"}`
      : `Uploads (${jobs.length})`;

  return (
    <Paper
      elevation={8}
      sx={{
        position: "fixed",
        right: { xs: 8, sm: 24 },
        bottom: { xs: 8, sm: 24 },
        width: { xs: "calc(100vw - 16px)", sm: 380 },
        zIndex: (theme) => theme.zIndex.snackbar,
        overflow: "hidden",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1, bgcolor: "background.neutral" }}
      >
        <Typography variant="subtitle2">{heading}</Typography>
        <Stack direction="row" spacing={0.5}>
          {activeCount === 0 && (
            <Button size="small" onClick={dismissFinished}>
              Clear
            </Button>
          )}
          <IconButton
            size="small"
            onClick={() => setCollapsed((previous) => !previous)}
            aria-label={collapsed ? "Expand uploads" : "Collapse uploads"}
          >
            {collapsed ? "▲" : "▼"}
          </IconButton>
        </Stack>
      </Stack>

      <Collapse in={!collapsed}>
        <Box sx={{ maxHeight: 320, overflowY: "auto" }}>
          {jobs.map((job) => (
            <Box key={job.id} sx={{ px: 2, py: 1.5, borderTop: "1px solid", borderColor: "divider" }}>
              <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={1}>
                <Box sx={{ minWidth: 0 }}>
                  <Tooltip title={job.fileName}>
                    <Typography variant="body2" noWrap>
                      {job.label}
                    </Typography>
                  </Tooltip>
                  <Typography
                    variant="caption"
                    color={job.status === "error" ? "error.main" : "text.secondary"}
                  >
                    {statusLine(job)}
                  </Typography>
                </Box>

                <Stack direction="row" spacing={0.5} sx={{ flexShrink: 0 }}>
                  {isActive(job) && (
                    <Button size="small" color="inherit" onClick={() => cancelUpload(job.id)}>
                      Cancel
                    </Button>
                  )}
                  {(job.status === "error" || job.status === "canceled") && (
                    <Button size="small" onClick={() => retryUpload(job.id)}>
                      Retry
                    </Button>
                  )}
                  {!isActive(job) && (
                    <IconButton size="small" onClick={() => dismissJob(job.id)} aria-label="Dismiss">
                      ✕
                    </IconButton>
                  )}
                </Stack>
              </Stack>

              {isActive(job) && (
                <LinearProgress
                  variant={job.status === "uploading" ? "determinate" : "indeterminate"}
                  value={job.progress}
                  sx={{ mt: 1 }}
                />
              )}

              {job.status === "success" && !job.attach && job.deliveryUrl && (
                <Button
                  size="small"
                  sx={{ mt: 0.5, px: 0 }}
                  onClick={() => navigator.clipboard?.writeText(job.deliveryUrl)}
                >
                  Copy URL
                </Button>
              )}
            </Box>
          ))}
        </Box>
      </Collapse>
    </Paper>
  );
}
