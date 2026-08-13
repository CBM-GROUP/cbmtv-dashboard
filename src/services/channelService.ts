import apiClient from "./api";
import { Channel } from "@/types";
import { normalizeListResponse } from "./normalizeListResponse";

export const channelService = {
  async getChannels(): Promise<Channel[]> {
    const response = await apiClient.get("/api/channels/");
    return normalizeListResponse<Channel>(response.data);
  },

  async createChannel(data: Omit<Channel, 'id'>) {
    const response = await apiClient.post("/api/channels/", data);
    return response.data;
  },

  async updateChannel(id: string, data: Partial<Omit<Channel, 'id'>>) {
    const response = await apiClient.patch(`/api/channels/${id}/`, data);
    return response.data;
  },

  async deleteChannel(id: string) {
    const response = await apiClient.delete(`/api/channels/${id}/`);
    return response.data;
  },
};
