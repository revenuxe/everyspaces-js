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
  indiranagar: {
    metaTitle: "Best Interior Designers in Indiranagar | Premium Home Interiors Bangalore",
    metaDescription:
      "Top-rated interior designers in Indiranagar, Bangalore. 45+ luxury projects completed. Bespoke modular kitchens, designer wardrobes & contemporary living spaces. 10-year warranty. Free consultation!",
    keywords: [
      "interior designers indiranagar",
      "best interior designers in indiranagar bangalore",
      "home interiors indiranagar",
      "modular kitchen indiranagar",
      "wardrobe design indiranagar",
    ],
    ogTitle: "Best Interior Designers in Indiranagar | EverySpaces - Luxury Home Interiors",
    ogDescription:
      "Transform your Indiranagar home with EverySpaces. 45+ premium projects, 10-year warranty. Free design consultation!",
  },
  whitefield: {
    metaTitle: "Best Interior Designers in Whitefield | Premium Home Interiors Bangalore",
    metaDescription:
      "Leading interior designers in Whitefield, Bangalore. 38+ projects in EPIP Zone, ITPL & Prestige Shantiniketan. Luxury modular kitchens, wardrobes & villa interiors. 10-year warranty!",
    keywords: ["interior designers whitefield", "home interiors whitefield", "modular kitchen whitefield"],
    ogTitle: "Interior Designers in Whitefield | EverySpaces",
    ogDescription: "Premium interiors in Whitefield. Free consultation!",
  },
  "hsr-layout": {
    metaTitle: "Best Interior Designers in HSR Layout | Premium Home Interiors Bangalore",
    metaDescription:
      "Top interior designers in HSR Layout, Bangalore. 52+ projects completed across all sectors. Premium modular kitchens, smart wardrobes & modern living spaces. 10-year warranty. Free consultation!",
    keywords: ["interior designers hsr layout", "home interiors hsr", "modular kitchen hsr layout"],
    ogTitle: "Interior Designers in HSR Layout | EverySpaces",
    ogDescription: "Trusted HSR Layout interiors. Free consultation!",
  },
  koramangala: {
    metaTitle: "Best Interior Designers in Koramangala | Luxury Home Interiors Bangalore",
    metaDescription:
      "Premium interior designers in Koramangala, Bangalore. 41+ luxury projects across all blocks. Designer modular kitchens, walk-in wardrobes & elegant living spaces. 10-year warranty. Free consultation!",
    keywords: ["interior designers koramangala", "luxury interiors koramangala", "modular kitchen koramangala"],
    ogTitle: "Interior Designers in Koramangala | EverySpaces",
    ogDescription: "Luxury Koramangala homes by EverySpaces. Free consultation!",
  },
  "jp-nagar": {
    metaTitle: "Interior Designers in JP Nagar | Trusted Home Interiors Bangalore",
    metaDescription:
      "Trusted interior designers in JP Nagar, Bangalore. 35+ projects across all phases. Affordable modular kitchens, wardrobes & complete home interiors. 10-year warranty. Free consultation!",
    keywords: ["interior designers jp nagar", "home interiors jp nagar"],
    ogTitle: "Interior Designers in JP Nagar | EverySpaces",
    ogDescription: "Complete home interiors in JP Nagar. Free consultation!",
  },
  jayanagar: {
    metaTitle: "Interior Designers in Jayanagar | Classic & Modern Home Interiors Bangalore",
    metaDescription:
      "Professional interior designers in Jayanagar, Bangalore. 28+ projects with classic & contemporary designs. Traditional pooja rooms, modular kitchens & elegant wardrobes. 10-year warranty!",
    keywords: ["interior designers jayanagar", "home interiors jayanagar"],
    ogTitle: "Interior Designers in Jayanagar | EverySpaces",
    ogDescription: "Jayanagar interiors with EverySpaces. Free consultation!",
  },
  marathahalli: {
    metaTitle: "Interior Designers in Marathahalli | Budget-Friendly Home Interiors Bangalore",
    metaDescription:
      "Budget-friendly interior designers in Marathahalli, Bangalore. 33+ projects near ORR. Modern modular kitchens, compact wardrobes & smart storage solutions. Starting ₹7 lakhs. 10-year warranty!",
    keywords: ["interior designers marathahalli", "home interiors marathahalli"],
    ogTitle: "Interior Designers in Marathahalli | EverySpaces",
    ogDescription: "Smart interiors in Marathahalli. Free consultation!",
  },
  "electronic-city": {
    metaTitle: "Interior Designers in Electronic City | Smart Home Interiors Bangalore",
    metaDescription:
      "Expert interior designers in Electronic City, Bangalore. 26+ projects in Phase 1 & 2. Smart home integration, modern modular kitchens & tech-savvy living spaces. 10-year warranty!",
    keywords: ["interior designers electronic city", "home interiors electronic city"],
    ogTitle: "Interior Designers in Electronic City | EverySpaces",
    ogDescription: "Tech-forward interiors in Electronic City. Free consultation!",
  },
  "sarjapur-road": {
    metaTitle: "Interior Designers in Sarjapur Road | New Apartment Interiors Bangalore",
    metaDescription:
      "Professional interior designers in Sarjapur Road, Bangalore. 42+ projects in new apartments. Modern modular kitchens, stylish wardrobes & contemporary living spaces. 10-year warranty!",
    keywords: ["interior designers sarjapur road", "home interiors sarjapur"],
    ogTitle: "Interior Designers in Sarjapur Road | EverySpaces",
    ogDescription: "New home interiors on Sarjapur Road. Free consultation!",
  },
  bellandur: {
    metaTitle: "Interior Designers in Bellandur | Premium Apartment Interiors Bangalore",
    metaDescription:
      "Premium interior designers in Bellandur, Bangalore. 31+ projects in luxury apartments. Modern modular kitchens, designer wardrobes & upscale living spaces. 10-year warranty!",
    keywords: ["interior designers bellandur", "apartment interiors bellandur"],
    ogTitle: "Interior Designers in Bellandur | EverySpaces",
    ogDescription: "Premium Bellandur apartments. Free consultation!",
  },
  "btm-layout": {
    metaTitle: "Interior Designers in BTM Layout | Affordable Home Interiors Bangalore",
    metaDescription:
      "Trusted interior designers in BTM Layout, Bangalore. 29+ projects in 1st & 2nd Stage. Budget-friendly modular kitchens, wardrobes & complete home makeovers. Starting ₹6.5 lakhs!",
    keywords: ["interior designers btm layout", "home interiors btm"],
    ogTitle: "Interior Designers in BTM Layout | EverySpaces",
    ogDescription: "Affordable interiors in BTM Layout. Free consultation!",
  },
  hebbal: {
    metaTitle: "Interior Designers in Hebbal | Villa & Apartment Interiors Bangalore",
    metaDescription:
      "Expert interior designers in Hebbal, Bangalore. 24+ projects including premium villas. North Bangalore specialists with luxury villa interiors & modern apartments. 10-year warranty!",
    keywords: ["interior designers hebbal", "villa interiors hebbal"],
    ogTitle: "Interior Designers in Hebbal | EverySpaces",
    ogDescription: "Villa & apartment interiors in Hebbal. Free consultation!",
  },
  yelahanka: {
    metaTitle: "Interior Designers in Yelahanka | Spacious Home Interiors Bangalore",
    metaDescription:
      "Professional interior designers in Yelahanka, Bangalore. 22+ projects in independent houses & villas. Spacious home designs with modern amenities. 10-year warranty. Free consultation!",
    keywords: ["interior designers yelahanka", "home interiors yelahanka"],
    ogTitle: "Interior Designers in Yelahanka | EverySpaces",
    ogDescription: "Spacious Yelahanka homes. Free consultation!",
  },
  banashankari: {
    metaTitle: "Interior Designers in Banashankari | Traditional & Modern Home Interiors Bangalore",
    metaDescription:
      "Experienced interior designers in Banashankari, Bangalore. 27+ projects across all stages. Traditional pooja rooms, modern modular kitchens & family-friendly designs. 10-year warranty!",
    keywords: ["interior designers banashankari", "home interiors banashankari"],
    ogTitle: "Interior Designers in Banashankari | EverySpaces",
    ogDescription: "Family interiors in Banashankari. Free consultation!",
  },
  malleshwaram: {
    metaTitle: "Interior Designers in Malleshwaram | Heritage & Classic Home Interiors Bangalore",
    metaDescription:
      "Heritage-conscious interior designers in Malleshwaram, Bangalore. 19+ projects blending classic elegance with modern functionality. Traditional kitchens, wooden interiors & timeless designs!",
    keywords: ["interior designers malleshwaram", "heritage interiors malleshwaram"],
    ogTitle: "Interior Designers in Malleshwaram | EverySpaces",
    ogDescription: "Classic Malleshwaram interiors. Free consultation!",
  },
  rajajinagar: {
    metaTitle: "Interior Designers in Rajajinagar | Elegant Home Interiors Bangalore",
    metaDescription:
      "Experienced interior designers in Rajajinagar, Bangalore. 21+ projects across all blocks. Elegant modular kitchens, spacious wardrobes & sophisticated living spaces. 10-year warranty!",
    keywords: ["interior designers rajajinagar", "home interiors rajajinagar"],
    ogTitle: "Interior Designers in Rajajinagar | EverySpaces",
    ogDescription: "Elegant Rajajinagar homes. Free consultation!",
  },
  basavanagudi: {
    metaTitle: "Interior Designers in Basavanagudi | Heritage Home Interiors Bangalore",
    metaDescription:
      "Heritage-specialist interior designers in Basavanagudi, Bangalore. 18+ projects preserving old-world charm. Traditional craftsmanship, wooden interiors & culturally-rich designs. 10-year warranty!",
    keywords: ["interior designers basavanagudi", "heritage interiors basavanagudi"],
    ogTitle: "Interior Designers in Basavanagudi | EverySpaces",
    ogDescription: "Heritage interiors in Basavanagudi. Free consultation!",
  },
  sadashivanagar: {
    metaTitle: "Interior Designers in Sadashivanagar | Luxury Bungalow Interiors Bangalore",
    metaDescription:
      "Luxury interior designers in Sadashivanagar, Bangalore. 15+ premium bungalow projects. Grand living spaces, imported finishes & exclusive designs for elite homes. Free consultation!",
    keywords: ["interior designers sadashivanagar", "luxury interiors sadashivanagar"],
    ogTitle: "Interior Designers in Sadashivanagar | EverySpaces",
    ogDescription: "Luxury Sadashivanagar bungalows. Free consultation!",
  },
  "rt-nagar": {
    metaTitle: "Interior Designers in RT Nagar | Affordable Quality Home Interiors Bangalore",
    metaDescription:
      "Affordable interior designers in RT Nagar, Bangalore. 17+ projects with quality materials. Budget-friendly modular kitchens, wardrobes & complete home solutions. Starting ₹6 lakhs!",
    keywords: ["interior designers rt nagar", "home interiors rt nagar"],
    ogTitle: "Interior Designers in RT Nagar | EverySpaces",
    ogDescription: "Quality interiors in RT Nagar. Free consultation!",
  },
  vijayanagar: {
    metaTitle: "Interior Designers in Vijayanagar | Complete Home Transformation Bangalore",
    metaDescription:
      "Trusted interior designers in Vijayanagar, Bangalore. 20+ complete home transformations. Modern modular kitchens, smart storage & family-friendly designs. 10-year warranty!",
    keywords: ["interior designers vijayanagar", "home interiors vijayanagar"],
    ogTitle: "Interior Designers in Vijayanagar | EverySpaces",
    ogDescription: "Complete transformations in Vijayanagar. Free consultation!",
  },
  "hbr-layout": {
    metaTitle: "Interior Designers in HBR Layout | Local Experts Home Interiors Bangalore",
    metaDescription:
      "Local expert interior designers in HBR Layout, Bangalore. 30+ projects in our home locality. Modern modular kitchens, wardrobes & complete home interiors. 10-year warranty. Visit our studio!",
    keywords: ["interior designers hbr layout", "home interiors hbr layout"],
    ogTitle: "Interior Designers in HBR Layout | EverySpaces",
    ogDescription: "Trusted HBR Layout interiors. Free consultation!",
  },
};

function staticSrc(img: string | StaticImageData): string {
  return typeof img === "string" ? img : img.src;
}

const HERO_BY_SLUG: Record<string, string | StaticImageData> = {
  indiranagar: indiranagarHero,
  whitefield: whitefieldHero,
  "hsr-layout": hsrHero,
  koramangala: koramangalaHero,
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
    alternates: { canonical: `/bangalore/${slug}` },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: `/bangalore/${slug}`,
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
      "geo.region": "IN-KA",
      "geo.placename": "Bangalore",
    },
  };
}
