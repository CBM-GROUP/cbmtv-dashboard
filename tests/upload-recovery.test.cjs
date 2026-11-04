/* eslint-disable @typescript-eslint/no-require-imports */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const Module = require('node:module');
require('ts-node').register({ transpileOnly: true, compilerOptions: { module: 'CommonJS', moduleResolution: 'Node', jsx: 'react-jsx' } });

function deferred() { let resolve, reject; const promise = new Promise((yes, no) => { resolve = yes; reject = no; }); return { promise, resolve, reject }; }
function harness(load, mocks) {
  const slots = []; let index = 0;
  const effects = [];
  const react = {
    createContext: () => ({ Provider: 'provider' }), useContext: () => null,
    useMemo: f => f(), useCallback: f => f,
    useEffect: effect => { effects.push(effect); },
    useRef: value => { const i = index++; return slots[i] ||= { current: value }; },
    useState: value => { const i = index++; if (!(i in slots)) slots[i] = value; return [slots[i], v => { slots[i] = typeof v === 'function' ? v(slots[i]) : v; }]; },
  };
  const original = Module._load;
  Module._load = function (name, parent, main) {
    if (name === 'react') return react;
    if (name === 'react/jsx-runtime') return { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) };
    if (name in mocks) return mocks[name];
    if (name === '@/components/upload/attachment') return original.call(this, '../src/components/upload/attachment.ts', module, main);
    return original.call(this, name, parent, main);
  };
  let subject;
  try { delete require.cache[require.resolve(load)]; subject = require(load); }
  finally { Module._load = original; }
  return { subject, render: f => { index = 0; return f(subject); }, flushEffects: () => effects.splice(0).map(effect => effect()) };
}

test('actual media hook binds A proof despite failed B; reset/unmount invalidates late upload result', async () => {
  const pending = [], used = [];
  const manager = { jobs: [], enqueue: () => { const d = deferred(), jobId = `job-${pending.length + 1}`; pending.push(d); return { jobId, done: d.promise }; },
    confirmAttachment: id => { used.push(id); return true; } };
  const h = harness('../src/hooks/use-media-upload.ts', { '@/components/upload/upload-manager': { useUploadManager: () => manager } });
  const hook = h.render(m => m.useMediaUpload('image'));
  const first = hook.uploadWithProof({ name: 'A' }); pending[0].resolve('https://cdn.example/a.png');
  const a = await first;
  const second = hook.uploadWithProof({ name: 'B' }); pending[1].reject(new Error('replacement failed'));
  await assert.rejects(second);
  assert.equal(a.confirm({ id: 42, thumbnail: a.url }, '/api/content/miniseries/42/', 'thumbnail'), true);
  assert.deepEqual(used, ['job-1']);
  const late = hook.uploadWithProof({ name: 'late' });
  hook.reset(); // ImageUploader cleanup/reset uses this same invalidation.
  pending[2].resolve('https://cdn.example/late.png');
  await assert.rejects(late, /no longer current/);
});

test('actual upload manager repairs failed auto-attachment without another storage transfer', async () => {
  let puts = 0, presigns = 0;
  const h = harness('../src/components/upload/upload-manager.tsx', {
    '@/services/api': { post: async () => { presigns++; return { data: { upload_url: 'https://storage.example/put', delivery_url: 'https://cdn.example/a.mp4', headers: {} } }; },
      patch: async () => { throw new Error('record patch failed'); } },
    './multipart-video': { uploadMultipartVideo: async (_file, _signal, _progress, purpose) => {
      assert.equal(purpose, 'public'); puts++; return 'https://cdn.example/a.mp4';
    } },
    axios: { put: async () => { puts++; }, isAxiosError: () => false },
  });
  let manager = h.render(m => m.UploadProvider({ children: null }).props.value);
  const file = { name: 'advert.mp4', size: 10, type: 'video/mp4' };
  const attach = { endpoint: '/api/content/adverts/42/', field: 'stream_link' };
  const job = manager.enqueue(file, 'video', { attach });
  await assert.rejects(job.done);
  manager = h.render(m => m.UploadProvider({ children: null }).props.value);
  assert.equal(manager.jobs[0].status, 'error');
  assert.equal(manager.jobs[0].transferComplete, true);
  assert.equal(manager.confirmAttachment(job.jobId, attach, { id: 42, stream_link: 'https://cdn.example/a.mp4' }), true);
  manager = h.render(m => m.UploadProvider({ children: null }).props.value);
  assert.equal(manager.jobs[0].status, 'success');
  assert.deepEqual(manager.jobs[0].attach, attach);
  assert.equal(puts, 1); assert.equal(presigns, 0);
});

test('Save during tray retry shares the in-flight transfer and completed file remains reusable', async () => {
  let puts = 0, presigns = 0;
  const retry = deferred();
  const h = harness('../src/components/upload/upload-manager.tsx', {
    '@/services/api': { post: async () => { presigns++; return { data: { upload_url: 'https://storage.example/put', delivery_url: 'https://cdn.example/a.mp4', headers: {} } }; } },
    './multipart-video': { uploadMultipartVideo: async (_file, _signal, _progress, purpose) => {
      assert.equal(purpose, 'protected'); puts++; if (puts === 1) throw new Error('transfer failed');
      await retry.promise; return 'https://cdn.example/a.mp4';
    } },
    axios: { put: async () => { puts++; if (puts === 1) throw new Error('transfer failed'); await retry.promise; }, isAxiosError: () => false },
  });
  const manager = h.render(m => m.UploadProvider({ children: null }).props.value);
  const file = { name: 'episode.mp4', size: 10, type: 'video/mp4' };
  const initial = manager.enqueue(file, 'video');
  await assert.rejects(initial.done);
  manager.retryUpload(initial.jobId);
  const save = manager.enqueue(file, 'video');
  assert.equal(save.jobId, initial.jobId);
  retry.resolve();
  assert.equal(await save.done, 'https://cdn.example/a.mp4');
  const completed = manager.enqueue(file, 'video');
  assert.equal(completed.jobId, initial.jobId);
  assert.equal(await completed.done, 'https://cdn.example/a.mp4');
  assert.equal(puts, 2); assert.equal(presigns, 0);
});

test('cancellation racing with completed storage never reports successful attachment', async () => {
  const transfer = deferred();
  const h = harness('../src/components/upload/upload-manager.tsx', {
    '@/services/api': { post: async () => ({ data: { upload_url: 'https://storage.example/put', delivery_url: 'https://cdn.example/a.mp4', headers: {} } }) },
    './multipart-video': { uploadMultipartVideo: async () => { await transfer.promise; return 'https://cdn.example/a.mp4'; } },
    axios: { put: async () => transfer.promise, isAxiosError: () => false },
  });
  let manager = h.render(m => m.UploadProvider({ children: null }).props.value);
  const job = manager.enqueue({ name: 'cancel.mp4', size: 10, type: 'video/mp4' }, 'video');
  await Promise.resolve();
  manager.cancelUpload(job.jobId);
  transfer.resolve();
  await assert.rejects(job.done, /canceled/);
  manager = h.render(m => m.UploadProvider({ children: null }).props.value);
  assert.equal(manager.jobs[0].status, 'canceled');
  assert.equal(manager.confirmAttachment(job.jobId, { endpoint: '/api/content/42/', field: 'streaming_link' },
    { id: 42, streaming_link: 'https://cdn.example/a.mp4' }), false);
});

test('reset while waiting for a preflight resolver cannot enqueue a stale upload', async () => {
  const preflight = deferred(); let enqueued = 0;
  const h = harness('../src/hooks/use-media-upload.ts', { '@/components/upload/upload-manager': {
    useUploadManager: () => ({ jobs: [], enqueue: () => { enqueued++; throw new Error('stale enqueue'); }, confirmAttachment: () => false }),
  } });
  const hook = h.render(m => m.useMediaUpload('image', { resolveAttach: () => preflight.promise }));
  const upload = hook.uploadWithProof({ name: 'late.png' });
  hook.reset();
  preflight.resolve(undefined);
  await assert.rejects(upload, /no longer current/);
  assert.equal(enqueued, 0);
});

function multipartFixture() {
  const values = new Map();
  const storage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key) };
  const signIn = id => storage.setItem('access_token', `header.${Buffer.from(JSON.stringify({ user_id: id })).toString('base64url')}.signature`);
  const owner = () => JSON.parse(Buffer.from(storage.getItem('access_token').split('.')[1], 'base64url')).user_id;
  signIn(1);
  const records = new Map();
  const state = { starts: [], signs: [], puts: [], statuses: [], completes: [], aborts: [], failPart: 0,
    beforeStatus: null, afterSign: null, loseCompletionResponse: false };
  const api = { post: async (path, body, options = {}) => {
    if (path.endsWith('/start/')) {
      const token = `session-${records.size + 1}`;
      const record = { token, owner: owner(), part_size: 8, part_count: Math.ceil(body.size_bytes / 8), parallelism: 1, parts: new Map(), completed: false };
      records.set(token, record); state.starts.push({ ...body, owner: owner(), token });
      return { data: { token, part_size: 8, part_count: record.part_count, parallelism: 1 } };
    }
    const record = records.get(body.token);
    assert.ok(record, 'server recognizes the signed session');
    assert.equal(record.owner, owner(), 'session operations remain scoped to their owner');
    if (path.endsWith('/status/')) {
      state.statuses.push(body.token);
      if (state.beforeStatus) await state.beforeStatus(body, options);
      return { data: { completed: record.completed, delivery_url: `https://cdn.example/${body.token}.mp4`,
        part_size: record.part_size, part_count: record.part_count,
        parts: [...record.parts].map(([PartNumber, Size]) => ({ PartNumber, Size, ETag: `part-${PartNumber}` })) } };
    }
    if (path.endsWith('/part/')) {
      state.signs.push({ token: body.token, part: body.part_number });
      if (state.afterSign) state.afterSign();
      return { data: { upload_url: `https://storage.example/${body.token}/${body.part_number}` } };
    }
    if (path.endsWith('/complete/')) {
      assert.equal(record.parts.size, record.part_count, 'only complete sources can complete');
      record.completed = true; state.completes.push(body.token);
      if (state.loseCompletionResponse) { state.loseCompletionResponse = false; throw new Error('completion response lost'); }
      return { data: { delivery_url: `https://cdn.example/${body.token}.mp4` } };
    }
    if (path.endsWith('/abort/')) {
      assert.equal(options.signal, undefined, 'cleanup is independent of the canceled transfer');
      state.aborts.push(body.token); return { data: {} };
    }
    assert.fail(`Unexpected media operation: ${path}`);
  } };
  const axios = { isAxiosError: error => error?.isAxiosError === true, put: async (url, chunk, options) => {
    assert.equal(options.headers?.Authorization, undefined, 'S3 never receives a staff bearer token');
    const [, token, partText] = new URL(url).pathname.split('/');
    const part = Number(partText); state.puts.push({ token, part });
    if (part === state.failPart) throw new Error('connection interrupted');
    records.get(token).parts.set(part, chunk.size);
    options.onUploadProgress?.({ loaded: chunk.size });
  } };
  const load = () => {
    // A fresh VM simulates a reload: only persisted storage and the fake S3 server survive.
    const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
    const source = fs.readFileSync(path.join(__dirname, '../src/components/upload/multipart-video.ts'), 'utf8');
    const code = require('typescript').transpileModule(source, { compilerOptions: { module: 1, target: 9, esModuleInterop: true } }).outputText;
    const mod = { exports: {} };
    vm.runInNewContext(code, {
      module: mod, exports: mod.exports, localStorage: storage, crypto: require('node:crypto').webcrypto,
      Blob, Uint8Array, atob, AbortController, DOMException,
      require: name => {
        if (name === 'axios') return axios;
        if (name === '@/services/api') return api;
        if (name === './multipart-transfer') return require('../src/components/upload/multipart-transfer.ts');
        throw new Error(`Unexpected transport dependency: ${name}`);
      },
    }, { filename: 'multipart-video.ts' });
    return mod.exports.uploadMultipartVideo;
  };
  const file = () => new (require('node:buffer').File)([new Uint8Array(24)], 'movie.mp4', { type: 'video/mp4', lastModified: 1234 });
  const pending = () => [...values.keys()].filter(key => key.startsWith('cbmtv:multipart:'));
  return { state, load, file, signIn, pending };
}

test('reselected media resumes persisted server-confirmed parts after reload', async () => {
  const f = multipartFixture(); f.state.failPart = 2;
  await assert.rejects(f.load()(f.file(), new AbortController().signal, () => {}), /connection interrupted/);
  assert.equal(f.pending().length, 1);
  assert.deepEqual(f.state.aborts, []);
  const putCount = f.state.puts.length, progress = [];
  f.state.failPart = 0;
  const result = await f.load()(f.file(), new AbortController().signal, value => progress.push(value));
  assert.equal(result, 'https://cdn.example/session-1.mp4');
  assert.equal(f.state.starts.length, 1);
  assert.deepEqual(f.state.statuses, ['session-1']);
  assert.deepEqual(f.state.puts.slice(putCount).map(part => part.part), [2, 3]);
  assert.equal(progress[0], 33);
  assert.equal(progress.at(-1), 100);
  assert.equal(f.pending().length, 0);
});

test('account switching stops old-account signing and never reuses its persisted session', async () => {
  const f = multipartFixture();
  f.state.afterSign = () => { f.signIn(2); f.state.afterSign = null; };
  await assert.rejects(f.load()(f.file(), new AbortController().signal, () => {}), /account changed/);
  assert.deepEqual(f.state.puts, []);
  assert.deepEqual(f.state.completes, []);
  assert.deepEqual(f.state.aborts, []);
  assert.equal(f.pending().length, 1);
  await f.load()(f.file(), new AbortController().signal, () => {});
  assert.deepEqual(f.state.starts.map(start => start.owner), [1, 2]);
  assert.deepEqual(f.state.statuses, []);
  assert.ok(f.state.puts.every(part => part.token === 'session-2'));
  assert.equal(f.pending().length, 1, 'old owner can still resume its own source later');
});

test('explicit cancellation while reconciling resume status aborts and clears the saved session', async () => {
  const f = multipartFixture(); f.state.failPart = 2;
  await assert.rejects(f.load()(f.file(), new AbortController().signal, () => {}));
  const entered = deferred();
  f.state.beforeStatus = async (_body, options) => {
    entered.resolve();
    await new Promise((_resolve, reject) => options.signal.addEventListener('abort',
      () => reject(new DOMException('Canceled', 'AbortError')), { once: true }));
  };
  const controller = new AbortController();
  const run = f.load()(f.file(), controller.signal, () => {});
  await entered.promise; controller.abort();
  await assert.rejects(run, { name: 'AbortError' });
  assert.deepEqual(f.state.aborts, ['session-1']);
  assert.equal(f.pending().length, 0);
  assert.deepEqual(f.state.completes, []);
});

test('lost completion responses recover without repeating storage transfers', async () => {
  const f = multipartFixture(); f.state.loseCompletionResponse = true;
  await assert.rejects(f.load()(f.file(), new AbortController().signal, () => {}), /completion response lost/);
  const putCount = f.state.puts.length;
  assert.equal(f.pending().length, 1);
  const result = await f.load()(f.file(), new AbortController().signal, () => {});
  assert.equal(result, 'https://cdn.example/session-1.mp4');
  assert.equal(f.state.puts.length, putCount);
  assert.deepEqual(f.state.completes, ['session-1']);
  assert.equal(f.pending().length, 0);
});

test('public trailers never reuse a protected-source resume session', async () => {
  const f = multipartFixture(); f.state.failPart = 2;
  await assert.rejects(f.load()(f.file(), new AbortController().signal, () => {}, 'protected'));
  f.state.failPart = 0;
  await f.load()(f.file(), new AbortController().signal, () => {}, 'public');
  assert.deepEqual(f.state.starts.map(start => start.purpose), ['protected', 'public']);
  assert.deepEqual(f.state.statuses, []);
  assert.equal(f.pending().length, 1);
});

test('processing status accepts an undefined source without reading a null snapshot', () => {
  const h = harness('../src/components/upload/media-processing-status.tsx', {
    '@/services/api': { get: () => assert.fail('empty source must not query processing') },
    '@/components/ui/button': { Button: 'button' },
  });
  assert.equal(h.render(m => m.MediaProcessingStatus({ referenceUrl: undefined })), null);
  h.flushEffects().forEach(cleanup => cleanup());
});

test('public uploaded media is ready and stops processing polling', async t => {
  let scheduled = 0, requests = 0;
  t.mock.method(global, 'setTimeout', () => { scheduled++; return 1; });
  const h = harness('../src/components/upload/media-processing-status.tsx', {
    '@/services/api': { get: async () => { requests++; return { data: { state: 'uploaded', ready: true, error: '' } }; } },
    '@/components/ui/button': { Button: 'button' },
  });
  h.render(m => m.MediaProcessingStatus({ referenceUrl: 'https://cdn.example/trailer.mp4' }));
  const cleanups = h.flushEffects();
  await Promise.resolve();
  const element = h.render(m => m.MediaProcessingStatus({ referenceUrl: 'https://cdn.example/trailer.mp4' }));
  assert.equal(element.props.children[0].props.children, 'Ready to play');
  assert.equal(requests, 1);
  assert.equal(scheduled, 0);
  cleanups.forEach(cleanup => cleanup());
});

function accountStorage(t) {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  const values = new Map();
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: {
    getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key),
  } });
  t.after(() => { if (original) Object.defineProperty(globalThis, 'localStorage', original); else delete globalThis.localStorage; });
  const signIn = id => values.set('access_token', `header.${Buffer.from(JSON.stringify({ user_id: id })).toString('base64url')}.signature`);
  signIn(1);
  return signIn;
}

test('an account switch between storage completion and attachment never patches the new account', async t => {
  const signIn = accountStorage(t), transfer = deferred();
  let patches = 0, signal;
  const h = harness('../src/components/upload/upload-manager.tsx', {
    '@/services/api': { patch: async () => { patches++; return { data: {} }; } },
    './multipart-video': { uploadMultipartVideo: async (_file, activeSignal) => { signal = activeSignal; await transfer.promise; return 'https://cdn.example/a.mp4'; } },
    axios: { isAxiosError: () => false },
  });
  let manager = h.render(m => m.UploadProvider({ children: null }).props.value);
  const target = { endpoint: '/api/content/42/', field: 'streaming_link' };
  const job = manager.enqueue({ name: 'movie.mp4', size: 10, type: 'video/mp4' }, 'video', { attach: target });
  signIn(2); transfer.resolve();
  await assert.rejects(job.done, /account changed/);
  manager = h.render(m => m.UploadProvider({ children: null }).props.value);
  assert.equal(manager.jobs[0].ownerId, '1');
  assert.equal(manager.jobs[0].status, 'error');
  assert.equal(signal.reason, 'account-changed');
  assert.equal(patches, 0);
  assert.equal(manager.confirmAttachment(job.jobId, target, { id: 42, streaming_link: 'https://cdn.example/a.mp4' }), false);
});

test('tray retries cannot use files retained from a different signed-in account', async t => {
  const signIn = accountStorage(t);
  let transfers = 0;
  const h = harness('../src/components/upload/upload-manager.tsx', {
    '@/services/api': {},
    './multipart-video': { uploadMultipartVideo: async () => { transfers++; throw new Error('offline'); } },
    axios: { isAxiosError: () => false },
  });
  const manager = h.render(m => m.UploadProvider({ children: null }).props.value);
  const job = manager.enqueue({ name: 'movie.mp4', size: 10, type: 'video/mp4' }, 'video');
  await assert.rejects(job.done, /offline/);
  signIn(2); manager.retryUpload(job.jobId);
  await Promise.resolve();
  assert.equal(transfers, 1);
});

test('storage account changes abort outstanding transfers and clear the previous account tray', async t => {
  const signIn = accountStorage(t), events = new Map();
  const original = Object.getOwnPropertyDescriptor(globalThis, 'window');
  Object.defineProperty(globalThis, 'window', { configurable: true, value: {
    addEventListener: (name, callback) => events.set(name, callback), removeEventListener: name => events.delete(name),
    setInterval: () => 1, clearInterval: () => {},
  } });
  t.after(() => { if (original) Object.defineProperty(globalThis, 'window', original); else delete globalThis.window; });
  let signal;
  const h = harness('../src/components/upload/upload-manager.tsx', {
    '@/services/api': {},
    './multipart-video': { uploadMultipartVideo: async (_file, activeSignal) => {
      signal = activeSignal;
      return new Promise((_resolve, reject) => activeSignal.addEventListener('abort', () => reject(new DOMException('Canceled', 'AbortError')), { once: true }));
    } },
    axios: { isAxiosError: () => false },
  });
  let manager = h.render(m => m.UploadProvider({ children: null }).props.value);
  const cleanup = h.flushEffects();
  const job = manager.enqueue({ name: 'movie.mp4', size: 10, type: 'video/mp4' }, 'video');
  signIn(2); events.get('storage')();
  await assert.rejects(job.done, { name: 'AbortError' });
  manager = h.render(m => m.UploadProvider({ children: null }).props.value);
  assert.equal(signal.reason, 'account-changed');
  assert.equal(manager.jobs.length, 0);
  cleanup.forEach(clean => clean());
});

test('account-change cancellation preserves the multipart session for its original owner', async () => {
  const f = multipartFixture(); f.state.failPart = 2;
  await assert.rejects(f.load()(f.file(), new AbortController().signal, () => {}));
  const entered = deferred();
  f.state.beforeStatus = async (_body, options) => {
    entered.resolve();
    await new Promise((_resolve, reject) => options.signal.addEventListener('abort', () => reject(new DOMException('Canceled', 'AbortError')), { once: true }));
  };
  const controller = new AbortController(), run = f.load()(f.file(), controller.signal, () => {});
  await entered.promise; controller.abort('account-changed');
  await assert.rejects(run, { name: 'AbortError' });
  assert.deepEqual(f.state.aborts, []);
  assert.equal(f.pending().length, 1);
});

test('transient server status failures retain persisted parts instead of starting a new upload', async () => {
  const f = multipartFixture(); f.state.failPart = 2;
  await assert.rejects(f.load()(f.file(), new AbortController().signal, () => {}));
  f.state.beforeStatus = async () => { throw Object.assign(new Error('retry later'), { isAxiosError: true, response: { status: 503 } }); };
  await assert.rejects(f.load()(f.file(), new AbortController().signal, () => {}), /retry later/);
  assert.equal(f.state.starts.length, 1);
  assert.equal(f.pending().length, 1);
  assert.deepEqual(f.state.aborts, []);
});
