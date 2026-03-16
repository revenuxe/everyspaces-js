import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery13 from "@/assets/gallery-13.jpg?webp";
import gallery14 from "@/assets/gallery-14.jpg?webp";
import gallery15 from "@/assets/gallery-15.jpg?webp";
import gallery16 from "@/assets/gallery-16.jpg?webp";
import gallery17 from "@/assets/gallery-17.jpg?webp";
import gallery18 from "@/assets/gallery-18.jpg?webp";
import gallery19 from "@/assets/gallery-19.jpg?webp";
import gallery20 from "@/assets/gallery-20.jpg?webp";

const Basavanagudi = () => {
  const seo = {
    metaTitle: "Interior Designers in Basavanagudi | Heritage Home Interiors Bangalore",
    metaDescription: "Heritage-specialist interior designers in Basavanagudi, Bangalore. 18+ projects preserving old-world charm. Traditional craftsmanship, wooden interiors & culturally-rich designs. 10-year warranty!",
    keywords: [
      "interior designers basavanagudi",
      "best interior designers in basavanagudi bangalore",
      "home interiors basavanagudi",
      "heritage kitchen basavanagudi",
      "traditional interior design basavanagudi",
      "wooden interior basavanagudi",
      "home renovation basavanagudi bangalore",
      "interior decorators basavanagudi",
      "old bangalore interiors",
      "cultural home design basavanagudi"
    ],
    ogTitle: "Interior Designers in Basavanagudi | EverySpaces - Heritage Specialists",
    ogDescription: "Basavanagudi interior experts. 18+ projects, heritage preservation. Old-world charm. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Basavanagudi?",
        answer: "Interior design in Basavanagudi costs ₹1,800 to ₹4,000 per sq ft for heritage-quality work. EverySpaces offers packages from ₹9 lakhs. We've completed 18+ projects preserving Basavanagudi's old-world charm with 10-year warranty."
      },
      {
        question: "Do you preserve heritage elements in Basavanagudi homes?",
        answer: "Absolutely! Basavanagudi has Bangalore's oldest heritage homes. We specialize in preserving original Burma teak doors, vintage flooring, traditional columns, and architectural details while sensitively adding modern amenities."
      },
      {
        question: "Which areas in Basavanagudi do you serve?",
        answer: "We serve all Basavanagudi including Gandhi Bazaar, DVG Road, NR Colony, Hanumanthanagar, and surrounding areas. Our portfolio includes heritage bungalows near Bull Temple and classic Basavanagudi residences."
      },
      {
        question: "Can you design traditional South Indian kitchens?",
        answer: "Yes! We design traditional South Indian kitchens with proper provisions for agraharam-style cooking, traditional storage vessels, grinding stone spaces, and modern convenience while maintaining cultural authenticity."
      }
    ],
    nearbyAreas: ["Gandhi Bazaar", "DVG Road", "NR Colony", "Hanumanthanagar", "Jayanagar", "Shankarapuram"],
    specialties: ["Heritage Preservation", "Traditional Kitchen", "Wooden Craftsmanship", "Cultural Design", "Antique Integration"],
    lifestyleDescription: "Basavanagudi is Bangalore's cultural heart, home to the iconic Bull Temple, the vibrant Gandhi Bazaar, and some of the city's oldest heritage homes. This neighborhood demands interior designs that respect its rich architectural legacy while thoughtfully introducing modern amenities.",
    landmarks: [
      { name: "Bull Temple & Bugle Rock", description: "The ancient Nandi Temple and Bugle Rock park define Basavanagudi's heritage. Homes nearby often feature traditional stone and wood elements inspired by these landmarks.", type: "landmark" as const },
      { name: "Gandhi Bazaar", description: "The bustling traditional market street with flower vendors and old-world shops. Homes along this area benefit from sound insulation and heritage-style facades.", type: "lifestyle" as const },
      { name: "DVG Road & NR Colony", description: "Tree-lined residential streets with classic bungalows featuring original Burma teak woodwork, vintage tiles, and courtyard layouts worth preserving.", type: "residential" as const },
      { name: "Lalbagh Botanical Garden", description: "Proximity to Lalbagh inspires biophilic interiors with lush indoor gardens, natural stone elements, and earthy color palettes.", type: "nature" as const }
    ],
    designTips: [
      { title: "Preserve Original Woodwork", description: "Basavanagudi's heritage homes have beautiful Burma teak doors and windows. Restore rather than replace—professional polishing can revive decades-old wood to its former glory." },
      { title: "Respect the Courtyard Layout", description: "Traditional Basavanagudi homes center around courtyards. Maintain this open-air element while adding glass roofing or skylight options for weather protection." },
      { title: "Use Traditional South Indian Kitchen Design", description: "Incorporate traditional features like grinding stone niches, brass vessel storage, and wet-dry kitchen separation while adding modern appliances discreetly." },
      { title: "Integrate Antiques Thoughtfully", description: "Display family heirlooms, brass collectibles, and vintage furniture alongside modern pieces. Glass-front cabinets with LED lighting showcase antiques beautifully." }
    ]
  };

  return (
    <LocalityPageTemplate
      localityName="Basavanagudi"
      slug="basavanagudi"
      projectCount="18+ Projects"
      heroImage={gallery13}
      galleryImages={[gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery13]}
      description="Classic interior designers in Basavanagudi, Bangalore. Traditional South Bangalore homes with modern amenities."
      seo={seo}
    />
  );
};

export default Basavanagudi;
