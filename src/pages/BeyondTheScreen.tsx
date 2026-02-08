import { usePageTransition } from "@/components/PageTransition";
import NdaGate from "@/components/NdaGate";
import { ChevronLeft } from "lucide-react";

const BeyondTheScreen = () => {
  const { navigateTo } = usePageTransition();

  return (
    <NdaGate>
    <div className="bg-background min-h-screen">
      {/* Nav — x-ray blend */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ mixBlendMode: "difference" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center h-20 md:h-24">
            <button
              onClick={() => navigateTo("/")}
              className="flex items-center gap-1 text-white font-bold text-base md:text-lg tracking-wide hover:opacity-70 transition-opacity"
            >
              <ChevronLeft size={20} strokeWidth={3} />
              Home
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO IMAGE ===== */}
      <section className="pt-24">
        <div className="w-full aspect-[16/7] bg-muted flex items-center justify-center">
          <span className="text-xs text-muted-foreground tracking-[0.15em]">
            HERO IMAGE
          </span>
        </div>
      </section>

      {/* ===== TITLE + SUBTITLE ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
            Digitalisation of Cheque Discounting Processes
          </h1>
          <p className="text-base text-muted-foreground">
            Taking a traditionally manual banking workflow beyond the screen into a seamless digital experience
          </p>
        </div>
      </section>

      {/* ===== OVERVIEW / CHALLENGE / GOAL — 2 col ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto border-t border-border pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Overview
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Content coming soon.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Team: <strong className="text-foreground">TBD</strong></p>
                <p>Tools: <strong className="text-foreground">TBD</strong></p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Challenge
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Content coming soon.
              </p>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Goal
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Content coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 01 — DISCOVER ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-16">
            01 — Discover
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Content coming soon.
          </p>
        </div>
      </section>

      {/* ===== 02 — DEFINE ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-16">
            02 — Define
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Content coming soon.
          </p>
        </div>
      </section>

      {/* ===== 03 — DEVELOP ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-16">
            03 — Develop
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Content coming soon.
          </p>
        </div>
      </section>

      {/* ===== 04 — DELIVER ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-16">
            04 — Deliver
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Content coming soon.
          </p>
        </div>
      </section>

      {/* ===== REFLECTION ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-12">
            Reflection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Content coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER — See More ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="font-bold text-foreground uppercase tracking-widest text-sm">
                Özgür Taylan Çelik
              </p>
              <p className="text-xs text-muted-foreground mt-1">UX Researcher</p>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => navigateTo("/")}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider border border-border px-4 py-2 rounded-full"
                >
                  Work
                </button>
                <button
                  onClick={() => navigateTo("/about")}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider border border-border px-4 py-2 rounded-full"
                >
                  About
                </button>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">
                See More Of My Work:
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => navigateTo("/hayvanat")}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hayvanat — Website Redesign →
                </button>
                <button
                  onClick={() => navigateTo("/otc-hackathon")}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  OTC Options Platform — AI Hackathon →
                </button>
                <button
                  onClick={() => navigateTo("/trust-by-design")}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Trust By Design — Workshop →
                </button>
                <button
                  onClick={() => navigateTo("/")}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  All Case Studies →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </NdaGate>
  );
};

export default BeyondTheScreen;
