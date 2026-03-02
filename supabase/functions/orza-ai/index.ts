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

const DEFAULT_FOLLOWUPS = [
  { key: "vibe", message: "What style do you prefer? 🎨", options: ["Modern & Minimal", "Luxury", "Contemporary", "Traditional", "Budget-Friendly"] },
];

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
  "estimatedTimeline": {"days": "25-35 days", "breakdown": "Design: 3-5 days | Manufacturing: 15-20 days | Installation: 5-7 days", "note": "Timeline based on scope and material availability"},
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
    console.log(`Gemini attempt ${attempt}: status ${response.status}`);
    if (response.status !== 429) break;
    if (attempt < RETRY_DELAYS_MS.length) {
      const retryAfter = Number(response.headers.get("Retry-After") ?? 0);
      const waitMs = retryAfter > 0 ? retryAfter * 1000 : RETRY_DELAYS_MS[attempt];
      console.log(`Rate limited, waiting ${waitMs}ms...`);
      await sleep(waitMs);
    }
  }
  return response;
};

// ── Timeline estimates per space ──
const getTimelineForSpace = (space: string) => {
  const timelines: Record<string, { days: string; breakdown: string; note: string }> = {
    "Modular Kitchen": { days: "25-30 days", breakdown: "Design: 3-4 days | Manufacturing: 15-18 days | Installation: 5-7 days", note: "Includes chimney, hob fitting & plumbing coordination" },
    "Kitchen": { days: "25-30 days", breakdown: "Design: 3-4 days | Manufacturing: 15-18 days | Installation: 5-7 days", note: "Includes chimney, hob fitting & plumbing coordination" },
    "Bedroom": { days: "18-25 days", breakdown: "Design: 2-3 days | Manufacturing: 12-15 days | Installation: 3-5 days", note: "Bed, wardrobe & side units included" },
    "Master Bedroom": { days: "20-25 days", breakdown: "Design: 3-4 days | Manufacturing: 12-15 days | Installation: 4-5 days", note: "Walk-in wardrobe adds 3-4 days" },
    "Living Room": { days: "18-22 days", breakdown: "Design: 2-3 days | Manufacturing: 12-14 days | Installation: 3-4 days", note: "TV unit, shelving & accent walls" },
    "Wardrobe": { days: "15-20 days", breakdown: "Design: 2-3 days | Manufacturing: 10-12 days | Installation: 2-3 days", note: "Single wardrobe unit with internals" },
    "TV Unit": { days: "12-18 days", breakdown: "Design: 2 days | Manufacturing: 8-12 days | Installation: 2-3 days", note: "Including back panel & cable management" },
    "Pooja Room": { days: "15-20 days", breakdown: "Design: 2-3 days | Manufacturing: 10-12 days | Installation: 2-3 days", note: "CNC jali work may add 2-3 days" },
    "2BHK": { days: "35-40 days", breakdown: "Design: 5-7 days | Manufacturing: 20-25 days | Installation: 7-10 days", note: "All rooms done in parallel during manufacturing" },
    "3BHK": { days: "40-45 days", breakdown: "Design: 5-7 days | Manufacturing: 25-28 days | Installation: 8-10 days", note: "Phased installation room-by-room" },
    "Villa": { days: "45-55 days", breakdown: "Design: 7-10 days | Manufacturing: 25-30 days | Installation: 10-15 days", note: "Large scope — parallel manufacturing streams" },
    "Full Home Interiors": { days: "35-45 days", breakdown: "Design: 5-7 days | Manufacturing: 20-28 days | Installation: 8-10 days", note: "Coordinated delivery across all rooms" },
    "Study Room": { days: "12-18 days", breakdown: "Design: 2 days | Manufacturing: 8-12 days | Installation: 2-3 days", note: "Desk, shelving & acoustic panels" },
    "Kids Room": { days: "18-22 days", breakdown: "Design: 2-3 days | Manufacturing: 12-14 days | Installation: 3-4 days", note: "Child-safe finishes require extra curing time" },
  };
  return timelines[space] || { days: "25-35 days", breakdown: "Design: 3-5 days | Manufacturing: 15-20 days | Installation: 5-7 days", note: "Timeline based on scope and complexity" };
};

// ── Comprehensive space-specific fallback data ──
const buildFallback = (allAnswers: Record<string, string>) => {
  const space = allAnswers.space || "Living Room";
  const vibe = allAnswers.vibe || "Modern";
  const budget = allAnswers.budget || "Not sure yet";
  const details = allAnswers.details || "None";
  const location = allAnswers.location || "Bangalore";

  const spaceData: Record<string, any> = {
    "Modular Kitchen": {
      headline: `Your ${vibe} ${allAnswers.kitchen_shape || "L-Shaped"} Modular Kitchen Design`,
      intro: `A beautifully functional ${allAnswers.kitchen_shape || "L-Shaped"} modular kitchen designed for efficient cooking, smart storage, and ${vibe.toLowerCase()} aesthetics — tailored for your ${allAnswers.kitchen_size || "compact"} space in ${location}.`,
      colorDesc: `Colors chosen for a ${vibe.toLowerCase()} kitchen — light uppers to open up space, darker lowers to hide stains, with an accent that ties it together.`,
      colors: [
        { name: "Cream White", shade: "Asian Paints 0520", hex: "#FAF3E8", usage: "Upper cabinets & walls" },
        { name: "Charcoal Grey", shade: "Berger 8P3245", hex: "#4A4A4A", usage: "Lower cabinets & countertop edge" },
        { name: "Warm Wood", shade: "Wood Tone", hex: "#A0764A", usage: "Open shelves & handles" },
        { name: "Olive Accent", shade: "Asian Paints 8423", hex: "#7D8B6A", usage: "Backsplash tile or accent strip" },
      ],
      furnitureDesc: `Furniture & modules designed for your ${allAnswers.kitchen_shape || "L-Shaped"} kitchen (${allAnswers.kitchen_size || "medium"} size), maximizing counter space and storage.`,
      furniture: [
        { name: `${allAnswers.kitchen_shape || "L-Shaped"} Base Cabinets`, detail: `Tandem drawers with soft-close, optimized for ${allAnswers.kitchen_size || "compact"} kitchen — internal cutlery trays & bottle pull-outs`, priceRange: "₹55,000 - ₹1,40,000" },
        { name: "Wall-Mounted Upper Cabinets", detail: "Lift-up shutters with glass profile, 2-tier internal shelf for easy access", priceRange: "₹30,000 - ₹75,000" },
        { name: "Quartz Countertop", detail: "20mm quartz slab with integrated sink cutout and waterfall edge", priceRange: "₹18,000 - ₹50,000" },
        { name: "Chimney & Hob Unit", detail: `Auto-clean chimney (Elica/Faber 60cm) + ${allAnswers.kitchen_needs?.includes("Built-in") ? "built-in" : "3-burner"} hob`, priceRange: "₹20,000 - ₹40,000" },
        { name: "Tall Unit / Pantry", detail: "Floor-to-ceiling pull-out pantry with basket organizers", priceRange: "₹25,000 - ₹55,000" },
      ],
      materialDesc: `Kitchen materials selected for ${location}'s humid climate — steam, oil, and moisture resistant finishes that stay new for years.`,
      materials: [
        { item: "Carcass", type: "BWR Plywood (Century/Greenply)", why: "Boiling water resistant — essential for kitchen steam & splashes" },
        { item: "Shutter Finish", type: "Acrylic / PU Paint", why: "Oil & heat resistant, easy to wipe clean daily" },
        { item: "Hardware", type: "Hettich/Hafele tandem drawers", why: "50,000+ cycle soft-close, designed for heavy kitchen use" },
        { item: "Backsplash", type: "Ceramic / Subway Tiles", why: "Heat resistant, easy wipe-down, adds visual depth" },
        { item: "Countertop", type: "Quartz (Kalinga/Caesarstone)", why: "Stain-proof, scratch-resistant, hygienic food-prep surface" },
      ],
      lightingDesc: `Three-layer kitchen lighting: bright task light for cooking, warm ambient for dining, accent for style.`,
      lighting: [
        { type: "Task", suggestion: "Under-cabinet LED strip (4000K cool white)", placement: "Below all wall cabinets, above countertop" },
        { type: "Ambient", suggestion: "Warm recessed ceiling LEDs (3000K)", placement: "Kitchen ceiling perimeter, evenly spaced" },
        { type: "Accent", suggestion: "Profile lighting inside glass cabinets", placement: "Upper glass-door cabinets & above tall unit" },
      ],
      secret: `In a ${allAnswers.kitchen_shape || "L-Shaped"} kitchen, keep your wet zone (sink) and hot zone (hob) on different arms with a 3-foot landing counter between — it makes cooking 3x more efficient and keeps oil splashes away from clean dishes.`,
    },
    "Bedroom": {
      headline: `Your ${vibe} ${allAnswers.bedroom_type || "Master"} Bedroom Retreat`,
      intro: `A ${allAnswers.bedroom_type || "master"} bedroom (${allAnswers.bedroom_size || "medium"} size) designed for restful nights and energized mornings — with ${allAnswers.bedroom_must || "smart storage"} and a ${vibe.toLowerCase()} aesthetic in ${location}.`,
      colorDesc: `Calming tones for a ${vibe.toLowerCase()} bedroom — soft neutrals for walls, a warm accent for the headboard wall, and nature-inspired accents.`,
      colors: [
        { name: "Soft Linen", shade: "Asian Paints L148", hex: "#F0E8DC", usage: "Three walls" },
        { name: "Dusty Rose", shade: "Berger 4P1862", hex: "#C9A89A", usage: "Headboard accent wall" },
        { name: "Deep Walnut", shade: "Wood Tone", hex: "#5C3D2E", usage: "Bed frame & wardrobe finish" },
        { name: "Sage Green", shade: "Asian Paints 9460", hex: "#A8B5A0", usage: "Curtains, cushions & throw" },
      ],
      furnitureDesc: `Furniture proportioned for your ${allAnswers.bedroom_size || "medium"} ${allAnswers.bedroom_type || "master"} bedroom with ${allAnswers.bedroom_must || "optimal storage"}.`,
      furniture: [
        { name: `King-Size Bed with ${allAnswers.bedroom_must?.includes("Storage") ? "Hydraulic Storage" : "Platform Base"}`, detail: `6.5x6 ft bed with ${allAnswers.bedroom_must?.includes("Storage") ? "full hydraulic lift + side drawers" : "slatted base"} — upholstered headboard`, priceRange: "₹40,000 - ₹95,000" },
        { name: "Sliding Wardrobe (Floor-to-Ceiling)", detail: `${allAnswers.wardrobe_type || "Sliding"} 8ft wide — mirror panel, internal organizers, trouser pull-out`, priceRange: "₹65,000 - ₹1,80,000" },
        { name: "Floating Side Tables", detail: "Wall-mounted with LED strip below, single drawer for essentials", priceRange: "₹8,000 - ₹18,000" },
        { name: `${allAnswers.bedroom_must?.includes("Study") ? "Study Desk Unit" : "Dresser Unit"}`, detail: `Compact wall-mounted ${allAnswers.bedroom_must?.includes("Study") ? "study desk with overhead shelf" : "dresser with mirror and storage"}`, priceRange: "₹15,000 - ₹35,000" },
      ],
      materialDesc: `Bedroom materials chosen for comfort, durability, and ${location}'s climate — soft-touch finishes that feel premium.`,
      materials: [
        { item: "Wardrobe Carcass", type: "MR Grade Plywood (Century)", why: "Moisture resistant, durable for daily use" },
        { item: "Bed Frame", type: "Engineered Wood + Metal Frame", why: "Strong, lightweight, modern look" },
        { item: "Shutter Finish", type: "Laminate (Merino/Century)", why: "Scratch resistant, wide texture & color options" },
        { item: "Soft Furnishings", type: "Linen & Cotton blends", why: "Breathable for Bangalore climate, easy to wash" },
      ],
      lightingDesc: `Layered bedroom lighting for relaxation, reading, and ambiance — warm tones throughout.`,
      lighting: [
        { type: "Ambient", suggestion: "Warm 2700K cove lighting", placement: "False ceiling perimeter around bed area" },
        { type: "Task", suggestion: "Adjustable wall-mount reading lights", placement: "Both sides of headboard, swing-arm" },
        { type: "Accent", suggestion: "LED strip behind headboard panel", placement: "Full width of headboard feature wall" },
      ],
      secret: "Install wardrobe handles at 42-inch height and add a pull-down rail for the top section — it makes a standard wardrobe feel like a walk-in. Also, keep the bed 18 inches from the wall to create a floating effect.",
    },
    "Living Room": {
      headline: `Your ${vibe} Living Room — The Heart of Your Home`,
      intro: `A ${allAnswers.living_size || "spacious"} living room designed for comfort, conversation, and style — featuring ${allAnswers.living_needs || "smart entertainment"} with a ${vibe.toLowerCase()} aesthetic in ${location}.`,
      colorDesc: `Living room palette balancing warmth and sophistication — neutral base with a bold accent for personality.`,
      colors: [
        { name: "Warm White", shade: "Asian Paints L155", hex: "#F5F0E8", usage: "All walls" },
        { name: "Slate Blue", shade: "Berger 5P2860", hex: "#6B7B8D", usage: "TV/feature wall" },
        { name: "Burnt Sienna", shade: "Asian Paints 8621", hex: "#C65D3E", usage: "Accent cushions & art" },
        { name: "Natural Oak", shade: "Wood Tone", hex: "#C4A76C", usage: "TV unit, shelves & coffee table" },
      ],
      furnitureDesc: `Seating and storage proportioned for your ${allAnswers.living_size || "medium"} living room with clear traffic flow.`,
      furniture: [
        { name: "L-Shaped Sofa Set", detail: `${allAnswers.living_size?.includes("Compact") ? "Compact 7ft" : "Full 9ft"} L-shaped sofa with reversible chaise — fabric upholstery`, priceRange: "₹45,000 - ₹1,20,000" },
        { name: "TV Entertainment Unit", detail: `${allAnswers.living_needs?.includes("TV") ? "Full wall TV unit with back panel, open & closed storage" : "Floating TV shelf with minimal storage"}`, priceRange: "₹35,000 - ₹95,000" },
        { name: "Coffee Table + Side Table", detail: "Nesting set with wooden top and metal frame", priceRange: "₹12,000 - ₹30,000" },
        { name: "Display/Bookshelf Unit", detail: `Open & closed shelving for books, decor & ${allAnswers.living_needs?.includes("Bookshelf") ? "display collection" : "essentials"}`, priceRange: "₹20,000 - ₹55,000" },
      ],
      materialDesc: `Living room materials balancing aesthetics and durability — stain-resistant fabrics and scratch-proof surfaces.`,
      materials: [
        { item: "Sofa Fabric", type: "Microfiber / Linen blend", why: "Stain-resistant, breathable, easy to clean" },
        { item: "TV Unit Carcass", type: "MR Plywood + Laminate", why: "Sturdy, scratch-resistant, premium look" },
        { item: "Flooring accent", type: "Vitrified Tiles / SPC", why: "Cool underfoot for Bangalore, easy maintenance" },
        { item: "Wall Treatment", type: "Textured paint / PVC panels", why: "Adds depth to feature wall without heavy cost" },
      ],
      lightingDesc: `Three-layer living room lighting for movie nights, reading, and entertaining.`,
      lighting: [
        { type: "Ambient", suggestion: "Warm 3000K recessed downlights", placement: "Ceiling grid, evenly spaced" },
        { type: "Task", suggestion: "Floor lamp / reading light", placement: "Next to sofa seating area" },
        { type: "Accent", suggestion: "LED strip behind TV panel + cove lighting", placement: "TV back panel and false ceiling edge" },
      ],
      secret: "Place your sofa at least 8 feet from the TV for optimal viewing. Add a rug that extends 6 inches beyond the sofa legs on each side — it anchors the entire room and makes it feel 2x more expensive.",
    },
    "Wardrobe": {
      headline: `Your ${vibe} ${allAnswers.wardrobe_type || "Sliding"} Wardrobe — Organized & Elegant`,
      intro: `A ${allAnswers.wardrobe_size || "6-8 feet"} ${allAnswers.wardrobe_type || "sliding door"} wardrobe designed for maximum organization with a ${vibe.toLowerCase()} finish — every inch optimized for your clothing and accessories.`,
      colorDesc: `Wardrobe colors that complement your bedroom — elegant exterior with functional interior.`,
      colors: [
        { name: "Ivory Matte", shade: "Asian Paints 0518", hex: "#F2E9D8", usage: "Wardrobe exterior panels" },
        { name: "Champagne Gold", shade: "Metallic Accent", hex: "#D4AF37", usage: "Handle profiles & edge banding" },
        { name: "Dark Walnut", shade: "Wood Tone", hex: "#4A3225", usage: "Interior shelving & drawers" },
        { name: "Soft Grey", shade: "Berger 7P1245", hex: "#B8B4AD", usage: "Back panel & lining" },
      ],
      furnitureDesc: `${allAnswers.wardrobe_type || "Sliding"} wardrobe (${allAnswers.wardrobe_size || "6-8 feet wide"}) with specialized zones for different clothing types.`,
      furniture: [
        { name: `${allAnswers.wardrobe_type || "Sliding Door"} Wardrobe Frame`, detail: `Floor-to-ceiling ${allAnswers.wardrobe_size || "7ft"} wide — aluminium track for sliding doors`, priceRange: "₹55,000 - ₹1,50,000" },
        { name: "Internal Organizer System", detail: "Adjustable shelves, hanging rods (long & short), trouser pull-out, tie rack", priceRange: "₹15,000 - ₹40,000" },
        { name: "Drawer Unit", detail: "4-drawer soft-close unit with velvet-lined jewelry tray", priceRange: "₹12,000 - ₹28,000" },
        { name: "Mirror Panel", detail: "Full-height mirror on one door panel with anti-shatter film", priceRange: "₹5,000 - ₹15,000" },
      ],
      materialDesc: `Premium wardrobe materials for smooth daily use and long-term durability.`,
      materials: [
        { item: "Carcass", type: "MR Grade Plywood (19mm)", why: "Moisture resistant, holds heavy loads" },
        { item: "Doors", type: `${allAnswers.wardrobe_type?.includes("Sliding") ? "Sliding track (Hettich)" : "Soft-close hinges (Blum)"}`, why: "Smooth, silent operation for daily use" },
        { item: "Finish", type: `${vibe.includes("Glossy") ? "High-Gloss PU" : "Matte Laminate (Merino)"}`, why: `${vibe.includes("Glossy") ? "Premium reflective finish" : "Fingerprint resistant, scratch-proof"}` },
        { item: "Hardware", type: "Hettich InnoTech drawers", why: "60,000+ cycle, silent soft-close" },
      ],
      lightingDesc: `Smart wardrobe lighting so you can see every outfit clearly.`,
      lighting: [
        { type: "Task", suggestion: "Motion-sensor LED strips (4000K)", placement: "Inside each wardrobe section, auto-on when doors open" },
        { type: "Accent", suggestion: "LED profile on top edge", placement: "Top of wardrobe for ambient glow" },
        { type: "Task", suggestion: "Spotlight for mirror section", placement: "Above full-length mirror panel" },
      ],
      secret: "Dedicate 60% of wardrobe space to hanging (split into long & short sections) and 40% to shelves/drawers. Add a pull-down rod for the top section — it doubles your hanging space without needing a step stool.",
    },
    "TV Unit": {
      headline: `Your ${vibe} ${allAnswers.tv_wall?.includes("Full") ? "Full Wall" : "Compact"} TV Unit Design`,
      intro: `A ${vibe.toLowerCase()} TV unit designed for your ${allAnswers.tv_wall || "living room"} wall — balancing sleek entertainment setup with smart storage${allAnswers.tv_extras ? " including " + allAnswers.tv_extras.toLowerCase() : ""}.`,
      colorDesc: `TV unit colors that create a cinematic backdrop while complementing your room decor.`,
      colors: [
        { name: "Charcoal Panel", shade: "Berger 8P3250", hex: "#3A3A3A", usage: "TV back panel" },
        { name: "Warm Oak", shade: "Wood Tone", hex: "#C4A76C", usage: "Floating shelves & base unit" },
        { name: "Off-White", shade: "Asian Paints L150", hex: "#F0EBE0", usage: "Surrounding wall" },
        { name: "Copper Accent", shade: "Metallic", hex: "#B87333", usage: "Handle details & display highlights" },
      ],
      furnitureDesc: `TV unit configuration for your ${allAnswers.tv_wall || "living room"} wall with integrated cable management.`,
      furniture: [
        { name: `${allAnswers.tv_wall?.includes("Full") ? "Full Wall" : "Floating"} TV Panel`, detail: `${allAnswers.tv_wall?.includes("Full") ? "10ft wide PVC/Veneer back panel" : "6ft floating laminate panel"} with concealed cable routing`, priceRange: "₹20,000 - ₹65,000" },
        { name: "Base Storage Unit", detail: "Floating base cabinet with push-to-open doors, internal shelving", priceRange: "₹15,000 - ₹40,000" },
        { name: "Open Display Shelves", detail: `Asymmetric open shelves for decor${allAnswers.tv_extras?.includes("Speaker") ? " and speaker placement" : ""}`, priceRange: "₹8,000 - ₹22,000" },
        { name: "Cable Management Box", detail: "Hidden power strip housing with ventilation for set-top box", priceRange: "₹3,000 - ₹8,000" },
      ],
      materialDesc: `TV unit materials chosen for a premium look with practical wire management.`,
      materials: [
        { item: "Back Panel", type: "PVC Charcoal / Veneer", why: "Rich texture, hides fingerprints" },
        { item: "Base Unit", type: "MR Plywood + Laminate", why: "Sturdy, supports heavy equipment" },
        { item: "Shelves", type: "Engineered Wood + Metal bracket", why: "Clean floating look, holds decor securely" },
        { item: "Hardware", type: "Push-to-open mechanisms", why: "Handle-free clean aesthetic" },
      ],
      lightingDesc: `Dramatic lighting that enhances your TV viewing experience and showcases the unit.`,
      lighting: [
        { type: "Accent", suggestion: `${allAnswers.tv_extras?.includes("Back Panel") ? "RGB LED strip behind TV" : "Warm LED strip behind panel"}`, placement: "Full perimeter of TV back panel" },
        { type: "Accent", suggestion: "Shelf spotlights (2700K)", placement: "Inside open display shelves" },
        { type: "Ambient", suggestion: "Dimmable cove lighting", placement: "Above TV unit, false ceiling edge" },
      ],
      secret: "Mount your TV at eye level when seated (42 inches from floor to center). Add a 2-inch gap between the back panel and wall for hidden cable routing — it makes the entire setup look wireless and premium.",
    },
    "Pooja Room": {
      headline: `Your ${vibe} ${allAnswers.pooja_type || "Dedicated"} Pooja Space Design`,
      intro: `A sacred ${allAnswers.pooja_type || "pooja room"} crafted with ${allAnswers.pooja_material || "premium wood"} in a ${vibe.toLowerCase()} style — creating a serene space for daily prayer and meditation in ${location}.`,
      colorDesc: `Pooja room colors inspired by traditional temple aesthetics with a ${vibe.toLowerCase()} touch.`,
      colors: [
        { name: "Divine Cream", shade: "Asian Paints 0516", hex: "#FFF5E6", usage: "Walls & ceiling" },
        { name: "Temple Gold", shade: "Metallic Accent", hex: "#D4A017", usage: "CNC jali pattern & trim" },
        { name: "Rosewood", shade: "Wood Tone", hex: "#65302E", usage: "Mandir frame & shelving" },
        { name: "Marble White", shade: "Stone Finish", hex: "#F0EDE5", usage: "Base platform & counter" },
      ],
      furnitureDesc: `${allAnswers.pooja_type || "Dedicated"} pooja unit in ${allAnswers.pooja_material || "premium wood"} with traditional elements and modern functionality.`,
      furniture: [
        { name: `${allAnswers.pooja_type || "Wall-mounted"} Mandir Unit`, detail: `${allAnswers.pooja_material || "Teak"} frame with CNC-cut jali pattern, bell holder, LED backlit arch`, priceRange: "₹35,000 - ₹1,20,000" },
        { name: "Storage Drawer Below", detail: "Pull-out drawer for pooja items, incense holder, camphor", priceRange: "₹8,000 - ₹20,000" },
        { name: "Marble/Granite Platform", detail: "Elevated platform with spill-resistant surface for offerings", priceRange: "₹5,000 - ₹15,000" },
        { name: "Decorative Backdrop", detail: "CNC-cut wooden jali or brass inlay back panel", priceRange: "₹12,000 - ₹35,000" },
      ],
      materialDesc: `Sacred space materials chosen for longevity, beauty, and easy maintenance of daily pooja rituals.`,
      materials: [
        { item: "Main Structure", type: `${allAnswers.pooja_material?.includes("Teak") ? "Solid Teak Wood" : allAnswers.pooja_material?.includes("Marble") ? "Italian Marble" : "Engineered Wood + Veneer"}`, why: `${allAnswers.pooja_material?.includes("Teak") ? "Traditional, aromatic, extremely durable" : "Premium finish with sacred aesthetic"}` },
        { item: "Jali/Screen", type: "CNC-cut MDF / Brass", why: "Intricate patterns, allows light & air flow" },
        { item: "Platform", type: "Granite / Marble", why: "Stain-resistant for oil lamps & offerings" },
        { item: "Finish", type: "Melamine / PU coating", why: "Protects wood from incense smoke & oil" },
      ],
      lightingDesc: `Sacred lighting that creates a divine ambiance for morning and evening prayers.`,
      lighting: [
        { type: "Accent", suggestion: "Warm 2700K LED strip behind deity area", placement: "Behind the mandir arch, creating a divine glow" },
        { type: "Ambient", suggestion: "Dimmable warm downlight (2700K)", placement: "Directly above the mandir, recessed in ceiling" },
        { type: "Accent", suggestion: "LED strip inside CNC jali pattern", placement: "Within the decorative screen/backdrop" },
      ],
      secret: "Face the pooja unit towards East or North-East for Vastu compliance. Add a marble or granite platform raised 4 inches — it keeps the space clean and gives a traditional temple feel. Use warm 2700K lighting exclusively, never cool white.",
    },
    "2BHK": {
      headline: `Your ${vibe} 2BHK Complete Interior Design`,
      intro: `A complete 2BHK transformation with focus on ${allAnswers.priority_rooms || "all rooms"} — ${allAnswers.bhk_focus || "maximizing space"} with a cohesive ${vibe.toLowerCase()} theme throughout your home in ${location}.`,
      colorDesc: `A unified 2BHK color palette that flows seamlessly from room to room while giving each space its own identity.`,
      colors: [
        { name: "Warm Ivory", shade: "Asian Paints L152", hex: "#F3EDE2", usage: "All common walls & ceilings" },
        { name: "Sage Green", shade: "Asian Paints 9460", hex: "#A8B5A0", usage: "Master bedroom accent wall" },
        { name: "Warm Taupe", shade: "Berger 8P2672", hex: "#CFC5B7", usage: "Living room feature wall" },
        { name: "Walnut", shade: "Wood Tone", hex: "#6B4423", usage: "All furniture pieces — cohesive theme" },
      ],
      furnitureDesc: `Complete 2BHK furniture plan with focus on ${allAnswers.bhk_focus || "smart space utilization"} — coordinated across all rooms.`,
      furniture: [
        { name: "Modular Kitchen", detail: `L-shaped kitchen with upper & lower cabinets, chimney, countertop — ${allAnswers.bhk_focus?.includes("Storage") ? "max storage config" : "standard layout"}`, priceRange: "₹1,20,000 - ₹2,80,000" },
        { name: "Master Bedroom Set", detail: "King bed with storage, 6ft wardrobe, side tables, dresser", priceRange: "₹1,00,000 - ₹2,50,000" },
        { name: "Living Room Setup", detail: "TV unit, shoe rack, sofa (separate), coffee table", priceRange: "₹60,000 - ₹1,50,000" },
        { name: "Second Bedroom", detail: "Queen bed, 5ft wardrobe, study unit", priceRange: "₹70,000 - ₹1,60,000" },
        { name: "Common Areas", detail: "Crockery unit, foyer console, bathroom vanity", priceRange: "₹30,000 - ₹80,000" },
      ],
      materialDesc: `2BHK materials selected for consistent quality and cohesive look across all rooms.`,
      materials: [
        { item: "Kitchen Carcass", type: "BWR Plywood (Century)", why: "Moisture resistant for kitchen environment" },
        { item: "Bedroom Furniture", type: "MR Plywood + Laminate", why: "Cost-effective premium look for bedrooms" },
        { item: "Hardware (All)", type: "Hettich/Hafele", why: "Consistent quality across all rooms" },
        { item: "Finishes", type: "Laminate (Merino)", why: "Uniform texture & color matching across furniture" },
      ],
      lightingDesc: `Room-by-room lighting plan for the entire 2BHK — ambient, task, and accent layers.`,
      lighting: [
        { type: "Ambient", suggestion: "Warm 3000K recessed LEDs in all rooms", placement: "False ceiling perimeter in living & bedrooms" },
        { type: "Task", suggestion: "Under-cabinet LEDs + reading lights", placement: "Kitchen countertop & bedside" },
        { type: "Accent", suggestion: "Cove lighting + TV back panel LEDs", placement: "Living room ceiling & entertainment zone" },
      ],
      secret: "In a 2BHK, use the same wood tone across ALL rooms — it creates visual continuity and makes the home feel much larger. Invest 40% of budget on kitchen, 30% on master bedroom, 20% on living room, 10% on second bedroom.",
    },
    "3BHK": {
      headline: `Your ${vibe} 3BHK Premium Interior Design`,
      intro: `A premium 3BHK interior with focus on ${allAnswers.priority_rooms || "all rooms"} — ${allAnswers.bhk_focus || "coordinated design"} in a ${vibe.toLowerCase()} theme across your entire home in ${location}.`,
      colorDesc: `Sophisticated 3BHK palette with a cohesive base and unique accent for each room's personality.`,
      colors: [
        { name: "Cotton White", shade: "Asian Paints L160", hex: "#F8F3EC", usage: "All common walls" },
        { name: "Navy Accent", shade: "Asian Paints 4735", hex: "#2C3E6B", usage: "Master bedroom feature wall" },
        { name: "Terracotta", shade: "Berger 6P4425", hex: "#CC6B49", usage: "Living room accent" },
        { name: "Walnut Brown", shade: "Wood Tone", hex: "#5C3D2E", usage: "Consistent furniture theme" },
      ],
      furnitureDesc: `Complete 3BHK furniture across ${allAnswers.priority_rooms || "all rooms"} with ${allAnswers.bhk_focus || "premium materials"}.`,
      furniture: [
        { name: "Modular Kitchen", detail: "U-shaped/L-shaped with tall unit, chimney, built-in appliances", priceRange: "₹1,80,000 - ₹4,00,000" },
        { name: "Master Bedroom Suite", detail: "King bed + walk-in wardrobe + dresser + side tables", priceRange: "₹1,50,000 - ₹3,50,000" },
        { name: "Living + Dining Area", detail: "TV unit, bookshelf, shoe rack, crockery unit, dining not included", priceRange: "₹1,00,000 - ₹2,50,000" },
        { name: "Bedroom 2 & 3", detail: "Queen beds, wardrobes, study units per room", priceRange: "₹1,20,000 - ₹2,80,000" },
        { name: "Common Areas", detail: "Foyer, bathroom vanities, utility area shelving", priceRange: "₹40,000 - ₹1,00,000" },
      ],
      materialDesc: `3BHK premium materials — upgraded finishes for high-traffic areas, consistent hardware throughout.`,
      materials: [
        { item: "Kitchen", type: "BWR Plywood + Acrylic/PU", why: "Premium water-resistant finish" },
        { item: "Bedrooms", type: "MR Plywood + Veneer/Laminate", why: "Luxurious texture, durable" },
        { item: "Living Room", type: "Veneer + PU polish", why: "Rich natural wood grain feel" },
        { item: "Hardware", type: "Hettich Premium line", why: "Consistent soft-close across all rooms" },
      ],
      lightingDesc: `Premium 3BHK lighting — each room gets its own lighting personality within a unified warm tone.`,
      lighting: [
        { type: "Ambient", suggestion: "3000K recessed + cove lighting", placement: "All rooms, false ceiling" },
        { type: "Task", suggestion: "Kitchen under-cabinet + bedroom reading", placement: "Work zones across home" },
        { type: "Accent", suggestion: "Feature wall spotlights + TV backlight", placement: "Living room & master bedroom" },
      ],
      secret: "In a 3BHK, create a 'material thread' — use the same wood finish and handle style in every room. Then differentiate with wall colors and soft furnishings. Budget split: Kitchen 30%, Master Bedroom 25%, Living 20%, Other Bedrooms 15%, Common 10%.",
    },
    "Villa": {
      headline: `Your ${vibe} ${allAnswers.villa_size || "Premium"} Villa Interior`,
      intro: `A stunning ${allAnswers.villa_size || "villa"} interior with focus on ${allAnswers.priority_rooms || "all areas"} — grand proportions, premium materials, and ${vibe.toLowerCase()} design language throughout your home in ${location}.`,
      colorDesc: `Villa-scale palette with dramatic contrasts and luxury undertones.`,
      colors: [
        { name: "Pearl White", shade: "Asian Paints L165", hex: "#FAF6F0", usage: "All walls & double-height areas" },
        { name: "Emerald Deep", shade: "Asian Paints 7584", hex: "#2D5F4A", usage: "Living room feature wall" },
        { name: "Champagne Gold", shade: "Metallic", hex: "#D4AF37", usage: "Staircase railing & accents" },
        { name: "Italian Walnut", shade: "Wood Tone", hex: "#5A3A28", usage: "All cabinetry & furniture" },
      ],
      furnitureDesc: `Villa-scale furniture for grand spaces — ${allAnswers.priority_rooms || "all areas"} with premium proportions.`,
      furniture: [
        { name: "Grand Living Room Setup", detail: "Custom TV unit, bookshelf, display cabinets — suited for double-height/large living", priceRange: "₹2,50,000 - ₹6,00,000" },
        { name: "Premium Kitchen", detail: "Island/U-shaped modular kitchen with pantry, built-in appliances", priceRange: "₹3,50,000 - ₹8,00,000" },
        { name: "Master Suite", detail: "King bed, walk-in wardrobe, dressing area, vanity", priceRange: "₹2,50,000 - ₹5,50,000" },
        { name: "All Other Rooms", detail: "Bedrooms, study, kids room — coordinated throughout", priceRange: "₹3,00,000 - ₹7,00,000" },
        { name: "Staircase & Common Areas", detail: "Foyer console, staircase under-storage, shoe cabinets", priceRange: "₹80,000 - ₹2,00,000" },
      ],
      materialDesc: `Villa-grade premium materials — natural stones, solid woods, and luxury finishes.`,
      materials: [
        { item: "Primary Furniture", type: "BWR Plywood + Veneer/PU", why: "Luxury finish, long-lasting" },
        { item: "Countertops", type: "Italian Marble / Quartz", why: "Grand aesthetic for villa spaces" },
        { item: "Flooring", type: "Italian Marble / Wooden Flooring", why: "Premium underfoot experience" },
        { item: "Hardware", type: "Hafele Premium / Blum", why: "European-grade for luxury homes" },
      ],
      lightingDesc: `Grand villa lighting — chandeliers, layered recessed, and dramatic accent lighting.`,
      lighting: [
        { type: "Ambient", suggestion: "Statement chandelier + recessed LEDs", placement: "Double-height living & foyer" },
        { type: "Task", suggestion: "Kitchen island pendants + vanity lights", placement: "Kitchen, bathrooms, study" },
        { type: "Accent", suggestion: "Staircase wall washers + garden spotlights", placement: "Staircase, outdoor areas" },
      ],
      secret: "In a villa, the staircase is your biggest design opportunity — add a feature wall with textured stone or a curated art gallery along the staircase. Under-stair storage can hide an entire home office or bar setup.",
    },
    "Study Room": {
      headline: `Your ${vibe} ${allAnswers.study_for || "Home"} Study Room`,
      intro: `A focused ${allAnswers.study_size || "medium"} study room designed for ${allAnswers.study_for || "productivity"} — ergonomic setup, smart storage, and a ${vibe.toLowerCase()} atmosphere that boosts concentration in ${location}.`,
      colorDesc: `Study room colors that enhance focus and reduce eye strain during long working hours.`,
      colors: [
        { name: "Soft Sage", shade: "Asian Paints 9458", hex: "#C5D4C0", usage: "All walls — calming, reduces eye fatigue" },
        { name: "Warm Wood", shade: "Wood Tone", hex: "#A0764A", usage: "Desk and shelving" },
        { name: "Cream White", shade: "Asian Paints L148", hex: "#F0E8DC", usage: "Ceiling & trims" },
        { name: "Slate Blue", shade: "Berger 5P2855", hex: "#6B7B8D", usage: "Pin board wall / accent" },
      ],
      furnitureDesc: `Study furniture for ${allAnswers.study_for || "work from home"} — ergonomic and organized.`,
      furniture: [
        { name: "L-Shaped Study Desk", detail: `${allAnswers.study_size?.includes("Small") ? "4ft straight desk" : "5ft L-shaped desk"} with cable management grommet & keyboard tray`, priceRange: "₹18,000 - ₹45,000" },
        { name: "Wall-Mounted Shelving", detail: "Open shelves + closed cabinets for books, files, and display", priceRange: "₹15,000 - ₹35,000" },
        { name: "Storage Cabinet", detail: "Vertical unit with file drawers, printer shelf, and lock", priceRange: "₹12,000 - ₹28,000" },
        { name: "Pin/Mood Board", detail: "Cork or fabric-wrapped board for notes, inspiration", priceRange: "₹3,000 - ₹8,000" },
      ],
      materialDesc: `Study room materials prioritizing acoustics, durability, and a professional feel.`,
      materials: [
        { item: "Desk Surface", type: "Laminate (Matte anti-glare)", why: "Reduces screen glare, scratch resistant" },
        { item: "Shelving", type: "MR Plywood + Laminate", why: "Sturdy for heavy books" },
        { item: "Acoustic Treatment", type: "Fabric wall panels", why: "Reduces echo for video calls" },
      ],
      lightingDesc: `Optimized study lighting to prevent eye strain and maintain energy during long hours.`,
      lighting: [
        { type: "Task", suggestion: "4000K neutral desk lamp (adjustable)", placement: "On desk, positioned to avoid screen glare" },
        { type: "Ambient", suggestion: "3500K recessed panel lights", placement: "Ceiling, evenly distributed" },
        { type: "Accent", suggestion: "Shelf strip lights", placement: "Inside open bookshelves" },
      ],
      secret: "Position your desk so natural light comes from the left (for right-handed) or right (for left-handed). Add a fabric acoustic panel behind your screen — it improves video call audio AND creates a professional background.",
    },
    "Kids Room": {
      headline: `Your ${vibe} ${allAnswers.kid_theme || "Fun"} Kids Room for ${allAnswers.kid_age || "Young Children"}`,
      intro: `A safe, stimulating room for ${allAnswers.kid_age || "kids"} with ${allAnswers.kid_theme || "playful"} theme — featuring ${allAnswers.kid_needs || "study and play areas"} in a ${vibe.toLowerCase()} design that grows with them in ${location}.`,
      colorDesc: `Kid-friendly colors that are stimulating yet calming — ${vibe.toLowerCase()} tones with playful accents.`,
      colors: [
        { name: `${vibe.includes("Pastel") ? "Soft Lavender" : "Sky Blue"}`, shade: `Asian Paints ${vibe.includes("Pastel") ? "7832" : "4520"}`, hex: `${vibe.includes("Pastel") ? "#D8CCE8" : "#A8D8EA"}`, usage: "Feature wall" },
        { name: "Cloud White", shade: "Asian Paints L170", hex: "#FAFAFA", usage: "Three walls & ceiling" },
        { name: "Sunshine Yellow", shade: "Asian Paints 0340", hex: "#FFD93D", usage: "Accent furniture & accessories" },
        { name: "Natural Birch", shade: "Wood Tone", hex: "#D4B896", usage: "Furniture — light, airy feel" },
      ],
      furnitureDesc: `Kid-safe furniture for ${allAnswers.kid_age || "children"} with ${allAnswers.kid_needs || "all essentials"} — rounded edges, non-toxic finishes.`,
      furniture: [
        { name: `${allAnswers.kid_needs?.includes("Bunk") ? "Bunk Bed" : "Single Bed with Storage"}`, detail: `${allAnswers.kid_needs?.includes("Bunk") ? "Solid wood bunk with ladder guard rails" : "Single bed with under-storage drawers"} — non-toxic paint, rounded corners`, priceRange: "₹25,000 - ₹65,000" },
        { name: "Study Desk & Chair", detail: `Height-adjustable desk for ${allAnswers.kid_age?.includes("Toddler") ? "low height" : "growing kids"} with book shelf above`, priceRange: "₹15,000 - ₹35,000" },
        { name: "Wardrobe (Low-height)", detail: `${allAnswers.kid_age?.includes("Toddler") ? "4ft accessible wardrobe" : "5ft wardrobe"} with colorful interiors, soft-close doors`, priceRange: "₹25,000 - ₹55,000" },
        { name: `${allAnswers.kid_needs?.includes("Play") ? "Play Zone Mat & Storage" : "Bookshelf & Display"}`, detail: `${allAnswers.kid_needs?.includes("Play") ? "Interlocking play mat with toy chest bins" : "Open bookshelf at kid-accessible height"}`, priceRange: "₹8,000 - ₹20,000" },
      ],
      materialDesc: `Child-safe materials — non-toxic, rounded edges, anti-microbial, and easy to clean.`,
      materials: [
        { item: "All Furniture", type: "E1 Grade MDF / MR Plywood", why: "Low formaldehyde emission, safe for children" },
        { item: "Paint", type: "Asian Paints Royale Kids (anti-bacterial)", why: "Washable, anti-bacterial, low VOC" },
        { item: "Hardware", type: "Soft-close + child locks", why: "Prevents finger injuries, safe access" },
        { item: "Flooring", type: "EVA foam mat / Carpet tile", why: "Cushioned for falls, easy to clean & replace" },
      ],
      lightingDesc: `Kid-safe lighting with no harsh glare — warm tones for sleep, bright for study.`,
      lighting: [
        { type: "Ambient", suggestion: "Warm 3000K flush-mount ceiling light", placement: "Center ceiling, shatter-proof cover" },
        { type: "Task", suggestion: "Desk lamp with adjustable brightness", placement: "Study desk, eye-safe position" },
        { type: "Accent", suggestion: `${allAnswers.kid_theme?.includes("Space") ? "Star projector night light" : "Dim night light (plug-in)"}`, placement: "Near bed for nighttime comfort" },
      ],
      secret: `For ${allAnswers.kid_age || "kids"}: keep 30% of floor space empty for play. Use magnetic paint on one wall for creativity without damage. Store toys in labeled bins at their height — it teaches organization and gives them independence.`,
    },
    "Full Home Interiors": {
      headline: `Your ${vibe} ${allAnswers.home_size || "Complete"} Home Interior Design`,
      intro: `A fully coordinated ${allAnswers.home_size || "home"} interior with priority on ${allAnswers.priority_rooms || "all rooms"} — ${vibe.toLowerCase()} design flowing seamlessly through every space in ${location}.`,
      colorDesc: `Whole-home color strategy — a unified base with room-specific accents for personality.`,
      colors: [
        { name: "Warm Ivory", shade: "Asian Paints L152", hex: "#F3EDE2", usage: "All walls — unified base" },
        { name: "Forest Green", shade: "Asian Paints 7582", hex: "#4A6741", usage: "Living room accent wall" },
        { name: "Blush Pink", shade: "Berger 3P1850", hex: "#E8C4B8", usage: "Master bedroom accent" },
        { name: "Dark Walnut", shade: "Wood Tone", hex: "#5C3D2E", usage: "All furniture — cohesive thread" },
      ],
      furnitureDesc: `Complete home furnishing for ${allAnswers.home_size || "your home"} — prioritizing ${allAnswers.priority_rooms || "all rooms equally"}.`,
      furniture: [
        { name: "Modular Kitchen", detail: "Full modular setup with upper, lower, tall unit, chimney", priceRange: "₹1,50,000 - ₹3,50,000" },
        { name: "Master Bedroom", detail: "King bed, wardrobe, dresser, side tables — complete set", priceRange: "₹1,20,000 - ₹3,00,000" },
        { name: "Living Room", detail: "TV unit, shoe rack, display unit, crockery", priceRange: "₹80,000 - ₹2,00,000" },
        { name: "Additional Rooms", detail: "Beds, wardrobes, study units for each room", priceRange: "₹60,000 - ₹1,50,000 per room" },
        { name: "Common Areas", detail: "Foyer, bathrooms, utility — finishing touches", priceRange: "₹30,000 - ₹80,000" },
      ],
      materialDesc: `Consistent material quality throughout the home for a unified premium feel.`,
      materials: [
        { item: "Kitchen", type: "BWR Plywood + Acrylic/Laminate", why: "Water resistant for kitchen" },
        { item: "Bedrooms & Living", type: "MR Plywood + Laminate", why: "Premium look, cost-effective" },
        { item: "All Hardware", type: "Hettich/Hafele", why: "Consistent quality everywhere" },
        { item: "Finishes", type: "Laminate/Veneer (Merino/Century)", why: "Matching tones across all rooms" },
      ],
      lightingDesc: `Whole-home lighting design — warm, layered, and functional in every room.`,
      lighting: [
        { type: "Ambient", suggestion: "3000K recessed in all rooms", placement: "False ceiling throughout" },
        { type: "Task", suggestion: "Kitchen + study + bedside task lighting", placement: "Work zones in each room" },
        { type: "Accent", suggestion: "Feature wall + TV panel + pooja backlight", placement: "Key focal points per room" },
      ],
      secret: "The secret to a cohesive home: pick ONE wood finish, ONE handle style, and ONE metal accent tone — use them in EVERY room. Then differentiate with wall colors and soft furnishings. This creates unity without monotony.",
    },
  };

  const data = spaceData[space];

  const headline = data?.headline || `Your ${vibe} ${space} — Designed for ${location}`;
  const intro = data?.intro || `A beautifully curated ${space} designed with a ${vibe} aesthetic, tailored for the climate and lifestyle of ${location}.`;
  const colorDesc = data?.colorDesc || `Color story curated for a ${vibe} ${space} in ${location}.`;
  const colors = data?.colors || [
    { name: "Soft White", shade: "Asian Paints L152", hex: "#F3EDE2", usage: "Primary walls" },
    { name: "Warm Taupe", shade: "Berger 8P2672", hex: "#CFC5B7", usage: "Feature/accent wall" },
    { name: "Forest Green", shade: "Asian Paints 9458", hex: "#6B8F71", usage: "Soft furnishings & accessories" },
    { name: "Dark Walnut", shade: "Wood Tone", hex: "#5C3D2E", usage: "Furniture & frames" },
  ];
  const furnitureDesc = data?.furnitureDesc || `Furniture & layout designed specifically for your ${space}.`;
  const furniture = data?.furniture || [
    { name: "Primary Furniture", detail: `Core piece for your ${space}, selected for ${vibe} style`, priceRange: "₹35,000 - ₹95,000" },
    { name: "Storage Solution", detail: "Customized storage optimized for the space dimensions", priceRange: "₹45,000 - ₹1,20,000" },
  ];
  const materialDesc = data?.materialDesc || `Materials selected for ${location}'s climate — humidity & dust resistant.`;
  const mats = data?.materials || [
    { item: "Core Structure", type: "BWP Plywood (Century)", why: `Moisture resistant for ${location} climate` },
    { item: "Hardware", type: "Hettich soft-close", why: "Premium durability, 50000+ cycles" },
    { item: "Surface Finish", type: "Laminate (Merino)", why: "Scratch resistant, easy maintenance" },
  ];
  const lightingDesc = data?.lightingDesc || `Lighting plan tailored for your ${space} to create depth and function.`;
  const lights = data?.lighting || [
    { type: "Ambient", suggestion: "Warm 3000K recessed LEDs", placement: "Ceiling perimeter" },
    { type: "Task", suggestion: "Focused work-area lighting", placement: "Activity zones" },
    { type: "Accent", suggestion: "Cove/strip lighting", placement: "Feature wall or shelving" },
  ];
  const secret = data?.secret || `For your ${space}: choose one bold feature element and keep everything else restrained — it creates instant designer-level impact on any budget.`;

  const budgetLow = budget.includes("Under") ? "₹1,50,000" : budget.includes("3-6") ? "₹3,00,000" : budget.includes("6-10") ? "₹6,00,000" : budget.includes("10-15") ? "₹10,00,000" : budget.includes("15") ? "₹15,00,000" : "₹2,80,000";
  const budgetHigh = budget.includes("Under") ? "₹3,00,000" : budget.includes("3-6") ? "₹6,00,000" : budget.includes("6-10") ? "₹10,00,000" : budget.includes("10-15") ? "₹15,00,000" : budget.includes("15") ? "₹25,00,000" : "₹6,50,000";

  return {
    headline,
    intro,
    colorPalette: { description: colorDesc, colors },
    furnitureLayout: { description: furnitureDesc, items: furniture },
    materials: { description: materialDesc, recommendations: mats },
    lighting: { description: lightingDesc, layers: lights },
    designerSecret: secret + (details !== "None" ? ` Also: ${details} has been factored into this plan.` : ""),
    estimatedBudget: { low: budgetLow, high: budgetHigh, note: `${space} with ${vibe} style in ${location} — prices based on current 2025 market rates` },
    estimatedTimeline: getTimelineForSpace(space),
    moodKeywords: [vibe.toLowerCase(), space.toLowerCase(), "curated", location.toLowerCase(), "designer-crafted"],
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

      const spaceFollowups = SPACE_FOLLOWUPS[space] || DEFAULT_FOLLOWUPS;
      const allQuestions = [...BASE_QUESTIONS, ...spaceFollowups, ...TAIL_QUESTIONS];

      if (step < allQuestions.length) {
        const q = { ...allQuestions[step] };

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

      const answerSummary = Object.entries(allAnswers)
        .filter(([k]) => k !== "name")
        .map(([key, value]) => `- ${key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}: ${value}`)
        .join("\n");

      const prompt = `You are Orza, a premium interior designer at Intorza (Bangalore's top interior design firm) with 15+ years of hands-on experience across 2000+ projects. Create a HIGHLY SPECIFIC, PERSONALIZED, and ACTIONABLE interior design recommendation based on the EXACT client requirements below.

DO NOT give generic advice. Every section must directly reference their specific space type, dimensions, style preference, budget, and location. Use real Indian brand names, actual market prices, and practical tips.

${RECOMMENDATION_SCHEMA}

CLIENT PROFILE:
- Name: ${allAnswers.name || "Client"}
- Location: ${allAnswers.location || "India"}
${answerSummary}

CRITICAL INSTRUCTIONS FOR ACCURACY:
1. The headline MUST mention their specific space type AND style (e.g., "Your Modern L-Shaped Modular Kitchen" not just "Kitchen")
2. Furniture items MUST be specific to their chosen space — e.g., for a kitchen: chimney, hob, cabinets, countertop. For bedroom: bed, wardrobe, side table, dresser. Include exact dimensions where possible.
3. Color palette MUST use REAL Asian Paints / Berger shade codes that actually exist. Use 4-5 colors with specific usage for each wall/surface.
4. Budget estimates MUST align with their stated budget range: ${allAnswers.budget || "flexible"}. Break down costs per item realistically for ${allAnswers.location || "Bangalore"} market in 2025.
5. Materials MUST consider ${allAnswers.location || "Indian"} climate — humidity, dust, heat. Recommend specific Indian brands (Century, Greenply, Merino, Hettich, Hafele, Faber, Elica).
6. If they mentioned specific needs like "${allAnswers.details || "none"}" — address those DIRECTLY in furniture, materials, AND designer secret sections.
7. Price ranges MUST be in INR, realistic for 2025 Indian market. Never underestimate.
8. moodKeywords MUST include the space type name so the frontend can match images correctly.
9. estimatedTimeline MUST reflect realistic Intorza timelines: Design phase (3-5 days), Manufacturing (15-25 days based on complexity), Installation (3-10 days based on scope). Use fewer days for simpler spaces. Total should be competitive (25-45 days max).
10. Lighting suggestions must include specific color temperatures (in Kelvin) and real fixture types.
11. Designer secret must be a genuinely useful, non-obvious tip that only an experienced designer would know — specific to THIS space type.`;

      const resp = await callGemini(GEMINI_API_KEY, {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.8, responseMimeType: "application/json", maxOutputTokens: 2500 },
      });

      if (!resp || !resp.ok) {
        const errText = resp ? await resp.text() : "No response";
        console.error(`Gemini failed: status=${resp?.status}, body=${errText}`);
        const fb = buildFallback(allAnswers);
        return new Response(JSON.stringify({ type: "recommendation", data: fb, source: "fallback" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const data = await resp.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      let parsed;
      try { parsed = JSON.parse(text); } catch { parsed = buildFallback(allAnswers); }

      // Ensure moodKeywords includes the space name for image matching
      if (parsed.moodKeywords && !parsed.moodKeywords.some((k: string) => allAnswers.space?.toLowerCase().includes(k.toLowerCase()))) {
        parsed.moodKeywords.unshift(allAnswers.space?.toLowerCase() || "interior");
      }

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
