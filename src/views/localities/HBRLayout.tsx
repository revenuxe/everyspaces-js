"use client";

import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";
import gallery22 from "@/assets/gallery-22.jpg";
import gallery23 from "@/assets/gallery-23.jpg";
import gallery24 from "@/assets/gallery-24.jpg";

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
      "everyspaces hbr layout studio"
    ],
    ogTitle: "Interior Designers in HBR Layout | EverySpaces - Your Local Design Studio",
    ogDescription: "HBR Layout's local interior experts. 30+ projects, visit our studio. Trusted neighborhood designers!",
    faqs: [
      {
        question: "What is the cost of interior design in HBR Layout?",
        answer: "Interior design in HBR Layout costs ₹1,400 to ₹2,800 per sq ft. As local designers based in HBR Layout, EverySpaces offers competitive packages from ₹7 lakhs for 2BHK. We've completed 30+ projects in our neighborhood with 10-year warranty."
      },
      {
        question: "Is EverySpaces based in HBR Layout?",
        answer: "Yes! EverySpaces is headquartered in HBR Layout, Bangalore. This is our home locality, and we've been designing homes here for over 10 years. You can visit our studio to see material samples, discuss designs, and meet our team personally."
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
    specialties: ["Local Expertise", "Studio Visit", "Fast Service", "Neighborhood Trust", "Complete Interiors"],
    lifestyleDescription: "HBR Layout is EverySpaces's home base—a vibrant North Bangalore neighborhood known for its mix of established independent houses and modern apartment complexes. With excellent connectivity to Manyata Tech Park and the airport, HBR Layout attracts families and professionals seeking quality living in a well-planned locality.",
    landmarks: [
      { name: "EverySpaces Design Studio", description: "Our HBR Layout studio is open for visits. See live material samples, browse 3D designs, and meet our team to discuss your dream home interiors in person.", type: "landmark" as const },
      { name: "Kalyannagar & HRBR Layout", description: "Premium residential extensions with upscale apartments and villas requiring contemporary designs with family-friendly layouts.", type: "residential" as const },
      { name: "Hennur Road Corridor", description: "The rapidly developing Hennur Road brings new apartments and villa projects, creating demand for modern interior solutions and smart home designs.", type: "lifestyle" as const },
      { name: "HBR Layout Parks & Green Spaces", description: "Well-maintained parks inspire residents to bring nature indoors with biophilic designs, indoor plants, and natural material finishes.", type: "nature" as const }
    ],
    designTips: [
      { title: "Visit Our Local Studio First", description: "Being in HBR Layout, you can visit our design studio to touch and feel materials, see hardware options, and discuss designs face-to-face before committing." },
      { title: "Plan for North Bangalore's Growing Families", description: "HBR Layout's family-oriented community benefits from spacious kitchens for Indian cooking, dedicated study areas for children, and guest-ready living rooms." },
      { title: "Optimize for Cross-Ventilation", description: "HBR Layout's well-planned blocks allow good cross-ventilation. Position furniture to maximize airflow and use light curtains to maintain brightness." },
      { title: "Invest in Quality for Long-Term Living", description: "As a settled residential area, invest in premium materials and timeless designs that age gracefully rather than trendy elements that date quickly." }
    ]
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
