import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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
    <TableRow hover tabIndex={-1}>
      <TableCell component="th" scope="row">
        <Box
          sx={{
            gap: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar alt={row.name} src={row.avatarUrl} />
          {row.name}
        </Box>
      </TableCell>

      <TableCell>{row.email}</TableCell>

      <TableCell>{row.role}</TableCell>

      <TableCell align="right">
        {row.role === 'admin' && (
          <Button
            variant="contained"
            color="secondary"
            onClick={onDemoteAdmin}
          >
            Demote Admin
          </Button>
        )}
        {row.role === 'user' && (
          <Button
            variant="contained"
            color="primary"
            onClick={onAssignAdmin}
          >
            Make Admin
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
}
