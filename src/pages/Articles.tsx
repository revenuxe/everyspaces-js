import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Search, ArrowRight, BookOpen } from "lucide-react";
import { format } from "date-fns";
import { StructuredData, createBreadcrumbSchema } from "@/components/StructuredData";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Intorza Interior Design Blog",
  "description": "Expert interior design tips, renovation guides & trending home decor ideas for Bangalore homeowners",
  "url": "https://intorza.com/articles",
  "publisher": {
    "@type": "Organization",
    "name": "Intorza",
    "logo": {
      "@type": "ImageObject",
      "url": "https://intorza.com/logo.png"
    }
  }
};

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const categories = articles
    ? [...new Set(articles.map((a) => a.category).filter(Boolean))]
    : [];

  const filteredArticles = articles?.filter((article) => {
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Interior Design Tips & Ideas Blog | Home Decor Trends | Intorza</title>
        <meta
          name="description"
          content="Read expert interior design tips, renovation guides & trending home decor ideas. Get inspired with Intorza's blog for Bangalore homeowners."
        />
        <link rel="canonical" href="https://intorza.com/articles" />
      </Helmet>
      <StructuredData data={[blogSchema, createBreadcrumbSchema([
        { name: "Home", url: "https://intorza.com" },
        { name: "Articles", url: "https://intorza.com/articles" }
      ])]} />

      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                <BookOpen className="w-3 h-3 mr-1" />
                Interior Design Blog
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Design Ideas & <span className="text-secondary">Inspiration</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Expert tips, trending ideas, and comprehensive guides to help you
                create your dream home in Bangalore
              </p>

              {/* Search */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-full border-border/50 bg-card shadow-soft"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        {categories.length > 0 && (
          <section className="py-8 border-b border-border/50">
            <div className="container">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    !selectedCategory
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  All Articles
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft animate-pulse"
                  >
                    <div className="h-48 bg-muted" />
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-muted rounded w-1/3" />
                      <div className="h-6 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredArticles && filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <Link
                    key={article.id}
                    to={`/articles/${article.slug}`}
                    className={`group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                      index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        index === 0 ? "h-64 md:h-80" : "h-48"
                      }`}
                    >
                      {article.featured_image_url ? (
                        <img
                          src={article.featured_image_url}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-primary/30" />
                        </div>
                      )}
                      {article.category && (
                        <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                          {article.category}
                        </Badge>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        {article.published_at && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {format(new Date(article.published_at), "MMM d, yyyy")}
                          </span>
                        )}
                        {article.reading_time && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.reading_time} min read
                          </span>
                        )}
                      </div>
                      <h2
                        className={`font-bold text-primary group-hover:text-secondary transition-colors mb-3 ${
                          index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                        }`}
                      >
                        {article.title}
                      </h2>
                      {article.excerpt && (
                        <p className="text-muted-foreground line-clamp-2 mb-4">
                          {article.excerpt}
                        </p>
                      )}
                      <span className="inline-flex items-center gap-2 text-secondary font-medium group-hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground">
                  {searchQuery
                    ? "Try adjusting your search terms"
                    : "Check back soon for new content!"}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Home?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let our expert designers bring your vision to life. Get a free
              consultation today!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Articles;
