import { PAGE_METADATA } from "@/seo/pages-metadata";
import ArticlesClient from "./ArticlesClient";

export const metadata = PAGE_METADATA["/articles"];

export default function ArticlesPage() {
  return <ArticlesClient />;
}
