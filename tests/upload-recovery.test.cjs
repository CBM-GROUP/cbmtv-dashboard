/* eslint-disable @typescript-eslint/no-require-imports */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const Module = require('node:module');
require('ts-node').register({ transpileOnly: true, compilerOptions: { module: 'CommonJS', moduleResolution: 'Node', jsx: 'react-jsx' } });

function deferred() { let resolve, reject; const promise = new Promise((yes, no) => { resolve = yes; reject = no; }); return { promise, resolve, reject }; }
function harness(load, mocks) {
  const slots = []; let index = 0;
  const react = {
    createContext: () => ({ Provider: 'provider' }), useContext: () => null,
    useMemo: f => f(), useCallback: f => f,
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
  return { subject, render: f => { index = 0; return f(subject); } };
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
    './multipart-video': { uploadMultipartVideo: async () => { throw new Error('unexpected multipart'); } },
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
  assert.equal(puts, 1); assert.equal(presigns, 1);
});

test('Save during tray retry shares the in-flight transfer and completed file remains reusable', async () => {
  let puts = 0, presigns = 0;
  const retry = deferred();
  const h = harness('../src/components/upload/upload-manager.tsx', {
    '@/services/api': { post: async () => { presigns++; return { data: { upload_url: 'https://storage.example/put', delivery_url: 'https://cdn.example/a.mp4', headers: {} } }; } },
    './multipart-video': { uploadMultipartVideo: async () => { throw new Error('unexpected multipart'); } },
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
  assert.equal(puts, 2); assert.equal(presigns, 2);
});

test('cancellation racing with completed storage never reports successful attachment', async () => {
  const transfer = deferred();
  const h = harness('../src/components/upload/upload-manager.tsx', {
    '@/services/api': { post: async () => ({ data: { upload_url: 'https://storage.example/put', delivery_url: 'https://cdn.example/a.mp4', headers: {} } }) },
    './multipart-video': { uploadMultipartVideo: async () => { throw new Error('unexpected multipart'); } },
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
