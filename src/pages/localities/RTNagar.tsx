import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery15 from "@/assets/gallery-15.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery4 from "@/assets/gallery-4.jpg?webp";
import gallery5 from "@/assets/gallery-5.jpg?webp";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery7 from "@/assets/gallery-7.jpg?webp";

const RTNagar = () => {
  const seo = {
    metaTitle: "Interior Designers in RT Nagar | Affordable Quality Home Interiors Bangalore",
    metaDescription: "Affordable interior designers in RT Nagar, Bangalore. 17+ projects with quality materials. Budget-friendly modular kitchens, wardrobes & complete home solutions. Starting ₹6 lakhs!",
    keywords: [
      "interior designers rt nagar",
      "best interior designers in rt nagar bangalore",
      "home interiors rt nagar",
      "modular kitchen rt nagar",
      "affordable interior design rt nagar",
      "apartment interior rt nagar",
      "home renovation rt nagar bangalore",
      "interior decorators rt nagar",
      "budget home design rt nagar",
      "north bangalore interiors rt nagar"
    ],
    ogTitle: "Interior Designers in RT Nagar | Intorza - Affordable Quality Interiors",
    ogDescription: "RT Nagar interior experts. 17+ projects, affordable from ₹6 lakhs. Quality assured. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in RT Nagar?",
        answer: "Interior design in RT Nagar costs ₹1,200 to ₹2,400 per sq ft. Intorza offers affordable packages from ₹6 lakhs for 2BHK. We've completed 17+ projects in RT Nagar with quality materials and 10-year warranty."
      },
      {
        question: "Do you offer budget-friendly options in RT Nagar?",
        answer: "Yes! We understand RT Nagar's middle-class requirements. Our packages balance quality and cost - Basic (₹1,200/sq ft), Standard (₹1,800/sq ft), and Premium (₹2,400/sq ft). All include quality hardware and proper finishing."
      },
      {
        question: "Which areas near RT Nagar do you serve?",
        answer: "We serve RT Nagar, HBR Layout, Ganganagar, Kammanahalli, HRBR Layout, and surrounding areas. Our portfolio includes apartments, independent floors, and houses across the RT Nagar belt in North Bangalore."
      },
      {
        question: "Can you renovate older RT Nagar apartments?",
        answer: "Absolutely! RT Nagar has many older apartments needing renovation. We modernize these spaces with updated kitchens, contemporary designs, improved storage, and fresh aesthetics while working within budget constraints."
      }
    ],
    nearbyAreas: ["HBR Layout", "Ganganagar", "Kammanahalli", "HRBR Layout", "Sahakara Nagar", "Hebbal"],
    specialties: ["Affordable Design", "Value for Money", "Compact Solutions", "Modern Kitchen", "Family-Friendly Interior"]
  };

  return (
    <LocalityPageTemplate
      localityName="RT Nagar"
      slug="rt-nagar"
      projectCount="17+ Projects"
      heroImage={gallery15}
      galleryImages={[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery15]}
      description="Affordable interior designers in RT Nagar, Bangalore. Quality home interiors at competitive prices."
      seo={seo}
    />
  );
};

export default RTNagar;
