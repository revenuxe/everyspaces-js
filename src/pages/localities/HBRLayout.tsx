import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery17 from "@/assets/gallery-17.jpg?webp";
import gallery18 from "@/assets/gallery-18.jpg?webp";
import gallery19 from "@/assets/gallery-19.jpg?webp";
import gallery20 from "@/assets/gallery-20.jpg?webp";
import gallery21 from "@/assets/gallery-21.jpg?webp";
import gallery22 from "@/assets/gallery-22.jpg?webp";
import gallery23 from "@/assets/gallery-23.jpg?webp";
import gallery24 from "@/assets/gallery-24.jpg?webp";

const HBRLayout = () => {
  const seo = {
    metaTitle: "Interior Designers in HBR Layout | Local Experts Home Interiors Bangalore",
    metaDescription: "Local expert interior designers in HBR Layout, Bangalore. 30+ projects in our home locality. Modern modular kitchens, wardrobes & complete home interiors. 10-year warranty. Visit our studio!",
    keywords: [
      "interior designers hbr layout",
      "best interior designers in hbr layout bangalore",
      "home interiors hbr layout",
      "modular kitchen hbr layout",
      "local interior design hbr layout",
      "apartment interior hbr layout",
      "home renovation hbr layout bangalore",
      "interior decorators hbr layout",
      "north bangalore interiors hbr layout",
      "intorza hbr layout studio"
    ],
    ogTitle: "Interior Designers in HBR Layout | Intorza - Your Local Design Studio",
    ogDescription: "HBR Layout's local interior experts. 30+ projects, visit our studio. Trusted neighborhood designers!",
    faqs: [
      {
        question: "What is the cost of interior design in HBR Layout?",
        answer: "Interior design in HBR Layout costs ₹1,400 to ₹2,800 per sq ft. As local designers based in HBR Layout, Intorza offers competitive packages from ₹7 lakhs for 2BHK. We've completed 30+ projects in our neighborhood with 10-year warranty."
      },
      {
        question: "Is Intorza based in HBR Layout?",
        answer: "Yes! Intorza is headquartered in HBR Layout, Bangalore. This is our home locality, and we've been designing homes here for over 10 years. You can visit our studio to see material samples, discuss designs, and meet our team personally."
      },
      {
        question: "Which HBR Layout blocks do you cover?",
        answer: "We serve all HBR Layout blocks - 1st to 5th Block, Kalyannagar, Babusapalya, HRBR Layout, and surrounding areas. As local designers, we know every street and can reach any HBR Layout project within 15 minutes."
      },
      {
        question: "Do you offer after-sales service in HBR Layout?",
        answer: "Absolutely! Being local to HBR Layout, we provide the fastest after-sales service. Our team can reach your home within hours for any warranty issues. We believe in building long-term relationships with our HBR Layout neighbors."
      }
    ],
    nearbyAreas: ["1st-5th Block HBR Layout", "Kalyannagar", "Babusapalya", "HRBR Layout", "Hennur", "RT Nagar"],
    specialties: ["Local Expertise", "Studio Visit", "Fast Service", "Neighborhood Trust", "Complete Interiors"]
  };

  return (
    <LocalityPageTemplate
      localityName="HBR Layout"
      slug="hbr-layout"
      projectCount="30+ Projects"
      heroImage={gallery17}
      galleryImages={[gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24, gallery17]}
      description="Expert interior designers in HBR Layout, Bangalore. Modern apartment interiors & complete home transformation solutions."
      seo={seo}
    />
  );
};

export default HBRLayout;
