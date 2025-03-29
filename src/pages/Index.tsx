
import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Features Section</h2>
      </div>
      <div id="pricing" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Pricing Section</h2>
      </div>
      <div id="about" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">About Section</h2>
      </div>
    </div>
  );
};

export default Index;
