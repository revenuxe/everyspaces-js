import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const QUESTIONS = [
  {
    key: "name",
    message: "Hey! 👋 I'm Orza — your personal interior designer. What's your name?",
    options: [],
    inputPlaceholder: "Enter your name...",
  },
  {
    key: "location",
    message: "Which city are you in? 📍",
    options: ["Bangalore", "Mysore", "Hyderabad", "Chennai", "Mumbai", "Other"],
    inputPlaceholder: "Or type your city...",
  },
  {
    key: "space",
    message: "What space are you looking to design? ✨",
    options: ["Full Home Interiors", "Modular Kitchen", "Bedroom", "Living Room", "Wardrobe", "TV Unit", "Pooja Room", "2BHK", "3BHK", "Villa", "Study Room", "Kids Room"],
  },
  {
    key: "vibe",
    message: "How do you want it to feel? 🎨",
    options: ["Modern & Minimal", "Luxury", "Contemporary", "Traditional", "Scandinavian", "Industrial", "Budget-Friendly"],
  },
  {
    key: "budget",
    message: "What's your budget range? 💰",
    options: ["Under ₹3 Lakhs", "₹3-6 Lakhs", "₹6-10 Lakhs", "₹10-15 Lakhs", "₹15 Lakhs+", "Not sure yet"],
  },
  {
    key: "details",
    message: "Any special requirements? 🏠",
    options: ["Vastu Compliant", "Pet Friendly", "Kid Safe", "Work From Home", "Lots of Storage", "Low Maintenance", "None"],
  },
];

const RECOMMENDATION_SCHEMA = `Return VALID JSON ONLY (no markdown) with this structure:
{
  "headline": "Inspiring one-line headline",
  "intro": "2-3 sentence emotional hook making them feel the space",
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
    "recommendations": [{"item": "Name", "type": "Brand/type", "why": "Why it works"}]
  },
  "lighting": {
    "description": "2-3 sentences",
    "layers": [{"type": "Ambient/Task/Accent", "suggestion": "Fixture rec", "placement": "Where"}]
  },
  "designerSecret": "One insider tip they won't find on Pinterest",
  "estimatedBudget": {"low": "₹X,XX,XXX", "high": "₹X,XX,XXX", "note": "What's included"},
  "moodKeywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"]
}`;

const RETRY_DELAYS_MS = [1500, 3000];
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const callGemini = async (apiKey: string, body: object): Promise<Response | null> => {
  let response: Response | null = null;
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
    );
    if (response.status !== 429) break;
    if (attempt < RETRY_DELAYS_MS.length) {
      const retryAfter = Number(response.headers.get("Retry-After") ?? 0);
      await sleep(retryAfter > 0 ? retryAfter * 1000 : RETRY_DELAYS_MS[attempt]);
    }
  }
  return response;
};

const buildFallback = (space: string, vibe: string, budget: string, details: string) => ({
  headline: `Your ${vibe} ${space} — curated for beautiful living`,
  intro: `Picture yourself walking into your ${space} and feeling instantly at peace. That's what we're creating for you.`,
  colorPalette: {
    description: "A warm neutral foundation with one refined accent that elevates the entire space.",
    colors: [
      { name: "Warm Ivory", shade: "Asian Paints L152", hex: "#F3EDE2", usage: "Main walls" },
      { name: "Greige Stone", shade: "Berger 8P2672", hex: "#CFC5B7", usage: "Feature wall" },
      { name: "Muted Sage", shade: "Asian Paints 9458", hex: "#A9B4A4", usage: "Soft furnishings" },
      { name: "Walnut", shade: "Wood Tone", hex: "#6B4F3E", usage: "Furniture accents" },
    ],
  },
  furnitureLayout: {
    description: "Proportionate furniture with clear circulation paths and built-in storage.",
    items: [
      { name: "Primary Piece", detail: "Low-profile, clean lines — scaled for modern apartments", priceRange: "₹35,000 - ₹95,000" },
      { name: "Storage Unit", detail: "Floor-to-ceiling with internal organizers", priceRange: "₹45,000 - ₹1,60,000" },
    ],
  },
  materials: {
    description: "Humidity and dust demand moisture-resistant, low-maintenance finishes.",
    recommendations: [
      { item: "Core carcass", type: "BWP Plywood (Century)", why: "Moisture resistant" },
      { item: "Hardware", type: "Hettich soft-close", why: "Durable daily use" },
      { item: "Finish", type: "Matte laminate", why: "Low maintenance, premium look" },
    ],
  },
  lighting: {
    description: "Three-layer lighting strategy for mood, function, and visual depth.",
    layers: [
      { type: "Ambient", suggestion: "Warm 3000K recessed LEDs", placement: "Ceiling perimeter" },
      { type: "Task", suggestion: "Focused wall-wash lights", placement: "Work zones" },
      { type: "Accent", suggestion: "Cove lighting", placement: "Feature wall" },
    ],
  },
  designerSecret: `Hide daily-use storage behind flush paneling — it's the fastest way to make any apartment look premium.${details !== "None" && details !== "none" ? ` We'll also factor in: ${details}.` : ""}`,
  estimatedBudget: {
    low: budget.includes("Under") ? "₹1,50,000" : budget.includes("3-6") ? "₹3,00,000" : budget.includes("6-10") ? "₹6,00,000" : budget.includes("10-15") ? "₹10,00,000" : budget.includes("15") ? "₹15,00,000" : "₹2,80,000",
    high: budget.includes("Under") ? "₹3,00,000" : budget.includes("3-6") ? "₹6,00,000" : budget.includes("6-10") ? "₹10,00,000" : budget.includes("10-15") ? "₹15,00,000" : budget.includes("15") ? "₹25,00,000" : "₹6,50,000",
    note: `${space} with ${vibe} style — current market rates`,
  },
  moodKeywords: [vibe || "refined", "functional", "timeless", "modern", "curated"],
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { phase, step, name } = body;
    const GEMINI_API_KEY = Deno.env.get("GOOGLE_GEMINI_API_KEY");
    if (!GEMINI_API_KEY) throw new Error("GOOGLE_GEMINI_API_KEY is not configured");

    // Phase: structured questions
    if (phase === "question") {
      const questionIndex = typeof step === "number" ? step : 0;
      if (questionIndex < QUESTIONS.length) {
        const q = { ...QUESTIONS[questionIndex] };
        // Personalize location question with name
        if (q.key === "location" && name) {
          q.message = `Nice to meet you, ${name}! 😊 Which city are you in? 📍`;
        }
        return new Response(
          JSON.stringify({ type: "question", message: q.message, options: q.options, key: q.key, step: questionIndex, inputPlaceholder: q.inputPlaceholder }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      return new Response(
        JSON.stringify({ type: "ready" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Phase: generate recommendation
    if (phase === "recommend") {
      const { space = "living room", vibe = "modern", budget = "balanced", details = "none", location = "" } = body;

      const prompt = `You are Orza, a premium interior designer with 15+ years experience. Create a detailed, personalized interior design recommendation. ${RECOMMENDATION_SCHEMA}\n\nClient Requirements:\n- Space: ${space}\n- Style: ${vibe}\n- Budget: ${budget}\n- Location: ${location}\n- Special Requirements: ${details}\n\nMake it specific to the client's location and climate. Be detailed with real price ranges in INR.`;

      const resp = await callGemini(GEMINI_API_KEY, {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.8, responseMimeType: "application/json", maxOutputTokens: 1800 },
      });

      if (!resp || !resp.ok) {
        const fb = buildFallback(space, vibe, budget, details);
        return new Response(JSON.stringify({ type: "recommendation", data: fb, source: "fallback" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const data = await resp.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      let parsed;
      try { parsed = JSON.parse(text); } catch { parsed = buildFallback(space, vibe, budget, details); }

      return new Response(JSON.stringify({ type: "recommendation", data: parsed, source: "gemini" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Invalid phase" }), {
      status: 400,
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
