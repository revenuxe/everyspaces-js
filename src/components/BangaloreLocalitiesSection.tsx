import { imgSrc } from "@/lib/utils";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";

const localities = [
  { name: "Whitefield", keyword: "Interior Designers in Whitefield", image: gallery1 },
  { name: "Indiranagar", keyword: "Home Interiors in Indiranagar", image: gallery2 },
  { name: "HSR Layout", keyword: "Modular Kitchen in HSR Layout", image: gallery3 },
  { name: "Koramangala", keyword: "2BHK Interiors in Koramangala", image: gallery4 },
  { name: "Sarjapur Road", keyword: "Villa Interiors in Sarjapur Road", image: gallery5 },
  { name: "Electronic City", keyword: "Apartment Interiors in Electronic City", image: gallery6 },
  { name: "Marathahalli", keyword: "Wardrobe Design in Marathahalli", image: gallery7 },
  { name: "Bellandur", keyword: "Premium Interiors in Bellandur", image: gallery8 },
  { name: "Jayanagar", keyword: "Interior Designers in Jayanagar", image: gallery9 },
  { name: "JP Nagar", keyword: "Affordable Interiors in JP Nagar", image: gallery10 },
  { name: "Hebbal", keyword: "Complete Home Interiors in Hebbal", image: gallery11 },
  { name: "Yelahanka", keyword: "3BHK Interiors in Yelahanka", image: gallery12 },
  { name: "BTM Layout", keyword: "Interior Designers in BTM Layout", image: gallery13 },
  { name: "Banashankari", keyword: "New Apartment Interiors in Banashankari", image: gallery14 },
  { name: "Malleshwaram", keyword: "Luxury Apartment Interiors in Malleshwaram", image: gallery15 },
  { name: "Rajajinagar", keyword: "Turnkey Interiors in Rajajinagar", image: gallery16 },
  { name: "Basavanagudi", keyword: "Modular Interiors in Basavanagudi", image: gallery17 },
];

const BangaloreLocalitiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary font-semibold rounded-full text-sm mb-4">
            Our Reach
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-2">
            Bangalore Top Localities
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Explore location-specific interior services across Bangalore neighborhoods
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="flex gap-6 md:gap-8 pb-4 w-max">
            {localities.map((locality, index) => (
              <a
                key={index}
                href={`/bangalore/${locality.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 border-secondary/20 group-hover:border-secondary transition-all duration-500 shadow-soft group-hover:shadow-glow">
                  <img
                    src={imgSrc(locality.image)}
                    alt={locality.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                <h3 className="mt-3 font-display text-primary text-sm group-hover:text-secondary transition-colors duration-300">
                  {locality.name}
                </h3>
                <p className="text-xs text-muted-foreground font-body">{locality.keyword}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BangaloreLocalitiesSection;
