import { motion as m } from 'framer-motion';
import type React from 'react';
import { Children, useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { cn } from '../../lib/utils';

interface OrbitingCirclesProps {
    className?: string;
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    radius?: number;
    path?: boolean;
    iconSize?: number;
    speed?: number; // Added to control duration dynamically
    index?: number; // Added for staggering animations
    startAnimationDelay?: number; // Added delay before animation starts
    once?: boolean; // Added to control intersection observer trigger
    startAngle?: number; // Added to control the starting angle of the orbit
}

const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
    className,
    children,
    reverse = false,
    duration = 20, // Base duration in seconds
    radius = 160,
    path = true,
    iconSize = 30,
    speed = 1, // Speed multiplier
    index = 0, // Index for staggering
    startAnimationDelay = 0, // Base delay
    once = false, // Trigger animation only once
    startAngle = 0, // Starting angle in degrees (0 = right, 90 = bottom, etc.)
    ...props
}) => {
    const calculatedDuration = duration / speed; // Adjust duration based on speed
    const containerRef = useRef<HTMLDivElement>(null);
    const entry = useIntersectionObserver(containerRef, { once });
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (entry?.isIntersecting) {
            setIsAnimating(true);
        } else if (!once) {
            // Reset animation if `once` is false and it goes out of view
            // setIsAnimating(false); // Optional: uncomment to stop animation when out of view
        }
    }, [entry?.isIntersecting, once]);

    const pathMotionProps = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: {
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.2 * index + startAnimationDelay, // Stagger based on index
            type: "spring",
            stiffness: 120,
            damping: 18,
            mass: 1,
        },
    };

    const childMotionProps = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: {
            duration: 0.5,
            // Stagger child animations slightly after path animation starts
            delay: 0.6 + 0.2 * index + startAnimationDelay,
            ease: [0, 0, 0.58, 1], // Custom cubic bezier from original
            type: "spring",
            stiffness: 120,
            damping: 18,
            mass: 1,
        },
    };

    return (
        <>
            {path && (
                <m.div
                    ref={containerRef} // Observe the path element for triggering animations
                    {...(isAnimating ? pathMotionProps : { initial: { scale: 0, opacity: 0 } })} // Control animation based on visibility
                    className="pointer-events-none absolute inset-0"
                    style={{
                        width: 2 * radius,
                        height: 2 * radius,
                        left: `calc(50% - ${radius}px)`,
                        top: `calc(50% - ${radius}px)`,
                    }}
                >
                    <div
                        className={cn(
                            "size-full rounded-full",
                            // Adjusted border colors for better visibility 
                            "border border-border/40",
                            // Simplified gradient for modern look
                            "bg-gradient-to-b from-border/10 to-transparent",
                            className
                        )}
                    />
                </m.div>
            )}

            {isAnimating && Children.map(children, (child, i) => {
                // Calculate angle based on number of children and add the startAngle offset
                const angle = ((360 / Children.count(children)) * i) + startAngle;
                return (
                    <div
                        key={`orbit-child-${index}-${i}`} // Ensure unique key per instance and child
                        style={{
                            // CSS variables set for the orbit animation
                            '--duration': `${calculatedDuration}s`,
                            '--radius': `${0.98 * radius}px`, // Use slightly smaller radius for icon path
                            '--angle': `${angle}deg`,
                            '--icon-size': `${iconSize}px`,
                            // Add initial transform to position at the starting angle
                            transform: `rotate(${angle}deg) translateX(${0.98 * radius}px) rotate(-${angle}deg)`,
                        } as React.CSSProperties}
                        className={cn(
                            "absolute flex size-[var(--icon-size)] z-20 p-1 transform-gpu animate-orbit items-center justify-center rounded-full",
                            reverse && "[animation-direction:reverse]"
                        )}
                    >
                        {/* Apply staggered animation to each child */}
                        <m.div
                            initial={childMotionProps.initial}
                            animate={childMotionProps.animate}
                            transition={{
                                ...childMotionProps.transition,
                                delay: childMotionProps.transition.delay + (0.1 * i), // Stagger individual icons slightly
                            }}
                            {...props} // Spread any additional props to this div
                        >
                            {child}
                        </m.div>
                    </div>
                );
            })}
        </>
    );
};

export { OrbitingCircles }; 