import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function readEnvFileValue(name: string): string {
  try {
    const envPath = resolve(process.cwd(), ".env");
    if (!existsSync(envPath)) return "";
    const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
    const prefix = `${name}=`;
    const line = lines.find((l) => l.trim().startsWith(prefix));
    if (!line) return "";
    const raw = line.slice(line.indexOf("=") + 1).trim();
    return raw.replace(/^"(.*)"$/, "$1").trim();
  } catch {
    return "";
  }
}

function readEnv(name: string): string {
  const envFromProcess = process.env?.[name];
  const envFromImportMeta = (import.meta as any)?.env?.[name] as string | undefined;
  const envFromFile = readEnvFileValue(name);
  const raw = envFromProcess ?? envFromImportMeta ?? envFromFile ?? "";
  return raw.replace(/^"(.*)"$/, "$1").trim();
}

const projectId = readEnv("SANITY_STUDIO_PROJECT_ID") || readEnv("NEXT_PUBLIC_SANITY_PROJECT_ID");
const dataset = readEnv("SANITY_STUDIO_DATASET") || readEnv("NEXT_PUBLIC_SANITY_DATASET") || "production";

if (!projectId) {
  throw new Error(
    "Missing Sanity project ID. Set SANITY_STUDIO_PROJECT_ID (or NEXT_PUBLIC_SANITY_PROJECT_ID) in .env.",
  );
}

export default defineConfig({
  name: "everyspaces",
  title: "EverySpaces CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
