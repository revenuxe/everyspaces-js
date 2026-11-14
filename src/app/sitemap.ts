import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-url";
import {
  CORE_SITEMAP_ENTRIES,
  SERVICE_SITEMAP_ENTRIES,
} from "@/seo/static-sitemap-paths";
import { BANGALORE_LOCALITY_SLUGS } from "@/seo/bangalore-locality-slugs";
import { getSitemapPosts } from "@/sanity/lib/posts";

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
    const posts = await getSitemapPosts();
    return posts.filter((post) => {
      const ownUrl = absoluteUrl(`/articles/${post.slug}`);
      return !post.canonicalUrl || new URL(post.canonicalUrl, absoluteUrl("/")).href === ownUrl;
    }).map((post) => toSitemapRow(`/articles/${post.slug}`, "weekly", 0.78, new Date(post.lastModified)));
  } catch (error) {
    console.error("Unable to load article sitemap entries", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRows: MetadataRoute.Sitemap = [
    ...CORE_SITEMAP_ENTRIES.map((e) => toSitemapRow(e.path, e.changeFrequency, e.priority)),
    ...SERVICE_SITEMAP_ENTRIES.map((e) => toSitemapRow(e.path, e.changeFrequency, e.priority)),
    ...BANGALORE_LOCALITY_SLUGS.map((slug) => toSitemapRow(`/bangalore/${slug}`, "weekly", 0.72)),
  ];

  const articleRows = await fetchPublishedArticleUrls();

  return [...new Map([...staticRows, ...articleRows].map((row) => [row.url, row])).values()];
}

