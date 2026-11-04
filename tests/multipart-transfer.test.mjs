import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import ts from "typescript";

// Node 20 cannot import .ts directly; exercise the real module after TS stripping.
const source = readFileSync(new URL("../src/components/upload/multipart-transfer.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: {
  module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022,
} }).outputText;
const { transferParts } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);

test("retries a failed part, completes once, and counts confirmed bytes", async () => {
  const attempts = new Map();
  const progress = [];
  let completed = 0;
  let aborted = 0;
  const url = await transferParts(
    20, 8, 3, new AbortController().signal,
    async (index, report) => {
      attempts.set(index, (attempts.get(index) ?? 0) + 1);
      if (index === 1 && attempts.get(index) === 1) throw new Error("temporary failure");
      report(index === 2 ? 4 : 8);
    },
    async () => { completed++; return "https://cdn.example/video.mp4"; },
    async () => { aborted++; },
    (value) => progress.push(value),
  );
  assert.equal(url, "https://cdn.example/video.mp4");
  assert.equal(attempts.get(1), 2);
  assert.equal(completed, 1);
  assert.equal(aborted, 0);
  assert.equal(progress.at(-1), 100);
});

test("cancel stops active parts and aborts the multipart session", async () => {
  const controller = new AbortController();
  let aborted = 0;
  let completed = 0;
  const run = transferParts(
    16, 8, 2, controller.signal,
    async (_index, _report, signal) => new Promise((_resolve, reject) => {
      signal.addEventListener("abort", () => reject(new DOMException("Canceled", "AbortError")), { once: true });
    }),
    async () => { completed++; return "url"; },
    async () => { aborted++; },
    () => undefined,
    { preserveOnFailure: true },
  );
  controller.abort();
  await assert.rejects(run, { name: "AbortError" });
  assert.equal(aborted, 1);
  assert.equal(completed, 0);
});

test("resumes confirmed parts and limits concurrency to the configured worker count", async () => {
  const uploaded = [], progress = [];
  let active = 0, maximum = 0, completed = 0;
  const result = await transferParts(
    36, 8, 5, new AbortController().signal,
    async (index, report) => {
      uploaded.push(index);
      maximum = Math.max(maximum, ++active);
      await new Promise(resolve => setTimeout(resolve, 5));
      report(index === 4 ? 4 : 8);
      active--;
    },
    async () => { completed++; return "ready"; },
    async () => assert.fail("successful resume must not abort"),
    value => progress.push(value),
    { uploadedParts: new Set([0, 2]), parallelism: 2, preserveOnFailure: true },
  );
  assert.equal(result, "ready");
  assert.deepEqual(uploaded, [1, 3, 4]);
  assert.equal(maximum, 2);
  assert.equal(completed, 1);
  assert.equal(progress[0], Math.round(16 / 36 * 100));
  assert.equal(progress.at(-1), 100);
  assert.ok(progress.slice(0, -1).every(value => value < 100));
});

test("exhausted network retries retain completed parts without completing or aborting", async () => {
  const attempts = new Map();
  let aborted = 0, completed = 0;
  await assert.rejects(transferParts(
    16, 8, 2, new AbortController().signal,
    async index => {
      attempts.set(index, (attempts.get(index) ?? 0) + 1);
      if (index === 1) throw new Error("connection interrupted");
    },
    async () => { completed++; return "bad"; },
    async () => { aborted++; },
    () => undefined,
    { parallelism: 1, preserveOnFailure: true },
  ), /connection interrupted/);
  assert.equal(attempts.get(0), 1);
  assert.equal(attempts.get(1), 3);
  assert.equal(completed, 0);
  assert.equal(aborted, 0);
});

test("server parallelism is capped even when a malformed value requests excessive workers", async () => {
  let active = 0, maximum = 0;
  await transferParts(
    128, 8, 16, new AbortController().signal,
    async () => { maximum = Math.max(maximum, ++active); await new Promise(resolve => setTimeout(resolve, 5)); active--; },
    async () => "ready", async () => {}, () => {}, { parallelism: 1000 },
  );
  assert.equal(maximum, 8);
});

test("invalid part dimensions fail before any storage operation", async () => {
  let operations = 0;
  await assert.rejects(transferParts(
    16, 8, 3, new AbortController().signal,
    async () => { operations++; }, async () => { operations++; return "bad"; },
    async () => { operations++; }, () => {},
  ), /dimensions/);
  assert.equal(operations, 0);
});
