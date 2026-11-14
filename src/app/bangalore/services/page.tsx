import Services from "@/views/Services";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/bangalore/services"];

export default function BangaloreServicesPage() {
  return <Services />;
}
