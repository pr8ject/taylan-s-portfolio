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

// Asymmetric layout for desktop: items by project index + grid column placement (12-col grid)
const layoutRows: { idx: number; col: string; align?: string }[][] = [
  [{ idx: 0, col: "1 / 7" }],
  [{ idx: 1, col: "1 / 4" }, { idx: 2, col: "6 / 9" }, { idx: 3, col: "10 / 13" }],
  [{ idx: 4, col: "5 / 12", align: "end" }],
  [{ idx: 5, col: "1 / 4" }, { idx: 6, col: "7 / 13" }],
  [{ idx: 7, col: "1 / 4" }, { idx: 8, col: "4 / 9" }, { idx: 9, col: "10 / 13" }],
  [{ idx: 10, col: "2 / 7" }, { idx: 11, col: "10 / 13" }],
];

// Hover images: slideshows or single hero images per project id
const hoverImages: Record<number, string[]> = {
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

projects.forEach((p) => {
  if (p.image && !hoverImages[p.id]) {
    hoverImages[p.id] = [p.image];
  }
});

// ─── DESKTOP: Floating image that follows cursor on hover ───
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
      className="hidden md:block fixed pointer-events-none z-40 w-56 h-40 overflow-hidden transition-all duration-300 ease-out rounded-sm"
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
            <span className="text-xs text-muted-foreground tracking-[0.15em]">CASE STUDY</span>
          </div>
        </div>
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <span className="text-xs text-muted-foreground tracking-[0.15em]">CASE STUDY</span>
        </div>
      )}
    </div>
  );
};

// Sticky side names — desktop only
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

// Hero section
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="w-full flex items-center justify-center px-8 md:px-32 lg:px-48">
      <h1 className="font-display text-[48px] md:text-[120px] lg:text-[170px] font-black text-foreground leading-[0.88] tracking-[-0.03em] text-center">
        Experience
        <br />
        Is Everything.
      </h1>
    </div>
  </section>
);

// ─── MOBILE: Two-panel snap layout (wendyandrade.co style) ───
// Top titles and bottom projects alternate on each swipe
const mobileTopSlots = [
  "Experience\nIs Everything.",
  ...projects.filter((p) => p.type === "title").map((p) => p.title),
];

const mobileBottomSlots = projects.filter((p) => p.type === "image");

// Build alternating steps: each step defines { topIdx, bottomIdx, which changed }
const mobileSteps: { topIdx: number; bottomIdx: number }[] = [];
{
  let t = 0;
  let b = 0;
  mobileSteps.push({ topIdx: t, bottomIdx: b }); // initial
  const maxSteps = (mobileTopSlots.length + mobileBottomSlots.length) * 2;
  let swapTop = true;
  for (let i = 0; i < maxSteps && (t < mobileTopSlots.length - 1 || b < mobileBottomSlots.length - 1); i++) {
    if (swapTop && t < mobileTopSlots.length - 1) {
      t++;
    } else if (!swapTop && b < mobileBottomSlots.length - 1) {
      b++;
    } else if (t < mobileTopSlots.length - 1) {
      t++;
    } else if (b < mobileBottomSlots.length - 1) {
      b++;
    } else break;
    mobileSteps.push({ topIdx: t, bottomIdx: b });
    swapTop = !swapTop;
  }
}

const MobileSnapLayout = ({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) => {
  const [step, setStep] = useState(0);
  // dragProgress: 0 = idle, -1 = fully dragged toward previous, +1 = fully dragged toward next
  const [dragProgress, setDragProgress] = useState(0);
  // After content swap, fade new content in
  const [fadeIn, setFadeIn] = useState(false);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const committed = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const DRAG_THRESHOLD = 100; // px to reach full fade-out & commit

  const currentStep = mobileSteps[step];
  const topTitle = mobileTopSlots[currentStep.topIdx];
  const bottomItem = mobileBottomSlots[currentStep.bottomIdx];

  // Figure out which panel changes for a given direction
  const getChangingPanel = useCallback((fromStep: number, direction: 1 | -1): "top" | "bottom" => {
    const nextIdx = fromStep + direction;
    if (nextIdx < 0 || nextIdx >= mobileSteps.length) return "top";
    const curr = mobileSteps[fromStep];
    const next = mobileSteps[nextIdx];
    return curr.topIdx !== next.topIdx ? "top" : "bottom";
  }, []);

  // Determine which panel is affected by current drag
  const dragDirection: 1 | -1 = dragProgress >= 0 ? 1 : -1;
  const changingPanel = getChangingPanel(step, dragDirection);

  // Compute opacity: 1 when idle, fades to 0 as |dragProgress| approaches 1
  const changingOpacity = fadeIn
    ? 1
    : Math.max(0, 1 - Math.abs(dragProgress));

  // Touch handlers — drag-driven
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      isDragging.current = true;
      committed.current = false;
      setFadeIn(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || committed.current) return;
      e.preventDefault(); // prevent pull-to-refresh & scroll
      const delta = touchStartY.current - e.touches[0].clientY;
      // Normalize: delta > 0 = swiping up (next), delta < 0 = swiping down (previous)
      const progress = Math.max(-1, Math.min(1, delta / DRAG_THRESHOLD));

      // Don't allow dragging past bounds
      const nextIdx = step + (progress >= 0 ? 1 : -1);
      if (nextIdx < 0 || nextIdx >= mobileSteps.length) {
        setDragProgress(progress * 0.3); // rubber-band feel at edges
        return;
      }
      setDragProgress(progress);
    };

    const handleTouchEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;

      const absDrag = Math.abs(dragProgress);
      const direction: 1 | -1 = dragProgress >= 0 ? 1 : -1;
      const nextIdx = step + direction;

      if (absDrag > 0.4 && nextIdx >= 0 && nextIdx < mobileSteps.length) {
        // Commit: snap to full fade-out, swap content, fade in
        committed.current = true;
        setDragProgress(direction); // fully faded out
        // After a brief moment, swap content and fade in
        setTimeout(() => {
          setStep(nextIdx);
          setDragProgress(0);
          setFadeIn(true);
          // Remove fadeIn flag after transition completes
          setTimeout(() => setFadeIn(false), 350);
        }, 80);
      } else {
        // Snap back — rubber band to idle
        setDragProgress(0);
      }
    };

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });
    el.addEventListener("touchcancel", handleTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
      el.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [step, dragProgress, getChangingPanel]);

  // Lock body scroll & prevent pull-to-refresh
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    return () => {
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";
    };
  }, []);

  // Compute per-panel opacity
  const topOpacity = changingPanel === "top" ? changingOpacity : 1;
  const bottomOpacity = changingPanel === "bottom" ? changingOpacity : 1;
  // Transition only during fade-in (after content swap), not during drag
  const transitionStyle = fadeIn ? "opacity 0.35s ease-out" : "none";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex flex-col"
      style={{ touchAction: "none", overscrollBehavior: "none" }}
    >
      {/* ─── TOP PANEL: Big title ─── */}
      <div className="flex-1 flex items-center justify-center px-8 overflow-hidden">
        <h1
          className="font-display text-[42px] font-black text-foreground leading-[0.88] tracking-[-0.03em] text-center whitespace-pre-line"
          style={{ opacity: topOpacity, transition: transitionStyle }}
        >
          {topTitle}
        </h1>
      </div>

      {/* ─── NAME BAR: Fixed middle ─── */}
      <div className="flex items-center justify-between px-6 py-4">
        <span className="font-display text-sm font-bold tracking-[0.2em] text-foreground">
          ÖZGÜR TAYLAN
        </span>
        <span className="font-display text-sm font-bold tracking-[0.2em] text-foreground">
          ÇELİK
        </span>
      </div>

      {/* ─── BOTTOM PANEL: Project image/card ─── */}
      <div
        className="flex-1 flex items-center justify-center px-8 overflow-hidden"
        onClick={() => bottomItem.link && onNavigate(bottomItem.link)}
      >
        <div
          className="flex flex-col items-center"
          style={{ opacity: bottomOpacity, transition: transitionStyle }}
        >
          {bottomItem.image ? (
            <img
              src={bottomItem.image}
              alt={bottomItem.title}
              className="w-48 h-36 object-cover rounded-sm mb-4"
            />
          ) : (
            <div className="w-48 h-36 bg-muted rounded-sm mb-4 flex items-center justify-center">
              <span className="text-[10px] text-muted-foreground tracking-[0.15em]">
                CASE STUDY
              </span>
            </div>
          )}
          <h2 className="font-display text-[18px] font-light text-foreground leading-[1.1] text-center">
            {bottomItem.title}
          </h2>
          <span className="block text-[11px] text-muted-foreground tracking-[0.12em] uppercase mt-1 text-center">
            {bottomItem.category}
          </span>
          {bottomItem.link && (
            <span className="text-[11px] text-muted-foreground tracking-[0.12em] uppercase mt-3">
              View →
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── DESKTOP: Asymmetric grid with hover interactions ───
const DesktopProjectItem = ({
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
        <div className="w-44 h-28 mb-3 overflow-hidden rounded-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {hoverImages[item.id] ? (
            <img
              src={hoverImages[item.id][0]}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-[10px] text-muted-foreground tracking-[0.15em]">CASE STUDY</span>
            </div>
          )}
        </div>
        <h2 className="font-display text-[22px] lg:text-[26px] font-light text-foreground leading-[1] tracking-[-0.01em] transition-colors duration-300 group-hover:text-muted-foreground">
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
      <h2 className="font-display text-[48px] lg:text-[64px] font-black text-foreground leading-[0.88] tracking-[-0.03em] whitespace-pre-line transition-colors duration-300 group-hover:text-muted-foreground">
        {item.title}
      </h2>
      <span className="block text-xs text-muted-foreground tracking-[0.1em] mt-3">
        {item.category}
      </span>
    </div>
  );
};

const DesktopGrid = ({
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
  <div className="pb-12 px-12 lg:px-20">
    {layoutRows.map((row, rowIdx) => (
      <div
        key={rowIdx}
        className="grid py-14 items-end"
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
              <DesktopProjectItem
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
);

// ─── Content block rendered twice for infinite scroll (desktop only) ───
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
    <DesktopGrid
      onTitleHover={onTitleHover}
      onTitleLeave={onTitleLeave}
      onMouseMove={onMouseMove}
      onNavigate={onNavigate}
    />
  </>
);

const Index = () => {
  const firstBlockRef = useRef<HTMLDivElement>(null);
  const isResettingRef = useRef(false);
  const [hoveredTitle, setHoveredTitle] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { navigateTo } = usePageTransition();

  // Detect mobile (< 768px) — check synchronously before first paint
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Intro / onboarding — desktop only
  const [introActive, setIntroActive] = useState(() => typeof window !== "undefined" && window.innerWidth >= 768);
  const [introFading, setIntroFading] = useState(false);
  const introTriggered = useRef(false);

  const dismissIntro = useCallback(() => {
    if (introTriggered.current) return;
    introTriggered.current = true;
    setIntroFading(true);
    setTimeout(() => {
      setIntroActive(false);
    }, 1200);
  }, []);

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

  // On mobile, render the snap layout directly (no infinite scroll)
  if (isMobile) {
    return <MobileSnapLayout onNavigate={navigateTo} />;
  }

  return (
    <>
      {/* Intro overlay — desktop only */}
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
            className="font-display text-[120px] lg:text-[170px] font-black text-foreground leading-[0.88] tracking-[-0.03em] text-center px-8"
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

      {/* Sticky side names — desktop only */}
      <StickyNames />

      {/* Floating hover image — desktop only */}
      <HoverImage mousePos={mousePos} visible={hoveredTitle !== null} hoveredId={hoveredTitle} />

      <div className="overflow-x-hidden">
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
          onNavigate={navigateTo}
        />
      </div>
    </>
  );
};

export default Index;
