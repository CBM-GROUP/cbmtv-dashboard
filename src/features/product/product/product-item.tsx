import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export type ProductItemProps = {
  id: string;
  name: string;
  price: number;
  status: string;
  coverUrl: string;
  colors: string[];
  priceSale: number | null;
};

const MAX_COLORS = 3;

function ColorDots({ colors }: { colors: string[] }) {
  const shown = colors.slice(0, MAX_COLORS);
  const rest = colors.length - shown.length;

  return (
    <div className="flex items-center" aria-label={`${colors.length} colours`}>
      {shown.map((color) => (
        <span
          key={color}
          className="-ml-1 size-4 rounded-full ring-2 ring-card first:ml-0"
          style={{ backgroundColor: color, boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 0.12)' }}
        />
      ))}
      {rest > 0 && <span className="ml-1 text-xs font-medium text-muted-foreground">+{rest}</span>}
    </div>
  );
}

export function ProductItem({ product }: { product: ProductItemProps }) {
  return (
    <Card className="gap-0 py-0">
      <div className="relative aspect-square">
        {product.status && (
          <Badge
            variant={product.status === 'sale' ? 'destructive' : 'secondary'}
            className="absolute top-4 right-4 z-10 uppercase"
          >
            {product.status}
          </Badge>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element -- mock covers are local, unsized assets */}
        <img alt={product.name} src={product.coverUrl} className="absolute inset-0 size-full object-cover" />
      </div>

      <CardContent className="grid gap-3 py-4">
        <a href="#" className="truncate font-medium hover:underline">
          {product.name}
        </a>

        <div className="flex items-center justify-between gap-2">
          <ColorDots colors={product.colors} />
          <p className="font-medium tabular-nums">
            {product.priceSale && (
              <span className="mr-1.5 text-muted-foreground line-through">
                {fCurrency(product.priceSale)}
              </span>
            )}
            {fCurrency(product.price)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
