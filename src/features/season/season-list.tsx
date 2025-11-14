import { CONFIG } from 'src/config-global';

import { SeasonListView } from 'src/features/season/season/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Seasons - ${CONFIG.appName}`}</title>

      <SeasonListView />
    </>
  );
}
