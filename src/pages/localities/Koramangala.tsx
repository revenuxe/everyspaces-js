import LocalityPageTemplate from "./LocalityPageTemplate";
import heroImage from "@/assets/locality-koramangala.jpg?webp";
import gallery25 from "@/assets/gallery-25.jpg?webp";
import gallery26 from "@/assets/gallery-26.jpg?webp";
import gallery27 from "@/assets/gallery-27.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery4 from "@/assets/gallery-4.jpg?webp";
import gallery5 from "@/assets/gallery-5.jpg?webp";

const Koramangala = () => {
  const seo = {
    metaTitle: "Best Interior Designers in Koramangala | Luxury Home Interiors Bangalore",
    metaDescription: "Premium interior designers in Koramangala, Bangalore. 41+ luxury projects across all blocks. Designer modular kitchens, walk-in wardrobes & elegant living spaces. 10-year warranty. Free consultation!",
    keywords: [
      "interior designers koramangala",
      "best interior designers in koramangala bangalore",
      "home interiors koramangala",
      "modular kitchen koramangala",
      "luxury interior design koramangala",
      "apartment interior koramangala",
      "home renovation koramangala",
      "interior decorators koramangala bangalore",
      "designer interiors koramangala",
      "koramangala home makeover"
    ],
    ogTitle: "Best Interior Designers in Koramangala | Intorza - Luxury Home Interiors",
    ogDescription: "Premium Koramangala interior designers. 41+ luxury projects, all blocks covered. Free consultation!",
    faqs: [
      {
        question: "What is the interior design cost in Koramangala, Bangalore?",
        answer: "Interior design in Koramangala typically costs ₹2,000 to ₹4,500 per sq ft for premium finishes. Intorza offers luxury packages from ₹10 lakhs for 2BHK. We've completed 41+ projects across Koramangala 1st to 8th Block with premium materials and 10-year warranty."
      },
      {
        question: "Which Koramangala blocks do you serve?",
        answer: "We serve all Koramangala blocks - 1st Block to 8th Block, including Forum Mall area, Sony World Junction, and 80 Feet Road. Our portfolio includes premium apartments, penthouses, and independent houses across Koramangala."
      },
      {
        question: "Do you design startup offices in Koramangala?",
        answer: "Yes! Besides homes, we design startup offices and co-working spaces in Koramangala. We offer modern, productive workspace designs with ergonomic furniture, collaborative areas, and branding integration tailored for Koramangala's startup culture."
      },
      {
        question: "What interior styles work best for Koramangala homes?",
        answer: "Koramangala residents prefer contemporary, industrial-chic, and minimalist designs. We also create fusion designs blending modern aesthetics with warm Indian elements. Our designs suit the young, urban demographic of Koramangala."
      }
    ],
    nearbyAreas: ["1st-8th Block Koramangala", "Ejipura", "HSR Layout", "BTM Layout", "Madiwala", "Forum Mall Area"],
    specialties: ["Luxury Interior", "Walk-in Wardrobes", "Designer Kitchen", "Living Room Makeover", "Balcony Design"]
  };

  return (
    <LocalityPageTemplate
      localityName="Koramangala"
      slug="koramangala"
      projectCount="41+ Projects"
      heroImage={heroImage}
      galleryImages={[gallery25, gallery26, gallery27, gallery1, gallery2, gallery3, gallery4, gallery5]}
      description="Premium interior designers in Koramangala, Bangalore. Luxury home interiors, designer wardrobes & elegant living spaces."
      seo={seo}
    />
  );
};

export default Koramangala;
