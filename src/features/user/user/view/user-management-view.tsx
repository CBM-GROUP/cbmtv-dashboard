import type { MouseEvent, ChangeEvent } from 'react';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import apiClient from 'src/services/api';

import { Scrollbar } from 'src/components/scrollbar';

import { useAuth } from 'src/features/auth/context';

import { UserTableRow } from '../user-table-row';
import { UserTableHead } from '../user-table-head';

import type { UserProps } from '../user-table-row';

export function UserManagementView() {
  const { user } = useAuth()!;
  const [users, setUsers] = useState<UserProps[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchUsers = async () => {
    try {
      const response = await apiClient.get('/api/accounts/users/');
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  };

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchUsers();
    }
  }, [user]);

  const handleAssignAdmin = async (userId: string) => {
    try {
      await apiClient.post('/api/accounts/assign-admin/', { user_id: userId, role: 'admin' });
      // Refresh the user list
      fetchUsers();
    } catch (error) {
      console.error('Failed to assign admin role', error);
    }
  };

  const handleDemoteAdmin = async (userId: string) => {
    try {
      await apiClient.post('/api/accounts/assign-admin/', { user_id: userId, role: 'User' });
      // Refresh the user list
      fetchUsers();
    } catch (error) {
      console.error('Failed to assign admin role', error);
    }
  };

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card>
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order="asc"
                orderBy="name"
                rowCount={users.length}
                numSelected={0}
                onSort={() => {}}
                onSelectAllRows={() => {}}
                headLabel={[
                  { id: 'name', label: 'Name' },
                  { id: 'email', label: 'Email' },
                  { id: 'role', label: 'Role' },
                  { id: '', label: '' },
                ]}
              />
              <TableBody>
                {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <UserTableRow
                    key={row.id}
                    row={row}
                    selected={false}
                    onSelectRow={() => {}}
                    onAssignAdmin={() => handleAssignAdmin(row.id)}
                    onDemoteAdmin={() => handleDemoteAdmin(row.id)}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Box>
  );
}
