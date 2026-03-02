export interface ColorItem { name: string; shade: string; hex: string; usage: string; }
export interface FurnitureItem { name: string; detail: string; priceRange: string; }
export interface MaterialItem { item: string; type: string; why: string; }
export interface LightingLayer { type: string; suggestion: string; placement: string; }

export interface Recommendation {
  headline: string;
  intro: string;
  colorPalette: { description: string; colors: ColorItem[] };
  furnitureLayout: { description: string; items: FurnitureItem[] };
  materials: { description: string; recommendations: MaterialItem[] };
  lighting: { description: string; layers: LightingLayer[] };
  designerSecret: string;
  estimatedBudget: { low: string; high: string; note: string };
  estimatedTimeline: { days: string; breakdown: string; note: string };
  moodKeywords: string[];
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  options?: string[];
  inputPlaceholder?: string;
}
