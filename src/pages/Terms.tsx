import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms & Conditions | Interior Design Services | Intorza Bangalore</title>
        <meta
          name="description"
          content="Read Intorza's terms and conditions for interior design services in Bangalore. Understand our policies on quotes, payments, warranties & more."
        />
        <link rel="canonical" href="https://intorza.com/terms" />
      </Helmet>
      <Header />

      <main className="pt-20">
        <header className="bg-primary py-12 md:py-16">
          <div className="container px-4">
            <p className="text-primary-foreground/80 font-body text-sm">Legal</p>
            <h1 className="font-display text-3xl md:text-5xl text-primary-foreground mt-2">
              Terms &amp; Conditions
            </h1>
            <p className="text-primary-foreground/80 font-body mt-3 max-w-2xl">
              These Terms govern your use of Intorza’s website and our interior design
              services.
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
                <h2 className="font-display text-2xl text-primary">1. About Intorza</h2>
                <p className="text-foreground font-body">
                  Intorza Interior Design ("Intorza", "we", "our", "us") provides
                  interior design consultation, planning, and execution services in
                  Bengaluru and surrounding areas.
                </p>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">2. Use of website</h2>
                <ul className="list-disc pl-5 space-y-2 text-foreground font-body">
                  <li>
                    You may browse our website for personal and lawful business enquiry
                    purposes.
                  </li>
                  <li>
                    You agree not to misuse the site, attempt to disrupt it, or access
                    it using automated scraping without permission.
                  </li>
                  <li>
                    Content on this website is provided for general information and may
                    change without notice.
                  </li>
                </ul>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">3. Enquiries, quotes &amp; scope</h2>
                <ul className="list-disc pl-5 space-y-2 text-foreground font-body">
                  <li>
                    Any enquiry submitted through our forms/WhatsApp/calls is a request
                    for information and does not create a contract.
                  </li>
                  <li>
                    Estimates and indicative pricing are non-binding until confirmed in
                    a written quotation and/or work order.
                  </li>
                  <li>
                    The final scope (designs, materials, brands, finishes, quantities,
                    timelines) will be as per the signed proposal/work order.
                  </li>
                </ul>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">4. Payments</h2>
                <ul className="list-disc pl-5 space-y-2 text-foreground font-body">
                  <li>
                    Payment schedules and milestones will be defined in the
                    quotation/work order.
                  </li>
                  <li>
                    Delayed payments may pause work and/or delay timelines as stated
                    in the work order.
                  </li>
                </ul>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">5. Design deliverables &amp; IP</h2>
                <ul className="list-disc pl-5 space-y-2 text-foreground font-body">
                  <li>
                    Drawings, renders, layouts, BOQs, and design documents are our
                    intellectual property unless agreed otherwise in writing.
                  </li>
                  <li>
                    You may use deliverables only for the specific project and location
                    covered by our agreement.
                  </li>
                  <li>
                    Reproduction, resale, or use for another site/vendor without written
                    permission is not allowed.
                  </li>
                </ul>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">6. Site conditions &amp; access</h2>
                <ul className="list-disc pl-5 space-y-2 text-foreground font-body">
                  <li>
                    You are responsible for providing safe access to the site and any
                    required society/building approvals.
                  </li>
                  <li>
                    We are not responsible for delays caused by restricted access,
                    third-party approvals, or events beyond our control.
                  </li>
                </ul>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">7. Materials &amp; availability</h2>
                <p className="text-foreground font-body">
                  Material availability and batch variations may occur. If a specified
                  item becomes unavailable, we may propose a comparable alternative
                  with your approval.
                </p>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">8. Timelines</h2>
                <p className="text-foreground font-body">
                  Timelines are estimates and depend on site readiness, approvals,
                  payment milestones, and material availability.
                </p>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">9. Warranty &amp; after-sales</h2>
                <ul className="list-disc pl-5 space-y-2 text-foreground font-body">
                  <li>Warranty terms (if any) will be specified in your work order.</li>
                  <li>
                    Third-party products may carry manufacturer warranty and processes.
                  </li>
                  <li>
                    Normal wear and tear, misuse, seepage, pest damage, electrical
                    fluctuations, and third-party modifications are typically excluded.
                  </li>
                </ul>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">10. Portfolio use</h2>
                <p className="text-foreground font-body">
                  We may request permission to photograph completed work for portfolio
                  and marketing. If you do not want this, please inform us in writing.
                </p>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">11. Limitation of liability</h2>
                <p className="text-foreground font-body">
                  To the maximum extent permitted by law, Intorza will not be liable for
                  indirect or consequential damages. Our total liability related to any
                  service will be limited to the fees paid for the specific scope giving
                  rise to the claim, unless otherwise required by law.
                </p>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">12. Privacy</h2>
                <p className="text-foreground font-body">
                  Our data practices are described in our{" "}
                  <Link to="/privacy" className="text-secondary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">13. Governing law</h2>
                <p className="text-foreground font-body">
                  These Terms are governed by the laws of India. Courts in Bengaluru,
                  Karnataka shall have jurisdiction, unless otherwise agreed.
                </p>
              </section>

              <section className="mt-8 space-y-4">
                <h2 className="font-display text-2xl text-primary">14. Contact</h2>
                <p className="text-foreground font-body">
                  For legal questions, email{" "}
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

export default Terms;
