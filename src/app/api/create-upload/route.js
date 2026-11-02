// Retired: current forms upload through Django's authorized S3 endpoints.
// Keep this handler closed even if legacy Mux credentials remain configured.
export async function POST() {
  return Response.json(
    { error: "Legacy upload operations are disabled." },
    { status: 410, headers: { "Cache-Control": "no-store" } },
  );
}
