import Contact from "@/views/Contact";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/contact"];

export default function ContactPage() {
  return <Contact />;
}
