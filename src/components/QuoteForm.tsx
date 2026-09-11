"use client";
import { trackAdsAction } from "@/lib/google-ads";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
// Shared homepage form: preserve the existing lead payload and thank-you flow.
export default function QuoteForm({ sourcePage, formName, submitLabel = "Get a Quote" }: { sourcePage: string; formName: string; submitLabel?: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", projectType: "" });

  const update = (key: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        form_name: formName,
        source_page: sourcePage,
        data: formData,
      });
      if (error) throw error;
      trackAdsAction("lead", formName);
      window.dispatchEvent(new CustomEvent("everyspaces:lead-submitted", { detail: { formName, sourcePage } }));
      router.push("/thank-you");
    } catch (error) {
      console.error("Hero quote form error:", error);
      toast({ title: "Unable to submit", description: "Please try again or contact us on WhatsApp.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

return (          <form onSubmit={submit} className="grid grid-cols-2 gap-3">
            <input required value={formData.name} onChange={(event) => update("name", event.target.value)} aria-label="Your name" placeholder="Your name" className="premium-input" />
            <input required type="tel" pattern="[0-9]{10}" value={formData.mobile} onChange={(event) => update("mobile", event.target.value)} aria-label="Mobile number" placeholder="Mobile number" className="premium-input" />
            <input required type="email" value={formData.email} onChange={(event) => update("email", event.target.value)} aria-label="Email address" placeholder="Email address" className="premium-input" />
            <input required value={formData.projectType} onChange={(event) => update("projectType", event.target.value)} aria-label="Project type" placeholder="Project type" className="premium-input" />
            <button type="submit" disabled={isSubmitting} className="btn-terracotta col-span-2 w-full rounded-xl py-3.5 font-semibold text-secondary-foreground disabled:opacity-50">
              {isSubmitting ? "Submitting..." : submitLabel}
            </button>
          </form>);
}
