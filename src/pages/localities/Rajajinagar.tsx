import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery12 from "@/assets/gallery-12.jpg?webp";
import gallery5 from "@/assets/gallery-5.jpg?webp";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery7 from "@/assets/gallery-7.jpg?webp";
import gallery8 from "@/assets/gallery-8.jpg?webp";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery10 from "@/assets/gallery-10.jpg?webp";
import gallery11 from "@/assets/gallery-11.jpg?webp";

const Rajajinagar = () => {
  const seo = {
    metaTitle: "Interior Designers in Rajajinagar | Elegant Home Interiors Bangalore",
    metaDescription: "Experienced interior designers in Rajajinagar, Bangalore. 21+ projects across all blocks. Elegant modular kitchens, spacious wardrobes & sophisticated living spaces. 10-year warranty!",
    keywords: [
      "interior designers rajajinagar",
      "best interior designers in rajajinagar bangalore",
      "home interiors rajajinagar",
      "modular kitchen rajajinagar",
      "elegant interior design rajajinagar",
      "apartment interior rajajinagar",
      "home renovation rajajinagar bangalore",
      "interior decorators rajajinagar",
      "west bangalore interiors rajajinagar",
      "sophisticated home design rajajinagar"
    ],
    ogTitle: "Interior Designers in Rajajinagar | Intorza - Elegant Home Solutions",
    ogDescription: "Rajajinagar interior experts. 21+ projects, elegant designs. West Bangalore leaders. Free consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Rajajinagar?",
        answer: "Interior design in Rajajinagar costs ₹1,500 to ₹3,000 per sq ft. Intorza offers packages from ₹8 lakhs for 2BHK. We've completed 21+ projects across Rajajinagar 1st to 6th Block with elegant designs and 10-year warranty."
      },
      {
        question: "Which Rajajinagar blocks do you cover?",
        answer: "We serve all Rajajinagar blocks - 1st to 6th Block, including MEI Layout, Industrial Town, and surrounding areas. Our portfolio includes independent houses near Chord Road and apartments in various Rajajinagar localities."
      },
      {
        question: "Do you design interiors for older Rajajinagar properties?",
        answer: "Yes! Rajajinagar has established neighborhoods with older properties. We renovate and modernize these homes while maintaining structural integrity, upgrading utilities, and creating contemporary spaces within traditional layouts."
      },
      {
        question: "Can you work with West Bangalore's architectural style?",
        answer: "Absolutely! We understand West Bangalore's design preferences - spacious layouts, elegant finishes, family-oriented designs with formal and informal spaces. We blend contemporary elements with the area's established aesthetic."
      }
    ],
    nearbyAreas: ["1st-6th Block Rajajinagar", "MEI Layout", "Industrial Town", "Malleshwaram", "Basaveshwaranagar", "Mahalakshmi Layout"],
    specialties: ["Elegant Design", "Spacious Layouts", "Premium Kitchen", "Formal Living Room", "Study Room Design"]
  };

  return (
    <LocalityPageTemplate
      localityName="Rajajinagar"
      slug="rajajinagar"
      projectCount="21+ Projects"
      heroImage={gallery12}
      galleryImages={[gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12]}
      description="Experienced interior designers in Rajajinagar, Bangalore. West Bangalore experts with elegant home solutions."
      seo={seo}
    />
  );
};

export default Rajajinagar;
