import type { ReactNode } from 'react';

import { useState, useEffect, useContext, useCallback, createContext } from 'react';
import axios from 'axios';

import apiClient from 'src/services/api';

interface User {
  id: number;
  email: string;
  name: string;
  role: string;
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

      setUser(response?.data?.user);
      localStorage.setItem('user', JSON.stringify(response?.data?.user));
      setLoading(false);
      return response.data;
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
      const userResponse = JSON.parse(localStorage.getItem('user') as string);
      setUser(userResponse);
    } catch (error) {
      console.error('Failed to fetch user', error);
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
