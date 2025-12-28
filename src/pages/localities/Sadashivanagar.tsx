import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery14 from "@/assets/gallery-14.jpg?webp";
import gallery21 from "@/assets/gallery-21.jpg?webp";
import gallery22 from "@/assets/gallery-22.jpg?webp";
import gallery23 from "@/assets/gallery-23.jpg?webp";
import gallery24 from "@/assets/gallery-24.jpg?webp";
import gallery25 from "@/assets/gallery-25.jpg?webp";
import gallery26 from "@/assets/gallery-26.jpg?webp";
import gallery27 from "@/assets/gallery-27.jpg?webp";

const Sadashivanagar = () => {
  return (
    <LocalityPageTemplate
      localityName="Sadashivanagar"
      slug="sadashivanagar"
      projectCount="15+ Projects"
      heroImage={gallery14}
      galleryImages={[gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery14]}
      description="Luxury interior designers in Sadashivanagar, Bangalore. Premium bungalow & villa interior specialists."
    />
  );
};

export default Sadashivanagar;
