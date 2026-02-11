import { useState, useEffect, useRef, useCallback } from "react";
import { usePageTransition } from "@/components/PageTransition";

// Project data — mix of typographic titles and image cards
const projects = [
  { id: 1, title: "Redefining\nFinance.", category: "Fintech UX", type: "title" as const, link: "", image: "" },
  { id: 2, title: "Mobile Banking", category: "User Research, 2024", type: "image" as const, link: "", image: "" },
  { id: 3, title: "Hayvanât", category: "Website Redesign, UX Research", type: "image" as const, link: "/hayvanat", image: "/images/hayvanat/hayvanat-web.png" },
  { id: 4, title: "Wealth Management", category: "Case Study, 2024", type: "image" as const, link: "", image: "" },
  { id: 5, title: "Trust By\nDesign.", category: "UX Strategy", type: "title" as const, link: "/trust-by-design", image: "" },
  { id: 6, title: "Design Systems", category: "Product Design, 2023", type: "image" as const, link: "", image: "" },
  { id: 7, title: "Beyond\nThe Screen.", category: "Service Design", type: "title" as const, link: "/beyond-the-screen", image: "" },
  { id: 8, title: "Payment Flow", category: "UX Research, 2023", type: "image" as const, link: "", image: "" },
  { id: 9, title: "Human\nCentered.", category: "Design Thinking", type: "title" as const, link: "", image: "" },
  { id: 10, title: "OTC Options Platform", category: "AI Hackathon, Jury Special Prize", type: "image" as const, link: "/otc-hackathon", image: "" },
  { id: 11, title: "Always\nLearning.", category: "Personal Growth", type: "title" as const, link: "", image: "" },
  { id: 12, title: "Accessibility", category: "Inclusive Design, 2023", type: "image" as const, link: "", image: "" },
];

// Asymmetric layout: each row defines items by project index + grid column placement (12-col grid)
const layoutRows: { idx: number; col: string; align?: string }[][] = [
  // Row 1: motto left-heavy
  [{ idx: 0, col: "1 / 7" }],
  // Row 2: 3 case studies spread with gap in middle
  [{ idx: 1, col: "1 / 4" }, { idx: 2, col: "6 / 9" }, { idx: 3, col: "10 / 13" }],
  // Row 3: motto offset right
  [{ idx: 4, col: "5 / 12", align: "end" }],
  // Row 4: case study left + motto right, wide gap
  [{ idx: 5, col: "1 / 4" }, { idx: 6, col: "7 / 13" }],
  // Row 5: 4 items tight — case study, motto, gap, case study, case study
  [{ idx: 7, col: "1 / 4" }, { idx: 8, col: "4 / 9" }, { idx: 9, col: "10 / 13" }],
  // Row 6: motto left + case study far right
  [{ idx: 10, col: "2 / 7" }, { idx: 11, col: "10 / 13" }],
];

// Hover images: slideshows or single hero images per project id
const hoverImages: Record<number, string[]> = {
  // Slideshows
  5: [
    "/images/trust-by-design/slide-1.jpg",
    "/images/trust-by-design/slide-2.jpg",
    "/images/trust-by-design/slide-3.jpg",
    "/images/trust-by-design/slide-4.jpg",
    "/images/trust-by-design/slide-5.jpg",
  ],
  7: [
    "/images/beyond-the-screen/slide-1.jpg",
    "/images/beyond-the-screen/slide-2.jpg",
    "/images/beyond-the-screen/slide-3.jpg",
    "/images/beyond-the-screen/slide-4.jpg",
  ],
};

// Build hover images from project data (single hero images)
projects.forEach((p) => {
  if (p.image && !hoverImages[p.id]) {
    hoverImages[p.id] = [p.image];
  }
});

// Floating image that follows the cursor when hovering any item
const HoverImage = ({
  mousePos,
  visible,
  hoveredId,
}: {
  mousePos: { x: number; y: number };
  visible: boolean;
  hoveredId: number | null;
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = hoveredId !== null ? hoverImages[hoveredId] : undefined;
  const isSlideshow = images && images.length > 1;

  useEffect(() => {
    if (!visible || !isSlideshow) {
      setSlideIndex(0);
      return;
    }
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [visible, isSlideshow, images]);

  return (
    <div
      className="fixed pointer-events-none z-40 w-56 h-40 overflow-hidden transition-all duration-300 ease-out rounded-sm"
      style={{
        left: mousePos.x + 16,
        top: mousePos.y - 80,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
      }}
    >
      {images ? (
        <div className="relative w-full h-full">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Slide ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: i === slideIndex ? 1 : 0 }}
            />
          ))}
          <div className="absolute inset-0 w-full h-full bg-muted flex items-center justify-center -z-10">
            <span className="text-xs text-muted-foreground tracking-[0.15em]">
              CASE STUDY
            </span>
          </div>
        </div>
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <span className="text-xs text-muted-foreground tracking-[0.15em]">
            CASE STUDY
          </span>
        </div>
      )}
    </div>
  );
};

// Sticky side names with x-ray blend effect
const StickyNames = () => (
  <>
    <div
      className="hidden md:flex fixed left-6 lg:left-10 top-0 bottom-0 z-40 items-center pointer-events-none"
      style={{ mixBlendMode: "difference" }}
    >
      <span className="font-display text-xl lg:text-2xl xl:text-3xl font-bold tracking-[0.2em] text-white">
        ÖZGÜR TAYLAN
      </span>
    </div>
    <div
      className="hidden md:flex fixed right-6 lg:right-10 top-0 bottom-0 z-40 items-center pointer-events-none"
      style={{ mixBlendMode: "difference" }}
    >
      <span className="font-display text-xl lg:text-2xl xl:text-3xl font-bold tracking-[0.2em] text-white">
        ÇELİK
      </span>
    </div>
  </>
);

// Hero section — big statement centered
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="w-full flex items-center justify-center px-16 md:px-32 lg:px-48">
      <h1 className="font-display text-[64px] md:text-[120px] lg:text-[170px] font-black text-foreground leading-[0.88] tracking-[-0.03em] text-center">
        Experience
        <br />
        Is Everything.
      </h1>
    </div>
  </section>
);

// Render a single project item (either motto title or case study title)
const ProjectItem = ({
  item,
  onTitleHover,
  onTitleLeave,
  onMouseMove,
  onNavigate,
}: {
  item: (typeof projects)[number];
  onTitleHover: (id: number) => void;
  onTitleLeave: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onNavigate: (path: string) => void;
}) => {
  if (item.type === "image") {
    return (
      <div
        className={`group flex flex-col ${item.link ? "cursor-pointer" : ""}`}
        onClick={() => item.link && onNavigate(item.link)}
      >
        {/* Hero thumbnail — revealed on hover */}
        <div className="w-36 h-24 md:w-44 md:h-28 mb-3 overflow-hidden rounded-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {hoverImages[item.id] ? (
            <img
              src={hoverImages[item.id][0]}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-[10px] text-muted-foreground tracking-[0.15em]">
                CASE STUDY
              </span>
            </div>
          )}
        </div>
        <h2 className="font-display text-[18px] md:text-[22px] lg:text-[26px] font-bold text-foreground leading-[1] tracking-[-0.01em] transition-colors duration-300 group-hover:text-muted-foreground">
          <span className="relative inline-block">
            {item.title}
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-foreground origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </span>
        </h2>
        <span className="block text-xs text-muted-foreground tracking-[0.1em] mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {item.category}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`group ${item.link ? "cursor-pointer" : ""}`}
      onMouseEnter={() => onTitleHover(item.id)}
      onMouseLeave={onTitleLeave}
      onMouseMove={onMouseMove}
      onClick={() => item.link && onNavigate(item.link)}
    >
      <h2 className="font-display text-[36px] md:text-[48px] lg:text-[64px] font-black text-foreground leading-[0.88] tracking-[-0.03em] whitespace-pre-line transition-colors duration-300 group-hover:text-muted-foreground">
        {item.title}
      </h2>
      <span className="block text-xs text-muted-foreground tracking-[0.1em] mt-3">
        {item.category}
      </span>
    </div>
  );
};

// Full content block (hero + asymmetric grid) — rendered twice for infinite scroll
const ContentBlock = ({
  onTitleHover,
  onTitleLeave,
  onMouseMove,
  onNavigate,
}: {
  onTitleHover: (id: number) => void;
  onTitleLeave: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onNavigate: (path: string) => void;
}) => (
  <>
    <HeroSection />
    <div className="pb-12 px-6 md:px-12 lg:px-20">
      {layoutRows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="grid py-8 md:py-14 items-end"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.5rem",
          }}
        >
          {row.map((cell) => {
            const item = projects[cell.idx];
            return (
              <div
                key={item.id}
                style={{
                  gridColumn: cell.col,
                  justifySelf: cell.align || "start",
                }}
              >
                <ProjectItem
                  item={item}
                  onTitleHover={onTitleHover}
                  onTitleLeave={onTitleLeave}
                  onMouseMove={onMouseMove}
                  onNavigate={onNavigate}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  </>
);

const Index = () => {
  const firstBlockRef = useRef<HTMLDivElement>(null);
  const isResettingRef = useRef(false);
  const [hoveredTitle, setHoveredTitle] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { navigateTo } = usePageTransition();

  // Intro / onboarding state
  const [introActive, setIntroActive] = useState(true);
  const [introFading, setIntroFading] = useState(false);
  const introTriggered = useRef(false);

  const dismissIntro = useCallback(() => {
    if (introTriggered.current) return;
    introTriggered.current = true;
    setIntroFading(true);
    // After fade-out animation completes, remove overlay and unlock scroll
    setTimeout(() => {
      setIntroActive(false);
    }, 1200);
  }, []);

  // Auto-dismiss after 3s, or on mouse move / scroll / touch
  useEffect(() => {
    if (!introActive || introFading) return;

    const timer = setTimeout(dismissIntro, 3000);

    const handleInteraction = () => dismissIntro();
    window.addEventListener("mousemove", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [introActive, introFading, dismissIntro]);

  // Lock scroll during intro
  useEffect(() => {
    if (introActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [introActive]);

  const handleTitleHover = useCallback((id: number) => setHoveredTitle(id), []);
  const handleTitleLeave = useCallback(() => setHoveredTitle(null), []);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY }),
    []
  );

  // Infinite scroll: reset when scrolled past the first copy
  const handleScroll = useCallback(() => {
    const firstBlock = firstBlockRef.current;
    if (!firstBlock || isResettingRef.current) return;

    const blockHeight = firstBlock.offsetHeight;
    const scrollTop = window.scrollY;

    if (scrollTop >= blockHeight) {
      isResettingRef.current = true;
      window.scrollTo(0, scrollTop - blockHeight);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isResettingRef.current = false;
        });
      });
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "";
    };
  }, [handleScroll]);

  return (
    <>
      {/* Intro overlay */}
      {introActive && (
        <div
          className="fixed inset-0 z-[60] bg-background flex items-center justify-center cursor-pointer"
          style={{
            opacity: introFading ? 0 : 1,
            transition: "opacity 1.2s ease-out",
          }}
          onClick={dismissIntro}
        >
          <h1
            className="font-display text-[64px] md:text-[120px] lg:text-[170px] font-black text-foreground leading-[0.88] tracking-[-0.03em] text-center px-8"
            style={{
              opacity: introFading ? 0 : 1,
              transform: introFading ? "scale(0.96)" : "scale(1)",
              transition: "opacity 0.8s ease-out, transform 1.2s ease-out",
            }}
          >
            Experience
            <br />
            Is Everything.
          </h1>
        </div>
      )}

      {/* Sticky side names with x-ray blend */}
      <StickyNames />

      {/* Floating hover image */}
      <HoverImage mousePos={mousePos} visible={hoveredTitle !== null} hoveredId={hoveredTitle} />

      <div>
        {/* First copy */}
        <div ref={firstBlockRef}>
          <ContentBlock
            onTitleHover={handleTitleHover}
            onTitleLeave={handleTitleLeave}
            onMouseMove={handleMouseMove}
            onNavigate={navigateTo}
          />
        </div>

        {/* Second copy for seamless loop */}
        <ContentBlock
          onTitleHover={handleTitleHover}
          onTitleLeave={handleTitleLeave}
          onMouseMove={handleMouseMove}
        />
      </div>
    </>
  );
};

export default Index;
