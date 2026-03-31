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
    ];
  },
};

export default nextConfig;
