import { CONFIG } from 'src/config-global';

import { ProductsView } from 'src/features/product/product/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Products - ${CONFIG.appName}`}</title>

      <ProductsView />
    </>
  );
}
