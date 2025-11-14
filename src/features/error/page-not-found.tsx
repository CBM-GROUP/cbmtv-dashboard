import { CONFIG } from "@/config-global";

import { NotFoundView } from "src/features/error/error";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`404 page not found! | Error - ${CONFIG.appName}`}</title>

      <NotFoundView />
    </>
  );
}
