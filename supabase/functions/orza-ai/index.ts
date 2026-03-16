import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// ── Base questions (steps 0-2) ──
const BASE_QUESTIONS = [
  {
    key: "name",
    message: "Hey! 👋 I'm Orza — your personal interior design consultant with 15+ years of Bangalore expertise. What's your name?",
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

// ── Expert-level space-specific follow-up questions ──
// These mimic what a real senior interior designer asks during a site visit
const SPACE_FOLLOWUPS: Record<string, Array<{ key: string; message: string; options: string[]; inputPlaceholder?: string }>> = {
  "Full Home Interiors": [
    { key: "home_size", message: "What's your home configuration? 🏠", options: ["1BHK", "2BHK", "3BHK", "4BHK+", "Independent House", "Duplex"] },
    { key: "home_sqft", message: "Approximate carpet area? 📐 (This affects layout proportions & material quantities)", options: ["Under 800 sqft", "800-1200 sqft", "1200-1600 sqft", "1600-2200 sqft", "2200+ sqft", "Not sure"] },
    { key: "priority_rooms", message: "Which rooms are your TOP priority? 🎯 (We'll allocate more budget & detail here)", options: ["Kitchen", "Master Bedroom", "Living Room", "Kids Room", "Study/Office", "All Rooms Equally"] },
    { key: "family_composition", message: "Who lives in the home? 👨‍👩‍👧‍👦 (This drives ergonomics, safety & storage design)", options: ["Couple", "Couple + Kids", "Joint Family", "Bachelor/Single", "Couple + Elderly Parents", "Roommates"] },
    { key: "vibe", message: "What design language speaks to you? 🎨", options: ["Modern & Minimal", "Luxury & Opulent", "Contemporary Warm", "Traditional Indian", "Scandinavian Clean", "Industrial Chic", "Japandi (Japan+Scandi)"] },
    { key: "existing_furniture", message: "Are you keeping any existing furniture? 🛋️ (We'll design around it)", options: ["Starting completely fresh", "Keeping sofa & dining", "Keeping beds only", "Keeping most furniture — need modular work only", "Not sure yet"] },
  ],
  "Modular Kitchen": [
    { key: "kitchen_shape", message: "What's your kitchen layout? 🍳 (This determines your work triangle efficiency)", options: ["L-Shaped", "U-Shaped", "Straight/Parallel", "Island Kitchen", "G-Shaped", "Not sure — need guidance"] },
    { key: "kitchen_size", message: "Approximate kitchen size? 📐", options: ["Small (< 60 sqft)", "Medium (60-100 sqft)", "Large (100+ sqft)", "Not sure"] },
    { key: "cooking_habits", message: "How would you describe your cooking? 🔥 (This affects ventilation, counter space & material choices)", options: ["Heavy Indian cooking daily", "Moderate — mix of cooking & ordering", "Light cooking — mostly salads, quick meals", "Professional/passionate cook", "Rarely cook — mostly reheating"] },
    { key: "kitchen_users", message: "How many people typically use the kitchen? 👩‍🍳", options: ["1 person", "2 people", "2+ with domestic help", "Joint family — multiple cooks", "With kids helping"] },
    { key: "vibe", message: "What kitchen aesthetic do you want? 🎨", options: ["Modern & Sleek (handleless)", "Luxury (stone + brass)", "Warm & Rustic (wood tones)", "Classic White & Clean", "Bold Colors (navy/green/maroon)", "Budget-Friendly & Functional"] },
    { key: "kitchen_pain", message: "What's your BIGGEST kitchen frustration today? 😤 (I'll solve this first)", options: ["Not enough storage", "Poor ventilation/oil smell", "Counter space too small", "Dark & cramped feeling", "Appliances don't fit well", "Everything is disorganized"] },
  ],
  "Bedroom": [
    { key: "bedroom_type", message: "Which bedroom is this? 🛏️", options: ["Master Bedroom", "Guest Bedroom", "Kids Bedroom", "Teen Room", "Parent's Bedroom"] },
    { key: "bedroom_size", message: "Approximate room size? 📐", options: ["Small (< 120 sqft)", "Medium (120-180 sqft)", "Large (180+ sqft)", "Not sure"] },
    { key: "bedroom_window", message: "Which direction do your windows face? ☀️ (This affects light, heat & color choices)", options: ["East — morning sun", "West — evening sun/heat", "North — indirect light", "South — balanced", "Multiple windows", "Not sure"] },
    { key: "sleep_habits", message: "What's most important for your sleep environment? 😴", options: ["Complete darkness (blackout)", "Cool temperature (AC optimized)", "Absolute silence", "Cozy & warm feeling", "Spacious & airy", "Reading/relaxing in bed"] },
    { key: "vibe", message: "What mood for the bedroom? 🎨", options: ["Cozy & Warm (earth tones)", "Modern & Minimal (clean lines)", "Luxury Hotel Feel (plush)", "Bohemian (layered textures)", "Scandinavian (light wood)", "Japandi (minimal + warm)"] },
    { key: "bedroom_must", message: "Must-have in this bedroom? ✅ (I'll prioritize this in the design)", options: ["Walk-in Wardrobe", "Study Corner / WFH Desk", "Dressing Area with Mirror", "King Size Bed with Storage", "TV Unit + Seating", "Attached Bath Integration"] },
  ],
  "Living Room": [
    { key: "living_size", message: "How big is your living room? 📐", options: ["Compact (< 150 sqft)", "Medium (150-250 sqft)", "Large (250+ sqft)", "Open Plan with Dining"] },
    { key: "living_usage", message: "How do you primarily USE your living room? 🎯 (This drives the layout)", options: ["Family time & TV watching", "Entertaining guests frequently", "Work from home / reading", "Kids play area too", "All of the above", "Mainly for display — rarely used"] },
    { key: "vibe", message: "What vibe do you want? 🎨", options: ["Modern & Minimal", "Luxury Lounge", "Warm & Cozy (hygge)", "Contemporary Elegant", "Traditional Indian", "Industrial Loft"] },
    { key: "living_seating", message: "Seating preference? 🛋️ (Seating takes 40-50% of living room budget)", options: ["L-Shaped Sofa (family-friendly)", "3+2 Sofa Set (classic)", "Sectional with Recliners", "Floor Seating / Diwan", "Mix of sofa + accent chairs", "Not sure — guide me"] },
    { key: "living_needs", message: "Key elements needed? 🎯", options: ["TV Unit + Entertainment Wall", "Bar Unit / Mini Bar", "Bookshelf / Display Cabinet", "Dining Combo in Same Space", "Home Office Corner", "Statement Art Wall"] },
  ],
  "Wardrobe": [
    { key: "wardrobe_type", message: "What type of wardrobe? 👔", options: ["Sliding Door", "Hinged Door", "Walk-in Closet", "Open Wardrobe / Dresser", "Not sure — recommend based on space"] },
    { key: "wardrobe_size", message: "Space available for the wardrobe? 📐", options: ["4-6 feet wide", "6-8 feet wide", "8-10 feet wide", "Full wall (10+ feet)", "Corner space", "Not sure"] },
    { key: "wardrobe_user", message: "Who primarily uses this wardrobe? 👗 (This determines internal configuration)", options: ["Woman — lots of saris/dresses", "Man — formals + casuals", "Couple — shared wardrobe", "Teen — casual + school", "Kids — small clothes + toys"] },
    { key: "vibe", message: "What finish/look do you prefer? 🎨", options: ["Modern Matte (fingerprint-free)", "Glossy & Premium", "Wood Texture (natural feel)", "Minimalist White/Ivory", "Dark & Dramatic", "Two-tone (mix)"] },
  ],
  "TV Unit": [
    { key: "tv_wall", message: "What's your TV wall situation? 📺", options: ["Full Wall Available (10+ ft)", "Medium Wall (6-8 ft)", "Compact Space (< 6 ft)", "Part of Living Room Feature", "Bedroom TV", "Not sure"] },
    { key: "tv_size", message: "TV size? 📺 (This determines panel proportions)", options: ["43 inch", "50-55 inch", "65 inch", "75 inch+", "Projector Setup", "Not decided yet"] },
    { key: "vibe", message: "What style for the TV unit? 🎨", options: ["Floating / Wall Mounted (modern)", "Full Wall Panel with Storage", "Minimal Shelf (no clutter)", "Traditional Cabinet with Doors", "TV hidden behind panel", "Integrated with Bookshelf"] },
    { key: "tv_extras", message: "What else goes on/near the TV wall? 🔧", options: ["Soundbar + Speakers", "Gaming Console (PS5/Xbox)", "Set-top Box + WiFi Router", "Display Shelves for Decor", "Fireplace / Electric Heater", "Nothing — keep it clean"] },
  ],
  "Pooja Room": [
    { key: "pooja_type", message: "What type of pooja space? 🙏", options: ["Dedicated Room", "Wall-mounted Mandir", "Corner Unit in Living/Kitchen", "Pooja Niche / Alcove", "Walk-in Temple Room"] },
    { key: "pooja_daily", message: "How do you use the pooja space daily? 🕉️ (This affects storage & ventilation)", options: ["Daily pooja with agarbatti/diya", "Weekly elaborate pooja", "Daily + festival celebrations", "Meditation + prayer", "Occasional use only"] },
    { key: "vibe", message: "What style? 🎨", options: ["Traditional Carved (temple style)", "Modern Minimal (CNC jali)", "Contemporary with LED backlit", "South Indian Brass Style", "North Indian Marble Style", "Budget-Friendly Simple"] },
    { key: "pooja_material", message: "Preferred material? 🪵", options: ["Solid Teak Wood", "Sheesham / Rosewood", "Engineered Wood + Veneer", "Marble / Corian", "Brass + Wood Combo", "Not sure — recommend"] },
  ],
  "2BHK": [
    { key: "bhk_sqft", message: "Approximate carpet area? 📐 (This affects what we can fit)", options: ["Under 700 sqft", "700-900 sqft", "900-1100 sqft", "1100+ sqft", "Not sure"] },
    { key: "family_composition", message: "Who lives here? 👨‍👩‍👧‍👦 (Drives layout decisions)", options: ["Couple", "Couple + 1 Kid", "Couple + 2 Kids", "Couple + Parents", "Bachelors/Roommates", "Single person"] },
    { key: "priority_rooms", message: "Which areas matter most? 🎯 (We'll invest more here)", options: ["Kitchen (heart of home)", "Master Bedroom", "Living Room (guest-facing)", "Second Bedroom / Kids", "All Equally"] },
    { key: "vibe", message: "What's your style? 🎨", options: ["Modern & Minimal", "Luxury on a Budget", "Space-Saving Smart Design", "Traditional & Warm", "Contemporary", "Scandinavian / Japandi"] },
    { key: "bhk_pain", message: "Biggest challenge with your 2BHK? 💡 (I'll focus on solving this)", options: ["Feels too small / cramped", "Not enough storage", "No designated work area", "Kitchen is too closed off", "No privacy between rooms", "Boring builder finishes"] },
  ],
  "3BHK": [
    { key: "bhk_sqft", message: "Approximate carpet area? 📐", options: ["Under 1000 sqft", "1000-1400 sqft", "1400-1800 sqft", "1800+ sqft", "Not sure"] },
    { key: "family_composition", message: "Who lives here? 👨‍👩‍👧‍👦", options: ["Couple", "Couple + Kids", "Joint Family (parents + couple)", "Couple + Live-in Help", "Family + Frequent Guests"] },
    { key: "priority_rooms", message: "Top priority areas? 🎯", options: ["Kitchen + Dining", "Master Bedroom Suite", "Living + Entertainment", "Kids Room + Study", "Guest Room / 3rd Bedroom", "All Rooms Equally"] },
    { key: "vibe", message: "Design language? 🎨", options: ["Modern & Minimal", "Luxury & Premium", "Contemporary Warm", "Traditional Indian", "Scandinavian", "Eclectic / Mix of Styles"] },
    { key: "bhk_goal", message: "Main design goal? 💡", options: ["Cohesive look across all rooms", "Each room has its own personality", "Maximize storage everywhere", "Entertainment-ready home", "Kid + pet safe throughout", "Premium materials & finishes"] },
  ],
  "Villa": [
    { key: "villa_size", message: "Villa configuration? 🏡", options: ["3BHK Villa", "4BHK Villa", "5BHK+ Villa", "Duplex", "Row House", "Farmhouse"] },
    { key: "villa_sqft", message: "Approximate built-up area? 📐", options: ["Under 2000 sqft", "2000-3000 sqft", "3000-4500 sqft", "4500+ sqft", "Not sure"] },
    { key: "priority_rooms", message: "Priority areas? 🎯", options: ["Grand Living + Double Height", "Kitchen & Dining", "Master Suite", "Outdoor / Garden / Patio", "Staircase & Foyer", "All Areas"] },
    { key: "vibe", message: "Villa design style? 🎨", options: ["Modern Luxury", "Classic European Elegant", "Contemporary Tropical", "Mediterranean", "Minimalist Japanese", "Traditional Indian Grand"] },
    { key: "villa_special", message: "Any special spaces needed? ✨", options: ["Home Theatre / Media Room", "Home Gym / Yoga Room", "Wine Cellar / Bar Room", "Library / Study", "Home Office Suite", "None of these"] },
  ],
  "Study Room": [
    { key: "study_for", message: "Who is the study room for? 📚", options: ["Work From Home Professional", "Student (school/college)", "Reading / Personal Library", "Shared Family Study", "Creative / Art Studio", "Content Creator / YouTuber"] },
    { key: "study_size", message: "Room size? 📐", options: ["Small (< 80 sqft)", "Medium (80-120 sqft)", "Large (120+ sqft)", "Corner of Another Room", "Converted Balcony"] },
    { key: "study_hours", message: "How many hours/day spent here? ⏰ (Affects ergonomics & lighting priority)", options: ["2-4 hours", "4-8 hours", "8+ hours (full-time WFH)", "Varies — weekends mainly", "Kids study time only"] },
    { key: "vibe", message: "What atmosphere? 🎨", options: ["Productive & Clean (corporate feel)", "Cozy Library (warm wood + books)", "Modern Tech Setup (dual screens + cable mgmt)", "Creative & Inspiring (mood boards + colors)", "Minimal & Focused (distraction-free)"] },
  ],
  "Kids Room": [
    { key: "kid_age", message: "Child's age group? 👧 (Design must match developmental needs)", options: ["Toddler (1-4 yrs)", "Young Child (5-8 yrs)", "Pre-teen (9-12 yrs)", "Teenager (13+)", "Shared — different ages"] },
    { key: "kid_gender", message: "Designing for? 👦👧", options: ["Boy", "Girl", "Shared (boy + girl)", "Gender-neutral / flexible", "Twins"] },
    { key: "kid_theme", message: "Any theme preference? 🎪 (Or keep it flexible to grow with them)", options: ["Space & Planets", "Nature & Animals", "Sports", "Princess / Fairy Tale", "Superhero / Adventure", "No theme — neutral & grows with them"] },
    { key: "vibe", message: "Overall feel? 🎨", options: ["Fun & Colorful (stimulating)", "Calm & Pastel (soothing)", "Modern & Age-appropriate", "Educational (maps, alphabets)", "Montessori-Inspired (accessible)", "Grows-with-them Neutral"] },
    { key: "kid_needs", message: "Must-haves? 🎯", options: ["Study Desk (homework area)", "Bunk Bed / Loft Bed", "Dedicated Play Zone", "Large Toy Storage System", "Reading Nook / Bookshelf", "All of the above"] },
  ],
};

const DEFAULT_FOLLOWUPS = [
  { key: "vibe", message: "What style do you prefer? 🎨", options: ["Modern & Minimal", "Luxury", "Contemporary", "Traditional", "Budget-Friendly"] },
];

const TAIL_QUESTIONS = [
  {
    key: "budget",
    message: "What's your budget range? 💰 (Be honest — I'll optimize every rupee)",
    options: ["Under ₹3 Lakhs", "₹3-6 Lakhs", "₹6-10 Lakhs", "₹10-15 Lakhs", "₹15-25 Lakhs", "₹25 Lakhs+", "Not sure yet"],
  },
  {
    key: "timeline",
    message: "When do you need this done? ⏰ (Affects material choices & planning)",
    options: ["ASAP — within 30 days", "1-2 months", "2-3 months (flexible)", "3-6 months (planning ahead)", "Just exploring for now"],
  },
];

// ── Space-specific expert requirements (multi-select) ──
const SPACE_REQUIREMENTS: Record<string, { message: string; options: string[] }> = {
  "Modular Kitchen": { message: "Any specific kitchen requirements? Pick all that apply 🍳", options: ["Vastu Compliant", "Separate Wet & Dry Zone", "Oil-Splash Resistant Backsplash", "Senior-Friendly (lower height)", "Built-in Microwave + OTG", "Water Purifier Built-in", "Dishwasher Space", "None"] },
  "Kitchen": { message: "Any specific kitchen requirements? 🍳", options: ["Vastu Compliant", "Separate Wet & Dry Zone", "Oil-Splash Resistant", "Senior-Friendly Height", "Built-in Appliances", "Dishwasher Space", "None"] },
  "Bedroom": { message: "Any special bedroom requirements? 🛏️", options: ["Vastu Compliant Bed Position", "Complete Blackout Setup", "Soundproofing (road-facing)", "AC Duct Integration", "Baby Crib Space", "Couple-Friendly Lighting", "None"] },
  "Master Bedroom": { message: "Any special master bedroom requirements? 🛏️", options: ["Vastu Compliant", "Blackout Setup", "Soundproofing", "Walk-in Closet", "Attached Bath Door Alignment", "His & Hers Wardrobe Zones", "None"] },
  "Living Room": { message: "Any special living room needs? 🛋️", options: ["Vastu Compliant", "Pet-Friendly Fabrics (scratch-proof)", "Kid-Safe Corners (rounded)", "Home Theatre / Surround Sound", "Guest-Ready Always", "Shoe Rack at Entrance", "None"] },
  "Wardrobe": { message: "Any wardrobe-specific needs? 👔", options: ["Sari / Lehenga Section", "Shoe Rack Inside", "Jewelry/Accessories Drawer", "Humidity Control (Bangalore moisture)", "Full Mirror Panel", "Trouser Pull-out", "Laundry Hamper Built-in", "None"] },
  "TV Unit": { message: "Any TV unit-specific needs? 📺", options: ["Gaming Console Storage (ventilated)", "Soundbar Integration", "Hidden Wiring (no visible cables)", "Bookshelf Combo", "Display for Collectibles", "Router/Modem Housing", "None"] },
  "Pooja Room": { message: "Any pooja room requirements? 🙏", options: ["Vastu East/NE Facing", "Bell Hanging Spot (solid ceiling)", "Smoke Ventilation for Agarbatti", "Storage for Daily Pooja Items", "Festival-Ready (expandable)", "Separate Havan Space", "None"] },
  "2BHK": { message: "Any special requirements for your 2BHK? 🏠", options: ["Vastu Compliant Layout", "Pet Friendly (scratch-proof)", "Kid Safe (rounded, no sharp)", "Work From Home Desk", "Elderly Accessible (grab bars)", "Space for Domestic Help", "None"] },
  "3BHK": { message: "Any special requirements for your 3BHK? 🏠", options: ["Vastu Compliant", "Pet Friendly", "Kid Safe", "Work From Home Setup", "Entertainment Zone (bar/theatre)", "Smart Home Integration", "Servant Room Design", "None"] },
  "Villa": { message: "Any villa-specific requirements? 🏡", options: ["Vastu Compliant", "Outdoor-Indoor Flow (large windows)", "Smart Home Automation Ready", "Staff Quarters Design", "Home Gym / Yoga Space", "Swimming Pool Area Design", "Security Camera Integration", "None"] },
  "Full Home Interiors": { message: "Any special home requirements? 🏠", options: ["Vastu Compliant Throughout", "Pet Friendly (all rooms)", "Kid Safe (all rooms)", "Work From Home Dedicated Space", "Elderly Accessible", "Smart Home / Automation", "Pooja Room Included", "None"] },
  "Study Room": { message: "Any study room needs? 📚", options: ["Dual Monitor Desk Setup", "Professional Video Call Background", "Soundproofing / Acoustic Panels", "Standing Desk Option", "Whiteboard / Pinboard Wall", "Printer + Scanner Station", "None"] },
  "Kids Room": { message: "Any kids room requirements? 👧", options: ["Anti-Bacterial Paint / Surfaces", "Growth Chart / Height Mark Wall", "Night Light with Dimmer", "Sibling Sharing Layout", "Allergy-Safe Materials (low VOC)", "Montessori-Inspired Accessible", "None"] },
};

const RECOMMENDATION_SCHEMA = `Return VALID JSON ONLY (no markdown, no backticks) with this EXACT structure:
{
  "headline": "Inspiring headline specific to their EXACT space + style + size",
  "intro": "3-4 sentence emotional hook mentioning their specific space, style, family, and pain points they mentioned",
  "colorPalette": {
    "description": "3-4 sentences explaining the color psychology and WHY these colors work for their specific space, lifestyle, and Bangalore's natural light",
    "colors": [{"name": "Color Name", "shade": "Real Asian Paints/Berger code", "hex": "#hex", "usage": "Exactly WHERE in this space and WHY"}]
  },
  "furnitureLayout": {
    "description": "3-4 sentences about layout strategy specific to their room size, family, and usage patterns",
    "items": [{"name": "Specific item for THIS space", "detail": "Exact dimensions, brand suggestions, WHY this works for their needs", "priceRange": "₹XX,XXX - ₹XX,XXX"}]
  },
  "materials": {
    "description": "3-4 sentences explaining material choices considering Bangalore climate (humid, dusty), their cooking habits / lifestyle, and budget",
    "recommendations": [{"item": "Component", "type": "Specific brand & grade", "why": "Technical reason + lifestyle reason"}]
  },
  "lighting": {
    "description": "3-4 sentences about lighting strategy with color temperature science",
    "layers": [{"type": "Ambient/Task/Accent/Decorative", "suggestion": "Specific fixture with Kelvin rating", "placement": "Exact location + height"}]
  },
  "vastuTips": {
    "description": "2-3 sentences about vastu compliance for this specific space",
    "tips": [{"aspect": "Direction/Placement", "recommendation": "Specific vastu guideline", "modern_adaptation": "How to follow vastu without compromising modern design"}]
  },
  "maintenanceGuide": {
    "description": "2-3 sentences about maintaining this space in Bangalore's climate",
    "tasks": [{"item": "What to maintain", "frequency": "Daily/Weekly/Monthly/Quarterly", "method": "Exactly how to do it", "cost": "Approximate annual maintenance cost"}]
  },
  "proTips": ["5 genuinely useful, non-obvious tips that ONLY a senior designer with 15+ years experience would know — specific to THIS space type, their chosen style, and Bangalore context"],
  "designerSecret": "One BRILLIANT insider trick specific to their exact space type, size, and requirements — something that saves money or creates wow factor",
  "estimatedBudget": {"low": "₹X,XX,XXX", "high": "₹X,XX,XXX", "note": "Detailed breakdown: what's included, what's extra, potential savings tips"},
  "estimatedTimeline": {"days": "XX-XX days", "breakdown": "Design: X-X days | Manufacturing: X-X days | Installation: X-X days", "note": "Factors that could speed up or delay"},
  "moodKeywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "bangaloreSpecific": "One paragraph about why this design works specifically for Bangalore — climate, lifestyle, apartment trends, resale value impact"
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

// ── Fallback builder (when Gemini fails) ──
const buildFallback = (allAnswers: Record<string, string>) => {
  const space = allAnswers.space || "Living Room";
  const vibe = allAnswers.vibe || "Modern";
  const budget = allAnswers.budget || "Not sure yet";
  const location = allAnswers.location || "Bangalore";

  const budgetLow = budget.includes("Under") ? "₹1,50,000" : budget.includes("3-6") ? "₹3,00,000" : budget.includes("6-10") ? "₹6,00,000" : budget.includes("10-15") ? "₹10,00,000" : budget.includes("15-25") ? "₹15,00,000" : budget.includes("25") ? "₹25,00,000" : "₹2,80,000";
  const budgetHigh = budget.includes("Under") ? "₹3,00,000" : budget.includes("3-6") ? "₹6,00,000" : budget.includes("6-10") ? "₹10,00,000" : budget.includes("10-15") ? "₹15,00,000" : budget.includes("15-25") ? "₹25,00,000" : budget.includes("25") ? "₹40,00,000" : "₹6,50,000";

  return {
    headline: `Your ${vibe} ${space} — Designed for ${location}`,
    intro: `A beautifully curated ${space} designed with a ${vibe} aesthetic, tailored for the climate and lifestyle of ${location}. Every detail has been considered for your specific requirements.`,
    colorPalette: {
      description: `Color story curated for a ${vibe} ${space} — balanced for ${location}'s natural light and humidity.`,
      colors: [
        { name: "Soft White", shade: "Asian Paints L152", hex: "#F3EDE2", usage: "Primary walls — creates depth" },
        { name: "Warm Taupe", shade: "Berger 8P2672", hex: "#CFC5B7", usage: "Feature/accent wall" },
        { name: "Forest Green", shade: "Asian Paints 9458", hex: "#6B8F71", usage: "Soft furnishings & accessories" },
        { name: "Dark Walnut", shade: "Wood Tone", hex: "#5C3D2E", usage: "Furniture & frames" },
      ],
    },
    furnitureLayout: {
      description: `Furniture & layout designed specifically for your ${space} with optimal traffic flow.`,
      items: [
        { name: "Primary Furniture", detail: `Core piece for your ${space}, selected for ${vibe} style`, priceRange: "₹35,000 - ₹95,000" },
        { name: "Storage Solution", detail: "Customized storage optimized for the space", priceRange: "₹45,000 - ₹1,20,000" },
        { name: "Accent Pieces", detail: "Curated accessories and accent furniture", priceRange: "₹15,000 - ₹40,000" },
      ],
    },
    materials: {
      description: `Materials selected for ${location}'s humid climate — moisture, dust & heat resistant.`,
      recommendations: [
        { item: "Core Structure", type: "BWP Plywood (Century/Greenply)", why: `Moisture resistant for ${location} climate` },
        { item: "Hardware", type: "Hettich soft-close", why: "Premium durability, 50000+ cycles" },
        { item: "Surface Finish", type: "Laminate (Merino)", why: "Scratch resistant, easy maintenance" },
      ],
    },
    lighting: {
      description: `Three-layer lighting plan for your ${space} — ambient warmth, focused task light, accent drama.`,
      layers: [
        { type: "Ambient", suggestion: "Warm 3000K recessed LEDs", placement: "Ceiling perimeter" },
        { type: "Task", suggestion: "Focused work-area lighting", placement: "Activity zones" },
        { type: "Accent", suggestion: "LED strip lighting", placement: "Feature wall or shelving" },
      ],
    },
    vastuTips: {
      description: `Basic vastu guidelines for your ${space} that can be incorporated without compromising modern design.`,
      tips: [
        { aspect: "Orientation", recommendation: `Place main furniture facing the recommended direction for ${space}`, modern_adaptation: "Use subtle orientation shifts that feel natural in the layout" },
        { aspect: "Colors", recommendation: "Earth tones and natural colors align with vastu for this space", modern_adaptation: "Incorporate through accent walls and soft furnishings" },
      ],
    },
    maintenanceGuide: {
      description: `Keep your ${space} looking new with these simple maintenance routines tailored for ${location}'s climate.`,
      tasks: [
        { item: "Laminate Surfaces", frequency: "Weekly", method: "Wipe with damp microfiber cloth + mild soap", cost: "₹500/year" },
        { item: "Hardware (hinges/slides)", frequency: "Quarterly", method: "Lubricate with silicone spray at all pivot points", cost: "₹300/year" },
        { item: "Soft Furnishings", frequency: "Monthly", method: "Vacuum and spot-clean; dry clean covers every 6 months", cost: "₹2,000/year" },
      ],
    },
    proTips: [
      `In ${location}, always use BWR/BWP grade plywood for any furniture near water sources — regular MR grade warps within 2 years.`,
      "Install a 6-inch skirting in a contrasting color — it protects walls from mopping damage and adds a designer finish for under ₹5,000.",
      `For ${vibe} style, invest 60% of budget in the ONE feature element (kitchen/wardrobe/TV unit) and keep the rest minimal — this creates maximum visual impact.`,
      "Always check material thickness: 18mm for carcass, 8mm for back panels. Many vendors cut costs here — thinner boards warp in Bangalore humidity.",
      "Get all electrical points (switches, sockets) planned BEFORE furniture design — repositioning later costs ₹500-1000 per point."
    ],
    designerSecret: `For your ${space}: choose one bold feature element and keep everything else restrained — this creates instant designer-level impact on any budget. The key is contrast, not quantity.`,
    estimatedBudget: { low: budgetLow, high: budgetHigh, note: `${space} with ${vibe} style in ${location} — prices based on 2025 market rates. Includes design, materials, manufacturing & installation.` },
    estimatedTimeline: getTimelineForSpace(space),
    moodKeywords: [vibe.toLowerCase(), space.toLowerCase(), "curated", location.toLowerCase(), "designer-crafted"],
    bangaloreSpecific: `${location}'s tropical climate means higher humidity year-round — all materials recommended here are specifically chosen to resist moisture warping. The city's apartment boom means standard sizes are well-stocked, keeping costs competitive. A well-designed ${space} can increase your property's rental value by 15-20% in ${location}'s premium residential market.`,
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
      const spaceReq = SPACE_REQUIREMENTS[space] || { message: "Any special requirements? 🏠", options: ["Vastu Compliant", "Pet Friendly", "Kid Safe", "Work From Home", "Lots of Storage", "None"] };
      const detailsQuestion = { key: "details", message: spaceReq.message, options: spaceReq.options };
      
      const tailKeys = new Set(TAIL_QUESTIONS.map(q => q.key));
      const filteredFollowups = spaceFollowups.filter(q => !tailKeys.has(q.key));
      
      const allQuestions = [...BASE_QUESTIONS, ...filteredFollowups, ...TAIL_QUESTIONS, detailsQuestion];

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

      const prompt = `You are Orza, a SENIOR interior design consultant at EverySpaces — Bangalore's highest-rated interior design firm. You have 18+ years of hands-on experience across 3000+ residential projects in Bangalore, from budget 1BHKs to luxury villas. You personally know every material vendor in Bangalore, current market prices, and what works in this climate.

Your task: Create a DEEPLY PERSONALIZED, EXPERT-LEVEL interior design recommendation that feels like a ₹25,000 consultation — not a generic AI response. Every single section must directly reference their SPECIFIC answers below.

${RECOMMENDATION_SCHEMA}

CLIENT PROFILE — READ EVERY LINE CAREFULLY:
- Name: ${allAnswers.name || "Client"}
- Location: ${allAnswers.location || "Bangalore"}
${answerSummary}

EXPERT RULES — FOLLOW EVERY ONE:

1. HEADLINE: Must mention their EXACT space type, size, AND style. Example: "Your Modern Minimal L-Shaped Kitchen for Heavy Indian Cooking" — NOT just "Kitchen Design"

2. INTRO: Reference their family composition, pain points, and lifestyle. Make them feel understood. Example: "Designed for a couple who loves cooking together, this compact L-shaped kitchen solves your biggest frustration — counter space — while keeping the warm, rustic aesthetic you love."

3. COLORS: Use REAL Asian Paints / Berger shade codes that ACTUALLY EXIST. Explain WHY each color works for their specific space — consider natural light direction (${allAnswers.bedroom_window || allAnswers.kitchen_shape || "standard"}), room size, and chosen vibe. Minimum 4 colors.

4. FURNITURE: Each item MUST include:
   - Exact dimensions appropriate for their room size
   - Why THIS piece solves their stated need/pain point
   - Real brand suggestions (Godrej, Nilkamal, Urban Ladder, Pepperfry for furniture; Hettich, Hafele, Blum for hardware)
   - Accurate 2025 Bangalore market prices

5. MATERIALS: Consider Bangalore's specific challenges:
   - 65-75% humidity year-round → BWR/BWP plywood essential near water
   - Red soil dust → easy-clean finishes
   - Hard water in many areas → specific sink/faucet recommendations
   - Power cuts → UPS integration for smart home
   - If they cook heavy Indian food → oil/heat resistant materials are CRITICAL

6. VASTU: Provide 3-4 specific vastu tips relevant to their space type. Include MODERN adaptations that don't compromise aesthetics. If they selected "Vastu Compliant" in requirements, make this a priority throughout.

7. MAINTENANCE: Bangalore-specific maintenance schedule. Include costs. Cover humidity damage prevention, pest-proofing (Bangalore termite issue), and seasonal care.

8. PRO TIPS: 5 tips that ONLY a senior Bangalore designer would know. Examples: "In Whitefield apartments, the bedroom walls are typically 4 inches thinner — use 16mm carcass instead of 18mm to save space" or "For heavy Indian cooking, install the chimney 24 inches above the hob, not the standard 26 — Bangalore's lower ceiling heights make this more efficient."

9. BUDGET: Must align with their stated budget: "${allAnswers.budget || "flexible"}". Break down by component. Include money-saving tips specific to their choices.

10. TIMELINE: If they said "${allAnswers.timeline || "flexible"}", factor this in. Mention what can be expedited and what cannot.

11. BANGALORE SPECIFIC: Comment on how this design affects their apartment's rental/resale value, which Bangalore locality trends match their style, and seasonal considerations.

12. DESIGNER SECRET: One BRILLIANT trick specific to their exact combination of space + size + style + requirements. Something that saves ₹20,000+ or creates a "wow, how did they do that?" moment.

CRITICAL: Price ranges MUST be in INR, realistic for Bangalore 2025 market. Use ₹ symbol. Include GST note where relevant. Never underestimate — clients lose trust when actuals exceed estimates.`;

      const resp = await callGemini(GEMINI_API_KEY, {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.75, responseMimeType: "application/json", maxOutputTokens: 4000 },
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
      try {
        parsed = JSON.parse(text);
      } catch {
        console.error("JSON parse failed, raw text:", text?.substring(0, 200));
        const fb = buildFallback(allAnswers);
        return new Response(JSON.stringify({ type: "recommendation", data: fb, source: "fallback" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Ensure timeline is populated
      if (!parsed.estimatedTimeline || !parsed.estimatedTimeline.days) {
        parsed.estimatedTimeline = getTimelineForSpace(allAnswers.space || "Living Room");
      }

      return new Response(JSON.stringify({ type: "recommendation", data: parsed, source: "ai" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Invalid phase" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Function error:", err);
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
