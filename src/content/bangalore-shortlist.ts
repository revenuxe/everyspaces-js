import { companies } from "./interior-comparison";

export const shortlistArticle = {
  slug: "top-10-best-interior-designers-in-bangalore-2026",
  path: "/articles/top-10-best-interior-designers-in-bangalore-2026",
  title: "Top 10 Interior Designers in Bangalore (2026): How to Choose",
  description: "Explore 10 Bangalore interior design companies, their services and design approaches. Compare your options, plan your budget and know what to ask before booking.",
  checkedAt: "2026-09-09",
};

type Profile = { id: string; name: string; source: string; overview: string; focus: string; suited: string; question: string; advice: string };

const additions: Profile[] = [
  { id: "asense", name: "Asense Interiors", source: "https://www.asenseinterior.com/",
    overview: "Asense publishes Bangalore home project tours across modern, minimalist and traditional/contemporary styles. Its website describes an end-to-end process and lists experience centres in Whitefield and HSR Layout.",
    focus: "Home interiors and project-led inspiration",
    suited: "Homeowners who want to start with completed-home examples and discuss how a style translates to their apartment.",
    question: "Can you show a completed project with a floor plan and scope similar to mine?",
    advice: "Use a project tour to identify the details you like: storage, proportions, finishes or lighting. Ask which of those details are included in your proposal and which are optional. Photographs help establish a direction; a measured layout establishes whether it works in your home." },
  { id: "bonito", name: "Bonito Designs", source: "https://bonito.in/",
    overview: "Bonito describes full-home interiors in Bengaluru and Mumbai, with personalised layouts, material selection, 3D design and project management. Its published design collections offer different starting points for a home’s visual direction.",
    focus: "Full-home design and coordinated interiors",
    suited: "Homeowners looking to develop a consistent design language across several rooms.",
    question: "How will a design theme be adapted to my routines, storage requirements and budget?",
    advice: "Ask to see the relationship between the living room, kitchen and bedrooms, rather than approving each room in isolation. Discuss what is customised for you and what follows a standard collection. If you only need one room, confirm whether your scope is accepted before spending time on detailed planning." },
  { id: "carafina", name: "Carafina", source: "https://www.carafina.in/",
    overview: "Carafina presents a Bangalore home-interior portfolio and project listings. Its design section describes working across classical, fusion, modern and industrial styles.",
    focus: "Residential design across several styles",
    suited: "Homeowners who want to review a local project portfolio before developing their own design brief.",
    question: "Which portfolio details can be delivered within my exact scope and finish specification?",
    advice: "Select two or three projects that feel relevant and explain what appeals to you. Ask the designer to distinguish decorative styling from built-in work in the estimate. A project total shown online should not be treated as the price of recreating that home: quantities, site conditions and inclusions may differ." },
  { id: "decorpot", name: "Decorpot", source: "https://www.decorpot.com/",
    overview: "Decorpot lists end-to-end home interior services in Bangalore, including modular kitchens, wardrobes, crockery units, TV units, study tables, false ceilings and lighting.",
    focus: "Room-by-room home interior services",
    suited: "Homeowners preparing a scope that combines storage, cabinetry and supporting room elements.",
    question: "Can you separate cabinetry, ceilings, lighting and site work into clear quotation sections?",
    advice: "Use the service list to build your own room checklist. Confirm who coordinates the work between trades and which items are supplied by you. Ask the team to explain dependencies, such as when electrical points must be finalised before a TV unit or study desk can be installed." },
  { id: "dlife", name: "D’LIFE Interiors", source: "https://dlifeinteriors.com/location/bangalore/",
    overview: "D’LIFE’s Bangalore page describes design, drawing approval, factory production, delivery and execution. It lists experience centres in Whitefield, HSR Layout and Yelahanka.",
    focus: "Home furnishing from design to execution",
    suited: "Homeowners who want to examine physical displays and understand a design-to-production process.",
    question: "Which branch handles my address, and what is fixed when I approve the drawings?",
    advice: "Take your floor plan to the visit and ask how display units would change for your dimensions. Confirm how site measurements are checked, when production begins and what happens if you request a change afterward. Ask for the project schedule to include installation and final corrections, not only factory production." },
];

const focus: Record<string, string> = {
  homelane: "Designer-led modular and full-home planning",
  designcafe: "Home design and space optimisation",
  truww: "3D visualisation and live quotations",
  livspace: "Modular, full-home and renovation options",
  everyspaces: "Personal design conversations and project guidance",
};

export const shortlist: Profile[] = [
  ...additions,
  ...companies.map(company => ({ id: company.id, name: company.name, source: company.website,
    overview: company.overview.text, focus: focus[company.id], suited: company.suited,
    question: company.ask, advice: company.understand,
  })),
].sort((a, b) => a.name.localeCompare(b.name, "en"));

export const shortlistFAQs = [
  ["Which is the best interior designer in Bangalore in 2026?", "There is no independently established winner in this guide. The right choice depends on your scope, budget, design preferences and the team assigned to your project. Use the shortlist to select two or three consultations, then compare proposals against the same brief."],
  ["Are these companies ranked from best to worst?", "No. The ten companies appear alphabetically. Inclusion is based on publicly available residential design information and a Bangalore offering, with EverySpaces included as the publisher. We have not scored workmanship, audited every project or conducted a city-wide customer survey."],
  ["How much should I budget for a 2BHK or 3BHK interior?", "Begin with a room-by-room scope. Kitchen and wardrobe quantities, board grades, finishes, hardware, ceilings and site work affect the total. A bedroom count alone is not enough for a reliable price. Request a measured quotation and identify exclusions before setting the final budget."],
  ["Can an interior designer handle only my kitchen or wardrobes?", "Ask the company whether it accepts your project size and whether a minimum scope applies. A full-home offering does not automatically mean single-room work is available. EverySpaces lists modular kitchen and wardrobe services; discuss your requirements to confirm a suitable proposal."],
  ["Should I choose a large brand or a local design studio?", "Compare the actual service you receive: who designs, who executes, how decisions are documented and who resolves issues. Company size alone cannot establish quality or personal attention. Ask to meet the proposed designer and clarify the project lead’s responsibilities."],
  ["What should I bring to the first consultation?", "Bring a floor plan, possession or move-in target, photographs of the site if available, a list of rooms and a realistic budget range. Add a few reference images and explain what you like about them. Mention appliances or furniture you plan to keep."],
  ["How do I compare two interior design quotes fairly?", "Match unit dimensions, quantities, materials, hardware series and finishes. Then account for taxes, transport, installation and excluded work. Ask each company to explain what can change after site measurement and how revisions will be charged."],
  ["How long does a Bangalore home interior project take?", "The answer depends on design approvals, scope, site access, material availability and execution requirements. Request a schedule separating design, production, civil work, installation and snag correction. Confirm when any advertised delivery period begins."],
  ["Does a longer warranty mean better interiors?", "Not by itself. Compare the covered products, exclusions, maintenance requirements and claims process. Ask who provides the warranty and whether labour, hardware and finishes have different terms. Get the applicable document before booking."],
  ["Can EverySpaces help me review an existing quotation?", "You can bring an existing quotation to an EverySpaces consultation to discuss its scope, materials and design choices. The purpose is to help you understand what you are comparing. A different total is meaningful only when the inclusions and specifications are aligned."],
];
