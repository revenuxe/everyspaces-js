# EverySpaces Blog implementation

## Routes and content

- Footer Resources now includes **Blog**, linking to `/articles`, the existing canonical journal route.
- `/articles` has a new editorial listing, a featured comparison, search, category filters and existing published Sanity posts.
- `/articles/homelane-vs-designcafe-vs-truww-vs-livspace` is a dedicated, approximately 4,100-word comparison page. Existing Sanity article routes remain available.
- The comparison includes disclosure, quick answers, a sourced table, methodology, company reviews, pricing and material explainers, timeline, scenarios, Bangalore guidance, printable checklist, verdict, FAQ and two lead forms.

## Files

Created:

- `src/app/articles/layout.tsx`
- `src/app/articles/journal.css`
- `src/app/articles/homelane-vs-designcafe-vs-truww-vs-livspace/page.tsx`
- `src/components/QuoteForm.tsx`
- `src/components/blog/JournalShell.tsx`
- `src/components/blog/ComparisonSections.tsx`
- `src/components/blog/PlanningGuide.tsx`
- `src/components/blog/PrintChecklist.tsx`
- `src/components/blog/BlogInteractions.tsx`
- `src/content/interior-comparison.ts`
- This report.

Modified:

- `src/app/articles/page.tsx`: listing redesign with preserved Sanity integration.
- `src/components/Footer.tsx`: Blog menu label.
- `src/components/HeroSection.tsx`: extract its existing form into shared QuoteForm.
- `src/components/SiteQuoteForm.tsx`: respect explicit opt-out from automatic hero form injection.
- `src/seo/static-sitemap-paths.ts`: add the comparison URL.

The pre-existing `next-env.d.ts` working-tree change was not authored for this task.

## Reuse and behaviour

Header (including mobile menu), Footer, BottomNav, consultation popup, homepage quote logic, premium input/button styles, design tokens, approved hero image, Next Image, StructuredData, breadcrumb utility and canonical URL helper are reused. Article sections are server components; print and interaction listeners are small client components.

The shared form retains required name, 10-digit mobile, email and project type fields, Supabase `leads` payload, error toast, loading state and `/thank-you` redirect. Project type remains free text, matching the homepage; there is no existing option list to duplicate. Hero and final forms use distinct `form_name` values and the canonical article path as `source_page`.

Consultation links use the existing `data-open-consultation` behaviour with `/contact` fallback. Comparison/navigation anchors scroll to sections. The checklist uses the browser print/save-PDF flow and prints only the checklist.

## SEO and sources

Listing and article have titles, descriptions, canonical URLs and Open Graph metadata. The article also has Twitter metadata, BlogPosting and BreadcrumbList JSON-LD, and a sitemap entry. `dateModified` records the editorial update date. No publication date is invented before actual publication; add `datePublished` when the page is first published. FAQ uses accessible native disclosure elements without FAQPage markup.

Competitor facts are centralised as `{ text, source, checkedAt }`, checked 2026-09-09:

- HomeLane: https://www.homelane.com/
- DesignCafe: https://www.designcafe.com/
- Truww: https://truww.com/
- Livspace: https://www.livspace.com/in
- EverySpaces: homepage and existing full-home, kitchen and Bangalore pages.

Sources describe public offerings, not independently audited outcomes. Suitability is explicitly editorial opinion. Unverified table cells say “Confirm during consultation”, including project-specific customisation limits and warranty terms. No invented prices, delivery guarantees, reviews, ratings or company rankings were added.

Internal links cover the journal, consultation, portfolio, calculator, full-home, 2BHK, 3BHK, kitchen, wardrobe, living room, bedroom, kids room, home office, Bangalore, Whitefield, HSR Layout, Sarjapur Road and Bellandur routes.

## Interaction hooks

`BlogInteractions` emits `everyspaces:blog-interaction` CustomEvents for consultation, section navigation/comparison, calculator, portfolio, phone links when present, and successful lead submissions. Details include `event`, `action`, `label` and `page_path`; no form field values are included. Second-opinion and other consultation placements are distinguished by label. Events are also forwarded to an existing `window.dataLayer` if configured.

No analytics provider was found in the project. These are integration hooks, not a claim that events are currently collected remotely. The existing lead records continue to provide form/source attribution. No new analytics provider or backend was installed.

## Validation

- Production build: passed; all 94 static pages generated, including the comparison.
- TypeScript: passed.
- Targeted ESLint for new code and changed article/homepage/footer code: passed.
- Repository-wide lint: 28 pre-existing errors and 2 warnings remain in legacy/admin/UI/popup/config code. One existing `any` remains in SiteQuoteForm; the opt-out guard does not introduce it.
- Chromium checked both listing and detail at 360, 390, 430, 768, 1024 and 1440 pixels: no document overflow, missing images or page errors; exactly one H1 per page.
- Browser checks: 18 unique article internal links returned HTTP 200; both JSON-LD objects parsed; every article hash link resolves; comparison scroll leaves a 150px header/navigation offset; existing consultation popup opens.
- Both article forms: empty inputs fail native validation; mocked Supabase responses confirm original payload fields, distinct source form names and thank-you redirects. No real leads were inserted.
- Listing search empty state and category-filtered featured article verified.

Forms still depend on the existing Supabase deployment and permissions. Official company pages and project terms should be rechecked when the article is updated. This work has not deployed or published the site.
