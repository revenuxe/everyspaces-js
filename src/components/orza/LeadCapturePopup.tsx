import { useState } from "react";
import { X, Phone, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { generateReportPDF } from "./generateReport";
import type { Recommendation } from "./types";

interface LeadCapturePopupProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  location: string;
  recommendation: Recommendation;
  answers: Record<string, string>;
}

const LeadCapturePopup = ({ isOpen, onClose, userName, location, recommendation, answers }: LeadCapturePopupProps) => {
  const [name, setName] = useState(userName);
  const [city, setCity] = useState(location);
  const [mobile, setMobile] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!mobile.trim() || mobile.trim().length < 10) {
      toast.error("Please enter a valid mobile number");
      return;
    }

    setIsSubmitting(true);
    try {
      // Generate PDF
      const doc = generateReportPDF(recommendation, name, city);
      const pdfBlob = doc.output("blob");
      const fileName = `report-${name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}.pdf`;

      // Upload to Supabase storage
      const { error: uploadError } = await supabase.storage
        .from("design-reports")
        .upload(fileName, pdfBlob, { contentType: "application/pdf" });

      if (uploadError) {
        console.error("Upload error:", uploadError);
      }

      const { data: publicUrl } = supabase.storage
        .from("design-reports")
        .getPublicUrl(fileName);

      // Save lead to Supabase
      const { error: leadError } = await supabase.from("leads").insert({
        form_name: "orza_ai_report",
        source_page: "/orza-ai",
        data: {
          name,
          location: city,
          mobile,
          space: answers.space || "",
          style: answers.vibe || "",
          budget: answers.budget || "",
          requirements: answers.details || "",
          report_url: publicUrl?.publicUrl || "",
          headline: recommendation.headline,
          budget_range: `${recommendation.estimatedBudget?.low} — ${recommendation.estimatedBudget?.high}`,
        },
      });

      if (leadError) throw leadError;

      // Auto download for user
      doc.save(`Intorza-Design-Report-${name}.pdf`);

      toast.success("Report downloaded! Our team will reach out soon 🎉");
      onClose();
    } catch (err: any) {
      console.error("Lead capture error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-md"
          >
            <div className="bg-card rounded-t-3xl border border-border shadow-2xl p-6 pb-8">
              {/* Close button */}
              <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              {/* Header */}
              <div className="text-center mb-5">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <Download className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Get Your Design Report</h3>
                <p className="text-xs text-muted-foreground mt-1">Enter your number and we'll send the full report</p>
              </div>

              {/* Form */}
              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-1 block">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl border border-border bg-muted/50 text-foreground text-sm focus:outline-none focus:border-secondary/50"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-1 block">Location</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl border border-border bg-muted/50 text-foreground text-sm focus:outline-none focus:border-secondary/50"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-1 block">Mobile Number *</label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter your 10-digit number"
                    className="w-full py-2.5 px-3 rounded-xl border border-border bg-muted/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary/50"
                    maxLength={10}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !mobile.trim()}
                className="w-full mt-5 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors disabled:opacity-50 shadow-md shadow-secondary/20"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Phone className="w-4 h-4" />
                    Share & Download Report
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadCapturePopup;
