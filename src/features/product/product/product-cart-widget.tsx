import Link from 'next/link';
import { ShoppingCartIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

// ----------------------------------------------------------------------

type CartIconProps = {
  totalItems: number;
  className?: string;
};

export function CartIcon({ totalItems, className }: CartIconProps) {
  return (
    <Link
      href="#"
      aria-label={`Cart, ${totalItems} items`}
      className={cn(
        'fixed top-28 right-0 z-40 flex rounded-l-2xl bg-popover py-2 pr-6 pl-4 text-popover-foreground shadow-lg ring-1 ring-foreground/10 transition-opacity hover:opacity-70',
        className,
      )}
    >
      <span className="relative">
        <ShoppingCartIcon className="size-6" />
        <span className="absolute -top-2 -right-2.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive px-1 text-xs font-medium text-white tabular-nums">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      </span>
    </Link>
  );
}
