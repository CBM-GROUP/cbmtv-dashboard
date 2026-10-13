import type { ReactNode } from 'react';

import { useState, useEffect, useContext, useCallback, createContext } from 'react';
import axios from 'axios';

import apiClient from 'src/services/api';

interface User {
  id: number;
  email: string;
  name: string;
  role?: string;
  is_staff?: boolean;
  is_superuser?: boolean;
  is_active?: boolean;
  must_change_password?: boolean;
  dashboard_role?: number | null;
  dashboard_permissions?: string[];
  image?: string;
  displayName?: string;
  phone?: string;
  location?: string;
  country?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
  register: (formData: Record<string, string>) => Promise<void>;
  fetchUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const hasDashboardAccess = (user: User | null) =>
  Boolean(user && user.is_active !== false && !user.must_change_password && (user.is_staff || user.is_superuser || user.dashboard_role));

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = useCallback(async (email: string, password: string): Promise<User> => {
    try {
      // Use standard axios to hit the local Next.js API route instead of external API
      const response = await axios.post('/api/accounts/login', { email, password });
      const { access, refresh } = response.data;
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);

      let currentUser: User = response.data.user;
      try {
        const profile = await apiClient.get<User>('/api/accounts/profile/');
        currentUser = profile.data;
      } catch (error) {
        console.error('Failed to fetch user profile', error);
      }

      if (!hasDashboardAccess(currentUser)) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        throw new Error('This account does not have dashboard access.');
      }

      setUser(currentUser);
      localStorage.setItem('user', JSON.stringify(currentUser));
      setLoading(false);
      return currentUser;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
  }, []);

  const register = useCallback(async (formData: Record<string, string>) => {
    try {
      await axios.post('/api/accounts/register', formData);
    } catch (error) {
      console.error('Registration failed', error);
    }
  }, []);

  const fetchUser = useCallback(async () => {
    try {
      const response = await apiClient.get<User>('/api/accounts/profile/');
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Failed to fetch user', error);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        await fetchUser();
      }
      setLoading(false);
    };

    checkUser();
  }, [fetchUser]);

  const value = {
    user,
    loading,
    login,
    logout,
    register,
    fetchUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
