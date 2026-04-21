import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalityPageTemplate from "@/views/localities/LocalityPageTemplate";
import localityWhitefield from "@/assets/locality-whitefield.jpg";
import localityIndiranagar from "@/assets/locality-indiranagar.jpg";
import localityHSR from "@/assets/locality-hsr.jpg";
import localityKoramangala from "@/assets/locality-koramangala.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const VALID_BANGALORE_LOCALITY_SLUGS = [
  "indiranagar",
  "whitefield",
  "hsr-layout",
  "koramangala",
  "jp-nagar",
  "jayanagar",
  "marathahalli",
  "electronic-city",
  "sarjapur-road",
  "bellandur",
  "btm-layout",
  "hebbal",
  "yelahanka",
  "banashankari",
  "malleshwaram",
  "rajajinagar",
  "basavanagudi",
  "sadashivanagar",
  "rt-nagar",
  "vijayanagar",
  "hbr-layout",
] as const;

function isValidBangaloreLocalitySlug(slug: string): boolean {
  return VALID_BANGALORE_LOCALITY_SLUGS.includes(slug as (typeof VALID_BANGALORE_LOCALITY_SLUGS)[number]);
}

function toTitle(slug: string): string {
  return slug
    .split("-")
    .map((part) => (part.length <= 3 ? part.toUpperCase() : `${part.charAt(0).toUpperCase()}${part.slice(1)}`))
    .join(" ");
}

const BANGALORE_LOCALITY_MAP: Record<string, { name: string; hero: string; projectCount: string }> = {
  "indiranagar": { name: "Indiranagar", hero: localityIndiranagar.src, projectCount: "40+ Projects" },
  "whitefield": { name: "Whitefield", hero: localityWhitefield.src, projectCount: "55+ Projects" },
  "hsr-layout": { name: "HSR Layout", hero: localityHSR.src, projectCount: "34+ Projects" },
  "koramangala": { name: "Koramangala", hero: localityKoramangala.src, projectCount: "38+ Projects" },
  "jp-nagar": { name: "JP Nagar", hero: localityHSR.src, projectCount: "29+ Projects" },
  "jayanagar": { name: "Jayanagar", hero: localityIndiranagar.src, projectCount: "31+ Projects" },
  "marathahalli": { name: "Marathahalli", hero: localityWhitefield.src, projectCount: "33+ Projects" },
  "electronic-city": { name: "Electronic City", hero: localityKoramangala.src, projectCount: "36+ Projects" },
  "sarjapur-road": { name: "Sarjapur Road", hero: localityWhitefield.src, projectCount: "44+ Projects" },
  "bellandur": { name: "Bellandur", hero: localityKoramangala.src, projectCount: "35+ Projects" },
  "btm-layout": { name: "BTM Layout", hero: localityHSR.src, projectCount: "27+ Projects" },
  "hebbal": { name: "Hebbal", hero: localityIndiranagar.src, projectCount: "30+ Projects" },
  "yelahanka": { name: "Yelahanka", hero: localityWhitefield.src, projectCount: "26+ Projects" },
  "banashankari": { name: "Banashankari", hero: localityHSR.src, projectCount: "28+ Projects" },
  "malleshwaram": { name: "Malleshwaram", hero: localityIndiranagar.src, projectCount: "24+ Projects" },
  "rajajinagar": { name: "Rajajinagar", hero: localityWhitefield.src, projectCount: "22+ Projects" },
  "basavanagudi": { name: "Basavanagudi", hero: localityKoramangala.src, projectCount: "21+ Projects" },
  "sadashivanagar": { name: "Sadashivanagar", hero: localityIndiranagar.src, projectCount: "19+ Projects" },
  "rt-nagar": { name: "RT Nagar", hero: localityWhitefield.src, projectCount: "23+ Projects" },
  "vijayanagar": { name: "Vijayanagar", hero: localityHSR.src, projectCount: "20+ Projects" },
  "hbr-layout": { name: "HBR Layout", hero: localityKoramangala.src, projectCount: "18+ Projects" },
};

const GALLERY_IMAGES = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

export function generateStaticParams() {
  return VALID_BANGALORE_LOCALITY_SLUGS.map((locality) => ({ locality }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locality: string }>;
}): Promise<Metadata> {
  const { locality } = await params;
  if (!isValidBangaloreLocalitySlug(locality)) return {};

  const localityName = toTitle(locality);
  return {
    title: `Interior Designers in ${localityName}, Bangalore | EverySpaces`,
    description: `Premium interior design services in ${localityName}, Bangalore. Modular kitchens, wardrobes, and complete home interiors by EverySpaces.`,
    alternates: { canonical: `/bangalore/${locality}` },
  };
}

export default async function LocalityPage({
  params,
}: {
  params: Promise<{ locality: string }>;
}) {
  const { locality } = await params;
  if (!isValidBangaloreLocalitySlug(locality)) notFound();
  const pageData = BANGALORE_LOCALITY_MAP[locality];
  if (!pageData) notFound();

  return (
    <LocalityPageTemplate
      localityName={pageData.name}
      slug={locality}
      projectCount={pageData.projectCount}
      heroImage={pageData.hero}
      galleryImages={GALLERY_IMAGES}
      description={`Top interior designers in ${pageData.name}, Bangalore for modular kitchen, wardrobe design, and full home interiors.`}
    />
  );
}
