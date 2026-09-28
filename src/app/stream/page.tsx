import { redirect } from "next/navigation";

export default function LegacyStreamPage() {
  // Used to point at the standalone /upload page, which was removed -- uploading
  // now happens inside the content and advert forms via the upload tray.
  redirect("/content-list");
}
