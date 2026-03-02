import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Orza — a senior interior designer with 15+ years of hands-on experience designing 800+ homes across Bangalore (Koramangala, HSR Layout, Whitefield, Indiranagar, Electronic City, JP Nagar, Jayanagar, Sarjapur Road, Hebbal).

Create a curated, high-end, practical interior recommendation for Bangalore homes.
Return VALID JSON ONLY (no markdown) with this structure:
{
  "headline": "Inspiring one-line headline",
  "intro": "2-3 sentence emotional hook",
  "colorPalette": {
    "description": "2-3 sentences about color story",
    "colors": [{"name": "Name", "shade": "Asian Paints/Berger code", "hex": "#hex", "usage": "Where to use"}]
  },
  "furnitureLayout": {
    "description": "2-3 sentences",
    "items": [{"name": "Item", "detail": "Specific rec with dimensions", "priceRange": "₹XX,XXX - ₹XX,XXX"}]
  },
  "materials": {
    "description": "2-3 sentences for Bangalore climate",
    "recommendations": [{"item": "Name", "type": "Brand/type", "why": "Why it works in Bangalore"}]
  },
  "lighting": {
    "description": "2-3 sentences",
    "layers": [{"type": "Ambient/Task/Accent", "suggestion": "Fixture rec", "placement": "Where"}]
  },
  "designerSecret": "One insider tip they won't find on Pinterest",
  "estimatedBudget": {"low": "₹X,XX,XXX", "high": "₹X,XX,XXX", "note": "What's included"},
  "moodKeywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"]
}`;

const RETRY_DELAYS_MS = [1200, 2400];
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const buildQuestion = (index: number, previousAnswer = "") => {
  const reactions = [
    "Love that choice ✨",
    "Beautiful direction 👌",
    "Great taste 💫",
    "Perfect, that helps a lot 🙌",
  ];

  const baseQuestions = [
    "Hey there! 👋 I'm Orza, your personal interior designer. What space are we transforming today?",
    "How do you want it to feel — calm & minimal, warm & cozy, bold & modern, luxurious, or something else?",
    "Got it. Are we keeping it smart and efficient, balanced, or premium all the way?",
    "Anything important I should know — storage needs, kids, pets, WFH setup, or vastu preferences?",
  ];

  if (index === 0) return baseQuestions[0];
  return `${reactions[Math.min(index - 1, reactions.length - 1)]} ${baseQuestions[index]}`;
};

const buildFallbackRecommendation = (space: string, vibe: string, budget: string, details: string) => ({
  headline: `${vibe} ${space} concept for Bangalore living`,
  intro: `Imagine stepping into your ${space} and instantly feeling ${vibe.toLowerCase()}. This curated concept balances aesthetics, comfort, and practical Bangalore living conditions.`,
  colorPalette: {
    description: "A layered neutral base with one refined accent keeps the space timeless and elegant.",
    colors: [
      { name: "Warm Ivory", shade: "Asian Paints L152", hex: "#F3EDE2", usage: "Main wall base" },
      { name: "Greige Stone", shade: "Berger 8P2672", hex: "#CFC5B7", usage: "Feature wall" },
      { name: "Muted Sage", shade: "Asian Paints 9458", hex: "#A9B4A4", usage: "Soft furnishings" },
      { name: "Walnut Brown", shade: "Wood Tone", hex: "#6B4F3E", usage: "Furniture accents" },
    ],
  },
  furnitureLayout: {
    description: "Keep circulation clear, use proportionate furniture, and build hidden storage where possible.",
    items: [
      { name: "Primary Seating/Bed Unit", detail: "Low-profile piece with clean lines, scaled for apartment flow.", priceRange: "₹35,000 - ₹95,000" },
      { name: "Storage Console/Wardrobe", detail: "Floor-to-ceiling shutters with internal organizers.", priceRange: "₹45,000 - ₹1,60,000" },
    ],
  },
  materials: {
    description: "Bangalore humidity and dust call for moisture-resistant, low-maintenance finishes.",
    recommendations: [
      { item: "Core carcass", type: "BWP plywood (Century/Greenply)", why: "Better moisture resistance" },
      { item: "Hardware", type: "Hettich/Hafele soft-close", why: "Durable and smooth daily use" },
      { item: "Finish", type: "Matte laminate + selective PU", why: "Balanced look and maintenance" },
    ],
  },
  lighting: {
    description: "Use a 3-layer lighting strategy for mood, function, and depth.",
    layers: [
      { type: "Ambient", suggestion: "Warm 3000K recessed LEDs", placement: "Ceiling perimeter" },
      { type: "Task", suggestion: "Focused wall/under-cabinet lights", placement: "Work/use zones" },
      { type: "Accent", suggestion: "Cove/profile lighting", placement: "Feature wall or niches" },
    ],
  },
  designerSecret: `In Bangalore apartments, visual clutter is the biggest luxury killer — hide daily-use storage behind clean paneling for an instantly premium feel.${details ? ` Also, we’ll account for: ${details}.` : ""}`,
  estimatedBudget: {
    low: budget.toLowerCase().includes("smart") ? "₹1,80,000" : budget.toLowerCase().includes("premium") ? "₹4,50,000" : "₹2,80,000",
    high: budget.toLowerCase().includes("smart") ? "₹3,50,000" : budget.toLowerCase().includes("premium") ? "₹9,50,000" : "₹6,50,000",
    note: `Estimate range for ${space} scope with ${budget} approach in Bangalore market.`,
  },
  moodKeywords: [vibe || "refined", "functional", "timeless", "Bangalore-ready", "curated"],
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { messages = [] } = await req.json();
    const userMessages = (Array.isArray(messages) ? messages : []).filter((m) => m?.role === "user").map((m) => String(m.content || "").trim()).filter(Boolean);

    // Ask questions locally to avoid hitting Gemini rate limits on every step
    if (userMessages.length < 4) {
      const nextQuestion = buildQuestion(userMessages.length, userMessages[userMessages.length - 1] || "");
      return new Response(JSON.stringify({ type: "question", message: nextQuestion }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const space = userMessages[0];
    const vibe = userMessages[1];
    const budget = userMessages[2];
    const details = userMessages.slice(3).join(" ");

    const GEMINI_API_KEY = Deno.env.get("GOOGLE_GEMINI_API_KEY");
    if (!GEMINI_API_KEY) {
      throw new Error("GOOGLE_GEMINI_API_KEY is not configured");
    }

    const prompt = `${SYSTEM_PROMPT}\n\nClient profile:\n- Space: ${space}\n- Desired feeling: ${vibe}\n- Budget approach: ${budget}\n- Special requirements: ${details || "None mentioned"}`;

    const requestBody = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.8,
        responseMimeType: "application/json",
        maxOutputTokens: 1200,
      },
    };

    let response: Response | null = null;
    for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
      response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (response.status !== 429) break;
      if (attempt < RETRY_DELAYS_MS.length) {
        const retryAfterSeconds = Number(response.headers.get("Retry-After") ?? 0);
        const waitMs = retryAfterSeconds > 0 ? retryAfterSeconds * 1000 : RETRY_DELAYS_MS[attempt];
        await sleep(waitMs);
      }
    }

    if (!response || !response.ok) {
      // Graceful fallback so UI always works even if Gemini is rate-limited
      const fallback = buildFallbackRecommendation(space, vibe, budget, details);
      return new Response(JSON.stringify({ type: "recommendation", message: "I’ve curated a premium concept for you ✨", data: fallback, source: "fallback" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = buildFallbackRecommendation(space, vibe, budget, details);
    }

    return new Response(JSON.stringify({ type: "recommendation", message: "Perfect — here’s your curated plan ✨", data: parsed, source: "gemini" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in orza-ai:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
