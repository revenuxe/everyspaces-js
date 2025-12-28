import LocalityPageTemplate from "./LocalityPageTemplate";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery13 from "@/assets/gallery-13.jpg?webp";
import gallery14 from "@/assets/gallery-14.jpg?webp";
import gallery15 from "@/assets/gallery-15.jpg?webp";
import gallery16 from "@/assets/gallery-16.jpg?webp";
import gallery17 from "@/assets/gallery-17.jpg?webp";
import gallery18 from "@/assets/gallery-18.jpg?webp";
import gallery19 from "@/assets/gallery-19.jpg?webp";

const Jayanagar = () => {
  return (
    <LocalityPageTemplate
      localityName="Jayanagar"
      slug="jayanagar"
      projectCount="28+ Projects"
      heroImage={gallery2}
      galleryImages={[gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery2]}
      description="Professional interior designers in Jayanagar, Bangalore. Classic & modern home interiors with traditional touches."
    />
  );
};

export default Jayanagar;
