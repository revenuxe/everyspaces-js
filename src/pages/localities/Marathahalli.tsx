import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery20 from "@/assets/gallery-20.jpg?webp";
import gallery21 from "@/assets/gallery-21.jpg?webp";
import gallery22 from "@/assets/gallery-22.jpg?webp";
import gallery23 from "@/assets/gallery-23.jpg?webp";
import gallery24 from "@/assets/gallery-24.jpg?webp";
import gallery25 from "@/assets/gallery-25.jpg?webp";
import gallery26 from "@/assets/gallery-26.jpg?webp";

const Marathahalli = () => {
  return (
    <LocalityPageTemplate
      localityName="Marathahalli"
      slug="marathahalli"
      projectCount="33+ Projects"
      heroImage={gallery3}
      galleryImages={[gallery20, gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery3]}
      description="Affordable interior designers in Marathahalli, Bangalore. IT corridor specialists with modern apartment solutions."
    />
  );
};

export default Marathahalli;
