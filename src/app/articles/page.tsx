import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/hero-interior.jpg";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { StructuredData, createBreadcrumbSchema } from "@/components/StructuredData";
import { getPublishedPosts } from "@/sanity/lib/posts";
import { urlForImage } from "@/sanity/lib/image";
import { absoluteUrl } from "@/lib/site-url";
import { comparison } from "@/content/interior-comparison";
import { shortlistArticle } from "@/content/bangalore-shortlist";
import "./journal.css";

export const revalidate = 900;
export const metadata: Metadata = {
  title: "Interior Design Blog & Bangalore Home Guides",
  description: "Thoughtful advice for your Bangalore home. Explore interior company comparisons, design ideas and practical renovation guides from EverySpaces.",
  alternates: { canonical: "/articles" },
  openGraph: { title: "The EverySpaces Journal", description: "Design ideas and practical advice for your Bangalore home.", url: "/articles", type: "website", images: [{ url: absoluteUrl(heroImage.src) }] },
};

export default async function ArticlesPage({ searchParams }: { searchParams?: Promise<{ q?: string; category?: string }> }) {
  const params = (await searchParams) || {};
  const q = (params.q || "").trim().toLowerCase();
  const category = (params.category || "").trim().toLowerCase();
  const posts = (await getPublishedPosts()).filter(post => post.slug !== comparison.slug && post.slug !== shortlistArticle.slug);
  const categories = Array.from(new Set(["Planning guides", ...posts.map(post => post.category?.title).filter((value): value is string => Boolean(value))]));
  const featured = (!q || `${comparison.title} ${comparison.description}`.toLowerCase().includes(q)) && (!category || category === "planning guides");
  const showShortlist = (!q || `${shortlistArticle.title} ${shortlistArticle.description}`.toLowerCase().includes(q)) && (!category || category === "planning guides");
  const filtered = posts.filter(post => (!q || `${post.title} ${post.excerpt || ""}`.toLowerCase().includes(q)) && (!category || post.category?.title?.toLowerCase() === category));
  return <main className="journal">
    <StructuredData data={[{ "@context": "https://schema.org", "@type": "Blog", name: "EverySpaces Journal", url: absoluteUrl("/articles") }, createBreadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Blog", url: absoluteUrl("/articles") }])]} />
    <section data-quote-form="disabled" className="journal-container py-14 md:py-20">
      <p className="journal-eyebrow">The EverySpaces Journal</p>
      <div className="mt-5 grid items-end gap-7 md:grid-cols-[1.4fr_1fr]"><h1 className="hero-display text-5xl leading-[1.08] md:text-7xl">A little clarity.<br /><span className="font-serif italic">A home that’s yours.</span></h1><p className="max-w-md text-base leading-8 text-muted-foreground">Thoughtful ideas, honest comparisons and practical advice for the decisions that make a home. Written for life in Bangalore.</p></div>
    </section>
    <section className="journal-container pb-16" aria-label="Browse the blog">
      <div className="mb-9 flex flex-col justify-between gap-5 border-y border-primary/15 py-5 lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-2"><Link href={q ? `/articles?q=${encodeURIComponent(q)}` : "/articles"} className={`rounded-full border px-4 py-3 text-sm ${!category ? "bg-primary text-white" : ""}`}>All stories</Link>{categories.map(label => <Link key={label} href={`/articles?category=${encodeURIComponent(label)}${q ? `&q=${encodeURIComponent(q)}` : ""}`} className={`rounded-full border px-4 py-3 text-sm ${category === label.toLowerCase() ? "bg-primary text-white" : ""}`}>{label}</Link>)}</div>
        <form action="/articles" method="GET" className="flex gap-2"><label htmlFor="journal-search" className="sr-only">Search blog articles</label><input id="journal-search" name="q" defaultValue={params.q || ""} placeholder="Find an idea..." className="premium-input" />{category && <input type="hidden" name="category" value={category} />}<button type="submit" className="journal-button">Search</button></form>
      </div>
      {showShortlist && <Link href={shortlistArticle.path} className="group mb-10 grid overflow-hidden rounded-[2rem] border border-primary/10 bg-white lg:grid-cols-[1.2fr_1fr]">
        <div className="relative min-h-64 lg:min-h-[380px]"><Image src={heroImage} alt="A contemporary living room with comfortable neutral seating" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div>
        <div className="flex flex-col justify-center p-7 md:p-11"><p className="journal-eyebrow">New guide ? Bangalore 2026</p><h2 className="my-5 font-serif text-3xl leading-tight md:text-4xl">Top 10 Interior Designers in Bangalore (2026)</h2><p className="text-base leading-7 text-muted-foreground">Ten companies to explore, their design approaches and the questions to ask before choosing a team for your home.</p><p className="mt-5 text-xs text-muted-foreground">Updated September 2026 ? Planning guides</p><span className="mt-7 inline-flex items-center gap-3 text-sm font-semibold">Explore the shortlist <ArrowUpRight size={18} /></span></div>
      </Link>}
      {featured && <Link href={comparison.path} className="group mb-10 grid overflow-hidden rounded-[2rem] border border-primary/10 bg-white lg:grid-cols-[1.2fr_1fr]">
        <div className="relative min-h-64 lg:min-h-[440px]"><Image src={heroImage} alt="Warm contemporary living room with neutral furniture" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div>
        <div className="flex flex-col justify-center p-7 md:p-11"><p className="journal-eyebrow">Featured guide · Bangalore</p><h2 className="my-5 font-serif text-3xl leading-tight md:text-4xl">HomeLane vs DesignCafe vs Truww vs Livspace</h2><p className="text-base leading-7 text-muted-foreground">Five interior design options. The questions that matter. A considered guide to choosing the right team for your home.</p><p className="mt-5 text-xs text-muted-foreground">Updated September 2026 · 18 min read</p><span className="mt-7 inline-flex items-center gap-3 text-sm font-semibold">Read the comparison <ArrowUpRight size={18} /></span></div>
      </Link>}
      {!!filtered.length && <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map(post => {
        const image = post.featuredImage ? urlForImage(post.featuredImage).width(800).url() : null;
        return <Link key={post._id} href={`/articles/${post.slug}`} className="overflow-hidden rounded-3xl border border-primary/10 bg-white"><div className="aspect-[4/3] bg-primary/5">{image ? <img src={image} alt={post.featuredImage?.alt || post.title} width={800} height={600} loading="lazy" className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center"><BookOpen className="text-primary/30" size={48} /></div>}</div><div className="p-7"><p className="journal-eyebrow">{post.category?.title || "Design notes"}</p><h2 className="my-4 font-serif text-2xl">{post.title}</h2><p className="line-clamp-3 text-sm leading-7 text-muted-foreground">{post.excerpt}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Read story <ArrowUpRight size={16} /></span></div></Link>;
      })}</div>}
      {!showShortlist && !featured && !filtered.length && <div className="journal-card py-14 text-center"><h2 className="font-serif text-3xl">No stories found</h2><p className="my-5 text-muted-foreground">Try another search or browse all our stories.</p><Link href="/articles" className="journal-button">View all stories</Link></div>}
    </section>
  </main>;
}
