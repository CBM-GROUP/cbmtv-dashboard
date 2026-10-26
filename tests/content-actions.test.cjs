/* eslint-disable @typescript-eslint/no-require-imports -- Match the existing node:test/ts-node harness. */
const { test } = require('node:test');
const assert = require('node:assert/strict');
require('ts-node').register({ transpileOnly: true, compilerOptions: { module: 'CommonJS', moduleResolution: 'Node' } });
const { changePublication } = require('../src/features/content/content/publication.ts');
const { attachedJob, attachmentMatches, reusableUpload, uploadConfirmation } = require('../src/components/upload/attachment.ts');

test('approve/unpublish changes only status and uses the confirmed record', async () => {
  for (const [before, after] of [['preview', 'approved'], ['approved', 'preview']]) {
    const saved = await changePublication({ id: 42, status: before }, async (id, data, expected) => {
      assert.equal(expected, before);
      assert.equal(id, 42); assert.deepEqual(data, { status: after });
      return { id, ...data, is_featured: true };
    });
    assert.equal(saved.status, after); assert.equal(saved.is_featured, true);
  }
});

test('completed transfer with failed auto-attachment can be confirmed by a later Save', () => {
  const target = { endpoint: '/api/content/adverts/42/', field: 'stream_link' };
  const job = { id: 'upload-a', status: 'error', transferComplete: true, deliveryUrl: 'https://cdn.example/a.mp4', attach: target };
  const saved = { id: 42, stream_link: job.deliveryUrl };
  const recovered = attachedJob(job, target, saved);
  assert.equal(recovered.status, 'success');
  assert.equal(recovered.error, '');
  assert.equal(attachedJob({ ...job, transferComplete: false }, target, saved), null);
  assert.equal(attachedJob({ ...job, status: 'canceled' }, target, saved), null);
  assert.equal(attachedJob(job, { ...target, endpoint: '/api/content/adverts/43/' }, { ...saved, id: 43 }), null);
});

for (const [endpoint, field] of [['/api/channels/42/', 'logo_url'], ['/api/channels/42/', 'cover_image_url'],
  ['/api/content/miniseries/42/', 'thumbnail'], ['/api/content/adverts/42/', 'advert_thumbnail']]) {
  test(`${endpoint} ${field}: image A proof survives failed replacement B and rejects wrong/canceled association`, () => {
    const jobs = { A: { id: 'A', status: 'success', deliveryUrl: 'https://cdn.example/a.png' },
      B: { id: 'B', status: 'error', deliveryUrl: '' } };
    let used;
    const proof = uploadConfirmation('A', jobs.A.deliveryUrl, (id, target, saved) => { used = id; return !!attachedJob(jobs[id], target, saved); });
    assert.equal(proof({ id: 42, [field]: jobs.A.deliveryUrl }, endpoint, field), true);
    assert.equal(used, 'A');
    assert.equal(proof({ id: 42, [field]: 'https://cdn.example/b.png' }, endpoint, field), false);
    jobs.A.status = 'canceled';
    assert.equal(proof({ id: 42, [field]: jobs.A.deliveryUrl }, endpoint, field), false);
  });
}

test('failed or inconsistent publication response is not a successful approval', async () => {
  for (const response of [{ id: 43, status: 'approved' }, { id: 42, status: 'preview' }]) {
    await assert.rejects(changePublication({ id: 42, status: 'preview' }, async () => response));
  }
  await assert.rejects(changePublication({ id: 42, status: 'preview' }, async () => { throw new Error('offline'); }));
});

test('attachment requires matching record id, endpoint, field and full URL', () => {
  const url = 'https://cdn.example/movie.mp4', endpoint = '/api/content/42/', field = 'streaming_link';
  assert.equal(attachmentMatches(url, endpoint, field, { id: 42, [field]: url }), true);
  for (const saved of [null, {}, { id: 43, [field]: url }, { id: 42, [field]: url + '?different' }]) {
    assert.equal(attachmentMatches(url, endpoint, field, saved), false);
  }
});

test('a completed upload remains unattached until matching save confirmation; failed/canceled jobs cannot be confirmed', () => {
  const job = { id: 'upload-1', status: 'success', deliveryUrl: 'https://cdn.example/movie.mp4' };
  const target = { endpoint: '/api/content/42/', field: 'streaming_link' };
  assert.equal(attachedJob(job, target, undefined), null);
  assert.equal(job.attach, undefined);
  const saved = { id: 42, streaming_link: job.deliveryUrl };
  for (const status of ['uploading', 'attaching', 'error', 'canceled']) {
    assert.equal(attachedJob({ ...job, status }, target, saved), null);
  }
  const attached = attachedJob(job, target, saved);
  assert.deepEqual(attached.attach, target);
  assert.equal(attached.deliveryUrl, job.deliveryUrl);
});

test('a successful tray retry can be reused by Save, but canceled, dismissed, attached or changed media cannot', () => {
  const completed = { jobId: 'upload-1', url: 'https://cdn.example/movie.mp4', mediaType: 'video' };
  const job = { id: completed.jobId, deliveryUrl: completed.url, status: 'success' };
  assert.equal(reusableUpload(completed, job, 'video'), completed);
  for (const invalid of [undefined, { ...job, status: 'canceled' }, { ...job, attach: {} }, { ...job, deliveryUrl: 'other' }]) {
    assert.equal(reusableUpload(completed, invalid, 'video'), undefined);
  }
  assert.equal(reusableUpload(completed, job, 'image'), undefined);
});
