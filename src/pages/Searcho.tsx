import { useState } from "react";
import { usePageTransition } from "@/components/PageTransition";
import { ChevronLeft, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const Searcho = () => {
  const { navigateTo } = usePageTransition();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <div className="bg-background min-h-screen">
      {/* Nav — x-ray blend */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ mixBlendMode: "difference" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center h-20 md:h-24">
            <button
              onClick={() => navigateTo("/")}
              className="flex items-center gap-1 text-white font-bold text-base md:text-lg tracking-wide hover:opacity-70 transition-opacity cursor-pointer"
            >
              <ChevronLeft size={20} strokeWidth={3} />
              Home
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO IMAGE ===== */}
      <section className="pt-24">
        <img
          src="/images/searcho/hero.png"
          alt="Searcho AI - Customer Research Platform Interface"
          className="w-full aspect-[16/7] object-contain bg-background"
        />
      </section>

      {/* ===== TITLE + SUBTITLE ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
            Searcho
          </h1>
          <p className="text-base text-muted-foreground">
            Scaling Customer Research With AI-Assisted Interviews And Thematic Analysis
          </p>
        </div>
      </section>

      {/* ===== THE HOOK ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-foreground pl-6 py-2">
            <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
              "Customer research doesn't scale. You either talk to 5 people deeply or 500 people shallowly. What if you could do both?"
            </p>
          </blockquote>
        </div>
      </section>

      {/* ===== RESULT BANNER ===== */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">Co-founder</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">+ Lead Designer</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">POC</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Proof of Concept Stage</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">Since</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">August 2025</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">June</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Series Funding Round</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW / CHALLENGE / GOAL — 2 col ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto border-t border-border pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                The Problem
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Customer research is broken at scale. <strong className="text-foreground">Depth doesn't scale</strong>. Running 50 in-depth interviews takes months. Surveys get shallow responses. And when you finally have the data, <strong className="text-foreground">analyzing it manually is a bottleneck</strong>.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Product-obsessed companies and freelance designers know research matters, but they're stuck between <strong className="text-foreground">speed and insight quality</strong>.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Searcho's Approach
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Plan once. Scale infinitely.</strong> Define your research questions, let Searcho's AI conduct and analyze interviews at scale, and get thematic insights with video context—all in weeks, not months.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built for teams who believe research should inform every design decision, not delay them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            How Searcho Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            A Three-Step Workflow For Scaled Research
          </p>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="border-l-4 border-foreground pl-6">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-black text-foreground">01</span>
                <h3 className="text-xl font-bold text-foreground">Plan Your Research</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Define your research goals, target audience, and key questions. This is where human research intuition matters most. Searcho guides you through structuring questions that will yield actionable insights.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-foreground pl-6">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-black text-foreground">02</span>
                <h3 className="text-xl font-bold text-foreground">AI-Assisted Interviews At Scale</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Searcho's AI conducts conversational interviews with your participants. Not scripted surveys—real dialogue. The AI understands context, asks follow-ups, and adapts based on responses. <strong className="text-foreground">Video is captured automatically</strong> so you don't lose the mimics, gestures, and emotional cues.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-foreground pl-6">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-black text-foreground">03</span>
                <h3 className="text-xl font-bold text-foreground">Thematic Analysis + Insights</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Our <strong className="text-foreground">fine-tuned research LLM</strong> analyzes all interview data simultaneously—identifying themes, patterns, and emotional undercurrents. You get structured, actionable insights with direct links to video evidence. No manual coding. No weeks of analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY INNOVATIONS ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            What Makes Searcho Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                Custom Research LLM
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We didn't use a generic AI. We fine-tuned a language model specifically for research analysis. It understands research methodology, qualitative patterns, and how to extract insights—not just summarize transcripts.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                Video Intelligence Built In
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Research isn't just words. The way someone hesitates, their facial expression, their tone—these matter. Searcho captures video automatically and links visual context to thematic insights.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                Conversation, Not Forms
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The AI conducts real interviews, not surveys. It asks follow-ups, detects when answers are shallow, and digs deeper. This captures the nuance that forms can't.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                Instant Thematic Mapping
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Instead of weeks of manual analysis, get thematic insights within hours. All 50 interviews analyzed simultaneously, patterns identified, evidence linked to video.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TARGET AUDIENCE ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto border-t border-border pt-10">
          <h2 className="font-display text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-12">
            Who Needs Searcho
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                Product-Obsessed Companies
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Teams that know research drives better products but are constrained by time and resources. They need insights fast without sacrificing depth. Searcho lets them do research every sprint, not every quarter.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                Freelance & Independent Designers
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Designers who want to stand out by being research-informed but can't afford traditional research. Searcho makes research accessible—no recruiting firm, no research team needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CURRENT STATUS ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto border-t border-border pt-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            Where We Are
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Proof of Concept → Series Funding
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                What We've Done
              </h3>
              <ul className="text-sm text-muted-foreground space-y-3">
                <li className="flex gap-3">
                  <span className="text-foreground font-bold min-w-fit">✓</span>
                  <span>Built and tested the core platform</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-bold min-w-fit">✓</span>
                  <span>Fine-tuned custom research LLM</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-bold min-w-fit">✓</span>
                  <span>Integrated video capture and analysis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-bold min-w-fit">✓</span>
                  <span>Passed first round of evaluations</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                What's Next
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We're in proof of concept mode—validating the product with early users and refining based on real research workflows. In June 2026, we're pursuing Series funding to scale the platform.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The vision: <strong className="text-foreground">make research-driven design the default, not the exception</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            The Vision
          </h2>

          <div className="space-y-6 max-w-2xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Research shouldn't be a luxury for big companies with dedicated research teams. It shouldn't take months. It shouldn't require hiring consultants.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              With Searcho, <strong className="text-foreground">every designer can run 50-person research studies in weeks</strong>. Every product team can validate assumptions with real user data, not opinions. Every startup can make decisions grounded in what users actually need.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Research becomes <strong className="text-foreground">fast, accessible, and scaled</strong>. And that changes everything about how products get built.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto text-center border-t border-border pt-12">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6">
            Ready to explore?
          </p>
          <a
            href="https://searcho.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg font-bold text-foreground uppercase tracking-wider border-2 border-foreground px-8 py-4 rounded-full hover:bg-foreground hover:text-background transition-colors"
          >
            Check the project here
          </a>
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
              <p className="text-xs text-muted-foreground mt-1">Experience Designer, Co-founder @ Searcho</p>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => navigateTo("/")}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider border border-border px-4 py-2 rounded-full cursor-pointer"
                >
                  Work
                </button>
                <button
                  onClick={() => navigateTo("/about")}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider border border-border px-4 py-2 rounded-full cursor-pointer"
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
                  onClick={() => navigateTo("/trust-by-design")}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Trust By Design — CHI 2026 Paper →
                </button>
                <button
                  onClick={() => navigateTo("/beyond-the-screen")}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Beyond The Screen — Field Research →
                </button>
                <button
                  onClick={() => navigateTo("/hayvanat")}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Hayvanat — Website Redesign →
                </button>
                <button
                  onClick={() => navigateTo("/")}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  All Case Studies →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zoom Modal */}
      <Dialog open={!!zoomedImage} onOpenChange={(open) => !open && setZoomedImage(null)}>
        <DialogContent className="max-w-5xl w-full bg-black border-0 max-h-[90vh] flex flex-col">
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 z-50 text-white hover:opacity-70 transition-opacity"
          >
            <X size={24} />
          </button>
          <div className="flex-1 overflow-y-auto flex items-start justify-center">
            <img
              src={zoomedImage || ""}
              alt="Zoomed view"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Searcho;
