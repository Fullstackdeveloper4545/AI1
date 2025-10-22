import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AdExamples from "@/components/AdExamples";
import ProfitCalculator from "@/components/ProfitCalculator";
import WhyItWorks from "@/components/WhyItWorks";
import ExclusiveOffer from "@/components/ExclusiveOffer";
import FounderSection from "@/components/FounderSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <AdExamples />
      <ProfitCalculator />
      <WhyItWorks />
      <ExclusiveOffer />
      <FounderSection />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
