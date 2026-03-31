"use client";

import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";

const JPNagar = () => {
  const seo = {
    metaTitle: "Best Interior Designers in Nallagandla Hyderabad | Home Interiors EverySpaces",
    metaDescription: "EverySpaces offers premium home interiors in Nallagandla, Hyderabad with modular kitchens, wardrobes, and full-home design. 35+ Projects delivered with transparent pricing and 10-year warranty.",
    keywords: [
      "interior designers in Nallagandla hyderabad",
      "home interiors Nallagandla",
      "best interior designers Nallagandla",
      "modular kitchen Nallagandla hyderabad",
      "wardrobe design Nallagandla",
      "full home interiors hyderabad",
      "interior decorators Nallagandla",
      "hyderabad interior design company"
    ],
    ogTitle: "Interior Designers in Nallagandla, Hyderabad | EverySpaces",
    ogDescription: "35+ Projects completed in and around Nallagandla. Book a free consultation for end-to-end interiors in Hyderabad.",
    faqs: [
      {
        question: "What is the interior design cost in Nallagandla, Hyderabad?",
        answer: "Interior design cost in Nallagandla typically starts from Rs 1,500 per sq ft and varies by finish, scope, and timeline. EverySpaces offers tailored 2BHK, 3BHK, and villa packages with factory-finished execution and a 10-year warranty."
      },
      {
        question: "Do you provide modular kitchen and wardrobe design in Nallagandla?",
        answer: "Yes. We provide modular kitchen Hyderabad solutions, custom wardrobes, TV units, and complete storage planning for apartments and villas in Nallagandla."
      },
      {
        question: "How long does a full home interior project take in Nallagandla?",
        answer: "Most 2BHK and 3BHK interior projects in Nallagandla are delivered in 45 to 90 days depending on civil scope and material selections."
      },
      {
        question: "Why choose EverySpaces as your interior designers in Hyderabad?",
        answer: "Homeowners choose EverySpaces for design-first planning, clear BOQs, dedicated project management, and dependable post-installation support across Hyderabad."
      }
    ],
    nearbyAreas: ["Tellapur","Lingampally","Kondapur","Miyapur","Chandanagar","Gachibowli"],
    specialties: ["Modular Kitchen", "Wardrobe Design", "Living Room Interiors", "Bedroom Interiors", "Full Home Interiors"],
    lifestyleDescription: "Nallagandla is one of Hyderabad's fast-growing residential zones with a mix of premium apartments, gated communities, and independent homes. Our designs focus on practical storage, climate-ready materials, and contemporary aesthetics suited to Hyderabad lifestyles.",
    landmarks: [
      {
        name: "Residential Communities in Nallagandla",
        description: "We design turnkey interiors for newly handed-over flats and family homes with efficient layouts and premium finishes.",
        type: "residential" as const
      },
      {
        name: "Retail and Lifestyle Corridors",
        description: "Popular social zones nearby inspire open-plan living, statement lighting, and entertaining-friendly spaces.",
        type: "lifestyle" as const
      },
      {
        name: "Commuter and Office Connectivity",
        description: "For professionals across Hyderabad, we create hybrid-ready homes with work corners, acoustic comfort, and uncluttered storage.",
        type: "landmark" as const
      },
      {
        name: "Urban Green Pockets",
        description: "We use natural textures, indoor plants, and balanced lighting palettes to keep interiors calm and breathable.",
        type: "nature" as const
      }
    ],
    designTips: [
      {
        title: "Plan Storage Room by Room",
        description: "Build a storage matrix early to optimize wardrobes, lofts, utility units, and hidden shelves before finalizing aesthetics."
      },
      {
        title: "Choose Heat-Resistant Finishes",
        description: "For Hyderabad homes, prefer durable laminates, quartz counters, and moisture-resistant core materials in wet areas."
      },
      {
        title: "Design Flexible Multi-Use Zones",
        description: "Create spaces that switch between work, study, and leisure using sliding partitions, foldable furniture, and layered lighting."
      },
      {
        title: "Use Lighting to Add Depth",
        description: "Combine cove, task, and accent lighting to elevate room proportions and bring premium character to everyday spaces."
      }
    ]
  };

  return (
    <LocalityPageTemplate
      localityName="Nallagandla"
      slug="nallagandla"
      projectCount="35+ Projects"
      heroImage={gallery1}
      galleryImages={[gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery1]}
      description="Top interior designers in Nallagandla, Hyderabad for modular kitchen, wardrobe design, and full home interiors."
      seo={seo}
    />
  );
};

export default JPNagar;

