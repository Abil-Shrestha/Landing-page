import { Bot } from 'lucide-react'; // Keep Bot for center or replace with a main logo
import type React from 'react';
import { cn } from '../../lib/utils';
import {
    FigmaLogo,
    GeminiLogo,
    PosthogLogo,
    ReplitLogo,
    Soc2Logo,
    SupabaseLogo,
    VercelLogo,
    // Import other logos as needed
} from './IntegrationLogos';
import { OrbitingCircles } from './OrbitingCircles';

// Icon Wrapper for consistent sizing and styling
const LogoWrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <div className={cn("flex items-center justify-center size-full bg-muted rounded-full p-2", className)}>
            {children}
        </div>
    );
};

const IntegrationsAnimation: React.FC = () => {
    // Define the logos with their configurations
    const logos = [
        {
            name: "Instagram",
            src: "/instagram.svg",
            radius: 120,
            duration: 28,
            speed: 0.9,
            iconSize: 60,
            startAngle: 0,     // Starting at 0 degrees
            delay: 0,          // No additional delay
            reverse: false
        },
        {
            name: "TikTok",
            src: "/tiktok.svg",
            radius: 140,
            duration: 30,
            speed: 0.9,
            iconSize: 60,
            startAngle: 120,   // Starting at 120 degrees (1/3 of the circle)
            delay: 500,        // 0.5 second delay
            reverse: true
        },
        {
            name: "YouTube",
            src: "/youtube.svg",
            radius: 160,
            duration: 32,
            speed: 0.9,
            iconSize: 60,
            startAngle: 240,   // Starting at 240 degrees (2/3 of the circle)
            delay: 1000,       // 1 second delay
            reverse: false
        }
    ];

    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background rounded-lg">
            {/* Top Gradient */}
            <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20" />
            {/* Bottom Gradient */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20" />

            {/* Center Logo */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center size-16 bg-background text-black p-2 rounded-full z-30 border-border/40 border">
                <img src="/logo.svg" alt="Bot" className="size-8 dark:invert" />
            </div>

            {/* Create orbit paths */}
            <div className="relative flex h-full w-full items-center justify-center scale-75 md:scale-100">
                {/* Add orbit path circles */}
                {logos.map((logo, index) => (
                    <div
                        key={`orbit-path-${logo.name}`}
                        className="pointer-events-none absolute"
                        style={{
                            width: `${logo.radius * 2}px`,
                            height: `${logo.radius * 2}px`,
                            left: `calc(50% - ${logo.radius}px)`,
                            top: `calc(50% - ${logo.radius}px)`,
                        }}
                    >
                        <div
                            className="size-full rounded-full border border-border/40 bg-gradient-to-b from-border/10 to-transparent"
                        />
                    </div>
                ))}

                {/* Create individual orbiting elements */}
                {logos.map((logo, index) => {
                    // Create a single orbiting element for each logo
                    return (
                        <div
                            key={`logo-${logo.name}`}
                            className="absolute z-20 animate-orbit"
                            style={{
                                '--duration': `${logo.duration / logo.speed}s`,
                                '--radius': `${logo.radius}px`,
                                // Apply initial position based on startAngle
                                transform: `rotate(${logo.startAngle}deg) translateX(${logo.radius}px) rotate(-${logo.startAngle}deg)`,
                                animationDelay: `${logo.delay}ms`,
                                animationDirection: logo.reverse ? 'reverse' : 'normal',
                                width: `${logo.iconSize}px`,
                                height: `${logo.iconSize}px`
                            } as React.CSSProperties}
                        >
                            <LogoWrapper>
                                <img
                                    src={logo.src}
                                    alt={`${logo.name} Logo`}
                                    className="size-8"
                                />
                            </LogoWrapper>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default IntegrationsAnimation; 