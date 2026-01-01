import Comparison from "@/components/landing/Comparison";
import Databases from "@/components/landing/Databases";
import FAQ from "@/components/landing/FAQ";
import Features from "@/components/landing/Features";
import FooterCTA from "@/components/landing/FooterCTA";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import { Offer } from "@/components/landing/Offer";
import Pricing from "@/components/landing/Pricing";
import Problem from "@/components/landing/Problem";
import UseCases from "@/components/landing/useCases";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Features />
      <Databases />
      <HowItWorks />
      <Comparison />
      <UseCases />
      <Pricing />
      <Offer />
      <FAQ />
      <FooterCTA />
    </div>
  );
}
