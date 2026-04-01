import { defineCliConfig } from "sanity/cli";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import sanityProject from "./sanity.project.json";

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
  const raw = process.env?.[name] || readEnvFileValue(name);
  return raw.replace(/^"(.*)"$/, "$1").trim();
}

const projectId =
  readEnv("SANITY_STUDIO_PROJECT_ID") ||
  readEnv("NEXT_PUBLIC_SANITY_PROJECT_ID") ||
  sanityProject.projectId;
const dataset =
  readEnv("SANITY_STUDIO_DATASET") ||
  readEnv("NEXT_PUBLIC_SANITY_DATASET") ||
  sanityProject.dataset ||
  "production";

if (!projectId) {
  throw new Error(
    "Missing Sanity project ID. Set SANITY_STUDIO_PROJECT_ID in .env or projectId in sanity.project.json.",
  );
}

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
