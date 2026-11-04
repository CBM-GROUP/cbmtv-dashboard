/* eslint-disable @typescript-eslint/no-require-imports */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const source = ts.transpileModule(fs.readFileSync(path.join(__dirname, '../src/services/api.ts'), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText;
const jwt = id => `header.${Buffer.from(JSON.stringify({ user_id: id })).toString('base64url')}.signature`;
function deferred() {
  let resolve, reject;
  const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
}

function fixture() {
  const values = new Map(), hooks = {}, refreshes = [];
  let expired = 0;
  const storage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key) };
  const signIn = (id, refresh) => { storage.setItem('access_token', jwt(id)); storage.setItem('refresh_token', refresh); };
  signIn(1, 'refresh-a');
  const client = config => Promise.resolve(hooks.request(config)).then(config => hooks.success({ config, data: { retried: true } }));
  client.interceptors = {
    request: { use: callback => { hooks.request = callback; } },
    response: { use: (success, failure) => { hooks.success = success; hooks.failure = failure; } },
  };
  const axios = { create: () => client, isAxiosError: error => Boolean(error.response), post: (url, body) => {
    const pending = deferred(); refreshes.push({ ...pending, url, body }); return pending.promise;
  } };
  const loadedModule = { exports: {} };
  vm.runInNewContext(source, {
    module: loadedModule, exports: loadedModule.exports, localStorage: storage, window: {}, process: { env: {} }, Event, atob,
    document: { dispatchEvent: () => { expired++; } },
    require: name => { if (name === 'axios') return axios; throw new Error(`Unexpected API dependency: ${name}`); },
  }, { filename: 'api.ts' });
  const request = () => hooks.request({ headers: {} });
  const unauthorized = config => hooks.failure({ config, response: { status: 401 } });
  return { storage, signIn, hooks, refreshes, request, unauthorized, expired: () => expired };
}

test('concurrent expired requests share one refresh and server token rotation preserves in-flight responses', async () => {
  const f = fixture(), first = f.request(), second = f.request(), third = f.request();
  const requests = [f.unauthorized(first), f.unauthorized(second)];
  assert.equal(f.refreshes.length, 1);
  assert.equal(f.refreshes[0].body.refresh, 'refresh-a');
  f.refreshes[0].resolve({ data: { access: jwt(1), refresh: 'refresh-rotated' } });
  const responses = await Promise.all(requests);
  assert.ok(responses.every(response => response.data.retried));
  assert.equal(f.storage.getItem('refresh_token'), 'refresh-rotated');
  assert.doesNotThrow(() => f.hooks.success({ config: third, data: { oldRequestStillValid: true } }));
  assert.equal(f.expired(), 0);
});

test('a late refresh cannot restore credentials after logout', async () => {
  const f = fixture(), original = f.request();
  const pending = f.unauthorized(original);
  f.storage.removeItem('access_token'); f.storage.removeItem('refresh_token');
  f.refreshes[0].resolve({ data: { access: jwt(1) } });
  await assert.rejects(pending, /account changed/);
  assert.equal(f.storage.getItem('access_token'), null);
  assert.equal(f.storage.getItem('refresh_token'), null);
});

test('switching accounts rejects old successful responses and late refreshes without altering the new account', async () => {
  const f = fixture(), original = f.request();
  const pending = f.unauthorized(original);
  f.signIn(2, 'refresh-b');
  f.refreshes[0].resolve({ data: { access: jwt(1) } });
  await assert.rejects(pending, /account changed/);
  assert.throws(() => f.hooks.success({ config: original, data: { privateOldAccount: true } }), /account changed/);
  await assert.rejects(f.unauthorized(original), /account changed/);
  assert.equal(f.refreshes.length, 1);
  assert.equal(f.storage.getItem('access_token'), jwt(2));
  assert.equal(f.storage.getItem('refresh_token'), 'refresh-b');
  assert.equal(f.expired(), 0);
});

test('same-account reauthentication still rejects responses from the previous login session', () => {
  const f = fixture(), original = f.request();
  f.signIn(1, 'new-login-refresh');
  assert.throws(() => f.hooks.success({ config: original, data: {} }), /account changed/);
});

test('transient refresh failures retain credentials for retry', async t => {
  for (const status of [undefined, 503]) await t.test(String(status ?? 'network'), async () => {
    const f = fixture(), original = f.request();
    const pending = f.unauthorized(original);
    const error = new Error('temporarily unavailable');
    if (status) error.response = { status };
    f.refreshes[0].reject(error);
    await assert.rejects(pending, /temporarily unavailable/);
    assert.equal(f.storage.getItem('access_token'), jwt(1));
    assert.equal(f.storage.getItem('refresh_token'), 'refresh-a');
    assert.equal(f.expired(), 0);
  });
});

test('definitive refresh rejection expires only its own current session', async () => {
  const f = fixture(), original = f.request();
  const pending = f.unauthorized(original);
  f.refreshes[0].reject(Object.assign(new Error('expired'), { response: { status: 401 } }));
  await assert.rejects(pending, /expired/);
  assert.equal(f.storage.getItem('access_token'), null);
  assert.equal(f.storage.getItem('refresh_token'), null);
  assert.equal(f.expired(), 1);

  const switched = fixture(), old = switched.request();
  const late = switched.unauthorized(old); switched.signIn(2, 'refresh-b');
  switched.refreshes[0].reject(Object.assign(new Error('expired'), { response: { status: 401 } }));
  await assert.rejects(late, /expired/);
  assert.equal(switched.storage.getItem('access_token'), jwt(2));
  assert.equal(switched.expired(), 0);
});
