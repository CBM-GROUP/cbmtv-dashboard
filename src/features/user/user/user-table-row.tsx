import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';

// ----------------------------------------------------------------------

export type UserProps = {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
  company?: string;
  isVerified?: boolean;
  status?: string;
  phone?: string;
  location?: string;
  country?: string;
};

type UserTableRowProps = {
  row: UserProps;
  selected: boolean;
  onSelectRow: () => void;
  onAssignAdmin: () => void;
  onDemoteAdmin: () => void;
};

export function UserTableRow({ row, onAssignAdmin, onDemoteAdmin }: UserTableRowProps) {
  return (
    <TableRow>
      <TableCell className="pl-4">
        <div className="flex items-center gap-3">
          <Avatar>
            {row.avatarUrl && <AvatarImage src={row.avatarUrl} alt={row.name} />}
            <AvatarFallback>{(row.name || row.email || '?').charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{row.name}</span>
        </div>
      </TableCell>

      <TableCell className="text-muted-foreground">{row.email}</TableCell>

      <TableCell>
        <Badge variant={row.role === 'admin' ? 'default' : 'secondary'} className="capitalize">
          {row.role}
        </Badge>
      </TableCell>

      <TableCell className="pr-4 text-right">
        {row.role === 'admin' && (
          <Button variant="outline" size="sm" onClick={onDemoteAdmin}>
            Demote Admin
          </Button>
        )}
        {row.role === 'user' && (
          <Button size="sm" onClick={onAssignAdmin}>
            Make Admin
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
}
