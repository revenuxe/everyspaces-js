import LocalityPageTemplate from "./LocalityPageTemplate";
import heroImage from "@/assets/locality-koramangala.jpg?webp";
import gallery25 from "@/assets/gallery-25.jpg?webp";
import gallery26 from "@/assets/gallery-26.jpg?webp";
import gallery27 from "@/assets/gallery-27.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery4 from "@/assets/gallery-4.jpg?webp";
import gallery5 from "@/assets/gallery-5.jpg?webp";

const Koramangala = () => {
  return (
    <LocalityPageTemplate
      localityName="Koramangala"
      slug="koramangala"
      projectCount="41+ Projects"
      heroImage={heroImage}
      galleryImages={[gallery25, gallery26, gallery27, gallery1, gallery2, gallery3, gallery4, gallery5]}
      description="Premium interior designers in Koramangala, Bangalore. Luxury home interiors, designer wardrobes & elegant living spaces."
    />
  );
};

export default Koramangala;
