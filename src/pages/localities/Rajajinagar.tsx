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
  return (
    <LocalityPageTemplate
      localityName="Rajajinagar"
      slug="rajajinagar"
      projectCount="21+ Projects"
      heroImage={gallery12}
      galleryImages={[gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12]}
      description="Experienced interior designers in Rajajinagar, Bangalore. West Bangalore experts with elegant home solutions."
    />
  );
};

export default Rajajinagar;
