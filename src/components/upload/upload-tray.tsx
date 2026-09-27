"use client";

import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, CopyIcon, RotateCcwIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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
    <section
      aria-label="Uploads"
      // Above dialogs (z-50) so progress stays visible while a form is open.
      className="fixed right-2 bottom-2 z-[60] w-[calc(100vw-1rem)] overflow-hidden rounded-xl bg-popover text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/10 sm:right-6 sm:bottom-6 sm:w-[380px]"
    >
      <div className="flex items-center justify-between gap-2 bg-muted/50 py-1.5 pr-1.5 pl-3">
        <h2 className="font-medium">{heading}</h2>
        <div className="flex items-center gap-1">
          {activeCount === 0 && (
            <Button variant="ghost" size="sm" onClick={dismissFinished}>
              Clear
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setCollapsed((previous) => !previous)}
            aria-label={collapsed ? "Expand uploads" : "Collapse uploads"}
            aria-expanded={!collapsed}
          >
            {collapsed ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Button>
        </div>
      </div>

      {!collapsed && (
        <ul className="max-h-80 overflow-y-auto">
          {jobs.map((job) => (
            <li key={job.id} className="grid gap-2 border-t px-3 py-2.5">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate font-medium" title={job.fileName}>
                    {job.label}
                  </p>
                  <p
                    className={cn(
                      "text-xs",
                      job.status === "error" ? "text-destructive" : "text-muted-foreground",
                    )}
                  >
                    {statusLine(job)}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-1">
                  {isActive(job) && (
                    <Button variant="ghost" size="sm" onClick={() => cancelUpload(job.id)}>
                      Cancel
                    </Button>
                  )}
                  {(job.status === "error" || job.status === "canceled") && (
                    <Button variant="outline" size="sm" onClick={() => retryUpload(job.id)}>
                      <RotateCcwIcon />
                      Retry
                    </Button>
                  )}
                  {!isActive(job) && (
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => dismissJob(job.id)}
                      aria-label="Dismiss"
                    >
                      <XIcon />
                    </Button>
                  )}
                </div>
              </div>

              {isActive(job) &&
                (job.status === "uploading" ? (
                  <Progress value={job.progress} aria-label={`${job.label} upload progress`} />
                ) : (
                  // Presigning/attaching have no measurable progress.
                  <Progress value={null} aria-label={`${job.label} in progress`} className="[&_[data-slot=progress-indicator]]:w-1/3 [&_[data-slot=progress-indicator]]:animate-pulse" />
                ))}

              {job.status === "success" && !job.attach && job.deliveryUrl && (
                <Button
                  variant="link"
                  size="sm"
                  className="h-auto justify-start px-0"
                  onClick={() => navigator.clipboard?.writeText(job.deliveryUrl)}
                >
                  <CopyIcon />
                  Copy URL
                </Button>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
