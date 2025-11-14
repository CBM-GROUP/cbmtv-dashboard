import { CONFIG } from 'src/config-global';

import { ContentListView } from 'src/features/content/content/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Content - ${CONFIG.appName}`}</title>

      <ContentListView />
    </>
  );
}
