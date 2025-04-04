import { clsx } from 'clsx';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { Menu, Moon, Sparkles, Sun, X } from 'lucide-react'; // Using Sparkles as a placeholder logo
import type React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

// cn utility function for merging Tailwind classes
function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

// Define navigation links (adjust hrefs to match actual section IDs later)
const navLinks = [
    { id: 1, name: 'Home', href: '#hero' }, // Assuming top section is 'hero'
    { id: 2, name: 'How it Works', href: '#how-it-works' },
    { id: 3, name: 'Features', href: '#features' },
    { id: 4, name: 'Pricing', href: '#pricing' },
];

const MAX_WIDTH_DEFAULT = "100%"; // Full width with max constraint applied in CSS
const MAX_WIDTH_SCROLLED = "100%";
const NAV_HEIGHT_OFFSET = 100; // Offset for smooth scroll targeting

// --- Desktop Navigation ---
interface DesktopNavProps {
    activeSection: string;
    onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ activeSection, onLinkClick }) => {
    const navRef = useRef<HTMLUListElement>(null);
    const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set initial position based on the first item (or active if available on load)
        const activeLinkElement = navRef.current?.querySelector(`a[href="#${activeSection}"]`)?.parentElement;
        if (activeLinkElement) {
            const rect = activeLinkElement.getBoundingClientRect();
            const parentRect = navRef.current?.getBoundingClientRect();
            if (parentRect) {
                setUnderlineStyle({
                    left: activeLinkElement.offsetLeft,
                    width: rect.width,
                });
                setIsVisible(true);
            }
        } else if (navRef.current?.firstElementChild) {
            // Fallback to first element if active not found immediately
            const firstLinkElement = navRef.current.firstElementChild as HTMLElement;
            const rect = firstLinkElement.getBoundingClientRect();
            setUnderlineStyle({
                left: firstLinkElement.offsetLeft,
                width: rect.width,
            });
            setIsVisible(true);
        }
    }, []); // Run only once on mount to set initial state

    useEffect(() => {
        // Update underline when activeSection changes
        const activeLinkElement = navRef.current?.querySelector(`a[href="#${activeSection}"]`)?.parentElement;
        if (activeLinkElement) {
            const rect = activeLinkElement.getBoundingClientRect();
            setUnderlineStyle({
                left: activeLinkElement.offsetLeft,
                width: rect.width,
            });
        }
    }, [activeSection]); // Re-run when activeSection changes

    const handleManualUnderlineUpdate = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const targetElement = event.currentTarget.parentElement;
        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            setUnderlineStyle({
                left: targetElement.offsetLeft,
                width: rect.width,
            });
        }
    };


    return (
        <div className="w-full hidden md:block ">
            <ul
                className="relative mx-auto flex w-fit rounded-md h-11 px-2 items-center justify-center"
                ref={navRef}
            >
                {navLinks.map((link) => (
                    <li
                        key={link.id}
                        className={cn(
                            'z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 tracking-tight text-black dark:text-white hover:text-black/80 dark:hover:text-white/80'
                        )}
                    >
                        <a
                            href={link.href}
                            onClick={(e) => {
                                handleManualUnderlineUpdate(e); // Update underline immediately on click
                                onLinkClick(e, link.href); // Trigger smooth scroll
                            }}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
                {isVisible && (
                    <motion.li
                        layoutId="underline" // Added layoutId for smoother animation if needed elsewhere
                        animate={{ left: underlineStyle.left, width: underlineStyle.width }}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        className="absolute inset-0 my-1.5 rounded-md bg-accent/60 border border-border -z-10" // Use theme colors
                    />
                )}
            </ul>
        </div>
    );
};


// --- Mobile Navigation ---
interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
    activeSection: string;
    onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const mobileMenuVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 200, staggerChildren: 0.03 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
};

const backdropVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const listItemVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};


const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, activeSection, onLinkClick }) => {
    const handleMobileLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        onLinkClick(event, href);
        onClose(); // Close menu after clicking a link
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={backdropVariant}
                        transition={{ duration: 0.2 }}
                        onClick={onClose} // Close on backdrop click
                    />

                    {/* Menu Panel */}
                    <motion.div
                        key="mobile-menu-panel"
                        className="fixed inset-x-0 w-[95%] max-w-md mx-auto top-16 bg-background border border-border p-4 rounded-xl shadow-lg z-50" // Use theme colors, positioned from top for better UX
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariant}
                    >
                        <div className="flex flex-col gap-4">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <a href="/" className="flex items-center gap-2">
                                    <Sparkles className="size-7 text-black dark:text-white" />
                                    <p className="text-lg font-semibold text-black dark:text-white">UGC AI</p>
                                </a>
                                <button
                                    onClick={onClose}
                                    className="border border-border rounded-md p-1 cursor-pointer hover:bg-muted" // Use theme color
                                >
                                    <X className="size-5 text-black dark:text-white" />
                                </button>
                            </div>

                            {/* Links */}
                            <motion.ul
                                className="flex flex-col text-sm mb-2 border border-border rounded-md" // Use theme color
                                variants={{ visible: { transition: { staggerChildren: 0.05 } } }} // Stagger list item animation
                            >
                                {navLinks.map(link => (
                                    <motion.li
                                        key={link.id}
                                        className="p-2.5 border-b border-border last:border-b-0" // Use theme color
                                        variants={listItemVariant}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleMobileLinkClick(e, link.href)}
                                            className={cn(
                                                "block w-full underline-offset-4 text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors"
                                            )}
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            {/* Action Button */}
                            <div className="flex flex-col gap-2">
                                <a
                                    href="#" // Replace with actual link or action
                                    className="bg-black dark:bg-white h-9 flex items-center justify-center text-sm font-medium tracking-wide rounded-md text-white dark:text-black w-full px-4 shadow-sm border border-transparent hover:bg-black/90 dark:hover:bg-white/90 transition-colors" // Explicit colors
                                >
                                    Generate Content Now
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};


// --- Theme Toggle Button ---
const ThemeToggle: React.FC = () => {
    // Check if the document has the 'dark' class
    const [isDark, setIsDark] = useState(() => {
        // Check for dark mode preference on initial load
        if (typeof document !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return false;
    });

    // Toggle theme function that actually applies the dark class to the document
    const toggleTheme = () => {
        if (typeof document !== 'undefined') {
            if (isDark) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            setIsDark(!isDark);
        }
    };

    // Initialize theme from localStorage on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    return (
        <button
            onClick={toggleTheme}
            className="relative border border-border hover:bg-muted transition-colors size-7 sm:size-8 rounded-md cursor-pointer flex items-center justify-center"
            aria-label="Toggle theme"
        >
            <Sun className={cn("h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-white transition-all", isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100')} />
            <Moon className={cn("absolute h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-white transition-all", isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0')} />
        </button>
    );
};


// --- Main Navbar Component ---
const Navbar: React.FC = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>(navLinks[0].href.substring(1)); // Default to first link's section

    // Update scroll state
    useEffect(() => {
        return scrollY.on('change', (latest) => {
            setIsScrolled(latest > 10);
        });
    }, [scrollY]);

    // Update active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            let currentSection = activeSection; // Keep current if no section found
            for (const link of navLinks) {
                const sectionId = link.href.substring(1);
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    // Check if section top is near the top of viewport (within NAV_HEIGHT_OFFSET + buffer)
                    // and section bottom is below the top threshold
                    if (rect.top <= NAV_HEIGHT_OFFSET + 50 && rect.bottom >= NAV_HEIGHT_OFFSET - 50) {
                        currentSection = sectionId;
                        break; // Found the active section
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initially

        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array means run once on mount and cleanup on unmount


    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Smooth scroll handler
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        event.preventDefault();
        const sectionId = href.substring(1);
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
            setActiveSection(sectionId); // Update active section immediately for visual feedback

            const offsetTop = sectionElement.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT_OFFSET;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <motion.header
                className={cn(
                    'sticky z-50 mx-auto flex justify-center transition-all duration-300 ease-out',
                    isScrolled ? 'top-2 md:top-4' : 'top-4 md:top-6' // Adjust vertical position when scrolled
                )}
                initial={false} // Don't animate initial load position
                animate={{ top: isScrolled ? '0.5rem' : '1rem' }} // Animate top position based on scroll state
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }} // Matches target site timing
            >
                {/* Animated Width Container */}
                <motion.div
                    initial={{ width: MAX_WIDTH_DEFAULT }}
                    animate={{ width: isScrolled ? MAX_WIDTH_SCROLLED : MAX_WIDTH_DEFAULT }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }} // Matches target site timing
                    className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8" // Added responsive padding and max-width constraint
                >
                    {/* Background and Border Container */}
                    <div
                        className={cn(
                            'mx-auto w-full rounded-md transition-all duration-300 ease-out',
                            isScrolled
                                ? 'px-2 sm:px-3 py-1 border border-border backdrop-blur-lg bg-background/75 shadow-md' // Scrolled styles with responsive padding
                                : 'px-2 sm:px-4 py-2 shadow-none bg-transparent border border-transparent' // Initial styles with responsive padding
                        )}
                    >
                        <div className="flex h-[40px] items-center justify-between w-full"> {/* Added w-full */}
                            {/* Logo */}
                            <a href="/" className="flex items-center gap-1 sm:gap-2 flex-shrink-0 mr-2 sm:mr-4"> {/* Responsive spacing */}
                                <img src="/logo.svg" alt="Logo" className="size-8 rounded-md dark:invert" />
                                {/* Explicit colors */}
                                <p className="text-base sm:text-lg font-semibold text-black dark:text-white hidden sm:block">Reel-Hyp</p> {/* Explicit colors */}
                            </a>

                            {/* Desktop Navigation */}
                            <DesktopNav activeSection={activeSection} onLinkClick={handleLinkClick} />

                            {/* Actions */}
                            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-2 sm:ml-4"> {/* Responsive spacing */}
                                <a
                                    href="#" // Replace with link or action
                                    className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 hidden md:inline-flex items-center justify-center text-xs sm:text-sm h-7 sm:h-8 px-3 sm:px-4 rounded-md font-medium transition-colors shadow-sm border border-transparent" // Explicit colors
                                >
                                    Generate Content Now
                                </a>
                                <ThemeToggle />

                                {/* Mobile Menu Button */}
                                <button
                                    className="md:hidden border border-border size-7 sm:size-8 rounded-md cursor-pointer flex items-center justify-center hover:bg-muted transition-colors" // Responsive sizing
                                    onClick={toggleMobileMenu}
                                    aria-label="Toggle menu"
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="size-4 sm:size-5 text-black dark:text-white" aria-hidden="true" />
                                    ) : (
                                        <Menu className="size-4 sm:size-5 text-black dark:text-white" aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.header>

            {/* Mobile Navigation Menu (Portal/Absolute Positioning) */}
            <MobileNav
                isOpen={isMobileMenuOpen}
                onClose={toggleMobileMenu}
                activeSection={activeSection}
                onLinkClick={handleLinkClick}
            />
        </>
    );
};

export default Navbar; 