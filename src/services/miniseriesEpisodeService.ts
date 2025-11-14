import apiClient from "./api";
import { Episode } from "@/types";

export const miniseriesEpisodeService = {
  async getMiniseriesEpisodes(contentId: string): Promise<Episode[]> {
    const response = await apiClient.get(`/api/content/miniseries/?content=${contentId}`);
    return response.data;
  },

  async createMiniseriesEpisode(data: Omit<Episode, 'id'> & { content: number }) {
    const response = await apiClient.post("/api/content/miniseries/", data);
    return response.data;
  },

  async updateMiniseriesEpisode(id: string, data: Partial<Omit<Episode, 'id'> & { content: number }>) {
    const response = await apiClient.patch(`/api/content/miniseries/${id}/`, data);
    return response.data;
  },

  async deleteMiniseriesEpisode(id: string) {
    const response = await apiClient.delete(`/api/content/miniseries/${id}/`);
    return response.data;
  },
};
