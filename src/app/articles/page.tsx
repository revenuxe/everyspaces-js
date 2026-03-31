import type { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { StructuredData, createBreadcrumbSchema } from "@/components/StructuredData";
import { getPublishedPosts } from "@/sanity/lib/posts";
import { urlForImage } from "@/sanity/lib/image";
import { HYDERABAD_KEYWORD_CLUSTERS } from "@/seo/blog-keyword-clusters";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "Interior Design Tips & Ideas Blog | Home Decor Trends | EverySpaces Hyderabad",
  description:
    "Actionable Hyderabad interior design guides, renovation planning tips, modular kitchen inspiration, and premium home transformation ideas.",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "Hyderabad Interior Design Blog | EverySpaces",
    description:
      "Expert interior design insights and high-intent home decor guides for Hyderabad homeowners.",
    url: "/articles",
    type: "website",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "EverySpaces Interior Design Blog",
  description:
    "Expert interior design tips, renovation guides, and home decor ideas for Hyderabad homeowners.",
  url: "https://everyspaces.com/articles",
};

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; category?: string }>;
}) {
  const params = (await searchParams) || {};
  const q = (params.q || "").trim().toLowerCase();
  const categoryFilter = (params.category || "").trim().toLowerCase();

  const posts = await getPublishedPosts();
  const categories = Array.from(
    new Set(posts.map((post) => post.category?.title).filter(Boolean) as string[]),
  );

  const filtered = posts.filter((post) => {
    const title = post.title?.toLowerCase() || "";
    const excerpt = post.excerpt?.toLowerCase() || "";
    const category = post.category?.title?.toLowerCase() || "";
    const qMatch = !q || title.includes(q) || excerpt.includes(q);
    const catMatch = !categoryFilter || category === categoryFilter;
    return qMatch && catMatch;
  });

  return (
    <>
      <StructuredData
        data={[
          blogSchema,
          createBreadcrumbSchema([
            { name: "Home", url: "https://everyspaces.com" },
            { name: "Articles", url: "https://everyspaces.com/articles" },
          ]),
        ]}
      />
      <main className="pt-4 pb-16">
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-4 inline-flex items-center gap-1 rounded-full border px-3 py-1 text-sm text-secondary">
                <BookOpen className="w-3 h-3" />
                Interior Design Blog
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Hyderabad Design <span className="text-secondary">Insights</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                High-intent guides and expert advice for premium home interiors in Hyderabad.
              </p>
              <form className="relative max-w-xl mx-auto" method="GET" action="/articles">
                <input
                  name="q"
                  defaultValue={params.q || ""}
                  type="text"
                  placeholder="Search articles..."
                  className="w-full border pr-28 py-6 text-lg rounded-full border-border/50 bg-card shadow-soft px-4"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        {categories.length > 0 && (
          <section className="py-8 border-b border-border/50">
            <div className="container">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/articles"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    !categoryFilter
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  All Articles
                </Link>
                {categories.map((category) => {
                  const active = category.toLowerCase() === categoryFilter;
                  return (
                    <Link
                      key={category}
                      href={`/articles?category=${encodeURIComponent(category)}`}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        active
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {category}
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="py-8">
          <div className="container">
            <div className="rounded-2xl border bg-card p-6">
              <h2 className="text-2xl font-semibold text-primary mb-2">High-Intent Hyderabad Topics</h2>
              <p className="text-muted-foreground mb-4">
                Explore transaction-ready topics mapped to services and locality intent pages.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {HYDERABAD_KEYWORD_CLUSTERS.map((cluster) => (
                  <Link key={cluster.slug} href={cluster.targetUrl} className="rounded-xl border p-4 hover:border-secondary transition-colors">
                    <p className="text-xs uppercase tracking-wide text-secondary mb-1">{cluster.intent}</p>
                    <h3 className="font-semibold mb-2">{cluster.title}</h3>
                    <p className="text-sm text-muted-foreground">{cluster.targetKeyword}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((post, index) => {
                  const imageUrl = post.featuredImage ? urlForImage(post.featuredImage).width(1200).url() : null;
                  const publishedDate = post.publishedAt || post._createdAt;
                  return (
                    <Link
                      key={post._id}
                      href={`/articles/${post.slug}`}
                      className={`group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                        index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                      }`}
                    >
                      <div className={`relative overflow-hidden ${index === 0 ? "h-64 md:h-80" : "h-48"}`}>
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={post.featuredImage?.alt || post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <BookOpen className="w-16 h-16 text-primary/30" />
                          </div>
                        )}
                        {post.category?.title && (
                          <span className="absolute top-4 left-4 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                            {post.category.title}
                          </span>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          {publishedDate && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {format(new Date(publishedDate), "MMM d, yyyy")}
                            </span>
                          )}
                          {post.readingTime ? (
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readingTime} min read
                            </span>
                          ) : null}
                        </div>
                        <h2
                          className={`font-bold text-primary group-hover:text-secondary transition-colors mb-3 ${
                            index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                          }`}
                        >
                          {post.title}
                        </h2>
                        {post.excerpt ? <p className="text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p> : null}
                        <span className="inline-flex items-center gap-2 text-secondary font-medium group-hover:gap-3 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or publish more articles in Sanity Studio.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
