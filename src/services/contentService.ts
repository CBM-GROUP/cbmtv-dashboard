import apiClient from "./api";
import { createRecord } from './createRecord';
import { Content, ContentPayload } from "@/types";
import { normalizeListResponse } from "./normalizeListResponse";

export const contentService = {
  async getContent(): Promise<Content[]> {
    const content: Content[] = [];
    let page = 1;

    while (true) {
      const response = await apiClient.get("/api/content/", { params: { page, scope: "dashboard" } });
      content.push(...normalizeListResponse<Content>(response.data));

      // Older API responses may be plain arrays. Paginated responses expose
      // `next`; request subsequent pages through our API proxy rather than
      // following the backend's absolute URL in the browser.
      if (!response.data?.next) return content;
      page += 1;
    }
  },

  async createContent(data: ContentPayload, operationKey: string) {
    return createRecord<Content>('/api/content/', data, operationKey);
  },

  async updateContent(id: string, data: Partial<ContentPayload>, expectedStatus?: string) {
    const response = await apiClient.patch<Content>(`/api/content/${id}/`, data,
      expectedStatus === undefined ? undefined : { headers: { 'If-Publication-Status': expectedStatus } });
    return response.data;
  },

  async deleteContent(id: string) {
    const response = await apiClient.delete(`/api/content/${id}/`);
    return response.data;
  },
};
