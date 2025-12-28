import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery11 from "@/assets/gallery-11.jpg?webp";
import gallery12 from "@/assets/gallery-12.jpg?webp";
import gallery13 from "@/assets/gallery-13.jpg?webp";
import gallery14 from "@/assets/gallery-14.jpg?webp";
import gallery15 from "@/assets/gallery-15.jpg?webp";
import gallery16 from "@/assets/gallery-16.jpg?webp";
import gallery17 from "@/assets/gallery-17.jpg?webp";

const Yelahanka = () => {
  return (
    <LocalityPageTemplate
      localityName="Yelahanka"
      slug="yelahanka"
      projectCount="22+ Projects"
      heroImage={gallery9}
      galleryImages={[gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery9]}
      description="Professional interior designers in Yelahanka, Bangalore. Spacious home designs for independent houses & villas."
    />
  );
};

export default Yelahanka;
