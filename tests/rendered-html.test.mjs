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
  assert.match(html, /600 → 7K/);
  assert.match(html, /30 → 5 MIN/);
  assert.match(html, /300-400/);
  assert.match(html, /10 services/);
  assert.match(html, /FastAPI/);
  assert.match(html, /LangGraph/);
  assert.match(html, /Supabase/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("ships the required portfolio assets and metadata", async () => {
  const [page, layout, css, portrait] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../public/assets/koushik-pose-v2.png", import.meta.url)),
    access(new URL("../public/assets/naruto-aligned-v3.png", import.meta.url)),
    access(new URL("../public/assets/sasuke-aligned-v3.png", import.meta.url)),
    access(new URL("../public/assets/konoha-panorama-v3.png", import.meta.url)),
    access(new URL("../public/assets/uchiha-chamber-v3.png", import.meta.url)),
    access(new URL("../public/assets/kurama-guardian-v3.png", import.meta.url)),
    access(new URL("../public/assets/susanoo-guardian-v3.png", import.meta.url)),
    access(new URL("../public/assets/kurama-guardian-v4.png", import.meta.url)),
    access(new URL("../public/assets/leaf-cursor-v4.png", import.meta.url)),
    access(new URL("../public/assets/frog-summon-v4.png", import.meta.url)),
    access(new URL("../public/assets/snake-summon-v4.png", import.meta.url)),
    access(new URL("../.claude/skills.md", import.meta.url)),
    access(new URL("../public/Koushik-Kotte-Resume.pdf", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
  assert.ok(portrait.length > 100_000);
  assert.match(page, /localStorage\.setItem\("portfolio-theme"/);
  assert.match(css, /konoha-panorama-v3\.png/);
  assert.match(css, /uchiha-chamber-v3\.png/);
  assert.match(page, /TrailReveal/);
  assert.match(page, /brush-trail/);
  assert.match(page, /destination-in/);
  assert.match(page, /const life=1150/);
  assert.match(page, /leaf-cursor-v4\.png/);
  assert.match(css, /\.brush-trail\{cursor:none;will-change:contents\}/);
  assert.match(css, /\.leaf-cursor>span\{display:none!important\}/);
  assert.match(layout, /AI Engineer & Full-Stack Developer/);
  assert.match(layout, /openGraph/);
});
