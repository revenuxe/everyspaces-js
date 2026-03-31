import { cache } from "react";
import { hasSanityConfig } from "@/sanity/env";
import { sanityFetch } from "@/sanity/lib/client";
import {
  ALL_PUBLISHED_POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  POST_SLUGS_QUERY,
  RELATED_POSTS_QUERY,
} from "@/sanity/lib/queries";
import type { SanityPost } from "@/sanity/lib/types";

export const getPublishedPosts = cache(async (): Promise<SanityPost[]> => {
  if (!hasSanityConfig()) return [];
  try {
    const data = await sanityFetch<SanityPost[]>(ALL_PUBLISHED_POSTS_QUERY);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
});

export const getPostBySlug = cache(async (slug: string): Promise<SanityPost | null> => {
  if (!hasSanityConfig()) return null;
  try {
    const data = await sanityFetch<SanityPost | null>(POST_BY_SLUG_QUERY, { slug });
    return data || null;
  } catch {
    return null;
  }
});

export const getPublishedPostSlugs = cache(async (): Promise<string[]> => {
  if (!hasSanityConfig()) return [];
  try {
    const data = await sanityFetch<string[]>(POST_SLUGS_QUERY);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
});

export const getRelatedPosts = cache(
  async (slug: string, categoryId?: string): Promise<SanityPost[]> => {
    if (!hasSanityConfig()) return [];
    try {
      const data = await sanityFetch<SanityPost[]>(RELATED_POSTS_QUERY, {
        slug,
        categoryId: categoryId || null,
      });
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  },
);
