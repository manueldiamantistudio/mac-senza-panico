import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { TargetAudience } from './components/TargetAudience';
import { Chapters } from './components/Chapters';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CHECKOUT_URL } from './constants';

const App: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuy = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-apple-dark antialiased selection:bg-apple-blue selection:text-white">
      {/* Hero "Acquista" scrolls to pricing so they see the guarantee and timer */}
      <Hero onCtaClick={scrollToPricing} />
      <ProblemSolution />
      <TargetAudience />
      <Chapters />
      <SocialProof />
      {/* Pricing "Acquista" goes to Payhip */}
      <Pricing id="pricing-section" onBuy={handleBuy} />
      <FAQ />
      {/* Footer "Voglio..." scrolls to pricing */}
      <Footer onCtaClick={scrollToPricing} />
    </div>
  );
};

export default App;