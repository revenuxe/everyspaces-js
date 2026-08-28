import type { Metadata } from "next";

const ogDefaults = {
  siteName: "EverySpaces",
  locale: "en_IN",
  type: "website" as const,
};

export const PAGE_METADATA: Record<string, Metadata> = {
  "/": {
    title: "Interior Designers in Bangalore | Home Interiors & Modular Kitchens | EverySpaces",
    description:
      "Bangalore interior designers for full home interiors, 2BHK and 3BHK designs, modular kitchens and wardrobes. Get a free design consultation from EverySpaces.",
    keywords: [
      "interior designers in bangalore",
      "home interiors bangalore",
      "modular kitchen bangalore",
      "2bhk interior design bangalore",
      "3bhk interior design bangalore",
      "wardrobe design bangalore",
      "full home interiors bangalore",
      "interior design cost bangalore",
    ],
    alternates: { canonical: "/" },
    openGraph: {
      ...ogDefaults,
      title: "Interior Designers in Bangalore | Home Interiors & Modular Kitchens | EverySpaces",
      description:
        "Full home interiors, 2BHK and 3BHK designs, modular kitchens and wardrobes across Bangalore. Book a free consultation.",
      url: "/",
    },
    twitter: {
      card: "summary_large_image",
      title: "Interior Designers in Bangalore | EverySpaces",
      description:
        "Full home interiors, modular kitchens, wardrobes and 2BHK/3BHK design services in Bangalore.",
    },
    robots: { index: true, follow: true },
  },
  "/hyderabad": {
    title: "Interior Designers in Hyderabad | Top-Rated Home Interiors | EverySpaces",
    description:
      "Premium interior designers serving all major Hyderabad localities. Modular kitchens, wardrobes & end-to-end home interiors. 10-year warranty. Book a free consultation.",
    alternates: { canonical: "/hyderabad" },
    openGraph: { ...ogDefaults, title: "Interior Designers in Hyderabad | EverySpaces", url: "/hyderabad" },
  },
  "/bangalore": {
    title: "Interior Designers in Bangalore | Top-Rated Home Interiors | EverySpaces",
    description:
      "Premium interior designers serving all major Bangalore localities. Modular kitchens, wardrobes & end-to-end home interiors. 10-year warranty. Book a free consultation.",
    alternates: { canonical: "/bangalore" },
    openGraph: { ...ogDefaults, title: "Interior Designers in Bangalore | EverySpaces", url: "/bangalore" },
  },
  "/portfolio": {
    title: "Our Portfolio | Completed Interior Design Projects | EverySpaces Hyderabad",
    description:
      "Explore EverySpaces portfolio — modular kitchens, living rooms, bedrooms, and full homes delivered across Hyderabad.",
    alternates: { canonical: "/portfolio" },
    openGraph: { ...ogDefaults, title: "Our Portfolio | EverySpaces", url: "/portfolio" },
  },
  "/services": {
    title: "All Interior Design Services in Hyderabad | 20+ Categories | EverySpaces",
    description:
      "Explore 20+ interior design services in Hyderabad — kitchens, wardrobes, 2BHK/3BHK, villas, and room-wise design with transparent pricing.",
    alternates: { canonical: "/services" },
    openGraph: { ...ogDefaults, title: "Interior Design Services | EverySpaces", url: "/services" },
  },
  "/bangalore/services": {
    title: "All Interior Design Services in Bangalore | 20+ Categories | EverySpaces",
    description:
      "Explore 20+ interior design services in Bangalore — kitchens, wardrobes, 2BHK/3BHK, villas, and room-wise design with transparent pricing.",
    alternates: { canonical: "/bangalore/services" },
    openGraph: { ...ogDefaults, title: "Interior Design Services in Bangalore | EverySpaces", url: "/bangalore/services" },
  },
  "/contact": {
    title: "Contact Us | Free Interior Design Consultation Hyderabad | EverySpaces",
    description:
      "Book a free consultation for modular kitchen and home interiors in Hyderabad. Call +91 9886579923 or request a callback.",
    alternates: { canonical: "/contact" },
    openGraph: { ...ogDefaults, title: "Contact EverySpaces", url: "/contact" },
  },
  "/thank-you": {
    title: "Thank You | Request Submitted Successfully | EverySpaces",
    description: "Your request was submitted successfully. Our team will contact you shortly.",
    robots: { index: false, follow: true },
    openGraph: { ...ogDefaults, title: "Thank You | EverySpaces", url: "/thank-you" },
  },
  "/terms": {
    title: "Terms & Conditions | Interior Design Services | EverySpaces Hyderabad",
    description: "Terms and conditions for EverySpaces interior design services in Hyderabad.",
    alternates: { canonical: "/terms" },
    openGraph: { ...ogDefaults, title: "Terms & Conditions | EverySpaces", url: "/terms" },
  },
  "/privacy": {
    title: "Privacy Policy | Data Protection & Security | EverySpaces Hyderabad",
    description: "How EverySpaces collects, uses, and protects your personal information.",
    alternates: { canonical: "/privacy" },
    openGraph: { ...ogDefaults, title: "Privacy Policy | EverySpaces", url: "/privacy" },
  },
  "/about-us": {
    title: "About Us | Intorza Interiors Management | EverySpaces",
    description:
      "Started in 2025, EverySpaces delivers interior design and execution powered by Intorza, a software management company for interiors. Discover how our structured workflow helps your project.",
    alternates: { canonical: "/about-us" },
    openGraph: {
      ...ogDefaults,
      title: "About Us | Intorza x EverySpaces",
      description:
        "Started in 2025, EverySpaces delivers interior design and execution powered by Intorza, a software management company for interiors.",
      url: "/about-us",
    },
    robots: { index: true, follow: true },
  },
  "/articles": {
    title: "Interior Design Tips & Ideas Blog | Home Decor Trends | EverySpaces",
    description:
      "Practical interior design tips, Hyderabad home trends, modular kitchen ideas, and renovation guides from EverySpaces.",
    alternates: { canonical: "/articles" },
    openGraph: { ...ogDefaults, title: "Articles | EverySpaces", url: "/articles" },
  },
  "/orza-ai": {
    title: "Orza AI – Free Interior Design Advisor | EverySpaces Hyderabad",
    description:
      "Chat with Orza AI for instant interior design guidance, budgeting tips, and style ideas for Hyderabad homes.",
    alternates: { canonical: "/orza-ai" },
    openGraph: { ...ogDefaults, title: "Orza AI | EverySpaces", url: "/orza-ai" },
  },
  "/price-calculator": {
    title: "Interior Design Cost Calculator | Get Instant Quote | EverySpaces Hyderabad",
    description: "Estimate your home interior budget in minutes — kitchens, wardrobes, and turnkey packages.",
    alternates: { canonical: "/price-calculator" },
    openGraph: { ...ogDefaults, title: "Price Calculator | EverySpaces", url: "/price-calculator" },
  },
  "/services/2bhk-interiors": {
    title: "2 BHK Interior Design Hyderabad | Affordable Packages from ₹4L | EverySpaces",
    description:
      "Complete 2 BHK interior packages in Hyderabad — modular kitchen, wardrobes, TV unit, and living spaces with warranty-backed execution.",
    alternates: { canonical: "/services/2bhk-interiors" },
  },
  "/services/3bhk-interiors": {
    title: "3 BHK Interior Design Hyderabad | Premium Packages from ₹8L | EverySpaces",
    description:
      "Premium 3 BHK interior design with modular kitchens, wardrobes, and full home coordination in Hyderabad.",
    alternates: { canonical: "/services/3bhk-interiors" },
  },
  "/services/villa-interiors": {
    title: "Villa & Bungalow Interior Design Hyderabad | Luxury Homes | EverySpaces",
    description:
      "Luxury villa interiors including kitchens, living spaces, and bespoke joinery with dedicated project management.",
    alternates: { canonical: "/services/villa-interiors" },
  },
  "/services/full-home-design": {
    title: "Full Home Interior Design Hyderabad | End-to-End Solutions | EverySpaces",
    description:
      "End-to-end interior design for entire homes — design, materials, execution, and handover under one roof.",
    alternates: { canonical: "/services/full-home-design" },
  },
  "/services/modular-kitchen": {
    title: "Modular Kitchen Design Hyderabad | L-Shape, U-Shape, Island | EverySpaces",
    description:
      "Custom modular kitchens with premium hardware, efficient layouts, and factory-finished cabinets installed on-site.",
    alternates: { canonical: "/services/modular-kitchen" },
  },
  "/services/bedroom-design": {
    title: "Bedroom Interior Design Hyderabad | Master & Kids Room | EverySpaces",
    description:
      "Bedroom interiors with wardrobes, beds, lighting, and storage planned around your lifestyle.",
    alternates: { canonical: "/services/bedroom-design" },
  },
  "/services/living-room": {
    title: "Living Room Interior Design Hyderabad | TV Unit & False Ceiling | EverySpaces",
    description:
      "Living room design with TV units, seating layouts, false ceiling, and lighting for modern Hyderabad apartments.",
    alternates: { canonical: "/services/living-room" },
  },
  "/services/wardrobe-design": {
    title: "Wardrobe Design Hyderabad | Sliding & Walk-in Closets | EverySpaces",
    description:
      "Sliding and hinged wardrobes with loft storage, internal accessories, and premium finishes.",
    alternates: { canonical: "/services/wardrobe-design" },
  },
  "/services/home-office": {
    title: "Home Office Design Hyderabad | Study Room & WFH Setup | EverySpaces",
    description:
      "Ergonomic home office and study setups with storage, cable management, and productive layouts.",
    alternates: { canonical: "/services/home-office" },
  },
  "/services/kids-room": {
    title: "Kids Room Design Hyderabad | Fun & Safe Children Bedroom | EverySpaces",
    description:
      "Creative, safe kids rooms with study zones, storage, and finishes suited for growing families.",
    alternates: { canonical: "/services/kids-room" },
  },
  "/services/dining-room": {
    title: "Dining Room Design Hyderabad | Crockery Unit & Bar Cabinet | EverySpaces",
    description:
      "Dining spaces with crockery units, lighting, and seating that match open-plan Hyderabad layouts.",
    alternates: { canonical: "/services/dining-room" },
  },
  "/services/bathroom-design": {
    title: "Bathroom Design Hyderabad | Spa-Inspired Renovation | EverySpaces",
    description:
      "Bathroom renovations with waterproofing, vanity design, and premium fixtures.",
    alternates: { canonical: "/services/bathroom-design" },
  },
  "/services/pooja-room": {
    title: "Pooja Room Design Hyderabad | Mandir Interior | Vastu | EverySpaces",
    description:
      "Pooja room designs with storage, lighting, and vastu-aware layouts for apartment and villa homes.",
    alternates: { canonical: "/services/pooja-room" },
  },
  "/services/foyer-entrance": {
    title: "Foyer & Entrance Design Hyderabad | Entryway Interior | EverySpaces",
    description:
      "Statement foyers with shoe storage, mirrors, and lighting for a welcoming entrance.",
    alternates: { canonical: "/services/foyer-entrance" },
  },
  "/services/tv-unit": {
    title: "TV Unit Design Hyderabad | Entertainment Wall | EverySpaces",
    description:
      "TV unit walls with display storage, cable concealment, and finishes that anchor your living room.",
    alternates: { canonical: "/services/tv-unit" },
  },
  "/services/false-ceiling": {
    title: "False Ceiling Design Hyderabad | POP & Gypsum Ceiling | EverySpaces",
    description:
      "False ceiling design with cove lighting, insulation, and layouts that enhance room proportions.",
    alternates: { canonical: "/services/false-ceiling" },
  },
  "/services/crockery-unit": {
    title: "Crockery Unit Design Hyderabad | Display Cabinet | EverySpaces",
    description:
      "Dining crockery and display units integrated with modular kitchens and living spaces.",
    alternates: { canonical: "/services/crockery-unit" },
  },
  "/services/study-room": {
    title: "Study Room Design Hyderabad | Study Table Interior | EverySpaces",
    description:
      "Compact study rooms with desks, shelving, and lighting for students and professionals.",
    alternates: { canonical: "/services/study-room" },
  },
  "/services/guest-room": {
    title: "Guest Room Interior Design Hyderabad | Guest Bedroom | EverySpaces",
    description:
      "Comfortable guest bedrooms with wardrobes and flexible layouts for visitors.",
    alternates: { canonical: "/services/guest-room" },
  },
  "/services/balcony-design": {
    title: "Balcony Design Hyderabad | Terrace Garden Interior | EverySpaces",
    description:
      "Balcony upgrades with seating, planters, and weather-safe finishes for Hyderabad homes.",
    alternates: { canonical: "/services/balcony-design" },
  },
};

// The marketing site is Bangalore-only. This protects legacy, route-specific
// metadata from publishing the retired city name while preserving each page's
// unique intent, title, description, canonical, and Open Graph fields.
function replaceRetiredCity(value: unknown): unknown {
  if (typeof value === "string") return value.replace(/Hyderabad/gi, "Bangalore");
  if (Array.isArray(value)) return value.map(replaceRetiredCity);
  if (value && typeof value === "object") {
    for (const [key, nested] of Object.entries(value as Record<string, unknown>)) {
      (value as Record<string, unknown>)[key] = replaceRetiredCity(nested);
    }
  }
  return value;
}

replaceRetiredCity(PAGE_METADATA);

