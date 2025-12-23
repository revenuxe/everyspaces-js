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
        <main className="pt-24 pb-16">
          <div className="container max-w-4xl animate-pulse">
            <div className="h-6 bg-muted rounded w-1/4 mb-8" />
            <div className="h-10 bg-muted rounded mb-4" />
            <div className="h-5 bg-muted rounded w-2/3 mb-8" />
            <div className="h-72 bg-muted rounded-2xl mb-8" />
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-muted rounded" />
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
        <main className="pt-24 pb-16">
          <div className="container text-center py-20">
            <BookOpen className="w-20 h-20 mx-auto text-muted-foreground/50 mb-6" />
            <h1 className="text-3xl font-bold text-primary mb-4">
              Article Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-secondary hover:underline"
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

      <main className="pt-24 pb-16 bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-muted/50 to-background pb-10">
          <div className="container max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 pt-4">
              <Link to="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/articles" className="hover:text-secondary transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground/70 truncate max-w-[200px]">
                {article.title}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {article.category && (
                <Badge className="bg-secondary text-secondary-foreground font-medium px-3 py-1">
                  {article.category}
                </Badge>
              )}
              {article.published_at && (
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(article.published_at), "MMMM d, yyyy")}
                </span>
              )}
              {article.reading_time && (
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {article.reading_time} min read
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight tracking-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                {article.excerpt}
              </p>
            )}

            {/* Author & Share */}
            <div className="flex items-center justify-between py-5 border-y border-border/40">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-sm">
                  <User className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {article.author || "Intorza Team"}
                  </p>
                  <p className="text-xs text-muted-foreground">Interior Design Expert</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-2 rounded-full px-4 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
              >
                <Share2 className="w-4 h-4" /> Share
              </Button>
            </div>
          </div>
        </div>

        <article className="container max-w-4xl">
          {/* Featured Image */}
          {article.featured_image_url && (
            <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg -mt-2">
              <img
                src={article.featured_image_url}
                alt={article.title}
                className="w-full h-auto max-h-[480px] object-cover"
              />
            </div>
          )}

          {/* Table of Contents */}
          {toc.length > 0 && (
            <div className="mb-10 p-6 bg-muted/40 rounded-xl border border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <List className="w-5 h-5 text-secondary" />
                <h2 className="text-base font-semibold text-foreground">
                  Table of Contents
                </h2>
              </div>
              <nav className="space-y-1">
                {toc.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                      item.level === 3 ? "pl-6" : ""
                    } ${
                      activeSection === item.id
                        ? "bg-secondary/15 text-secondary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        activeSection === item.id ? "bg-secondary" : "bg-muted-foreground/40"
                      }`} />
                      {item.text}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          )}

          {/* Article Content */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Related Topics
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-muted/50 text-muted-foreground hover:bg-secondary/10 hover:text-secondary hover:border-secondary/30 transition-colors cursor-pointer px-3 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* CTA Box */}
          <div className="mt-14 p-8 md:p-10 bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50" />
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-3">
                Ready to Transform Your Home?
              </h3>
              <p className="text-primary-foreground/85 mb-6 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Get a free consultation from Intorza's expert designers in Bangalore.
                Let's bring your dream home to life!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
                >
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary-foreground/25 transition-all text-sm"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles && relatedArticles.length > 0 && (
          <section className="mt-20 py-16 bg-muted/30">
            <div className="container">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Continue Reading
                </h2>
                <p className="text-muted-foreground">
                  More articles you might enjoy
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/articles/${related.slug}`}
                    className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/30"
                  >
                    <div className="relative h-36 overflow-hidden">
                      {related.featured_image_url ? (
                        <img
                          src={related.featured_image_url}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                          <BookOpen className="w-8 h-8 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-2 text-sm leading-snug mb-2">
                        {related.title}
                      </h3>
                      {related.reading_time && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {related.reading_time} min read
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
