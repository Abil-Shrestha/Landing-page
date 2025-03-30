import { AnimatePresence, motion } from 'framer-motion';
import { Bot } from 'lucide-react'; // Placeholder for a.F.logo
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver'; // Simple intersection hook
import TypewriterText from './TypewriterText'; // Import the typewriter component

// Reusable component for the AI response part including the Typewriter
const AiResponse: React.FC = () => {
    // Updated AI response text for AI UGC context
    const text = "Okay! Generating UGC concepts for your summer shoe line aimed at Gen Z outdoor enthusiasts. How about these: 1. Beach bonfire scene with friends wearing the shoes. 2. Hiking shot focusing on shoe durability & style. 3. Skateboarder mid-trick with a close-up on the shoes...";

    return (
        // Removed the j and _ wrappers as they seem unnecessary here
        // Added padding, background, border, rounded corners, and shadow for the AI message bubble
        <div className="md:min-w-[300px] min-w-[220px] p-4 bg-accent border border-border rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.05)]">
            <TypewriterText textStream={text} speed={50} mode="typewriter" />
        </div>
    );
};

// Main Chat Interaction Component
const ChatInteraction: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const entry = useIntersectionObserver(containerRef, { threshold: 0.4 }); // Trigger when 40% visible
    const isVisible = !!entry?.isIntersecting;
    const [showResponse, setShowResponse] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (isVisible) {
            // Add a delay before showing the AI response bubble
            timer = setTimeout(() => {
                setShowResponse(true);
            }, 800); // Delay for user message animation + pause
        } else {
            // Reset when not visible
            setShowResponse(false);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isVisible]);

    return (
        <div
            ref={containerRef}
            className="w-full h-full p-4 flex flex-col items-center justify-center gap-5 relative overflow-hidden"
        >
            {/* Gradient overlay at the bottom */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20" />

            {/* Chat messages container with motion */}
            {/* Added key to force remount/reset animation when visibility changes */}
            <motion.div
                key={isVisible ? 'visible' : 'hidden'}
                className="max-w-md mx-auto w-full flex flex-col gap-2"
                animate={{
                    y: showResponse ? -75 : 0, // Move up when response is shown
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                }}
            >
                {/* User message */}
                <div className="flex items-end justify-end gap-3">
                    <motion.div
                        className="max-w-[280px] bg-primary text-primary-foreground p-4 rounded-2xl ml-auto shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
                    >
                        <p className="text-sm">
                            {/* Updated user message for AI UGC context */}
                            "We need UGC for our new summer shoe line launch. Target audience is Gen Z, focus on outdoor activities, fun vibes. Can you generate some image ideas?"
                        </p>
                    </motion.div>
                    <div className="flex items-center bg-background rounded-full w-fit border border-border flex-shrink-0">
                        {/* Using a placeholder image */}
                        <img
                            src="https://randomuser.me/api/portraits/women/72.jpg"
                            alt="User Avatar"
                            className="size-8 rounded-full flex-shrink-0"
                        />
                    </div>
                </div>

                {/* AI section (Avatar + Response/Loading Dots) */}
                <div className="flex items-start gap-2">
                    {/* AI Avatar */}
                    <div className="flex items-center bg-background rounded-full size-10 flex-shrink-0 justify-center shadow-[0_0_10px_rgba(0,0,0,0.05)] border border-border">
                        <Bot className="size-4 text-primary" /> {/* Using Bot icon */}
                    </div>

                    {/* Response area with loading dots / actual response */}
                    <div className="relative h-16"> {/* Ensure consistent height */}
                        <AnimatePresence mode="wait">
                            {showResponse ? (
                                <motion.div
                                    key="response"
                                    layout // Animate layout changes
                                    initial={{ opacity: 0, x: -10 }} // Start slightly to the left
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                >
                                    <AiResponse />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="dots"
                                    className="absolute left-0 top-0 bg-background p-4 rounded-2xl border border-border"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }} // Animate based on visibility
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2, ease: 'easeOut', delay: 0.4 }} // Delay dots slightly
                                >
                                    <div className="flex gap-1">
                                        {[0, 1, 2].map((i) => (
                                            <motion.div
                                                key={i}
                                                className="w-2 h-2 bg-primary/50 rounded-full"
                                                animate={{
                                                    y: [0, -5, 0],
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    delay: 0.2 * i,
                                                    ease: 'easeInOut',
                                                }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ChatInteraction; 