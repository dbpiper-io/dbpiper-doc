import CTA from "@/components/landing/CTA";
import FAQ from "@/components/landing/FAQ";
import Features from "@/components/landing/Features";
import FilterFeatureHighlight from "@/components/landing/FilterFeatureHighlight";
import FooterCTA from "@/components/landing/FooterCTA";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <Features />
      <FilterFeatureHighlight />
      <Pricing />
      <FAQ />
      <CTA />
      <FooterCTA />
    </div>
  );
}
