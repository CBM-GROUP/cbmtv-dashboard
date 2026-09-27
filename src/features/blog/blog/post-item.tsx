import { EyeIcon, MessageCircleIcon, Share2Icon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export type IPostItem = {
  id: string;
  title: string;
  coverUrl: string;
  totalViews: number;
  description: string;
  totalShares: number;
  totalComments: number;
  totalFavorites: number;
  postedAt: string | number | null;
  author: {
    name: string;
    avatarUrl: string;
  };
};

export function PostItem({
  className,
  post,
  latestPost,
  latestPostLarge,
}: {
  className?: string;
  post: IPostItem;
  latestPost: boolean;
  latestPostLarge: boolean;
}) {
  // The first three posts overlay their text on a darkened cover image.
  const featured = latestPostLarge || latestPost;

  const stats = [
    { number: post.totalComments, icon: MessageCircleIcon, label: 'comments' },
    { number: post.totalViews, icon: EyeIcon, label: 'views' },
    { number: post.totalShares, icon: Share2Icon, label: 'shares' },
  ];

  return (
    <Card className={cn('relative gap-0 py-0', className)}>
      <div
        className={cn(
          'relative aspect-[4/3]',
          featured && 'aspect-[3/4] after:absolute after:inset-0 after:bg-black/70',
          latestPostLarge && 'sm:aspect-[4.66/3]',
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- mock covers are local, unsized assets */}
        <img alt={post.title} src={post.coverUrl} className="absolute inset-0 size-full object-cover" />
        <Avatar
          size="lg"
          className={cn(
            'absolute left-6 z-10 ring-4 ring-card',
            featured ? 'top-6 ring-0' : '-bottom-5',
          )}
        >
          <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>

      <div
        className={cn(
          'grid gap-2 px-6 pt-10 pb-6',
          featured && 'absolute inset-x-0 bottom-0 z-10 text-white',
        )}
      >
        <p className={cn('text-xs text-muted-foreground', featured && 'text-white/50')}>
          {fDate(post.postedAt)}
        </p>
        <a
          href="#"
          className={cn(
            'line-clamp-2 min-h-10 font-medium hover:underline',
            latestPostLarge && 'min-h-14 text-xl font-semibold',
          )}
        >
          {post.title}
        </a>
        <div
          className={cn(
            'mt-2 flex flex-wrap justify-end gap-3 text-xs text-muted-foreground',
            featured && 'text-white/65',
          )}
        >
          {stats.map(({ number, icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1" aria-label={`${number} ${label}`}>
              <Icon className="size-3.5" />
              {fShortenNumber(number)}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
