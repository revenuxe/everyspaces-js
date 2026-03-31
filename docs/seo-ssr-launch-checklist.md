# SEO + SSR Launch Checklist

## SSR checks
- [ ] View page source for `/articles` and verify article cards are present in initial HTML.
- [ ] View page source for 3 article URLs and verify title, meta description, canonical, OG tags.
- [ ] Confirm no client-only data dependency for primary article content.

## Structured data checks
- [ ] Validate `Article` schema on article pages.
- [ ] Validate `BreadcrumbList` on list and detail pages.
- [ ] Validate `FAQPage` schema appears only when FAQ blocks are provided.

## Crawl/index checks
- [ ] Confirm `/sitemap.xml` includes `/articles/{slug}` entries from Sanity.
- [ ] Verify `robots.txt` allows article paths.
- [ ] Confirm canonical URLs are absolute and consistent with slug paths.

## Internal linking checks
- [ ] Each article links to `/contact` and `/services`.
- [ ] Each article includes keyword-cluster links to Hyderabad intent pages.
- [ ] Related articles render and link correctly.

## CMS checks
- [ ] `/studio` requires auth in production.
- [ ] SEO object validation is enforced before publish.
- [ ] Migration script dry-run parity output reviewed.

## Performance checks
- [ ] Compare LCP/INP/CLS on article pages before and after SSR rollout.
- [ ] Confirm image payload is optimized (no oversized hero assets).
