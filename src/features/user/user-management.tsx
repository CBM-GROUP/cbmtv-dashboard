import { CONFIG } from 'src/config-global';

import { ProfileView } from 'src/features/user/user/view';

export default function Page() {
  return (
    <>
      <title>{`User Management - ${CONFIG.appName}`}</title>

      <ProfileView />
    </>
  );
}
