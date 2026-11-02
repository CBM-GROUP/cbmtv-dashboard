import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

for (const [path, method] of [
  ['app/api/create-upload', 'POST'],
  ['app/api/upload-status', 'GET'],
  ['app/api/asset-details', 'GET'],
  ['api/create-upload', 'POST'],
  ['api/upload-status', 'GET'],
  ['api/asset-details', 'GET'],
]) {
  test(`${path}: no caller can reach a retired provider operation`, async () => {
    // Import the real dependency-free handler. Resolving a provider import would
    // fail this test; no real SDK, credentials or outbound connection is needed.
    const source = await readFile(new URL(`../src/${path}/route.js`, import.meta.url), 'utf8');
    const route = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
    for (const authorization of [null, 'Bearer viewer-token', 'Bearer staff-token']) {
      const response = await route[method](new Request('https://dashboard.test/api/legacy', {
        method, headers: authorization ? { Authorization: authorization } : {},
      }));
      assert.equal(response.status, 410);
      assert.equal(response.headers.get('cache-control'), 'no-store');
      assert.deepEqual(await response.json(), { error: 'Legacy upload operations are disabled.' });
    }
  });
}
