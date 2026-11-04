import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

const configuredApiUrl =
  process.env.NEXT_PUBLIC_API_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;
const API_URL =
  typeof window === 'undefined'
    ? configuredApiUrl?.replace(/\/+$/, '')
    : '/backend-api';
const REFRESH_URL = '/api/accounts/token/refresh/';

export const unauthorizedEvent = new Event('unauthorized');

const apiClient = axios.create({
  baseURL: API_URL,
});

interface SessionSnapshot { epoch: number; access: string | null; refresh: string | null; owner: string | null }
type SessionRequest = InternalAxiosRequestConfig & { _session?: SessionSnapshot; _retry?: boolean };
let epoch = 0;
let observedSession: SessionSnapshot | null = null;
const refreshes = new Map<number, Promise<SessionSnapshot>>();

function ownerOf(access: string | null): string | null {
  try {
    const payload = JSON.parse(atob((access ?? '').split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
    return payload.user_id === undefined || payload.user_id === null ? null : String(payload.user_id);
  } catch { return null; }
}

function session(): SessionSnapshot {
  const access = typeof localStorage === 'undefined' ? null : localStorage.getItem('access_token');
  const refresh = typeof localStorage === 'undefined' ? null : localStorage.getItem('refresh_token');
  const owner = ownerOf(access);
  if (!observedSession || observedSession.refresh !== refresh || observedSession.owner !== owner ||
    (!refresh && observedSession.access !== access)) {
    observedSession = { epoch: ++epoch, access, refresh, owner };
  } else observedSession = { ...observedSession, access };
  return observedSession;
}

function current(snapshot: SessionSnapshot) { return session().epoch === snapshot.epoch; }

function expire(snapshot: SessionSnapshot) {
  if (!current(snapshot)) return;
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user');
  document.dispatchEvent(unauthorizedEvent);
}

async function refreshSession(snapshot: SessionSnapshot): Promise<SessionSnapshot> {
  const existing = refreshes.get(snapshot.epoch);
  if (existing) return existing;
  const pending = (async () => {
    if (!snapshot.refresh) throw new AuthError('Your session expired. Sign in again.');
    if (!API_URL) throw new AuthError('Backend API is not configured');
    const response = await axios.post(`${API_URL}${REFRESH_URL}`, { refresh: snapshot.refresh }, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!current(snapshot)) throw new AuthError('The signed-in account changed. Retry this action.');
    const access = response.data.access;
    if (typeof access !== 'string' || ownerOf(access) !== snapshot.owner) {
      throw new AuthError('Session refresh did not confirm your account. Sign in again.');
    }
    const refresh = typeof response.data.refresh === 'string' ? response.data.refresh : snapshot.refresh;
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    // A server-authorized token rotation preserves the session identity for
    // requests already in flight; a later login or logout changes the epoch.
    observedSession = { ...snapshot, access, refresh };
    return observedSession;
  })();
  refreshes.set(snapshot.epoch, pending);
  try { return await pending; }
  finally { if (refreshes.get(snapshot.epoch) === pending) refreshes.delete(snapshot.epoch); }
}

apiClient.interceptors.request.use(function requestInterceptor(config) {
  const snapshot = session();
  (config as SessionRequest)._session = snapshot;
  if (snapshot.access) config.headers.Authorization = `Bearer ${snapshot.access}`;
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    const snapshot = (response.config as SessionRequest)._session;
    if (snapshot && !current(snapshot)) throw new AuthError('The signed-in account changed. Retry this action.');
    return response;
  },
  async (error) => {
    const originalRequest = error.config as SessionRequest | undefined;
    const snapshot = originalRequest?._session;
    if (!originalRequest || !snapshot) throw error;
    if (!current(snapshot)) throw new AuthError('The signed-in account changed. Retry this action.');

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshed = await refreshSession(snapshot);
        if (!current(refreshed)) throw new AuthError('The signed-in account changed. Retry this action.');
        originalRequest.headers.Authorization = `Bearer ${refreshed.access}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        const status = axios.isAxiosError(refreshError) ? refreshError.response?.status : undefined;
        if (refreshError instanceof AuthError || (status !== undefined && [400, 401, 403].includes(status))) expire(snapshot);
        // Network/5xx failures preserve the session and resumable upload state.
        throw refreshError;
      }
    }

    throw error;
  },
);

export default apiClient;
