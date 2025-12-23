import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Share2,
  User,
  BookOpen,
  Phone,
  List,
  ChevronRight,
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");

  const { data: article, isLoading } = useQuery({
    queryKey: ["article", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

      if (error) throw error;
      return data;
    },
  });

  const { data: relatedArticles } = useQuery({
    queryKey: ["related-articles", article?.category, article?.id],
    queryFn: async () => {
      if (!article) return [];
      const { data, error } = await supabase
        .from("articles")
        .select("id, title, slug, excerpt, featured_image_url, reading_time")
        .eq("status", "published")
        .neq("id", article.id)
        .limit(3);

      if (error) throw error;
      return data;
    },
    enabled: !!article,
  });

  // Parse TOC from content
  useEffect(() => {
    if (article?.content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(article.content, "text/html");
      const headings = doc.querySelectorAll("h2, h3");
      const items: TOCItem[] = [];

      headings.forEach((heading, index) => {
        const id = `section-${index}`;
        const text = heading.textContent || "";
        const level = heading.tagName === "H2" ? 2 : 3;
        items.push({ id, text, level });
      });

      setToc(items);
    }
  }, [article?.content]);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  // Add IDs to headings in content
  const processContent = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headings = doc.querySelectorAll("h2, h3");

    headings.forEach((heading, index) => {
      heading.id = `section-${index}`;
    });

    return doc.body.innerHTML;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article?.title,
          text: article?.excerpt || "",
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="pt-20 md:pt-24 pb-16">
          <div className="container max-w-3xl px-4 animate-pulse">
            <div className="h-5 bg-muted rounded w-1/3 mb-6" />
            <div className="h-8 bg-muted rounded mb-3" />
            <div className="h-4 bg-muted rounded w-2/3 mb-6" />
            <div className="h-56 md:h-72 bg-muted rounded-xl mb-6" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-3 bg-muted rounded" />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-20 md:pt-24 pb-16">
          <div className="container text-center py-16 px-4">
            <BookOpen className="w-16 h-16 mx-auto text-muted-foreground/50 mb-5" />
            <h1 className="text-2xl font-bold text-foreground mb-3">
              Article Not Found
            </h1>
            <p className="text-muted-foreground mb-6 text-sm">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-secondary hover:underline text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Articles
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const keywords = article.keywords as string[] | null;
  const tags = article.tags as string[] | null;
  const processedContent = processContent(article.content);

  return (
    <>
      <Helmet>
        <title>
          {article.meta_title || article.title} | Intorza Interior Design
        </title>
        <meta
          name="description"
          content={
            article.meta_description ||
            article.excerpt ||
            `Read about ${article.title} on Intorza blog`
          }
        />
        {keywords && keywords.length > 0 && (
          <meta name="keywords" content={keywords.join(", ")} />
        )}
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={article.excerpt || article.meta_description}
        />
        {article.featured_image_url && (
          <meta property="og:image" content={article.featured_image_url} />
        )}
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://intorza.com/articles/${slug}`} />
      </Helmet>

      <Header />

      <main className="pt-20 md:pt-24 pb-20 md:pb-16 bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-muted/40 to-background pb-5 md:pb-10">
          <div className="container max-w-3xl px-4 md:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4 md:mb-8 pt-3 md:pt-4 overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-secondary transition-colors shrink-0">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 shrink-0" />
              <Link to="/articles" className="hover:text-secondary transition-colors shrink-0">
                Blog
              </Link>
              <ChevronRight className="w-3 h-3 shrink-0" />
              <span className="text-foreground/60 truncate max-w-[120px] md:max-w-[250px]">
                {article.title}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
              {article.category && (
                <Badge className="bg-secondary text-secondary-foreground font-medium text-[10px] md:text-xs px-2 py-0.5">
                  {article.category}
                </Badge>
              )}
              {article.published_at && (
                <span className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {format(new Date(article.published_at), "MMM d, yyyy")}
                </span>
              )}
              {article.reading_time && (
                <span className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {article.reading_time} min
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2.5 md:mb-4 leading-snug tracking-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                {article.excerpt}
              </p>
            )}

            {/* Author & Share */}
            <div className="flex items-center justify-between py-3 md:py-4 border-y border-border/40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-sm">
                  <User className="w-3.5 h-3.5 md:w-5 md:h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs md:text-sm">
                    {article.author || "Intorza Team"}
                  </p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Interior Expert</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-1.5 rounded-full px-3 py-1 h-auto text-[10px] md:text-xs hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
              >
                <Share2 className="w-3 h-3" /> Share
              </Button>
            </div>
          </div>
        </div>

        <article className="container max-w-3xl px-4 md:px-6">
          {/* Featured Image */}
          {article.featured_image_url && (
            <div className="relative rounded-lg md:rounded-2xl overflow-hidden mb-5 md:mb-10 shadow-md -mt-1">
              <img
                src={article.featured_image_url}
                alt={article.title}
                className="w-full h-auto max-h-[220px] md:max-h-[400px] object-cover"
              />
            </div>
          )}

          {/* Table of Contents - Collapsible on Mobile */}
          {toc.length > 0 && (
            <details className="mb-5 md:mb-10 group">
              <summary className="flex items-center gap-2 p-3 md:p-4 bg-muted/40 rounded-lg md:rounded-xl border border-border/50 cursor-pointer list-none">
                <List className="w-4 h-4 text-secondary" />
                <span className="text-xs md:text-sm font-semibold text-foreground flex-1">
                  Table of Contents
                </span>
                <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90" />
              </summary>
              <nav className="mt-2 p-2.5 md:p-4 bg-muted/20 rounded-lg md:rounded-xl space-y-0.5">
                {toc.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-1.5 px-2.5 rounded-lg text-xs transition-all duration-200 ${
                      item.level === 3 ? "pl-5" : ""
                    } ${
                      activeSection === item.id
                        ? "bg-secondary/15 text-secondary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                  >
                    <span className="flex items-start gap-2">
                      <span className={`w-1 h-1 rounded-full shrink-0 mt-1.5 ${
                        activeSection === item.id ? "bg-secondary" : "bg-muted-foreground/40"
                      }`} />
                      <span className="line-clamp-2 leading-snug">{item.text}</span>
                    </span>
                  </button>
                ))}
              </nav>
            </details>
          )}

          {/* Article Content */}
          <div
            className="article-content-mobile md:article-content"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mt-8 md:mt-12 pt-5 md:pt-8 border-t border-border/50">
              <p className="text-xs font-semibold text-foreground mb-2.5 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-secondary" />
                Related Topics
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-muted/50 text-muted-foreground hover:bg-secondary/10 hover:text-secondary hover:border-secondary/30 transition-colors cursor-pointer px-2 py-0.5 text-[10px] md:text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* CTA Box */}
          <div className="mt-8 md:mt-14 p-5 md:p-8 bg-gradient-to-br from-secondary via-secondary to-secondary/90 rounded-xl md:rounded-2xl text-center relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50" />
            <div className="relative z-10">
              <h3 className="text-base md:text-xl lg:text-2xl font-bold text-white mb-2">
                Ready to Transform Your Home?
              </h3>
              <p className="text-white/90 mb-4 md:mb-6 max-w-md mx-auto text-xs md:text-sm leading-relaxed">
                Get a free consultation from Intorza's expert designers in Bangalore.
                Let's bring your dream home to life!
              </p>
              <div className="flex flex-col gap-2.5">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-secondary px-5 py-3 rounded-full font-semibold hover:bg-white/95 transition-all shadow-lg text-sm"
                >
                  Contact Intorza Today <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/20 text-white px-5 py-3 rounded-full font-medium hover:bg-white/30 transition-all text-sm"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles && relatedArticles.length > 0 && (
          <section className="mt-10 md:mt-20 py-8 md:py-16 bg-muted/30">
            <div className="container px-4">
              <div className="text-center mb-5 md:mb-10">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground mb-1.5">
                  Continue Reading
                </h2>
                <p className="text-muted-foreground text-xs md:text-sm">
                  More articles you might enjoy
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6 max-w-4xl mx-auto">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/articles/${related.slug}`}
                    className="group flex md:flex-col bg-card rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/30"
                  >
                    <div className="relative w-24 md:w-full h-24 md:h-36 overflow-hidden shrink-0">
                      {related.featured_image_url ? (
                        <img
                          src={related.featured_image_url}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>
                    <div className="p-3 md:p-4 flex flex-col justify-center">
                      <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-2 text-xs md:text-sm leading-snug mb-1">
                        {related.title}
                      </h3>
                      {related.reading_time && (
                        <span className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {related.reading_time} min
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ArticleDetail;
