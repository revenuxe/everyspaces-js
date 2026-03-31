"use client";

import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";
import gallery22 from "@/assets/gallery-22.jpg";
import gallery23 from "@/assets/gallery-23.jpg";
import gallery24 from "@/assets/gallery-24.jpg";

const HBRLayout = () => {
  const seo = {
    metaTitle: "Best Interior Designers in Begumpet Hyderabad | Home Interiors EverySpaces",
    metaDescription: "EverySpaces offers premium home interiors in Begumpet, Hyderabad with modular kitchens, wardrobes, and full-home design. 30+ Projects delivered with transparent pricing and 10-year warranty.",
    keywords: [
      "interior designers in Begumpet hyderabad",
      "home interiors Begumpet",
      "best interior designers Begumpet",
      "modular kitchen Begumpet hyderabad",
      "wardrobe design Begumpet",
      "full home interiors hyderabad",
      "interior decorators Begumpet",
      "hyderabad interior design company"
    ],
    ogTitle: "Interior Designers in Begumpet, Hyderabad | EverySpaces",
    ogDescription: "30+ Projects completed in and around Begumpet. Book a free consultation for end-to-end interiors in Hyderabad.",
    faqs: [
      {
        question: "What is the interior design cost in Begumpet, Hyderabad?",
        answer: "Interior design cost in Begumpet typically starts from Rs 1,500 per sq ft and varies by finish, scope, and timeline. EverySpaces offers tailored 2BHK, 3BHK, and villa packages with factory-finished execution and a 10-year warranty."
      },
      {
        question: "Do you provide modular kitchen and wardrobe design in Begumpet?",
        answer: "Yes. We provide modular kitchen Hyderabad solutions, custom wardrobes, TV units, and complete storage planning for apartments and villas in Begumpet."
      },
      {
        question: "How long does a full home interior project take in Begumpet?",
        answer: "Most 2BHK and 3BHK interior projects in Begumpet are delivered in 45 to 90 days depending on civil scope and material selections."
      },
      {
        question: "Why choose EverySpaces as your interior designers in Hyderabad?",
        answer: "Homeowners choose EverySpaces for design-first planning, clear BOQs, dedicated project management, and dependable post-installation support across Hyderabad."
      }
    ],
    nearbyAreas: ["Somajiguda","Panjagutta","Ameerpet","Secunderabad","Banjara Hills","Khairatabad"],
    specialties: ["Modular Kitchen", "Wardrobe Design", "Living Room Interiors", "Bedroom Interiors", "Full Home Interiors"],
    lifestyleDescription: "Begumpet is one of Hyderabad's fast-growing residential zones with a mix of premium apartments, gated communities, and independent homes. Our designs focus on practical storage, climate-ready materials, and contemporary aesthetics suited to Hyderabad lifestyles.",
    landmarks: [
      {
        name: "Residential Communities in Begumpet",
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
      localityName="Begumpet"
      slug="begumpet"
      projectCount="30+ Projects"
      heroImage={gallery17}
      galleryImages={[gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24, gallery17]}
      description="Top interior designers in Begumpet, Hyderabad for modular kitchen, wardrobe design, and full home interiors."
      seo={seo}
    />
  );
};

export default HBRLayout;

