import type { Metadata } from "next";

export function createPageMetadata(title: string, description: string, canonical: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website", locale: "en_IN", siteName: "EverySpaces",
      title, description, url: canonical,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "EverySpaces interior design" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
  };
}
