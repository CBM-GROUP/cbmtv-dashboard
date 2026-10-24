import type { AxiosInstance } from 'axios';

import { normalizeListResponse } from './normalizeListResponse';

/**
 * Fetch every page of a DRF list endpoint.
 *
 * `common/pagination.py` sets page_size=10, so a bare GET returns only the
 * first ten rows plus a `next` URL. Reading `results` and stopping there — what
 * every list view here used to do — silently truncates the table while the row
 * count still looks complete.
 *
 * `next` may be an absolute backend URL. Keep its path and query so browser
 * requests continue through the dashboard API proxy with their read scope.
 */
export async function fetchAllPages<T>(
  client: AxiosInstance,
  path: string,
  maxPages = 50,
): Promise<T[]> {
  const items: T[] = [];
  let url: string | null = path;
  let pages = 0;

  while (url && pages < maxPages) {
    const response = await client.get(url);
    items.push(...normalizeListResponse<T>(response.data));

    const body = response.data as { next?: unknown } | null;
    if (body && typeof body === 'object' && typeof body.next === 'string') {
      const next = new URL(body.next, 'http://backend.local');
      url = `${next.pathname}${next.search}`;
    } else {
      url = null;
    }
    pages += 1;
  }

  return items;
}
