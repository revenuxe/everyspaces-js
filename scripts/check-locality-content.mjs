import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

function readModule(path, requireModule = () => { throw new Error("Unexpected import"); }) {
  const source = readFileSync(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
  const exports = {};
  vm.runInNewContext(outputText, { exports, require: requireModule }, { filename: path });
  return exports;
}

const slugModule = readModule("../src/seo/bangalore-locality-slugs.ts");
const { LOCALITY_CONTENT, getLocalityContent, getLocalityFAQs } = readModule("../src/content/locality-content.ts", (id) => {
  assert.equal(id, "@/seo/bangalore-locality-slugs");
  return slugModule;
});
const slugs = Array.from(slugModule.BANGALORE_LOCALITY_SLUGS);
assert.deepEqual(Object.keys(LOCALITY_CONTENT).sort(), [...slugs].sort(), "Every valid area route needs curated content");
for (const field of ["name", "metaDescription", "heroDescription", "heading", "introduction"]) {
  assert.equal(new Set(slugs.map((slug) => LOCALITY_CONTENT[slug][field])).size, slugs.length, `Area ${field} must be distinct`);
}
const bespokeQuestions = new Set();
for (const slug of slugs) {
  const content = getLocalityContent(slug);
  assert.ok(content.metaDescription.length <= 170, `${slug}: metadata too long`);
  assert.ok(content.introduction.split(/\s+/).length >= 45, `${slug}: missing planning context`);
  assert.equal(content.designTips.length, 3);
  assert.equal(new Set(content.designTips.map((tip) => tip.title)).size, 3);
  for (const tip of content.designTips) assert.ok(tip.description.length >= 80, `${slug}: incomplete design tip`);
  for (const faq of content.faqs) {
    assert.ok(!bespokeQuestions.has(faq.question), `Repeated bespoke question: ${faq.question}`);
    bespokeQuestions.add(faq.question);
  }
  const faqs = getLocalityFAQs(content);
  assert.equal(faqs.length, 5);
  assert.equal(new Set(faqs.map((faq) => faq.question)).size, faqs.length);
  assert.ok(content.nearbySlugs.length >= 3);
  assert.equal(new Set(content.nearbySlugs).size, content.nearbySlugs.length);
  for (const nearby of content.nearbySlugs) {
    assert.ok(slugs.includes(nearby), `${slug}: invalid related area ${nearby}`);
    assert.notEqual(nearby, slug);
  }
}
for (const invalid of ["unknown-area", "toString", "constructor", "__proto__"]) assert.equal(getLocalityContent(invalid), undefined);
console.log(`Validated ${slugs.length} area profiles, ${bespokeQuestions.size} bespoke FAQs, metadata, design tips, and related links.`);

if (process.argv.includes("--rendered")) {
  const decode = (text) => text.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'").replaceAll("&#39;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  for (const slug of slugs) {
    const html = readFileSync(new URL(`../.next/server/app/bangalore/${slug}.html`, import.meta.url), "utf8");
    const content = getLocalityContent(slug);
    const text = decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<[^>]*>/g, ""));
    assert.ok(text.includes(content.introduction), `${slug}: planning copy missing from server HTML`);
    assert.ok(text.includes(content.heading), `${slug}: local heading missing`);
    assert.ok(text.includes(content.heroDescription), `${slug}: hero copy missing`);
    const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? "");
    assert.equal(title, `Interior Designers in ${content.name}, Bangalore | EverySpaces`);
    const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
    assert.equal(description, content.metaDescription);
    assert.ok(html.includes(`rel="canonical" href="https://www.everyspaces.com/bangalore/${slug}"`), `${slug}: wrong canonical`);
    const schemas = Array.from(html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs), (match) => JSON.parse(match[1]));
    const faq = schemas.find((item) => item["@type"] === "FAQPage");
    assert.ok(faq, `${slug}: FAQ schema missing`);
    assert.equal(faq.mainEntity.length, 5);
    for (const [index, entry] of getLocalityFAQs(content).entries()) {
      assert.equal(faq.mainEntity[index].name, entry.question);
      assert.equal(faq.mainEntity[index].acceptedAnswer.text, entry.answer);
      assert.ok(text.includes(entry.question), `${slug}: schema question missing from page`);
    }
  }
  console.log(`Verified all ${slugs.length} generated HTML pages: local copy, titles, descriptions, canonicals, and matching FAQ schema.`);
}
