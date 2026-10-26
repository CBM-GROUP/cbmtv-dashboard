import type { Content } from '@/types';

/** Use only the confirmed response; a resolved PATCH alone is not an approval. */
export async function changePublication(
  item: Content,
  update: (id: string, data: { status: string }, expectedStatus: string) => Promise<Content>,
): Promise<Content> {
  if (item.status !== 'preview' && item.status !== 'approved') throw new Error('Unsupported publication transition.');
  const status = item.status === 'preview' ? 'approved' : 'preview';
  const saved = await update(item.id, { status }, item.status);
  if (String(saved?.id) !== String(item.id) || saved.status !== status) throw new Error('The publication change was not confirmed. Refresh and try again.');
  return saved;
}
