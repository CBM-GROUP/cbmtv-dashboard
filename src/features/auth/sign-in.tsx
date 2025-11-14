import { CONFIG } from 'src/config-global';

import { SignInView } from 'src/features/auth/auth';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Sign in - ${CONFIG.appName}`}</title>

      <SignInView />
    </>
  );
}
