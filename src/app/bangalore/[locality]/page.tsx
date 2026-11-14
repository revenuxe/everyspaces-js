import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalityPageTemplate from "@/views/localities/LocalityPageTemplate";
import { BANGALORE_LOCALITY_SLUGS } from "@/seo/bangalore-locality-slugs";
import { getLocalityContent } from "@/content/locality-content";
import heroImage from "@/assets/hero-interior.jpg";

export function generateStaticParams() {
  return BANGALORE_LOCALITY_SLUGS.map((locality) => ({ locality }));
}

export async function generateMetadata({ params }: { params: Promise<{ locality: string }> }): Promise<Metadata> {
  const { locality } = await params;
  const content = getLocalityContent(locality);
  if (!content) return {};
  const title = `Interior Designers in ${content.name}, Bangalore`;
  const description = content.metaDescription;
  return {
    title,
    description,
    alternates: { canonical: `/bangalore/${locality}` },
    openGraph: {
      title: `${title} | EverySpaces`,
      description,
      url: `/bangalore/${locality}`,
      type: "website",
      locale: "en_IN",
      siteName: "EverySpaces",
      images: [{ url: heroImage.src, alt: "EverySpaces interior design inspiration" }],
    },
    twitter: { card: "summary_large_image", title: `${title} | EverySpaces`, description, images: [heroImage.src] },
    robots: { index: true, follow: true },
    other: { "geo.region": "IN-KA", "geo.placename": `${content.name}, Bengaluru` },
  };
}

export default async function LocalityPage({ params }: { params: Promise<{ locality: string }> }) {
  const { locality } = await params;
  if (!getLocalityContent(locality)) notFound();
  return <LocalityPageTemplate slug={locality} />;
}
