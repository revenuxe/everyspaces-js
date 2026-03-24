import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { StaticImageData } from "next/image";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Next.js static imports resolve to StaticImageData; `<img src>` expects a string. */
export function imgSrc(src: string | StaticImageData): string {
  return typeof src === "string" ? src : src.src;
}
