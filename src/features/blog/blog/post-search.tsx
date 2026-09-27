import { useId } from 'react';
import { SearchIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

import type { IPostItem } from './post-item';

// ----------------------------------------------------------------------

type PostSearchProps = {
  posts: IPostItem[];
  className?: string;
};

/** Title suggestions via the native datalist, standing in for the old MUI Autocomplete. */
export function PostSearch({ posts, className }: PostSearchProps) {
  const listId = useId();

  return (
    <div className={cn('relative w-full sm:w-72', className)}>
      <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        aria-label="Search post"
        placeholder="Search post..."
        className="pl-8"
        list={listId}
        autoComplete="off"
      />
      <datalist id={listId}>
        {posts.map((post) => (
          <option key={post.id} value={post.title} />
        ))}
      </datalist>
    </div>
  );
}
