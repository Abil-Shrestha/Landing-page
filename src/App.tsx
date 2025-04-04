
import React from 'react';
import BentoSection from './components/BentoSection.tsx';
import FaqSection from './components/FaqSection';
import FeaturesSection from './components/FeaturesSection.tsx';
import Footer from './components/Footer.tsx';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import TransitionSection from './components/TransitionSection.tsx';
import TrustedByLogos from './components/TrustedByLogos';
import './App.css'; // Keep global styles for now
import BotCTA from '@/components/bot-cta';

function App() {
  // Updated comment to trigger rebuild
  return (
    <>
      <Navbar />
      <HeroSection />
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
