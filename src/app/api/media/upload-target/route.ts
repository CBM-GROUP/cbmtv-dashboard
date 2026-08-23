import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Deprecated. S3 upload presigning moved to the Django backend
 * (`POST /api/content/media/upload-target/`, see `common/media_storage.py`).
 *
 * This app used to hold a second, duplicate implementation, which meant AWS
 * credentials had to be provisioned on the dashboard deployment as well as the
 * backend. Do not reintroduce it — anything configured here lives in a
 * client-facing deployment.
 *
 * Use the `useMediaUpload` hook, which goes through `apiClient` to the backend.
 */
const MOVED_TO = "/api/content/media/upload-target/ on the CBM TV backend";

export async function POST() {
  return NextResponse.json(
    { error: `This endpoint has moved to ${MOVED_TO}.` },
    { status: 410 },
  );
}
