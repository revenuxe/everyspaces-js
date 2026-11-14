import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Whitefield, Bangalore",
    rating: 5,
    text: "EverySpaces transformed our 3BHK apartment with stunning modular kitchen designs and elegant bedroom interiors. Their attention to detail and use of premium materials exceeded our expectations.",
    service: "Complete Home Interior",
  },
  {
    name: "Rajesh Kumar",
    location: "Indiranagar, Bangalore",
    rating: 5,
    text: "We hired EverySpaces for our living room renovation and wardrobe design. The team delivered exceptional craftsmanship with modern aesthetics. Highly recommend for luxury home interiors in Bangalore.",
    service: "Living Room & Wardrobes",
  },
  {
    name: "Anita Reddy",
    location: "Koramangala, Bangalore",
    rating: 5,
    text: "The modular kitchen designed by EverySpaces is both functional and beautiful. They understood our requirements perfectly and delivered on time.",
    service: "Modular Kitchen Design",
  },
  {
    name: "Suresh Nair",
    location: "HSR Layout, Bangalore",
    rating: 5,
    text: "From false ceiling designs to TV unit installation, EverySpaces handled our entire home renovation project flawlessly. Their 3D visualization helped us see the final result before work began. Amazing experience!",
    service: "Home Renovation",
  },
  {
    name: "Meera Patel",
    location: "Jayanagar, Bangalore",
    rating: 5,
    text: "Best decision to choose EverySpaces for our apartment interior design. Their space planning and color consultation were spot-on. Premium quality at competitive pricing. Will definitely recommend!",
    service: "Apartment Interior Design",
  },
  {
    name: "Vikram Rao",
    location: "Bellandur, Bangalore",
    rating: 5,
    text: "EverySpaces designed our kids' bedroom with creative storage solutions and study area. The team was professional and completed the project within budget.",
    service: "Kids Bedroom Design",
  },
];

const TestimonialsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const goToReview = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement;
    const target = track.children[index] as HTMLElement;
    if (!target) return;
    track.scrollTo({ left: target.offsetLeft - first.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-2 block">
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Trusted by 500+ happy homeowners across Bangalore for premium interior design services
          </p>
        </div>

        <div id="reviews-carousel" ref={trackRef} aria-label="Client reviews" onScroll={() => {
          const track = trackRef.current;
          if (!track) return;
          const step = (track.children[1] as HTMLElement).offsetLeft - (track.children[0] as HTMLElement).offsetLeft;
          if (step > 0) setActiveIndex(Math.min(testimonials.length - 1, Math.max(0, Math.round(track.scrollLeft / step))));
        }} className="scrollbar-hide relative flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain md:grid md:grid-cols-2 md:gap-6 md:overflow-visible lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex w-full shrink-0 snap-start flex-col border-t border-primary/20 bg-transparent py-6 md:w-auto"
            >
              <Quote className="w-8 h-8 text-secondary/30 mb-4" />
              
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-4 font-body">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border/50 pt-4 mt-auto">
                <p className="font-display font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground font-body">
                  {testimonial.location}
                </p>
                <span className="inline-block mt-2 text-xs bg-secondary/20 text-secondary font-semibold px-2 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between md:hidden">
          <span aria-live="polite" aria-atomic="true" className="text-xs tabular-nums tracking-[.12em] text-primary/65">{String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous review" aria-controls="reviews-carousel" disabled={activeIndex === 0} onClick={() => goToReview(activeIndex - 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary"><ArrowLeft className="h-4 w-4" /></button>
            <button type="button" aria-label="Next review" aria-controls="reviews-carousel" disabled={activeIndex === testimonials.length - 1} onClick={() => goToReview(activeIndex + 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary"><ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

