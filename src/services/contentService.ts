import apiClient from "./api";
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
