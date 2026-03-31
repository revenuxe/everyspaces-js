import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./providers";
import "../index.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://everyspaces.com"),
  title: {
    default: "EverySpaces | Best Interior Designers in Hyderabad",
    template: "%s | EverySpaces",
  },
  description:
    "End to End Interior Solutions in Hyderabad. Modular kitchens, wardrobes & home interiors with 10-year warranty. Free consultation!",
  keywords: [
    "interior designers in hyderabad",
    "modular kitchen hyderabad",
    "home interior design hyderabad",
    "best interior designers hyderabad",
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
    url: "https://everyspaces.com/",
    siteName: "EverySpaces Interior Design",
    title: "EverySpaces Interior Design | Best Interior Designers in Hyderabad",
    description:
      "Transform your home with Hyderabad interior designers. Modular kitchens, bedrooms, and smart living spaces. Free consultation. Call +91 9886579923",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EverySpaces Interior Design | Best Interior Designers in Hyderabad",
    description:
      "Premium modular kitchens, bedrooms, and home interiors in Hyderabad. Free consultation.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://everyspaces.com/" },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  appleWebApp: { capable: true, statusBarStyle: "black-translucent" },
  formatDetection: { telephone: true },
  category: "interior design",
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Hyderabad",
    "geo.position": "13.0297;77.6125",
    ICBM: "13.0297, 77.6125",
    "theme-color": "#0d3b4f",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

