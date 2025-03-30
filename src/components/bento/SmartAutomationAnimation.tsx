import {
    AnimatePresence, // Import AnimatePresence
    motion,
    useInView,
    useMotionValue,
    useSpring
} from 'framer-motion';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils'; // Assuming you have this utility

// Data for the task items with day and time information
const taskItems = [
    {
        title: "AI Content Generation",
        className: "bg-primary text-primary-foreground",
        day: 0, // Tuesday (0-indexed)
        time: 0.3 // Represents position in the day (0-1 range)
    },
    {
        title: "UGC Campaign Planning",
        className: "bg-primary text-primary-foreground",
        day: 2, // Thursday
        time: 0.6 // Later in the day
    },
    {
        title: "Social Media Scheduling",
        className: "bg-primary text-primary-foreground",
        day: 3, // Saturday
        time: 0.2 // Middle of the day
    },
];

// Define the props if needed, like 'once' and 'startAnimationDelay' from original
interface SmartAutomationAnimationProps {
    once?: boolean;
    startAnimationDelay?: number;
}

// Define the task item interface
interface TaskItem {
    title: string;
    className: string;
    day: number; // 0-4 for the days of the week (Tue-Sat)
    time: number; // 0-1 representing position in the day
}

export const SmartAutomationAnimation: React.FC<SmartAutomationAnimationProps> = ({
    once = true, // Default to true for typical scroll behavior
    startAnimationDelay = 0
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: once, margin: "-100px 0px -100px 0px" }); // Trigger animation slightly before fully visible

    const [itemPositions, setItemPositions] = useState<number[]>([]);

    // Motion value and spring for the vertical indicator line
    const mouseX = useMotionValue(0);
    // Initialize spring to center (we'll update in useEffect)
    const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });

    // Effect to set initial spring position and calculate task positions
    useEffect(() => {
        const calculatePositions = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.getBoundingClientRect().width;
                // Set initial spring position to center
                mouseX.set(containerWidth / 2);

                // Calculate horizontal positions based on day (5 days total)
                const dayWidth = containerWidth / 5; // Width per day

                const positions = taskItems.map((item) => {
                    // Calculate x position based on day (centered within day column)
                    const dayCenter = (item.day + 0.5) * dayWidth; // Center of the day column
                    // Add some randomness within the day column for natural look
                    const randomOffset = (Math.random() * 0.4 - 0.2) * dayWidth; // ±20% of day width
                    return dayCenter + randomOffset;
                });

                setItemPositions(positions);
            }
        };

        calculatePositions(); // Initial calculation
        window.addEventListener('resize', calculatePositions); // Recalculate on resize

        return () => {
            window.removeEventListener('resize', calculatePositions);
        };
    }, [mouseX]); // Dependency on mouseX ensures it's set after ref is available

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            // Update motion value based on mouse position relative to the container
            // Add offset (e.g., 100 from original) if needed for the indicator's visual position
            mouseX.set(event.clientX - rect.left);
        }
    };

    const handleMouseLeave = () => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            // Reset to center on mouse leave
            mouseX.set(rect.width / 2);
        }
    };

    return (
        <div
            ref={containerRef} // Attach ref here
            className="relative w-full h-64 flex flex-col overflow-hidden bg-background p-4 rounded-lg" // Increased height for better scheduling visualization
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background Grid */}
            <div
                className="absolute inset-0 flex -z-10"
                style={{ maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)' }} // Use style for mask
            >
                {/* Simplified repeating grid columns */}
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={cn(
                        "w-1/2 h-full flex items-start justify-between",
                        i % 2 !== 0 && "border-x border-border/70 border-dashed" // Add dashed border for odd columns
                    )}>
                        {[...Array(5)].map((_, j) => (
                            <div key={j} className={cn(
                                "w-px h-5 bg-primary",
                                j === 0 && "bg-transparent" // First line transparent
                            )} />
                        ))}
                    </div>
                ))}
            </div>

            {/* Day Labels */}
            <div className="absolute top-4 left-0 right-0 flex justify-between max-w-md mx-auto px-8 text-sm text-muted-foreground">
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
            </div>

            {/* Vertical Indicator Line */}
            <motion.div
                className="absolute top-10 w-[2px] h-[calc(100%-80px)] bg-gradient-to-b from-foreground dark:from-accent to-transparent z-10" // Use theme colors
                style={{
                    x: springX, // Use the spring value
                    translateX: "-50%", // Center the line on the x value
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ opacity: { duration: 0.2 }, default: { duration: 0 } }} // Match original timing
            />

            {/* Time Label */}
            <motion.div
                className="absolute top-14 bg-foreground dark:bg-accent h-6 z-20 flex items-center justify-center text-xs p-2 rounded-md shadow-md text-background dark:text-accent-foreground" // Adjusted shadow, use theme colors
                style={{
                    x: springX,
                    translateX: "-50%",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ opacity: { duration: 0.2 }, default: { duration: 0 } }}
            >
                <span>12:00 AM</span>
            </motion.div>

            {/* Task Items Container - Absolute positioning for scheduling layout */}
            <div className="absolute inset-0 w-full h-full"> {/* Container for all task items */}
                <AnimatePresence>
                    {isInView && itemPositions.length > 0 && taskItems.map((item: TaskItem, index) => {
                        // Calculate vertical position based on time (0-1 range)
                        // Map the 0-1 range to a position within the container height (excluding top and bottom margins)
                        const containerHeight = containerRef.current?.getBoundingClientRect().height ?? 192; // Default to 48*4=192px if ref not available
                        const verticalMargin = 60; // Space for day labels and margins
                        const usableHeight = containerHeight - verticalMargin;
                        const verticalPosition = verticalMargin / 2 + (item.time * usableHeight);

                        // Initial position off-screen (alternating left/right)
                        const initialX = index % 2 === 0 ? -100 : (containerRef.current?.getBoundingClientRect().width ?? 0) + 100;
                        // Target horizontal position based on day
                        const targetX = itemPositions[index] ?? 0;

                        return (
                            <motion.div
                                key={item.title} // Use a stable key
                                initial={{ opacity: 0, x: initialX, y: verticalPosition }} // Initial position off-screen with correct vertical position
                                animate={{ opacity: 1, x: targetX, y: verticalPosition }} // Animate to final position
                                transition={{
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 18,
                                    duration: 0.5,
                                    delay: startAnimationDelay + 0.2 * index, // Stagger animation
                                }}
                                className={cn(
                                    "absolute flex items-center h-8 justify-center gap-2 rounded-lg w-[180px] p-2 shadow-md", // Base styles with absolute positioning
                                    item.className // Apply class from data
                                )}
                                style={{
                                    transform: `translate(-50%, -50%)` // Center the item on its position
                                }}
                            >
                                <p className="font-medium text-sm">{item.title}</p>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}; 