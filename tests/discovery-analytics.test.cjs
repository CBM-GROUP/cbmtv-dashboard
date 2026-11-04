/* eslint-disable @typescript-eslint/no-require-imports */
const test = require('node:test');
const assert = require('node:assert/strict');
require('ts-node').register({ transpileOnly: true, compilerOptions: { module: 'CommonJS', moduleResolution: 'Node' } });
const { analyticsState, validRange } = require('../src/lib/discovery-analytics.ts');
const { discoveryService } = require('../src/services/discoveryService.ts');
const api = require('../src/services/api.ts').default;

const data = available => ({ available, summary: { qualified_views: 0, submissions: 0, search_clicks: 0 } });

test('analytics distinguishes loading, forbidden, errors, unavailable, empty and activity', () => {
  assert.equal(analyticsState(null, true, null), 'loading');
  assert.equal(analyticsState(null, false, 'forbidden'), 'forbidden');
  assert.equal(analyticsState(null, false, 'error'), 'error');
  assert.equal(analyticsState(null, false, null), 'unavailable');
  assert.equal(analyticsState(data(false), false, null), 'unavailable');
  assert.equal(analyticsState(data(true), false, null), 'empty');
  assert.equal(analyticsState({ ...data(true), summary: { qualified_views: 1, submissions: 0, search_clicks: 0 } }, false, null), 'ready');
});

test('date range rejects invalid dates, reversed dates and spans over 90 days', () => {
  assert.equal(validRange('2026-11-01', '2026-11-04'), true);
  assert.equal(validRange('2026-02-30', '2026-03-01'), false);
  assert.equal(validRange('2026-11-04', '2026-11-01'), false);
  assert.equal(validRange('2026-01-01', '2026-04-01'), false);
});

test('analytics requests the selected range and preserves API permission failures', async () => {
  const original = api.get;
  const signal = new AbortController().signal;
  try {
    api.get = async (path, config) => {
      assert.equal(path, '/api/discovery/analytics/');
      assert.deepEqual(config.params, { from: '2026-11-01', to: '2026-11-04' });
      assert.equal(config.signal, signal);
      return { data: data(true) };
    };
    assert.equal((await discoveryService.analytics('2026-11-01', '2026-11-04', signal)).available, true);
    api.get = async () => { throw Object.assign(new Error('Forbidden'), { response: { status: 403 } }); };
    await assert.rejects(discoveryService.analytics('2026-11-01', '2026-11-04'), error => error.response.status === 403);
  } finally { api.get = original; }
});
