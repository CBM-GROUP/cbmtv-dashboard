import axios from 'axios';

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;
const REFRESH_URL = '/api/accounts/token/refresh/';

export const unauthorizedEvent = new Event('unauthorized');

const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use(function requestInterceptor(config) {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');

        if (!refreshToken) {
          throw new AuthError('No refresh token available');
        }

        const response = await axios.post(
          `${API_URL}${REFRESH_URL}`,
          {
            refresh: refreshToken,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        console.log('Refresh token response:', response);

        const accessToken = response.data.access;

        localStorage.setItem('access_token', accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return apiClient(originalRequest);
      } catch (refreshError) {
        if (refreshError instanceof AuthError) {
          console.error('Authentication error:', refreshError.message);
        } else if (axios.isAxiosError(refreshError) && refreshError.response) {
          console.error('Error response data:', refreshError.response.data);
          console.error('Error response status:', refreshError.response.status);
          console.error('Error response headers:', refreshError.response.headers);
        }

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        document.dispatchEvent(unauthorizedEvent);

        throw refreshError;
      }
    }

    throw error;
  },
);

export default apiClient;
