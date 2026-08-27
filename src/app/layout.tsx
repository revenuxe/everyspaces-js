import type { Metadata } from "next";
import Providers from "./providers";
import "../index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.everyspaces.com"),
  title: {
    default: "EverySpaces | Best Interior Designers in Bangalore",
    template: "%s | EverySpaces",
  },
  description:
    "End to end interior solutions in Bangalore. Modular kitchens, wardrobes & home interiors with a 10-year warranty.",
  keywords: [
    "interior designers in bangalore",
    "modular kitchen bangalore",
    "home interior design bangalore",
    "best interior designers bangalore",
  ],
  authors: [{ name: "EverySpaces Interior Design" }],
  creator: "EverySpaces",
  publisher: "EverySpaces",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.everyspaces.com/",
    siteName: "EverySpaces Interior Design",
    title: "EverySpaces Interior Design | Best Interior Designers in Bangalore",
    description:
      "Transform your home with Bangalore interior designers. Modular kitchens, bedrooms, and smart living spaces. Free consultation. Call +91 9886579923",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EverySpaces Interior Design | Best Interior Designers in Bangalore",
    description:
      "Premium modular kitchens, bedrooms, and home interiors in Bangalore. Free consultation.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://www.everyspaces.com/" },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  appleWebApp: { capable: true, statusBarStyle: "black-translucent" },
  formatDetection: { telephone: true },
  category: "interior design",
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bangalore",
    "geo.position": "13.0297;77.6125",
    ICBM: "13.0297, 77.6125",
    "theme-color": "#0d3b4f",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

