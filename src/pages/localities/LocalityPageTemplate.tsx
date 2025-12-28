import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import LocalityBreadcrumb from "@/components/LocalityBreadcrumb";
import LocalityHeroSection from "@/components/LocalityHeroSection";
import ActionGrid from "@/components/ActionGrid";
import BestServices from "@/components/BestServices";
import ServicesCarousel from "@/components/ServicesCarousel";
import HowItWorksSection from "@/components/HowItWorksSection";
import LocalityGallerySection from "@/components/LocalityGallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import LocalitiesSection from "@/components/LocalitiesSection";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { StructuredData, localBusinessSchema } from "@/components/StructuredData";

interface LocalityPageProps {
  localityName: string;
  slug: string;
  projectCount: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
}

const LocalityPageTemplate = ({
  localityName,
  slug,
  projectCount,
  heroImage,
  galleryImages,
  description
}: LocalityPageProps) => {
  const localitySchema = {
    ...localBusinessSchema,
    "@id": `https://intorza.com/bangalore/${slug}#localbusiness`,
    "name": `Intorza Interior Designers ${localityName}`,
    "url": `https://intorza.com/bangalore/${slug}`,
    "areaServed": {
      "@type": "Place",
      "name": `${localityName}, Bangalore, Karnataka, India`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://intorza.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bangalore",
        "item": "https://intorza.com/bangalore"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": localityName,
        "item": `https://intorza.com/bangalore/${slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`Interior Designers in ${localityName} | Best Home Interiors ${localityName} Bangalore - Intorza`}</title>
        <meta
          name="description"
          content={`${description} ${projectCount} completed in ${localityName}. Modular kitchens, wardrobes & full home interiors with 10-year warranty. Free consultation!`}
        />
        <meta
          name="keywords"
          content={`interior designers ${localityName}, home interiors ${localityName}, modular kitchen ${localityName}, wardrobe design ${localityName}, ${localityName} interior design bangalore`}
        />
        <link rel="canonical" href={`https://intorza.com/bangalore/${slug}`} />
        
        <meta property="og:title" content={`Interior Designers in ${localityName} | Intorza`} />
        <meta property="og:description" content={`${description} Free consultation!`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://intorza.com/bangalore/${slug}`} />
        <meta property="og:locale" content="en_IN" />
      </Helmet>
      
      <StructuredData data={[localitySchema, breadcrumbSchema]} />
      <Header />
      <LocalityBreadcrumb localityName={localityName} />
      
      <main>
        <LocalityHeroSection
          localityName={localityName}
          projectCount={projectCount}
          heroImage={heroImage}
        />
        <ActionGrid />
        <BestServices />
        <ServicesCarousel />
        <HowItWorksSection />
        <LocalityGallerySection
          localityName={localityName}
          images={galleryImages}
        />
        <TestimonialsSection />
        <FAQSection />
        <LocalitiesSection />
      </main>
      
      <Footer />
      <BottomNav />
    </div>
  );
};

export default LocalityPageTemplate;
