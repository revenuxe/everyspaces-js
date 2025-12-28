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
    specialties: ["Traditional Design", "Pooja Room", "Family Home Interior", "Kitchen Renovation", "Vastu-Compliant Design"]
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
