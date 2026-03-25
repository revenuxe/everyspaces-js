import AboutUs from "@/views/AboutUs";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/about-us"];

export default function AboutUsPage() {
  return <AboutUs />;
}

