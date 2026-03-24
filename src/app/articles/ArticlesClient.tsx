"use client";

import dynamic from "next/dynamic";

const Articles = dynamic(() => import("@/views/Articles"), { ssr: false });

export default function ArticlesClient() {
  return <Articles />;
}
