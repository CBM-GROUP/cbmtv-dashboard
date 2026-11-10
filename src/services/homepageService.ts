import apiClient from './api';
import type { Channel, Content } from '@/types';

export const sectionLabels: Record<string, string> = {
  featured_hero: 'Featured Hero', featured_channels: 'Channels',
  continue_watching: 'Continue Watching', new_releases: 'New Releases',
  tv_shows: 'TV Shows', movies: 'Movies', documentaries: 'Documentaries', animations: 'Animations',
};
export const advertisingSections: Record<string, string> = {
  homepage_banner: 'Sponsor banner', homepage_sponsored_section: 'Sponsored collection',
  homepage_featured_sponsor: 'Featured sponsor', homepage_channel_promotion: 'Sponsored channel',
  homepage_content_promotion: 'Sponsored title',
};
Object.assign(sectionLabels, advertisingSections);
export type HomepageConfig = {
  sections: { id: string; enabled: boolean }[];
  featured_titles: { content: number; start_at: string | null; end_at: string | null; detail?: Content }[];
  featured_channels: { channel: number; detail?: Channel }[];
  new_releases: { duration: number; unit: 'hours' | 'days' | 'months' | 'years' };
  advert_insertion: { enabled: boolean; interval: number };
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
  if (new Set(ids).size !== ids.length || ids.some((id) => !sectionLabels[id]) || Object.keys(sectionLabels).filter(id => !advertisingSections[id]).some(id => !ids.includes(id))) return 'Include every homepage section exactly once.';
  if (config.sections.filter(row => advertisingSections[row.id] && row.enabled).length > 2) return 'Enable at most two homepage advertising sections.';
  if (config.sections.slice(0, 3).some(row => advertisingSections[row.id] && row.enabled)) return 'Keep the first three homepage sections for browsing.';
  if (ids[0] !== 'featured_hero') return 'Featured Hero must stay first.';
  if (config.sections.some((section) => ['featured_hero', 'continue_watching'].includes(section.id) && !section.enabled)) return 'Featured Hero and Continue Watching are required.';
  if (!Number.isInteger(config.new_releases.duration) || config.new_releases.duration < 1 || config.new_releases.duration > 1000) return 'Choose a New Releases duration from 1 to 1000.';
  if (!Number.isInteger(config.advert_insertion.interval) || config.advert_insertion.interval < 1 || config.advert_insertion.interval > 1000) return 'Choose an advert interval from 1 to 1000 movies.';
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
  async get(): Promise<HomepageConfig> {
    const data = (await apiClient.get('/api/homepage/manage/')).data as HomepageConfig;
    return { ...data, advert_insertion: data.advert_insertion ?? { enabled: false, interval: 3 } };
  },
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
