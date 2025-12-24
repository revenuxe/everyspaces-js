import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, Gift, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const QuotationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
  });

  useEffect(() => {
    // Don't show on admin pages, thank-you page, or if already dismissed in session
    const isAdminPage = location.pathname.startsWith("/admin");
    const isThankYouPage = location.pathname === "/thank-you";
    const alreadyShown = sessionStorage.getItem("quotationPopupShown");

    if (isAdminPage || isThankYouPage || alreadyShown) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("quotationPopupShown", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast.error("Please fill in required fields");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "Quotation Popup",
        source_page: location.pathname,
        data: {
          name: formData.name,
          phone: formData.phone,
          pincode: formData.pincode,
        },
      });

      if (error) throw error;

      setIsOpen(false);
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 gap-0 max-w-[340px] md:max-w-md overflow-hidden rounded-2xl border-0 [&>button]:hidden">
        <DialogTitle className="sr-only">Claim Free Quotation</DialogTitle>
        
        {/* Banner */}
        <div className="relative bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90 p-4 md:p-6 text-center overflow-hidden">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 md:top-3 md:right-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/90 text-foreground flex items-center justify-center shadow-md hover:bg-white transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-3 h-3 md:w-4 md:h-4" />
          </button>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-2 left-4 w-8 h-8 border-2 border-white/30 rounded-full" />
            <div className="absolute bottom-3 right-6 w-12 h-12 border-2 border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/40 rounded-full" />
            <div className="absolute top-3 right-1/4 w-3 h-3 bg-white/30 rounded-full" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
              <Gift className="w-3 h-3" />
              Limited Time Offer
            </div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-1">
              Claim Free Quotation Now!
            </h3>
            <p className="text-white/90 text-xs md:text-sm">
              Get a personalized interior design estimate
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-3 md:space-y-4 bg-background">
          <p className="text-foreground font-semibold text-sm md:text-base text-center">
            Fill details to unlock the offer
          </p>
          
          <Input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="h-10 md:h-12 rounded-lg border-border/60 text-sm"
            required
          />

          <div className="flex gap-2">
            <div className="flex items-center px-3 bg-muted/50 border border-border/60 rounded-lg text-xs md:text-sm text-muted-foreground shrink-0">
              IN +91
            </div>
            <Input
              type="tel"
              placeholder="Enter Mobile No."
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-10 md:h-12 rounded-lg border-border/60 text-sm"
              required
            />
          </div>

          <Input
            type="text"
            placeholder="Enter Pincode"
            value={formData.pincode}
            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
            className="h-10 md:h-12 rounded-lg border-border/60 text-sm"
          />

          <p className="text-[10px] md:text-xs text-muted-foreground text-center">
            By continuing, I agree to Intorza{" "}
            <a href="/terms" className="text-secondary hover:underline">Terms of Use</a>
            {" & "}
            <a href="/privacy" className="text-secondary hover:underline">Privacy Policy</a>
          </p>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-10 md:h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-lg text-sm md:text-base"
          >
            {isLoading ? "Submitting..." : "CONTINUE"}
          </Button>
        </form>

      </DialogContent>
    </Dialog>
  );
};

export default QuotationPopup;
