import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { format } from "date-fns";
import { Calendar, Clock, ArrowLeft, ArrowRight, User, BookOpen } from "lucide-react";
import { StructuredData, createArticleSchema, createBreadcrumbSchema, createFAQSchema } from "@/components/StructuredData";
import { getPostBySlug, getPublishedPostSlugs, getRelatedPosts } from "@/sanity/lib/posts";
import { urlForImage } from "@/sanity/lib/image";
import { HYDERABAD_KEYWORD_CLUSTERS } from "@/seo/blog-keyword-clusters";

export const revalidate = 900;

export async function generateStaticParams() {
  const slugs = await getPublishedPostSlugs();
  return slugs.slice(0, 100).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Article | EverySpaces", robots: { index: false, follow: true } };
  }

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt || `Read ${post.title} on EverySpaces blog.`;
  const canonical = post.seo?.canonicalUrl || `/articles/${slug}`;
  const ogImage = post.seo?.ogImage || post.featuredImage;
  const ogImageUrl = ogImage ? urlForImage(ogImage).width(1200).url() : undefined;
  const keywords = [post.seo?.focusKeyword, ...(post.seo?.secondaryKeywords || []), ...(post.tags || [])].filter(Boolean);
  const normalizedKeywords = keywords.filter((value): value is string => Boolean(value));

  return {
    title: `${title} | EverySpaces Interior Design`,
    description,
    keywords: normalizedKeywords.length ? normalizedKeywords : undefined,
    alternates: { canonical },
    openGraph: {
      type: "article",
      siteName: "EverySpaces",
      locale: "en_IN",
      title,
      description,
      url: canonical,
      publishedTime: post.publishedAt || post._createdAt,
      modifiedTime: post._updatedAt,
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
    robots: { index: !post.seo?.noindex, follow: true },
    authors: post.author?.name ? [{ name: post.author.name }] : [{ name: "EverySpaces Team" }],
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(slug, post.category?._id);
  const featuredImageUrl = post.featuredImage ? urlForImage(post.featuredImage).width(1400).url() : null;
  const publishedDate = post.publishedAt || post._createdAt;
  const description = post.seo?.metaDescription || post.excerpt || "";
  const seoKeywords = [post.seo?.focusKeyword, ...(post.seo?.secondaryKeywords || []), ...(post.tags || [])].filter(
    (value): value is string => Boolean(value),
  );

  const articleSchema = createArticleSchema({
    title: post.title,
    description,
    url: `https://everyspaces.com/articles/${post.slug}`,
    image: featuredImageUrl || undefined,
    datePublished: post.publishedAt || post._createdAt,
    dateModified: post._updatedAt,
    author: post.author?.name || "EverySpaces Team",
    keywords: seoKeywords,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://everyspaces.com" },
    { name: "Articles", url: "https://everyspaces.com/articles" },
    { name: post.title, url: `https://everyspaces.com/articles/${post.slug}` },
  ]);

  const faqSchema = post.seo?.faqBlocks?.length
    ? createFAQSchema(post.seo.faqBlocks, `articles/${post.slug}`)
    : null;

  return (
    <>
      <StructuredData data={[articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]} />
      <main className="pt-20 md:pt-24 pb-16">
        <article className="container max-w-3xl px-4">
          <Link href="/articles" className="inline-flex items-center gap-2 text-secondary hover:underline mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </Link>
          {post.category?.title ? (
            <span className="mb-3 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              {post.category.title}
            </span>
          ) : null}
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            {publishedDate ? (
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {format(new Date(publishedDate), "MMM d, yyyy")}
              </span>
            ) : null}
            {post.readingTime ? (
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime} min read
              </span>
            ) : null}
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author?.name || "EverySpaces Team"}
            </span>
          </div>
          {featuredImageUrl ? (
            <img src={featuredImageUrl} alt={post.featuredImage?.alt || post.title} className="w-full rounded-2xl mb-8" />
          ) : null}
          {post.excerpt ? <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p> : null}
          {post.body?.length ? (
            <div className="article-content">
              <PortableText value={post.body as PortableTextBlock[]} />
            </div>
          ) : post.contentHtml ? (
            <div className="article-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          ) : (
            <p className="text-muted-foreground">Content is being updated for this article.</p>
          )}

          <section className="mt-10 p-6 rounded-2xl bg-muted/30 border">
            <h2 className="text-xl font-semibold mb-2">Need help with your Hyderabad home interior?</h2>
            <p className="text-muted-foreground mb-4">
              Get a free design consultation for modular kitchen, wardrobes, and full-home interiors.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-full font-semibold">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 border px-5 py-3 rounded-full font-semibold">
                Explore Services
              </Link>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Explore Related Hyderabad Intent Pages</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {HYDERABAD_KEYWORD_CLUSTERS.map((cluster) => (
                <Link key={cluster.slug} href={cluster.targetUrl} className="rounded-xl border p-4 hover:border-secondary transition-colors">
                  <p className="text-xs text-secondary uppercase tracking-wide">{cluster.intent}</p>
                  <p className="font-medium mt-1">{cluster.title}</p>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {relatedPosts.length ? (
          <section className="container max-w-5xl mt-16 px-4">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related._id} href={`/articles/${related.slug}`} className="group border rounded-xl overflow-hidden hover:shadow-md transition">
                  <div className="h-40 bg-muted">
                    {related.featuredImage ? (
                      <img
                        src={urlForImage(related.featuredImage).width(800).url()}
                        alt={related.featuredImage?.alt || related.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-muted-foreground/50" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-secondary transition-colors line-clamp-2">{related.title}</h3>
                    {related.excerpt ? <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{related.excerpt}</p> : null}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
