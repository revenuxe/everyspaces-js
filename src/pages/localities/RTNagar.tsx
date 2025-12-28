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
  return (
    <LocalityPageTemplate
      localityName="RT Nagar"
      slug="rt-nagar"
      projectCount="17+ Projects"
      heroImage={gallery15}
      galleryImages={[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery15]}
      description="Affordable interior designers in RT Nagar, Bangalore. Quality home interiors at competitive prices."
    />
  );
};

export default RTNagar;
