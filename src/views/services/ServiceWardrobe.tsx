"use client";

import { ArrowRight, DoorOpen, Layers, Shirt } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import RelatedLocalities from "@/components/RelatedLocalities";
import { StructuredData, createServiceSchema, createBreadcrumbSchema, createFAQSchema } from "@/components/StructuredData";
import { imgSrc } from "@/lib/utils";
import wardrobeImage from "@/assets/service-wardrobe.jpg";

const styles = [
  { icon: Layers, title: "Sliding door wardrobes", label: "For compact bedrooms", text: "Doors move along a track, keeping the space beside your bed clear. Plan the internal bays around the door overlap so everyday storage stays easy to reach.", detail: "Plan for track quality, shutter weight and access to each bay." },
  { icon: DoorOpen, title: "Hinged door wardrobes", label: "For easy everyday access", text: "Open doors give you a clear view of the storage inside. A useful choice when your bedroom has enough clearance for the doors to swing comfortably.", detail: "Check clearance beside the bed and the hinge specification." },
  { icon: Shirt, title: "Walk-in wardrobes", label: "For a dedicated dressing area", text: "Bring hanging rails, shelves and drawers together in a separate dressing space. Leave a comfortable passage and keep frequently used items within reach.", detail: "Consider circulation, ventilation and dressing lighting." },
];

const layoutOptions = [
  ["Loft storage", "Use the space above the main wardrobe for suitcases, spare bedding and occasional storage. Check ceiling obstructions and plan safe access."],
  ["Corner layouts", "Connect storage along adjoining walls when the room allows it. Review how corner shelves and doors open so the extra space remains usable."],
  ["Wall-to-wall fitted storage", "Plan around your room dimensions, beams and skirting. Coordinated filler panels help the wardrobe sit neatly within the room."],
];

const storage = [
  ["Hanging space that fits", "Separate long garments from shirts and jackets. Set rail positions around the clothes you own and your comfortable reach."],
  ["Shelves for daily essentials", "Plan shelf spacing for folded clothes and bags. Keep frequently used items accessible instead of filling every bay with deep shelves."],
  ["Drawers & organisers", "Create dedicated places for smaller items, accessories and jewellery. Choose pull-outs where they solve a specific storage need."],
  ["Shoes & occasional storage", "Allow a separate place for footwear and reserve higher shelves or lofts for seasonal items and luggage."],
];

const materials = [
  ["Carcass & shelves", "Compare the specified board or plywood grade, thickness, shelf spans and edge sealing. Discuss site moisture conditions before choosing the material."],
  ["Shutter finishes", "Explore laminate for straightforward upkeep, veneer for natural variation, painted surfaces for coordinated colour, or glass and mirrors for selected panels."],
  ["Hardware & accessories", "Match hinges, sliding tracks and drawer runners to the shutter size and load. Confirm the hardware specification and maintenance requirements in writing."],
];

const process = [
  ["Share your brief", "Bring your floor plan, room photos, budget and a list of what you need to store."],
  ["Plan the layout", "Review measurements, door clearance, hanging space, drawers and loft access."],
  ["Approve the details", "Agree on finish samples, material and hardware specifications, scope and schedule."],
  ["Install & review", "Check shutter alignment, drawer movement, the finish and agreed handover details."],
];

const wardrobeFAQs = [
  { question: "How much does a custom wardrobe cost in Bangalore?", answer: "The cost depends on dimensions, carcass material, shutter finish, door mechanism and internal accessories. Lofts, mirrors and lighting also affect the total. Share your room measurements and storage requirements with EverySpaces for a quote with materials, hardware and installation scope listed clearly." },
  { question: "Should I choose sliding or hinged wardrobe doors?", answer: "Sliding doors suit bedrooms where door swing would obstruct the bed or a passage. Hinged doors offer wider access to the interior but need clear space in front. Choose after checking your room layout, storage bay widths and daily routine." },
  { question: "Can a wardrobe include a loft and dressing mirror?", answer: "Yes. A loft can provide occasional storage above the main unit, while a mirror can be integrated into a shutter or a separate dressing area. The design should account for ceiling height, safe loft access, shutter weight and nearby electrical points." },
  { question: "Which wardrobe materials and finishes should I compare?", answer: "Compare the specified board or plywood grade, edge sealing, shutter finish and hardware together. Laminate, veneer, painted and glass finishes differ in appearance, maintenance and price. Ask for material samples and written specifications before approving the design." },
  { question: "How do I plan the inside of my wardrobe?", answer: "Start with the clothes and accessories you own. Allow hanging space for long and short garments, shelves for folded clothes, drawers for smaller items and a separate place for shoes. Keep daily essentials at a comfortable height and reserve lofts for occasional storage." },
  { question: "How long does wardrobe design and installation take?", answer: "The schedule depends on design approvals, material availability, manufacturing scope and site readiness. Ask for a schedule that separates measurement, design approval, production and installation. Confirm the handover date after the specifications and site requirements are agreed." },
  { question: "What should I bring to a wardrobe design consultation?", answer: "Bring a bedroom floor plan or approximate measurements, room photos, design references and your budget range. Note the items you need to store, your preferred door style and whether you need a loft, mirror or dressing unit." },
];

const pageUrl = "https://www.everyspaces.com/services/wardrobe-design";

export default function ServiceWardrobe() {
  const schemas = [
    createServiceSchema("Custom Wardrobe Design in Bangalore", "Custom sliding, hinged and walk-in wardrobe design in Bangalore with planned internal storage, loft options and coordinated finishes.", pageUrl, wardrobeImage, undefined, { areaServed: ["Bangalore"], features: ["Sliding wardrobes", "Hinged wardrobes", "Walk-in wardrobes", "Loft storage"] }),
    createBreadcrumbSchema([{ name: "Home", url: "https://www.everyspaces.com" }, { name: "Services", url: "https://www.everyspaces.com/services" }, { name: "Wardrobe Design", url: pageUrl }]),
    createFAQSchema(wardrobeFAQs, "services/wardrobe-design"),
  ];

  return <div className="min-h-screen bg-background">
    <StructuredData data={schemas} />
    <Header />
    <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Wardrobe Design" }]} />
    <main className="pb-24">
      <ServiceHero title="Custom Wardrobe Design in Bangalore" description="A place for everything, designed around your room. Explore sliding, hinged and walk-in wardrobes with thoughtful internal storage, coordinated finishes and loft options." image={wardrobeImage} formName="Wardrobe Design Page Form" />

      <section id="wardrobe-styles" aria-labelledby="wardrobe-styles-heading" className="py-14 md:py-20">
        <div className="container px-4">
          <div className="max-w-2xl mb-10"><span className="text-secondary text-sm font-medium uppercase tracking-widest">Find your fit</span><h2 id="wardrobe-styles-heading" className="font-display text-3xl md:text-4xl text-primary mt-3 mb-4">The right wardrobe starts with your room.</h2><p className="text-muted-foreground leading-relaxed">Door clearance, daily routines and the clothes you own matter as much as the finish. Compare these three wardrobe styles, then tailor the storage to your bedroom.</p></div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">{styles.map((item, index) => <article key={item.title} className="flex flex-col rounded-2xl border border-border bg-card p-6 md:p-8"><div className="flex items-center justify-between mb-8"><item.icon aria-hidden="true" className="w-8 h-8 text-secondary" /><span className="text-sm text-muted-foreground">0{index + 1}</span></div><p className="text-sm text-secondary mb-2">{item.label}</p><h3 className="font-display text-2xl text-primary mb-4">{item.title}</h3><p className="text-muted-foreground leading-relaxed mb-6">{item.text}</p><p className="mt-auto border-t border-border pt-4 text-sm text-primary leading-relaxed">{item.detail}</p></article>)}</div>
          <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center rounded-2xl bg-muted/30 overflow-hidden"><img src={imgSrc(wardrobeImage)} alt="Bedroom wardrobe with geometric shutter detailing" width={960} height={720} loading="lazy" className="w-full aspect-[4/3] object-cover" /><div className="p-6 lg:p-10 lg:pl-0"><h3 className="font-display text-2xl text-primary mb-3">Make more of the space you have.</h3><p className="text-muted-foreground mb-6">Lofts, corner units and fitted storage can complement your chosen door style. Plan these layout options around your room.</p><div className="space-y-5">{layoutOptions.map(([title, text]) => <div key={title}><h4 className="font-medium text-primary mb-1">{title}</h4><p className="text-sm text-muted-foreground leading-relaxed">{text}</p></div>)}</div><a href="/contact" className="inline-flex items-center gap-2 text-secondary font-medium mt-7 hover:underline">Plan my wardrobe <ArrowRight aria-hidden="true" className="w-4 h-4" /></a></div></div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-muted/30" aria-labelledby="wardrobe-storage-heading"><div className="container px-4"><h2 id="wardrobe-storage-heading" className="font-display text-3xl text-primary mb-4">Storage that works from the inside out.</h2><p className="text-muted-foreground max-w-2xl mb-10">Start with an inventory of your belongings. A useful internal layout balances hanging space, shelving and drawers instead of adding accessories you will rarely use.</p><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{storage.map(([title, text]) => <article key={title} className="bg-card border border-border rounded-2xl p-6"><h3 className="font-display text-xl text-primary mb-3">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{text}</p></article>)}</div></div></section>

      <section className="py-14 md:py-20" aria-labelledby="wardrobe-materials-heading"><div className="container px-4 grid lg:grid-cols-2 gap-10 lg:gap-16"><div><span className="text-secondary text-sm font-medium uppercase tracking-widest">Materials & finishes</span><h2 id="wardrobe-materials-heading" className="font-display text-3xl text-primary mt-3 mb-4">Look beyond the shutter.</h2><p className="text-muted-foreground leading-relaxed mb-6">A wardrobe needs a considered combination of structure, surface and fittings. Compare samples in your bedroom lighting and confirm the specifications in your quotation.</p><a href="/services/bedroom-design" className="inline-flex items-center gap-2 text-secondary hover:underline">Explore bedroom interiors <ArrowRight className="w-4 h-4" aria-hidden="true" /></a></div><div className="space-y-6">{materials.map(([title, text]) => <div key={title} className="border-b border-border pb-6"><h3 className="text-lg font-display text-primary mb-2">{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></div>)}</div></div></section>

      <section className="py-14 md:py-20 bg-primary text-primary-foreground" aria-labelledby="wardrobe-budget-heading"><div className="container px-4 grid lg:grid-cols-2 gap-10"><div><span className="text-sm uppercase tracking-widest text-primary-foreground/70">Plan your investment</span><h2 id="wardrobe-budget-heading" className="font-display text-3xl md:text-4xl mt-3 mb-4">What affects wardrobe cost in Bangalore?</h2><p className="text-primary-foreground/80 leading-relaxed">Two wardrobes of the same size can have different prices. The material, shutter mechanism, finish and number of accessories all influence the final quote.</p></div><div><ul className="list-disc pl-5 space-y-3 text-primary-foreground/90">{["Overall width, height and depth, including any loft", "Carcass material and shutter finish", "Door mechanism and hardware specification", "Drawers, pull-outs, mirrors and lighting", "Delivery, installation, site preparation and applicable taxes"].map(item => <li key={item}>{item}</li>)}</ul><p className="text-sm text-primary-foreground/70 mt-6 mb-5">Ask whether pricing is for the complete unit or a stated area basis. Compare the same scope across proposals and confirm warranty coverage and exclusions in writing.</p><a href="/contact" className="inline-flex items-center gap-2 bg-background text-primary px-6 py-3 rounded-full font-medium hover:underline">Request a tailored quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></a></div></div></section>

      <section className="py-14 md:py-20" aria-labelledby="wardrobe-process-heading"><div className="container px-4"><h2 id="wardrobe-process-heading" className="font-display text-3xl text-primary mb-4">From room measurements to a considered fit.</h2><p className="text-muted-foreground max-w-2xl mb-10">Use these milestones to understand the decisions involved in your custom wardrobe project.</p><ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{process.map(([title, text], index) => <li key={title} className="border-t border-border pt-5"><span className="text-secondary text-sm">0{index + 1}</span><h3 className="font-display text-xl text-primary mt-3 mb-2">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{text}</p></li>)}</ol></div></section>

      <FAQSection faqs={wardrobeFAQs} />
      <RelatedServices currentSlug="wardrobe-design" />
      <RelatedLocalities currentSlug="wardrobe-design" />
      <section className="py-14 md:py-20 bg-muted/30"><div className="container px-4 text-center"><h2 className="font-display text-3xl text-primary mb-4">Let’s make room for your everyday.</h2><p className="text-muted-foreground max-w-xl mx-auto mb-7">Share your bedroom plan, storage wishlist and budget. Start with a free wardrobe design consultation with EverySpaces.</p><a href="/contact" className="inline-flex items-center gap-2 btn-terracotta px-8 py-4 rounded-2xl text-secondary-foreground font-semibold">Book Free Consultation <ArrowRight aria-hidden="true" className="w-5 h-5" /></a></div></section>
    </main>
    <Footer /><BottomNav />
  </div>;
}
