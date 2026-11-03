/* eslint-disable @typescript-eslint/no-require-imports */
const test = require('node:test');
const assert = require('node:assert/strict');
require('ts-node').register({ transpileOnly: true, compilerOptions: { module: 'CommonJS', moduleResolution: 'Node' } });
const { moveItem, validateHomepage, homepageService, sectionLabels } = require('../src/services/homepageService.ts');
const api = require('../src/services/api.ts').default;
const { channelService } = require('../src/services/channelService.ts');
const config = () => ({ sections: Object.keys(sectionLabels).map((id) => ({ id, enabled: true })), featured_titles: [], featured_channels: [], new_releases: { duration: 30, unit: 'days' } });

test('overview keeps public channel reads while editors explicitly retain dashboard scope over pagination', async () => {
  const original = api.get;
  const calls = [];
  try {
    api.get = async path => {
      calls.push(path);
      if (path === '/api/channels/') return { data: { results: [{ id: 1 }], next: null } };
      if (path.includes('page=2')) return { data: { results: [{ id: 3, is_active: false }], next: null } };
      return { data: { results: [{ id: 2 }], next: 'https://backend.test/api/channels/?page=2&scope=dashboard' } };
    };
    assert.deepEqual(await channelService.getChannels(), [{ id: 1 }]);
    assert.deepEqual(await channelService.getChannels('dashboard'), [{ id: 2 }, { id: 3, is_active: false }]);
    assert.deepEqual(calls, ['/api/channels/', '/api/channels/?scope=dashboard', '/api/channels/?page=2&scope=dashboard']);
  } finally { api.get = original; }
});

test('editor ordering preserves input and bounds', () => {
  const original = ['a', 'b', 'c'];
  assert.deepEqual(moveItem(original, 1, -1), ['b', 'a', 'c']);
  assert.deepEqual(original, ['a', 'b', 'c']);
  assert.deepEqual(moveItem(original, 2, 1), original);
});
test('editor validates required sections, schedule ranges, duplicates and release duration', () => {
  assert.equal(validateHomepage(config()), null);
  let data = config(); data.sections[2].enabled = false;
  assert.match(validateHomepage(data), /required/);
  data = config(); data.sections = moveItem(data.sections, 0, 1);
  assert.match(validateHomepage(data), /first/);
  data = config(); data.new_releases.duration = 0;
  assert.match(validateHomepage(data), /duration/);
  data = config(); data.featured_titles = [{ content: 1, start_at: '2026-11-02T12:00:00Z', end_at: '2026-11-02T11:00:00Z' }];
  assert.match(validateHomepage(data), /End/);
  data = config(); data.featured_channels = [{ channel: 1 }, { channel: 1 }];
  assert.match(validateHomepage(data), /duplicate/);
});
test('save sends configuration once, returns server result, and preserves server rejection', async () => {
  const original = api.put;
  let calls = 0;
  try {
    api.put = async (path, payload) => { calls++; assert.equal(path, '/api/homepage/manage/'); return { data: payload }; };
    const draft = config();
    assert.deepEqual(await homepageService.save(draft), draft);
    assert.equal(calls, 1);
    draft.new_releases.duration = 0;
    await assert.rejects(homepageService.save(draft), /duration/);
    assert.equal(calls, 1);
    api.put = async () => { throw new Error('403 forbidden'); };
    await assert.rejects(homepageService.save(config()), /403/);
  } finally { api.put = original; }
});
