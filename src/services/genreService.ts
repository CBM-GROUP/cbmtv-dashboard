import apiClient from './api';
import { fetchAllPages } from './fetchAllPages';
import type { ContentCategory, Genre } from '@/types';

export type GenreInput = {
  name: string;
  description: string;
  categories: ContentCategory[];
  parent: number | null;
  is_active: boolean;
};

export const genreService = {
  getGenres: () => fetchAllPages<Genre>(apiClient, '/api/content/genres/?scope=dashboard'),
  async create(input: GenreInput): Promise<Genre> {
    const response = await apiClient.post<Genre>('/api/content/genres/', input);
    return response.data;
  },
  async update(id: number, input: GenreInput): Promise<Genre> {
    const response = await apiClient.patch<Genre>(`/api/content/genres/${id}/`, input);
    return response.data;
  },
};
