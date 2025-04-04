import { ArrowRight, ChevronRight, CloudUpload, Rocket, Sparkles, Wand2 } from 'lucide-react';
import type React from 'react';

// Define step data with icons, titles, descriptions, and benefits
const stepsData = [
    {
        icon: <CloudUpload className="h-6 w-6" />,
        title: 'Upload Your Content',
        description: 'Simply upload your brand assets, product information, and target audience details to our platform.',
        benefits: [
            'Support for all media types (images, videos, text)',
            'Secure cloud storage with encryption',
            'Automatic content optimization'
        ]
    },
    {
        icon: <Wand2 className="h-6 w-6" />,
        title: 'AI Generates UGC-Style Ads',
        description: 'Our advanced AI analyzes your content and creates authentic-looking user-generated content ads that resonate with your audience.',
        benefits: [
            'Multiple style variations to choose from',
            'Natural language and realistic visuals',
            'Customizable to match your brand voice'
        ]
    },
    {
        icon: <Rocket className="h-6 w-6" />,
        title: 'Deploy High-Converting Campaigns',
        description: 'Download your new UGC ads or publish them directly to your marketing channels with a single click.',
        benefits: [
            'One-click export to major platforms',
            'Performance tracking and analytics',
            'A/B testing capabilities'
        ]
    }
];

const HowItWorksSection: React.FC = () => {
    return (
        <section
            id="how-it-works"
            className="w-full relative px-5 md:px-10 py-16 md:py-24 bg-background"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12 px-4">
                    <div className="border border-[var(--accents-3)] bg-[var(--accents-2)] backdrop-blur-sm rounded-md text-sm h-8 px-3 flex items-center gap-2 w-fit mx-auto mb-4">
                        <Sparkles className="h-4 w-4 text-[var(--accents-5)]" />
                        <span>How It Works</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance pb-3">
                        Simple. Seamless. Smart.
                    </h2>
                    <p className="text-muted-foreground text-balance font-medium max-w-2xl mx-auto">
                        Our AI-powered platform transforms your brand content into authentic UGC ads in three simple steps
                    </p>
                </div>

                {/* Interactive Process Flow */}
                <div className="mt-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accents-2)] via-[var(--accents-3)] to-[var(--accents-2)] z-0"></div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
                        {stepsData.map((step, index) => (
                            <div
                                key={index}
                                className="group relative foundation-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-primary/30 flex flex-col h-full"
                            >
                                {/* Step Number and Icon */}
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-md bg-[var(--accents-2)] border border-[var(--accents-3)] flex items-center justify-center text-lg font-medium text-[var(--accents-5)] mr-3">
                                        {index + 1}
                                    </div>
                                    <div className="p-2 rounded-lg bg-[var(--accents-2)] text-[var(--accents-5)]">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold tracking-tight mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground mb-5">
                                    {step.description}
                                </p>

                                {/* Benefits List */}
                                <div className="mt-auto">
                                    <h4 className="text-sm font-medium mb-2 text-[var(--accents-5)]">Key Benefits:</h4>
                                    <ul className="space-y-2">
                                        {step.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start">
                                                <ChevronRight className="h-4 w-4 text-[var(--accents-5)] shrink-0 mt-0.5 mr-2" />
                                                <span className="text-sm text-muted-foreground">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Arrow connector (mobile only) */}
                                {index < stepsData.length - 1 && (
                                    <div className="md:hidden flex justify-center mt-6">
                                        <ArrowRight className="h-6 w-6 text-[var(--accents-4)]" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <a
                        href="#pricing"
                        className="inline-flex items-center gap-2 rounded-md bg-[var(--accents-2)] dark:bg-[var(--accents-1)] px-4 py-2 text-sm font-medium dark:hover:bg-[var(--accents-2)] hover:bg-neutral-300  transition-colors"
                    >
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection; 