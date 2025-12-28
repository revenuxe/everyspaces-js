import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery14 from "@/assets/gallery-14.jpg?webp";
import gallery21 from "@/assets/gallery-21.jpg?webp";
import gallery22 from "@/assets/gallery-22.jpg?webp";
import gallery23 from "@/assets/gallery-23.jpg?webp";
import gallery24 from "@/assets/gallery-24.jpg?webp";
import gallery25 from "@/assets/gallery-25.jpg?webp";
import gallery26 from "@/assets/gallery-26.jpg?webp";
import gallery27 from "@/assets/gallery-27.jpg?webp";

const Sadashivanagar = () => {
  const seo = {
    metaTitle: "Interior Designers in Sadashivanagar | Luxury Bungalow Interiors Bangalore",
    metaDescription: "Luxury interior designers in Sadashivanagar, Bangalore. 15+ premium bungalow projects. Grand living spaces, imported finishes & exclusive designs for elite homes. Free consultation!",
    keywords: [
      "interior designers sadashivanagar",
      "best interior designers in sadashivanagar bangalore",
      "luxury home interiors sadashivanagar",
      "bungalow interior design sadashivanagar",
      "premium interior design sadashivanagar",
      "villa interior sadashivanagar",
      "high-end renovation sadashivanagar bangalore",
      "interior decorators sadashivanagar",
      "elite home design sadashivanagar",
      "palace road interiors"
    ],
    ogTitle: "Interior Designers in Sadashivanagar | Intorza - Luxury Bungalow Specialists",
    ogDescription: "Sadashivanagar interior experts. 15+ luxury projects, bungalow specialists. Premium quality. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Sadashivanagar?",
        answer: "Interior design in Sadashivanagar costs ₹3,000 to ₹6,000 per sq ft for luxury finishes. Bungalow interiors start from ₹25 lakhs. Intorza has completed 15+ premium projects with imported materials and exclusive designs."
      },
      {
        question: "Do you specialize in Sadashivanagar bungalows?",
        answer: "Yes! Sadashivanagar has Bangalore's most prestigious bungalows. We specialize in grand-scale interiors - dramatic entrance foyers, formal living rooms, entertainment spaces, private suites, and landscaped outdoor areas."
      },
      {
        question: "Can you source imported materials for Sadashivanagar homes?",
        answer: "Absolutely! We source Italian marble, European hardware, imported kitchen appliances, designer lighting, and exclusive furnishings for Sadashivanagar's elite clientele. We work with premium international brands."
      },
      {
        question: "Do you work with architects for Sadashivanagar renovations?",
        answer: "Yes! We collaborate with leading architects for major Sadashivanagar renovations. We coordinate structural changes, heritage preservation, and interior design to create cohesive luxury spaces."
      }
    ],
    nearbyAreas: ["Palace Road", "Sankey Road", "Vasanth Nagar", "Malleshwaram", "Palace Guttahalli", "Jayamahal"],
    specialties: ["Luxury Bungalow", "Imported Finishes", "Grand Living Spaces", "Entertainment Room", "Private Suite Design"]
  };

  return (
    <LocalityPageTemplate
      localityName="Sadashivanagar"
      slug="sadashivanagar"
      projectCount="15+ Projects"
      heroImage={gallery14}
      galleryImages={[gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery14]}
      description="Luxury interior designers in Sadashivanagar, Bangalore. Premium bungalow & villa interior specialists."
      seo={seo}
    />
  );
};

export default Sadashivanagar;
