import Terms from "@/views/Terms";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/terms"];

export default function TermsPage() {
  return <Terms />;
}
