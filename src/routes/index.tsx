import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { handleNavigateToSection } from "@/lib/section-navigation";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import {
  Problems, Solution, Features, Industries, AIBlock, Process,
} from "@/components/landing/Sections";
import { Cases } from "@/components/landing/Cases";
import { Team } from "@/components/landing/Team";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA, ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("section");
    els.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  useEffect(() => {
    if (!window.location.hash) return;
    requestAnimationFrame(() => handleNavigateToSection(window.location.hash));
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <Features />
      <Industries />
      <AIBlock />
      <Cases />
      <Team />
      <Process />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
