"use client";

import { imgSrc } from "@/lib/utils";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import { StructuredData, createBreadcrumbSchema } from "@/components/StructuredData";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";
import gallery22 from "@/assets/gallery-22.jpg";
import gallery23 from "@/assets/gallery-23.jpg";
import gallery24 from "@/assets/gallery-24.jpg";
import gallery25 from "@/assets/gallery-25.jpg";
import gallery26 from "@/assets/gallery-26.jpg";
import gallery27 from "@/assets/gallery-27.jpg";

const galleryImages = [
  { id: 1, src: gallery1, title: "Emerald L-Shaped Kitchen", category: "Kitchen" },
  { id: 2, src: gallery2, title: "Ribbed Glass Galley Kitchen", category: "Kitchen" },
  { id: 3, src: gallery3, title: "Sage Contemporary Kitchen", category: "Kitchen" },
  { id: 4, src: gallery4, title: "Graphite U-Shaped Kitchen", category: "Kitchen" },
  { id: 5, src: gallery5, title: "Warm Grey Gourmet Kitchen", category: "Kitchen" },
  { id: 6, src: gallery6, title: "Blue Marble Media Wall", category: "Living" },
  { id: 7, src: gallery7, title: "Blue Marble Living Room", category: "Living" },
  { id: 8, src: gallery8, title: "Illuminated Foyer Console", category: "Storage" },
  { id: 9, src: gallery9, title: "Classic Art Feature Wall", category: "Decor" },
  { id: 10, src: gallery10, title: "Timber Display Partition", category: "Living" },
  { id: 11, src: gallery11, title: "Walnut Linear Media Wall", category: "Living" },
  { id: 12, src: gallery12, title: "Monochrome Fluted TV Wall", category: "Living" },
  { id: 13, src: gallery13, title: "Marble & Fluted Media Wall", category: "Living" },
  { id: 14, src: gallery14, title: "Golden Vein Feature Wall", category: "Living" },
  { id: 15, src: gallery15, title: "Charcoal Fluted TV Unit", category: "Living" },
  { id: 16, src: gallery16, title: "Arc Marble Media Console", category: "Living" },
  { id: 17, src: gallery17, title: "Soft Grey Fireplace Media Wall", category: "Living" },
  { id: 18, src: gallery18, title: "White Wardrobe with Vanity", category: "Bedroom" },
  { id: 19, src: gallery19, title: "Ivory Sliding Wardrobe", category: "Bedroom" },
  { id: 20, src: gallery20, title: "Teal Geometric Wardrobe", category: "Bedroom" },
  { id: 21, src: gallery21, title: "Grey Sliding Wardrobe", category: "Bedroom" },
  { id: 22, src: gallery22, title: "Emerald Arch Bedroom", category: "Bedroom" },
  { id: 23, src: gallery23, title: "Sky Blue Storage Wardrobe", category: "Bedroom" },
  { id: 24, src: gallery24, title: "Bronze Glass Wardrobe", category: "Bedroom" },
  { id: 25, src: gallery25, title: "Walnut Study Wardrobe", category: "Bedroom" },
  { id: 26, src: gallery26, title: "Mirrored Sliding Wardrobe", category: "Bedroom" },
  { id: 27, src: gallery27, title: "Olive Green Modular Kitchen", category: "Kitchen" },
];

const categories = ["All", "Kitchen", "Living", "Bedroom", "Storage", "Decor"];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const GalleryItem = ({ image, className = "" }: { image: typeof galleryImages[0], className?: string }) => (
    <div 
      className={`relative group aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-muted shadow-sm ${className}`}
      onClick={() => setSelectedImage(image)}
    >
      <img 
        src={imgSrc(image.src)} 
        alt={image.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary-foreground/80">{image.category}</span>
        <h3 className="mt-1 text-sm font-medium leading-tight text-primary-foreground md:text-base">{image.title}</h3>
      </div>
      <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-5 h-5 md:w-7 md:h-7 bg-secondary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-secondary-foreground" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={[createBreadcrumbSchema([
        { name: "Home", url: "https://everyspaces.com" },
        { name: "Portfolio", url: "https://everyspaces.com/portfolio" }
      ]), {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "EverySpaces Interior Design Portfolio",
        "description": "Browse 100+ completed interior projects by EverySpaces in Bangalore",
        "url": "https://everyspaces.com/portfolio"
      }]} />
      <Header />
      <Breadcrumb items={[{ label: "Portfolio" }]} />
      
      <main className="pt-0 pb-12 md:pb-20">
        <PageHero image={gallery1} imageAlt="Selected EverySpaces interior project" title="Design Gallery" description="A collection of homes shaped around light, material, and the people who live in them." eyebrow="Selected work · EverySpaces" />
        <div className="container px-2 md:px-4">
          {/* Header */}
          <div className="mb-6 md:mb-8" />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-secondary text-secondary-foreground shadow-md"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {filteredImages.map((image) => <GalleryItem key={image.id} image={image} />)}
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm flex items-center justify-center p-2 md:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
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
    </div>
  );
};

export default Portfolio;

