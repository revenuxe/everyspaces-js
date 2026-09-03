"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import interiorImage from "@/assets/hero-interior.jpg";

interface QuotationPopupProps {
  externalOpen?: boolean;
  onExternalOpenChange?: (open: boolean) => void;
}

const QuotationPopup = ({ externalOpen, onExternalOpenChange }: QuotationPopupProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", phone: "", locality: "", projectType: "", projectDetails: "" });

  const isOpen = externalOpen !== undefined ? externalOpen : internalOpen;
  const setIsOpen = onExternalOpenChange || setInternalOpen;

  useEffect(() => {
    if (externalOpen !== undefined) return;
    const path = pathname ?? "";
    const alreadyShown = sessionStorage.getItem("quotationPopupShown");
    if (path.startsWith("/admin") || path === "/thank-you" || alreadyShown) return;

    const timer = setTimeout(() => {
      setInternalOpen(true);
      sessionStorage.setItem("quotationPopupShown", "true");
    }, 5000);
    return () => clearTimeout(timer);
  }, [pathname, externalOpen]);

  useEffect(() => {
    if (externalOpen !== undefined) return;

    const openConsultation = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement).closest<HTMLElement>("[data-open-consultation]");
      if (!trigger) return;
      event.preventDefault();
      setInternalOpen(true);
    };

    document.addEventListener("click", openConsultation);
    return () => document.removeEventListener("click", openConsultation);
  }, [externalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await (supabase.from("leads") as any).insert({
        form_name: externalOpen !== undefined ? "Mobile Contact Popup" : "Design Consultation Popup",
        source_page: pathname ?? "",
        data: formData,
      });
      if (error) throw error;

      setIsOpen(false);
      setFormData({ name: "", phone: "", locality: "", projectType: "", projectDetails: "" });
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fieldClassName = "h-10 rounded-2xl border-[#d4d4d4] bg-[#fafafa] px-4 text-sm text-[#292929] placeholder:text-[#9b9b9b] focus-visible:ring-1 focus-visible:ring-[#292929] sm:h-11";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-h-[calc(100svh-2rem)] w-[calc(100%-2.5rem)] max-w-[440px] gap-0 overflow-y-auto rounded-[26px] border-0 bg-white p-0 shadow-2xl [&>button]:hidden">
        <DialogTitle className="sr-only">Get your free design consultation</DialogTitle>

        <div className="relative -mb-px h-[132px] shrink-0 overflow-hidden rounded-t-[26px] bg-[#27201c] sm:h-[156px]">
          <img src={interiorImage.src} alt="Premium interior living room" className="h-full w-full object-cover object-center brightness-[0.62]" />
          <div className="absolute inset-x-0 bottom-0 h-[82px] bg-gradient-to-b from-transparent via-white/55 to-white sm:h-[96px]" />
          <button type="button" onClick={() => setIsOpen(false)} className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#222] shadow-lg transition-transform hover:scale-105" aria-label="Close">
            <X className="h-5 w-5 stroke-[2.2]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 -mt-2 space-y-2 bg-white px-4 pb-4 pt-0 sm:-mt-3 sm:space-y-2.5 sm:px-6 sm:pb-5">
          <div className="relative text-center">
            <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.34em] text-[#252525] sm:mb-1.5 sm:text-[10px]">Limited Offer</p>
            <h3 className="font-serif text-[18px] font-normal leading-tight text-[#2a2a2a] sm:text-[22px]">Get Your Free Design Consultation</h3>
            <p className="mt-1 text-[11px] text-[#6f6f6f] sm:mt-1.5 sm:text-xs">Book today &amp; get a complimentary 3D render</p>
          </div>

          <Input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={fieldClassName} required />
          <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={fieldClassName} required />
          <Input type="text" placeholder="Area / locality" value={formData.locality} onChange={(e) => setFormData({ ...formData, locality: e.target.value })} className={fieldClassName} />
          <Input type="text" placeholder="Project Type (e.g., 2 BHK, Villa, Duplex)" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className={fieldClassName} />
          <textarea placeholder="Tell us about your project..." value={formData.projectDetails} onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })} className="min-h-[50px] w-full resize-none rounded-2xl border border-[#d4d4d4] bg-[#fafafa] px-4 py-2.5 text-sm text-[#292929] placeholder:text-[#9b9b9b] outline-none transition-colors focus:border-[#292929] sm:min-h-[58px] sm:py-3" />
          <Button type="submit" disabled={isLoading} className="h-10 w-full rounded-full bg-[#191919] text-sm font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.15)] hover:bg-black sm:h-11">
            {isLoading ? "Submitting..." : "Book Free Consultation"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuotationPopup;
