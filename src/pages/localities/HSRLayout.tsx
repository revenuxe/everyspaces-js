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
    metaTitle: "Interior Designers in HSR Layout | Affordable Home Interiors Bangalore",
    metaDescription: "Trusted interior designers in HSR Layout, Bangalore. 52+ projects across all sectors. Modern modular kitchens, space-saving wardrobes & stylish living rooms. Starting ₹8 lakhs. 10-year warranty!",
    keywords: [
      "interior designers hsr layout",
      "best interior designers in hsr layout bangalore",
      "home interiors hsr layout",
      "modular kitchen hsr layout",
      "wardrobe design hsr layout",
      "affordable interior design hsr layout",
      "apartment interior hsr layout",
      "home renovation hsr layout bangalore",
      "interior decorators hsr layout",
      "budget interior design hsr layout"
    ],
    ogTitle: "Interior Designers in HSR Layout | Intorza - Affordable Quality Interiors",
    ogDescription: "HSR Layout interior experts. 52+ projects, affordable packages from ₹8 lakhs. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in HSR Layout?",
        answer: "Interior design in HSR Layout ranges from ₹1,500 to ₹3,000 per sq ft. Intorza offers affordable packages starting ₹8 lakhs for 2BHK in HSR Layout. We've completed 52+ projects across all HSR sectors with quality materials and 10-year warranty."
      },
      {
        question: "Which sectors in HSR Layout do you serve?",
        answer: "We serve all HSR Layout sectors - Sector 1 to Sector 7, including 27th Main, 19th Main, and BDA Complex areas. Our portfolio includes apartments in Salarpuria, Sobha, and independent houses across HSR Layout."
      },
      {
        question: "Do you offer budget-friendly interiors in HSR Layout?",
        answer: "Yes! We offer flexible packages for HSR Layout - Basic (₹1,500/sq ft), Premium (₹2,200/sq ft), and Luxury (₹3,000/sq ft). All packages include quality materials, professional installation, and 10-year warranty without compromising on design."
      },
      {
        question: "How do you handle parking constraints during HSR Layout projects?",
        answer: "We're experienced with HSR Layout's parking challenges. We schedule material delivery during off-peak hours, use smaller vehicles when needed, and coordinate with apartment associations. Our project managers handle all logistics seamlessly."
      }
    ],
    nearbyAreas: ["Sector 1-7 HSR", "Bommanahalli", "Koramangala", "BTM Layout", "Parangi Palya", "Agara Lake"],
    specialties: ["Space-Saving Solutions", "Modular Kitchen", "Compact Wardrobes", "Modern Living Room", "Pooja Room Design"]
  };

  return (
    <LocalityPageTemplate
      localityName="HSR Layout"
      slug="hsr-layout"
      projectCount="52+ Projects"
      heroImage={heroImage}
      galleryImages={[gallery17, gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24]}
      description="Best interior designers in HSR Layout, Bangalore. Contemporary home interiors, modular kitchens & space-saving solutions."
      seo={seo}
    />
  );
};

export default HSRLayout;
