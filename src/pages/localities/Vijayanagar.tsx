import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery16 from "@/assets/gallery-16.jpg?webp";
import gallery8 from "@/assets/gallery-8.jpg?webp";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery10 from "@/assets/gallery-10.jpg?webp";
import gallery11 from "@/assets/gallery-11.jpg?webp";
import gallery12 from "@/assets/gallery-12.jpg?webp";
import gallery13 from "@/assets/gallery-13.jpg?webp";
import gallery14 from "@/assets/gallery-14.jpg?webp";

const Vijayanagar = () => {
  const seo = {
    metaTitle: "Interior Designers in Vijayanagar | Complete Home Transformation Bangalore",
    metaDescription: "Trusted interior designers in Vijayanagar, Bangalore. 20+ complete home transformations. Modern modular kitchens, smart storage & family-friendly designs. 10-year warranty!",
    keywords: [
      "interior designers vijayanagar",
      "best interior designers in vijayanagar bangalore",
      "home interiors vijayanagar",
      "modular kitchen vijayanagar",
      "complete home interior vijayanagar",
      "apartment interior vijayanagar",
      "home renovation vijayanagar bangalore",
      "interior decorators vijayanagar",
      "west bangalore interiors vijayanagar",
      "family home design vijayanagar"
    ],
    ogTitle: "Interior Designers in Vijayanagar | Intorza - Complete Home Transformation",
    ogDescription: "Vijayanagar interior experts. 20+ projects, complete transformations. Family-focused. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Vijayanagar?",
        answer: "Interior design in Vijayanagar costs ₹1,400 to ₹2,800 per sq ft. Intorza offers packages from ₹7.5 lakhs for 2BHK. We've completed 20+ complete home transformations in Vijayanagar with 10-year warranty."
      },
      {
        question: "Do you specialize in family homes in Vijayanagar?",
        answer: "Yes! Vijayanagar is known for family-oriented homes. We design child-safe interiors, elder-friendly features, spacious storage, functional kitchens for Indian cooking, and community-friendly layouts suited for joint families."
      },
      {
        question: "Which Vijayanagar areas do you cover?",
        answer: "We serve all Vijayanagar including RPC Layout, Attiguppe, Hosahalli, Hampi Nagar, and surrounding areas. Our portfolio includes independent houses, BDA flats, and apartments across Vijayanagar."
      },
      {
        question: "Can you handle complete home renovation in Vijayanagar?",
        answer: "Absolutely! We offer turnkey renovation services - demolition, civil work, electrical upgrade, plumbing, interiors, and finishing. Our project managers coordinate everything for hassle-free complete home transformation."
      }
    ],
    nearbyAreas: ["RPC Layout", "Attiguppe", "Hosahalli", "Hampi Nagar", "Rajajinagar", "Basaveshwaranagar"],
    specialties: ["Complete Renovation", "Family Home Design", "Child-Safe Interiors", "Elder-Friendly Features", "Storage Solutions"],
    lifestyleDescription: "Vijayanagar is West Bangalore's most sought-after family neighborhood, known for its well-maintained BDA layouts, excellent schools, and strong community bonds. With a perfect mix of independent houses and modern apartments, Vijayanagar families invest in complete home transformations that cater to all generations under one roof.",
    landmarks: [
      { name: "RPC Layout & Chord Road", description: "The premium residential extension with spacious independent houses. Homes here feature formal living rooms, large kitchens, and dedicated pooja spaces.", type: "residential" as const },
      { name: "Vijayanagar BDA Complex", description: "The commercial center with modern apartments needing contemporary interiors that still respect the neighborhood's family-oriented values.", type: "lifestyle" as const },
      { name: "Attiguppe Metro & Connectivity", description: "Metro connectivity has boosted Vijayanagar's appeal. Modern apartments near the station benefit from smart, space-efficient designs.", type: "landmark" as const },
      { name: "Hosahalli Green Corridor", description: "Tree-lined residential streets inspiring nature-themed interiors with indoor gardens, wooden elements, and earthy color palettes.", type: "nature" as const }
    ],
    designTips: [
      { title: "Design for Joint Family Harmony", description: "Vijayanagar's joint families need private bedrooms with shared common areas. Create visual separation using partitions, level changes, and furniture placement." },
      { title: "Add Elder-Friendly Features", description: "Include grab bars in bathrooms, non-slip flooring, wider doorways, lever-type handles, and night lights in hallways for senior family members." },
      { title: "Create Child-Safe Environments", description: "Round furniture corners, secure heavy furniture to walls, use non-toxic paints, install window locks, and choose durable, easy-clean surfaces." },
      { title: "Maximize Storage Throughout", description: "Vijayanagar families accumulate belongings over generations. Plan storage in every room—loft spaces, under-bed drawers, and built-in cabinets." }
    ]
  };

  return (
    <LocalityPageTemplate
      localityName="Vijayanagar"
      slug="vijayanagar"
      projectCount="20+ Projects"
      heroImage={gallery16}
      galleryImages={[gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery16]}
      description="Trusted interior designers in Vijayanagar, Bangalore. Complete home transformation with modern designs."
      seo={seo}
    />
  );
};

export default Vijayanagar;
