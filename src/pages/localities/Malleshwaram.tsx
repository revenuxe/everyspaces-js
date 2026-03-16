import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery11 from "@/assets/gallery-11.jpg?webp";
import gallery25 from "@/assets/gallery-25.jpg?webp";
import gallery26 from "@/assets/gallery-26.jpg?webp";
import gallery27 from "@/assets/gallery-27.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery4 from "@/assets/gallery-4.jpg?webp";

const Malleshwaram = () => {
  const seo = {
    metaTitle: "Interior Designers in Malleshwaram | Heritage & Classic Home Interiors Bangalore",
    metaDescription: "Heritage-conscious interior designers in Malleshwaram, Bangalore. 19+ projects blending classic elegance with modern functionality. Traditional kitchens, wooden interiors & timeless designs!",
    keywords: [
      "interior designers malleshwaram",
      "best interior designers in malleshwaram bangalore",
      "home interiors malleshwaram",
      "traditional kitchen malleshwaram",
      "heritage interior design malleshwaram",
      "wooden interior malleshwaram",
      "home renovation malleshwaram bangalore",
      "interior decorators malleshwaram",
      "classic home design malleshwaram",
      "west bangalore interiors"
    ],
    ogTitle: "Interior Designers in Malleshwaram | EverySpaces - Heritage & Classic Designs",
    ogDescription: "Malleshwaram interior experts. 19+ projects, heritage specialists. Classic elegance. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Malleshwaram?",
        answer: "Interior design in Malleshwaram costs ₹1,800 to ₹3,500 per sq ft for quality heritage-style work. EverySpaces offers packages from ₹9 lakhs for 2BHK. We've completed 19+ projects respecting Malleshwaram's classic aesthetic."
      },
      {
        question: "Do you specialize in heritage home renovations?",
        answer: "Yes! Malleshwaram has many heritage homes. We specialize in renovating traditional bungalows, preserving original elements like wooden doors, vintage tiles, and architectural details while adding modern conveniences."
      },
      {
        question: "Which areas in Malleshwaram do you serve?",
        answer: "We serve all Malleshwaram areas including 8th Cross, 18th Cross, Sampige Road, Margosa Road, and surrounding areas. Our portfolio includes heritage bungalows, independent houses, and apartments near Sankey Tank."
      },
      {
        question: "Can you create wooden interiors for Malleshwaram homes?",
        answer: "Absolutely! We specialize in solid wood interiors - teak wood kitchens, rosewood furniture, traditional wooden doors, and carved elements that match Malleshwaram's classic aesthetic. We source premium Indian hardwoods."
      }
    ],
    nearbyAreas: ["8th Cross Malleshwaram", "Sampige Road", "Margosa Road", "Rajajinagar", "Sadashivanagar", "Sankey Tank Area"],
    specialties: ["Heritage Renovation", "Wooden Interiors", "Traditional Kitchen", "Classic Design", "Antique Restoration"],
    lifestyleDescription: "Malleshwaram is Bangalore's heritage jewel, one of the oldest planned localities dating back to the 1890s. Known for its iconic 8th Cross shopping street, Sankey Tank, and beautiful tree-lined avenues, Malleshwaram combines old-world Bangalore charm with a strong cultural identity that its residents proudly preserve.",
    landmarks: [
      { name: "8th Cross & Sampige Road", description: "The iconic heritage shopping streets with century-old establishments. Homes near here reflect traditional Bangalore aesthetics with wooden facades and classic proportions.", type: "landmark" as const },
      { name: "Sankey Tank", description: "The picturesque lake creates a peaceful atmosphere. Lake-facing properties benefit from nature-inspired interiors with panoramic window treatments.", type: "nature" as const },
      { name: "Malleshwaram Heritage Bungalows", description: "Grand colonial-era bungalows with original wooden staircases, carved pillars, and spacious verandahs that deserve respectful modernization.", type: "residential" as const },
      { name: "Margosa Road Cultural District", description: "The cultural hub with classical music venues and art galleries. Homes here often feature music rooms, art display walls, and culturally-rich interiors.", type: "lifestyle" as const }
    ],
    designTips: [
      { title: "Preserve Century-Old Woodwork", description: "Malleshwaram homes have irreplaceable original wood elements. Professional restoration of teak doors, rosewood furniture, and carved pillars adds immense value." },
      { title: "Design Around the Verandah", description: "Classic Malleshwaram bungalows have beautiful verandahs. Enhance them with traditional seating, jhoola (swing), and potted plants for a quintessential old Bangalore feel." },
      { title: "Create a Music or Art Room", description: "Malleshwaram's cultural community appreciates dedicated spaces for classical music practice or art display with proper acoustics and gallery lighting." },
      { title: "Use Traditional Flooring Wisely", description: "If your home has original Athangudi tiles or red oxide flooring, restore them rather than replacing with modern tiles. They add irreplaceable character." }
    ]
  };

  return (
    <LocalityPageTemplate
      localityName="Malleshwaram"
      slug="malleshwaram"
      projectCount="19+ Projects"
      heroImage={gallery11}
      galleryImages={[gallery25, gallery26, gallery27, gallery1, gallery2, gallery3, gallery4, gallery11]}
      description="Heritage-conscious interior designers in Malleshwaram, Bangalore. Classic designs with modern functionality."
      seo={seo}
    />
  );
};

export default Malleshwaram;
