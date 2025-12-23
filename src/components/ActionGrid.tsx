import { Calculator, Images, Palette } from "lucide-react";

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
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container px-4">
        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto scrollbar-hide snap-container pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {actionItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-auto snap-item"
            >
              <div className="glass-card rounded-3xl p-6 hover-lift cursor-pointer group h-full">
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
      </div>
    </section>
  );
};

export default ActionGrid;
