import { CONFIG } from 'src/config-global';

import { UserManagementView } from 'src/features/user/user/view/user-management-view';

export default function Page() {
  return (
    <>
      <title>{`User Management - ${CONFIG.appName}`}</title>

      <UserManagementView />
    </>
  );
}
