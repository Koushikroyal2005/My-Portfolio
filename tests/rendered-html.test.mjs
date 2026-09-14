import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders Koushik's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Koushik Kotte/);
  assert.match(html, /Multi-Document RAG/);
  assert.match(html, /Trading Agent/);
  assert.match(html, /OEguard/);
  assert.match(html, /Personal Calorie Tracker/);
  assert.match(html, /CodeOrbit/);
  assert.match(html, /SynapseMesh/);
  assert.match(html, /Switch to Sasuke dark mode/);
  assert.match(html, /Amazon/);
  assert.match(html, /Machine Learning Summer School/);
  assert.match(html, /Cybersecurity Professional Certificate/);
  assert.match(html, /Machine Learning Specialization/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("ships the required portfolio assets and metadata", async () => {
  const [page, layout, css, portrait] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../public/assets/koushik-pose-v2.png", import.meta.url)),
    access(new URL("../public/assets/naruto-hover.png", import.meta.url)),
    access(new URL("../public/assets/sasuke-hover.png", import.meta.url)),
    access(new URL("../public/Koushik-Kotte-Resume.pdf", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
  assert.ok(portrait.length > 100_000);
  assert.match(page, /localStorage\.setItem\("portfolio-theme"/);
  assert.match(css, /naruto-hover\.png/);
  assert.match(css, /sasuke-hover\.png/);
  assert.match(layout, /AI Engineer & Full-Stack Developer/);
  assert.match(layout, /openGraph/);
});
