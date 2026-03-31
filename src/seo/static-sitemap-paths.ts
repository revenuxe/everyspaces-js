import type { MetadataRoute } from "next";

type Freq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type Entry = {
  path: string;
  changeFrequency: Freq;
  priority: number;
};

/** Marketing / hub pages (excludes admin, thank-you — see robots.txt). */
export const CORE_SITEMAP_ENTRIES: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/hyderabad", changeFrequency: "weekly", priority: 0.95 },
  { path: "/services", changeFrequency: "weekly", priority: 0.95 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.85 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/price-calculator", changeFrequency: "monthly", priority: 0.85 },
  { path: "/articles", changeFrequency: "daily", priority: 0.8 },
  { path: "/orza-ai", changeFrequency: "weekly", priority: 0.9 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/about-us", changeFrequency: "yearly", priority: 0.5 },
  { path: "/llms.txt", changeFrequency: "monthly", priority: 0.35 },
  { path: "/llms-full.txt", changeFrequency: "monthly", priority: 0.3 },
];

/**
 * Service detail slugs under /services/:slug — keep in sync with `src/app/services/<slug>/page.tsx`.
 * Priorities/changefreq tuned for interior-design landing pages.
 */
export const SERVICE_SITEMAP_ENTRIES: Entry[] = [
  { path: "/services/modular-kitchen", changeFrequency: "weekly", priority: 0.9 },
  { path: "/services/wardrobe-design", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/bedroom-design", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/living-room", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/tv-unit", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/pooja-room", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/kids-room", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/study-room", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/guest-room", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/dining-room", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/bathroom-design", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/home-office", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/foyer-entrance", changeFrequency: "monthly", priority: 0.75 },
  { path: "/services/balcony-design", changeFrequency: "monthly", priority: 0.75 },
  { path: "/services/false-ceiling", changeFrequency: "monthly", priority: 0.75 },
  { path: "/services/crockery-unit", changeFrequency: "monthly", priority: 0.75 },
  { path: "/services/2bhk-interiors", changeFrequency: "weekly", priority: 0.9 },
  { path: "/services/3bhk-interiors", changeFrequency: "weekly", priority: 0.9 },
  { path: "/services/villa-interiors", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/full-home-design", changeFrequency: "weekly", priority: 0.85 },
];

