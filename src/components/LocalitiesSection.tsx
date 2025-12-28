import { Link } from "react-router-dom";
import indiranagarImage from "@/assets/locality-indiranagar.jpg?webp";
import whitefieldImage from "@/assets/locality-whitefield.jpg?webp";
import hsrImage from "@/assets/locality-hsr.jpg?webp";
import koramangalaImage from "@/assets/locality-koramangala.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery4 from "@/assets/gallery-4.jpg?webp";
import gallery5 from "@/assets/gallery-5.jpg?webp";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery7 from "@/assets/gallery-7.jpg?webp";
import gallery8 from "@/assets/gallery-8.jpg?webp";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery10 from "@/assets/gallery-10.jpg?webp";
import gallery11 from "@/assets/gallery-11.jpg?webp";
import gallery12 from "@/assets/gallery-12.jpg?webp";
import gallery13 from "@/assets/gallery-13.jpg?webp";
import gallery14 from "@/assets/gallery-14.jpg?webp";
import gallery15 from "@/assets/gallery-15.jpg?webp";
import gallery16 from "@/assets/gallery-16.jpg?webp";

const localities = [{
  name: "Indiranagar",
  projects: "45+ Projects",
  image: indiranagarImage
}, {
  name: "Whitefield",
  projects: "38+ Projects",
  image: whitefieldImage
}, {
  name: "HSR Layout",
  projects: "52+ Projects",
  image: hsrImage
}, {
  name: "Koramangala",
  projects: "41+ Projects",
  image: koramangalaImage
}, {
  name: "JP Nagar",
  projects: "35+ Projects",
  image: gallery1
}, {
  name: "Jayanagar",
  projects: "28+ Projects",
  image: gallery2
}, {
  name: "Marathahalli",
  projects: "33+ Projects",
  image: gallery3
}, {
  name: "Electronic City",
  projects: "26+ Projects",
  image: gallery4
}, {
  name: "Sarjapur Road",
  projects: "42+ Projects",
  image: gallery5
}, {
  name: "Bellandur",
  projects: "31+ Projects",
  image: gallery6
}, {
  name: "BTM Layout",
  projects: "29+ Projects",
  image: gallery7
}, {
  name: "Hebbal",
  projects: "24+ Projects",
  image: gallery8
}, {
  name: "Yelahanka",
  projects: "22+ Projects",
  image: gallery9
}, {
  name: "Banashankari",
  projects: "27+ Projects",
  image: gallery10
}, {
  name: "Malleshwaram",
  projects: "19+ Projects",
  image: gallery11
}, {
  name: "Rajajinagar",
  projects: "21+ Projects",
  image: gallery12
}, {
  name: "Basavanagudi",
  projects: "18+ Projects",
  image: gallery13
}, {
  name: "Sadashivanagar",
  projects: "15+ Projects",
  image: gallery14
}, {
  name: "RT Nagar",
  projects: "17+ Projects",
  image: gallery15
}, {
  name: "Vijayanagar",
  projects: "20+ Projects",
  image: gallery16
}];
const LocalitiesSection = () => {
  return <section id="localities" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary font-semibold rounded-full text-sm mb-4">
            Our Reach
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-2">
            Top Localities
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Serving Bengaluru's finest neighborhoods with premium interiors
          </p>
        </div>

        {/* Single line horizontal scroll for all devices */}
        <div
          className="overflow-x-auto scrollbar-hide -mx-4 px-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex gap-6 md:gap-8 pb-4 w-max">
            {localities.map((locality, index) => (
              <Link
                key={index}
                to="/bangalore"
                className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
              >
                {/* Circular Image */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 border-secondary/20 group-hover:border-secondary transition-all duration-500 shadow-soft group-hover:shadow-glow">
                  <img
                    src={locality.image}
                    alt={locality.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Text */}
                <h3 className="mt-3 font-display text-primary text-sm group-hover:text-secondary transition-colors duration-300">
                  {locality.name}
                </h3>
                <p className="text-xs text-muted-foreground font-body">{locality.projects}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>;
};
export default LocalitiesSection;