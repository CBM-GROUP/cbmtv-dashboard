/* eslint-disable @typescript-eslint/no-require-imports -- node:test uses this CommonJS harness to register ts-node before loading save-content.ts. */
const { test } = require('node:test');
const assert = require('node:assert/strict');

require('ts-node').register({
  transpileOnly: true,
  compilerOptions: { module: 'CommonJS', moduleResolution: 'Node' },
});
const { ContentSaveFailure, saveContentWithMedia } = require('./save-content.ts');

const emptySelection = () => ({ trailer_link: null, streaming_link: null, thumbnail: null });
const payload = { title: 'Preview', status: 'preview', thumbnail: null, streaming_link: null, trailer_link: null };

test('failed S3 upload leaves the form selection intact and creates no Content', async () => {
  const selected = emptySelection();
  const file = { name: 'video.mp4' };
  selected.streaming_link = file;
  let writes = 0;
  await assert.rejects(
    saveContentWithMedia(payload, selected, {}, async () => { throw new Error('S3 CORS'); },
      async () => { writes += 1; }),
    (error) => error instanceof ContentSaveFailure && error.stage === 'upload',
  );
  assert.equal(writes, 0);
  assert.equal(selected.streaming_link, file);
});

test('Save uploads selected media before exactly one Content write', async () => {
  const selected = emptySelection();
  selected.thumbnail = { name: 'poster.png' };
  selected.streaming_link = { name: 'movie.mp4' };
  const calls = [];
  await saveContentWithMedia(payload, selected, {}, async (file) => {
    calls.push(`upload:${file.name}`);
    return { jobId: file.name, url: `https://cdn.example/${file.name}` };
  }, async (data) => {
    calls.push(`save:${data.status}`);
    assert.equal(data.thumbnail, 'https://cdn.example/poster.png');
    assert.equal(data.streaming_link, 'https://cdn.example/movie.mp4');
    return { ...data, id: 10 };
  }, () => {});
  assert.deepEqual(calls, ['upload:movie.mp4', 'upload:poster.png', 'save:preview']);
});

test('failed DB save reuses uploaded media on retry without another S3 upload', async () => {
  const selected = emptySelection();
  selected.streaming_link = { name: 'movie.mp4' };
  const cache = {};
  let uploads = 0;
  let writes = 0;
  const upload = async () => { uploads += 1; return { jobId: 'job-1', url: 'https://cdn.example/movie.mp4' }; };
  const persist = async (data) => { writes += 1; if (writes === 1) throw new Error('DB offline'); return { ...data, id: 10 }; };
  await assert.rejects(saveContentWithMedia(payload, selected, cache, upload, persist, () => {}),
    (error) => error instanceof ContentSaveFailure && error.stage === 'save');
  await saveContentWithMedia(payload, selected, cache, upload, persist, () => {});
  assert.equal(uploads, 1);
  assert.equal(writes, 2);
});

test('confirms all three saved links only after the API returns matching media and a record id', async () => {
  const selected = { trailer_link: { name: 'trailer.mp4' }, streaming_link: { name: 'movie.mp4' }, thumbnail: { name: 'image.png' } };
  const confirmations = [];
  let persisted = false;
  await saveContentWithMedia(payload, selected, {}, async (file) => ({ jobId: file.name, url: `https://cdn.example/${file.name}` }),
    async (data) => { persisted = true; return { ...data, id: 42 }; },
    (id, endpoint, field, saved) => { assert.equal(persisted, true); confirmations.push([id, endpoint, field]); assert.equal(saved.id, 42); });
  assert.equal(confirmations.length, 3);
  assert.ok(confirmations.every((entry) => entry[1] === '/api/content/42/'));
});

test('missing record id or mismatched saved link never confirms attachment', async () => {
  for (const response of [{}, { id: 42, streaming_link: 'https://cdn.example/wrong.mp4' }]) {
    const selected = emptySelection(); selected.streaming_link = { name: 'movie.mp4' };
    let confirmed = 0;
    await assert.rejects(saveContentWithMedia(payload, selected, {},
      async () => ({ jobId: 'job-1', url: 'https://cdn.example/movie.mp4' }), async () => response,
      () => { confirmed++; }), (error) => error.stage === 'confirmation');
    assert.equal(confirmed, 0);
  }
});

test('metadata edits omit status and old metadata; only the selected main video supplies new bytes and duration', () => {
  const { contentPayload } = require('./save-content.ts');
  const existing = { ...payload, title: 'Existing', channel: 5, status: 'approved', size: 'legacy size', duration: '00:20:00', is_featured: true };
  const unchanged = contentPayload(existing, null, null);
  for (const field of ['status', 'size', 'duration', 'id']) assert.equal(field in unchanged, false);
  assert.equal(unchanged.is_featured, true);
  assert.equal(contentPayload(existing, { size: 123456789 }, '90.25').size, '123456789');
  assert.equal(contentPayload(existing, { size: 123456789 }, null).duration, null);
});

test('an edit response for a different record never attaches the upload', async () => {
  const selected = emptySelection(); selected.streaming_link = { name: 'movie.mp4' };
  let confirmed = 0;
  await assert.rejects(saveContentWithMedia(payload, selected, {},
    async () => ({ jobId: 'job-1', url: 'https://cdn.example/movie.mp4' }),
    async (data) => ({ ...data, id: 99 }), () => { confirmed++; }, '42'),
    (error) => error.stage === 'confirmation');
  assert.equal(confirmed, 0);
});
