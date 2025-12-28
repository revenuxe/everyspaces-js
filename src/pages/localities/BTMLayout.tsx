import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery7 from "@/assets/gallery-7.jpg?webp";
import gallery22 from "@/assets/gallery-22.jpg?webp";
import gallery23 from "@/assets/gallery-23.jpg?webp";
import gallery24 from "@/assets/gallery-24.jpg?webp";
import gallery25 from "@/assets/gallery-25.jpg?webp";
import gallery26 from "@/assets/gallery-26.jpg?webp";
import gallery27 from "@/assets/gallery-27.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";

const BTMLayout = () => {
  const seo = {
    metaTitle: "Interior Designers in BTM Layout | Affordable Home Interiors Bangalore",
    metaDescription: "Trusted interior designers in BTM Layout, Bangalore. 29+ projects in 1st & 2nd Stage. Budget-friendly modular kitchens, wardrobes & complete home makeovers. Starting ₹6.5 lakhs!",
    keywords: [
      "interior designers btm layout",
      "best interior designers in btm layout bangalore",
      "home interiors btm layout",
      "modular kitchen btm layout",
      "affordable interior design btm layout",
      "apartment interior btm layout 1st stage",
      "home renovation btm layout 2nd stage",
      "interior decorators btm layout bangalore",
      "budget interiors btm layout",
      "btm layout home design"
    ],
    ogTitle: "Interior Designers in BTM Layout | Intorza - Affordable Quality Interiors",
    ogDescription: "BTM Layout interior experts. 29+ projects, affordable from ₹6.5 lakhs. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in BTM Layout?",
        answer: "Interior design in BTM Layout costs ₹1,200 to ₹2,400 per sq ft. Intorza offers budget-friendly packages from ₹6.5 lakhs for 2BHK. We've completed 29+ projects in BTM 1st & 2nd Stage with quality materials and 10-year warranty."
      },
      {
        question: "Do you offer budget-friendly options in BTM Layout?",
        answer: "Yes! BTM Layout is popular among young professionals and we offer flexible packages. Our Basic package starts ₹1,200/sq ft, Premium at ₹1,800/sq ft. All packages include quality hardware, proper finish, and 10-year warranty."
      },
      {
        question: "Which BTM Layout stages do you cover?",
        answer: "We serve BTM 1st Stage, 2nd Stage, and surrounding areas including Madiwala, Bannerghatta Road, and JP Nagar junction. Our portfolio includes apartments, PG buildings, and independent houses across BTM Layout."
      },
      {
        question: "Can you design rental-friendly interiors in BTM Layout?",
        answer: "Absolutely! Many BTM Layout property owners seek rental-friendly interiors. We design durable, low-maintenance, and neutral-toned interiors that attract tenants while being cost-effective and easy to maintain long-term."
      }
    ],
    nearbyAreas: ["1st Stage BTM", "2nd Stage BTM", "Madiwala", "Koramangala", "HSR Layout", "JP Nagar"],
    specialties: ["Budget-Friendly Design", "Compact Solutions", "Modular Kitchen", "Rental Property Interior", "Quick Installation"]
  };

  return (
    <LocalityPageTemplate
      localityName="BTM Layout"
      slug="btm-layout"
      projectCount="29+ Projects"
      heroImage={gallery7}
      galleryImages={[gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery1, gallery7]}
      description="Trusted interior designers in BTM Layout, Bangalore. Budget-friendly home interiors with quality materials."
      seo={seo}
    />
  );
};

export default BTMLayout;
