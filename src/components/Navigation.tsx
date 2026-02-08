import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePageTransition } from "./PageTransition";

const Navigation = () => {
  const [homeHovered, setHomeHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const { navigateTo } = usePageTransition();
  const isAbout = location.pathname === "/about";
  const isCaseStudy = location.pathname !== "/" && location.pathname !== "/about";

  const handleNav = (path: string) => {
    if (location.pathname === path) return;
    navigateTo(path);
  };

  // Case study pages have their own nav — hide global nav
  if (isCaseStudy) {
    return null;
  }

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

  // Default nav with photo card
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center h-20 md:h-24">
          {/* Photo card stack */}
          <button
            onClick={() => handleNav("/about")}
            className="relative w-[88px] h-[112px] md:w-24 md:h-[128px] shrink-0 group mt-[10vh]"
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
