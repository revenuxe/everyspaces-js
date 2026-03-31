import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
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
