/* eslint-disable @typescript-eslint/no-require-imports */
const test = require('node:test');
const assert = require('node:assert/strict');
require('ts-node').register({ transpileOnly: true, compilerOptions: { module: 'CommonJS', moduleResolution: 'Node' } });
const { advertisingService: ads, workflowActions, campaignPayloadValid, campaignPriorityValid, deliveryStatus, advertisingError } = require('../src/services/advertisingService.ts');
const { advertService } = require('../src/services/advertService.ts');
const api = require('../src/services/api.ts').default;
const { validateHomepage, sectionLabels } = require('../src/services/homepageService.ts');

test('campaign form requires schedule, advertiser and placement', () => {
  const valid = { name: 'Launch', advertiser: 1, starts_at: '2026-11-05T12:00:00Z', ends_at: '2026-11-06T12:00:00Z', placements: ['preroll'] };
  assert.equal(campaignPayloadValid(valid), true);
  for (const patch of [{ advertiser: null }, { placements: [] }, { ends_at: valid.starts_at }, { starts_at: 'bad' }, { name: '' }]) assert.equal(campaignPayloadValid({ ...valid, ...patch }), false);
});

test('priority follows backend range and higher number means higher priority', () => {
  assert.equal(campaignPriorityValid(1), true);
  assert.equal(campaignPriorityValid(100), true);
  for (const value of [0, 101, 1.5, null, '']) assert.equal(campaignPriorityValid(value), false);
});

test('delivery status never turns absent monitoring or zero events into failure', () => {
  assert.equal(deliveryStatus(null), 'monitoring-unavailable');
  assert.equal(deliveryStatus({ enabled: false, summary: { impression: 10 } }), 'disabled');
  assert.equal(deliveryStatus({ enabled: true, summary: { impression: 0 } }), 'unknown');
  assert.equal(deliveryStatus({ enabled: true, summary: { impression: 1 } }), 'recorded');
});

test('HTML targeting failures are not presented as raw server pages', () => {
  const message = advertisingError({ response: { status: 502, data: '<!DOCTYPE html><html><body>Proxy failure</body></html>' } });
  assert.match(message, /unexpected server page/);
  assert.doesNotMatch(message, /<html|Proxy failure/);
  assert.match(advertisingError({ response: { status: 400, data: { targeting: ['Select existing eligible targets.'] } } }), /targeting: Select existing eligible targets/);
});

test('legacy adverts still use the mobile-compatible content endpoint', async () => {
  const original = api.get;
  try {
    api.get = async path => { assert.equal(path, '/api/content/adverts/'); return { data: [{ id: '7', advert_name: 'Legacy' }] }; };
    assert.equal((await advertService.getAdverts())[0].advert_name, 'Legacy');
  } finally { api.get = original; }
});

test('workflow actions distinguish approval from delivery and enforce approval permissions', () => {
  assert.deepEqual(workflowActions({ approval: 'review', status: 'paused' }, 'campaigns', false), ['complete']);
  assert.deepEqual(workflowActions({ approval: 'review' }, 'creatives', true), ['approve', 'reject']);
  assert.deepEqual(workflowActions({ approval: 'approved', status: 'active' }, 'campaigns', false), ['pause', 'complete']);
  assert.deepEqual(workflowActions({ approval: 'approved', status: 'paused' }, 'campaigns', false), ['resume', 'complete']);
  assert.deepEqual(workflowActions({ approval: 'approved', status: 'completed' }, 'campaigns', true), []);
});

test('advertising service follows all pages without trusting a server-supplied next origin', async () => {
  const original = api.get, calls = [];
  try {
    api.get = async (url, config) => { calls.push({ url, ...config }); return { data: { results: [{ id: config.params.page }], next: config.params.page === 1 ? 'https://untrusted.example/page=2' : null } }; };
    assert.deepEqual(await ads.list('campaigns'), [{ id: 1 }, { id: 2 }]);
    assert.deepEqual(calls.map(c => c.url), ['/api/advertising/campaigns/', '/api/advertising/campaigns/']);
    assert.deepEqual(calls.map(c => c.params.page), [1, 2]);
  } finally { api.get = original; }
});

test('workflow, upload, preview and reporting preserve API validation and permissions', async () => {
  const previous = { post: api.post, patch: api.patch, get: api.get }, calls = [];
  try {
    api.post = async (url, data) => { calls.push({ url, data }); return { data: { id: 2 } }; };
    api.patch = async (url, data) => { calls.push({ url, data }); return { data }; };
    api.get = async (url, config) => { calls.push({ url, config }); return { data: { summary: { impression: 0 } } }; };
    await ads.workflow('campaigns', 2, 'pause'); await ads.preview(2);
    await ads.save('advertisers', { id: 3, active: false });
    await ads.uploadImage(new File(['image'], 'banner.webp', { type: 'image/webp' }));
    await ads.reports('2026-11-01', '2026-11-05', 2, 3);
    assert.equal(calls[0].url, '/api/advertising/campaigns/2/workflow/');
    assert.deepEqual(calls[0].data, { action: 'pause' });
    assert.equal(calls[3].data.get('file').name, 'banner.webp');
    assert.deepEqual(calls[4].config.params, { from: '2026-11-01', to: '2026-11-05', campaign: 2, advertiser: 3 });
    api.post = async () => { throw { response: { status: 403 } }; };
    await assert.rejects(ads.workflow('creatives', 2, 'approve'));
    assert.match(advertisingError({ response: { status: 403 } }), /permission/);
    assert.match(advertisingError({ response: { status: 400, data: { destination_url: ['Use HTTPS.'] } } }), /destination_url: Use HTTPS/);
  } finally { Object.assign(api, previous); }
});

test('homepage optional sponsorship preserves old configurations and bounds density', () => {
  const config = { sections: Object.keys(sectionLabels).filter(k => !k.startsWith('homepage_')).map(id => ({ id, enabled: true })), featured_titles: [], featured_channels: [], new_releases: { duration: 30, unit: 'days' } };
  assert.equal(validateHomepage(config), null);
  config.sections.push({ id: 'homepage_banner', enabled: true }); assert.equal(validateHomepage(config), null);
  config.sections.push({ id: 'homepage_content_promotion', enabled: true }, { id: 'homepage_channel_promotion', enabled: true });
  assert.match(validateHomepage(config), /at most two/);
  config.sections.splice(-2); const banner = config.sections.pop(); config.sections.splice(1, 0, banner);
  assert.match(validateHomepage(config), /first three/);
});
