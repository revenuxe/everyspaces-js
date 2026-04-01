import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { loadEnv } from "vite";
import { schemaTypes } from "./src/sanity/schemaTypes";

/**
 * Sanity Studio is served by Vite. `sanity.config.ts` is evaluated in the browser too, where
 * `process.env` is not populated from `.env`. We therefore:
 * - In Node (SSR / dev server bootstrap): read `.env` via Vite's `loadEnv` (no `node:fs` import).
 * - In the browser: rely on `import.meta.env` — use `VITE_SANITY_*` (always exposed by Vite) or
 *   keep duplicates of `SANITY_STUDIO_*` / `NEXT_PUBLIC_*` with `vite.envPrefix` below.
 */
function stripQuotes(value: string): string {
  return value.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1").trim();
}

function getEnvRecord(): Record<string, string> {
  if (typeof window !== "undefined") {
    return {};
  }
  try {
    const mode = process.env.NODE_ENV || "development";
    // Empty prefix loads all keys from `.env`, `.env.local`, etc. (Vite behavior)
    return loadEnv(mode, process.cwd(), "");
  } catch {
    return {};
  }
}

const fileEnv = getEnvRecord();
const im = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};

function pickProjectId(): string {
  return stripQuotes(
    fileEnv.SANITY_STUDIO_PROJECT_ID ||
      fileEnv.NEXT_PUBLIC_SANITY_PROJECT_ID ||
      fileEnv.VITE_SANITY_STUDIO_PROJECT_ID ||
      fileEnv.VITE_SANITY_PROJECT_ID ||
      (im.VITE_SANITY_STUDIO_PROJECT_ID as string | undefined) ||
      (im.VITE_SANITY_PROJECT_ID as string | undefined) ||
      (im.SANITY_STUDIO_PROJECT_ID as string | undefined) ||
      (im.NEXT_PUBLIC_SANITY_PROJECT_ID as string | undefined) ||
      (typeof process !== "undefined" ? process.env?.SANITY_STUDIO_PROJECT_ID : undefined) ||
      (typeof process !== "undefined" ? process.env?.NEXT_PUBLIC_SANITY_PROJECT_ID : undefined) ||
      "",
  );
}

function pickDataset(): string {
  const raw = stripQuotes(
    fileEnv.SANITY_STUDIO_DATASET ||
      fileEnv.NEXT_PUBLIC_SANITY_DATASET ||
      fileEnv.VITE_SANITY_STUDIO_DATASET ||
      fileEnv.VITE_SANITY_DATASET ||
      (im.VITE_SANITY_STUDIO_DATASET as string | undefined) ||
      (im.VITE_SANITY_DATASET as string | undefined) ||
      (im.SANITY_STUDIO_DATASET as string | undefined) ||
      (im.NEXT_PUBLIC_SANITY_DATASET as string | undefined) ||
      (typeof process !== "undefined" ? process.env?.SANITY_STUDIO_DATASET : undefined) ||
      (typeof process !== "undefined" ? process.env?.NEXT_PUBLIC_SANITY_DATASET : undefined) ||
      "",
  );
  return raw || "production";
}

const projectId = pickProjectId();
const dataset = pickDataset();

if (!projectId) {
  throw new Error(
    "Missing Sanity project ID. Add to `.env` at the repo root (same folder as sanity.config.ts):\n" +
      "  SANITY_STUDIO_PROJECT_ID=yourId\n" +
      "  SANITY_STUDIO_DATASET=production\n" +
      "For Studio in the browser, also set (duplicate is OK — project id is public):\n" +
      "  VITE_SANITY_STUDIO_PROJECT_ID=yourId\n" +
      "  VITE_SANITY_STUDIO_DATASET=production\n" +
      "Then stop any process on port 3333 and run `npm run sanity dev` again.",
  );
}

export default defineConfig({
  name: "everyspaces",
  title: "EverySpaces CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [deskTool()],
  vite: {
    // Expose these prefixes to import.meta.env in the Studio bundle
    envPrefix: ["VITE_", "SANITY_STUDIO_", "NEXT_PUBLIC_"],
  },
  schema: {
    types: schemaTypes,
  },
});
