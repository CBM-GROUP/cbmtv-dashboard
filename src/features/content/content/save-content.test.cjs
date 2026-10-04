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
    return `https://cdn.example/${file.name}`;
  }, async (data) => {
    calls.push(`save:${data.status}`);
    assert.equal(data.thumbnail, 'https://cdn.example/poster.png');
    assert.equal(data.streaming_link, 'https://cdn.example/movie.mp4');
  });
  assert.deepEqual(calls, ['upload:movie.mp4', 'upload:poster.png', 'save:preview']);
});

test('failed DB save reuses uploaded media on retry without another S3 upload', async () => {
  const selected = emptySelection();
  selected.streaming_link = { name: 'movie.mp4' };
  const cache = {};
  let uploads = 0;
  let writes = 0;
  const upload = async () => { uploads += 1; return 'https://cdn.example/movie.mp4'; };
  const persist = async () => { writes += 1; if (writes === 1) throw new Error('DB offline'); };
  await assert.rejects(saveContentWithMedia(payload, selected, cache, upload, persist),
    (error) => error instanceof ContentSaveFailure && error.stage === 'save');
  await saveContentWithMedia(payload, selected, cache, upload, persist);
  assert.equal(uploads, 1);
  assert.equal(writes, 2);
});
