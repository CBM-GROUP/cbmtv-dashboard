import apiClient from "./api";
import { createRecord } from './createRecord';
import { Advert } from "@/types";

export const advertService = {
  async getAdverts(): Promise<Advert[]> {
    const response = await apiClient.get("/api/content/adverts/");
    return response.data;
  },

  async createAdvert(data: Omit<Advert, 'id'>, operationKey: string) {
    return createRecord<Advert>('/api/content/adverts/', data, operationKey);
  },

  async updateAdvert(id: string, data: Partial<Omit<Advert, 'id'>>) {
    const response = await apiClient.patch(`/api/content/adverts/${id}/`, data);
    return response.data;
  },

  async deleteAdvert(id: string) {
    const response = await apiClient.delete(`/api/content/adverts/${id}/`);
    return response.data;
  },
};
