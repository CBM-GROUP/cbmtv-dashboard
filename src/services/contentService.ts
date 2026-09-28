import apiClient from "./api";
import { Content, ContentPayload } from "@/types";
import { normalizeListResponse } from "./normalizeListResponse";

export const contentService = {
  async getContent(): Promise<Content[]> {
    const response = await apiClient.get("/api/content/");
    return normalizeListResponse<Content>(response.data);
  },

  async createContent(data: ContentPayload) {
    const response = await apiClient.post("/api/content/", data);
    return response.data;
  },

  async updateContent(id: string, data: Partial<ContentPayload>) {
    const response = await apiClient.patch(`/api/content/${id}/`, data);
    return response.data;
  },

  async deleteContent(id: string) {
    const response = await apiClient.delete(`/api/content/${id}/`);
    return response.data;
  },
};
