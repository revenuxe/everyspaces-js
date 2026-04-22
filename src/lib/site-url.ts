/**
 * Canonical site origin for absolute URLs (sitemap, OG fallbacks, etc.).
 * Use a single host consistently to avoid canonical->redirect chains.
 */
export function getSiteUrl(): string {
  return "https://www.everyspaces.com";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
