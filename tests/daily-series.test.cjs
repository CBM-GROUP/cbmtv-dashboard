/* eslint-disable @typescript-eslint/no-require-imports */
const test = require('node:test');
const assert = require('node:assert/strict');
require('ts-node').register({ transpileOnly: true, compilerOptions: { module: 'CommonJS', moduleResolution: 'Node' } });
const { dailySeries } = require('../src/lib/daily-series.ts');

test('fills missing dates without changing recorded counts', () => {
  assert.deepEqual(dailySeries([
    { day: '2026-11-01', count: 4 }, { day: '2026-11-04', count: 2 },
  ], '2026-11-01', '2026-11-04'), [
    { day: '2026-11-01', count: 4 }, { day: '2026-11-02', count: 0 },
    { day: '2026-11-03', count: 0 }, { day: '2026-11-04', count: 2 },
  ]);
});

test('empty range stays zero and excludes events outside selected dates', () => {
  assert.deepEqual(dailySeries([{ day: '2026-11-01', count: 9 }], '2026-11-02', '2026-11-03'), [
    { day: '2026-11-02', count: 0 }, { day: '2026-11-03', count: 0 },
  ]);
});

test('UTC iteration crosses month and leap-day boundaries', () => {
  assert.deepEqual(dailySeries([{ day: '2024-03-01', count: 3 }], '2024-02-28', '2024-03-01'), [
    { day: '2024-02-28', count: 0 }, { day: '2024-02-29', count: 0 },
    { day: '2024-03-01', count: 3 },
  ]);
});
