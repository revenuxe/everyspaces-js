import LocalityPageTemplate from "./LocalityPageTemplate";
import heroImage from "@/assets/locality-hsr.jpg?webp";
import gallery17 from "@/assets/gallery-17.jpg?webp";
import gallery18 from "@/assets/gallery-18.jpg?webp";
import gallery19 from "@/assets/gallery-19.jpg?webp";
import gallery20 from "@/assets/gallery-20.jpg?webp";
import gallery21 from "@/assets/gallery-21.jpg?webp";
import gallery22 from "@/assets/gallery-22.jpg?webp";
import gallery23 from "@/assets/gallery-23.jpg?webp";
import gallery24 from "@/assets/gallery-24.jpg?webp";

const HSRLayout = () => {
  const seo = {
    metaTitle: "Best Interior Designers in HSR Layout | Premium Home Interiors Bangalore",
    metaDescription: "Top interior designers in HSR Layout, Bangalore. 52+ projects completed across all sectors. Premium modular kitchens, smart wardrobes & modern living spaces. 10-year warranty. Free consultation!",
    keywords: [
      "interior designers hsr layout",
      "best interior designers in hsr layout bangalore",
      "home interiors hsr layout",
      "modular kitchen hsr layout",
      "wardrobe design hsr layout",
      "apartment interior hsr layout",
      "home renovation hsr layout",
      "interior decorators hsr layout bangalore",
      "hsr layout home makeover",
      "modern interior design hsr"
    ],
    ogTitle: "Best Interior Designers in HSR Layout | EverySpaces - Modern Home Interiors",
    ogDescription: "Transform your HSR Layout home with EverySpaces. 52+ projects, all sectors covered. Free consultation!",
    faqs: [
      {
        question: "What is the interior design cost in HSR Layout, Bangalore?",
        answer: "Interior design in HSR Layout costs ₹1,800 to ₹3,500 per sq ft depending on scope. EverySpaces offers packages from ₹8 lakhs for 2BHK. We've completed 52+ projects across HSR Sectors 1-7 with premium materials and 10-year warranty."
      },
      {
        question: "Which HSR Layout sectors do you cover?",
        answer: "We serve all HSR Layout sectors - Sector 1 to Sector 7, including BDA Complex, 27th Main, and Agara Lake area. Our portfolio includes apartments in Mantri Serenity, Salarpuria, and independent houses."
      },
      {
        question: "Do you design tech-enabled smart homes in HSR?",
        answer: "Absolutely! HSR Layout residents often request smart home integration. We design homes with automated lighting, smart locks, voice-controlled systems, and concealed wiring for a clutter-free modern look."
      },
      {
        question: "What makes HSR Layout homes unique for interior design?",
        answer: "HSR Layout has newer constructions with good ventilation and layouts. We leverage these advantages with open-plan designs, large windows, and contemporary aesthetics suited for the young, tech-savvy demographic."
      }
    ],
    nearbyAreas: ["Sectors 1-7 HSR", "Agara", "Koramangala", "BTM Layout", "Bommanahalli", "Kudlu Gate"],
    specialties: ["Smart Home Design", "Modular Kitchen", "Contemporary Wardrobes", "Living Room", "Home Office"],
    lifestyleDescription: "HSR Layout is Bangalore's planned residential paradise, known for its wide roads, systematic sectors, and proximity to tech parks. Popular among IT professionals and young families, this locality features modern apartments and gated communities that call for smart, contemporary interior designs with functional spaces for work and play.",
    landmarks: [
      {
        name: "27th Main Road & BDA Complex",
        description: "The commercial spine of HSR with cafes, restaurants, and premium apartments. Homes here benefit from modern, minimalist designs with smart storage.",
        type: "lifestyle" as const
      },
      {
        name: "Agara Lake & Sector 2",
        description: "Lake-facing properties command premium interiors. We design homes with large windows to capture views and biophilic elements to connect with nature.",
        type: "nature" as const
      },
      {
        name: "Sector 4 & 5 Residentials",
        description: "Family-oriented sectors with gated communities like Mantri Serenity. Spacious layouts allow for dedicated kids' rooms, study areas, and entertainment zones.",
        type: "residential" as const
      },
      {
        name: "Tech Parks Proximity",
        description: "Close to Outer Ring Road tech hubs, many residents work from home. Ergonomic home offices with good lighting and acoustics are a top request.",
        type: "landmark" as const
      }
    ],
    designTips: [
      {
        title: "Leverage High Ceilings",
        description: "Many HSR apartments have generous ceiling heights. Use vertical storage, tall bookshelves, and statement lighting to make the most of this space advantage."
      },
      {
        title: "Design a Productive Home Office",
        description: "With most HSR residents in IT, a well-designed workspace with natural light, ergonomic furniture, and video-call-friendly backgrounds is essential."
      },
      {
        title: "Create Pet-Friendly Spaces",
        description: "HSR has many pet parents! Design with scratch-resistant flooring, built-in feeding stations, and cozy nooks for your furry family members."
      },
      {
        title: "Maximize Balcony Potential",
        description: "HSR's pleasant climate makes balconies ideal for extended living. Add comfortable seating, vertical gardens, and ambient lighting for year-round enjoyment."
      }
    ]
  };

  return (
    <LocalityPageTemplate
      localityName="HSR Layout"
      slug="hsr-layout"
      projectCount="52+ Projects"
      heroImage={heroImage}
      galleryImages={[gallery17, gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24]}
      description="Top interior designers in HSR Layout, Bangalore. Premium modular kitchens, wardrobes & contemporary living spaces."
      seo={seo}
    />
  );
};

export default HSRLayout;
