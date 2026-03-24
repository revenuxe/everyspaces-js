import type { MetadataRoute } from "next";
import { createServerSupabase } from "@/integrations/supabase/server";
import { absoluteUrl } from "@/lib/site-url";
import { VALID_LOCALITY_SLUGS } from "@/seo/locality-metadata";
import { CORE_SITEMAP_ENTRIES, SERVICE_SITEMAP_ENTRIES } from "@/seo/static-sitemap-paths";

/** Regenerate sitemap periodically so new articles appear without redeploying. */
export const revalidate = 3600;

function toSitemapRow(
  path: string,
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>,
  priority: number,
  lastModified?: Date,
): MetadataRoute.Sitemap[number] {
  const row: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl(path),
    changeFrequency,
    priority,
  };
  if (lastModified && !Number.isNaN(lastModified.getTime())) {
    row.lastModified = lastModified;
  }
  return row;
}

async function fetchPublishedArticleUrls(): Promise<MetadataRoute.Sitemap> {
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase
      .from("articles")
      .select("slug, updated_at, published_at")
      .eq("status", "published");

    if (error || !data?.length) return [];

    return data.map((row) => {
      const raw = row.updated_at || row.published_at;
      const lastModified = raw ? new Date(raw) : undefined;
      return toSitemapRow(
        `/articles/${row.slug}`,
        "weekly",
        0.75,
        lastModified,
      );
    });
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRows: MetadataRoute.Sitemap = [
    ...CORE_SITEMAP_ENTRIES.map((e) => toSitemapRow(e.path, e.changeFrequency, e.priority)),
    ...SERVICE_SITEMAP_ENTRIES.map((e) => toSitemapRow(e.path, e.changeFrequency, e.priority)),
    ...VALID_LOCALITY_SLUGS.map((locality) =>
      toSitemapRow(`/bangalore/${locality}`, "monthly", 0.85),
    ),
  ];

  const articleRows = await fetchPublishedArticleUrls();

  return [...staticRows, ...articleRows];
}
