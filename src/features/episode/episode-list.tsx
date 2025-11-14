import { CONFIG } from 'src/config-global';

import { EpisodeListView } from 'src/features/episode/episode/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Episodes - ${CONFIG.appName}`}</title>

      <EpisodeListView />
    </>
  );
}
