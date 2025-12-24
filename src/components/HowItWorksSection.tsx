import { ClipboardCheck, Palette, Ruler, Truck, Home } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Free Consultation",
    description: "Share your vision with our experts. We discuss your style, budget, and timeline.",
    payment: null,
  },
  {
    icon: Palette,
    step: "02",
    title: "Design Concept",
    description: "Our designers create personalized 3D renders and mood boards for your approval.",
    payment: "5% Payment",
  },
  {
    icon: Ruler,
    step: "03",
    title: "Detailed Planning",
    description: "Precise measurements and material selection with transparent pricing.",
    payment: null,
  },
  {
    icon: Truck,
    step: "04",
    title: "Execution",
    description: "Our skilled craftsmen bring your design to life with quality materials.",
    payment: "60% Payment",
  },
  {
    icon: Home,
    step: "05",
    title: "Handover",
    description: "Final walkthrough, quality check, and your dream home is ready to enjoy.",
    payment: "100% Full Payment",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            Our Process
          </span>
          <h2 className="font-display text-2xl md:text-4xl text-primary mb-2 md:mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-sm md:text-base">
            From concept to completion, we make interior design simple and stress-free
          </p>
        </div>

        {/* Timeline - Mobile: 2 cols milestone style, Desktop: 5 cols */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
          
          {/* Mobile: 2 columns grid with milestone style */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center text-center group bg-background rounded-xl p-3 md:p-0 md:bg-transparent border border-border/40 md:border-0 shadow-sm md:shadow-none ${index === 4 ? 'col-span-2 md:col-span-1 max-w-[160px] mx-auto md:max-w-none' : ''}`}
              >
                {/* Milestone connector line - Mobile only */}
                <div className="absolute -left-1.5 top-1/2 w-3 h-3 bg-secondary rounded-full hidden" />
                
                {/* Icon Container */}
                <div className="relative z-10 w-12 h-12 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-secondary/10 md:bg-background border md:border-2 border-secondary/30 md:border-secondary/20 flex items-center justify-center mb-2 md:mb-4 md:shadow-soft md:group-hover:border-secondary md:group-hover:shadow-glow transition-all duration-500">
                  <step.icon className="w-5 h-5 md:w-10 md:h-10 text-secondary transition-transform duration-300 md:group-hover:scale-110" />
                  
                  {/* Step Badge */}
                  <span className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-5 h-5 md:w-7 md:h-7 bg-secondary text-secondary-foreground rounded-full text-[10px] md:text-xs font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xs md:text-lg text-primary mb-0.5 md:mb-1 md:group-hover:text-secondary transition-colors duration-300 leading-tight">
                  {step.title}
                </h3>
                
                {/* Payment Badge */}
                {step.payment && (
                  <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-secondary/10 text-secondary text-[9px] md:text-xs font-semibold rounded-full mb-1 md:mb-2">
                    {step.payment}
                  </span>
                )}
                
                <p className="text-[10px] md:text-sm text-muted-foreground font-body leading-snug md:leading-relaxed md:max-w-[200px] line-clamp-2 md:line-clamp-none">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-16">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 btn-terracotta px-6 py-3 md:px-8 md:py-4 rounded-2xl text-secondary-foreground font-semibold font-body text-sm md:text-base"
          >
            Start Your Project
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
