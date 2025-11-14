import { CONFIG } from 'src/config-global';

import { AdvertListView } from 'src/features/advert/advert/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Adverts - ${CONFIG.appName}`}</title>

      <AdvertListView />
    </>
  );
}
