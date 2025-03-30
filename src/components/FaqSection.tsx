import React from 'react';
import { Sparkles, Plus, Minus } from 'lucide-react';

const faqData = [
    {
        question: "What is an AI UGC ad maker?",
        answer: "A platform that uses AI to create authentic-looking user-generated content style ads without the time and expense of traditional UGC production."
    },
    {
        question: "How does the AI generate UGC-style content?",
        answer: "Our AI analyzes your brand assets and target audience data, then uses machine learning models trained on successful UGC campaigns to generate content that maintains your brand voice."
    },
    {
        question: "What types of UGC ads can I create?",
        answer: "Product reviews, testimonials, unboxing videos, how-to demonstrations, before-and-after comparisons, and lifestyle usage scenarios for various social platforms."
    },
    {
        question: "Do I need technical skills to use the platform?",
        answer: "No. Our intuitive interface is designed for all skill levels. Just upload assets, select preferences, and let the AI handle the rest."
    },
    {
        question: "How customizable are the generated ads?",
        answer: "You can adjust tone, style, messaging, duration, and visuals. Pro and Business plans include brand voice training and advanced editing tools."
    },
    {
        question: "What file formats can I export my UGC ads in?",
        answer: "Standard video formats (MP4, MOV, AVI, WEBM) and image formats (JPG, PNG, WebP). Resolution ranges from 720p (Free) to 4K (Business)."
    }
];

// FAQ Item component integrated directly in the file
interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
    return (
        <div className="border-b border-[var(--accents-3)]">
            <button 
                className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
                onClick={toggleOpen}
            >
                <span className="font-medium text-[var(--text-primary)]">{question}</span>
                <span className="text-[var(--accents-5)] ml-4">
                    {isOpen ? 
                        <Minus className="h-4 w-4" /> : 
                        <Plus className="h-4 w-4" />
                    }
                </span>
            </button>
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
            >
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0); // First one open by default
    
    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="w-full relative px-5 md:px-10 py-16 md:py-24 bg-[var(--background)]">
            <div className="mx-auto max-w-3xl">
                {/* Section Header */}
                <div className="text-center mb-12 px-4">
                    <div className="border border-[var(--accents-3)] bg-[var(--accents-2)] backdrop-blur-sm rounded-full text-sm h-8 px-3 flex items-center gap-2 w-fit mx-auto mb-4">
                        <Sparkles className="h-4 w-4 text-[var(--accents-5)]" />
                        <span>FAQ</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance pb-3 text-[var(--text-primary)]">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[var(--text-secondary)] text-balance font-medium max-w-2xl mx-auto">
                        Everything you need to know about our AI UGC ad maker
                    </p>
                </div>
                
                {/* FAQ List */}
                <div className="divide-y divide-[var(--accents-3)] border-t border-[var(--accents-3)]">
                    {faqData.map((faq, index) => (
                        <FaqItem 
                            key={index} 
                            question={faq.question} 
                            answer={faq.answer} 
                            isOpen={openIndex === index}
                            toggleOpen={() => toggleFaq(index)}
                        />
                    ))}
                </div>
                
                {/* Contact CTA */}
                <div className="mt-12 text-center">
                    <p className="text-[var(--text-secondary)] mb-4">Still have questions?</p>
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--accents-2)] dark:bg-[var(--accents-1)] px-4 py-2 text-sm font-medium hover:bg-neutral-300 dark:hover:bg-[var(--accents-2)] transition-colors"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FaqSection; 