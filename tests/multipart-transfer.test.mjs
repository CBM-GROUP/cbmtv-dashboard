import assert from "node:assert/strict";
import test from "node:test";

import { transferParts } from "../src/components/upload/multipart-transfer.ts";

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
  );
  controller.abort();
  await assert.rejects(run, { name: "AbortError" });
  assert.equal(aborted, 1);
  assert.equal(completed, 0);
});
