import apiClient from './api';

export type HeroSettings = { image_duration_seconds: number };

export const heroSettingsService = {
  async get(): Promise<HeroSettings> {
    const response = await apiClient.get<HeroSettings>('/api/content/hero-settings/');
    return response.data;
  },
  async update(imageDurationSeconds: number): Promise<HeroSettings> {
    const response = await apiClient.patch<HeroSettings>('/api/content/hero-settings/', {
      image_duration_seconds: imageDurationSeconds,
    });
    return response.data;
  },
};
