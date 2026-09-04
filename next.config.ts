import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Earlier metadata used an uppercase city path. Preserve its equity and
      // ensure it can never become a canonical target or a 404 again.
      {
        source: "/Bangalore",
        destination: "/bangalore",
        permanent: true,
      },
      {
        source: "/Bangalore/:path*",
        destination: "/bangalore/:path*",
        permanent: true,
      },

      // Retire the old city architecture without leaving crawlers or users on dead URLs.
      {
        source: "/hyderabad/:path*",
        destination: "/bangalore",
        permanent: true,
      },

      // Legacy portfolio category URLs -> canonical portfolio hub
      {
        source: "/portfolio/bathroom",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/bedroom",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/kitchen",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/living-room",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/study-room",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/wardrobe",
        destination: "/portfolio",
        permanent: true,
      },

      // Legacy project-type URLs -> canonical service intent pages
      {
        source: "/project-type/2bhk",
        destination: "/services/2bhk-interiors",
        permanent: true,
      },
      {
        source: "/project-type/3bhk",
        destination: "/services/3bhk-interiors",
        permanent: true,
      },
      {
        source: "/project-type/4bhk",
        destination: "/services/full-home-design",
        permanent: true,
      },
      {
        source: "/project-type/penthouse",
        destination: "/services/villa-interiors",
        permanent: true,
      },

      // Legacy project detail URLs -> canonical portfolio hub
      {
        source: "/projects/2bhk-apartment",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/projects/3bhk-penthouse",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/projects/living-room-makeover",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/projects/luxury-villa",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/projects/master-bedroom",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/projects/modular-kitchen-project",
        destination: "/portfolio",
        permanent: true,
      },

      // Legacy service slugs -> canonical service pages
      {
        source: "/services/bathroom",
        destination: "/services/bathroom-design",
        permanent: true,
      },
      {
        source: "/services/bedroom",
        destination: "/services/bedroom-design",
        permanent: true,
      },
      {
        source: "/services/full-home",
        destination: "/services/full-home-design",
        permanent: true,
      },
      {
        source: "/services/wardrobes",
        destination: "/services/wardrobe-design",
        permanent: true,
      },
      {
        source: "/services/commercial",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/renovation",
        destination: "/services/full-home-design",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/articles",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
