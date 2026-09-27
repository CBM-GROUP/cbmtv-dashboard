import { useState, useCallback } from 'react';

import { NumberedPagination } from '@/components/numbered-pagination';
import { PageHeader, PageShell } from '@/components/page-shell';

import { _products } from 'src/_mock';

import { ProductItem } from '../product-item';
import { ProductSort } from '../product-sort';
import { CartIcon } from '../product-cart-widget';
import { ProductFilters } from '../product-filters';

import type { FiltersProps } from '../product-filters';

// ----------------------------------------------------------------------

const GENDER_OPTIONS = [
  { value: 'men', label: 'Men' },
  { value: 'women', label: 'Women' },
  { value: 'kids', label: 'Kids' },
];

const CATEGORY_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'shose', label: 'Shose' },
  { value: 'apparel', label: 'Apparel' },
  { value: 'accessories', label: 'Accessories' },
];

const RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];

const PRICE_OPTIONS = [
  { value: 'below', label: 'Below $25' },
  { value: 'between', label: 'Between $25 - $75' },
  { value: 'above', label: 'Above $75' },
];

const COLOR_OPTIONS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

const defaultFilters = {
  price: '',
  gender: [GENDER_OPTIONS[0].value],
  colors: [COLOR_OPTIONS[4]],
  rating: RATING_OPTIONS[0],
  category: CATEGORY_OPTIONS[0].value,
};

export function ProductsView() {
  const [sortBy, setSortBy] = useState('featured');

  const [openFilter, setOpenFilter] = useState(false);

  const [filters, setFilters] = useState<FiltersProps>(defaultFilters);

  const [page, setPage] = useState(1);

  const handleOpenFilter = useCallback(() => {
    setOpenFilter(true);
  }, []);

  const handleCloseFilter = useCallback(() => {
    setOpenFilter(false);
  }, []);

  const handleSort = useCallback((newSort: string) => {
    setSortBy(newSort);
  }, []);

  const handleSetFilters = useCallback((updateState: Partial<FiltersProps>) => {
    setFilters((prevValue) => ({ ...prevValue, ...updateState }));
  }, []);

  const canReset = Object.keys(filters).some(
    (key) => filters[key as keyof FiltersProps] !== defaultFilters[key as keyof FiltersProps]
  );

  return (
    <PageShell>
      <CartIcon totalItems={8} />

      <PageHeader
        title="Products"
        actions={
          <>
            <ProductFilters
              canReset={canReset}
              filters={filters}
              onSetFilters={handleSetFilters}
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
              onResetFilter={() => setFilters(defaultFilters)}
              options={{
                genders: GENDER_OPTIONS,
                categories: CATEGORY_OPTIONS,
                ratings: RATING_OPTIONS,
                price: PRICE_OPTIONS,
                colors: COLOR_OPTIONS,
              }}
            />

            <ProductSort
              sortBy={sortBy}
              onSort={handleSort}
              options={[
                { value: 'featured', label: 'Featured' },
                { value: 'newest', label: 'Newest' },
                { value: 'priceDesc', label: 'Price: High-Low' },
                { value: 'priceAsc', label: 'Price: Low-High' },
              ]}
            />
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {_products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      <NumberedPagination count={10} page={page} onPageChange={setPage} className="mt-4" />
    </PageShell>
  );
}
