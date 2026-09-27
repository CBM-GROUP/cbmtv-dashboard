import { useState, useEffect } from 'react';

import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { DataTablePagination } from '@/components/data-table-pagination';
import { PageHeader, PageShell } from '@/components/page-shell';

import apiClient from 'src/services/api';

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

  const handleChangeRowsPerPage = (value: number) => {
    setRowsPerPage(value);
    setPage(0);
  };

  const rows = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <PageShell>
      <PageHeader title="User Management" description="Grant or revoke admin access." />
      <Card className="gap-0 py-0">
        <Table className="min-w-[640px]">
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
            {rows.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                  No users found.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <UserTableRow
                  key={row.id}
                  row={row}
                  selected={false}
                  onSelectRow={() => {}}
                  onAssignAdmin={() => handleAssignAdmin(row.id)}
                  onDemoteAdmin={() => handleDemoteAdmin(row.id)}
                />
              ))
            )}
          </TableBody>
        </Table>

        <DataTablePagination
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={setPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </PageShell>
  );
}
