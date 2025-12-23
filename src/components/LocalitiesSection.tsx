import indiranagarImage from "@/assets/locality-indiranagar.jpg";
import whitefieldImage from "@/assets/locality-whitefield.jpg";
import hsrImage from "@/assets/locality-hsr.jpg";
import koramangalaImage from "@/assets/locality-koramangala.jpg";

const localities = [
  {
    name: "Indiranagar",
    projects: "45+ Projects",
    image: indiranagarImage,
  },
  {
    name: "Whitefield",
    projects: "38+ Projects",
    image: whitefieldImage,
  },
  {
    name: "HSR Layout",
    projects: "52+ Projects",
    image: hsrImage,
  },
  {
    name: "Koramangala",
    projects: "41+ Projects",
    image: koramangalaImage,
  },
];

const LocalitiesSection = () => {
  return (
    <section id="localities" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <h2 className="font-display text-3xl md:text-4xl text-primary text-center mb-2 tracking-[-0.025em]">
          Top Localities
        </h2>
        <p className="text-center text-muted-foreground mb-10 font-body">
          Serving Bengaluru's finest neighborhoods
        </p>

        {/* Horizontal Scroll */}
        <div className="flex overflow-x-auto scrollbar-hide gap-6 md:gap-8 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
          {localities.map((locality, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Image */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-secondary/30 group-hover:border-secondary transition-all duration-300 shadow-soft">
                <img
                  src={locality.image}
                  alt={locality.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              
              {/* Text */}
              <h3 className="mt-3 font-display text-primary text-sm md:text-base">
                {locality.name}
              </h3>
              <p className="text-xs text-muted-foreground font-body">{locality.projects}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalitiesSection;
