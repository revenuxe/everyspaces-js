export interface ColorItem { name: string; shade: string; hex: string; usage: string; }
export interface FurnitureItem { name: string; detail: string; priceRange: string; }
export interface MaterialItem { item: string; type: string; why: string; }
export interface LightingLayer { type: string; suggestion: string; placement: string; }
export interface VastuTip { aspect: string; recommendation: string; modern_adaptation: string; }
export interface MaintenanceTask { item: string; frequency: string; method: string; cost: string; }

export interface Recommendation {
  headline: string;
  intro: string;
  colorPalette: { description: string; colors: ColorItem[] };
  furnitureLayout: { description: string; items: FurnitureItem[] };
  materials: { description: string; recommendations: MaterialItem[] };
  lighting: { description: string; layers: LightingLayer[] };
  vastuTips?: { description: string; tips: VastuTip[] };
  maintenanceGuide?: { description: string; tasks: MaintenanceTask[] };
  proTips?: string[];
  designerSecret: string;
  estimatedBudget: { low: string; high: string; note: string };
  estimatedTimeline: { days: string; breakdown: string; note: string };
  moodKeywords: string[];
  bangaloreSpecific?: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  options?: string[];
  inputPlaceholder?: string;
}
