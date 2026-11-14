import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = ".next/server/app";
assert.ok(existsSync(root), "Run npm run build before checking generated SEO HTML");
const files = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith(".html")) files.push(path);
  }
}
walk(root);
const decode = (text) => text.replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
let checked = 0;
for (const file of files) {
  const route = relative(root, file).split(sep).join("/").replace(/\.html$/, "");
  const html = readFileSync(file, "utf8");
  if (route === "_global-error") continue; // Framework's generic 500 fallback.
  if (/^(admin(?:\/|$)|studio(?:\/|$)|thank-you$|_not-found$)/.test(route)) {
    assert.match(html, /name="robots" content="[^"]*noindex/, `${route}: internal page must be noindex`);
    continue;
  }
  if (route === "about") continue; // Redirect-only legacy route.
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: exactly one H1`);
  assert.match(html, /<title>[^<]+<\/title>/, `${route}: title`);
  assert.match(html, /name="description" content="[^"]+"/, `${route}: description`);
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert.ok(canonical && new URL(canonical).origin === "https://www.everyspaces.com", `${route}: canonical origin`);
  assert.match(html, /property="og:image" content="[^"]+"/, `${route}: social image`);
  assert.match(html, /property="og:title" content="[^"]+"/, `${route}: social title`);
  const visibleHtml = decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, ""));
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  const faqs = schemas.filter((schema) => schema["@type"] === "FAQPage");
  assert.ok(faqs.length <= 1, `${route}: only one FAQPage schema`);
  for (const schema of faqs) {
    for (const faq of schema.mainEntity) {
      assert.ok(visibleHtml.includes(faq.name), `${route}: FAQ question must exist outside JSON-LD: ${faq.name}`);
      assert.ok(visibleHtml.includes(faq.acceptedAnswer.text), `${route}: FAQ answer must exist in server HTML`);
    }
  }
  const serialized = JSON.stringify(schemas);
  assert.ok(!/https?:\/\/everyspaces\.com(?:\/|")/.test(serialized), `${route}: schema must use canonical host`);
  checked++;
}
const robots = readFileSync(join(root, "robots.txt.body"), "utf8");
assert.match(robots, /Sitemap: https:\/\/www\.everyspaces\.com\/sitemap.xml/);
assert.ok(!/Disallow: \/thank-you/.test(robots), "noindex pages must be crawlable");
const sitemap = readFileSync(join(root, "sitemap.xml.body"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1]));
assert.ok(urls.length > 40, "sitemap includes core, service, and locality routes");
assert.equal(new Set(urls).size, urls.length, "sitemap URLs must be unique");
for (const url of urls) {
  const path = new URL(url).pathname;
  assert.equal(new URL(url).origin, "https://www.everyspaces.com", "sitemap canonical origin");
  assert.ok(!/^\/(?:admin|studio|thank-you|api)(?:\/|$)/.test(path), "sitemap excludes internal pages");
  if (path !== "/articles" && !path.startsWith("/articles/")) {
    assert.ok(existsSync(join(root, path === "/" ? "index.html" : `${path.slice(1)}.html`)), `sitemap route exists: ${path}`);
  }
}
console.log(`SEO checks passed for ${checked} generated pages, internal noindex pages, and robots.txt.`);
