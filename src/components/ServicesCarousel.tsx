import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import kitchenImage from "@/assets/service-kitchen.jpg?optimized";
import bedroomImage from "@/assets/service-bedroom.jpg?optimized";
import livingImage from "@/assets/service-living.jpg?optimized";

const services = [
  { id: 1, title: "Modular Kitchens", description: "Expertly crafted for Bengaluru's modern culinary lifestyle.", image: kitchenImage, href: "/services/modular-kitchen" },
  { id: 2, title: "Luxury Bedrooms", description: "Where serenity meets smart storage solutions.", image: bedroomImage, href: "/services/bedroom-design" },
  { id: 3, title: "Smart Living Rooms", description: "Tech-integrated spaces designed for entertaining.", image: livingImage, href: "/services/living-room" },
  { id: 4, title: "Elegant Bathrooms", description: "Spa-inspired designs with premium fixtures.", image: kitchenImage, href: "/services/bathroom-design" },
  { id: 5, title: "Home Office", description: "Productivity-focused workspaces for the modern professional.", image: bedroomImage, href: "/services/home-office" },
  { id: 6, title: "Kids Room", description: "Playful yet functional spaces for your little ones.", image: livingImage, href: "/services/kids-room" },
  { id: 7, title: "Dining Spaces", description: "Elegant settings for memorable family gatherings.", image: kitchenImage, href: "/services/dining-room" },
  { id: 8, title: "Wardrobe Design", description: "Custom storage solutions maximizing every inch.", image: bedroomImage, href: "/services/wardrobe-design" },
];

const ServicesCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [parallaxOffsets, setParallaxOffsets] = useState<number[]>(
    new Array(services.length).fill(0)
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId = 0;

    const updateFromScroll = () => {
      rafId = 0;
      const scrollPos = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const itemWidth =
        containerWidth < 768
          ? containerWidth * 0.75
          : containerWidth < 1024
            ? containerWidth * 0.4
            : containerWidth * 0.3;

      const newIndex = Math.round(scrollPos / (itemWidth + 32));
      setActiveIndex((prev) => {
        const next = Math.min(Math.max(newIndex, 0), services.length - 1);
        return prev === next ? prev : next;
      });

      const offsets = services.map((_, index) => {
        const gap = 32;
        const totalItemWidth = itemWidth + gap;
        const itemCenter = index * totalItemWidth + itemWidth / 2;
        const containerCenter = scrollPos + containerWidth / 2;
        const distance = (itemCenter - containerCenter) / itemWidth;
        return distance * -20;
      });

      setParallaxOffsets(offsets);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateFromScroll);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    updateFromScroll();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const containerWidth = container.clientWidth;
    const itemWidth = containerWidth < 768 ? containerWidth * 0.75 : 
                      containerWidth < 1024 ? containerWidth * 0.40 : containerWidth * 0.30;
    const gap = 32;
    container.scrollTo({
      left: index * (itemWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mb-8">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary text-center tracking-[-0.025em]">
          Explore Services
        </h2>
        <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto font-body">
          Transform your space with our signature design solutions
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-5 md:gap-8 px-4 md:px-8 py-8 cursor-grab select-none"
        style={{ 
          scrollPaddingLeft: '1rem',
          scrollBehavior: isDragging ? 'auto' : 'smooth',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={service.id}
              onClick={() => !isDragging && scrollToIndex(index)}
              className={`flex-shrink-0 w-[75vw] md:w-[40vw] lg:w-[30vw] max-w-md snap-center cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isActive ? "scale-100" : "md:scale-100 scale-[0.92]"
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-elevated h-[380px] md:h-[480px] group">
                {/* Parallax Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                    style={{
                      transform: `translateX(${parallaxOffsets[index]}px) scale(1.15)`,
                    }}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-foreground/60 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 pr-28 md:pr-32 pb-16 md:pb-20">
                  <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-2 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/85 text-sm md:text-base font-body line-clamp-2">
                    {service.description}
                  </p>

                  <Link to={service.href} className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/90 hover:bg-secondary rounded-2xl text-secondary-foreground text-sm font-medium transition-colors">
                    View Projects
                  </Link>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-5 md:bottom-6 right-5 md:right-6 z-10 w-12 h-12 md:w-14 md:h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-secondary-foreground" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-1.5 mt-6 flex-wrap max-w-xs mx-auto">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-6 bg-secondary"
                : "w-2 bg-primary/20 hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesCarousel;
