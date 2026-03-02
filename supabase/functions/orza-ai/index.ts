import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// ── Base questions (steps 0-2) ──
const BASE_QUESTIONS = [
  {
    key: "name",
    message: "Hey! 👋 I'm Orza — your personal interior designer. What's your name?",
    options: [] as string[],
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
];

// ── Space-specific follow-up questions ──
const SPACE_FOLLOWUPS: Record<string, Array<{ key: string; message: string; options: string[]; inputPlaceholder?: string }>> = {
  "Full Home Interiors": [
    { key: "home_size", message: "What's your home size? 🏠", options: ["1BHK", "2BHK", "3BHK", "4BHK+", "Independent House"] },
    { key: "priority_rooms", message: "Which rooms are your top priority? (pick the main ones) 🎯", options: ["Kitchen", "Master Bedroom", "Living Room", "Kids Room", "Study/Office", "All Rooms Equally"] },
    { key: "vibe", message: "What overall vibe are you going for? 🎨", options: ["Modern & Minimal", "Luxury", "Contemporary", "Traditional Indian", "Scandinavian", "Budget-Friendly"] },
  ],
  "Modular Kitchen": [
    { key: "kitchen_shape", message: "What's your kitchen layout? 🍳", options: ["L-Shaped", "U-Shaped", "Straight/Parallel", "Island Kitchen", "Not sure"] },
    { key: "kitchen_size", message: "Approximate kitchen size? 📐", options: ["Small (< 60 sqft)", "Medium (60-100 sqft)", "Large (100+ sqft)", "Not sure"] },
    { key: "vibe", message: "What style do you prefer for the kitchen? 🎨", options: ["Modern & Sleek", "Luxury", "Warm & Rustic", "Traditional", "Budget-Friendly"] },
    { key: "kitchen_needs", message: "Any specific kitchen needs? 🔧", options: ["Lots of Storage", "Breakfast Counter", "Built-in Appliances", "Chimney & Hob Setup", "Wet & Dry Kitchen", "None"] },
  ],
  "Bedroom": [
    { key: "bedroom_type", message: "Which bedroom is this? 🛏️", options: ["Master Bedroom", "Guest Bedroom", "Kids Bedroom", "Teen Room"] },
    { key: "bedroom_size", message: "What's the room size approximately? 📐", options: ["Small (< 120 sqft)", "Medium (120-180 sqft)", "Large (180+ sqft)", "Not sure"] },
    { key: "vibe", message: "What mood do you want for the bedroom? 🎨", options: ["Cozy & Warm", "Modern & Minimal", "Luxury Hotel Feel", "Bohemian", "Scandinavian", "Budget-Friendly"] },
    { key: "bedroom_must", message: "Must-have in the bedroom? ✅", options: ["Walk-in Wardrobe", "Study Corner", "Dressing Area", "King Size Bed", "Storage Bed", "None specific"] },
  ],
  "Living Room": [
    { key: "living_size", message: "How big is your living room? 📐", options: ["Compact (< 150 sqft)", "Medium (150-250 sqft)", "Large (250+ sqft)", "Open Plan"] },
    { key: "vibe", message: "What vibe do you want? 🎨", options: ["Modern & Minimal", "Luxury Lounge", "Warm & Cozy", "Contemporary", "Traditional", "Budget-Friendly"] },
    { key: "living_needs", message: "Key requirements? 🎯", options: ["TV Unit + Entertainment", "Sofa Seating Focus", "Dining Combo", "Bookshelf/Display", "Home Office Corner", "None specific"] },
  ],
  "Wardrobe": [
    { key: "wardrobe_type", message: "What type of wardrobe? 👔", options: ["Sliding Door", "Hinged Door", "Walk-in Closet", "Open Wardrobe", "Not sure"] },
    { key: "wardrobe_size", message: "Space available for the wardrobe? 📐", options: ["4-6 feet wide", "6-8 feet wide", "8-10 feet wide", "Full wall", "Not sure"] },
    { key: "vibe", message: "What finish/look do you prefer? 🎨", options: ["Modern Matte", "Glossy & Premium", "Wood Texture", "Minimalist White", "Budget-Friendly"] },
  ],
  "TV Unit": [
    { key: "tv_wall", message: "What's your TV wall situation? 📺", options: ["Full Wall Available", "Compact Space", "Part of Living Room", "Bedroom TV", "Not sure"] },
    { key: "vibe", message: "What style for the TV unit? 🎨", options: ["Floating/Wall Mounted", "Floor Standing", "Full Wall Panel", "Minimal Shelf", "Traditional Cabinet"] },
    { key: "tv_extras", message: "Any extras needed? 🔧", options: ["Back Panel Lighting", "Storage Below", "Display Shelves", "Cable Management", "Speaker Setup", "None"] },
  ],
  "Pooja Room": [
    { key: "pooja_type", message: "What type of pooja space? 🙏", options: ["Dedicated Room", "Wall-mounted Mandir", "Corner Unit", "Pooja Niche/Alcove", "Not sure"] },
    { key: "vibe", message: "What style? 🎨", options: ["Traditional Carved", "Modern Minimal", "Temple Style", "Contemporary with LED", "Budget-Friendly"] },
    { key: "pooja_material", message: "Preferred material? 🪵", options: ["Solid Wood (Teak)", "Engineered Wood", "Marble/Stone", "Brass Accents", "Not sure"] },
  ],
  "2BHK": [
    { key: "priority_rooms", message: "Which areas matter most to you? 🎯", options: ["Kitchen", "Master Bedroom", "Living Room", "Second Bedroom", "All Equally"] },
    { key: "vibe", message: "What's your style preference? 🎨", options: ["Modern & Minimal", "Luxury", "Space-Saving Smart", "Traditional", "Contemporary", "Budget-Friendly"] },
    { key: "bhk_focus", message: "Main concern for your 2BHK? 💡", options: ["Maximize Storage", "Make it Look Spacious", "Multi-functional Furniture", "Premium Finishes", "Kid-Friendly", "None specific"] },
  ],
  "3BHK": [
    { key: "priority_rooms", message: "Which areas are top priority? 🎯", options: ["Kitchen", "Master Bedroom", "Living + Dining", "Kids Room", "Study/Office", "All Rooms"] },
    { key: "vibe", message: "What style are you going for? 🎨", options: ["Modern & Minimal", "Luxury", "Contemporary", "Traditional", "Scandinavian", "Budget-Friendly"] },
    { key: "bhk_focus", message: "Main goal for the 3BHK? 💡", options: ["Coordinated Theme", "Room-wise Different Styles", "Maximize Storage", "Entertainment Friendly", "Kid + Pet Friendly", "Premium Materials"] },
  ],
  "Villa": [
    { key: "villa_size", message: "How many floors/BHK? 🏡", options: ["3BHK Villa", "4BHK Villa", "5BHK+ Villa", "Duplex", "Not sure"] },
    { key: "priority_rooms", message: "Priority areas? 🎯", options: ["Grand Living Room", "Kitchen & Dining", "Master Suite", "Outdoor/Garden", "Staircase Area", "All Areas"] },
    { key: "vibe", message: "What style for the villa? 🎨", options: ["Modern Luxury", "Classic Elegant", "Contemporary Tropical", "Mediterranean", "Minimalist", "Traditional Indian"] },
  ],
  "Study Room": [
    { key: "study_for", message: "Who is the study room for? 📚", options: ["Work From Home Professional", "Student", "Reading/Library", "Shared Study", "Creative Studio"] },
    { key: "study_size", message: "Room size? 📐", options: ["Small (< 80 sqft)", "Medium (80-120 sqft)", "Large (120+ sqft)", "Corner of Another Room"] },
    { key: "vibe", message: "What atmosphere? 🎨", options: ["Productive & Clean", "Cozy Library Feel", "Modern Tech Setup", "Creative & Colorful", "Minimal & Focused"] },
  ],
  "Kids Room": [
    { key: "kid_age", message: "What age group? 👧", options: ["Toddler (1-4 yrs)", "Young Child (5-8 yrs)", "Pre-teen (9-12 yrs)", "Teenager (13+)", "Shared Room"] },
    { key: "kid_theme", message: "Any theme preference? 🎪", options: ["Space & Planets", "Nature & Animals", "Sports", "Princess/Castle", "Superhero", "No specific theme — keep it neutral"] },
    { key: "vibe", message: "Overall feel? 🎨", options: ["Fun & Colorful", "Calm & Pastel", "Modern & Age-appropriate", "Educational", "Grows-with-them Neutral"] },
    { key: "kid_needs", message: "Must-haves? 🎯", options: ["Study Desk", "Bunk Bed", "Play Area", "Storage for Toys", "Bookshelf", "All of the above"] },
  ],
};

// Default fallback for spaces not in the map
const DEFAULT_FOLLOWUPS = [
  { key: "vibe", message: "What style do you prefer? 🎨", options: ["Modern & Minimal", "Luxury", "Contemporary", "Traditional", "Budget-Friendly"] },
];

// ── Tail questions (always come after space-specific ones) ──
const TAIL_QUESTIONS = [
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
  "headline": "Inspiring one-line headline specific to the space",
  "intro": "2-3 sentence emotional hook mentioning the SPECIFIC space and style chosen",
  "colorPalette": {
    "description": "2-3 sentences about color story specific to this space type",
    "colors": [{"name": "Name", "shade": "Asian Paints/Berger code", "hex": "#hex", "usage": "Where in this specific space"}]
  },
  "furnitureLayout": {
    "description": "2-3 sentences specific to this space type and size",
    "items": [{"name": "Item specific to this space", "detail": "Specific rec with dimensions for this space", "priceRange": "₹XX,XXX - ₹XX,XXX"}]
  },
  "materials": {
    "description": "2-3 sentences for this space considering the location climate",
    "recommendations": [{"item": "Name specific to this space", "type": "Brand/type", "why": "Why it works for this space"}]
  },
  "lighting": {
    "description": "2-3 sentences specific to this space",
    "layers": [{"type": "Ambient/Task/Accent", "suggestion": "Fixture specific to this space", "placement": "Where in this space"}]
  },
  "designerSecret": "One insider tip specific to this exact space type",
  "estimatedBudget": {"low": "₹X,XX,XXX", "high": "₹X,XX,XXX", "note": "Breakdown specific to what's included for this space"},
  "moodKeywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "moodBoardQueries": ["very specific interior design image search query for this exact space and style 1", "query 2", "query 3", "query 4"]
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

const buildFallback = (allAnswers: Record<string, string>) => {
  const space = allAnswers.space || "living room";
  const vibe = allAnswers.vibe || "modern";
  const budget = allAnswers.budget || "balanced";
  const details = allAnswers.details || "none";
  return {
    headline: `Your ${vibe} ${space} — curated for beautiful living`,
    intro: `Picture yourself walking into your ${space} and feeling instantly at peace. That's what we're creating for you.`,
    colorPalette: {
      description: `A warm neutral foundation with one refined accent that elevates your ${space}.`,
      colors: [
        { name: "Warm Ivory", shade: "Asian Paints L152", hex: "#F3EDE2", usage: "Main walls" },
        { name: "Greige Stone", shade: "Berger 8P2672", hex: "#CFC5B7", usage: "Feature wall" },
        { name: "Muted Sage", shade: "Asian Paints 9458", hex: "#A9B4A4", usage: "Soft furnishings" },
        { name: "Walnut", shade: "Wood Tone", hex: "#6B4F3E", usage: "Furniture accents" },
      ],
    },
    furnitureLayout: {
      description: `Proportionate furniture with clear circulation paths for your ${space}.`,
      items: [
        { name: "Primary Piece", detail: `Scaled for ${space} — clean lines, modern profile`, priceRange: "₹35,000 - ₹95,000" },
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
      description: `Three-layer lighting strategy tailored for your ${space}.`,
      layers: [
        { type: "Ambient", suggestion: "Warm 3000K recessed LEDs", placement: "Ceiling perimeter" },
        { type: "Task", suggestion: "Focused wall-wash lights", placement: "Work zones" },
        { type: "Accent", suggestion: "Cove lighting", placement: "Feature wall" },
      ],
    },
    designerSecret: `Hide daily-use storage behind flush paneling — it's the fastest way to make any ${space} look premium.${details !== "None" ? ` We'll also factor in: ${details}.` : ""}`,
    estimatedBudget: {
      low: budget.includes("Under") ? "₹1,50,000" : budget.includes("3-6") ? "₹3,00,000" : budget.includes("6-10") ? "₹6,00,000" : budget.includes("10-15") ? "₹10,00,000" : budget.includes("15") ? "₹15,00,000" : "₹2,80,000",
      high: budget.includes("Under") ? "₹3,00,000" : budget.includes("3-6") ? "₹6,00,000" : budget.includes("6-10") ? "₹10,00,000" : budget.includes("10-15") ? "₹15,00,000" : budget.includes("15") ? "₹25,00,000" : "₹6,50,000",
      note: `${space} with ${vibe} style — current market rates`,
    },
    moodKeywords: [vibe, "functional", "timeless", "modern", "curated"],
    moodBoardQueries: [`${vibe} ${space} interior design`, `${space} home decor`, `modern ${space} ideas`, `${vibe} interior inspiration`],
  };
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { phase } = body;
    const GEMINI_API_KEY = Deno.env.get("GOOGLE_GEMINI_API_KEY");
    if (!GEMINI_API_KEY) throw new Error("GOOGLE_GEMINI_API_KEY is not configured");

    // ── Phase: dynamic questions ──
    if (phase === "question") {
      const { step = 0, name = "", space = "" } = body;

      // Build the full question sequence dynamically
      const spaceFollowups = SPACE_FOLLOWUPS[space] || DEFAULT_FOLLOWUPS;
      const allQuestions = [...BASE_QUESTIONS, ...spaceFollowups, ...TAIL_QUESTIONS];

      if (step < allQuestions.length) {
        const q = { ...allQuestions[step] };

        // Personalize location question
        if (q.key === "location" && name) {
          q.message = `Nice to meet you, ${name}! 😊 Which city are you in? 📍`;
        }

        return new Response(
          JSON.stringify({
            type: "question",
            message: q.message,
            options: q.options,
            key: q.key,
            step,
            totalSteps: allQuestions.length,
            inputPlaceholder: q.inputPlaceholder,
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ type: "ready" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ── Phase: generate recommendation ──
    if (phase === "recommend") {
      const allAnswers: Record<string, string> = body.allAnswers || {};

      // Build a detailed, specific prompt from ALL answers
      const answerSummary = Object.entries(allAnswers)
        .filter(([k]) => k !== "name")
        .map(([key, value]) => `- ${key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}: ${value}`)
        .join("\n");

      const prompt = `You are Orza, a premium interior designer in India with 15+ years experience. Create a HIGHLY SPECIFIC and PERSONALIZED interior design recommendation based on the EXACT client requirements below. DO NOT give generic advice — every single section must directly reference their specific space, style, size, and preferences.

${RECOMMENDATION_SCHEMA}

CLIENT PROFILE:
- Name: ${allAnswers.name || "Client"}
- Location: ${allAnswers.location || "India"}
${answerSummary}

CRITICAL INSTRUCTIONS:
1. The headline MUST mention their specific space type (e.g., "L-Shaped Modular Kitchen" not just "Kitchen")
2. Furniture items MUST be specific to their chosen space — e.g., for a kitchen: chimney, hob, cabinets. For bedroom: bed, wardrobe, side table
3. Color palette MUST suit their chosen vibe and space
4. Budget estimates MUST align with their stated budget range
5. Materials MUST consider their location's climate
6. Mood board queries MUST be ultra-specific (e.g., "modern L-shaped modular kitchen matte finish Bangalore" not just "kitchen design")
7. If they mentioned specific needs like Vastu, storage, kids safety — address those directly
8. Price ranges MUST be in INR and realistic for Indian market`;

      const resp = await callGemini(GEMINI_API_KEY, {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.8, responseMimeType: "application/json", maxOutputTokens: 2500 },
      });

      if (!resp || !resp.ok) {
        const fb = buildFallback(allAnswers);
        return new Response(JSON.stringify({ type: "recommendation", data: fb, source: "fallback" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const data = await resp.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      let parsed;
      try { parsed = JSON.parse(text); } catch { parsed = buildFallback(allAnswers); }

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
