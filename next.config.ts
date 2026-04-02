import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/hyderabad/indiranagar",
        destination: "/hyderabad/jubilee-hills",
        permanent: true,
      },
      {
        source: "/hyderabad/whitefield",
        destination: "/hyderabad/madhapur",
        permanent: true,
      },
      {
        source: "/hyderabad/hsr-layout",
        destination: "/hyderabad/kondapur",
        permanent: true,
      },
      {
        source: "/hyderabad/koramangala",
        destination: "/hyderabad/gachibowli",
        permanent: true,
      },
      {
        source: "/hyderabad/jp-nagar",
        destination: "/hyderabad/nallagandla",
        permanent: true,
      },
      {
        source: "/hyderabad/jayanagar",
        destination: "/hyderabad/himayatnagar",
        permanent: true,
      },
      {
        source: "/hyderabad/marathahalli",
        destination: "/hyderabad/nanakramguda",
        permanent: true,
      },
      {
        source: "/hyderabad/electronic-city",
        destination: "/hyderabad/hitec-city",
        permanent: true,
      },
      {
        source: "/hyderabad/sarjapur-road",
        destination: "/hyderabad/narsingi",
        permanent: true,
      },
      {
        source: "/hyderabad/bellandur",
        destination: "/hyderabad/financial-district",
        permanent: true,
      },
      {
        source: "/hyderabad/btm-layout",
        destination: "/hyderabad/ameerpet",
        permanent: true,
      },
      {
        source: "/hyderabad/hebbal",
        destination: "/hyderabad/kokapet",
        permanent: true,
      },
      {
        source: "/hyderabad/yelahanka",
        destination: "/hyderabad/kompally",
        permanent: true,
      },
      {
        source: "/hyderabad/banashankari",
        destination: "/hyderabad/uppal",
        permanent: true,
      },
      {
        source: "/hyderabad/malleshwaram",
        destination: "/hyderabad/secunderabad",
        permanent: true,
      },
      {
        source: "/hyderabad/rajajinagar",
        destination: "/hyderabad/miyapur",
        permanent: true,
      },
      {
        source: "/hyderabad/basavanagudi",
        destination: "/hyderabad/abids",
        permanent: true,
      },
      {
        source: "/hyderabad/sadashivanagar",
        destination: "/hyderabad/banjara-hills",
        permanent: true,
      },
      {
        source: "/hyderabad/rt-nagar",
        destination: "/hyderabad/manikonda",
        permanent: true,
      },
      {
        source: "/hyderabad/vijayanagar",
        destination: "/hyderabad/kukatpally",
        permanent: true,
      },
      {
        source: "/hyderabad/hbr-layout",
        destination: "/hyderabad/begumpet",
        permanent: true,
      },
      {
        source: "/bangalore/indiranagar",
        destination: "/hyderabad/jubilee-hills",
        permanent: true,
      },
      {
        source: "/bangalore/whitefield",
        destination: "/hyderabad/madhapur",
        permanent: true,
      },
      {
        source: "/bangalore/hsr-layout",
        destination: "/hyderabad/kondapur",
        permanent: true,
      },
      {
        source: "/bangalore/koramangala",
        destination: "/hyderabad/gachibowli",
        permanent: true,
      },
      {
        source: "/bangalore/jp-nagar",
        destination: "/hyderabad/nallagandla",
        permanent: true,
      },
      {
        source: "/bangalore/jayanagar",
        destination: "/hyderabad/himayatnagar",
        permanent: true,
      },
      {
        source: "/bangalore/marathahalli",
        destination: "/hyderabad/nanakramguda",
        permanent: true,
      },
      {
        source: "/bangalore/electronic-city",
        destination: "/hyderabad/hitec-city",
        permanent: true,
      },
      {
        source: "/bangalore/sarjapur-road",
        destination: "/hyderabad/narsingi",
        permanent: true,
      },
      {
        source: "/bangalore/bellandur",
        destination: "/hyderabad/financial-district",
        permanent: true,
      },
      {
        source: "/bangalore/btm-layout",
        destination: "/hyderabad/ameerpet",
        permanent: true,
      },
      {
        source: "/bangalore/hebbal",
        destination: "/hyderabad/kokapet",
        permanent: true,
      },
      {
        source: "/bangalore/yelahanka",
        destination: "/hyderabad/kompally",
        permanent: true,
      },
      {
        source: "/bangalore/banashankari",
        destination: "/hyderabad/uppal",
        permanent: true,
      },
      {
        source: "/bangalore/malleshwaram",
        destination: "/hyderabad/secunderabad",
        permanent: true,
      },
      {
        source: "/bangalore/rajajinagar",
        destination: "/hyderabad/miyapur",
        permanent: true,
      },
      {
        source: "/bangalore/basavanagudi",
        destination: "/hyderabad/abids",
        permanent: true,
      },
      {
        source: "/bangalore/sadashivanagar",
        destination: "/hyderabad/banjara-hills",
        permanent: true,
      },
      {
        source: "/bangalore/rt-nagar",
        destination: "/hyderabad/manikonda",
        permanent: true,
      },
      {
        source: "/bangalore/vijayanagar",
        destination: "/hyderabad/kukatpally",
        permanent: true,
      },
      {
        source: "/bangalore/hbr-layout",
        destination: "/hyderabad/begumpet",
        permanent: true,
      },
      {
        source: "/bangalore",
        destination: "/hyderabad",
        permanent: true,
      },
      {
        source: "/bangalore/:path*",
        destination: "/hyderabad/:path*",
        permanent: true,
      },
      // Legacy location URL structure -> canonical Hyderabad locality pages
      {
        source: "/area/banjara-hills",
        destination: "/hyderabad/banjara-hills",
        permanent: true,
      },
      {
        source: "/area/financial-district",
        destination: "/hyderabad/financial-district",
        permanent: true,
      },
      {
        source: "/area/gachibowli",
        destination: "/hyderabad/gachibowli",
        permanent: true,
      },
      {
        source: "/area/hitec-city",
        destination: "/hyderabad/hitec-city",
        permanent: true,
      },
      {
        source: "/area/jubilee-hills",
        destination: "/hyderabad/jubilee-hills",
        permanent: true,
      },
      {
        source: "/area/kokapet",
        destination: "/hyderabad/kokapet",
        permanent: true,
      },
      {
        source: "/area/kondapur",
        destination: "/hyderabad/kondapur",
        permanent: true,
      },
      {
        source: "/area/madhapur",
        destination: "/hyderabad/madhapur",
        permanent: true,
      },
      {
        source: "/area/narsingi",
        destination: "/hyderabad/narsingi",
        permanent: true,
      },
      {
        source: "/area/tellapur",
        destination: "/hyderabad/nallagandla",
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
    ];
  },
};

export default nextConfig;
