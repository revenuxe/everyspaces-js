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
    ogTitle: "Interior Designers in Malleshwaram | Intorza - Heritage & Classic Designs",
    ogDescription: "Malleshwaram interior experts. 19+ projects, heritage specialists. Classic elegance. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Malleshwaram?",
        answer: "Interior design in Malleshwaram costs ₹1,800 to ₹3,500 per sq ft for quality heritage-style work. Intorza offers packages from ₹9 lakhs for 2BHK. We've completed 19+ projects respecting Malleshwaram's classic aesthetic."
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
    specialties: ["Heritage Renovation", "Wooden Interiors", "Traditional Kitchen", "Classic Design", "Antique Restoration"]
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
