import { cn } from '@/lib/utils';
import { TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ----------------------------------------------------------------------

interface HeadCell {
  id: string;
  label: string;
  align?: 'left' | 'right' | 'center';
  width?: number | string;
  minWidth?: number | string;
}

type UserTableHeadProps = {
  order: 'asc' | 'desc';
  orderBy: string;
  rowCount: number;
  numSelected: number;
  onSort: (id: string) => void;
  onSelectAllRows: (checked: boolean) => void;
  headLabel: HeadCell[];
};

const alignClass = { left: 'text-left', right: 'text-right', center: 'text-center' };

export function UserTableHead({ headLabel }: UserTableHeadProps) {
  return (
    <TableHeader>
      <TableRow className="hover:bg-transparent">
        {headLabel.map((headCell) => (
          <TableHead
            key={headCell.id}
            className={cn(alignClass[headCell.align || 'left'], 'first:pl-4 last:pr-4')}
            style={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            {headCell.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
