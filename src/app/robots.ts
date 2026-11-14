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
        // Internal HTML pages must remain crawlable for their noindex to be read.
        disallow: ["/api/"],
      },
      ...AI_AND_SOCIAL_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
