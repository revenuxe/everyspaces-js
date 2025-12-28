import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery13 from "@/assets/gallery-13.jpg?webp";
import gallery14 from "@/assets/gallery-14.jpg?webp";
import gallery15 from "@/assets/gallery-15.jpg?webp";
import gallery16 from "@/assets/gallery-16.jpg?webp";
import gallery17 from "@/assets/gallery-17.jpg?webp";
import gallery18 from "@/assets/gallery-18.jpg?webp";
import gallery19 from "@/assets/gallery-19.jpg?webp";

const Jayanagar = () => {
  const seo = {
    metaTitle: "Interior Designers in Jayanagar | Classic & Modern Home Interiors Bangalore",
    metaDescription: "Professional interior designers in Jayanagar, Bangalore. 28+ projects with classic & contemporary designs. Traditional pooja rooms, modular kitchens & elegant wardrobes. 10-year warranty!",
    keywords: [
      "interior designers jayanagar",
      "best interior designers in jayanagar bangalore",
      "home interiors jayanagar",
      "modular kitchen jayanagar",
      "traditional interior design jayanagar",
      "pooja room design jayanagar",
      "apartment interior jayanagar",
      "home renovation jayanagar bangalore",
      "interior decorators jayanagar",
      "classic home design jayanagar"
    ],
    ogTitle: "Interior Designers in Jayanagar | Intorza - Classic & Modern Designs",
    ogDescription: "Jayanagar interior experts. 28+ projects, classic to contemporary. Free consultation!",
    faqs: [
      {
        question: "What is the interior design cost in Jayanagar, Bangalore?",
        answer: "Interior design in Jayanagar costs ₹1,600 to ₹3,200 per sq ft. Intorza offers packages from ₹8 lakhs for 2BHK. We've completed 28+ projects across Jayanagar blocks with traditional and modern designs, backed by 10-year warranty."
      },
      {
        question: "Do you design traditional pooja rooms in Jayanagar?",
        answer: "Yes! Jayanagar families often prefer elaborate pooja rooms. We create traditional mandirs with teak wood, brass accents, and intricate carvings alongside modern interpretations with backlighting and marble finishes based on your preference."
      },
      {
        question: "Which Jayanagar blocks do you cover?",
        answer: "We serve all Jayanagar blocks - 1st to 9th Block, 4th T Block, and surrounding areas. Our portfolio includes heritage homes near Jayanagar Shopping Complex and modern apartments in newer constructions."
      },
      {
        question: "Can you blend traditional and modern styles for Jayanagar homes?",
        answer: "Absolutely! We specialize in fusion designs that honor Jayanagar's traditional values while incorporating modern functionality. Think classic wooden furniture with contemporary finishes, or traditional patterns in modern color palettes."
      }
    ],
    nearbyAreas: ["1st-9th Block Jayanagar", "JP Nagar", "Basavanagudi", "BTM Layout", "Banashankari", "4th T Block"],
    specialties: ["Traditional Design", "Pooja Room", "Classic Kitchen", "Wooden Interiors", "Heritage Renovation"]
  };

  return (
    <LocalityPageTemplate
      localityName="Jayanagar"
      slug="jayanagar"
      projectCount="28+ Projects"
      heroImage={gallery2}
      galleryImages={[gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery2]}
      description="Professional interior designers in Jayanagar, Bangalore. Classic & modern home interiors with traditional touches."
      seo={seo}
    />
  );
};

export default Jayanagar;
