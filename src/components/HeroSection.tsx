
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-100 to-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-white to-transparent" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            <span className="block">Build beautiful</span>
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              digital experiences
            </span>
          </h1>
          
          <div className="mt-6 max-w-2xl">
            <p className="text-xl text-gray-600">
              Start creating amazing web applications with our powerful and flexible platform. Get started in minutes, no complex setup required.
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline">
              Learn more
            </Button>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-8 sm:mt-20">
            <p className="text-sm font-medium text-gray-500">Trusted by teams worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {["Meta", "Google", "Stripe", "Spotify", "Airbnb"].map((company) => (
                <div key={company} className="text-lg font-semibold text-gray-400">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
