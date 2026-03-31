import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Koramangala, Hyderabad",
    rating: 5,
    text: "EverySpaces transformed our 3BHK apartment with stunning modular kitchen designs and elegant bedroom interiors. Their attention to detail and use of premium materials exceeded our expectations. Best interior designers in Hyderabad!",
    service: "Complete Home Interior",
  },
  {
    name: "Rajesh Kumar",
    location: "HSR Layout, Hyderabad",
    rating: 5,
    text: "We hired EverySpaces for our living room renovation and wardrobe design. The team delivered exceptional craftsmanship with modern aesthetics. Highly recommend for luxury home interiors in Hyderabad.",
    service: "Living Room & Wardrobes",
  },
  {
    name: "Anita Reddy",
    location: "Whitefield, Hyderabad",
    rating: 5,
    text: "The modular kitchen designed by EverySpaces is both functional and beautiful. They understood our requirements perfectly and delivered on time. Top-rated interior design company in Hyderabad!",
    service: "Modular Kitchen Design",
  },
  {
    name: "Suresh Nair",
    location: "Indiranagar, Hyderabad",
    rating: 5,
    text: "From false ceiling designs to TV unit installation, EverySpaces handled our entire home renovation project flawlessly. Their 3D visualization helped us see the final result before work began. Amazing experience!",
    service: "Home Renovation",
  },
  {
    name: "Meera Patel",
    location: "HBR Layout, Hyderabad",
    rating: 5,
    text: "Best decision to choose EverySpaces for our apartment interior design. Their space planning and color consultation were spot-on. Premium quality at competitive pricing. Will definitely recommend!",
    service: "Apartment Interior Design",
  },
  {
    name: "Vikram Rao",
    location: "Electronic City, Hyderabad",
    rating: 5,
    text: "EverySpaces designed our kids' bedroom with creative storage solutions and study area. The team was professional and completed the project within budget. Excellent interior decorators in Hyderabad!",
    service: "Kids Bedroom Design",
  },
];

const TestimonialsSection = () => {
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
            Trusted by 500+ happy homeowners across Hyderabad for premium interior design services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 border border-border/50"
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

      </div>
    </section>
  );
};

export default TestimonialsSection;

