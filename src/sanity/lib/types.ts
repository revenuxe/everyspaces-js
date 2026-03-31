export interface SanityImageRef {
  _type: "image";
  asset?: { _ref: string };
  alt?: string;
}

export interface SanityAuthor {
  _id: string;
  name: string;
  slug?: string;
  bio?: string;
}

export interface SanityCategory {
  _id: string;
  title: string;
  slug?: string;
}

export interface SanityFaq {
  question: string;
  answer: string;
}

export interface SanitySeo {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  focusKeyword?: string;
  secondaryKeywords?: string[];
  ogImage?: SanityImageRef;
  schemaType?: "Article" | "BlogPosting" | "HowTo";
  noindex?: boolean;
  faqBlocks?: SanityFaq[];
}

export interface SanityPost {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: string;
  excerpt?: string;
  body?: unknown[];
  contentHtml?: string;
  readingTime?: number;
  publishedAt?: string;
  author?: SanityAuthor;
  category?: SanityCategory;
  featuredImage?: SanityImageRef;
  tags?: string[];
  seo?: SanitySeo;
}
