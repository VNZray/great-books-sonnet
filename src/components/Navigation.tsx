import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Poem", href: "#poem" },
  //   { label: "Story", href: "#story" },
  { label: "Summary", href: "#summary" },
  { label: "Reflection", href: "#reflection" },
  { label: "Modern", href: "#modern" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "poem",
        // "story",
        "summary",
        "reflection",
        "modern",
      ];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="font-['Playfair_Display'] text-xl font-bold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
          >
            Sonnet 18
          </button>

          {/* Navigation items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`font-['Inter'] text-sm tracking-wide transition-colors cursor-pointer ${
                  activeSection === item.href.slice(1)
                    ? "text-amber-400"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu indicator */}
          <div className="md:hidden">
            <span className="text-amber-400 text-sm font-['Inter']">
              {
                navItems.find((item) => item.href.slice(1) === activeSection)
                  ?.label
              }
            </span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
