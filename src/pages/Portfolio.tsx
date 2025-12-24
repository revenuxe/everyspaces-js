import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { X, ZoomIn } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg?optimized";
import gallery2 from "@/assets/gallery-2.jpg?optimized";
import gallery3 from "@/assets/gallery-3.jpg?optimized";
import gallery4 from "@/assets/gallery-4.jpg?optimized";
import gallery5 from "@/assets/gallery-5.jpg?optimized";
import gallery6 from "@/assets/gallery-6.jpg?optimized";
import gallery7 from "@/assets/gallery-7.jpg?optimized";
import gallery8 from "@/assets/gallery-8.jpg?optimized";
import gallery9 from "@/assets/gallery-9.jpg?optimized";
import gallery10 from "@/assets/gallery-10.jpg?optimized";
import gallery11 from "@/assets/gallery-11.jpg?optimized";
import gallery12 from "@/assets/gallery-12.jpg?optimized";
import gallery13 from "@/assets/gallery-13.jpg?optimized";
import gallery14 from "@/assets/gallery-14.jpg?optimized";
import gallery15 from "@/assets/gallery-15.jpg?optimized";
import gallery16 from "@/assets/gallery-16.jpg?optimized";
import gallery17 from "@/assets/gallery-17.jpg?optimized";
import gallery18 from "@/assets/gallery-18.jpg?optimized";
import gallery19 from "@/assets/gallery-19.jpg?optimized";
import gallery20 from "@/assets/gallery-20.jpg?optimized";
import gallery21 from "@/assets/gallery-21.jpg?optimized";
import gallery22 from "@/assets/gallery-22.jpg?optimized";
import gallery23 from "@/assets/gallery-23.jpg?optimized";
import gallery24 from "@/assets/gallery-24.jpg?optimized";
import gallery25 from "@/assets/gallery-25.jpg?optimized";
import gallery26 from "@/assets/gallery-26.jpg?optimized";
import gallery27 from "@/assets/gallery-27.jpg?optimized";

const galleryImages = [
  { id: 1, src: gallery1, title: "Modern Kitchen", category: "Kitchen" },
  { id: 2, src: gallery2, title: "Premium Kitchen", category: "Kitchen" },
  { id: 3, src: gallery3, title: "Minimalist Kitchen", category: "Kitchen" },
  { id: 4, src: gallery4, title: "Spacious Kitchen", category: "Kitchen" },
  { id: 5, src: gallery5, title: "Luxury Kitchen", category: "Kitchen" },
  { id: 6, src: gallery6, title: "TV Unit Design", category: "Living" },
  { id: 7, src: gallery7, title: "Grand Living Space", category: "Living" },
  { id: 8, src: gallery8, title: "Storage Cabinet", category: "Storage" },
  { id: 9, src: gallery9, title: "Wall Art & Decor", category: "Decor" },
  { id: 10, src: gallery10, title: "Room Partition", category: "Living" },
  { id: 11, src: gallery11, title: "Wood Panel TV Unit", category: "Living" },
  { id: 12, src: gallery12, title: "Dark Fluted Wall", category: "Living" },
  { id: 13, src: gallery13, title: "Marble Accent Wall", category: "Living" },
  { id: 14, src: gallery14, title: "Golden Marble TV", category: "Living" },
  { id: 15, src: gallery15, title: "Grey Striped Wall", category: "Living" },
  { id: 16, src: gallery16, title: "Curved TV Unit", category: "Living" },
  { id: 17, src: gallery17, title: "Cozy Fireplace", category: "Living" },
  { id: 18, src: gallery18, title: "Modern Wardrobe", category: "Bedroom" },
  { id: 19, src: gallery19, title: "Sliding Wardrobe", category: "Bedroom" },
  { id: 20, src: gallery20, title: "Teal Wardrobe", category: "Bedroom" },
  { id: 21, src: gallery21, title: "Pattern Wardrobe", category: "Bedroom" },
  { id: 22, src: gallery22, title: "Green Accent Bedroom", category: "Bedroom" },
  { id: 23, src: gallery23, title: "Blue Wardrobe", category: "Bedroom" },
  { id: 24, src: gallery24, title: "Mirror Wardrobe", category: "Bedroom" },
  { id: 25, src: gallery25, title: "Study Wardrobe", category: "Bedroom" },
  { id: 26, src: gallery26, title: "Classic Wardrobe", category: "Bedroom" },
  { id: 27, src: gallery27, title: "Green Modular Kitchen", category: "Kitchen" },
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
      className={`relative group cursor-pointer overflow-hidden rounded-md md:rounded-lg ${className}`}
      onClick={() => setSelectedImage(image)}
    >
      <img 
        src={image.src} 
        alt={image.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md md:rounded-lg" />
      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[10px] md:text-xs text-secondary font-medium">{image.category}</span>
        <h3 className="text-xs md:text-sm font-display text-primary-foreground truncate">{image.title}</h3>
      </div>
      <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-5 h-5 md:w-7 md:h-7 bg-secondary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-secondary-foreground" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Portfolio | Completed Interior Design Projects | Intorza Bangalore</title>
        <meta
          name="description"
          content="Browse 100+ completed interior projects by Intorza in Bangalore. View our modular kitchens, wardrobes, living rooms & bedrooms gallery. Get inspired!"
        />
        <link rel="canonical" href="https://intorza.com/portfolio" />
      </Helmet>
      <Header />
      
      <main className="pt-24 md:pt-28 pb-12 md:pb-20">
        <div className="container px-2 md:px-4">
          {/* Header */}
          <div className="text-center mb-6 md:mb-8 px-2">
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
              Our Portfolio
            </span>
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl text-primary tracking-[-0.025em]">
              Design Gallery
            </h1>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto font-body text-sm md:text-base">
              Explore our stunning collection of completed interior projects
            </p>
          </div>

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

          {/* Masonry Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-1.5 auto-rows-[80px] md:auto-rows-[120px] lg:auto-rows-[140px]">
            {filteredImages.length > 0 && (
              <>
                {filteredImages[0] && <GalleryItem image={filteredImages[0]} className="col-span-2 row-span-2" />}
                {filteredImages[1] && <GalleryItem image={filteredImages[1]} />}
                {filteredImages[2] && <GalleryItem image={filteredImages[2]} className="row-span-2" />}
                {filteredImages[3] && <GalleryItem image={filteredImages[3]} />}
                {filteredImages[4] && <GalleryItem image={filteredImages[4]} />}
                {filteredImages[5] && <GalleryItem image={filteredImages[5]} />}
                {filteredImages[6] && <GalleryItem image={filteredImages[6]} />}
                {filteredImages[7] && <GalleryItem image={filteredImages[7]} />}
                {filteredImages[8] && <GalleryItem image={filteredImages[8]} />}
                {filteredImages[9] && <GalleryItem image={filteredImages[9]} className="col-span-2 row-span-2" />}
                {filteredImages[10] && <GalleryItem image={filteredImages[10]} />}
                {filteredImages[11] && <GalleryItem image={filteredImages[11]} className="row-span-2" />}
                {filteredImages[12] && <GalleryItem image={filteredImages[12]} />}
                {filteredImages[13] && <GalleryItem image={filteredImages[13]} />}
                {filteredImages[14] && <GalleryItem image={filteredImages[14]} />}
                {filteredImages[15] && <GalleryItem image={filteredImages[15]} />}
                {filteredImages[16] && <GalleryItem image={filteredImages[16]} className="row-span-2" />}
                {filteredImages[17] && <GalleryItem image={filteredImages[17]} />}
                {filteredImages[18] && <GalleryItem image={filteredImages[18]} />}
                {filteredImages[19] && <GalleryItem image={filteredImages[19]} className="col-span-2 row-span-2" />}
                {filteredImages[20] && <GalleryItem image={filteredImages[20]} />}
                {filteredImages[21] && <GalleryItem image={filteredImages[21]} />}
                {filteredImages[22] && <GalleryItem image={filteredImages[22]} />}
                {filteredImages[23] && <GalleryItem image={filteredImages[23]} />}
                {filteredImages[24] && <GalleryItem image={filteredImages[24]} className="col-span-2" />}
                {filteredImages[25] && <GalleryItem image={filteredImages[25]} />}
                {filteredImages[26] && <GalleryItem image={filteredImages[26]} />}
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />

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
              src={selectedImage.src} 
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
