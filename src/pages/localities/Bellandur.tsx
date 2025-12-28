import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery15 from "@/assets/gallery-15.jpg?webp";
import gallery16 from "@/assets/gallery-16.jpg?webp";
import gallery17 from "@/assets/gallery-17.jpg?webp";
import gallery18 from "@/assets/gallery-18.jpg?webp";
import gallery19 from "@/assets/gallery-19.jpg?webp";
import gallery20 from "@/assets/gallery-20.jpg?webp";
import gallery21 from "@/assets/gallery-21.jpg?webp";

const Bellandur = () => {
  return (
    <LocalityPageTemplate
      localityName="Bellandur"
      slug="bellandur"
      projectCount="31+ Projects"
      heroImage={gallery6}
      galleryImages={[gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery6]}
      description="Premium interior designers in Bellandur, Bangalore. Luxury apartment interiors & villa design specialists."
    />
  );
};

export default Bellandur;
