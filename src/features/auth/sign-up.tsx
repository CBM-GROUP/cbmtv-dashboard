import { CONFIG } from 'src/config-global';

import { SignUpView } from 'src/features/auth/auth';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Sign up - ${CONFIG.appName}`}</title>

      <SignUpView />
    </>
  );
}
