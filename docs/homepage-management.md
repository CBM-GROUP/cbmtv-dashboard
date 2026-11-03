# Homepage workspace

Route: `/homepage`, gated by the existing **Content** dashboard section. Backend
permissions enforce every read, save and preview. This review branch is based on
`587b16ec200204d81db982301660a2f66d2baf3f` (`origin/main`, including field search).

The workspace contains Featured Titles, Featured Channels, Homepage Layout and
New Releases Settings. Search the fetched paginated catalogue, add approved titles
from active channels, reorder/remove placements and optionally schedule them in
the browser's local timezone. API dates carry an explicit offset/UTC marker.
Channels without approved content remain hidden publicly; inactive placements
must be removed before saving. Hero stays first and enabled. Continue Watching
is required, personalized and cannot be disabled/deleted. Optional rails can move
or be disabled. New Releases supports 1–1000 hours/days/months/years, default 30 days.

Save atomically replaces configuration; Cancel restores the last successful load
or save. Invalid/rejected saves retain edits and show useful errors. Preview sends
the unsaved draft to the same backend eligibility logic, without saving or loading
staff viewing history. Selectors suppress duplicates and inactive-channel titles.

Services use `GET/PUT /api/homepage/manage/` and `POST /api/homepage/preview/`.
Placement order is array order. Lists carry read-only `detail` records. The channel
service requests `scope=dashboard`, retaining scope over pagination so management
can still inspect inactive channels. Backend permissions accept Channel or Content
editors for that scoped read; no new role type is introduced.

Local verification: 45 Node tests (including existing content Save tests), full
typecheck, lint and production build passed. The only dashboard lint warning is
pre-existing in `next.config.ts`. `pnpm test:homepage` runs focused service/validation
tests. The backend's `scripts/homepage-browser.mjs` additionally verifies the real
workspace against a disposable local API: selection, reordering, validation,
preview, Save/Cancel, permission rejection and draft preservation after a 403.

See backend `docs/homepage-management.md` for complete API examples, migrations,
legacy first-publication handling, browser fixture commands and staged rollout.
Backend must be released before this workspace. No merge or deployment is included. Unrelated original dashboard checkout work was preserved.

Final review: feature-branch Vercel deployments are explicitly disabled in
`vercel.json`. PR CI runs the relevant tests, lint, typecheck and production build.
No PR is authorized for merge or deployment yet.

Channel/content/homepage editors explicitly request dashboard-scoped channel
reads; the Analytics overview retains its public read so section-only roles do
not acquire an unintended new permission dependency.
