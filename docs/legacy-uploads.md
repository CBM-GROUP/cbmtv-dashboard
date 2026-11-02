# Legacy upload route retirement

Baseline: locally cached origin/main 10544039116f8377c6e13caefb56b1e6f27738b7.
The active forms use the Django-authorized S3 upload manager and multipart
transport. Search found no imports of useMuxUpload in current forms/components.

The App Router handlers for /api/create-upload, /api/upload-status and
/api/asset-details instantiated @mux/mux-node with server environment credentials
and performed provider operations without authentication or section checks.
The production build includes these routes. No live credential availability or
deployed version was tested. The legacy handlers call Mux APIs; the current S3
flow calls Django media endpoints.

All three handlers now return HTTP 410 with a fixed response and no-store. The
three duplicate handlers under src/api are closed the same way, preventing a
future re-export from reopening the bypass. No provider SDK is imported or called
by these six handlers. Anonymous, viewer and staff callers receive the same closed
response. Existing media playback, Mux player dependencies, Django permissions,
and S3 upload/complete/abort paths remain intact.

The unused use-mux-upload hook remains as legacy source and would receive 410.
src/api/create-live is outside the App Router and has no located consumers; it
is not exposed as a Next route by this build. Do not mount that helper without
an independent authorization review. Remove server MUX credentials only after
the operator checks other deployments/services; no secret was removed here.

Validation: pnpm test:foundation checks the real six dependency-free handlers.
The existing Node tests, lint, typecheck and production build are checked locally.
A temporary built Next server also verifies the three routed handlers reject
anonymous and synthetic bearer headers with 410. The dashboard CI runs the new
foundation regression command before its existing lint/typecheck/build gates.

Scope: feat/backend-foundation. This code change does not deploy the dashboard;
publication and merge status are tracked in the pull request. Backend details
and rollout dependencies are recorded in the
companion backend worktree's docs/operations.md and docs/foundation-review.md.
