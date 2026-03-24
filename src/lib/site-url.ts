/**
 * Canonical site origin for absolute URLs (sitemap, OG fallbacks, etc.).
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://everyspaces.com).
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL;
  if (raw) {
    const trimmed = raw.replace(/\/$/, "");
    if (trimmed.startsWith("http")) return trimmed;
    return `https://${trimmed}`;
  }
  return "https://everyspaces.com";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
