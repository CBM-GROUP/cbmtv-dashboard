/* eslint-disable @typescript-eslint/no-require-imports -- Match the existing node:test/ts-node harness. */
const { test, afterEach } = require('node:test');
const assert = require('node:assert/strict');
require('ts-node').register({ transpileOnly: true, compilerOptions: { module: 'CommonJS', moduleResolution: 'Node' } });
const { durationSeconds, readVideoDuration, videoSizeBytes } = require('../src/lib/video-metadata.ts');
const originalDocument = global.document;
const originalCreate = URL.createObjectURL;
const originalRevoke = URL.revokeObjectURL;
afterEach(() => { global.document = originalDocument; URL.createObjectURL = originalCreate; URL.revokeObjectURL = originalRevoke; });

function browser() {
  const revoked = [];
  const videos = [];
  global.document = { createElement: () => {
    const video = { duration: 0, onloadedmetadata: null, onerror: null, load() {}, removeAttribute() {} };
    videos.push(video); return video;
  } };
  URL.createObjectURL = () => `blob:${videos.length}`;
  URL.revokeObjectURL = (url) => revoked.push(url);
  return { videos, revoked };
}

test('duration is positive finite decimal seconds and size is exact bytes', () => {
  for (const invalid of [NaN, Infinity, -1, 0]) assert.equal(durationSeconds(invalid), null);
  assert.equal(durationSeconds(90.25), '90.25');
  assert.equal(videoSizeBytes({ size: 100000001 }), '100000001');
});

test('metadata success and unsupported metadata both clean up object URLs', async () => {
  const { videos, revoked } = browser();
  for (const value of [90.25, Infinity, 0]) {
    const reading = readVideoDuration({}, new AbortController().signal);
    const video = videos.at(-1); video.duration = value; video.onloadedmetadata();
    assert.equal(await reading, value === 90.25 ? '90.25' : null);
    assert.equal(video.onloadedmetadata, null);
  }
  assert.equal(revoked.length, 3);
});

test('unsupported files, timeouts and rapid file changes stay unknown and release URLs', async () => {
  const { videos, revoked } = browser();
  const bad = readVideoDuration({}, new AbortController().signal); videos.at(-1).onerror();
  assert.equal(await bad, null);
  assert.equal(await readVideoDuration({}, new AbortController().signal, 1), null);
  const controller = new AbortController();
  const old = readVideoDuration({}, controller.signal); controller.abort();
  const latest = readVideoDuration({}, new AbortController().signal);
  videos.at(-1).duration = 42; videos.at(-1).onloadedmetadata();
  assert.equal(await old, null); assert.equal(await latest, '42');
  assert.equal(revoked.length, 4);
});
