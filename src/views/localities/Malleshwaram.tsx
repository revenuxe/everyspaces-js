"use client";

import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery25 from "@/assets/gallery-25.jpg";
import gallery26 from "@/assets/gallery-26.jpg";
import gallery27 from "@/assets/gallery-27.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Malleshwaram = () => {
  const seo = {
    metaTitle: "Best Interior Designers in Secunderabad Hyderabad | Home Interiors EverySpaces",
    metaDescription: "EverySpaces offers premium home interiors in Secunderabad, Hyderabad with modular kitchens, wardrobes, and full-home design. 19+ Projects delivered with transparent pricing and 10-year warranty.",
    keywords: [
      "interior designers in Secunderabad hyderabad",
      "home interiors Secunderabad",
      "best interior designers Secunderabad",
      "modular kitchen Secunderabad hyderabad",
      "wardrobe design Secunderabad",
      "full home interiors hyderabad",
      "interior decorators Secunderabad",
      "hyderabad interior design company"
    ],
    ogTitle: "Interior Designers in Secunderabad, Hyderabad | EverySpaces",
    ogDescription: "19+ Projects completed in and around Secunderabad. Book a free consultation for end-to-end interiors in Hyderabad.",
    faqs: [
      {
        question: "What is the interior design cost in Secunderabad, Hyderabad?",
        answer: "Interior design cost in Secunderabad typically starts from Rs 1,500 per sq ft and varies by finish, scope, and timeline. EverySpaces offers tailored 2BHK, 3BHK, and villa packages with factory-finished execution and a 10-year warranty."
      },
      {
        question: "Do you provide modular kitchen and wardrobe design in Secunderabad?",
        answer: "Yes. We provide modular kitchen Hyderabad solutions, custom wardrobes, TV units, and complete storage planning for apartments and villas in Secunderabad."
      },
      {
        question: "How long does a full home interior project take in Secunderabad?",
        answer: "Most 2BHK and 3BHK interior projects in Secunderabad are delivered in 45 to 90 days depending on civil scope and material selections."
      },
      {
        question: "Why choose EverySpaces as your interior designers in Hyderabad?",
        answer: "Homeowners choose EverySpaces for design-first planning, clear BOQs, dedicated project management, and dependable post-installation support across Hyderabad."
      }
    ],
    nearbyAreas: ["Begumpet","Trimulgherry","Maredpally","Bolarum","Tarnaka","Himayatnagar"],
    specialties: ["Modular Kitchen", "Wardrobe Design", "Living Room Interiors", "Bedroom Interiors", "Full Home Interiors"],
    lifestyleDescription: "Secunderabad is one of Hyderabad's fast-growing residential zones with a mix of premium apartments, gated communities, and independent homes. Our designs focus on practical storage, climate-ready materials, and contemporary aesthetics suited to Hyderabad lifestyles.",
    landmarks: [
      {
        name: "Residential Communities in Secunderabad",
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
      localityName="Secunderabad"
      slug="secunderabad"
      projectCount="19+ Projects"
      heroImage={gallery11}
      galleryImages={[gallery25, gallery26, gallery27, gallery1, gallery2, gallery3, gallery4, gallery11]}
      description="Top interior designers in Secunderabad, Hyderabad for modular kitchen, wardrobe design, and full home interiors."
      seo={seo}
    />
  );
};

export default Malleshwaram;

