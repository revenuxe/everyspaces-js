import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  propertyType: z.string().min(1, "Please select a property type"),
  budget: z.string().min(1, "Please select your budget range"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        form_name: "Contact Page Form",
        source_page: "/contact",
        data: data,
      });

      if (error) throw error;

      toast({
        title: "Thank you for contacting us!",
        description: "Our team will get back to you within 24 hours.",
      });
      navigate("/thank-you");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in interior design services from Intorza. Please share more details.";
    window.open(`https://wa.me/919886579923?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | Free Interior Consultation in Bangalore | Intorza</title>
        <meta
          name="description"
          content="Get a free interior design consultation from Intorza Bangalore. Call +91 9886579923 or fill our form. Response within 24 hours guaranteed!"
        />
        <link rel="canonical" href="https://intorza.com/contact" />
      </Helmet>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container px-4 text-center">
            <h1 className="font-display text-3xl md:text-5xl text-primary-foreground mb-4">
              Let's Design Your Dream Home
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto font-body text-lg">
              Get in touch with Bangalore's trusted interior designers. Free consultation, transparent pricing, and premium quality guaranteed.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form - Same style as Hero Section */}
              <div className="glass-card rounded-3xl p-5 md:p-8 shadow-elevated">
                <h2 className="font-display text-lg md:text-xl text-foreground text-center mb-4 tracking-[-0.02em]">
                  Get Your Free Design Consultation
                </h2>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...form.register("name")}
                      className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background focus:shadow-[0_0_0_4px_hsl(16_55%_48%/0.1)] transition-all duration-300 font-body text-sm"
                    />
                    {form.formState.errors.name && (
                      <p className="text-xs text-destructive mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      {...form.register("phone")}
                      className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background focus:shadow-[0_0_0_4px_hsl(16_55%_48%/0.1)] transition-all duration-300 font-body text-sm"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-xs text-destructive mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      {...form.register("email")}
                      className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background focus:shadow-[0_0_0_4px_hsl(16_55%_48%/0.1)] transition-all duration-300 font-body text-sm"
                    />
                    {form.formState.errors.email && (
                      <p className="text-xs text-destructive mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Project Type (e.g., 2BHK, Villa)"
                      {...form.register("propertyType")}
                      className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background focus:shadow-[0_0_0_4px_hsl(16_55%_48%/0.1)] transition-all duration-300 font-body text-sm"
                    />
                    {form.formState.errors.propertyType && (
                      <p className="text-xs text-destructive mt-1">{form.formState.errors.propertyType.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Budget Range (e.g., 10-15 Lakhs)"
                      {...form.register("budget")}
                      className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background focus:shadow-[0_0_0_4px_hsl(16_55%_48%/0.1)] transition-all duration-300 font-body text-sm"
                    />
                    {form.formState.errors.budget && (
                      <p className="text-xs text-destructive mt-1">{form.formState.errors.budget.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="Tell us about your project..."
                      {...form.register("message")}
                      rows={3}
                      className="w-full px-4 py-3.5 bg-background/60 border-2 border-border rounded-2xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary focus:bg-background focus:shadow-[0_0_0_4px_hsl(16_55%_48%/0.1)] transition-all duration-300 font-body text-sm resize-none"
                    />
                    {form.formState.errors.message && (
                      <p className="text-xs text-destructive mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-terracotta py-4 rounded-2xl text-secondary-foreground font-semibold font-body text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Design"}
                  </button>
                </form>

                <p className="text-center text-xs text-muted-foreground mt-4 font-body">
                  🔒 No spam. We respect your privacy.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl text-primary mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Phone / WhatsApp</p>
                        <a href="tel:+919886579923" className="text-muted-foreground hover:text-secondary transition-colors font-body">
                          +91 9886579923
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Email</p>
                        <a href="mailto:intorza.com@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors font-body">
                          intorza.com@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Office Address</p>
                        <p className="text-muted-foreground font-body">
                          HBR Layout, Bangalore 560045<br />
                          Karnataka, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Working Hours</p>
                        <p className="text-muted-foreground font-body">
                          Mon - Sat: 10:00 AM - 7:00 PM<br />
                          Sunday: By Appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 rounded-3xl p-6 border border-[#25D366]/20">
                  <h3 className="font-display text-xl text-primary mb-2">Quick Response via WhatsApp</h3>
                  <p className="text-muted-foreground font-body mb-4">
                    Get instant replies! Chat with our design consultant now.
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-2xl font-semibold transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </button>
                </div>

                {/* Google Map */}
                <div className="rounded-3xl overflow-hidden shadow-soft border border-border/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0847073368395!2d77.61235!3d13.0297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b8f3c40c8d%3A0x9f5c1e4f9d1e4f5c!2sHBR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560045!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Intorza Office Location - HBR Layout, Bangalore"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Contact;
