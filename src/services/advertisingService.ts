import apiClient from './api';

export type Resource = 'advertisers' | 'campaigns' | 'creatives' | 'placements';
export type AdRecord = Record<string, unknown> & { id?: number; code?: string; name?: string; approval?: string; status?: string; ready?: boolean };
export type TargetOptions = Record<'categories' | 'genres' | 'channels' | 'contents', { id: number | string; name: string }[]>;
export type AdReport = {
  enabled: boolean; summary: Record<string, number | null>; from: string; to: string;
  by_campaign: AdRecord[]; by_advertiser: AdRecord[]; by_placement: AdRecord[]; by_date: AdRecord[];
  cap_utilization: AdRecord[]; no_ad_reasons: AdRecord[];
};
export type DeliveryStatus = 'monitoring-unavailable' | 'disabled' | 'recorded' | 'unknown';
export function deliveryStatus(report: AdReport | null): DeliveryStatus {
  if (!report) return 'monitoring-unavailable';
  if (!report.enabled) return 'disabled';
  if ((report.summary.impression ?? 0) > 0) return 'recorded';
  return 'unknown';
}

export function campaignPriorityValid(value: unknown): boolean {
  return Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 100;
}
const base = '/api/advertising';
export const advertisingService = {
  async list(resource: Resource, signal?: AbortSignal): Promise<AdRecord[]> {
    const rows: AdRecord[] = [];
    let page = 1;
    while (true) {
      const { data } = await apiClient.get<{ results: AdRecord[]; next: string | null }>(`${base}/${resource}/`, { params: { page, page_size: 100 }, signal });
      rows.push(...data.results);
      if (!data.next) return rows;
      page++;
    }
  },
  async save(resource: Resource, data: AdRecord) {
    const id = data.id ?? data.code;
    const { data: result } = await (id === undefined ? apiClient.post<AdRecord>(`${base}/${resource}/`, data) : apiClient.patch<AdRecord>(`${base}/${resource}/${encodeURIComponent(String(id))}/`, data));
    return result;
  },
  async workflow(resource: 'campaigns' | 'creatives', id: number, action: string) {
    return (await apiClient.post<AdRecord>(`${base}/${resource}/${id}/workflow/`, { action })).data;
  },
  async preview(id: number) { return (await apiClient.post<{ kind: string; url: string }>(`${base}/creatives/${id}/preview/`, {})).data; },
  async uploadImage(file: File) {
    const form = new FormData(); form.append('file', file);
    return (await apiClient.post<{ id: string; desktop_url: string }>(`${base}/images/`, form)).data;
  },
  async media(reference: string) { return (await apiClient.get<{ media_id?: string }>('/api/content/media/status/', { params: { reference_url: reference } })).data; },
  async targets(q = '', signal?: AbortSignal) { return (await apiClient.get<TargetOptions>(`${base}/targets/`, { params: { q }, signal })).data; },
  async reports(from: string, to: string, campaign?: number, advertiser?: number, signal?: AbortSignal) {
    return (await apiClient.get<AdReport>(`${base}/reports/`, { params: { from, to, campaign, advertiser }, signal })).data;
  },
};

export function advertisingError(cause: unknown): string {
  const response = (cause as { response?: { status?: number; data?: unknown; headers?: { ['content-type']?: string } } })?.response;
  if (response?.status === 401 || response?.status === 403) return 'Your account does not have permission for this action.';
  if (response && (response.headers?.['content-type']?.includes('text/html') ||
      (typeof response.data === 'string' && /^\s*(?:<!doctype|<html|<head|<body)/i.test(response.data)))) {
    return 'The advertising service returned an unexpected server page. Your changes were not confirmed; check the record before retrying.';
  }
  const flatten = (value: unknown): string => {
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value.map(flatten).join(' ');
    if (value && typeof value === 'object') return Object.entries(value).map(([key, child]) => `${key}: ${flatten(child)}`).join(' ');
    return '';
  };
  return flatten(response?.data) || (cause instanceof Error ? cause.message : 'Advertising could not be loaded.');
}

export function workflowActions(row: AdRecord, resource: Resource, canApprove: boolean) {
  const actions: string[] = [];
  if (resource !== 'campaigns' && resource !== 'creatives') return actions;
  if (row.approval === 'draft' || row.approval === 'rejected') actions.push('submit');
  if (row.approval === 'review' && canApprove) actions.push('approve', 'reject');
  if (resource === 'campaigns' && row.status !== 'completed') {
    if (row.status === 'active') actions.push('pause');
    else if (row.approval === 'approved') actions.push('resume');
    actions.push('complete');
  }
  return actions;
}

export function campaignPayloadValid(row: AdRecord) {
  const start = Date.parse(String(row.starts_at ?? '')), end = Date.parse(String(row.ends_at ?? ''));
  return Boolean(row.name && row.advertiser && Number.isFinite(start) && end > start && Array.isArray(row.placements) && row.placements.length);
}
