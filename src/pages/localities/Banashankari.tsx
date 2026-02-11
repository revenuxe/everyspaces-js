import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery10 from "@/assets/gallery-10.jpg?webp";
import gallery18 from "@/assets/gallery-18.jpg?webp";
import gallery19 from "@/assets/gallery-19.jpg?webp";
import gallery20 from "@/assets/gallery-20.jpg?webp";
import gallery21 from "@/assets/gallery-21.jpg?webp";
import gallery22 from "@/assets/gallery-22.jpg?webp";
import gallery23 from "@/assets/gallery-23.jpg?webp";
import gallery24 from "@/assets/gallery-24.jpg?webp";

const Banashankari = () => {
  const seo = {
    metaTitle: "Interior Designers in Banashankari | Traditional & Modern Home Interiors Bangalore",
    metaDescription: "Experienced interior designers in Banashankari, Bangalore. 27+ projects across all stages. Traditional pooja rooms, modern modular kitchens & family-friendly designs. 10-year warranty!",
    keywords: [
      "interior designers banashankari",
      "best interior designers in banashankari bangalore",
      "home interiors banashankari",
      "modular kitchen banashankari",
      "traditional interior design banashankari",
      "pooja room design banashankari",
      "apartment interior banashankari",
      "home renovation banashankari bangalore",
      "interior decorators banashankari",
      "south bangalore interiors"
    ],
    ogTitle: "Interior Designers in Banashankari | Intorza - Traditional & Modern Designs",
    ogDescription: "Banashankari interior experts. 27+ projects, traditional & modern. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Banashankari?",
        answer: "Interior design in Banashankari costs ₹1,400 to ₹2,800 per sq ft. Intorza offers packages from ₹7.5 lakhs for 2BHK. We've completed 27+ projects across Banashankari 1st to 6th Stage with traditional and modern designs."
      },
      {
        question: "Do you design traditional pooja rooms in Banashankari?",
        answer: "Yes! Banashankari families often prefer elaborate traditional pooja rooms. We create customized mandirs with teak wood, traditional carvings, brass work, and proper vastu alignment. We also design modern pooja units with backlighting."
      },
      {
        question: "Which Banashankari stages do you cover?",
        answer: "We serve all Banashankari stages - 1st Stage to 6th Stage, including Kathriguppe, Padmanabhanagar, and surrounding areas. Our portfolio includes independent houses, apartments, and heritage home renovations."
      },
      {
        question: "Can you renovate old Banashankari homes?",
        answer: "Absolutely! Banashankari has many older properties. We specialize in complete renovations - upgrading electrical systems, modernizing kitchens, adding contemporary elements while preserving the home's character and family memories."
      }
    ],
    nearbyAreas: ["1st-6th Stage Banashankari", "Kathriguppe", "Padmanabhanagar", "JP Nagar", "Jayanagar", "Kumaraswamy Layout"],
    specialties: ["Traditional Design", "Pooja Room", "Family Home Interior", "Kitchen Renovation", "Vastu-Compliant Design"],
    lifestyleDescription: "Banashankari is one of Bangalore's most culturally rich residential areas, known for the famous Banashankari Temple, traditional markets, and strong community bonds. Families here value heritage, Vastu compliance, and designs that honor South Indian traditions while embracing modern comfort.",
    landmarks: [
      { name: "Banashankari Temple", description: "The iconic temple defines the neighborhood's spiritual character. Homes near the temple often feature elaborate pooja rooms and traditional architectural elements.", type: "landmark" as const },
      { name: "ISKON Temple Area", description: "The spiritual corridor attracts families who prefer Vastu-compliant designs with dedicated meditation spaces and serene interiors.", type: "landmark" as const },
      { name: "Kathriguppe & Padmanabhanagar", description: "Established residential areas with independent houses perfect for traditional South Indian kitchen designs and spacious family layouts.", type: "residential" as const },
      { name: "Banashankari BDA Complex", description: "The commercial hub with modern apartments needing contemporary designs that blend with the neighborhood's traditional character.", type: "lifestyle" as const }
    ],
    designTips: [
      { title: "Design a Traditional Pooja Room", description: "Banashankari families value elaborate pooja rooms. Use teak wood shelving, brass bell holders, marble flooring, and warm backlighting for a sacred ambiance." },
      { title: "Incorporate Vastu Principles", description: "Place the kitchen in the southeast, master bedroom in southwest, and pooja room in the northeast. Use warm earth tones and avoid dark colors in prayer areas." },
      { title: "Plan for Joint Family Living", description: "Many Banashankari homes house joint families. Design flexible spaces with privacy partitions, multiple storage zones, and a large communal kitchen." },
      { title: "Blend Traditional with Modern", description: "Use traditional carved wood elements alongside modern modular kitchen fittings. Brass and copper accents complement both classic and contemporary aesthetics." }
    ]
  };

  return (
    <LocalityPageTemplate
      localityName="Banashankari"
      slug="banashankari"
      projectCount="27+ Projects"
      heroImage={gallery10}
      galleryImages={[gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24, gallery10]}
      description="Best interior designers in Banashankari, Bangalore. Traditional & contemporary home interior solutions."
      seo={seo}
    />
  );
};

export default Banashankari;
