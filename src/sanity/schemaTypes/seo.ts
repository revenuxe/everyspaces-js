import { defineArrayMember, defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      validation: (rule) => rule.required().min(20).max(60),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(80).max(160),
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "focusKeyword",
      title: "Focus keyword",
      type: "string",
      validation: (rule) => rule.required().min(3).max(120),
    }),
    defineField({
      name: "secondaryKeywords",
      title: "Secondary keywords",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.max(8),
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required().min(8).max(140),
        }),
      ],
    }),
    defineField({
      name: "schemaType",
      title: "Schema type",
      type: "string",
      options: {
        list: ["Article", "BlogPosting", "HowTo"],
      },
      initialValue: "Article",
    }),
    defineField({
      name: "noindex",
      title: "Noindex",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "faqBlocks",
      title: "FAQ blocks",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (rule) => rule.required().min(10).max(180),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required().min(20).max(600),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.max(8),
    }),
  ],
});
