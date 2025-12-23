import { Home, ChefHat, Sofa, Bath, Briefcase, Baby, UtensilsCrossed, DoorOpen } from "lucide-react";

const bestServices = [
  {
    icon: Home,
    title: "2 BHK",
    subtitle: "Complete Interiors",
  },
  {
    icon: Home,
    title: "3 BHK",
    subtitle: "Premium Design",
  },
  {
    icon: ChefHat,
    title: "Modular Kitchen",
    subtitle: "Smart Storage",
  },
  {
    icon: Sofa,
    title: "Living Room",
    subtitle: "Elegant Spaces",
  },
  {
    icon: DoorOpen,
    title: "Wardrobe",
    subtitle: "Custom Built",
  },
  {
    icon: Bath,
    title: "Bathroom",
    subtitle: "Spa Inspired",
  },
  {
    icon: Briefcase,
    title: "Home Office",
    subtitle: "Work Ready",
  },
  {
    icon: Baby,
    title: "Kids Room",
    subtitle: "Playful Design",
  },
];

const BestServices = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-4">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-2">
          Best Services
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-md mx-auto">
          Tailored solutions for every room in your home
        </p>

        {/* Mobile: Horizontal scroll | Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-4 gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0">
          {bestServices.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[140px] md:w-auto snap-center first:ml-4 last:mr-4 md:first:ml-0 md:last:mr-0"
            >
              <div className="bg-card border border-border/50 rounded-2xl p-4 md:p-5 hover-lift cursor-pointer group text-center h-full">
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-primary text-sm md:text-base">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestServices;
