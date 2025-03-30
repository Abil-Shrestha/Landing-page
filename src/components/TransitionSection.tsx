import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Custom hook for media queries
const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);

        return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
};

// Testimonial component for larger screens
const TestimonialsDesktop = ({
    isVisible,
    testimonials,
    intervalTime,
    clapTime
}: {
    isVisible: boolean;
    testimonials: Testimonial[];
    intervalTime: number;
    clapTime: number;
}) => {
    return (
        <div className="text-center max-w-3xl px-4">
            <TestimonialRotator
                testimonials={testimonials}
                isVisible={isVisible}
                intervalTime={intervalTime}
                clapTime={clapTime}
                className="text-2xl font-medium text-[var(--text-primary)]"
                authorClassName="text-lg font-medium mt-4 text-[var(--text-primary)]"
                roleClassName="text-sm italic text-[var(--text-secondary)]"
            />
        </div>
    );
};

// Testimonial component for mobile screens
const TestimonialsMobile = ({
    isVisible,
    testimonials,
    intervalTime,
    clapTime
}: {
    isVisible: boolean;
    testimonials: Testimonial[];
    intervalTime: number;
    clapTime: number;
}) => {
    return (
        <div className="text-center max-w-sm px-4">
            <TestimonialRotator
                testimonials={testimonials}
                isVisible={isVisible}
                intervalTime={intervalTime}
                clapTime={clapTime}
                className="text-lg font-medium text-[var(--text-primary)]"
                authorClassName="text-base font-medium mt-3 text-[var(--text-primary)]"
                roleClassName="text-xs italic text-[var(--text-secondary)]"
            />
        </div>
    );
};

// Testimonial rotator component
const TestimonialRotator = ({
    testimonials,
    isVisible,
    intervalTime,
    clapTime,
    className,
    authorClassName,
    roleClassName
}: {
    testimonials: Testimonial[];
    isVisible: boolean;
    intervalTime: number;
    clapTime: number;
    className?: string;
    authorClassName?: string;
    roleClassName?: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Find the longest quote to determine height
    const longestQuote = useMemo(() => {
        return testimonials.reduce((longest, current) =>
            current.quote.length > longest.quote.length ? current : longest
            , testimonials[0]);
    }, [testimonials]);

    // Effect to rotate testimonials
    useEffect(() => {
        if (!isVisible) return;

        const intervalId = setInterval(() => {
            setIsAnimating(true);

            // After clapTime, change the testimonial and reset animation
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                setIsAnimating(false);
            }, clapTime);
        }, intervalTime);

        return () => clearInterval(intervalId);
    }, [isVisible, intervalTime, clapTime, testimonials.length]);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="flex flex-col items-center">
            <div className="relative min-h-[200px] flex items-center justify-center w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        key={`quote-${currentIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isAnimating ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className={`${className} w-full text-center`}
                    >
                        <div>"{currentTestimonial.quote}"</div>
                    </motion.div>
                </div>
            </div>

            <div className="h-[60px] flex flex-col items-center justify-start">
                <motion.div
                    key={`author-${currentIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isAnimating ? 0 : 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className={authorClassName}
                >
                    {currentTestimonial.author}
                </motion.div>

                <motion.div
                    key={`role-${currentIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isAnimating ? 0 : 1 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className={roleClassName}
                >
                    {currentTestimonial.role}{currentTestimonial.company ? `, ${currentTestimonial.company}` : ''}
                </motion.div>
            </div>

            <div className="flex gap-2 mt-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (currentIndex !== index && !isAnimating) {
                                setIsAnimating(true);
                                setTimeout(() => {
                                    setCurrentIndex(index);
                                    setIsAnimating(false);
                                }, clapTime / 2);
                            }
                        }}
                        className={`w-2 h-2 rounded-full transition-all ease-in-out transition-0.3 ${currentIndex === index ? 'bg-[var(--accents-4)] w-4' : 'bg-[var(--accents-2)]'}`}
                        aria-label={`View testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

// Line component with CSS variable support
const Line = ({
    length = "auto",
    color = "var(--accents-8)",
    horizontal = false,
    vertical = false,
    head = 0,
    tail = 0
}: {
    length?: string;
    color?: string;
    horizontal?: boolean;
    vertical?: boolean;
    head?: number;
    tail?: number;
}) => {
    return (
        <div
            className={`relative flex ${horizontal ? 'w-full' : ''} ${vertical ? 'h-full' : ''}`}
            style={{
                flexDirection: vertical ? 'column' : 'row'
            }}
        >
            {head > 0 && (
                <div
                    className={`${horizontal ? 'w-px h-4' : 'h-px w-4'}`}
                    style={{
                        background: color,
                        marginLeft: horizontal ? `${head}px` : 0,
                        marginTop: vertical ? `${head}px` : 0
                    }}
                />
            )}
            <div
                className={`grow ${horizontal ? 'h-px' : 'w-px'}`}
                style={{
                    background: color,
                    width: horizontal ? length : undefined,
                    height: vertical ? length : undefined
                }}
            />
            {tail > 0 && (
                <div
                    className={`${horizontal ? 'w-px h-4' : 'h-px w-4'}`}
                    style={{
                        background: color,
                        marginRight: horizontal ? `${tail}px` : 0,
                        marginBottom: vertical ? `${tail}px` : 0
                    }}
                />
            )}
        </div>
    );
};

// Testimonial data with quotes and authors
type Testimonial = {
    quote: string;
    author: string;
    role: string;
    company?: string;
};

const testimonialsList: Testimonial[] = [
    {
        quote: "This AI UGC ad maker has revolutionized our content strategy. We're creating authentic-looking ads in minutes instead of days.",
        author: "Sarah Johnson",
        role: "Marketing Director",
        company: "BrandGenius"
    },
    {
        quote: "The quality of AI-generated UGC is indistinguishable from real user content. Our conversion rates have increased by 45% since implementation.",
        author: "Michael Chen",
        role: "E-commerce Manager",
        company: "RetailNova"
    },
    {
        quote: "We've cut our ad production costs by 70% while increasing our content output by 5x. This tool is a game-changer for small businesses.",
        author: "Jessica Williams",
        role: "Social Media Strategist",
        company: "GrowthHackers"
    },
    {
        quote: "The platform's ability to match our brand voice while creating authentic UGC-style content is remarkable. Our audience engagement has never been higher.",
        author: "David Rodriguez",
        role: "Brand Manager",
        company: "FusionBrands"
    },
    {
        quote: "As a solo entrepreneur, this AI UGC tool has given me the ability to compete with larger brands. I can now create diverse, high-converting ads at scale.",
        author: "Emma Thompson",
        role: "Founder",
        company: "Artisan Digital"
    }
];

// Main testimonial section component
export const TransitionSection = () => {
    const isLargeScreen = useMediaQuery('(min-width: 1024px)');
    const testimonialRef = useRef<HTMLDivElement>(null);
    const isTestimonialVisible = useInView(testimonialRef, { threshold: 0.2 });

    return (
        <section className="relative z-10 py-16 md:py-24 overflow-hidden bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--text-primary)]">What Our Customers Say</h2>

                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="flex w-full flex-row items-center justify-center gap-12">
                        <div className="hidden md:flex w-full flex-row">
                            <Line
                                length="auto"
                                horizontal={true}
                                tail={16}
                            />
                        </div>
                        <div ref={testimonialRef} className="w-full max-w-4xl mx-auto py-8">
                            {isLargeScreen && (
                                <TestimonialsDesktop
                                    isVisible={isTestimonialVisible}
                                    testimonials={testimonialsList}
                                    intervalTime={6000}
                                    clapTime={800}
                                />
                            )}
                            {!isLargeScreen && (
                                <TestimonialsMobile
                                    isVisible={isTestimonialVisible}
                                    testimonials={testimonialsList}
                                    intervalTime={6000}
                                    clapTime={800}
                                />
                            )}
                        </div>
                        <div className="hidden md:flex w-full flex-row">
                            <Line
                                length="auto"
                                horizontal={true}
                                head={16}
                            />
                        </div>
                    </div>
                    <div className="hidden md:flex h-16">
                        <Line
                            length="auto"
                            vertical={true}
                            head={16}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Transition direction component
export const TransitionDirection = ({ direction }: { direction: 'up' | 'down' }) => {
    useMediaQuery('(min-width: 1024px)');
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Calculate scale based on hover
    const mousePosition = useMousePosition(isHovered, ref, "center");
    const scaleX = useTransform(mousePosition.x, value => isHovered ? 1 + value : 1);

    // Apply spring physics to the animation
    useSpring(scaleX, {
        stiffness: 400,
        damping: 100
    });

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: ref
    });

    const scaleUp = useTransform(scrollYProgress, value => 18 * Math.pow(0.75 * value, 3));
    const scaleDown = useTransform(scrollYProgress, value => -18 * Math.pow(0.75 * (1 - value), 3));

    return (
        <div
            className="flex h-full w-full"
            style={{
                alignItems: direction === "up" ? "flex-end" : "flex-start"
            }}
        >
            <div
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
                ref={ref}
                className="relative h-[225vh] w-screen"
            >
                <div
                    className="sticky top-0 flex h-screen w-full"
                    style={{
                        alignItems: direction === "up" ? "flex-end" : "flex-start"
                    }}
                >
                    <div
                        className="absolute left-0 h-auto w-full"
                        style={{
                            bottom: direction === "up" ? "-5px" : "auto",
                            top: direction === "down" ? "-5px" : "auto"
                        }}
                    >
                        <motion.div
                            className="flex origin-bottom flex-row"
                            style={{
                                scaleY: direction === "up" ? scaleUp : scaleDown,
                                y: direction === "up" ? "0" : "-32vw"
                            }}
                        >
                            <img
                                src="/transition.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="pointer-events-none h-full grow origin-bottom-left"
                                alt="transition-bg"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Custom hook for mouse position
function useMousePosition(isActive: boolean, ref: React.RefObject<HTMLElement>, origin: 'center' | 'top' = 'center') {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!isActive || !ref.current) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + (origin === 'center' ? rect.height / 2 : 0);

            // Normalize values between -1 and 1
            const x = (e.clientX - centerX) / (rect.width / 2);
            const y = (e.clientY - centerY) / (origin === 'center' ? rect.height / 2 : rect.height);

            setPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isActive, ref, origin]);

    return position;
}

export default TransitionSection;
