import type React from 'react';
import ChatInteraction from './bento/ChatInteraction'; // Import the new component
import IntegrationsAnimation from './bento/IntegrationsAnimation'; // Import the new component
import { ThirdBentoAnimation } from './bento/LineChartAnimation'; // Import the new line chart animation
import { SmartAutomationAnimation } from './bento/SmartAutomationAnimation'; // Import the Smart Automation animation

// Placeholder data for the line chart
const lineChartData = [50, 75, 60, 90, 70, 110, 80, 120, 95, 130, 100, 140];
const tooltipValues = [1000, 1500, 1200, 1800, 1400, 2200, 1600, 2400, 1900, 2600, 2000, 2800];

// Placeholder data structure mimicking s.CQ.bentoSection - Updated for AI UGC
const bentoData = {
    title: "Generate UGC on Demand", // Updated Section Title
    description: "See how our AI transforms simple prompts into authentic, brand-aligned user-generated content.", // Updated Section Description
    items: [
        {
            id: 1,
            content: <ChatInteraction />,
            title: "1. Describe Your Vision", // Updated Item 1 Title
            description: "Outline your campaign goals, target audience, and desired content style using our intuitive interface." // Updated Item 1 Description
        },
        {
            id: 2,
            content: <IntegrationsAnimation />,
            title: "2. Multi-Platform AI Generation", // Updated Item 2 Title
            description: "Our AI generates content optimized for various platforms (TikTok, Instagram, Facebook Ads, etc.)"
        },
        {
            id: 3,
            content: <SmartAutomationAnimation once={false} />, // Now uses the timeline animation
            title: "3. Smart Content Scheduling", // Updated Item 3 Title
            description: "Automatically schedule your AI-generated content across platforms at optimal times for maximum engagement." // Updated Item 3 Description
        },
        {
            id: 4,
            content: <ThirdBentoAnimation data={lineChartData} toolTipValues={tooltipValues} color="blue" />, // Now uses the line chart animation
            title: "4. Deploy & Analyze", // Updated Item 4 Title
            description: "Easily export your new UGC for campaigns and track performance with integrated analytics." // Updated Item 4 Description
        },
        // ... add items 5 and 6 later
    ]
};

const BentoSection: React.FC = () => {
    const { title, description, items } = bentoData;

    return (
        <section
            id="bento"
            className="flex flex-col items-center justify-center w-full relative px-5 md:px-10 py-16 md:py-24" // Added some padding
        >
            <div className="border-x border-border mx-5 md:mx-10 relative w-full max-w-7xl"> {/* Added border color and max-width */}
                {/* Left side pattern */}
                <div
                    className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"
                />
                {/* Right side pattern */}
                <div
                    className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"
                />

                {/* Replacing l.X component with a div for title/description */}
                <div className="text-center mb-12 px-4"> {/* Added margin bottom and padding */}
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance pb-1">
                        {title}
                    </h2>
                    <p className="text-muted-foreground text-balance font-medium">
                        {description}
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            // Added border-border for clarity and slight rounded corners
                            className="flex flex-col items-start justify-end min-h-[400px] md:min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group cursor-pointer"
                        >
                            {/* Content Area */}
                            <div className="relative flex size-full items-center justify-center h-full overflow-hidden p-6"> {/* Added padding to content area */}
                                {item.content}
                            </div>
                            {/* Text Area below content */}
                            <div className="flex flex-col gap-2 p-6 pt-0 w-full bg-background"> {/* Ensure text area has background */}
                                <h3 className="text-lg tracking-tighter font-semibold">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm"> {/* Made description text smaller */}
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoSection; 