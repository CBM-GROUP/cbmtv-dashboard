import { ChevronDownIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// ----------------------------------------------------------------------

type ProductSortProps = {
  sortBy: string;
  onSort: (newSort: string) => void;
  options: { value: string; label: string }[];
  className?: string;
};

export function ProductSort({ options, sortBy, onSort, className }: ProductSortProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" className={className} />}>
        Sort By:
        <span className="text-muted-foreground">
          {options.find((option) => option.value === sortBy)?.label}
        </span>
        <ChevronDownIcon data-icon="inline-end" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuRadioGroup value={sortBy} onValueChange={(value) => onSort(String(value))}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
