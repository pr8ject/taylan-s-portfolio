import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePageTransition } from "./PageTransition";

const navLinks = [
  { name: "WORK", path: "/work" },
  { name: "RESEARCH", path: "/research" },
  { name: "ABOUT", path: "/about" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const { navigateTo } = usePageTransition();
  const isAbout = location.pathname === "/about";

  const handleNav = (path: string) => {
    if (location.pathname === path) return;
    setIsOpen(false);
    navigateTo(path);
  };

  const [homeHovered, setHomeHovered] = useState(false);

  // About page: minimal nav with just "Home" button
  if (isAbout) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center h-20 md:h-24">
            <button
              onClick={() => handleNav("/")}
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              className="flex items-center gap-1 text-white font-bold text-base md:text-lg tracking-wide hover:opacity-70 transition-opacity"
            >
              <ChevronLeft size={20} strokeWidth={3} />
              {homeHovered ? "Country roads, take me home" : "Home"}
            </button>
          </div>
        </div>
      </nav>
    );
  }

  // Default nav for all other pages
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Photo card stack */}
          <button
            onClick={() => handleNav("/about")}
            className="relative w-14 h-[72px] md:w-16 md:h-20 shrink-0 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Back card — blue info card */}
            <div
              className={cn(
                "absolute inset-0 rounded-xl bg-[#2C42E7] shadow-sm transition-all duration-500 ease-out overflow-hidden",
                isHovered
                  ? "rotate-[6deg] translate-x-2 translate-y-1 opacity-100"
                  : "rotate-0 translate-x-0 translate-y-0 opacity-0"
              )}
            >
              <div className="p-2 pt-6 flex flex-col gap-0.5">
                <span className="text-[6px] md:text-[7px] font-bold text-white leading-tight">
                  UX in
                </span>
                <span className="text-[6px] md:text-[7px] font-bold text-white leading-tight">
                  Fintech.
                </span>
                <span className="text-[6px] md:text-[7px] font-bold text-white leading-tight mt-1">
                  Design the
                </span>
                <span className="text-[6px] md:text-[7px] font-bold text-white leading-tight">
                  way.
                </span>
              </div>
            </div>

            {/* Front card — photo */}
            <div
              className={cn(
                "absolute inset-0 rounded-xl bg-muted overflow-hidden grayscale shadow-sm transition-transform duration-500 ease-out",
                isHovered ? "-rotate-3 -translate-x-0.5" : "rotate-0 translate-x-0"
              )}
            >
              <img
                src="/placeholder.svg"
                alt="Özgür Taylan Çelik"
                className="w-full h-full object-cover"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks
              .filter((link) => link.path !== "/about")
              .map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={cn(
                    "relative font-sans text-xs font-light tracking-widest text-muted-foreground transition-colors hover:text-foreground",
                    "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-foreground after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    location.pathname === link.path && "text-foreground after:scale-x-100"
                  )}
                >
                  {link.name}
                </button>
              ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks
            .filter((link) => link.path !== "/about")
            .map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={cn(
                  "font-sans text-sm font-light tracking-widest text-muted-foreground transition-colors hover:text-foreground text-left",
                  location.pathname === link.path && "text-foreground"
                )}
              >
                {link.name}
              </button>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
