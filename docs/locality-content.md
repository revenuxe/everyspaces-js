# Bangalore area landing-page content

All 21 area routes use `src/content/locality-content.ts`. Each entry supplies its own meta description, hero description, planning introduction, three design priorities, two bespoke FAQs, and related-area links. Three shared planning FAQs cover quotations, scheduling, and consultation preparation. The server metadata, visible FAQs, and FAQ schema use this same content source.

## Research references

Reviewed 14 November 2026. These references establish local context; they do not substantiate EverySpaces project counts, clients, office locations, reviews, warranties, or delivery times.

- Whitefield: [CapitaLand's International Tech Park Bangalore property page](https://www.capitaland.com/en/find-a-property/global-property-listing/businesspark-industrial-logistics/international-techparkbangalore.html) identifies ITPB in Whitefield. The workspace and handover recommendations are editorial planning guidance, not a claim about all Whitefield households.
- Electronic City: [Electronics City Industrial Township Authority](https://elcita.in/) identifies the township on the Bengaluru-Hosur highway. The page asks for exact address and property conditions instead of assuming the whole residential area shares one authority or installation policy.
- Hebbal: [Embassy Manyata Business Park](https://www.embassyofficeparks.com/portfolio/embassy-manyata-business-park/) identifies the Hebbal-Outer Ring Road and North Bengaluru context. No business-park employer is represented as an EverySpaces client.
- Bellandur and the wider Marathahalli/Sarjapur Road corridor: [Embassy TechVillage](https://www.embassyofficeparks.com/portfolio/embassy-techvillage/) identifies its Outer Ring Road location and surrounding connections. No travel times, live metro status, or infrastructure opening dates are asserted.
- Basavanagudi: [Karnataka Tourism's Bengaluru destination guide](https://karnatakatourism.org/en/destinations/bengaluru/) identifies Bull Temple and Bugle Rock. Retained-furniture and pooja-space recommendations are optional design briefs, not demographic assumptions.
- General locality naming: [Karnataka's municipal ward listing](https://www.bbmpeaasthi.karnataka.gov.in/frmWardListbyZone.aspx) and [BBMP's constituency listing](https://site.bbmp.gov.in/Polling%20station%20Details.html). Administrative boundaries are not used as service guarantees or exact neighbourhood boundaries.

## Editorial rules

The editorial approach follows [Google's people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): descriptive headings, useful original planning advice, and no exaggerated claims. Structured data describes page content; it does not promise a particular search appearance or ranking.

- Preserve the shared homepage visual design, but distinguish area pages by useful room-planning guidance. Recommendations are conditional on the actual property and homeowner's needs.
- Do not manufacture completed local projects, apartment-builder relationships, review scores, rankings, local branches, fixed prices, or guaranteed completion times.
- Gallery images illustrate design options. Their captions must not imply a photographed project is in a specific locality without verified provenance.
- Metadata describes the visible page. Avoid repeated brand suffixes: the root metadata template appends EverySpaces.
- The locality is a service area, not a physical branch. Service and Place schema must not imply a separate storefront.
- Related areas are curated links to valid landing pages, not distance or journey-time claims.
- For stronger future case studies, add only verified project information: homeowner permission, location, measured scope, original photographs, and an approved account of the design decisions.

## Validation

Run `node scripts/check-locality-content.mjs`, `npm run typecheck`, and `npm run build` after content or routing changes. The content check covers route coverage, distinct copy, internal links, FAQ consistency, and unknown slugs.

After building, run `node scripts/check-locality-content.mjs --rendered` to check all 21 generated HTML pages for visible local text, resolved titles, unique descriptions, canonicals, and FAQ markup matching the page questions.
