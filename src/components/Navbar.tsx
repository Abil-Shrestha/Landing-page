
import React, { useState, useRef, useEffect } from "react";
import { useScroll, motion, AnimatePresence } from "@react-three/drei";
import { cn } from "@/lib/utils";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { id: "hero", name: "Home", href: "#hero" },
  { id: "features", name: "Features", href: "#features" },
  { id: "pricing", name: "Pricing", href: "#pricing" },
  { id: "about", name: "About", href: "#about" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navRef = useRef<HTMLUListElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [skipScrollUpdate, setSkipScrollUpdate] = useState(false);

  // Handle scroll to update active section and navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar appearance
      setIsScrolled(window.scrollY > 10);

      // Skip active section update if user just clicked a nav link
      if (skipScrollUpdate) return;

      // Find the current active section
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(link.id);
            updateIndicator(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skipScrollUpdate]);

  // Initialize indicator position
  useEffect(() => {
    initializeIndicator();
  }, []);

  const initializeIndicator = () => {
    if (!navRef.current) return;
    
    const firstLink = navRef.current.querySelector(`[href="#${navLinks[0].id}"]`);
    if (firstLink) {
      const parent = firstLink.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        setIndicatorStyle({
          left: parent.offsetLeft,
          width: rect.width,
        });
      }
    }
  };

  const updateIndicator = (id: string) => {
    if (!navRef.current) return;
    
    const link = navRef.current.querySelector(`[href="#${id}"]`);
    if (link) {
      const parent = link.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        setIndicatorStyle({
          left: parent.offsetLeft,
          width: rect.width,
        });
      }
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // Update indicator
    updateIndicator(id);
    setActiveSection(id);
    
    // Skip scroll updates briefly while scrolling programmatically
    setSkipScrollUpdate(true);
    
    // Scroll to section
    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
    
    // Close mobile menu if open
    setMobileMenuOpen(false);
    
    // Re-enable scroll updates after animation
    setTimeout(() => {
      setSkipScrollUpdate(false);
    }, 500);
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={cn(
      "sticky z-50 flex justify-center transition-all duration-300",
      isScrolled ? "top-6" : "top-4"
    )}>
      <motion.div
        initial={{ width: "70rem" }}
        animate={{ width: isScrolled ? "800px" : "70rem" }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className={cn(
          "mx-auto max-w-7xl rounded-2xl transition-all duration-300 xl:px-0",
          isScrolled ? "px-2 border border-border backdrop-blur-lg bg-background/75" : "shadow-none px-7"
        )}>
          <div className="flex h-[56px] items-center justify-between p-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="size-7 md:size-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
              <p className="text-lg font-semibold text-primary">Digital Experience</p>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul 
                className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center"
                ref={navRef}
              >
                {navLinks.map(link => (
                  <NavLink 
                    key={link.id}
                    href={link.href}
                    isActive={activeSection === link.id}
                    onClick={(e) => handleNavLinkClick(e, link.id)}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <motion.li
                  animate={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }}
                  className="absolute inset-0 my-1.5 rounded-full bg-accent/60 border border-border"
                />
              </ul>
            </div>
            
            {/* Right Side Actions */}
            <div className="flex flex-row items-center gap-1 md:gap-3 shrink-0">
              <div className="flex items-center space-x-6">
                <Button className="hidden md:flex text-sm font-normal tracking-wide rounded-full" asChild>
                  <a href="#">Try for free</a>
                </Button>
              </div>
              <ThemeToggle />
              <button
                className="md:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-x-0 w-[95%] mx-auto bottom-3 bg-background border border-border p-4 rounded-xl shadow-lg z-50"
              initial={{ opacity: 0, y: 100 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  damping: 15,
                  stiffness: 200,
                }
              }}
              exit={{ 
                opacity: 0, 
                y: 100,
                transition: { duration: 0.1 } 
              }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <a href="/" className="flex items-center gap-3">
                    <div className="size-7 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                    <p className="text-lg font-semibold text-primary">Digital Experience</p>
                  </a>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="border border-border rounded-md p-1 cursor-pointer"
                  >
                    <X className="size-5" />
                  </button>
                </div>
                
                <motion.ul className="flex flex-col text-sm mb-4 border border-border rounded-md">
                  {navLinks.map(link => (
                    <motion.li 
                      key={link.id}
                      className="p-2.5 border-b border-border last:border-b-0"
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavLinkClick(e, link.id)}
                        className={cn(
                          "underline-offset-4 hover:text-primary/80 transition-colors",
                          activeSection === link.id ? "text-primary font-medium" : "text-primary/60"
                        )}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <div className="flex flex-col gap-2">
                  <Button className="h-8 w-full text-sm font-normal tracking-wide rounded-full" asChild>
                    <a href="#">Try for free</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
