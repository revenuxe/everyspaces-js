const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function setup(env = {}, pathname = '/') {
  const window = { location: { pathname }, crypto: { randomUUID: () => 'test-id' } };
  const context = { window, exports: {}, process: { env } };
  const code = ts.transpileModule(fs.readFileSync('src/lib/google-ads.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  vm.runInNewContext(code, context);
  return { window, track: context.exports.trackAdsAction };
}

test('queues a successful lead conversion with the supplied label before the tag loads', () => {
  const { window, track } = setup();
  track('lead', 'Contact Page Form');
  assert.equal(window.dataLayer.length, 2);
  assert.equal(window.dataLayer[0][1], 'generate_lead');
  assert.equal(window.dataLayer[0][2].form_name, 'Contact Page Form');
  assert.equal(window.dataLayer[1][1], 'conversion');
  assert.equal(window.dataLayer[1][2].send_to, 'AW-18430311742/IVfzCN38u-4cEL76oNRE');
});

test('blank lead overrides retain the default and contact clicks do not count as leads', () => {
  const { window, track } = setup({ NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL: '  ' });
  track('lead');
  for (const action of ['phone', 'whatsapp', 'email']) track(action);
  const conversions = window.dataLayer.filter(args => args[1] === 'conversion');
  assert.equal(conversions.length, 1);
  assert.equal(conversions[0][2].send_to, 'AW-18430311742/IVfzCN38u-4cEL76oNRE');
});

test('routes each conversion to its own configured action', () => {
  const { window, track } = setup(Object.fromEntries(
    ['lead', 'phone', 'whatsapp', 'email'].map(a => [`NEXT_PUBLIC_GOOGLE_ADS_${a.toUpperCase()}_LABEL`, a])
  ));
  for (const action of ['lead', 'phone', 'whatsapp', 'email']) track(action);
  const conversions = window.dataLayer.filter(args => args[1] === 'conversion');
  assert.equal(conversions.length, 4);
  assert.deepEqual(Array.from(conversions, args => args[2].send_to),
    ['lead', 'phone', 'whatsapp', 'email'].map(a => `AW-18430311742/${a}`));
});

test('excludes administrative routes and survives blocked tracking', () => {
  const admin = setup({}, '/admin/leads');
  admin.track('lead');
  assert.equal(admin.window.dataLayer, undefined);
  const blocked = setup();
  blocked.window.gtag = () => { throw Error('blocked'); };
  assert.doesNotThrow(() => blocked.track('lead'));
});

test('every lead insert has a tracking call after the database error check', () => {
  const files = fs.readdirSync('src', { recursive: true }).filter(p => p.endsWith('.tsx'));
  let count = 0;
  for (const file of files) {
    const source = fs.readFileSync(`src/${file}`, 'utf8');
    if (!source.includes('supabase.from("leads")') || !source.includes('.insert(')) continue;
    assert.match(source, /if \((?:error|leadError)\) throw (?:error|leadError);\s*trackAdsAction\("lead",/, file);
    count++;
  }
  assert.ok(count >= 25);
});
