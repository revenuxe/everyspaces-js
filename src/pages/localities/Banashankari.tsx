import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery10 from "@/assets/gallery-10.jpg?webp";
import gallery18 from "@/assets/gallery-18.jpg?webp";
import gallery19 from "@/assets/gallery-19.jpg?webp";
import gallery20 from "@/assets/gallery-20.jpg?webp";
import gallery21 from "@/assets/gallery-21.jpg?webp";
import gallery22 from "@/assets/gallery-22.jpg?webp";
import gallery23 from "@/assets/gallery-23.jpg?webp";
import gallery24 from "@/assets/gallery-24.jpg?webp";

const Banashankari = () => {
  return (
    <LocalityPageTemplate
      localityName="Banashankari"
      slug="banashankari"
      projectCount="27+ Projects"
      heroImage={gallery10}
      galleryImages={[gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24, gallery10]}
      description="Best interior designers in Banashankari, Bangalore. Traditional & contemporary home interior solutions."
    />
  );
};

export default Banashankari;
