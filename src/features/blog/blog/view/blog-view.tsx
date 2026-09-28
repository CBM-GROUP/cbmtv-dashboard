import { useState, useCallback } from 'react';
import { PlusIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { NumberedPagination } from '@/components/numbered-pagination';
import { PageHeader, PageShell } from '@/components/page-shell';

import { PostItem } from '../post-item';
import { PostSort } from '../post-sort';
import { PostSearch } from '../post-search';

import type { IPostItem } from '../post-item';

// ----------------------------------------------------------------------

type Props = {
  posts: IPostItem[];
};

export function BlogView({ posts }: Props) {
  const [sortBy, setSortBy] = useState('latest');
  const [page, setPage] = useState(1);

  const handleSort = useCallback((newSort: string) => {
    setSortBy(newSort);
  }, []);

  return (
    <PageShell>
      <PageHeader
        title="Blog"
        actions={
          <Button>
            <PlusIcon />
            New post
          </Button>
        }
      />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <PostSearch posts={posts} />
        <PostSort
          sortBy={sortBy}
          onSort={handleSort}
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {posts.map((post, index) => {
          const latestPostLarge = index === 0;
          const latestPost = index === 1 || index === 2;

          return (
            <PostItem
              key={post.id}
              className={cn(latestPostLarge && 'sm:col-span-2')}
              post={post}
              latestPost={latestPost}
              latestPostLarge={latestPostLarge}
            />
          );
        })}
      </div>

      <NumberedPagination count={10} page={page} onPageChange={setPage} className="mt-4" />
    </PageShell>
  );
}
