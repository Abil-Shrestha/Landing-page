
import React from 'react';
import BentoSection from './components/BentoSection.tsx';
import FaqSection from './components/FaqSection';
import FeaturesSection from './components/FeaturesSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import SecuritySection from './components/SecuritySection';
import SocialProofSection from './components/SocialProofSection';
import TestimonialSection from './components/TestimonialSection';
import TransitionSection from './components/TransitionSection';
import TrustedByLogos from './components/TrustedByLogos';
import './App.css'; // Keep global styles for now
import BotCTA from '@/components/bot-cta';

function App() {
  // Added comment to trigger rebuild
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedByLogos />
      <BentoSection />
      <FeaturesSection />
      <TransitionSection />
      <HowItWorksSection />
      <PricingSection />
      <FaqSection />
      <BotCTA />
      <Footer />
    </>
  );
}

export default App;
