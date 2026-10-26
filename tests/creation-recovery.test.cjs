/* eslint-disable @typescript-eslint/no-require-imports */
const { test } = require('node:test');
const assert = require('node:assert/strict');
require('ts-node').register({ transpileOnly: true, compilerOptions: { module: 'CommonJS', moduleResolution: 'Node' } });
const { CreationJournal, persistCreation } = require('../src/lib/creation-operation.ts');

function storage() {
  const map = new Map();
  return { get length() { return map.size; }, key: i => [...map.keys()][i] ?? null,
    getItem: k => map.get(k) ?? null, setItem: (k, v) => map.set(k, v), removeItem: k => map.delete(k) };
}
const cases = [
  ['/api/content/', { title: 'Film', streaming_link: 'https://cdn.example/main.mp4' }],
  ['/api/content/episodes/', { title: 'Episode', season: 1, streaming_link: 'https://cdn.example/episode.mp4' }],
  ['/api/content/miniseries/', { title: 'Part', content: 2, thumbnail: 'https://cdn.example/part.jpg' }],
  ['/api/content/adverts/', { advert_type: 'middle', stream_link: 'https://cdn.example/advert.mp4' }],
  ['/api/channels/', { name: 'Channel', logo_url: 'https://cdn.example/logo.png', cover_image_url: 'https://cdn.example/cover.png' }],
];

for (const [endpoint, payload] of cases) test(`${endpoint}: response loss survives refresh and reuses exact operation/URLs`, async () => {
  const disk = storage(), requests = [];
  let fail = true;
  const transport = {
    options: async () => ({ headers: { 'idempotency-supported': 'v1' } }),
    post: async (path, body, config) => {
      requests.push({ path, body, key: config.headers['Idempotency-Key'] });
      if (fail) { fail = false; throw new Error('committed but response lost'); }
      return { data: { id: 42, ...body }, headers: { 'idempotency-key': config.headers['Idempotency-Key'] } };
    },
  };
  await assert.rejects(persistCreation(new CreationJournal(disk, '7'), transport, 'operation-a', endpoint, payload));
  const refreshed = new CreationJournal(disk, '7'), operation = refreshed.pending()[0];
  assert.deepEqual(operation.payload, payload);
  assert.equal(new CreationJournal(disk, '8').pending().length, 0);
  const result = await persistCreation(refreshed, transport, operation.key, operation.endpoint, operation.payload);
  assert.equal(result.id, 42);
  assert.deepEqual(requests[0], requests[1]);
  assert.deepEqual(refreshed.pending(), []);
});

test('new operations are independent; payload mismatch and storage failure stop before POST', async () => {
  const disk = storage(), journal = new CreationJournal(disk, '7');
  journal.prepare('one', '/api/content/', { title: 'Same' });
  journal.prepare('two', '/api/content/', { title: 'Same' });
  assert.equal(journal.pending().length, 2);
  assert.throws(() => journal.prepare('one', '/api/content/', { title: 'Changed' }));
  assert.throws(() => journal.prepare('one', '/api/channels/', { title: 'Same' }));
  let posts = 0;
  const transport = { options: async () => ({ headers: { 'idempotency-supported': 'v1' } }), post: async () => { posts++; } };
  disk.setItem = () => { throw new Error('quota exceeded'); };
  await assert.rejects(persistCreation(journal, transport, 'three', '/api/content/', { title: 'New' }));
  assert.equal(posts, 0);
});

test('old backend capability and unconfirmed response cannot lose recovery data', async () => {
  const disk = storage(), journal = new CreationJournal(disk, '7');
  let posts = 0;
  const transport = { options: async () => ({ headers: {} }), post: async () => { posts++; return { data: { id: 42 }, headers: {} }; } };
  await assert.rejects(persistCreation(journal, transport, 'one', '/api/content/', {}));
  assert.equal(posts, 0);
  transport.options = async () => ({ headers: { 'idempotency-supported': 'v1' } });
  await assert.rejects(persistCreation(journal, transport, 'one', '/api/content/', {}));
  assert.equal(journal.pending().length, 1);
});
