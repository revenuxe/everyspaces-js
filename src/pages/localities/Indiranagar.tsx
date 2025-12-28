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
  return (
    <LocalityPageTemplate
      localityName="Indiranagar"
      slug="indiranagar"
      projectCount="45+ Projects"
      heroImage={heroImage}
      galleryImages={[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8]}
      description="Top-rated interior designers in Indiranagar, Bangalore. Premium modular kitchens, wardrobes & complete home interiors."
    />
  );
};

export default Indiranagar;
