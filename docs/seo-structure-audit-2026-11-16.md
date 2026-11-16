# SEO structure audit — 16 November 2026

## Assessment

The site has a useful technical foundation: server-rendered content, canonical URLs, a sitemap, crawlable internal navigation, route-specific metadata and structured data. Technical checks do not establish ranking strength or traffic potential. Search Console, analytics, live indexing and field performance data were not available for this audit.

The largest observed duplication problem was architectural: 20 service pages, six kitchen layout pages and their service hub rendered under both `/services` and `/bangalore/services`. They shared components and metadata. The aliases already declared the shorter URL as canonical, so the duplicated metadata was consistent with duplicated content. Renaming those copies would not create distinct search intent.

## Implemented

- Consolidated all 27 aliases with a permanent 308 redirect from `/bangalore/services/:path*` to `/services/:path*`; removed the duplicate page implementations.
- Updated header, service carousels and related-service links to use the canonical service tree directly.
- Distinguished the Bangalore hub's title, description and H1 from the homepage. Its purpose is area coverage and local planning; the homepage remains the broad business introduction.
- Removed starting-price claims from the 2 BHK and 3 BHK search titles. Their accuracy and scope should be confirmed before reintroducing them.
- Grouped related services by project context instead of sending every page to the same first four services.
- Strengthened the generated HTML audit to reject duplicate public-page titles/descriptions, multiple routes serving one canonical, non-self-canonical public pages, old service links and missing sharing descriptions. The check also verifies the permanent redirect configuration and sitemap exclusions.

## Organic search architecture

| Page family | Search intent | Content responsibility |
| --- | --- | --- |
| `/` | Interior designers in Bangalore; business discovery | Clear proposition, real work, team/process, routes to services and contact |
| `/services` | Compare available interior services | Service categories, scope and links to detail pages |
| `/services/{service}` | Hire for a specific room or home type | Relevant work, layout decisions, materials, scope, price factors, FAQs, consultation |
| `/services/modular-kitchen/{layout}` | Evaluate a specific kitchen layout | Suitability, dimensions to review, circulation, trade-offs and examples |
| `/bangalore` | Explore service coverage | Area navigation and local planning context |
| `/bangalore/{locality}` | Interior designers in a particular locality | Useful local planning information and verified local projects when available |
| `/portfolio` | Evaluate workmanship and design fit | Original project photography, location, brief, scope, materials and outcome |
| `/articles/{slug}` | Research costs, comparisons and planning | Original answers with sources, authorship and contextual links to relevant services |

Use one page per meaningful intent. Do not create service-by-locality combinations simply to multiply keyword pages. Distinct pages need distinct customer value.

## Remaining editorial priorities

1. **Verify claims throughout the site.** Service FAQs, Bangalore sections and structured data contain differing package prices, delivery periods, warranty promises and business statistics. Confirm these against current business records. Publish price scope and exclusions; keep schema aligned with visible, approved statements. Wardrobe copy has already been revised to avoid unsupported fixed promises.
2. **Add original project evidence.** Prioritise modular kitchen, 2 BHK, 3 BHK, full-home and wardrobe pages. For each real project collect permitted photos, the neighbourhood, home size, brief, material specification, constraints and outcome. Avoid fabricated case studies and reviews.
3. **Improve service content beyond repeated templates.** Add specific trade-offs, measured layout examples and actual scope. The wardrobe page now provides a model for useful planning content, but each service should answer its own questions.
4. **Create articles around real customer questions.** Start with scoped interior cost comparisons, material choices, kitchen layout trade-offs and handover checklists. Confirm demand using Search Console query data; keyword volume was not measured in this audit.
5. **Review locality pages using evidence.** Their metadata and planning copy are already distinct. Add relevant completed work where it exists; avoid implying a physical office or project history in every locality.
6. **Validate live performance and indexing after deployment.** Submit the canonical sitemap in Search Console, inspect representative canonical and redirected URLs, and monitor query impressions, clicks, enquiries and field Core Web Vitals. Compare equivalent periods and account for crawl/indexing delays.

## Validation and limits

Production build passed. The expanded SEO script passed for 59 generated public pages (previously 86, including 27 aliases), plus internal noindex checks and robots/sitemap checks. The public article listing is dynamic, and CMS articles absent from this build are not covered by the generated HTML uniqueness check. Structured-data checks cover parsing, canonical host and visible FAQ correspondence; they are not a full Google rich-result eligibility audit. No claim is made that the live website or Google's index has changed before deployment.

## Guidance used

- [Google: consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: descriptive title links](https://developers.google.com/search/docs/appearance/title-link)
- [Google: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

Metadata should accurately describe each distinct page. Useful original content, evidence and a coherent linking structure remain necessary; passing technical checks does not guarantee organic traffic.
