import groq from "groq";

export const POST_CARD_QUERY = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  readingTime,
  publishedAt,
  "featuredImage": featuredImage{
    ...,
    alt
  },
  "category": category->{
    _id,
    title,
    "slug": slug.current
  }
`;

export const ALL_PUBLISHED_POSTS_QUERY = groq`
  *[_type == "post" && published == true] | order(coalesce(publishedAt, _createdAt) desc) {
    ${POST_CARD_QUERY}
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug && published == true][0]{
    _id,
    _createdAt,
    _updatedAt,
    title,
    "slug": slug.current,
    excerpt,
    body,
    contentHtml,
    readingTime,
    publishedAt,
    tags,
    "author": author->{
      _id,
      name,
      "slug": slug.current,
      bio
    },
    "category": category->{
      _id,
      title,
      "slug": slug.current
    },
    "featuredImage": featuredImage{
      ...,
      alt
    },
    seo{
      metaTitle,
      metaDescription,
      canonicalUrl,
      focusKeyword,
      secondaryKeywords,
      schemaType,
      noindex,
      faqBlocks,
      ogImage{
        ...,
        alt
      }
    }
  }
`;

export const POST_SLUGS_QUERY = groq`
  *[_type == "post" && published == true && defined(slug.current)][].slug.current
`;

export const RELATED_POSTS_QUERY = groq`
  *[
    _type == "post" &&
    published == true &&
    slug.current != $slug &&
    (!defined($categoryId) || category._ref == $categoryId)
  ] | order(coalesce(publishedAt, _createdAt) desc)[0...3] {
    ${POST_CARD_QUERY}
  }
`;
