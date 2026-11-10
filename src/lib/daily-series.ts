export type DailyCount = { day: string; count: number };

export function dailySeries(rows: DailyCount[], from: string, to: string): DailyCount[] {
  const counts = new Map<string, number>();
  for (const row of rows) counts.set(row.day, (counts.get(row.day) ?? 0) + row.count);
  const days: DailyCount[] = [];
  const end = Date.parse(`${to}T00:00:00Z`);
  for (let time = Date.parse(`${from}T00:00:00Z`); time <= end; time += 86400000) {
    const day = new Date(time).toISOString().slice(0, 10);
    days.push({ day, count: counts.get(day) ?? 0 });
  }
  return days;
}
