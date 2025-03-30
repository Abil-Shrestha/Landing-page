import { BadgeCheck, Layers, Megaphone, Share2, Sparkles, Timer } from 'lucide-react';
import type React from 'react';
import { cn } from '../lib/utils';
import { AnimatedLines } from './AnimatedLines';

// Feature Badge Component
const FeatureBadge: React.FC<{ text: string }> = ({ text }) => (
    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        {text}
    </div>
);

// Feature Icon Component
const FeatureIcon: React.FC<{ icon: React.ReactNode, className?: string }> = ({ icon, className }) => (
    <div className={cn(
        "flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10",
        className
    )}>
        {icon}
    </div>
);

// Data for features with updated content for AI UGC marketing
const featuresData = [
    {
        title: 'AI-Powered Content Creation',
        badge: 'Core Feature',
        description: 'Generate authentic-looking UGC content in minutes with our advanced AI models trained on real creator content.',
        icon: <Sparkles className="h-6 w-6 text-primary" />,
        className: 'md:col-span-2'
    },
    {
        title: 'Multi-Platform Optimization',
        badge: 'Format Ready',
        description: 'Automatically format and optimize your AI-generated content for TikTok, Instagram, Facebook, and more.',
        icon: <Layers className="h-6 w-6 text-primary" />,
        className: ''
    },
    {
        title: 'Brand Voice Matching',
        badge: 'Personalization',
        description: 'Our AI analyzes your existing content to perfectly match your brand voice, style, and messaging.',
        icon: <Megaphone className="h-6 w-6 text-primary" />,
        className: ''
    },
    {
        title: 'Rapid Turnaround',
        badge: 'Time Saver',
        description: 'Generate weeks worth of UGC content in minutes instead of coordinating with multiple creators.',
        icon: <Timer className="h-6 w-6 text-primary" />,
        className: ''
    },
    {
        title: 'One-Click Sharing',
        badge: 'Distribution',
        description: 'Share your AI-generated UGC directly to your marketing platforms or schedule for optimal engagement times.',
        icon: <Share2 className="h-6 w-6 text-primary" />,
        className: ''
    },
    {
        title: 'Compliance & Safety',
        badge: 'Brand Safety',
        description: 'All generated content is automatically checked against brand guidelines and legal compliance requirements.',
        icon: <BadgeCheck className="h-6 w-6 text-primary" />,
        className: 'md:col-span-2'
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section
            id="features"
            className="w-full relative px-5 md:px-10 py-16 md:py-24 bg-background"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12 px-4">
                    <div className="border border-border bg-primary/5 backdrop-blur-sm rounded-full text-sm h-8 px-3 flex items-center gap-2 w-fit mx-auto mb-4">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>AI-Powered Features</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance pb-3">
                        Transform Your UGC Strategy
                    </h2>
                    <p className="text-muted-foreground text-balance font-medium max-w-2xl mx-auto">
                        Our AI platform gives you all the tools you need to create, optimize, and distribute authentic user-generated content without the hassle.
                    </p>
                </div>

                {/* Animated Lines SVG with CPU Element */}
                <div className="relative w-full max-w-3xl mx-auto">
                    <AnimatedLines className="w-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                        <div className="cpu-element-container">
                            {/* CPU Element */}
                            <div className="cpu-element">
                                {/* CPU Shine Effect */}
                                <div data-cpu-shine="true"></div>

                                {/* CPU Text */}
                                <div className="stack">
                                    <span data-text="true" className="opacity-80">Reel-Hyp</span>

                                </div>
                            </div>

                            {/* CPU Connectors - Outside the CPU element */}
                            <div className="cpu-connectors">
                                {/* Left connectors */}
                                <div className="connector left-top"></div>
                                <div className="connector left-bottom"></div>

                                {/* Top connectors */}
                                <div className="connector top-1"></div>
                                <div className="connector top-2"></div>
                                <div className="connector top-3"></div>
                                <div className="connector top-4"></div>
                                <div className="connector top-5"></div>
                                <div className="connector top-6"></div>

                                {/* Bottom connectors */}
                                <div className="connector bottom-1"></div>
                                <div className="connector bottom-2"></div>
                                <div className="connector bottom-3"></div>
                                <div className="connector bottom-4"></div>
                                <div className="connector bottom-5"></div>
                                <div className="connector bottom-6"></div>

                                {/* Right connectors */}
                                <div className="connector right-top"></div>
                                <div className="connector right-bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technology Stack Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Advanced Content Intelligence Card */}
                    <div className="foundation-card group flex flex-col justify-between" data-variant="react">
                        <h3 className="mb-6 text-xl font-semibold tracking-tight">
                            Advanced Content Intelligence
                        </h3>

                        <p className="text-gray-700 dark:text-gray-300 text-sm mt-auto">
                            Our proprietary neural networks analyze thousands of successful content pieces to identify patterns that resonate with your specific audience. The system continuously learns from performance metrics to refine its creative output, ensuring each piece of content is optimized for maximum impact.
                        </p>
                    </div>

                    {/* Engagement Prediction System Card */}
                    <div className="foundation-card group flex flex-col justify-between" data-variant="next">
                        <h3 className="mb-6 text-xl font-semibold tracking-tight">
                            Engagement Prediction System
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mt-auto">
                            ReelHyp's predictive analytics forecasts how your audience will respond to content before it goes live. Our system evaluates emotional triggers, attention patterns, and conversion potential to help you focus resources on content with the highest probability of success, eliminating guesswork from your strategy.
                        </p>
                    </div>

                    {/* Adaptive Content Evolution Card */}
                    <div className="foundation-card group flex flex-col justify-between" data-variant="turbo">
                        <h3 className="mb-6 text-xl font-semibold tracking-tight">
                            Adaptive Content Evolution
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mt-auto">
                            Unlike static content plans, our platform continuously evolves your content strategy based on real-time performance data. The system identifies emerging trends within your niche and automatically adjusts your content approach to maintain relevance and maximize engagement across changing market conditions.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;