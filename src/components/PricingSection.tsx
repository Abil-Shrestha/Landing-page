import { ArrowRight, Check, Sparkles } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

interface PricingPlan {
    name: string;
    priceMonthly: string;
    priceYearly: string;
    description: string;
    features: string[];
    buttonText: string;
    isPopular?: boolean;
    isFeatured?: boolean;
}

const plans: PricingPlan[] = [
    {
        name: 'Free',
        priceMonthly: '$0',
        priceYearly: '$0',
        description: 'For individuals and small creators getting started with UGC ads',
        features: [
            'Up to 5 AI-generated UGC ads per month',
            'Basic editing tools',
            'Standard templates',
            'Export in 720p resolution',
            'Community support'
        ],
        buttonText: 'Get Started',
    },
    {
        name: 'Pro',
        priceMonthly: '$29',
        priceYearly: '$290',
        description: 'For professional creators and small marketing teams',
        features: [
            'Everything in Free, plus:',
            'Unlimited AI-generated UGC ads',
            'Advanced editing and customization',
            'Premium templates library',
            'Export in 1080p resolution',
            'Brand voice customization',
            'Priority support'
        ],
        buttonText: 'Upgrade to Pro',
        isPopular: true,
    },
    {
        name: 'Business',
        priceMonthly: '$99',
        priceYearly: '$990',
        description: 'For marketing teams and agencies with multiple brands',
        features: [
            'Everything in Pro, plus:',
            'Team collaboration features',
            'Multiple brand profiles',
            'Advanced analytics dashboard',
            'Export in 4K resolution',
            'White-label exports',
            'API access',
            'Dedicated account manager'
        ],
        buttonText: 'Contact Sales',
        isFeatured: true,
    },
];


const PricingSection: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <section id="pricing" className="w-full relative px-5 md:px-10 py-16 md:py-24 bg-[var(--background)]">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12 px-4">
                    <div className="border border-[var(--accents-3)] bg-[var(--accents-2)] backdrop-blur-sm rounded-md text-sm h-8 px-3 flex items-center gap-2 w-fit mx-auto mb-4">
                        <Sparkles className="h-4 w-4 text-[var(--accents-5)]" />
                        <span>Pricing</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance pb-3 text-[var(--text-primary)]">
                        Create UGC Ads at Scale
                    </h2>
                    <p className="text-[var(--text-secondary)] text-balance font-medium max-w-2xl mx-auto">
                        Choose the plan that's right for your content creation needs
                    </p>
                </div>

                {/* Billing Cycle Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex items-center p-1 rounded-md border border-[var(--accents-3)] bg-[var(--accents-1)]">
                        <button
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${billingCycle === 'monthly'
                                ? 'bg-[var(--accents-2)] text-[var(--text-primary)]'
                                : 'text-[var(--text-secondary)]'}`}
                            onClick={() => setBillingCycle('monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${billingCycle === 'yearly'
                                ? 'bg-[var(--accents-2)] text-[var(--text-primary)]'
                                : 'text-[var(--text-secondary)]'}`}
                            onClick={() => setBillingCycle('yearly')}
                        >
                            Yearly
                            <span className="ml-1 text-xs py-0.5 px-1.5 rounded-md bg-[var(--accents-3)] text-[var(--accents-5)]">Save 20%</span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`foundation-card border border-[var(--accents-3)] rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg ${plan.isPopular ? 'relative z-10 md:scale-105' : ''} ${plan.isFeatured ? 'md:-mt-4 md:mb-4' : ''}`}
                        >
                            {/* Card Header */}
                            <div className="p-6 pb-4">
                                {plan.isPopular && (
                                    <div className="absolute top-0 right-0 bg-[var(--accents-5)] text-white text-xs font-medium py-1 px-3 rounded-bl-lg">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">{plan.name}</h3>
                                <div className="flex items-baseline mb-1">
                                    <span className="text-3xl font-bold text-[var(--text-primary)]">
                                        {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly}
                                    </span>
                                    <span className="text-[var(--text-secondary)] ml-1 text-sm">
                                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                                    </span>
                                </div>
                                <p className="text-sm text-[var(--text-secondary)] mb-4">{plan.description}</p>
                            </div>

                            {/* Features List */}
                            <div className="px-6 pb-6 flex-grow">
                                <div className="border-t border-[var(--accents-3)] pt-4 mb-4"></div>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start">
                                            <Check className="h-4 w-4 text-[var(--accents-5)] mt-1 mr-3 shrink-0" />
                                            <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card Footer */}
                            <div className="px-6 pb-6 mt-auto">
                                <button
                                    className={`w-full py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-colors ${plan.isPopular
                                        ? 'bg-[var(--accents-5)] text-white hover:bg-[var(--accents-6)]'
                                        : 'bg-[var(--accents-2)] dark:bg-[var(--accents-1)] hover:bg-neutral-300 dark:hover:bg-[var(--accents-2)]'}`}
                                >
                                    {plan.buttonText}
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enterprise Contact */}
                <div className="mt-12 text-center">
                    <p className="text-[var(--text-secondary)] mb-4">Need a custom solution for your enterprise?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-[var(--accents-5)] hover:text-[var(--accents-6)] font-medium"
                    >
                        Contact our sales team
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PricingSection; 