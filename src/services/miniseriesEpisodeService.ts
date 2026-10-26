import apiClient from "./api";
import { createRecord } from './createRecord';
import { Episode } from "@/types";

export const miniseriesEpisodeService = {
  async getMiniseriesEpisodes(contentId: string): Promise<Episode[]> {
    const response = await apiClient.get(`/api/content/miniseries/?content=${contentId}&scope=dashboard`);
    return response.data;
  },

  async createMiniseriesEpisode(data: Omit<Episode, 'id' | 'duration'> & { content: number; duration?: string | null }, operationKey: string) {
    return createRecord<Episode>('/api/content/miniseries/', data, operationKey);
  },

  async updateMiniseriesEpisode(id: string, data: Partial<Omit<Episode, 'id' | 'duration'> & { content: number; duration: string | null }>) {
    const response = await apiClient.patch<Episode>(`/api/content/miniseries/${id}/`, data);
    return response.data;
  },

  async deleteMiniseriesEpisode(id: string) {
    const response = await apiClient.delete(`/api/content/miniseries/${id}/`);
    return response.data;
  },
};
