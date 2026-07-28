import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-url";

const AI_AND_SOCIAL_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "Anthropic-AI",
  "cohere-ai",
  "Bytespider",
  "YouBot",
  "Meta-ExternalAgent",
  "Applebot-Extended",
  "Twitterbot",
  "facebookexternalhit",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/studio/", "/thank-you", "/api/"],
      },
      ...AI_AND_SOCIAL_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/admin/", "/studio/", "/thank-you"],
      })),
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
