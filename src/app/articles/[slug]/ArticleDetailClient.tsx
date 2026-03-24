"use client";

import dynamic from "next/dynamic";

const ArticleDetail = dynamic(() => import("@/views/ArticleDetail"), { ssr: false });

export default function ArticleDetailClient({ slug }: { slug: string }) {
  return <ArticleDetail slug={slug} />;
}
