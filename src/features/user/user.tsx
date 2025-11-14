import { CONFIG } from 'src/config-global';

import { ProfileView } from 'src/features/user/user/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Profile - ${CONFIG.appName}`}</title>

      <ProfileView />
    </>
  );
}
