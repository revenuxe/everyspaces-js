import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Thank You | Request Submitted Successfully | Intorza</title>
        <meta
          name="description"
          content="Thank you for contacting Intorza! Our interior design experts will reach out within 24 hours to discuss your dream home project."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-elevated">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-secondary" />
            </div>
            
            <h1 className="font-display text-2xl md:text-3xl text-foreground mb-4 tracking-[-0.02em]">
              Request Submitted
            </h1>
            
            <p className="font-body text-muted-foreground mb-8">
              Thank you for reaching out! Our design experts will contact you within 24 hours to discuss your dream space.
            </p>
            
            <Link to="/">
              <Button className="btn-terracotta w-full py-4 rounded-2xl text-secondary-foreground font-semibold font-body text-base">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
