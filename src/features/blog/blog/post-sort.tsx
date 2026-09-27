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

type PostSortProps = {
  sortBy: string;
  onSort: (newSort: string) => void;
  options: { value: string; label: string }[];
  className?: string;
};

export function PostSort({ options, sortBy, onSort, className }: PostSortProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className={className} />}>
        {options.find((option) => option.value === sortBy)?.label}
        <ChevronDownIcon data-icon="inline-end" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
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
