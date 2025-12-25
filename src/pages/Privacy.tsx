import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { StructuredData, createBreadcrumbSchema } from "@/components/StructuredData";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Data Protection & Security | Intorza Bangalore</title>
        <meta
          name="description"
          content="Learn how Intorza protects your personal information. Read our privacy policy covering data collection, usage, security measures & your rights."
        />
        <link rel="canonical" href="https://intorza.com/privacy" />
      </Helmet>
      <StructuredData data={[createBreadcrumbSchema([
        { name: "Home", url: "https://intorza.com" },
        { name: "Privacy Policy", url: "https://intorza.com/privacy" }
      ]), {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "description": "Intorza's privacy policy covering data collection, usage, and security",
        "url": "https://intorza.com/privacy"
      }]} />
      <Header />

      <main className="pt-20">
        <header className="bg-primary py-12 md:py-16">
          <div className="container px-4">
            <p className="text-primary-foreground/80 font-body text-sm">Legal</p>
            <h1 className="font-display text-3xl md:text-5xl text-primary-foreground mt-2">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/80 font-body mt-3 max-w-2xl">
              This policy explains how Intorza collects, uses, shares, and protects
              your information.
            </p>
          </div>
        </header>

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <article className="max-w-4xl">
              <p className="text-muted-foreground font-body text-sm">
                <strong>Last updated:</strong> 23 Dec 2025
              </p>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">1. Who we are</h2>
                <p className="text-foreground font-body">
                  Intorza Interior Design ("Intorza", "we", "our", "us") operates
                  intorza.com and provides interior design services in Bengaluru.
                </p>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">2. Information we collect</h2>
                <ul className="list-disc pl-5 space-y-2 text-foreground font-body">
                  <li>
                    <strong>Contact details</strong>: name, phone number, email, and
                    any message you submit.
                  </li>
                  <li>
                    <strong>Project details</strong>: project type, budget range,
                    preferences, and related information you share.
                  </li>
                  <li>
                    <strong>Usage data</strong>: basic analytics such as pages visited,
                    device/browser info, and approximate location.
                  </li>
                </ul>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">3. How we use your information</h2>
                <ul className="list-disc pl-5 space-y-2 text-foreground font-body">
                  <li>To respond to enquiries and provide consultations.</li>
                  <li>To prepare quotations, proposals, and project communication.</li>
                  <li>To improve our website, services, and customer experience.</li>
                  <li>
                    To send service-related updates. Any marketing communication (if
                    used) will be limited and you may opt out.
                  </li>
                </ul>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">4. Sharing of information</h2>
                <p className="text-foreground font-body">
                  We do not sell your personal data. We may share information with
                  service providers that help operate the website and manage leads,
                  and with contractors/vendors involved in your project when needed.
                  We may disclose information if required by law.
                </p>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">5. Data retention</h2>
                <p className="text-foreground font-body">
                  We retain enquiry and project information for as long as necessary
                  for operations, legal compliance, and dispute resolution.
                </p>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">6. Security</h2>
                <p className="text-foreground font-body">
                  We use reasonable administrative, technical, and organizational
                  measures to protect your information. No online system is 100%
                  secure.
                </p>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">7. Cookies</h2>
                <p className="text-foreground font-body">
                  Our site may use cookies or similar technologies for essential
                  functionality and analytics. You can control cookies via your
                  browser settings.
                </p>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">8. Your choices</h2>
                <ul className="list-disc pl-5 space-y-2 text-foreground font-body">
                  <li>
                    You can request access, correction, or deletion of your personal
                    information (subject to legal requirements).
                  </li>
                  <li>
                    You can opt out of non-essential communication by contacting us.
                  </li>
                </ul>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">9. Contact</h2>
                <p className="text-foreground font-body">
                  For privacy questions or requests, contact{" "}
                  <a
                    href="mailto:intorza.com@gmail.com"
                    className="text-secondary hover:underline"
                  >
                    intorza.com@gmail.com
                  </a>
                  {" "}or visit our{" "}
                  <Link to="/contact" className="text-secondary hover:underline">
                    Contact
                  </Link>
                  {" "}page.
                </p>
                <p className="text-foreground font-body">
                  Please also review our{" "}
                  <Link to="/terms" className="text-secondary hover:underline">
                    Terms &amp; Conditions
                  </Link>
                  .
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Privacy;
