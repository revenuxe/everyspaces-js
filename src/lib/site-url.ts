/**
 * Canonical site origin for absolute URLs (sitemap, OG fallbacks, etc.).
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://everyspaces.com).
 */
export function getSiteUrl(): string {
  return "https://everyspaces.com";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
