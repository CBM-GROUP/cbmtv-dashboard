# Advertising dashboard Phase 2A and integration stabilization

The `/advertising` workspace has Clients, Ad Library, Delivery, and Reports. The sidebar has one Advertising entry. The editorial Adverts route and homepage controls remain separate.

## API contract

- Advertisers: paginated `q` and `active` filters.
- Campaigns: paginated `advertiser`, `q`, `status`, and `approval` filters.
- Creatives: paginated `advertiser`, `campaign`, `q`, `kind`, `approval`, and `direct` filters. Each row includes advertiser and campaign names plus allocation count and status counts.
- Allocations: paginated `creative`, `advertiser`, `campaign`, `placement`, `status`, and `q` filters.
- Reports: date, advertiser, campaign, creative, placement, and format filters. Creative rows include advertiser and campaign names for direct and campaign creatives.
- Creative creation accepts an optional `Idempotency-Key` header. The key is scoped to the authenticated administrator. Replays return the original 201 response and `Idempotent-Replay: true`; a changed payload returns 409. Calls without the header retain the old behavior.

The dashboard fetches a page at a time for clients, campaigns, creatives, and allocations. Searchable pickers fetch matching records and resolve a selected record by ID when it is outside the first page. Placements are the only complete list loaded into the workspace.

The multi-file uploader assigns a stable key to each file. After a network or server failure with an uncertain result, Retry resends the same creative payload and key. It reuses the completed media upload, so the replay cannot create a second creative. A confirmed save remains completed.

## Verification and limits

Phase 2A.1 was exercised with the real Django backend and Next dashboard proxy on an isolated SQLite database and local S3 emulator. This included image and protected multipart video upload, approval and rejection, destination inheritance, dormant allocation creation and updates, filters, reports, operational settings, and a limited dashboard role. The browser regression test covers 390 px and 1440 px layouts. Backend tests, dashboard tests, TypeScript, lint, and production build pass.

The complete migration chain through 0008 and the 49 advertising tests passed on a disposable PostgreSQL 16 container, including ownership backfill, allocation constraints, and concurrent idempotency. A short locally generated MP4 passed protected multipart upload, FFmpeg HLS processing, preview, and approval through the actual APIs.

## Phase 2B delivery display

The Delivery workspace now reads backend eligibility reasons on each allocation. It distinguishes paused, scheduled, expired, blocked, and eligible configurations, and shows whether the environment selects campaigns or allocations. "Eligible for selection" does not claim that an impression was delivered; reports remain the source for recorded delivery. The backend allocation strategy is disabled by default and cannot be enabled from this dashboard. Existing client, upload, approval, and report workflows remain available.
