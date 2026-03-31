import { type ReactNode } from "react";
import { Palette, Sofa, Lightbulb, Layers, Star, IndianRupee, Download, MessageCircleHeart, RotateCcw, ArrowLeft, LayoutGrid, Clock, Compass, Wrench, Zap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import orzaLogo from "@/assets/orza-logo.webp";
import type { Recommendation } from "./types";
import { imgSrc } from "@/lib/utils";
import type { StaticImageData } from "next/image";

// Import space-specific images
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceModularKitchen from "@/assets/service-modular-kitchen.jpg";
import serviceBedroom from "@/assets/service-bedroom.jpg";
import serviceLivingRoom from "@/assets/service-living-room.jpg";
import serviceLiving from "@/assets/service-living.jpg";
import serviceWardrobe from "@/assets/service-wardrobe.jpg";
import serviceTVUnit from "@/assets/service-tv-unit.jpg";
import servicePoojaRoom from "@/assets/service-pooja-room.jpg";
import service2BHK from "@/assets/service-2bhk.jpg";
import serviceVilla from "@/assets/service-villa.jpg";
import heroInterior from "@/assets/hero-interior.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";

const AnimatedCard = ({ children, delay = 0, className }: { children: ReactNode; delay?: number; className: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// Map space types to relevant project images
const SPACE_IMAGES: Record<string, StaticImageData[]> = {
  "Modular Kitchen": [serviceModularKitchen, serviceKitchen, gallery5, gallery12],
  "Kitchen": [serviceModularKitchen, serviceKitchen, gallery5, gallery12],
  "Bedroom": [serviceBedroom, gallery3, gallery9, gallery15],
  "Master Bedroom": [serviceBedroom, gallery3, gallery9, gallery15],
  "Living Room": [serviceLivingRoom, serviceLiving, gallery1, gallery7],
  "Wardrobe": [serviceWardrobe, serviceBedroom, gallery4, gallery14],
  "TV Unit": [serviceTVUnit, serviceLivingRoom, gallery1, gallery11],
  "Pooja Room": [servicePoojaRoom, gallery6, gallery16, gallery20],
  "2BHK": [service2BHK, serviceLivingRoom, serviceModularKitchen, serviceBedroom],
  "3BHK": [service2BHK, serviceLivingRoom, serviceModularKitchen, serviceBedroom],
  "Villa": [serviceVilla, heroInterior, gallery2, gallery8],
  "Full Home Interiors": [heroInterior, serviceLivingRoom, serviceModularKitchen, serviceBedroom],
  "Study Room": [gallery10, gallery13, gallery17, gallery19],
  "Kids Room": [gallery18, gallery11, gallery6, gallery3],
};

const DEFAULT_IMAGES: StaticImageData[] = [heroInterior, serviceLivingRoom, serviceModularKitchen, serviceBedroom];

const getMoodImages = (moodKeywords?: string[]): string[] => {
  if (!moodKeywords?.length) return DEFAULT_IMAGES.map(imgSrc);
  for (const kw of moodKeywords) {
    const upper = kw.charAt(0).toUpperCase() + kw.slice(1);
    if (SPACE_IMAGES[upper]) return SPACE_IMAGES[upper].map(imgSrc);
    for (const [key, imgs] of Object.entries(SPACE_IMAGES)) {
      if (key.toLowerCase().includes(kw.toLowerCase()) || kw.toLowerCase().includes(key.toLowerCase())) {
        return imgs.map(imgSrc);
      }
    }
  }
  return DEFAULT_IMAGES.map(imgSrc);
};

interface RecommendationViewProps {
  recommendation: Recommendation;
  onReset: () => void;
  onDownload: () => void;
  onGetSupport: () => void;
}

const RecommendationView = ({ recommendation: rec, onReset, onDownload, onGetSupport }: RecommendationViewProps) => {
  const moodImages = getMoodImages(rec.moodKeywords);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white backdrop-blur-sm border-b border-border px-4 py-3 flex items-center gap-3">
        <button onClick={onReset} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <img src={imgSrc(orzaLogo)} alt="Orza AI" className="h-7 object-contain" />
        <div className="flex-1" />
        <span className="text-[10px] text-muted-foreground font-medium">Your Design Plan</span>
      </div>

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="px-5 pt-6 pb-4">
        <h2 className="text-xl font-bold text-foreground leading-tight mb-2">{rec.headline}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{rec.intro}</p>
        {rec.moodKeywords && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {rec.moodKeywords.map((kw, i) => (
              <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-medium">{kw}</span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Mood Board */}
      <AnimatedCard delay={0.05} className="mx-4 mb-3 rounded-xl bg-card border border-border overflow-hidden shadow-sm">
        <div className="flex items-center gap-2 px-4 pt-4 pb-2">
          <LayoutGrid className="w-4 h-4 text-secondary" />
          <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Mood Board</h3>
        </div>
        <p className="px-4 text-[11px] text-muted-foreground mb-2">Curated inspirations tailored to your style & space</p>
        <div className="grid grid-cols-2 gap-1 p-2">
          {moodImages.map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={url}
                alt={`Design inspiration ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </AnimatedCard>

      {/* Color Palette */}
      {rec.colorPalette && (
        <AnimatedCard delay={0.12} className="mx-4 mb-3 rounded-xl bg-card border border-border overflow-hidden shadow-sm">
          <div className="flex items-center gap-2 px-4 pt-4 pb-1">
            <Palette className="w-4 h-4 text-secondary" />
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Color Palette</h3>
          </div>
          <p className="px-4 text-[11px] text-muted-foreground mb-2">{rec.colorPalette.description}</p>
          <div className="flex">
            {rec.colorPalette.colors?.map((c, i) => (
              <div key={i} className="flex-1" style={{ backgroundColor: c.hex, height: "56px" }} />
            ))}
          </div>
          <div className="px-4 py-3 grid grid-cols-2 gap-2">
            {rec.colorPalette.colors?.map((c, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-3.5 h-3.5 rounded-full shrink-0 mt-0.5 border border-border" style={{ backgroundColor: c.hex }} />
                <div>
                  <p className="text-[11px] font-semibold text-foreground leading-tight">{c.name}</p>
                  <p className="text-[10px] text-muted-foreground">{c.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>
      )}

      {/* Furniture */}
      {rec.furnitureLayout && (
        <AnimatedCard delay={0.18} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <Sofa className="w-4 h-4 text-secondary" />
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Furniture & Layout</h3>
          </div>
          <p className="text-[11px] text-muted-foreground mb-3">{rec.furnitureLayout.description}</p>
          <div className="space-y-2">
            {rec.furnitureLayout.items?.map((item, i) => (
              <div key={i} className="flex items-start justify-between gap-2 bg-muted/50 rounded-lg px-3 py-2.5">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-foreground">{item.name}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">{item.detail}</p>
                </div>
                <span className="text-[10px] text-secondary font-bold whitespace-nowrap">{item.priceRange}</span>
              </div>
            ))}
          </div>
        </AnimatedCard>
      )}

      {/* Materials */}
      {rec.materials && (
        <AnimatedCard delay={0.24} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <Layers className="w-4 h-4 text-secondary" />
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Materials & Finishes</h3>
          </div>
          <p className="text-[11px] text-muted-foreground mb-3">{rec.materials.description}</p>
          <div className="space-y-2">
            {rec.materials.recommendations?.map((m, i) => (
              <div key={i} className="bg-muted/50 rounded-lg px-3 py-2.5">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-xs font-semibold text-foreground">{m.item}</p>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-semibold">{m.type}</span>
                </div>
                <p className="text-[10px] text-muted-foreground">{m.why}</p>
              </div>
            ))}
          </div>
        </AnimatedCard>
      )}

      {/* Lighting */}
      {rec.lighting && (
        <AnimatedCard delay={0.3} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <Lightbulb className="w-4 h-4 text-secondary" />
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Lighting Design</h3>
          </div>
          <p className="text-[11px] text-muted-foreground mb-3">{rec.lighting.description}</p>
          <div className="space-y-2">
            {rec.lighting.layers?.map((l, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-muted/50 rounded-lg px-3 py-2.5">
                <div className="w-7 h-7 rounded-md bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Lightbulb className="w-3.5 h-3.5 text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-secondary uppercase">{l.type}</p>
                  <p className="text-xs text-foreground font-medium">{l.suggestion}</p>
                  <p className="text-[10px] text-muted-foreground">{l.placement}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>
      )}

      {/* Designer Secret */}
      {rec.designerSecret && (
        <AnimatedCard delay={0.36} className="mx-4 mb-3 rounded-xl bg-secondary/5 border border-secondary/20 p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <Star className="w-4 h-4 text-secondary" />
            <h3 className="text-xs font-bold text-secondary uppercase tracking-wider">Designer Secret</h3>
          </div>
          <p className="text-xs text-foreground/80 leading-relaxed italic">"{rec.designerSecret}"</p>
        </AnimatedCard>
      )}

      {/* Vastu Tips */}
      {rec.vastuTips && rec.vastuTips.tips?.length > 0 && (
        <AnimatedCard delay={0.38} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <Compass className="w-4 h-4 text-secondary" />
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Vastu Guidelines</h3>
          </div>
          <p className="text-[11px] text-muted-foreground mb-3">{rec.vastuTips.description}</p>
          <div className="space-y-2">
            {rec.vastuTips.tips.map((tip, i) => (
              <div key={i} className="bg-muted/50 rounded-lg px-3 py-2.5">
                <p className="text-xs font-semibold text-foreground">{tip.aspect}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{tip.recommendation}</p>
                <p className="text-[10px] text-secondary mt-1 italic">Modern take: {tip.modern_adaptation}</p>
              </div>
            ))}
          </div>
        </AnimatedCard>
      )}

      {/* Pro Tips */}
      {rec.proTips && rec.proTips.length > 0 && (
        <AnimatedCard delay={0.4} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-secondary" />
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Expert Pro Tips</h3>
          </div>
          <div className="space-y-2 mt-2">
            {rec.proTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[10px] font-bold text-secondary bg-secondary/10 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-[11px] text-foreground/80 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </AnimatedCard>
      )}

      {/* Maintenance Guide */}
      {rec.maintenanceGuide && rec.maintenanceGuide.tasks?.length > 0 && (
        <AnimatedCard delay={0.42} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <Wrench className="w-4 h-4 text-secondary" />
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Maintenance Guide</h3>
          </div>
          <p className="text-[11px] text-muted-foreground mb-3">{rec.maintenanceGuide.description}</p>
          <div className="space-y-2">
            {rec.maintenanceGuide.tasks.map((task, i) => (
              <div key={i} className="flex items-start justify-between gap-2 bg-muted/50 rounded-lg px-3 py-2.5">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-semibold text-foreground">{task.item}</p>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-semibold">{task.frequency}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{task.method}</p>
                </div>
                <span className="text-[10px] text-secondary font-bold whitespace-nowrap">{task.cost}</span>
              </div>
            ))}
          </div>
        </AnimatedCard>
      )}

      {/* Budget */}
      {rec.estimatedBudget && (
        <AnimatedCard delay={0.46} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <IndianRupee className="w-4 h-4 text-secondary" />
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Estimated Budget</h3>
          </div>
          <div className="bg-muted/50 rounded-lg px-3 py-3">
            <p className="text-base font-bold text-foreground">{rec.estimatedBudget.low} â€” {rec.estimatedBudget.high}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{rec.estimatedBudget.note}</p>
          </div>
        </AnimatedCard>
      )}

      {/* Timeline */}
      {rec.estimatedTimeline && (
        <AnimatedCard delay={0.5} className="mx-4 mb-3 rounded-xl bg-secondary/5 border border-secondary/20 overflow-hidden shadow-sm">
          <div className="flex items-center gap-2 px-4 pt-4 pb-1">
            <Clock className="w-4 h-4 text-secondary" />
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Estimated Completion Time</h3>
          </div>
          <div className="px-4 pb-4">
            <div className="bg-white rounded-lg px-4 py-4 mt-2 border border-secondary/10">
              <p className="text-2xl font-bold text-secondary leading-tight">{rec.estimatedTimeline.days}</p>
              <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">{rec.estimatedTimeline.breakdown}</p>
              <div className="mt-3 flex gap-1">
                {rec.estimatedTimeline.breakdown.split("|").map((phase, i) => (
                  <div key={i} className="flex-1 bg-secondary/10 rounded-md px-2 py-1.5 text-center">
                    <p className="text-[9px] font-bold text-secondary">{phase.trim().split(":")[0]}</p>
                    <p className="text-[10px] text-foreground font-medium">{phase.trim().split(":")[1]}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground mt-2 italic">{rec.estimatedTimeline.note}</p>
            </div>
          </div>
        </AnimatedCard>
      )}

      {/* Hyderabad Specific */}
      {rec.bangaloreSpecific && (
        <AnimatedCard delay={0.54} className="mx-4 mb-4 rounded-xl bg-primary/5 border border-primary/20 p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <MapPin className="w-4 h-4 text-primary" />
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Hyderabad Context</h3>
          </div>
          <p className="text-[11px] text-foreground/70 leading-relaxed">{rec.bangaloreSpecific}</p>
        </AnimatedCard>
      )}

      {/* CTAs */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.48 }} className="mx-4 mt-4 space-y-2.5 pb-6">
        <button
          onClick={onDownload}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm shadow-md shadow-secondary/20 hover:bg-secondary/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Design Report
        </button>
        <button
          onClick={onGetSupport}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm border border-primary-foreground/10 hover:bg-primary/90 transition-colors"
        >
          <MessageCircleHeart className="w-4 h-4" />
          Talk to a Designer â€” It's Free
        </button>
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-muted-foreground text-xs font-medium hover:text-foreground transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Design Another Space
        </button>
      </motion.div>
    </div>
  );
};

export default RecommendationView;

