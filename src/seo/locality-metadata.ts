import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import indiranagarHero from "@/assets/locality-indiranagar.jpg";
import whitefieldHero from "@/assets/locality-whitefield.jpg";
import hsrHero from "@/assets/locality-hsr.jpg";
import koramangalaHero from "@/assets/locality-koramangala.jpg";

type LocalitySeo = {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
};

const LOCALITY_SEO: Record<string, LocalitySeo> = {
  "jubilee-hills": {
    metaTitle: "Best Interior Designers in Jubilee Hills | Premium Home Interiors Hyderabad",
    metaDescription:
      "Top-rated interior designers in Jubilee Hills, Hyderabad. 45+ luxury projects completed. Bespoke modular kitchens, designer wardrobes & contemporary living spaces. 10-year warranty. Free consultation!",
    keywords: [
      "interior designers jubilee hills",
      "best interior designers in jubilee hills hyderabad",
      "home interiors jubilee hills",
      "modular kitchen jubilee hills",
      "wardrobe design jubilee hills",
    ],
    ogTitle: "Best Interior Designers in Jubilee Hills | EverySpaces - Luxury Home Interiors",
    ogDescription:
      "Transform your Jubilee Hills home with EverySpaces. 45+ premium projects, 10-year warranty. Free design consultation!",
  },
  madhapur: {
    metaTitle: "Best Interior Designers in Madhapur | Premium Home Interiors Hyderabad",
    metaDescription:
      "Leading interior designers in Madhapur, Hyderabad. 38+ projects in premium gated communities and apartments. Luxury modular kitchens, wardrobes & villa interiors. 10-year warranty!",
    keywords: ["interior designers madhapur", "home interiors madhapur", "modular kitchen madhapur"],
    ogTitle: "Interior Designers in Madhapur | EverySpaces",
    ogDescription: "Premium interiors in Madhapur. Free consultation!",
  },
  kondapur: {
    metaTitle: "Best Interior Designers in Kondapur | Premium Home Interiors Hyderabad",
    metaDescription:
      "Top interior designers in Kondapur, Hyderabad. 52+ projects completed across premium communities. Premium modular kitchens, smart wardrobes & modern living spaces. 10-year warranty. Free consultation!",
    keywords: ["interior designers kondapur", "home interiors kondapur", "modular kitchen kondapur"],
    ogTitle: "Interior Designers in Kondapur | EverySpaces",
    ogDescription: "Trusted Kondapur interiors. Free consultation!",
  },
  gachibowli: {
    metaTitle: "Best Interior Designers in Gachibowli | Luxury Home Interiors Hyderabad",
    metaDescription:
      "Premium interior designers in Gachibowli, Hyderabad. 41+ luxury projects across premium communities. Designer modular kitchens, walk-in wardrobes & elegant living spaces. 10-year warranty. Free consultation!",
    keywords: ["interior designers gachibowli", "luxury interiors gachibowli", "modular kitchen gachibowli"],
    ogTitle: "Interior Designers in Gachibowli | EverySpaces",
    ogDescription: "Luxury Gachibowli homes by EverySpaces. Free consultation!",
  },
  nallagandla: {
    metaTitle: "Interior Designers in Nallagandla | Trusted Home Interiors Hyderabad",
    metaDescription:
      "Trusted interior designers in Nallagandla, Hyderabad. 35+ projects across all phases. Affordable modular kitchens, wardrobes & complete home interiors. 10-year warranty. Free consultation!",
    keywords: ["interior designers nallagandla", "home interiors nallagandla", "modular kitchen nallagandla"],
    ogTitle: "Interior Designers in Nallagandla | EverySpaces",
    ogDescription: "Complete home interiors in Nallagandla. Free consultation!",
  },
  himayatnagar: {
    metaTitle: "Interior Designers in Himayatnagar | Classic & Modern Home Interiors Hyderabad",
    metaDescription:
      "Professional interior designers in Himayatnagar, Hyderabad. 28+ projects with classic & contemporary designs. Traditional pooja rooms, modular kitchens & elegant wardrobes. 10-year warranty!",
    keywords: ["interior designers himayatnagar", "home interiors himayatnagar", "wardrobe design himayatnagar"],
    ogTitle: "Interior Designers in Himayatnagar | EverySpaces",
    ogDescription: "Himayatnagar interiors with EverySpaces. Free consultation!",
  },
  nanakramguda: {
    metaTitle: "Interior Designers in Nanakramguda | Budget-Friendly Home Interiors Hyderabad",
    metaDescription:
      "Budget-friendly interior designers in Nanakramguda, Hyderabad. 33+ projects near ORR. Modern modular kitchens, compact wardrobes & smart storage solutions. Starting ₹7 lakhs. 10-year warranty!",
    keywords: ["interior designers nanakramguda", "home interiors nanakramguda", "apartment interiors nanakramguda"],
    ogTitle: "Interior Designers in Nanakramguda | EverySpaces",
    ogDescription: "Smart interiors in Nanakramguda. Free consultation!",
  },
  "hitec-city": {
    metaTitle: "Interior Designers in HITEC City | Smart Home Interiors Hyderabad",
    metaDescription:
      "Expert interior designers in HITEC City, Hyderabad. 26+ projects in Phase 1 & 2. Smart home integration, modern modular kitchens & tech-savvy living spaces. 10-year warranty!",
    keywords: ["interior designers hitec city", "home interiors hitec city", "modular kitchen hitec city"],
    ogTitle: "Interior Designers in HITEC City | EverySpaces",
    ogDescription: "Tech-forward interiors in HITEC City. Free consultation!",
  },
  narsingi: {
    metaTitle: "Interior Designers in Narsingi | New Apartment Interiors Hyderabad",
    metaDescription:
      "Professional interior designers in Narsingi, Hyderabad. 42+ projects in new apartments. Modern modular kitchens, stylish wardrobes & contemporary living spaces. 10-year warranty!",
    keywords: ["interior designers narsingi", "home interiors narsingi", "new apartment interiors narsingi"],
    ogTitle: "Interior Designers in Narsingi | EverySpaces",
    ogDescription: "New home interiors on Narsingi. Free consultation!",
  },
  "financial-district": {
    metaTitle: "Interior Designers in Financial District | Premium Apartment Interiors Hyderabad",
    metaDescription:
      "Premium interior designers in Financial District, Hyderabad. 31+ projects in luxury apartments. Modern modular kitchens, designer wardrobes & upscale living spaces. 10-year warranty!",
    keywords: ["interior designers financial district", "apartment interiors financial district", "luxury interiors financial district"],
    ogTitle: "Interior Designers in Financial District | EverySpaces",
    ogDescription: "Premium Financial District apartments. Free consultation!",
  },
  ameerpet: {
    metaTitle: "Interior Designers in Ameerpet | Affordable Home Interiors Hyderabad",
    metaDescription:
      "Trusted interior designers in Ameerpet, Hyderabad. 29+ projects in 1st & 2nd Stage. Budget-friendly modular kitchens, wardrobes & complete home makeovers. Starting ₹6.5 lakhs!",
    keywords: ["interior designers ameerpet", "home interiors ameerpet", "budget interiors ameerpet"],
    ogTitle: "Interior Designers in Ameerpet | EverySpaces",
    ogDescription: "Affordable interiors in Ameerpet. Free consultation!",
  },
  kokapet: {
    metaTitle: "Interior Designers in Kokapet | Villa & Apartment Interiors Hyderabad",
    metaDescription:
      "Expert interior designers in Kokapet, Hyderabad. 24+ projects including premium villas. North Hyderabad specialists with luxury villa interiors & modern apartments. 10-year warranty!",
    keywords: ["interior designers kokapet", "villa interiors kokapet", "luxury interiors kokapet"],
    ogTitle: "Interior Designers in Kokapet | EverySpaces",
    ogDescription: "Villa & apartment interiors in Kokapet. Free consultation!",
  },
  kompally: {
    metaTitle: "Interior Designers in Kompally | Spacious Home Interiors Hyderabad",
    metaDescription:
      "Professional interior designers in Kompally, Hyderabad. 22+ projects in independent houses & villas. Spacious home designs with modern amenities. 10-year warranty. Free consultation!",
    keywords: ["interior designers kompally", "home interiors kompally", "villa interiors kompally"],
    ogTitle: "Interior Designers in Kompally | EverySpaces",
    ogDescription: "Spacious Kompally homes. Free consultation!",
  },
  uppal: {
    metaTitle: "Interior Designers in Uppal | Traditional & Modern Home Interiors Hyderabad",
    metaDescription:
      "Experienced interior designers in Uppal, Hyderabad. 27+ projects across all stages. Traditional pooja rooms, modern modular kitchens & family-friendly designs. 10-year warranty!",
    keywords: ["interior designers uppal", "home interiors uppal", "family interiors uppal"],
    ogTitle: "Interior Designers in Uppal | EverySpaces",
    ogDescription: "Family interiors in Uppal. Free consultation!",
  },
  secunderabad: {
    metaTitle: "Interior Designers in Secunderabad | Heritage & Classic Home Interiors Hyderabad",
    metaDescription:
      "Heritage-conscious interior designers in Secunderabad, Hyderabad. 19+ projects blending classic elegance with modern functionality. Traditional kitchens, wooden interiors & timeless designs!",
    keywords: ["interior designers secunderabad", "heritage interiors secunderabad", "home renovation secunderabad"],
    ogTitle: "Interior Designers in Secunderabad | EverySpaces",
    ogDescription: "Classic Secunderabad interiors. Free consultation!",
  },
  miyapur: {
    metaTitle: "Interior Designers in Miyapur | Elegant Home Interiors Hyderabad",
    metaDescription:
      "Experienced interior designers in Miyapur, Hyderabad. 21+ projects across all blocks. Elegant modular kitchens, spacious wardrobes & sophisticated living spaces. 10-year warranty!",
    keywords: ["interior designers miyapur", "home interiors miyapur", "modular kitchen miyapur"],
    ogTitle: "Interior Designers in Miyapur | EverySpaces",
    ogDescription: "Elegant Miyapur homes. Free consultation!",
  },
  abids: {
    metaTitle: "Interior Designers in Abids | Heritage Home Interiors Hyderabad",
    metaDescription:
      "Heritage-specialist interior designers in Abids, Hyderabad. 18+ projects preserving old-world charm. Traditional craftsmanship, wooden interiors & culturally-rich designs. 10-year warranty!",
    keywords: ["interior designers abids", "heritage interiors abids", "traditional interiors abids"],
    ogTitle: "Interior Designers in Abids | EverySpaces",
    ogDescription: "Heritage interiors in Abids. Free consultation!",
  },
  "banjara-hills": {
    metaTitle: "Interior Designers in Banjara Hills | Luxury Bungalow Interiors Hyderabad",
    metaDescription:
      "Luxury interior designers in Banjara Hills, Hyderabad. 15+ premium bungalow projects. Grand living spaces, imported finishes & exclusive designs for elite homes. Free consultation!",
    keywords: ["interior designers banjara hills", "luxury interiors banjara hills", "villa interiors banjara hills"],
    ogTitle: "Interior Designers in Banjara Hills | EverySpaces",
    ogDescription: "Luxury Banjara Hills bungalows. Free consultation!",
  },
  manikonda: {
    metaTitle: "Interior Designers in Manikonda | Affordable Quality Home Interiors Hyderabad",
    metaDescription:
      "Affordable interior designers in Manikonda, Hyderabad. 17+ projects with quality materials. Budget-friendly modular kitchens, wardrobes & complete home solutions. Starting ₹6 lakhs!",
    keywords: ["interior designers manikonda", "home interiors manikonda", "apartment interiors manikonda"],
    ogTitle: "Interior Designers in Manikonda | EverySpaces",
    ogDescription: "Quality interiors in Manikonda. Free consultation!",
  },
  kukatpally: {
    metaTitle: "Interior Designers in Kukatpally | Complete Home Transformation Hyderabad",
    metaDescription:
      "Trusted interior designers in Kukatpally, Hyderabad. 20+ complete home transformations. Modern modular kitchens, smart storage & family-friendly designs. 10-year warranty!",
    keywords: ["interior designers kukatpally", "home interiors kukatpally", "budget interiors kukatpally"],
    ogTitle: "Interior Designers in Kukatpally | EverySpaces",
    ogDescription: "Complete transformations in Kukatpally. Free consultation!",
  },
  begumpet: {
    metaTitle: "Interior Designers in Begumpet | Local Experts Home Interiors Hyderabad",
    metaDescription:
      "Local expert interior designers in Begumpet, Hyderabad. 30+ projects in our home locality. Modern modular kitchens, wardrobes & complete home interiors. 10-year warranty. Visit our studio!",
    keywords: ["interior designers begumpet", "home interiors begumpet", "modular kitchen begumpet"],
    ogTitle: "Interior Designers in Begumpet | EverySpaces",
    ogDescription: "Trusted Begumpet interiors. Free consultation!",
  },
};

function staticSrc(img: string | StaticImageData): string {
  return typeof img === "string" ? img : img.src;
}

const HERO_BY_SLUG: Record<string, string | StaticImageData> = {
  "jubilee-hills": indiranagarHero,
  madhapur: whitefieldHero,
  kondapur: hsrHero,
  gachibowli: koramangalaHero,
};

export const VALID_LOCALITY_SLUGS = Object.keys(LOCALITY_SEO);

export function isValidLocalitySlug(slug: string): slug is keyof typeof LOCALITY_SEO {
  return slug in LOCALITY_SEO;
}

export function buildLocalityMetadata(slug: string): Metadata {
  const seo = LOCALITY_SEO[slug];
  if (!seo) return {};
  const hero = HERO_BY_SLUG[slug];
  const ogImage = hero ? staticSrc(hero) : "/og-image.jpg";

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    alternates: { canonical: `/hyderabad/${slug}` },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: `/hyderabad/${slug}`,
      type: "website",
      locale: "en_IN",
      siteName: "EverySpaces",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
    other: {
      "geo.region": "IN-TG",
      "geo.placename": "Hyderabad",
    },
  };
}

