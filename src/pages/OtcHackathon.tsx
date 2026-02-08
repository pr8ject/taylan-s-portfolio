import { usePageTransition } from "@/components/PageTransition";
import { ChevronLeft } from "lucide-react";

const OtcHackathon = () => {
  const { navigateTo } = usePageTransition();

  return (
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
            AI Hackathon — OTC Options Platform
          </h1>
          <p className="text-base text-muted-foreground">
            Designing a digital OTC options trading experience in 48 hours — awarded the Jury Special Prize
          </p>
        </div>
      </section>

      {/* ===== OVERVIEW / CHALLENGE / GOAL — 2 col ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto border-t border-border pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left — Overview */}
            <div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Overview
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                As part of Fibabanka's internal AI Hackathon, our team of three — OTC v1.66 — took on the challenge of digitalizing Over-The-Counter options trading. OTC processes were <strong className="text-foreground">manual, branch-dependent, and largely untouched by digital transformation</strong>. We had 48 hours to research, design, develop, and present a working solution.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Team: <strong className="text-foreground">3 People (OTC v1.66)</strong></p>
                <p>Tools: <strong className="text-foreground">Figma, AWS, Live Prototyping</strong></p>
                <p>Duration: <strong className="text-foreground">48 Hours</strong></p>
              </div>
            </div>

            {/* Right — Challenge + Goal */}
            <div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Challenge
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Existing OTC options applications were <strong className="text-foreground">extremely scarce</strong>, leaving almost no reference points. The process itself was complex — designed for expert financial professionals — and the 48-hour constraint meant every decision had to be fast, deliberate, and final. On top of this, I was working with a <strong className="text-foreground">broken pinky finger in a cast</strong>.
              </p>

              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Goal
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deliver an <strong className="text-foreground">end-to-end digital OTC options platform</strong> — from research to a live, presentable product — that demonstrates how traditionally manual banking processes can be modernized through thoughtful UX and rapid iteration.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Benchmarking The Unknown
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                OTC options trading is a niche financial domain with <strong className="text-foreground">very few existing digital applications</strong>. Our first move was to benchmark whatever we could find — scanning available OTC and OTC-like financial tools for patterns, workflows, and gaps.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We conducted <strong className="text-foreground">SWOT analyses on the limited available tools</strong>, identifying strengths to build on and weaknesses to avoid. With scarce references and extreme time pressure, we made a critical early decision: <strong className="text-foreground">adopt an MVP mindset from the start</strong>.
              </p>
            </div>
            <div>
              <div className="w-full aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground tracking-[0.15em]">
                  RESEARCH IMAGE
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                Competitive Benchmarking & SWOT Analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 02 — DEFINE ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-16">
            02 — Define
          </h2>

          {/* Personas heading + description */}
          <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
            Target Users
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unlike consumer products, our users were <strong className="text-foreground">highly specialized financial professionals and corporate clients</strong>. Understanding their mental models was essential — these users don't tolerate ambiguity and demand precision in every interaction.
            </p>
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                01 — <strong className="text-foreground">The Expert Trader</strong>, a seasoned financial professional who values <strong className="text-foreground">speed, reliability, and control</strong> over complex instruments. Every second and every click matters.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                02 — <strong className="text-foreground">The Corporate Client</strong>, a business decision-maker needing to trade OTC options for critical resources — such as <strong className="text-foreground">timber options</strong> — with precision and confidence in the platform's accuracy.
              </p>
            </div>
          </div>

          {/* Persona images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col items-center">
              <img
                src="/images/otc-hackathon/persona-trader.png"
                alt="Expert Trader persona"
                className="w-full max-w-[300px] aspect-square object-contain mb-3"
                style={{ mixBlendMode: "multiply" }}
              />
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">The Expert Trader</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/otc-hackathon/persona-corporate.png"
                alt="Corporate Client persona"
                className="w-full max-w-[300px] aspect-square object-contain mb-3"
                style={{ mixBlendMode: "multiply" }}
              />
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">The Corporate Client</p>
            </div>
          </div>

          {/* MVP Strategy + Key Decisions — 2 col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border pt-10">
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                MVP Strategy
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                With only 48 hours, traditional research cycles were impossible. We committed early to an MVP approach — <strong className="text-foreground">iterating fast based on assumptions validated through team discussion and rapid testing</strong>.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Instead of over-researching, we asked ourselves: <strong className="text-foreground">what is the smallest thing we can build that proves this concept works?</strong> That question guided every decision.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Key Design Decisions
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Priorities were ruthlessly defined for the hackathon reality:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                <li>Clarity over complexity — every screen must be instantly understandable</li>
                <li>Speed over polish — functional beats beautiful under time pressure</li>
                <li>End-to-end flow — prove the full journey, not just isolated screens</li>
                <li>Design and development happen simultaneously — no handoff, no waiting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 03 — DEVELOP ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-16">
            03 — Develop
          </h2>

          {/* Design direction */}
          <div className="mb-16">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">
              Designing Under Pressure
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Design and iteration happened primarily in <strong className="text-foreground">Figma</strong>, but due to the extreme time constraint, we also designed and iterated <strong className="text-foreground">directly on live environments</strong>. Every screen and every pixel was pushed rapidly into a live setup hosted on <strong className="text-foreground">AWS</strong>. Design and development happened almost simultaneously — there was no handoff process, just constant collaboration.
            </p>
          </div>

          {/* Design artifacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="w-full aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground tracking-[0.15em]">
                  FIGMA DESIGN
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                Figma — Rapid Iteration
              </p>
            </div>
            <div>
              <div className="w-full aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground tracking-[0.15em]">
                  LIVE PROTOTYPE
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                Live Environment on AWS
              </p>
            </div>
          </div>

          {/* Constraint story */}
          <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
            Working Through Constraints
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Beyond the 48-hour deadline, I was designing with a <strong className="text-foreground">broken pinky finger in a cast</strong>. Speed and clarity were prioritized over polish — every interaction had to count. The constraint didn't slow us down; it sharpened our focus on what truly mattered.
          </p>

          <div className="w-full aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
            <span className="text-xs text-muted-foreground tracking-[0.15em]">
              PLATFORM SCREENSHOT
            </span>
          </div>
        </div>
      </section>

      {/* ===== 04 — DELIVER ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-16">
            04 — Deliver
          </h2>

          <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
            Presentation & Result
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            By presentation time, the team was exhausted but satisfied. Despite physical constraints and an intense 48-hour workload, we delivered the project <strong className="text-foreground">end-to-end — from research and strategy to a live, working prototype</strong>.
          </p>

          {/* Award highlight */}
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="shrink-0">
                <span className="text-5xl md:text-6xl font-black text-foreground">🏆</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Jury Special Prize
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The jury awarded our team a <strong className="text-foreground">Special Prize for our thinking and design approach</strong>. The recognition wasn't just for the deliverable — it was for how we framed the problem, made decisions under extreme constraints, and demonstrated the potential of digitalizing OTC processes.
                </p>
              </div>
            </div>
          </div>

          {/* After Impact */}
          <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
            After Impact
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-3xl">
            What started as a hackathon project didn't end at the presentation. Following the event, the <strong className="text-foreground">OTC opportunity was escalated internally</strong> within Fibabanka. The project highlighted how traditionally branch-dependent OTC processes could be modernized through digital design.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Today, this initiative is <strong className="text-foreground">evolving into a brand-new digital OTC options product</strong>, and development is still ongoing. The hackathon became the foundation for something real.
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
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                This hackathon taught me the value of <strong className="text-foreground">decisive action over deliberation</strong>. In a 48-hour window, there's no room for second-guessing — you research enough to move, you design enough to test, and you ship enough to prove the concept.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Working under <strong className="text-foreground">extreme physical and time constraints</strong> forced me to prioritize ruthlessly. Every design decision had to earn its place. It was a reminder that limitations don't diminish the work — they sharpen it.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Moving forward</strong>, the fact that this project grew from a hackathon prototype into an actual product initiative is the most meaningful outcome. Good design thinking, even under pressure, can create real momentum.
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
              <p className="text-xs text-muted-foreground mt-1">Experience Designer</p>
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
  );
};

export default OtcHackathon;
