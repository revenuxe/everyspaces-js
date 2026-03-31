"use client";

import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery21 from "@/assets/gallery-21.jpg";
import gallery22 from "@/assets/gallery-22.jpg";
import gallery23 from "@/assets/gallery-23.jpg";
import gallery24 from "@/assets/gallery-24.jpg";
import gallery25 from "@/assets/gallery-25.jpg";
import gallery26 from "@/assets/gallery-26.jpg";
import gallery27 from "@/assets/gallery-27.jpg";

const Sadashivanagar = () => {
  const seo = {
    metaTitle: "Best Interior Designers in Banjara Hills Hyderabad | Home Interiors EverySpaces",
    metaDescription: "EverySpaces offers premium home interiors in Banjara Hills, Hyderabad with modular kitchens, wardrobes, and full-home design. 15+ Projects delivered with transparent pricing and 10-year warranty.",
    keywords: [
      "interior designers in Banjara Hills hyderabad",
      "home interiors Banjara Hills",
      "best interior designers Banjara Hills",
      "modular kitchen Banjara Hills hyderabad",
      "wardrobe design Banjara Hills",
      "full home interiors hyderabad",
      "interior decorators Banjara Hills",
      "hyderabad interior design company"
    ],
    ogTitle: "Interior Designers in Banjara Hills, Hyderabad | EverySpaces",
    ogDescription: "15+ Projects completed in and around Banjara Hills. Book a free consultation for end-to-end interiors in Hyderabad.",
    faqs: [
      {
        question: "What is the interior design cost in Banjara Hills, Hyderabad?",
        answer: "Interior design cost in Banjara Hills typically starts from Rs 1,500 per sq ft and varies by finish, scope, and timeline. EverySpaces offers tailored 2BHK, 3BHK, and villa packages with factory-finished execution and a 10-year warranty."
      },
      {
        question: "Do you provide modular kitchen and wardrobe design in Banjara Hills?",
        answer: "Yes. We provide modular kitchen Hyderabad solutions, custom wardrobes, TV units, and complete storage planning for apartments and villas in Banjara Hills."
      },
      {
        question: "How long does a full home interior project take in Banjara Hills?",
        answer: "Most 2BHK and 3BHK interior projects in Banjara Hills are delivered in 45 to 90 days depending on civil scope and material selections."
      },
      {
        question: "Why choose EverySpaces as your interior designers in Hyderabad?",
        answer: "Homeowners choose EverySpaces for design-first planning, clear BOQs, dedicated project management, and dependable post-installation support across Hyderabad."
      }
    ],
    nearbyAreas: ["Jubilee Hills","Somajiguda","Panjagutta","Film Nagar","Begumpet","Khairatabad"],
    specialties: ["Modular Kitchen", "Wardrobe Design", "Living Room Interiors", "Bedroom Interiors", "Full Home Interiors"],
    lifestyleDescription: "Banjara Hills is one of Hyderabad's fast-growing residential zones with a mix of premium apartments, gated communities, and independent homes. Our designs focus on practical storage, climate-ready materials, and contemporary aesthetics suited to Hyderabad lifestyles.",
    landmarks: [
      {
        name: "Residential Communities in Banjara Hills",
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
      localityName="Banjara Hills"
      slug="sadashivanagar"
      projectCount="15+ Projects"
      heroImage={gallery14}
      galleryImages={[gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery14]}
      description="Top interior designers in Banjara Hills, Hyderabad for modular kitchen, wardrobe design, and full home interiors."
      seo={seo}
    />
  );
};

export default Sadashivanagar;

