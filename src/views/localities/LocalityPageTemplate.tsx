"use client";

import homeHeroImage from "@/assets/hero-interior.jpg";
import { getLocalityContent, getLocalityFAQs, LOCALITY_CONTENT } from "@/content/locality-content";
import { imgSrc } from "@/lib/utils";
import HeroSection from "@/components/HeroSection";
import HomePageSections from "@/components/HomePageSections";
import Header from "@/components/Header";
import LocalityBreadcrumb from "@/components/LocalityBreadcrumb";
import LocalityContentSection from "@/components/LocalityContentSection";
import RelatedLocalities from "@/components/RelatedLocalities";
import RelatedServices from "@/components/RelatedServices";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { 
  StructuredData, 
  createServiceSchema,
  createFAQSchema,
  createBreadcrumbSchema
} from "@/components/StructuredData";

interface LocalityPageProps { slug: string; }

const LocalityPageTemplate = ({ slug }: LocalityPageProps) => {
  const content = getLocalityContent(slug);
  if (!content) throw new Error(`Missing locality content: ${slug}`);
  const localityName = content.name;
  const cityName = "Bangalore";
  const cityPath = "bangalore";
  const cityRegion = "Karnataka";
  const heroUrl = imgSrc(homeHeroImage);
  const seoData = {
    metaTitle: `Interior Designers in ${localityName}, Bangalore | EverySpaces`,
    metaDescription: content.metaDescription,
    nearbyAreas: content.nearbySlugs.map((nearby) => LOCALITY_CONTENT[nearby].name),
    specialties: ["Full Home Interiors", "2 BHK Interiors", "3 BHK Interiors", "Modular Kitchens", "Wardrobe Design"],
    faqs: getLocalityFAQs(content),
  };
  // A locality is a service area, not a separate physical storefront. Marking it
  // as a LocalBusiness would make Google's required address data misleading.
  const localitySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.everyspaces.com/${cityPath}/${slug}#service-area`,
    "name": `Interior Design Services in ${localityName}`,
    "image": heroUrl,
    "url": `https://www.everyspaces.com/${cityPath}/${slug}`,
    "description": seoData.metaDescription,
    "provider": { "@id": "https://www.everyspaces.com/#organization" },
    "areaServed": [
      {
        "@type": "Place",
        "name": `${localityName}, ${cityRegion}, India`
      },
      ...seoData.nearbyAreas.map(area => ({
        "@type": "Place",
        "name": `${area}, ${cityRegion}, India`
      }))
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Interior Design Services in ${localityName}`,
      "itemListElement": seoData.specialties.map(specialty => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `${specialty} in ${localityName}`,
          "description": `Professional ${specialty.toLowerCase()} services in ${localityName}, ${cityName} by EverySpaces`
        }
      }))
    }
  };

  // Service schema for the locality
  const serviceSchema = createServiceSchema(
    `Interior Design Services in ${localityName}`,
    seoData.metaDescription,
    `https://www.everyspaces.com/${cityPath}/${slug}`,
    heroUrl,
    undefined,
    {
      areaServed: [localityName, ...seoData.nearbyAreas],
      features: seoData.specialties
    }
  );

  // Breadcrumb schema
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.everyspaces.com" },
    { name: cityName, url: `https://www.everyspaces.com/${cityPath}` },
    { name: localityName, url: `https://www.everyspaces.com/${cityPath}/${slug}` }
  ], `${cityPath}/${slug}`);

  // FAQ schema with locality-specific FAQs
  const faqSchema = createFAQSchema(seoData.faqs, `${cityPath}/${slug}`);

  // WebPage metadata matches the visible locality copy.
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://www.everyspaces.com/${cityPath}/${slug}#webpage`,
    "url": `https://www.everyspaces.com/${cityPath}/${slug}`,
    "name": seoData.metaTitle,
    "description": seoData.metaDescription,
    "isPartOf": {
      "@id": "https://www.everyspaces.com/#website"
    },
    "about": {
      "@id": `https://www.everyspaces.com/${cityPath}/${slug}#service-area`
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": heroUrl
    },
    "breadcrumb": {
      "@id": `https://www.everyspaces.com/${cityPath}/${slug}#breadcrumb`
    }
  };

  // Place schema for geo-location
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `https://www.everyspaces.com/${cityPath}/${slug}#place`,
    "name": `${localityName}, ${cityName}`,
    "description": `Interior design services available in ${localityName}, ${cityName} by EverySpaces`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": localityName,
      "addressRegion": cityRegion,
      "addressCountry": "IN"
    },
    "containedInPlace": {
      "@type": "City",
      "name": cityName
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={[localitySchema, serviceSchema, breadcrumbSchema, faqSchema, webPageSchema, placeSchema]} />
      <Header />
      
      <main className="minimal-home">
        <HeroSection
          locationLabel={`${localityName}, ${cityName}`}
          sourcePage={`/${cityPath}/${slug}`}
          formName={`${localityName} Landing Page Form`}
          headingPrefix="Interior Designers"
          description={content.heroDescription}
        />
        <HomePageSections faqs={seoData.faqs} locationLabel={localityName} localContent={
          <LocalityContentSection localityName={localityName} heading={content.heading} lifestyleDescription={content.introduction} designTips={content.designTips} />
        }>
          <LocalityBreadcrumb localityName={localityName} cityName={cityName} cityPath={`/${cityPath}`} />
          <RelatedServices currentSlug="modular-kitchen" />
          <RelatedLocalities currentSlug={slug} nearbySlugs={content.nearbySlugs} />
        </HomePageSections>
      </main>
      
      <Footer />
      <BottomNav />
    </div>
  );
};

export default LocalityPageTemplate;

