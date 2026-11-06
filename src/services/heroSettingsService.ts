import apiClient from './api';

export type HeroSettings = { image_duration_seconds: number; display_mode: 'thumbnails_only' | 'thumbnail_trailer'; trailer_preview_seconds: number };

export const heroSettingsService = {
  async get(): Promise<HeroSettings> {
    const response = await apiClient.get<HeroSettings>('/api/content/hero-settings/');
    return response.data;
  },
  async update(settings: HeroSettings): Promise<HeroSettings> {
    const response = await apiClient.patch<HeroSettings>('/api/content/hero-settings/', settings);
    return response.data;
  },
};
