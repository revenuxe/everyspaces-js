export const comparison = {
  slug: "homelane-vs-designcafe-vs-truww-vs-livspace",
  path: "/articles/homelane-vs-designcafe-vs-truww-vs-livspace",
  title: "HomeLane vs DesignCafe vs Truww vs Livspace: Which Is Best for Your Bangalore Home?",
  description: "Compare HomeLane, DesignCafe, Truww, Livspace and EverySpaces on design approach, materials, timelines and services for your Bangalore home.",
  updated: "2026-09-09",
};

export type Claim = { text: string; source: string; checkedAt: string };
export type Company = {
  id: string; name: string; website: string; overview: Claim; suited: string; ask: string;
  take: string; understand: string; facts: Record<string, Claim>;
};
const fact = (text: string, source: string): Claim => ({ text, source, checkedAt: comparison.updated });
const hl = "https://www.homelane.com/";
const dc = "https://www.designcafe.com/";
const tw = "https://truww.com/";
const ls = "https://www.livspace.com/in";
const es = "https://www.everyspaces.com/";

// Public descriptions are not independent audits. Contract-specific claims remain unverified.
export const companies: Company[] = [
  { id: "homelane", name: "HomeLane", website: hl,
    overview: fact("HomeLane describes a process from designer consultation and 3D design through factory production, installation and handover.", hl),
    suited: "Homeowners exploring an organised modular design and installation process.",
    ask: "Which parts of my project are modular, and which have a separate schedule?",
    take: "Use the consultation to test how the proposed layout fits your routines. A clear process matters most when its milestones match your actual scope.",
    understand: "A delivery headline is only useful alongside its start date and exclusions. Ask for design, site preparation and additional work to be scheduled separately. Review a sample finish and a dimensioned drawing before approving production.",
    facts: { model: fact("Design through installation", hl), design: fact("Designer-led planning", hl), visual: fact("3D designs advertised", hl), delivery: fact("Design approval, factory production, installation", hl), full: fact("Full-home interiors listed", hl), kitchen: fact("Modular kitchens listed", hl), bangalore: fact("Bengaluru listed", hl), visit: fact("Experience-centre consultations", hl) } },
  { id: "designcafe", name: "DesignCafe", website: dc,
    overview: fact("DesignCafe presents complete home interiors with a focus on design and space optimisation, supported by room galleries and experience centres.", dc),
    suited: "Homeowners who want to discuss storage and making better use of their floor plan.",
    ask: "Can you show the usable storage and circulation space in my actual layout?",
    take: "Judge space-saving ideas by how comfortably you can use them every day. An extra cabinet is valuable only if doors, seating and movement still work together.",
    understand: "An inspiration image does not tell you whether the same layout works in your apartment. Bring dimensions, appliance sizes and a list of what you need to store. Ask which proposed details are standard modules and which need custom work.",
    facts: { model: fact("Complete home interiors", dc), design: fact("Space optimisation focus", dc), full: fact("Complete home interiors listed", dc), kitchen: fact("Modular kitchens listed", dc), visit: fact("Experience centres listed", dc) } },
  { id: "truww", name: "Truww", website: tw,
    overview: fact("Truww highlights 3D visualisation, a live quotation engine and a design-to-installation process. Its website lists Bangalore studios.", tw),
    suited: "Homeowners interested in seeing design choices and quotation changes together.",
    ask: "Will the final quote specify each material, hardware series and installation exclusion?",
    take: "Visualisation can make decisions easier. Pair every approved render with a written specification so the picture and the production order describe the same home.",
    understand: "Treat a render as a discussion tool. Confirm dimensions and finishes with drawings and samples, and ask whether a revised colour, accessory or layout changes the total. A fast quotation is a useful starting point; the signed scope is what you need to compare.",
    facts: { design: fact("Technology-supported design", tw), visual: fact("3D renders and walkthroughs", tw), materials: fact("Material standards referenced; request itemised specs", tw), delivery: fact("Design-to-build process advertised", tw), bangalore: fact("Bangalore studios listed", tw), visit: fact("Studio or online meetings", tw) } },
  { id: "livspace", name: "Livspace", website: ls,
    overview: fact("Livspace lists modular interiors, full-home interiors and renovation services, alongside a broad collection of room design ideas.", ls),
    suited: "Homeowners exploring several interior and renovation services through one platform.",
    ask: "Who owns the complete schedule when modular, civil and installation teams overlap?",
    take: "A broad service menu can help when a home needs several kinds of work. Ask for one coordinated scope and a named contact who can resolve dependencies between teams.",
    understand: "Confirm which services are included in your selected proposal. A platform offering a service does not mean it is automatically part of your package. Clarify who approves changes, how progress is reported and how post-handover requests are assigned.",
    facts: { model: fact("End-to-end and modular options", ls), design: fact("Room design galleries", ls), full: fact("Full-home interiors listed", ls), kitchen: fact("Modular kitchens listed", ls), civil: fact("Civil work listed; confirm project scope", ls) } },
  { id: "everyspaces", name: "EverySpaces", website: es,
    overview: fact("EverySpaces begins with a personal design conversation, resolves drawings, finishes, costs and timelines, then moves into production and installation with a dedicated project lead.", es),
    suited: "Homeowners looking for a Bangalore-focused design conversation and project guidance.",
    ask: "Can we agree on the drawings, finish schedule, responsibilities and handover checklist?",
    take: "We want your home to begin with the way you live. Shortlist us if that approach resonates, then assess our proposal against the same practical questions you ask everyone else.",
    understand: "Our process includes a final walkthrough and handover. Your own proposal should still explain the scope, materials, payment stages and project-specific dates. Ask us for relevant completed work and discuss what can be adapted to your home.",
    facts: { model: fact("Design, production and installation", es), design: fact("Personal design conversation", es), management: fact("Dedicated project lead", es), delivery: fact("Details resolved before production", es), full: fact("Full-home interiors", es + "services/full-home-design"), kitchen: fact("Modular kitchens", es + "services/modular-kitchen"), bangalore: fact("Bangalore-focused services", es + "bangalore") } },
];

export const comparisonRows = [
  ["model", "Service model"], ["design", "Design approach"], ["custom", "Customisation"],
  ["materials", "Material transparency"], ["visual", "3D visualisation"], ["management", "Project management"],
  ["delivery", "Typical delivery approach"], ["warranty", "Warranty approach"], ["full", "Full-home interiors"],
  ["kitchen", "Modular kitchen"], ["civil", "Civil work availability"], ["bangalore", "Bangalore presence"],
  ["visit", "In-person consultation"], ["suited", "Best suited for (editorial view)"],
];

export const checklist = [
  "What exactly is included in this quotation?", "What is excluded?", "Which board and material brands are being used?",
  "Which hardware brand and series am I getting?", "How many design revisions are included?", "When does my design become final?",
  "Who manages my site?", "How are changes during execution charged?", "What could delay the project?",
  "What warranty do I receive?", "What happens if something needs fixing after handover?", "Can I see completed work or relevant project examples?",
];

export const faqs = [
  ["HomeLane vs Livspace: which is better in Bangalore?", "Start with the same floor plan and room-by-room brief. Compare the two proposals on quantities, materials, execution responsibilities and exclusions. Neither a delivery headline nor a brand name alone tells you which team will fit your home. Meet the proposed designer and request a written schedule for your scope."],
  ["DesignCafe vs Livspace: what is the difference?", "Their public positioning is summarised in the sourced company sections above. For your decision, ask both to solve the same storage and layout problem. Compare the drawings, usable space, included work and final specifications, rather than deciding from different showroom examples."],
  ["Truww vs Livspace: which should I choose?", "Ask each team to walk you from the initial design to the final itemised quotation. Check how changes in finish or hardware affect the price, who coordinates site work and how the handover is documented. Choose the proposal and working relationship that best fit your priorities."],
  ["HomeLane vs DesignCafe: which is better?", "There is no universal answer. Test each proposed layout against your actual furniture, storage and movement needs. Then compare the same material and hardware specifications. Ask about design revision limits and what happens if a site measurement changes the plan."],
  ["Which interior company is best in Bangalore?", "The right company is the one whose design, written scope and project process suit your home. Look for relevant completed projects, an understandable quotation and clear responsibility for execution. Apply the same checklist to every shortlisted team, including EverySpaces."],
  ["How much do full home interiors cost in Bangalore?", "Cost depends on the amount of work, dimensions, boards, finishes, hardware and site conditions. A kitchen and two wardrobes cannot be compared directly with a package that also includes ceilings, painting and custom furniture. Use an estimate for planning and request a measured, itemised quote before committing."],
  ["How should I compare two interior quotations?", "Put the same rooms and units next to each other. Match quantities, dimensions, material grades, finish specifications and hardware series. Add excluded services and applicable taxes before comparing totals. Ask both teams to explain assumptions in writing."],
  ["What materials should I ask an interior designer about?", "Ask about the carcass board, shutter material, laminate or other finish, edge banding, countertop and hardware brand and series. Request a room-specific specification and physical samples where practical. Confirm whether substitutions need your approval and how they affect cost and warranty."],
  ["How long do home interiors take in Bangalore?", "Ask for separate design, procurement, production, site work, installation and snag-correction stages. The schedule depends on scope, approvals and site readiness. Confirm what starts any quoted delivery period and whether civil work or revisions add time."],
  ["Should I choose a large interior brand or a local Bangalore studio?", "Compare the actual team and agreement. A larger organisation may appeal if you want to explore multiple services; a local studio may appeal if you value a direct design relationship. Neither format guarantees a better result. Check communication, capacity, specifications and after-sales responsibilities."],
  ["Does EverySpaces provide complete home interiors?", "Yes. EverySpaces lists full-home interiors, 2BHK and 3BHK design, modular kitchens, wardrobes and individual room services. Discuss your requirements to establish exactly what is included in your project proposal."],
  ["Can I get a consultation before making a decision?", "You can request a free EverySpaces consultation using the form on this page. Bring your floor plan, priorities and any existing quotations. The conversation helps establish your scope before you decide whether to move forward."],
];
