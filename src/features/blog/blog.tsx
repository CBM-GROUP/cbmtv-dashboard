import { _posts } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { BlogView } from 'src/features/blog/blog/view';

// ----------------------------------------------------------------------

export function BlogPage() {
  return (
    <>
      <title>{`Blog - ${CONFIG.appName}`}</title>

      <BlogView posts={_posts} />
    </>
  );
}
