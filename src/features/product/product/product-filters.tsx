import { CheckIcon, ListFilterIcon, RotateCcwIcon, StarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

// ----------------------------------------------------------------------

export type FiltersProps = {
  price: string;
  rating: string;
  gender: string[];
  colors: string[];
  category: string;
};

type ProductFiltersProps = {
  canReset: boolean;
  openFilter: boolean;
  filters: FiltersProps;
  onOpenFilter: () => void;
  onCloseFilter: () => void;
  onResetFilter: () => void;
  onSetFilters: (updateState: Partial<FiltersProps>) => void;
  options: {
    colors: string[];
    ratings: string[];
    categories: { value: string; label: string }[];
    genders: { value: string; label: string }[];
    price: { value: string; label: string }[];
  };
};

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="grid gap-3">
      <legend className="mb-3 text-sm font-medium">{title}</legend>
      {children}
    </fieldset>
  );
}

function ResetDot({ show }: { show: boolean }) {
  return show ? <span className="absolute top-1 right-1 size-2 rounded-full bg-destructive" /> : null;
}

export function ProductFilters({
  filters,
  options,
  canReset,
  openFilter,
  onSetFilters,
  onOpenFilter,
  onCloseFilter,
  onResetFilter,
}: ProductFiltersProps) {
  const renderGender = (
    <FilterSection title="Gender">
      {options.genders.map((option) => (
        <Label key={option.value} className="font-normal">
          <Checkbox
            checked={filters.gender.includes(option.value)}
            onCheckedChange={() => {
              const checked = filters.gender.includes(option.value)
                ? filters.gender.filter((value) => value !== option.value)
                : [...filters.gender, option.value];

              onSetFilters({ gender: checked });
            }}
          />
          {option.label}
        </Label>
      ))}
    </FilterSection>
  );

  const renderCategory = (
    <FilterSection title="Category">
      <RadioGroup
        value={filters.category}
        onValueChange={(value) => onSetFilters({ category: String(value) })}
      >
        {options.categories.map((option) => (
          <Label key={option.value} className="font-normal">
            <RadioGroupItem value={option.value} />
            {option.label}
          </Label>
        ))}
      </RadioGroup>
    </FilterSection>
  );

  const renderColors = (
    <FilterSection title="Colors">
      {/* Six swatches per row, matching the old ColorPicker `limit`. */}
      <div className="grid w-fit grid-cols-6 gap-2">
        {options.colors.map((color) => {
          const selected = filters.colors.includes(color);
          return (
            <button
              key={color}
              type="button"
              aria-label={color}
              aria-pressed={selected}
              onClick={() =>
                onSetFilters({
                  colors: selected
                    ? filters.colors.filter((current) => current !== color)
                    : [...filters.colors, color],
                })
              }
              className={cn(
                'flex size-8 items-center justify-center rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
                selected && 'ring-2 ring-ring ring-offset-2 ring-offset-popover',
              )}
              style={{ backgroundColor: color, boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 0.12)' }}
            >
              {selected && <CheckIcon className="size-4 text-white mix-blend-difference" />}
            </button>
          );
        })}
      </div>
    </FilterSection>
  );

  const renderPrice = (
    <FilterSection title="Price">
      <RadioGroup value={filters.price} onValueChange={(value) => onSetFilters({ price: String(value) })}>
        {options.price.map((option) => (
          <Label key={option.value} className="font-normal">
            <RadioGroupItem value={option.value} />
            {option.label}
          </Label>
        ))}
      </RadioGroup>
    </FilterSection>
  );

  const renderRating = (
    <FilterSection title="Rating">
      <div className="-ml-1 grid gap-1">
        {options.ratings.map((option, index) => (
          <button
            key={option}
            type="button"
            aria-pressed={filters.rating === option}
            onClick={() => onSetFilters({ rating: option })}
            className={cn(
              'flex items-center gap-1 rounded-md p-1 text-sm outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50',
              filters.rating === option && 'bg-muted',
            )}
          >
            <span className="flex" aria-label={`${4 - index} stars`}>
              {Array.from({ length: 5 }, (_, star) => (
                <StarIcon
                  key={star}
                  className={cn(
                    'size-4',
                    star < 4 - index ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/40',
                  )}
                />
              ))}
            </span>
            &amp; Up
          </button>
        ))}
      </div>
    </FilterSection>
  );

  return (
    <>
      <Button variant="ghost" onClick={onOpenFilter} className="relative">
        Filters
        <ListFilterIcon data-icon="inline-end" />
        <ResetDot show={canReset} />
      </Button>

      <Sheet open={openFilter} onOpenChange={(next) => (next ? onOpenFilter() : onCloseFilter())}>
        <SheetContent side="right" className="w-72 gap-0 sm:max-w-72">
          <SheetHeader className="flex-row items-center gap-1 pr-12">
            <SheetTitle className="flex-1">Filters</SheetTitle>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Reset filters"
              onClick={onResetFilter}
              className="relative"
            >
              <RotateCcwIcon />
              <ResetDot show={canReset} />
            </Button>
          </SheetHeader>

          <Separator />

          <div className="grid gap-6 overflow-y-auto p-4">
            {renderGender}
            {renderCategory}
            {renderColors}
            {renderPrice}
            {renderRating}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
