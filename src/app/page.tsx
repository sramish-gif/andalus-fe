import { Hero } from "@/components/home/Hero";
import { TextReveal } from "@/components/home/TextReveal";
import { FocusAreas } from "@/components/home/FocusAreas";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { CTA } from "@/components/home/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Hero />
      <TextReveal />
      <FocusAreas />
      <FeaturedPortfolio />
      <CTA />
      <Footer />
    </main>
  );
}
