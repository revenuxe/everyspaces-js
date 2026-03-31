# Sanity Blog Publishing Workflow

## 1) Access Studio
- Open `/studio`.
- Authenticate using `SANITY_STUDIO_BASIC_USER` and `SANITY_STUDIO_BASIC_PASS`.

## 2) Create content entities
- Create `Author` documents first.
- Create `Category` documents for core Hyderabad clusters (for example: modular kitchens, cost guides, locality interiors).

## 3) Create a Post
- Fill title and slug.
- Add excerpt (80-240 chars).
- Upload featured image and set alt text.
- Add body content (Portable Text) or legacy HTML body for migrated posts.
- Set publish toggle and published date.

## 4) Complete SEO object (mandatory)
- `metaTitle` (20-60 chars)
- `metaDescription` (80-160 chars)
- `focusKeyword` (single primary intent)
- `secondaryKeywords` (up to 8 supporting terms)
- `canonicalUrl` (absolute HTTPS URL)
- `ogImage` with alt text
- `noindex` only for low-value or duplicate pages
- Optional FAQ blocks for transactional pages

## 5) Internal linking checklist
- Add at least 2 links to relevant services.
- Add at least 1 link to a Hyderabad locality page.
- Add at least 2 links to related blog posts (same cluster).
- Keep anchors descriptive (avoid generic "click here").

## 6) Pre-publish quality gates
- H1 includes primary keyword.
- Intro includes intent + Hyderabad context.
- At least 2 H2 sections and 1 comparison/decision section.
- CTA block included with `/contact` or `/services`.
- Schema and metadata render correctly on preview URL.

## 7) Migration command
- Dry run:
  - `npm run migrate:blog:sanity -- --dry-run`
- Write to Sanity:
  - `npm run migrate:blog:sanity`
