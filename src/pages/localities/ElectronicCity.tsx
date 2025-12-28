import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery4 from "@/assets/gallery-4.jpg?webp";
import gallery27 from "@/assets/gallery-27.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery5 from "@/assets/gallery-5.jpg?webp";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery7 from "@/assets/gallery-7.jpg?webp";

const ElectronicCity = () => {
  const seo = {
    metaTitle: "Interior Designers in Electronic City | Smart Home Interiors Bangalore",
    metaDescription: "Expert interior designers in Electronic City, Bangalore. 26+ projects in Phase 1 & 2. Smart home integration, modern modular kitchens & tech-savvy living spaces. 10-year warranty!",
    keywords: [
      "interior designers electronic city",
      "best interior designers in electronic city bangalore",
      "home interiors electronic city",
      "modular kitchen electronic city",
      "smart home interior electronic city",
      "apartment interior electronic city phase 1",
      "home renovation electronic city phase 2",
      "interior decorators electronic city bangalore",
      "tech park area interiors",
      "electronic city home design"
    ],
    ogTitle: "Interior Designers in Electronic City | Intorza - Smart Home Specialists",
    ogDescription: "Electronic City interior experts. 26+ projects, smart home solutions. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Electronic City?",
        answer: "Interior design in Electronic City costs ₹1,400 to ₹2,800 per sq ft. Intorza offers packages from ₹7.5 lakhs for 2BHK in Electronic City. We've completed 26+ projects in Phase 1 & 2 with modern designs and 10-year warranty."
      },
      {
        question: "Do you offer smart home integration in Electronic City?",
        answer: "Yes! Electronic City's tech-savvy residents often prefer smart home features. We integrate automated lighting, smart locks, voice-controlled appliances, motorized curtains, and home automation systems into our interior designs."
      },
      {
        question: "Which areas in Electronic City do you cover?",
        answer: "We serve Electronic City Phase 1, Phase 2, Neeladri Nagar, Velankani, Bommasandra, and Hebbagodi. Our portfolio includes apartments in Prestige, Salarpuria, Purva, and independent villas in the area."
      },
      {
        question: "Do you design interiors for Electronic City villas?",
        answer: "Absolutely! We design villa interiors in Electronic City including Velankani, Bommasandra, and surrounding villa communities. Our villa designs include landscaping coordination, outdoor living spaces, and large-format interiors."
      }
    ],
    nearbyAreas: ["Phase 1 Electronic City", "Phase 2 Electronic City", "Bommasandra", "Hebbagodi", "Neeladri Nagar", "HSR Layout"],
    specialties: ["Smart Home Design", "Modern Interiors", "Tech-Savvy Solutions", "Modular Kitchen", "Home Automation Ready"]
  };

  return (
    <LocalityPageTemplate
      localityName="Electronic City"
      slug="electronic-city"
      projectCount="26+ Projects"
      heroImage={gallery4}
      galleryImages={[gallery27, gallery1, gallery2, gallery3, gallery5, gallery6, gallery7, gallery4]}
      description="Expert interior designers in Electronic City, Bangalore. Tech park area specialists with smart home solutions."
      seo={seo}
    />
  );
};

export default ElectronicCity;
