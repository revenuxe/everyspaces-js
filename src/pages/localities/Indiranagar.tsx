import LocalityPageTemplate from "./LocalityPageTemplate";
import heroImage from "@/assets/locality-indiranagar.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery4 from "@/assets/gallery-4.jpg?webp";
import gallery5 from "@/assets/gallery-5.jpg?webp";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery7 from "@/assets/gallery-7.jpg?webp";
import gallery8 from "@/assets/gallery-8.jpg?webp";

const Indiranagar = () => {
  const seo = {
    metaTitle: "Best Interior Designers in Indiranagar | Premium Home Interiors Bangalore",
    metaDescription: "Top-rated interior designers in Indiranagar, Bangalore. 45+ luxury projects completed. Bespoke modular kitchens, designer wardrobes & contemporary living spaces. 10-year warranty. Free consultation!",
    keywords: [
      "interior designers indiranagar",
      "best interior designers in indiranagar bangalore",
      "home interiors indiranagar",
      "modular kitchen indiranagar",
      "wardrobe design indiranagar",
      "luxury interior design indiranagar",
      "apartment interior indiranagar",
      "home renovation indiranagar bangalore",
      "interior decorators indiranagar",
      "living room design indiranagar"
    ],
    ogTitle: "Best Interior Designers in Indiranagar | Intorza - Luxury Home Interiors",
    ogDescription: "Transform your Indiranagar home with Intorza. 45+ premium projects, 10-year warranty. Free design consultation!",
    faqs: [
      {
        question: "What is the cost of interior design in Indiranagar, Bangalore?",
        answer: "Interior design in Indiranagar typically costs ₹2,000 to ₹4,000 per sq ft due to premium standards. At Intorza, we offer luxury packages from ₹10 lakhs for 2BHK in Indiranagar. We've completed 45+ premium projects with 10-year warranty and premium materials like Hettich/Hafele hardware."
      },
      {
        question: "Who are the best interior designers in Indiranagar?",
        answer: "Intorza is rated among the best interior designers in Indiranagar with 4.9/5 rating, 45+ completed projects, and expertise in contemporary and luxury designs. We specialize in premium apartments near 100 Feet Road, CMH Road, and HAL areas with dedicated project managers."
      },
      {
        question: "Do you design apartments near 100 Feet Road, Indiranagar?",
        answer: "Yes! We have extensive experience designing apartments along 100 Feet Road, CMH Road, and 12th Main Indiranagar. Our portfolio includes premium projects in Brigade Millenium, Mantri Elegance, and other upscale Indiranagar residences."
      },
      {
        question: "What interior styles are popular in Indiranagar homes?",
        answer: "Indiranagar homes typically prefer contemporary, minimalist, and Scandinavian-inspired designs. We also design industrial-chic interiors popular among young professionals. Our designs blend functionality with aesthetics suited to Indiranagar's urban lifestyle."
      }
    ],
    nearbyAreas: ["Domlur", "HAL 2nd Stage", "Ulsoor", "CV Raman Nagar", "Old Airport Road"],
    specialties: ["Contemporary Design", "Modular Kitchen", "Premium Wardrobes", "Living Room Makeover", "Home Office Design"]
  };

  return (
    <LocalityPageTemplate
      localityName="Indiranagar"
      slug="indiranagar"
      projectCount="45+ Projects"
      heroImage={heroImage}
      galleryImages={[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8]}
      description="Top-rated interior designers in Indiranagar, Bangalore. Premium modular kitchens, wardrobes & complete home interiors."
      seo={seo}
    />
  );
};

export default Indiranagar;
