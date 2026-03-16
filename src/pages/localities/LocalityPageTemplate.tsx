import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import LocalityBreadcrumb from "@/components/LocalityBreadcrumb";
import LocalityHeroSection from "@/components/LocalityHeroSection";
import ActionGrid from "@/components/ActionGrid";
import BestServices from "@/components/BestServices";
import ServicesCarousel from "@/components/ServicesCarousel";
import HowItWorksSection from "@/components/HowItWorksSection";
import LocalityContentSection from "@/components/LocalityContentSection";
import LocalityGallerySection from "@/components/LocalityGallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import LocalitiesSection from "@/components/LocalitiesSection";
import RelatedLocalities from "@/components/RelatedLocalities";
import RelatedServices from "@/components/RelatedServices";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { 
  StructuredData, 
  localBusinessSchema,
  createServiceSchema,
  createFAQSchema,
  createBreadcrumbSchema
} from "@/components/StructuredData";

interface LocalityFAQ {
  question: string;
  answer: string;
}

interface LocalityLandmark {
  name: string;
  description: string;
  type: "landmark" | "lifestyle" | "residential" | "nature";
}

interface DesignTip {
  title: string;
  description: string;
}

interface LocalitySEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  faqs: LocalityFAQ[];
  nearbyAreas: string[];
  specialties: string[];
  landmarks?: LocalityLandmark[];
  designTips?: DesignTip[];
  lifestyleDescription?: string;
}

interface LocalityPageProps {
  localityName: string;
  slug: string;
  projectCount: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  seo?: LocalitySEO;
}

const LocalityPageTemplate = ({
  localityName,
  slug,
  projectCount,
  heroImage,
  galleryImages,
  description,
  seo
}: LocalityPageProps) => {
  // Default SEO values if not provided
  const defaultSEO: LocalitySEO = {
    metaTitle: `Best Interior Designers in ${localityName} | Home Interiors ${localityName} Bangalore`,
    metaDescription: `${description} ${projectCount} completed. Modular kitchens, wardrobes & full home interiors with 10-year warranty. Free consultation!`,
    keywords: [
      `interior designers ${localityName}`,
      `home interiors ${localityName}`,
      `modular kitchen ${localityName}`,
      `wardrobe design ${localityName}`,
      `${localityName} interior design bangalore`,
      `best interior designers in ${localityName}`,
      `home renovation ${localityName}`,
      `interior decorators ${localityName}`
    ],
    ogTitle: `Interior Designers in ${localityName} | EverySpaces`,
    ogDescription: `${description} Free consultation!`,
    faqs: [
      {
        question: `What is the cost of interior design in ${localityName}?`,
        answer: `Interior design cost in ${localityName} ranges from ₹1,500 to ₹3,500 per sq ft depending on materials and scope. At EverySpaces, we offer customized packages starting ₹8 lakhs for 2BHK. We have completed ${projectCount} in ${localityName} with 10-year warranty.`
      },
      {
        question: `Who are the best interior designers in ${localityName}, Bangalore?`,
        answer: `EverySpaces is rated among the best interior designers in ${localityName} with 4.8/5 rating, ${projectCount} completed, and 10-year warranty. We specialize in modular kitchens, wardrobes, and complete home interiors with premium materials.`
      },
      {
        question: `How long does home interior work take in ${localityName}?`,
        answer: `Complete home interior in ${localityName} takes 45-90 days depending on scope. Modular kitchen takes 15-20 days, wardrobes 10-15 days. Our dedicated project manager ensures timely delivery for all ${localityName} projects.`
      },
      {
        question: `Do you offer free consultation in ${localityName}?`,
        answer: `Yes! EverySpaces offers free site visit and consultation in ${localityName}. Our design expert will visit your home, understand requirements, and provide detailed 3D designs with transparent cost estimate within 5 days.`
      }
    ],
    nearbyAreas: [],
    specialties: ['Modular Kitchen', 'Wardrobe Design', 'Living Room', 'Bedroom Interior']
  };

  const seoData = seo || defaultSEO;
  
  // Enhanced Local Business Schema with location-specific data
  const localitySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://everyspaces.com/bangalore/${slug}#localbusiness`,
    "name": `EverySpaces Interior Designers ${localityName}`,
    "image": heroImage,
    "url": `https://everyspaces.com/bangalore/${slug}`,
    "telephone": "+91-9886579923",
    "email": "everyspaces.com@gmail.com",
    "description": seoData.metaDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": localityName,
      "addressRegion": "Bangalore, Karnataka",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": `${localityName}, Bangalore, Karnataka, India`
      },
      ...seoData.nearbyAreas.map(area => ({
        "@type": "Place",
        "name": `${area}, Bangalore, Karnataka, India`
      }))
    ],
    "priceRange": "₹₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Interior Design Services in ${localityName}`,
      "itemListElement": seoData.specialties.map(specialty => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `${specialty} in ${localityName}`,
          "description": `Professional ${specialty.toLowerCase()} services in ${localityName}, Bangalore by EverySpaces`
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "520",
      "reviewCount": "485"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Priya Sharma" },
        "datePublished": "2025-11-15",
        "reviewBody": `EverySpaces transformed our home in ${localityName} beautifully. The modular kitchen quality is outstanding and the team was very professional.`,
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rahul Menon" },
        "datePublished": "2025-10-22",
        "reviewBody": `Got our full home interiors done by EverySpaces in ${localityName}. Excellent design sense, premium materials, and the 10-year warranty gives great peace of mind.`,
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Anitha Reddy" },
        "datePublished": "2025-09-10",
        "reviewBody": `We chose EverySpaces for our interior work in ${localityName}. The wardrobe designs and false ceiling work exceeded our expectations. Highly recommend!`,
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ]
  };

  // Service schema for the locality
  const serviceSchema = createServiceSchema(
    `Interior Design Services in ${localityName}`,
    seoData.metaDescription,
    `https://everyspaces.com/bangalore/${slug}`,
    heroImage,
    "150000-2500000",
    {
      timeRequired: "P60D",
      areaServed: [localityName, ...seoData.nearbyAreas],
      features: seoData.specialties
    }
  );

  // Breadcrumb schema
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://everyspaces.com" },
    { name: "Bangalore", url: "https://everyspaces.com/bangalore" },
    { name: localityName, url: `https://everyspaces.com/bangalore/${slug}` }
  ], `bangalore/${slug}`);

  // FAQ schema with locality-specific FAQs
  const faqSchema = createFAQSchema(seoData.faqs, `bangalore/${slug}`);

  // WebPage schema with speakable for voice search
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://everyspaces.com/bangalore/${slug}#webpage`,
    "url": `https://everyspaces.com/bangalore/${slug}`,
    "name": seoData.metaTitle,
    "description": seoData.metaDescription,
    "isPartOf": {
      "@id": "https://everyspaces.com/#website"
    },
    "about": {
      "@id": `https://everyspaces.com/bangalore/${slug}#localbusiness`
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": heroImage
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "#locality-hero-headline",
        ".locality-description",
        ".faq-question",
        ".faq-answer"
      ]
    },
    "breadcrumb": {
      "@id": `https://everyspaces.com/bangalore/${slug}#breadcrumb`
    }
  };

  // Place schema for geo-location
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `https://everyspaces.com/bangalore/${slug}#place`,
    "name": `${localityName}, Bangalore`,
    "description": `Interior design services available in ${localityName}, Bangalore by EverySpaces`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": localityName,
      "addressRegion": "Bangalore, Karnataka",
      "addressCountry": "IN"
    },
    "containedInPlace": {
      "@type": "City",
      "name": "Bangalore"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{seoData.metaTitle}</title>
        <meta name="description" content={seoData.metaDescription} />
        <meta name="keywords" content={seoData.keywords.join(", ")} />
        <link rel="canonical" href={`https://everyspaces.com/bangalore/${slug}`} />
        
        {/* Robots meta for better crawling */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content={`${localityName}, Bangalore`} />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://everyspaces.com/bangalore/${slug}`} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="EverySpaces" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.ogTitle} />
        <meta name="twitter:description" content={seoData.ogDescription} />
        <meta name="twitter:image" content={heroImage} />
        
        {/* Additional SEO meta tags */}
        <meta name="author" content="EverySpaces" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="coverage" content={`${localityName}, Bangalore, Karnataka, India`} />
        <meta name="distribution" content="local" />
        <meta name="rating" content="general" />
        
        {/* Mobile optimization */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
      </Helmet>
      
      <StructuredData data={[localitySchema, serviceSchema, breadcrumbSchema, faqSchema, webPageSchema, placeSchema]} />
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
        <LocalityContentSection
          localityName={localityName}
          landmarks={seoData.landmarks}
          designTips={seoData.designTips}
          lifestyleDescription={seoData.lifestyleDescription}
        />
        <LocalityGallerySection
          localityName={localityName}
          images={galleryImages}
        />
        <RelatedServices currentSlug="modular-kitchen" />
        <RelatedLocalities currentSlug={slug} />
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
