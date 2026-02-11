import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery7 from "@/assets/gallery-7.jpg?webp";
import gallery8 from "@/assets/gallery-8.jpg?webp";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery10 from "@/assets/gallery-10.jpg?webp";
import gallery11 from "@/assets/gallery-11.jpg?webp";
import gallery12 from "@/assets/gallery-12.jpg?webp";

const JPNagar = () => {
  const seo = {
    metaTitle: "Interior Designers in JP Nagar | Trusted Home Interiors Bangalore",
    metaDescription: "Trusted interior designers in JP Nagar, Bangalore. 35+ projects across all phases. Affordable modular kitchens, wardrobes & complete home interiors. 10-year warranty. Free consultation!",
    keywords: [
      "interior designers jp nagar",
      "best interior designers in jp nagar bangalore",
      "home interiors jp nagar",
      "modular kitchen jp nagar",
      "wardrobe design jp nagar",
      "affordable interior design jp nagar",
      "apartment interior jp nagar",
      "home renovation jp nagar bangalore",
      "interior decorators jp nagar",
      "jp nagar interior solutions"
    ],
    ogTitle: "Interior Designers in JP Nagar | Intorza - Trusted Home Interiors",
    ogDescription: "JP Nagar interior experts. 35+ projects, all phases covered. Affordable quality. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in JP Nagar?",
        answer: "Interior design in JP Nagar costs ₹1,400 to ₹2,800 per sq ft. Intorza offers packages from ₹7.5 lakhs for 2BHK in JP Nagar. We've completed 35+ projects across all JP Nagar phases with quality materials and 10-year warranty."
      },
      {
        question: "Which JP Nagar phases do you serve?",
        answer: "We serve all JP Nagar phases - 1st Phase to 9th Phase, including Brigade Road, Dollars Colony, and Raghuvanahalli areas. Our portfolio includes apartments in Mantri, Brigade, and independent houses across JP Nagar."
      },
      {
        question: "Do you offer traditional and modern designs in JP Nagar?",
        answer: "Yes! JP Nagar has a mix of families preferring traditional and modern designs. We create contemporary designs with ethnic touches, elaborate pooja rooms, and traditional aesthetics alongside modern minimalist interiors based on client preference."
      },
      {
        question: "How do you handle older apartments in JP Nagar?",
        answer: "We specialize in renovating older JP Nagar apartments. Our team handles structural modifications, electrical upgrades, plumbing changes, and complete modernization while preserving the building's integrity and obtaining necessary permissions."
      }
    ],
    nearbyAreas: ["1st-9th Phase JP Nagar", "Bannerghatta Road", "Jayanagar", "BTM Layout", "Sarakki", "Dollars Colony"],
    specialties: ["Family Home Design", "Traditional Pooja Room", "Modular Kitchen", "Bedroom Interior", "Dining Area Design"],
    lifestyleDescription: "JP Nagar is one of Bangalore's most established and family-friendly neighborhoods, spanning nine well-organized phases. Known for its tree-lined streets, excellent schools, and the famous Bannerghatta Road connectivity, JP Nagar attracts families seeking a perfect balance of traditional values and modern convenience.",
    landmarks: [
      { name: "JP Nagar 6th Phase & Sarakki Market", description: "The commercial hub of JP Nagar with the popular Sarakki weekend market. Homes here blend contemporary design with functional Indian kitchen layouts.", type: "lifestyle" as const },
      { name: "Bannerghatta National Park Proximity", description: "The nearby national park inspires nature-themed interiors with earthy tones, wooden accents, and biophilic elements in JP Nagar homes.", type: "nature" as const },
      { name: "Dollars Colony & Premium Phases", description: "Upscale residential pockets with independent houses and premium apartments requiring sophisticated interior treatments.", type: "residential" as const },
      { name: "JP Nagar Metro Station", description: "Excellent metro connectivity makes JP Nagar accessible. Modern apartments near the metro need space-efficient, contemporary designs.", type: "landmark" as const }
    ],
    designTips: [
      { title: "Design for Multi-Generational Living", description: "JP Nagar's family homes often house three generations. Create distinct zones for elders, parents, and children with shared family spaces that bring everyone together." },
      { title: "Optimize the Indian Kitchen", description: "JP Nagar families love cooking. Design spacious kitchens with separate wet and dry areas, ample storage for utensils, and powerful chimney placement for Indian cooking." },
      { title: "Create Inviting Dining Areas", description: "Family meals are central to JP Nagar life. Invest in a 6-8 seater dining setup with warm pendant lighting and a nearby crockery display unit." },
      { title: "Add Green Balcony Gardens", description: "JP Nagar's pleasant weather is perfect for balcony gardens. Design planter boxes, vertical gardens, and cozy seating for evening tea time." }
    ]
  };

  return (
    <LocalityPageTemplate
      localityName="JP Nagar"
      slug="jp-nagar"
      projectCount="35+ Projects"
      heroImage={gallery1}
      galleryImages={[gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery1]}
      description="Trusted interior designers in JP Nagar, Bangalore. Affordable home interiors, modular solutions & quality craftsmanship."
      seo={seo}
    />
  );
};

export default JPNagar;
