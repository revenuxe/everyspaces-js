import { Calculator, Images, Palette } from "lucide-react";
import { useRef } from "react";

const actionItems = [
  {
    icon: Calculator,
    title: "Price Calculator",
    description: "Get instant estimates",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Images,
    title: "Design Gallery",
    description: "Explore our projects",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Palette,
    title: "Material Palette",
    description: "Choose your finishes",
    gradient: "from-secondary/20 to-secondary/5",
  },
];

const ActionGrid = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container px-4">
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary text-center mb-6">
          Quick Actions
        </h3>
        
        {/* Mobile: Horizontal scroll with proper snap | Desktop: Grid */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0"
          style={{ scrollPaddingLeft: '1rem', scrollPaddingRight: '1rem' }}
        >
          {actionItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[75vw] sm:w-[60vw] md:w-auto snap-center first:ml-4 last:mr-4 md:first:ml-0 md:last:mr-0"
            >
              <div className="glass-card rounded-3xl p-6 hover-lift cursor-pointer group h-full border border-border/50 bg-card">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator Dots (Mobile only) */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {actionItems.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-primary/20"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionGrid;
