export function normalizeListResponse<T>(data: unknown): T[] {
  if (Array.isArray(data)) {
    return data as T[];
  }

  if (data && typeof data === "object" && "results" in data) {
    const { results } = data as { results?: unknown };
    return Array.isArray(results) ? (results as T[]) : [];
  }

  return [];
}
