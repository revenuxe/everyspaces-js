"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { StructuredData, createBreadcrumbSchema } from "@/components/StructuredData";

const AboutUs = () => {
  const aeoSchemas = [
    createBreadcrumbSchema(
      [
        { name: "Home", url: "https://everyspaces.com" },
        { name: "About Us", url: "https://everyspaces.com/about-us" },
      ],
      "about-us",
    ),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "About Us | EverySpaces x Intorza",
      description:
        "Started in 2025, EverySpaces delivers interior design and execution, powered by Intorza's software management workflow for interiors.",
      url: "https://everyspaces.com/about-us",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={aeoSchemas} />
      <Header />

      <main className="pt-20">
        <header className="bg-primary py-12 md:py-16">
          <div className="container px-4">
            <p className="text-primary-foreground/80 font-body text-sm">Company</p>
            <h1 className="font-display text-3xl md:text-5xl text-primary-foreground mt-2">
              About Us
            </h1>
            <p className="text-primary-foreground/80 font-body mt-3 max-w-2xl">
              Started in 2025, EverySpaces brings interior design and execution together with a modern software management workflow from{" "}
              <a
                href="https://intorza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-secondary transition-colors"
              >
                Intorza
              </a>
              .
            </p>
          </div>
        </header>

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h2 className="font-display text-2xl text-primary">Our story</h2>
                <p className="text-foreground font-body">
                  We started in 2025 with one goal: make interiors feel simple for homeowners. From design planning to execution and handover, we keep every
                  step structured, transparent, and quality-focused.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-foreground font-body">
                  <li>Design planning built for real apartment and villa layouts</li>
                  <li>Execution backed by clear milestones and quality checkpoints</li>
                  <li>Communication that keeps you updated throughout the project</li>
                </ul>

                <p className="text-foreground font-body">
                  Intorza supports this experience with its interior management software workflow, helping teams plan, track, and coordinate interiors projects
                  more effectively.
                </p>
              </div>

              <aside className="glass-card rounded-3xl p-5 md:p-8 shadow-elevated">
                <h3 className="font-display text-lg md:text-xl text-foreground">About Intorza</h3>
                <p className="text-foreground/90 font-body mt-3">
                  Intorza is a software management company for interiors. We connect their workflow to our on-ground execution so your project stays
                  organized, on-time, and easier to manage.
                </p>

                <a
                  href="https://intorza.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-terracotta px-8 py-3 rounded-2xl text-secondary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                >
                  Visit intorza.com
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card rounded-3xl p-5 md:p-6 shadow-elevated">
                <h3 className="font-display text-lg text-foreground">Started in 2025</h3>
                <p className="text-foreground/90 font-body mt-2 text-sm md:text-base">
                  Built for modern interior execution with a structured process from day one.
                </p>
              </div>
              <div className="glass-card rounded-3xl p-5 md:p-6 shadow-elevated">
                <h3 className="font-display text-lg text-foreground">Software-managed workflow</h3>
                <p className="text-foreground/90 font-body mt-2 text-sm md:text-base">
                  Intorza helps teams track milestones, tasks, and coordination across interiors projects.
                </p>
              </div>
              <div className="glass-card rounded-3xl p-5 md:p-6 shadow-elevated">
                <h3 className="font-display text-lg text-foreground">Client-first execution</h3>
                <p className="text-foreground/90 font-body mt-2 text-sm md:text-base">
                  Clear updates and quality checkpoints so you feel confident during the build.
                </p>
              </div>
            </div>

            <div className="mt-8 md:mt-10 rounded-2xl border border-border/60 bg-muted/20 px-5 py-4 md:px-6 md:py-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Digital experience</p>
              <p className="text-foreground/90 font-body text-sm md:text-base mt-2">
                This website is designed and built by{" "}
                <a
                  href="https://revenuxe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-secondary hover:underline"
                >
                  Revenuxe
                </a>
                — product and engineering for modern brands.
              </p>
            </div>

            <div className="mt-10 md:mt-12 glass-card rounded-3xl p-5 md:p-8 shadow-elevated">
              <h2 className="font-display text-2xl text-primary">Ready to plan your space?</h2>
              <p className="text-foreground/90 font-body mt-2 max-w-2xl">
                Tell us what you want to build. We will help you with design direction, clarity on scope, and a next step that feels easy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 btn-terracotta px-8 py-3 rounded-2xl text-secondary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-3 rounded-2xl font-semibold shadow-soft transition-colors"
                >
                  Explore Services
                </Link>
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

export default AboutUs;

