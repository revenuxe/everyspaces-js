import type { Metadata } from "next";
import { createServerSupabase } from "@/integrations/supabase/server";
import ArticleDetailClient from "./ArticleDetailClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = createServerSupabase();
  const { data: article } = await (supabase.from("articles") as any)
    .select("title, meta_title, meta_description, excerpt, keywords, featured_image_url, published_at, created_at, updated_at, author")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (!article) {
    return { title: "Article | EverySpaces", robots: { index: false, follow: true } };
  }

  const title = `${article.meta_title || article.title} | EverySpaces Interior Design`;
  const description =
    article.meta_description || article.excerpt || `Read about ${article.title} on EverySpaces blog`;
  const kw = (article.keywords as string[] | null)?.filter(Boolean);

  return {
    title,
    description,
    keywords: kw?.length ? kw : undefined,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      type: "article",
      siteName: "EverySpaces",
      locale: "en_IN",
      title: article.meta_title || article.title,
      description,
      url: `/articles/${slug}`,
      publishedTime: article.published_at || article.created_at,
      modifiedTime: article.updated_at,
      images: article.featured_image_url ? [{ url: article.featured_image_url }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.meta_title || article.title,
      description,
      images: article.featured_image_url ? [article.featured_image_url] : undefined,
    },
    robots: { index: true, follow: true },
    authors: article.author ? [{ name: article.author }] : [{ name: "EverySpaces Team" }],
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticleDetailClient slug={slug} />;
}
