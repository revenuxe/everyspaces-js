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
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();

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

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-16">
          <div className="container max-w-4xl animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-8" />
            <div className="h-12 bg-muted rounded mb-4" />
            <div className="h-6 bg-muted rounded w-2/3 mb-8" />
            <div className="h-80 bg-muted rounded-2xl mb-8" />
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

      <main className="pt-24 pb-16">
        {/* Article Header */}
        <article className="container max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-secondary">
              Home
            </Link>
            <span>/</span>
            <Link to="/articles" className="hover:text-secondary">
              Articles
            </Link>
            <span>/</span>
            <span className="text-primary truncate">{article.title}</span>
          </nav>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {article.category && (
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                {article.category}
              </Badge>
            )}
            {article.published_at && (
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {format(new Date(article.published_at), "MMMM d, yyyy")}
              </span>
            )}
            {article.reading_time && (
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {article.reading_time} min read
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {article.excerpt}
            </p>
          )}

          {/* Author & Share */}
          <div className="flex items-center justify-between py-6 border-y border-border/50 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <User className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-medium text-primary">
                  {article.author || "Intorza Team"}
                </p>
                <p className="text-sm text-muted-foreground">Interior Design Expert</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="gap-2"
            >
              <Share2 className="w-4 h-4" /> Share
            </Button>
          </div>

          {/* Featured Image */}
          {article.featured_image_url && (
            <div className="relative rounded-2xl overflow-hidden mb-10 shadow-soft">
              <img
                src={article.featured_image_url}
                alt={article.title}
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none 
              prose-headings:text-primary prose-headings:font-bold
              prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-10
              prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:border-l-4 prose-h2:border-secondary prose-h2:pl-4
              prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
              prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-primary prose-strong:font-semibold
              prose-ul:my-4 prose-ul:pl-6 prose-li:text-foreground/80 prose-li:mb-2
              prose-ol:my-4 prose-ol:pl-6
              prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-secondary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-primary
              prose-img:rounded-xl prose-img:shadow-soft
              prose-table:border-collapse prose-table:w-full
              prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold
              prose-td:border prose-td:border-border prose-td:p-3"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-border/50">
              <p className="text-sm font-medium text-primary mb-3">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-muted/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* CTA Box */}
          <div className="mt-12 p-8 md:p-10 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Need Help with Your Interior Design?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Transform your home with Intorza's expert interior designers in Bangalore.
              Get a free consultation and personalized design recommendations!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
              >
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles && relatedArticles.length > 0 && (
          <section className="mt-16 py-16 bg-muted/30">
            <div className="container">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                More Articles You'll Love
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/articles/${related.slug}`}
                    className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-40 overflow-hidden">
                      {related.featured_image_url ? (
                        <img
                          src={related.featured_image_url}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <BookOpen className="w-10 h-10 text-primary/30" />
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-2">
                        {related.title}
                      </h3>
                      {related.reading_time && (
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
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
