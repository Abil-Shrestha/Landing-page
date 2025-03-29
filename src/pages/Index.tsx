
import React from "react";
import HeroSection from "@/components/HeroSection";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Wand2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-4 right-4 z-50">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white cursor-pointer shadow-lg">
              <Wand2 size={18} />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Generative UI Enabled</h4>
              <p className="text-sm text-muted-foreground">
                Hover over any section, click edit, and describe how you want to change it.
                Our AI will update the content in real-time.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <HeroSection />
    </div>
  );
};

export default Index;
