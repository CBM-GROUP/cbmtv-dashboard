import apiClient from './api';
import type { Channel, Content } from '@/types';

export const sectionLabels: Record<string, string> = {
  featured_hero: 'Featured Hero', featured_channels: 'Featured Channels',
  continue_watching: 'Continue Watching', new_releases: 'New Releases',
  tv_shows: 'TV Shows', movies: 'Movies', documentaries: 'Documentaries', animations: 'Animations',
};
export type HomepageConfig = {
  sections: { id: string; enabled: boolean }[];
  featured_titles: { content: number; start_at: string | null; end_at: string | null; detail?: Content }[];
  featured_channels: { channel: number; detail?: Channel }[];
  new_releases: { duration: number; unit: 'hours' | 'days' | 'months' | 'years' };
};
export type HomepagePreview = { sections: {
  id: string; label: string; enabled: boolean; source: string; items: (Content | Channel)[];
}[] };

export function moveItem<T>(items: T[], index: number, offset: number): T[] {
  const target = index + offset;
  if (target < 0 || target >= items.length) return items;
  const result = [...items];
  [result[index], result[target]] = [result[target], result[index]];
  return result;
}

export function validateHomepage(config: HomepageConfig): string | null {
  const ids = config.sections.map((section) => section.id);
  if (ids.length !== Object.keys(sectionLabels).length || new Set(ids).size !== ids.length || ids.some((id) => !sectionLabels[id])) return 'Include every homepage section exactly once.';
  if (ids[0] !== 'featured_hero') return 'Featured Hero must stay first.';
  if (config.sections.some((section) => ['featured_hero', 'continue_watching'].includes(section.id) && !section.enabled)) return 'Featured Hero and Continue Watching are required.';
  if (!Number.isInteger(config.new_releases.duration) || config.new_releases.duration < 1 || config.new_releases.duration > 1000) return 'Choose a New Releases duration from 1 to 1000.';
  if (!['hours', 'days', 'months', 'years'].includes(config.new_releases.unit)) return 'Choose a valid duration unit.';
  if (new Set(config.featured_titles.map((row) => row.content)).size !== config.featured_titles.length) return 'Remove duplicate featured titles.';
  if (new Set(config.featured_channels.map((row) => row.channel)).size !== config.featured_channels.length) return 'Remove duplicate featured channels.';
  for (const row of config.featured_titles) {
    if ((row.start_at && !Number.isFinite(Date.parse(row.start_at))) || (row.end_at && !Number.isFinite(Date.parse(row.end_at)))) return 'Enter valid schedule dates.';
    if (row.start_at && row.end_at && Date.parse(row.start_at) >= Date.parse(row.end_at)) return 'End must be after start.';
  }
  return null;
}

export const homepageService = {
  async get(): Promise<HomepageConfig> { return (await apiClient.get('/api/homepage/manage/')).data; },
  async save(config: HomepageConfig): Promise<HomepageConfig> {
    const error = validateHomepage(config);
    if (error) throw new Error(error);
    return (await apiClient.put('/api/homepage/manage/', config)).data;
  },
  async preview(config: HomepageConfig): Promise<HomepagePreview> {
    const error = validateHomepage(config);
    if (error) throw new Error(error);
    return (await apiClient.post('/api/homepage/preview/', config)).data;
  },
};
