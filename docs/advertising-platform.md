# Advertising workspace

Local Branch 6 work, with no commit, push, merge, deployment or activation. The
new `/advertising` route and navigation item require the existing `adverts`
permission. The original editorial adverts and homepage/channel configuration
remain available. Custom reviewer roles additionally need `advertising_approval`;
the UI hides approval/rejection controls otherwise and the backend enforces access.

The workspace provides Overview, Advertisers, Campaigns, Creatives, Placements and
Reports. It uses the existing PageShell, cards, fields, status alerts, buttons,
authentication, API client and protected multipart video uploader.

Advertisers include private contact and billing-reference fields, activation and
filtered associated campaigns. Campaigns have local-time schedules (sent as aware
ISO timestamps), objective, priority, total/daily/session caps, skip policy,
placement choices and contextual targeting. Targeting uses server-filtered
eligible categories/genres/channels/titles; no channel membership assumptions are
introduced. Campaign edits reset review and pause delivery. Submit, approve,
reject, resume, pause and completion are explicit backend actions.

Image uploads use bounded server decoding/resizing, and return a verified owned
image ID. Videos use the existing protected S3 multipart/HLS queue, with a 1 GiB
advertising limit. Saving queues processing. Media readiness/retry, errors, source
preview and approval are explicit. Preview the current revision after submitting
it; changing assets, destinations or metadata invalidates prior approval and
outstanding decisions. Optional title/channel sponsorship and collections of up
to six published titles are supported.

Placement editing enables delivery and configures up to three main-video mid-roll
breakpoints. Optional homepage advertising entries are added/reordered/enabled in
the existing Homepage Management layout. At most two sponsored sections may be
enabled; the first three sections remain for browsing. The editorial hero stays
separate. No additional Featured Channels section is created.

Reports use actual advertising events, UTC date filtering over retained 90 days,
campaign/advertiser filters, per-placement/day performance, cap counters and
failed/no-ad delivery. Zero-denominator rates display a dash and empty datasets
display an explicit empty state. No example production metrics or revenue are
inserted. Full retention, backend API contracts, media dependencies, rollout and
rollback instructions are in the backend's `docs/advertising-platform.md` and
workspace `BRANCH6_ADVERTISING_REVIEW.md`.

Verification: Node tests in `tests/*.test.cjs`, `tests/*.test.mjs` and
`src/features/content/content/save-content.test.cjs`; TypeScript; ESLint; production
build. `node tests/advertising.browser.mjs` runs the actual production dashboard
against intercepted local API fixtures, testing CRUD, workflow, upload, preview,
permissions, empty reports, errors and responsive layouts. It uses Next 3015 and
Chrome CDP 9345, shuts down its own processes, and writes artifacts under
`.next/advertising-proof/`. It does not contact production APIs. Real staff staging
browser checks remain required before release.
