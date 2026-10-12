'use client';

import { useCallback, useEffect, useState, type FormEvent } from 'react';
import axios from 'axios';

import { useAuth } from '@/features/auth/context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FormField } from '@/components/form-field';
import { PageHeader, PageShell } from '@/components/page-shell';
import {
  dashboardAccessService,
  type DashboardRole,
  type DashboardSection,
  type DashboardUser,
} from '@/services/dashboardAccessService';

const SECTIONS: { value: DashboardSection; label: string }[] = [
  { value: 'analytics', label: 'Analytics' },
  { value: 'channels', label: 'Channels' },
  { value: 'content', label: 'Content and episodes' },
  { value: 'adverts', label: 'Adverts' },
  { value: 'settings', label: 'Settings' },
  { value: 'users', label: 'User Management' },
];

function errorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data;
    if (typeof data?.detail === 'string') return data.detail;
    if (data && typeof data === 'object') {
      const first = Object.values(data).flat().find((item) => typeof item === 'string');
      if (typeof first === 'string') return first;
    }
  }
  return 'The request failed. Please try again.';
}

function PermissionPicker({ value, onChange }: {
  value: DashboardSection[];
  onChange: (next: DashboardSection[]) => void;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {SECTIONS.map((section) => (
        <label key={section.value} className="flex items-center gap-2 text-sm">
          <Checkbox
            checked={value.includes(section.value)}
            onCheckedChange={(checked) => onChange(
              checked === true ? [...value, section.value] : value.filter((item) => item !== section.value)
            )}
          />
          {section.label}
        </label>
      ))}
    </div>
  );
}

function RoleEditor({ role, onSave }: {
  role: DashboardRole;
  onSave: (role: DashboardRole, permissions: DashboardSection[]) => Promise<void>;
}) {
  const [permissions, setPermissions] = useState(role.permissions);
  const [saving, setSaving] = useState(false);

  return (
    <div className="grid gap-3 rounded-lg border p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <strong>{role.name}</strong>
        <Button
          type="button"
          size="sm"
          variant="outline"
          disabled={saving || permissions.join(',') === role.permissions.join(',')}
          onClick={async () => {
            setSaving(true);
            try { await onSave(role, permissions); } finally { setSaving(false); }
          }}
        >
          {saving ? 'Saving…' : 'Save permissions'}
        </Button>
      </div>
      <PermissionPicker value={permissions} onChange={setPermissions} />
    </div>
  );
}

export function UserManagementView() {
  const { user } = useAuth()!;
  const [roles, setRoles] = useState<DashboardRole[]>([]);
  const [users, setUsers] = useState<DashboardUser[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [roleId, setRoleId] = useState('');
  const [newRoleName, setNewRoleName] = useState('');
  const [newRolePermissions, setNewRolePermissions] = useState<DashboardSection[]>([]);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState<DashboardUser | null>(null);
  const [pinReveal, setPinReveal] = useState<{ email: string; pin: string } | null>(null);

  const load = useCallback(async () => {
    try {
      const [nextRoles, nextUsers] = await Promise.all([
        dashboardAccessService.roles(), dashboardAccessService.users(),
      ]);
      setRoles(nextRoles);
      setUsers(nextUsers);
      setRoleId((previous) => previous || String(nextRoles[0]?.id || ''));
    } catch (error) {
      setMessage(errorMessage(error));
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  const assignableRoles = roles.filter((role) =>
    user?.is_superuser || role.permissions.every((section) => user?.dashboard_permissions?.includes(section))
  );
  const roleItems = assignableRoles.map((role) => ({ value: String(role.id), label: role.name }));

  const invite = async (event: FormEvent) => {
    event.preventDefault();
    if (!roleId) return;
    setBusy(true);
    setMessage('');
    try {
      const invited = await dashboardAccessService.invite(name.trim(), email.trim(), Number(roleId));
      setPinReveal({ email: invited.email, pin: invited.temporary_pin });
      setName('');
      setEmail('');
      setMessage('Invitation created. Share the temporary PIN securely; it will not be shown again.');
      await load();
    } catch (error) {
      setMessage(errorMessage(error));
    } finally {
      setBusy(false);
    }
  };

  const createRole = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setMessage('');
    try {
      await dashboardAccessService.createRole(newRoleName.trim(), newRolePermissions);
      setNewRoleName('');
      setNewRolePermissions([]);
      setMessage('Role created.');
      await load();
    } catch (error) {
      setMessage(errorMessage(error));
    } finally {
      setBusy(false);
    }
  };

  const savePermissions = async (role: DashboardRole, permissions: DashboardSection[]) => {
    try {
      await dashboardAccessService.updateRole(role.id, permissions);
      setMessage(`Permissions saved for ${role.name}.`);
      await load();
    } catch (error) {
      setMessage(errorMessage(error));
    }
  };

  return (
    <PageShell>
      <PageHeader title="User Management" description="Create dashboard accounts and assign access through roles." />
      {message && <p role="status" className="rounded-lg border p-3 text-sm">{message}</p>}
      {pinReveal && (
        <div role="status" className="rounded-lg border p-4 text-sm">
          <strong>One-time activation PIN for {pinReveal.email}</strong>
          <p className="mt-2 font-mono text-lg select-all">{pinReveal.pin}</p>
          <p>Share this PIN securely with the invited user. It expires after 24 hours.</p>
          <Button type="button" variant="outline" size="sm" className="mt-3" onClick={() => setPinReveal(null)}>I have saved the PIN</Button>
        </div>
      )}

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Invite a user</CardTitle>
            <CardDescription>Create an account and securely share its one-time PIN. It expires after 24 hours. Email delivery is not required.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={invite} className="grid gap-4">
              <FormField label="Name" htmlFor="invite-name">
                <Input id="invite-name" value={name} onChange={(event) => setName(event.target.value)} required />
              </FormField>
              <FormField label="Email" htmlFor="invite-email">
                <Input id="invite-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
              </FormField>
              <FormField label="Role" htmlFor="invite-role">
                <Select items={roleItems} value={roleId || null} onValueChange={(value) => setRoleId(value || '')}>
                  <SelectTrigger id="invite-role" className="w-full"><SelectValue placeholder="Choose a role" /></SelectTrigger>
                  <SelectContent>{roleItems.map((role) => <SelectItem key={role.value} value={role.value}>{role.label}</SelectItem>)}</SelectContent>
                </Select>
              </FormField>
              <Button type="submit" disabled={busy || !roleId}>Create invitation</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Roles and permissions</CardTitle>
            <CardDescription>Permissions control the sidebar and the matching backend write APIs.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {user?.is_superuser && (
              <form onSubmit={createRole} className="grid gap-3 rounded-lg border p-4">
                <FormField label="New role name" htmlFor="role-name">
                  <Input id="role-name" value={newRoleName} onChange={(event) => setNewRoleName(event.target.value)} required />
                </FormField>
                <PermissionPicker value={newRolePermissions} onChange={setNewRolePermissions} />
                <Button type="submit" disabled={busy} className="w-fit">Create role</Button>
              </form>
            )}
            {roles.length === 0 && <p className="text-sm text-muted-foreground">Create a role before inviting users.</p>}
            {roles.map((role) => user?.is_superuser ? (
              <RoleEditor key={role.id} role={role} onSave={savePermissions} />
            ) : (
              <div key={role.id} className="rounded-lg border p-4 text-sm">
                <strong>{role.name}</strong>
                <p className="text-muted-foreground">{role.permissions.map((section) => SECTIONS.find((item) => item.value === section)?.label).join(', ') || 'Dashboard overview only'}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {editing && (
        <Card>
          <CardHeader><CardTitle>Edit {editing.name}</CardTitle></CardHeader>
          <CardContent>
            <form className="grid gap-3 sm:grid-cols-2" onSubmit={async (event) => {
              event.preventDefault();
              try {
                await dashboardAccessService.updateUser(editing.id, {
                  name: editing.name, email: editing.email, phone: editing.phone,
                  location: editing.location, country: editing.country,
                });
                setEditing(null);
                setMessage('User details updated.');
                await load();
              } catch (error) { setMessage(errorMessage(error)); }
            }}>
              {(['name', 'email', 'phone', 'location', 'country'] as const).map((field) => (
                <FormField key={field} label={field[0].toUpperCase() + field.slice(1)} htmlFor={`edit-${field}`}>
                  <Input id={`edit-${field}`} type={field === 'email' ? 'email' : 'text'} value={editing[field] || ''}
                    onChange={(event) => setEditing({ ...editing, [field]: event.target.value })} required={field === 'name' || field === 'email'} />
                </FormField>
              ))}
              <div className="flex items-end gap-2"><Button type="submit">Save details</Button><Button type="button" variant="outline" onClick={() => setEditing(null)}>Cancel</Button></div>
            </form>
          </CardContent>
        </Card>
      )}

      <FormField label="Search dashboard users" htmlFor="user-search">
        <Input id="user-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Name or email" />
      </FormField>
      <Card className="gap-0 py-0">
        <div className="overflow-x-auto">
          <Table className="min-w-[680px]">
            <TableHeader><TableRow>
              <TableHead>Name</TableHead><TableHead>Email</TableHead><TableHead>Role</TableHead><TableHead>Status</TableHead><TableHead>Action</TableHead>
            </TableRow></TableHeader>
            <TableBody>
              {users.filter((account) => `${account.name} ${account.email}`.toLowerCase().includes(search.toLowerCase())).map((account) => (
                <TableRow key={account.id}>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>{account.email}</TableCell>
                  <TableCell>
                    {account.dashboard_role ? (
                      <Select
                        items={roleItems}
                        value={String(account.dashboard_role)}
                        onValueChange={async (value) => {
                          if (!value) return;
                          try {
                            await dashboardAccessService.assignRole(account.id, Number(value));
                            setMessage(`Role updated for ${account.name}.`);
                            await load();
                          } catch (error) { setMessage(errorMessage(error)); }
                        }}
                      >
                        <SelectTrigger aria-label={`Role for ${account.name}`}><SelectValue /></SelectTrigger>
                        <SelectContent>{roleItems.map((role) => <SelectItem key={role.value} value={role.value}>{role.label}</SelectItem>)}</SelectContent>
                      </Select>
                    ) : account.is_superuser ? 'Superuser' : account.role}
                  </TableCell>
                  <TableCell>{({ active: 'Active', inactive: 'Inactive', invited: 'Invited', pending_activation: 'Pending activation' })[account.dashboard_status]}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" onClick={() => setEditing(account)}>Edit</Button>
                    {account.id !== user?.id && <Button variant="outline" size="sm" onClick={async () => {
                      try {
                        await dashboardAccessService.updateUser(account.id, { is_active: !account.is_active });
                        setMessage(`${account.name} ${account.is_active ? 'deactivated' : 'reactivated'}.`);
                        await load();
                      } catch (error) { setMessage(errorMessage(error)); }
                    }}>{account.is_active ? 'Deactivate' : 'Reactivate'}</Button>}
                    {account.must_change_password && account.is_active && (
                      <Button variant="outline" size="sm" onClick={async () => {
                        try {
                          const issued = await dashboardAccessService.resendInvite(account.id);
                          setPinReveal({ email: account.email, pin: issued.temporary_pin });
                          setMessage('A new PIN was issued. The previous PIN is no longer valid.');
                          await load();
                        } catch (error) { setMessage(errorMessage(error)); }
                      }}>Reissue PIN</Button>
                    )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {users.length === 0 && <TableRow><TableCell colSpan={5} className="py-8 text-center text-muted-foreground">No dashboard users yet.</TableCell></TableRow>}
            </TableBody>
          </Table>
        </div>
      </Card>
    </PageShell>
  );
}
