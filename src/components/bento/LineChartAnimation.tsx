import NumberFlow from '@number-flow/react';
import { parseColor } from '@react-stately/color';
import { animate, motion, useInView } from 'framer-motion';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '../../lib/utils';

// Helper to convert color string (like "var(--secondary)") to RGBA
const resolveColorVariable = (colorString: string): string => {
    if (colorString.startsWith('var(')) {
        // Extract variable name, e.g., --secondary
        const varName = colorString.match(/var\((--[^)]+)\)/)?.[1];
        if (varName) {
            // Get computed style
            const computedColor = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
            if (computedColor) {
                try {
                    // Use parseColor directly
                    return parseColor(computedColor).toString('rgba');
                } catch (e) {
                    console.error(`Failed to parse computed color: ${computedColor}`, e);
                    return 'rgba(128, 128, 128, 1)'; // Fallback grey
                }
            }
        }
    }
    try {
        // Use parseColor directly
        return parseColor(colorString).toString('rgba');
    } catch (e) {
        console.error(`Failed to parse direct color: ${colorString}`, e);
        return 'rgba(128, 128, 128, 1)'; // Fallback grey
    }
};

// Helper to create RGBA with adjusted alpha (uses parseColor directly)
const colorWithAlpha = (baseColor: string, alpha: number): string => {
    try {
        const parsed = parseColor(baseColor); // Already using parseColor correctly here
        return parsed.withChannelValue('alpha', alpha).toString('rgba');
    } catch (e) {
        console.error(`Failed to adjust alpha for color: ${baseColor}`, e);
        return `rgba(128, 128, 128, ${alpha})`; // Fallback grey
    }
};

interface LineChartProps {
    data: number[];
    height?: number;
    width?: number;
    color: string; // Expecting CSS variable string like "var(--secondary)"
    shouldAnimate: boolean;
    startAnimationDelay?: number;
}

// Translated 'd' function
const LineChart: React.FC<LineChartProps> = ({ data, height = 200, width = 600, color: colorVar, shouldAnimate, startAnimationDelay }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    // State to hold the resolved RGBA color
    const [resolvedColor, setResolvedColor] = useState('rgba(128, 128, 128, 1)');

    // Resolve color variable when component mounts or colorVar changes
    useEffect(() => {
        try {
            setResolvedColor(resolveColorVariable(colorVar));
        } catch (e) {
            console.error("Error resolving color var:", e);
            setResolvedColor('rgba(128, 128, 128, 1)'); // Fallback
        }
    }, [colorVar]);

    // Memoize points calculation
    const points = React.useMemo(() => {
        if (!data || data.length === 0) return [];
        const maxValue = Math.max(...data);
        if (maxValue === 0) return data.map((_, index) => ({ x: index / (data.length - 1) * width, y: height })); // All points at bottom if max is 0
        return data.map((value, index) => ({
            x: index / (data.length - 1) * width,
            y: height - (value / maxValue) * height * 0.8 // Adjust vertical scale
        }));
    }, [data, height, width]);

    // Memoize path calculation (using Bezier curves)
    const pathDefinition = React.useMemo(() => {
        if (points.length < 2) return "";
        return points.reduce((path, point, index, arr) => {
            if (index === 0) {
                return `M ${point.x} ${point.y}`;
            }
            const prevPoint = arr[index - 1];
            const nextPoint = arr[index + 1];

            if (index === arr.length - 1) {
                return `${path} L ${point.x} ${point.y}`;
            }

            // Calculate control points for Bezier curve
            const controlPoint1X = prevPoint.x + (point.x - prevPoint.x) * 0.2;
            const controlPoint1Y = prevPoint.y + (point.y - prevPoint.y) * 0.2;
            const controlPoint2X = point.x - (nextPoint.x - prevPoint.x) * 0.2;
            const controlPoint2Y = point.y - (nextPoint.y - prevPoint.y) * 0.2;

            return `${path} C ${controlPoint1X},${controlPoint1Y} ${controlPoint2X},${controlPoint2Y} ${point.x},${point.y}`;
        }, "");
    }, [points]);

    // Memoize center point calculation
    const centerPoint = React.useMemo(() => {
        if (!points || points.length === 0) return { x: width / 2, y: height / 2 }; // Default center
        return points[Math.floor(points.length / 2)];
    }, [points, width, height]);

    // State for animating the pulsating circles
    const [showPulsate, setShowPulsate] = useState(false);
    useEffect(() => {
        if (!shouldAnimate) {
            setShowPulsate(false);
            return;
        }
        const timer = setTimeout(() => {
            setShowPulsate(true);
        }, 1000 * (startAnimationDelay || 0) + 300); // Start after main animation + delay
        return () => clearTimeout(timer);
    }, [shouldAnimate, startAnimationDelay]);

    // Helper to get color with alpha, memoized
    const getColorWithAlpha = useCallback((alpha: number) => colorWithAlpha(resolvedColor, alpha), [resolvedColor]);

    const gradientId = `lineGradient-${React.useId()}`;

    return (
        <svg
            ref={svgRef}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={getColorWithAlpha(0.3)} />
                    <stop offset="100%" stopColor={getColorWithAlpha(0)} />
                </linearGradient>
            </defs>

            {/* Filled area below the line */}
            <motion.path
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: shouldAnimate ? 1 : 0, scale: shouldAnimate ? 1 : 0.95 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: startAnimationDelay }}
                d={`${pathDefinition} L ${width},${height} L 0,${height} Z`}
                fill={`url(#${gradientId})`}
            />

            {/* The line itself */}
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: shouldAnimate ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: startAnimationDelay }}
                d={pathDefinition}
                stroke={resolvedColor} // Use resolved RGBA color
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
            />

            {/* Center point circle */}
            {centerPoint && (
                <motion.circle
                    cx={centerPoint.x}
                    cy={centerPoint.y}
                    r="4"
                    fill={resolvedColor} // Use resolved RGBA color
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: shouldAnimate ? 1 : 0, opacity: shouldAnimate ? 1 : 0 }}
                    transition={{ delay: (startAnimationDelay || 0) + 0.3, duration: 0.4, ease: "backOut" }}
                />
            )}

            {/* Pulsating circles around the center point */}
            {showPulsate && centerPoint && [
                <motion.circle
                    key="pulsate-0"
                    cx={centerPoint.x}
                    cy={centerPoint.y}
                    r="10"
                    stroke={resolvedColor}
                    strokeWidth="2"
                    fill="none"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [0.5, 2], opacity: [0.8, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0, ease: "easeOut", times: [0, 1], repeatDelay: 0 }}
                />,
                <motion.circle
                    key="pulsate-1"
                    cx={centerPoint.x}
                    cy={centerPoint.y}
                    r="10"
                    stroke={resolvedColor}
                    strokeWidth="2"
                    fill="none"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [0.5, 2], opacity: [0.8, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.67, ease: "easeOut", times: [0, 1], repeatDelay: 0 }}
                />,
                <motion.circle
                    key="pulsate-2"
                    cx={centerPoint.x}
                    cy={centerPoint.y}
                    r="10"
                    stroke={resolvedColor}
                    strokeWidth="2"
                    fill="none"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [0.5, 2], opacity: [0.8, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.34, ease: "easeOut", times: [0, 1], repeatDelay: 0 }}
                />
            ]}
        </svg>
    );
};

interface TooltipProps {
    toolTipValues: number[];
    shouldAnimate: boolean;
    startAnimationDelay?: number;
}

// Translated 'C' function
const AnimatedTooltip: React.FC<TooltipProps> = ({ toolTipValues, shouldAnimate, startAnimationDelay }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentValue = toolTipValues[currentIndex];
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!shouldAnimate) {
            setIsVisible(false);
            return;
        }
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000 * (startAnimationDelay || 0));
        return () => clearTimeout(timer);
    }, [shouldAnimate, startAnimationDelay]);

    useEffect(() => {
        if (!isVisible || toolTipValues.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % toolTipValues.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [isVisible, toolTipValues.length]);

    return (
        <div className={cn(
            "transition-opacity duration-300 ease-in-out",
            "absolute top-16 md:top-32 left-[42%] -translate-x-1/2", // Adjusted top position slightly
            "text-sm bg-background border border-border/70 text-foreground", // Use theme colors
            "px-4 py-1 rounded-full h-8 flex items-center justify-center",
            "font-mono shadow-md", // Simpler shadow
            isVisible ? "opacity-100" : "opacity-0"
        )}>
            <NumberFlow
                value={currentValue}
                className="font-mono"
                transformTiming={{ duration: 700, easing: 'ease-out' }}
            />
        </div>
    );
};

interface ThirdBentoAnimationProps {
    data: number[];
    toolTipValues: number[];
    color?: string;
    startAnimationDelay?: number;
    once?: boolean;
}

// Translated 'p' function - the main export
export const ThirdBentoAnimation: React.FC<ThirdBentoAnimationProps> = ({
    data,
    toolTipValues,
    color = "blue", // Default color var
    startAnimationDelay = 0,
    once = false
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once });
    const [shouldAnimate, setShouldAnimate] = useState(false);

    // State to hold the resolved RGBA color for the vertical line
    const [resolvedColor, setResolvedColor] = useState('rgba(128, 128, 128, 1)');

    useEffect(() => {
        try {
            setResolvedColor(resolveColorVariable(color));
        } catch (e) {
            console.error("Error resolving color var for line:", e);
            setResolvedColor('rgba(128, 128, 128, 1)'); // Fallback
        }
    }, [color]);

    useEffect(() => {
        setShouldAnimate(isInView);
    }, [isInView]);

    const gradientStyle = {
        backgroundImage: `linear-gradient(to bottom, ${resolvedColor}, ${colorWithAlpha(resolvedColor, 0)})`
    } as React.CSSProperties;

    return (
        <div
            ref={ref}
            className="relative flex size-full items-center justify-center h-[300px] pt-10 overflow-hidden"
        // style={{ '--color': resolvedColor }} // Pass resolved color via style if needed, but we resolve internally
        >
            {/* Vertical line indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: shouldAnimate ? 1 : 0 }}
                transition={{ duration: 0.5, delay: (startAnimationDelay || 0) + 0.3, ease: "easeOut" }}
                className="absolute top-[60%] -translate-x-1/2 w-[2px] h-32 left-[280px]"
                style={gradientStyle} // Apply gradient directly
            />

            <AnimatedTooltip
                toolTipValues={toolTipValues}
                shouldAnimate={shouldAnimate}
                startAnimationDelay={startAnimationDelay}
            />

            <LineChart
                data={data}
                height={200}
                width={600}
                color={color} // Pass the original CSS variable string
                shouldAnimate={shouldAnimate}
                startAnimationDelay={startAnimationDelay}
            />
        </div>
    );
}; 