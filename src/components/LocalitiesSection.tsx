import indiranagarImage from "@/assets/locality-indiranagar.jpg";
import whitefieldImage from "@/assets/locality-whitefield.jpg";
import hsrImage from "@/assets/locality-hsr.jpg";
import koramangalaImage from "@/assets/locality-koramangala.jpg";
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
  image: indiranagarImage
}, {
  name: "Jayanagar",
  projects: "28+ Projects",
  image: whitefieldImage
}, {
  name: "Marathahalli",
  projects: "33+ Projects",
  image: hsrImage
}, {
  name: "Electronic City",
  projects: "26+ Projects",
  image: koramangalaImage
}, {
  name: "Sarjapur Road",
  projects: "42+ Projects",
  image: indiranagarImage
}, {
  name: "Bellandur",
  projects: "31+ Projects",
  image: whitefieldImage
}, {
  name: "BTM Layout",
  projects: "29+ Projects",
  image: hsrImage
}, {
  name: "Hebbal",
  projects: "24+ Projects",
  image: koramangalaImage
}, {
  name: "Yelahanka",
  projects: "22+ Projects",
  image: indiranagarImage
}, {
  name: "Banashankari",
  projects: "27+ Projects",
  image: whitefieldImage
}, {
  name: "Malleshwaram",
  projects: "19+ Projects",
  image: hsrImage
}, {
  name: "Rajajinagar",
  projects: "21+ Projects",
  image: koramangalaImage
}];
const LocalitiesSection = () => {
  return <section id="localities" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Our Reach
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-2">
            Top Localities
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Serving Bengaluru's finest neighborhoods with premium interiors
          </p>
        </div>

        {/* Desktop Grid - shows all localities */}
        <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-4 mb-6">
          {localities.map((locality, index) => <div key={index} className="flex flex-col items-center group cursor-pointer">
              {/* Circular Image */}
              <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-3 border-secondary/20 group-hover:border-secondary transition-all duration-500 shadow-soft group-hover:shadow-glow">
                <img src={locality.image} alt={locality.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              
              {/* Text */}
              <h3 className="mt-3 font-display text-primary text-sm group-hover:text-secondary transition-colors duration-300">
                {locality.name}
              </h3>
              <p className="text-xs text-muted-foreground font-body">{locality.projects}</p>
            </div>)}
        </div>

        {/* Second row for remaining localities on desktop */}
        
        <div className="flex md:hidden overflow-x-auto scrollbar-hide gap-5 pb-4 -mx-4 px-4 snap-x snap-mandatory">
          {localities.map((locality, index) => <div key={index} className="flex-shrink-0 flex flex-col items-center group cursor-pointer snap-center">
              {/* Circular Image */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-3 border-secondary/20 group-hover:border-secondary transition-all duration-500 shadow-soft group-hover:shadow-glow">
                <img src={locality.image} alt={locality.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              
              {/* Text */}
              <h3 className="mt-3 font-display text-primary text-sm group-hover:text-secondary transition-colors duration-300">
                {locality.name}
              </h3>
              <p className="text-xs text-muted-foreground font-body">{locality.projects}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default LocalitiesSection;