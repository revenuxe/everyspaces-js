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
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            From concept to completion, we make interior design simple and stress-free
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-background border-2 border-secondary/20 flex items-center justify-center mb-4 shadow-soft group-hover:border-secondary group-hover:shadow-glow transition-all duration-500">
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-secondary transition-transform duration-300 group-hover:scale-110" />
                  
                  {/* Step Badge */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-secondary text-secondary-foreground rounded-full text-xs font-bold flex items-center justify-center shadow-lg">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* Payment Badge */}
                {step.payment && (
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-2">
                    {step.payment}
                  </span>
                )}
                
                <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-8 bg-secondary/20 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold font-body"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
