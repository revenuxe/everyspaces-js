import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, FileText, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface ArticleFormProps {
  article?: any;
  onClose: () => void;
}

const ArticleForm = ({ article, onClose }: ArticleFormProps) => {
  const [mode, setMode] = useState<"ai" | "manual">("ai");
  const [isGenerating, setIsGenerating] = useState(false);
  const queryClient = useQueryClient();

  // AI Generate state
  const [aiTopic, setAiTopic] = useState("");
  const [aiKeywords, setAiKeywords] = useState("");
  const [aiAudience, setAiAudience] = useState("");

  // Manual/Generated form state
  const [title, setTitle] = useState(article?.title || "");
  const [slug, setSlug] = useState(article?.slug || "");
  const [metaTitle, setMetaTitle] = useState(article?.meta_title || "");
  const [metaDescription, setMetaDescription] = useState(article?.meta_description || "");
  const [excerpt, setExcerpt] = useState(article?.excerpt || "");
  const [content, setContent] = useState(article?.content || "");
  const [category, setCategory] = useState(article?.category || "");
  const [author, setAuthor] = useState(article?.author || "Intorza Team");
  const [keywords, setKeywords] = useState(
    article?.keywords?.join(", ") || ""
  );
  const [tags, setTags] = useState(article?.tags?.join(", ") || "");
  const [featuredImageUrl, setFeaturedImageUrl] = useState(
    article?.featured_image_url || ""
  );
  const [status, setStatus] = useState(article?.status || "draft");
  const [readingTime, setReadingTime] = useState(article?.reading_time || 0);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!article) {
      setSlug(generateSlug(value));
    }
  };

  const handleGenerateArticle = async () => {
    if (!aiTopic.trim()) {
      toast.error("Please enter a topic for the article");
      return;
    }

    setIsGenerating(true);

    try {
      const { data, error } = await supabase.functions.invoke("generate-article", {
        body: {
          topic: aiTopic,
          keywords: aiKeywords,
          targetAudience: aiAudience,
        },
      });

      if (error) throw error;

      if (data.error) {
        throw new Error(data.error);
      }

      // Populate form with generated content
      setTitle(data.title);
      setSlug(generateSlug(data.title));
      setMetaTitle(data.metaTitle || data.title.substring(0, 60));
      setMetaDescription(data.metaDescription || "");
      setExcerpt(data.excerpt || "");
      setContent(data.content);
      setKeywords(data.suggestedKeywords?.join(", ") || aiKeywords);
      setTags(data.suggestedTags?.join(", ") || "");
      setReadingTime(data.readingTime || Math.ceil(data.content.split(" ").length / 200));

      // Switch to manual mode for review
      setMode("manual");
      toast.success("Article generated! Review and edit before publishing.");
    } catch (error) {
      console.error("Generation error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to generate article");
    } finally {
      setIsGenerating(false);
    }
  };

  const saveMutation = useMutation({
    mutationFn: async () => {
      const articleData = {
        title,
        slug,
        meta_title: metaTitle || null,
        meta_description: metaDescription || null,
        excerpt: excerpt || null,
        content,
        category: category || null,
        author: author || "Intorza Team",
        keywords: keywords ? keywords.split(",").map((k) => k.trim()) : null,
        tags: tags ? tags.split(",").map((t) => t.trim()) : null,
        featured_image_url: featuredImageUrl || null,
        status,
        reading_time: readingTime || Math.ceil(content.split(" ").length / 200),
        published_at: status === "published" ? new Date().toISOString() : null,
      };

      if (article?.id) {
        const { error } = await supabase
          .from("articles")
          .update(articleData)
          .eq("id", article.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("articles").insert(articleData);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-articles"] });
      toast.success(article ? "Article updated!" : "Article created!");
      onClose();
    },
    onError: (error: any) => {
      console.error("Save error:", error);
      toast.error(error.message || "Failed to save article");
    },
  });

  const handleSubmit = () => {
    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!slug.trim()) {
      toast.error("Slug is required");
      return;
    }
    if (!content.trim()) {
      toast.error("Content is required");
      return;
    }
    saveMutation.mutate();
  };

  const categories = [
    "Interior Design Tips",
    "Home Renovation",
    "Modular Kitchen",
    "Living Room",
    "Bedroom Design",
    "Vastu Tips",
    "Budget Interiors",
    "Luxury Homes",
  ];

  return (
    <div className="space-y-6">
      <Tabs value={mode} onValueChange={(v) => setMode(v as "ai" | "manual")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ai" className="gap-2">
            <Sparkles className="w-4 h-4" /> AI Generate
          </TabsTrigger>
          <TabsTrigger value="manual" className="gap-2">
            <FileText className="w-4 h-4" /> Manual Edit
          </TabsTrigger>
        </TabsList>

        {/* AI Generate Tab */}
        <TabsContent value="ai" className="space-y-6 mt-6">
          <div className="border-2 border-dashed border-border rounded-xl p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Blog Generator</h3>
                <p className="text-sm text-muted-foreground">
                  Generate SEO-optimized content automatically
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="topic">Topic / Title *</Label>
                <Input
                  id="topic"
                  value={aiTopic}
                  onChange={(e) => setAiTopic(e.target.value)}
                  placeholder="e.g., Best Modular Kitchen Designs for Indian Homes"
                />
                <p className="text-xs text-muted-foreground">
                  What should the article be about?
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">Target Keywords</Label>
                <Input
                  id="keywords"
                  value={aiKeywords}
                  onChange={(e) => setAiKeywords(e.target.value)}
                  placeholder="e.g., modular kitchen bangalore, kitchen design, kitchen interiors"
                />
                <p className="text-xs text-muted-foreground">
                  Comma-separated keywords for SEO
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="audience">Target Audience</Label>
                <Input
                  id="audience"
                  value={aiAudience}
                  onChange={(e) => setAiAudience(e.target.value)}
                  placeholder="e.g., Homeowners in Bangalore looking for kitchen renovation"
                />
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <p className="font-medium text-sm text-foreground mb-2">
                AI will generate:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  2500-3500 words of human-like content
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  E-E-A-T compliant structure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Proper H1, H2, H3 hierarchy
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Table of Contents
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Case studies with real examples
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  SEO-optimized meta tags
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Emotional hook and CTA
                </li>
              </ul>
            </div>

            <Button
              onClick={handleGenerateArticle}
              disabled={isGenerating || !aiTopic.trim()}
              className="w-full gap-2 bg-secondary hover:bg-secondary/90"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating article...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate Article
                </>
              )}
            </Button>
          </div>
        </TabsContent>

        {/* Manual Edit Tab */}
        <TabsContent value="manual" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Article title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="metaTitle">Meta Title (SEO)</Label>
              <Input
                id="metaTitle"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder="60 characters max"
                maxLength={60}
              />
              <p className="text-xs text-muted-foreground">
                {metaTitle.length}/60 characters
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Intorza Team"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="metaDesc">Meta Description (SEO)</Label>
            <Textarea
              id="metaDesc"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              placeholder="160 characters max"
              maxLength={160}
              rows={2}
            />
            <p className="text-xs text-muted-foreground">
              {metaDescription.length}/160 characters
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief summary of the article"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="slug">URL Slug *</Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="article-url-slug"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="tag1, tag2, tag3"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="keywordsManual">Keywords (comma-separated)</Label>
              <Input
                id="keywordsManual"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="keyword1, keyword2, keyword3"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="featuredImage">Featured Image URL</Label>
              <Input
                id="featuredImage"
                value={featuredImageUrl}
                onChange={(e) => setFeaturedImageUrl(e.target.value)}
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content (HTML) *</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="<h1>Title</h1><p>Content...</p>"
              rows={12}
              className="font-mono text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="readingTime">Reading Time (minutes)</Label>
              <Input
                id="readingTime"
                type="number"
                value={readingTime}
                onChange={(e) => setReadingTime(parseInt(e.target.value) || 0)}
                placeholder="Auto-calculated if empty"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={saveMutation.isPending}
              className="gap-2 bg-secondary hover:bg-secondary/90"
            >
              {saveMutation.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : null}
              {article ? "Update Article" : "Create Article"}
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ArticleForm;
