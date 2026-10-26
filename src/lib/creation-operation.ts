export type CreationOperation = {
  key: string; actor: string; endpoint: string; payload: Record<string, unknown>; createdAt: string;
};
const PREFIX = 'cbmtv:creation:v1:';
const ENDPOINTS = ['/api/content/', '/api/content/episodes/', '/api/content/miniseries/', '/api/content/adverts/', '/api/channels/'];
export const CREATIONS_CHANGED = 'cbmtv:creations-changed';

function canonical(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (value && typeof value === 'object') return `{${Object.entries(value).sort(([a], [b]) => a.localeCompare(b))
    .filter(([, v]) => v !== undefined).map(([k, v]) => `${JSON.stringify(k)}:${canonical(v)}`).join(',')}}`;
  return JSON.stringify(value);
}

/** One entry per logical operation, never a shared mutable "latest request". */
export class CreationJournal {
  constructor(private storage: Storage, private actor: string) {}
  private slot(key: string) { return `${PREFIX}${this.actor}:${key}`; }
  pending(): CreationOperation[] {
    const result: CreationOperation[] = [];
    for (let i = 0; i < this.storage.length; i += 1) {
      const slot = this.storage.key(i);
      if (!slot?.startsWith(`${PREFIX}${this.actor}:`)) continue;
      const operation = JSON.parse(this.storage.getItem(slot)!);
      if (operation.actor !== this.actor || !operation.key || !ENDPOINTS.includes(operation.endpoint) || !operation.payload) {
        throw new Error('A pending save could not be read. Keep browser data and inspect saved records.');
      }
      result.push(operation);
    }
    return result;
  }
  prepare(key: string, endpoint: string, payload: Record<string, unknown>): CreationOperation {
    if (!key) throw new Error('A creation operation key is required. Reopen the form.');
    if (!ENDPOINTS.includes(endpoint)) throw new Error('Unsupported creation endpoint.');
    const frozen = JSON.parse(JSON.stringify(payload));
    const slot = this.slot(key), existing = this.storage.getItem(slot);
    if (existing) {
      const operation: CreationOperation = JSON.parse(existing);
      if (operation.actor !== this.actor || operation.endpoint !== endpoint || canonical(operation.payload) !== canonical(frozen)) {
        throw new Error('Recover the previous save before changing this creation. Uploaded files are retained.');
      }
      return operation;
    }
    const operation = { key, actor: this.actor, endpoint, payload: frozen, createdAt: new Date().toISOString() };
    this.storage.setItem(slot, JSON.stringify(operation)); // Fail closed before any POST.
    return operation;
  }
  complete(key: string) { this.storage.removeItem(this.slot(key)); }
}

export type CreationTransport = {
  options: (endpoint: string) => Promise<{ headers: Record<string, unknown> }>;
  post: (endpoint: string, payload: Record<string, unknown>, config: { headers: Record<string, string> }) => Promise<{
    data: { id?: string | number }; headers: Record<string, unknown>;
  }>;
};

export async function persistCreation(journal: CreationJournal, transport: CreationTransport, key: string,
  endpoint: string, payload: Record<string, unknown>) {
  const operation = journal.prepare(key, endpoint, payload);
  const support = await transport.options(endpoint);
  if (support.headers['idempotency-supported'] !== 'v1') throw new Error('This backend does not support safe creation retries yet.');
  const response = await transport.post(endpoint, operation.payload, { headers: { 'Idempotency-Key': key } });
  if (response.headers['idempotency-key'] !== key || !/^[1-9]\d*$/.test(String(response.data?.id))) {
    throw new Error('Save could not be confirmed. Recover the pending save before creating again.');
  }
  journal.complete(key);
  return response.data;
}
