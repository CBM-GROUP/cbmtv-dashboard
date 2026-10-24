import apiClient from './api';

export type DashboardSection = 'channels' | 'content' | 'adverts' | 'settings' | 'users' | 'analytics';

export type DashboardRole = {
  id: number;
  name: string;
  permissions: DashboardSection[];
};

export type DashboardUser = {
  id: number;
  name: string;
  email: string;
  role: string;
  is_superuser: boolean;
  dashboard_role: number | null;
  dashboard_role_name: string | null;
  must_change_password: boolean;
  is_active: boolean;
  dashboard_status: 'active' | 'inactive' | 'invited' | 'pending_activation';
  phone?: string | null;
  location?: string | null;
  country?: string | null;
};

export type InvitationResult = DashboardUser & { temporary_pin: string };

export const dashboardAccessService = {
  async roles() {
    const response = await apiClient.get<DashboardRole[]>('/api/accounts/dashboard-roles/');
    return response.data;
  },
  async users(search = '') {
    const response = await apiClient.get<DashboardUser[]>('/api/accounts/dashboard-users/', { params: { search } });
    return response.data;
  },
  async createRole(name: string, permissions: DashboardSection[]) {
    const response = await apiClient.post<DashboardRole>('/api/accounts/dashboard-roles/', { name, permissions });
    return response.data;
  },
  async updateRole(id: number, permissions: DashboardSection[]) {
    const response = await apiClient.patch<DashboardRole>(`/api/accounts/dashboard-roles/${id}/`, { permissions });
    return response.data;
  },
  async invite(name: string, email: string, dashboardRole: number) {
    const response = await apiClient.post<InvitationResult>('/api/accounts/dashboard-users/', {
      name, email, dashboard_role: dashboardRole,
    });
    return response.data;
  },
  async assignRole(userId: number, roleId: number) {
    const response = await apiClient.patch<DashboardUser>(`/api/accounts/dashboard-users/${userId}/`, {
      dashboard_role: roleId,
    });
    return response.data;
  },
  async updateUser(userId: number, changes: Partial<Pick<DashboardUser, 'name' | 'email' | 'phone' | 'location' | 'country' | 'dashboard_role' | 'is_active'>>) {
    const response = await apiClient.patch<DashboardUser>(`/api/accounts/dashboard-users/${userId}/`, changes);
    return response.data;
  },
  async resendInvite(userId: number) {
    const response = await apiClient.post<{ temporary_pin: string }>(`/api/accounts/dashboard-users/${userId}/resend-invite/`);
    return response.data;
  },
  async activate(email: string, temporaryPin: string, newPassword: string) {
    await apiClient.post('/api/accounts/dashboard-activate/', {
      email, temporary_pin: temporaryPin, new_password: newPassword,
    });
  },
};
