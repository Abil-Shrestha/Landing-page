
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ShaderCanvas from "./ShaderCanvas";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden h-screen w-full">
      {/* Shader background */}
      <ShaderCanvas />
      
      {/* Content overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" /> 
      
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 h-full flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            <span className="block">Build beautiful</span>
            <span className="block bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              digital experiences
            </span>
          </h1>
          
          <div className="mt-6 max-w-2xl">
            <p className="text-xl text-gray-200">
              Start creating amazing web applications with our powerful and flexible platform. Get started in minutes, no complex setup required.
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Learn more
            </Button>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-8 sm:mt-20">
            <p className="text-sm font-medium text-gray-300">Trusted by teams worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {["Meta", "Google", "Stripe", "Spotify", "Airbnb"].map((company) => (
                <div key={company} className="text-lg font-semibold text-gray-300">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
