import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import { imgSrc } from "@/lib/utils";

const galleryImages = [
  { id: 1, src: gallery1, title: "Emerald L-Shaped Kitchen", category: "Kitchen" },
  { id: 2, src: gallery2, title: "Ribbed Glass Galley Kitchen", category: "Kitchen" },
  { id: 3, src: gallery3, title: "Sage Contemporary Kitchen", category: "Kitchen" },
  { id: 4, src: gallery4, title: "Graphite U-Shaped Kitchen", category: "Kitchen" },
  { id: 5, src: gallery5, title: "Warm Grey Gourmet Kitchen", category: "Kitchen" },
  { id: 6, src: gallery6, title: "Blue Marble Media Wall", category: "Living" },
  { id: 7, src: gallery7, title: "Blue Marble Living Room", category: "Living" },
  { id: 8, src: gallery8, title: "Illuminated Foyer Console", category: "Storage" },
];

const GalleryItem = ({ image, onSelect }: { image: typeof galleryImages[0], onSelect: (image: typeof galleryImages[0]) => void }) => (
    <button
      type="button"
      aria-label={`View ${image.title}`}
      className="gallery-project group block w-full shrink-0 snap-start text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      onClick={() => onSelect(image)}
    >
      <span className="relative block aspect-[4/3] overflow-hidden rounded-[10px] bg-muted md:aspect-[5/4]">
      <img
        src={imgSrc(image.src)} 
        alt={image.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
      <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-primary shadow-sm transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
        <ZoomIn className="h-4 w-4" />
      </span>
      <span className="absolute inset-x-0 bottom-0 block p-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">{image.category}</span>
        <span className="mt-1.5 block max-w-[24ch] text-lg font-medium leading-snug text-white">{image.title}</span>
      </span>
      </span>
    </button>
  );

const GallerySection = ({ locationLabel }: { locationLabel?: string } = {}) => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const goToSlide = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const first = carousel.children[0] as HTMLElement;
    const target = carousel.children[index] as HTMLElement;
    if (!target) return;
    carousel.scrollTo({ left: target.offsetLeft - first.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  return (
    <section id="gallery" className="py-14 md:py-24 bg-background">
      <div className="container px-5 md:px-8">
        {/* Header */}
        <div className="mb-8 max-w-2xl md:mb-10">
          <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
            Selected interiors
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-primary tracking-[-0.025em]">
            {locationLabel ? `Design ideas for ${locationLabel}` : "Design Gallery"}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md font-body text-sm leading-6 md:text-base md:leading-7">
            {locationLabel ? "Explore layout, storage, and finish ideas to discuss for your home. These images illustrate design options across our collection." : "Thoughtful spaces, considered details. Explore a selection of our interior designs."}
          </p>
        </div>

        {/* Featured project cards */}
        <div id="gallery-carousel" ref={carouselRef} aria-label="Interior design projects" onScroll={() => {
          const carousel = carouselRef.current;
          if (!carousel || carousel.children.length < 2) return;
          const step = (carousel.children[1] as HTMLElement).offsetLeft - (carousel.children[0] as HTMLElement).offsetLeft;
          if (step > 0) setActiveIndex(Math.min(galleryImages.length - 1, Math.max(0, Math.round(carousel.scrollLeft / step))));
        }} className="scrollbar-hide relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain md:grid md:grid-cols-2 md:gap-6 md:overflow-visible lg:grid-cols-4">
          {galleryImages.map((image) => <GalleryItem key={image.id} image={image} onSelect={setSelectedImage} />)}
        </div>
        <div className="mt-4 flex items-center justify-between md:hidden">
          <span aria-live="polite" aria-atomic="true" className="text-xs tabular-nums tracking-[.12em] text-primary/65">{String(activeIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}</span>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous project" aria-controls="gallery-carousel" disabled={activeIndex === 0} onClick={() => goToSlide(activeIndex - 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary"><ArrowLeft className="h-4 w-4" /></button>
            <button type="button" aria-label="Next project" aria-controls="gallery-carousel" disabled={activeIndex === galleryImages.length - 1} onClick={() => goToSlide(activeIndex + 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary"><ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 md:mt-10">
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-3 border-b border-primary/30 pb-2 text-primary hover:text-secondary hover:border-secondary font-medium text-sm transition-colors"
          >
            View All Projects <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm flex items-center justify-center p-2 md:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            type="button"
            aria-label="Close project preview"
            className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-secondary/20 hover:bg-secondary/40 rounded-full flex items-center justify-center transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
          </button>
          <div className="max-w-5xl max-h-[85vh] overflow-hidden rounded-xl md:rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <img 
              src={imgSrc(selectedImage.src)} 
              alt={selectedImage.title}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-center">
            <span className="text-xs text-secondary font-medium">{selectedImage.category}</span>
            <h3 className="text-base md:text-xl font-display text-primary-foreground">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
