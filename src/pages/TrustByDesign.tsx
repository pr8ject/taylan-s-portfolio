import { usePageTransition } from "@/components/PageTransition";
import NdaGate from "@/components/NdaGate";
import { ChevronLeft } from "lucide-react";

const TrustByDesign = () => {
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
            HERO IMAGE — WORKSHOP OVERVIEW
          </span>
        </div>
      </section>

      {/* ===== TITLE + SUBTITLE ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
            Trust By Design
          </h1>
          <p className="text-base text-muted-foreground">
            How a Workshop for 60 People Became a CHI 2026 Paper on Bias
          </p>
        </div>
      </section>

      {/* ===== THE HOOK ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-foreground pl-6 py-2">
            <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
              "We designed a flawless workshop. The participants loved it. The prototypes were impressive. And the insights were wrong."
            </p>
          </blockquote>
        </div>
      </section>

      {/* ===== RESULT BANNER ===== */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">60</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Participants</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">6</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">AI Personas from ~70 Interviews</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">CHI</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">2026 Paper Accepted</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">Self</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Initiated Project</span>
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
                Overview
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Fibabanka was developing a wealth management app with AI-powered investment guidance. The team needed to understand what value proposition would resonate with real investors. This wasn't assigned. We <strong className="text-foreground">volunteered to design and run a full-day design thinking workshop</strong> that grew from 40 to 60 participants, ultimately leading to a CHI 2026 position paper on bias in participatory research.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Team: <strong className="text-foreground">Özgür Taylan Çelik, Onur Yılmaz (ex-Userspots), Ilgın Şafak</strong></p>
                <p>Tools: <strong className="text-foreground">CustomGPT, Miro, Creatie, UIzard, Figma</strong></p>
                <p>Duration: <strong className="text-foreground">Full-day workshop + 3-month research follow-up</strong></p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Challenge
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                How do you understand the needs of <strong className="text-foreground">high-net-worth investors</strong> who are deeply embedded in personal relationships with their portfolio managers, and how do you separate genuine user needs from <strong className="text-foreground">socially influenced responses</strong>?
              </p>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Goal
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Design and facilitate a large-scale design thinking workshop to <strong className="text-foreground">uncover authentic wealth management needs</strong>, then critically evaluate the quality of insights gathered through participatory methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACT 1 — EXPOSITION ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            Act 1 — Exposition
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "Nobody Asked Us To"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Taking Initiative
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Nobody assigned us this workshop. We walked into the office and <strong className="text-foreground">"put our hand under the stone"</strong>, a Turkish expression for stepping up when nobody asks you to. Onur Yılmaz and I saw an opportunity to bring design thinking to a business problem that was being approached purely through market research.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                What started as a plan for <strong className="text-foreground">40 participants grew to 60</strong> as word spread across the organization. This wasn't just a workshop. It became a cross-functional alignment event that brought together product, business, and customer-facing teams.
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground tracking-[0.15em]">
                  WORKSHOP PLANNING PHOTO
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                Planning sessions with Onur Yılmaz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACT 2 — RISING ACTION ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            Act 2 — Rising Action
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "Building the Machine"
          </p>

          {/* Phase 1: AI Personas */}
          <div className="mb-16">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
              Phase 1: The AI Personas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  We built AI personas from <strong className="text-foreground">~70 in-depth interviews</strong> across different wealth segments. These weren't static documents. They were transformed into <strong className="text-foreground">conversational AI agents using CustomGPT</strong>, each configured with specific demographics, financial goals, pain points, and behavioral patterns.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Each persona could engage in realistic dialogue about investment preferences, risk tolerance, and advisor relationships. The organization showed some <strong className="text-foreground">resistance to AI persona adoption</strong>, a tension that would later become the central thread of our research.
                </p>
              </div>
              <div>
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs text-muted-foreground tracking-[0.15em]">
                    AI PERSONA CARD (REDACTED)
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                  CustomGPT persona configuration
                </p>
              </div>
            </div>
          </div>

          {/* Phase 2: Workshop Design */}
          <div className="mb-16 border-t border-border pt-10">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
              Phase 2: Workshop Design — The Interview Protocol
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              I designed a <strong className="text-foreground">structured 5-question interview set</strong> where each question was engineered to map directly to a specific empathy map quadrant. This wasn't about asking good questions. It was about <strong className="text-foreground">engineering questions with intent</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Q1 — Context</p>
                  <p className="text-sm text-muted-foreground">Maps to <strong className="text-foreground">Does / Says</strong></p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Q2 — Goals</p>
                  <p className="text-sm text-muted-foreground">Maps to <strong className="text-foreground">Thinks</strong></p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Q3 — Challenges</p>
                  <p className="text-sm text-muted-foreground">Maps to <strong className="text-foreground">Feels + Does</strong></p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Q4 — Needs</p>
                  <p className="text-sm text-muted-foreground">Maps to <strong className="text-foreground">Thinks + Says</strong></p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Q5 — Emotion Moments</p>
                  <p className="text-sm text-muted-foreground">Maps to <strong className="text-foreground">Feels</strong></p>
                </div>
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs text-muted-foreground tracking-[0.15em]">
                    INTERVIEW FRAMEWORK VISUAL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Workshop Execution */}
          <div className="border-t border-border pt-10">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
              Phase 3: Workshop Execution Flow
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              The full-day workshop followed a carefully designed arc, from onboarding through to AI-assisted prototyping. Here's the flow:
            </p>

            <div className="space-y-3 mb-12">
              {[
                { num: "01", label: "Onboarding & Introductions" },
                { num: "02", label: "Rules & Design Thinking Fundamentals" },
                { num: "03", label: "Real-Life Persona Presentations (Actual Customers Matching Profiles)" },
                { num: "04", label: "Empathy Mapping Sessions with Live Participants" },
                { num: "05", label: "Journey Mapping" },
                { num: "06", label: "Lunch Break" },
                { num: "07", label: "Affinity Clustering" },
                { num: "08", label: 'Idea Generation + "Investment" Exercise' },
                { num: "09", label: "To-Be Journey Creation" },
                { num: "10", label: "AI-Assisted Prototyping (Creatie, UIzard)" },
                { num: "11", label: "Group Presentations with Prototypes" },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <span className="text-xs font-bold text-muted-foreground tracking-wider min-w-[28px]">{step.num}</span>
                  <span className="text-sm text-foreground">{step.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs text-muted-foreground tracking-[0.15em]">
                    WORKSHOP PHOTO — EMPATHY MAPS
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                  Physical empathy maps from the workshop
                </p>
              </div>
              <div>
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs text-muted-foreground tracking-[0.15em]">
                    WORKSHOP PHOTO — INVESTMENT EXERCISE
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                  The "investment money" designed for the exercise
                </p>
              </div>
            </div>

            <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center mb-2">
              <span className="text-xs text-muted-foreground tracking-[0.15em]">
                WORKSHOP PHOTO — GROUP PROTOTYPING SESSION
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
              Facilitating groups through AI-assisted prototyping
            </p>
          </div>
        </div>
      </section>

      {/* ===== ACT 3 — THE CLIMAX ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            Act 3 — The Climax
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "The Bias We Didn't See Coming"
          </p>

          <div className="mb-12">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
              The Uncomfortable Discovery
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Three of five table groups produced answers indicating <strong className="text-foreground">high dependency on existing portfolio manager (PM) relationships</strong>. Participants said things like <em>"I would follow him wherever he goes."</em> Real quotes that pointed toward loyalty to human advisors rather than openness to digital alternatives.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Questions about digital alternatives were <strong className="text-foreground">consistently deflected toward human touch</strong>. And then we noticed the pattern: all three of those tables had <strong className="text-foreground">portfolio managers physically present and participating</strong>.
            </p>
          </div>

          {/* Named Biases */}
          <div className="mb-12">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">
              The Biases We Identified
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <h4 className="text-sm font-bold text-foreground mb-2">Social Desirability Bias</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  PMs were sitting right there. Criticizing human advisors would be <strong className="text-foreground">socially awkward</strong>, so participants defaulted to praising the relationship.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h4 className="text-sm font-bold text-foreground mb-2">Context Effects</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The luxury hotel setting positioned participants as <strong className="text-foreground">valued guests, not critical evaluators</strong>. The environment itself discouraged dissent.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h4 className="text-sm font-bold text-foreground mb-2">Relational Anchoring</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Participants were literally asked to imagine losing someone <strong className="text-foreground">sitting beside them</strong>. The emotional weight made objective responses impossible.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h4 className="text-sm font-bold text-foreground mb-2">Acquiescence Bias</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The hospitable environment <strong className="text-foreground">encouraged agreement</strong>. Saying "yes" was easier and more comfortable than pushing back.
                </p>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <blockquote className="border-l-4 border-foreground pl-6 py-2 mb-8">
            <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
              "Our AI personas, built from 70 interviews in neutral settings (homes, coffee shops, phone calls) contained less contextual contamination than what we obtained from carefully recruited human participants."
            </p>
          </blockquote>

          <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center mb-2">
            <span className="text-xs text-muted-foreground tracking-[0.15em]">
              DIAGRAM — "WHAT WE EXPECTED TO LEARN" VS. "WHAT WE ACTUALLY LEARNED"
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
            The gap between expected and actual insights
          </p>
        </div>
      </section>

      {/* ===== ACT 4 — FALLING ACTION ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            Act 4 — Falling Action
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "From Failure to Framework"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Together with Ilgın Şafak, I analyzed why this happened. We moved beyond the simple <strong className="text-foreground">"AI vs. Human"</strong> framing to understand which biases each approach introduces.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our key realization: AI personas aren't unbiased. They have <strong className="text-foreground">different biases</strong> (training data, sycophancy, hallucination). But they <strong className="text-foreground">can't be influenced by stakeholder presence, hospitality, or relationship pressure</strong>.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This thinking became a <strong className="text-foreground">position paper submitted to and accepted at CHI 2026</strong>, the premier international conference on Human-Computer Interaction.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Bias Comparison
              </h3>
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Human Participant Biases</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Social desirability</li>
                    <li>Context effects</li>
                    <li>Relational anchoring</li>
                    <li>Acquiescence bias</li>
                    <li>Stakeholder presence effects</li>
                  </ul>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">AI Persona Biases</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Training data limitations</li>
                    <li>Sycophancy tendencies</li>
                    <li>Hallucination risk</li>
                    <li>Lack of emotional authenticity</li>
                    <li>Cultural context gaps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CHI Paper Citation */}
          <div className="p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-3">
              Publication
            </p>
            <p className="text-sm text-foreground leading-relaxed mb-1">
              <strong>CHI 2026 Position Paper</strong>, Accepted
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              On bias in participatory design workshops: Comparing contextual contamination in human participant responses versus AI persona outputs.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ACT 5 — RESOLUTION ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            Act 5 — Resolution
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "What I Learned"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div />
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-3">
                  1. "Authenticity is contextual."
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Real users expressing real values in biased contexts still produce biased data. <strong className="text-foreground">Context always shapes expression.</strong> The setting, the people present, the power dynamics. They all filter what participants say.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-3">
                  2. "The validation paradox."
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If we validate AI personas against human responses, but human responses are contaminated, <strong className="text-foreground">what's our ground truth?</strong> This question now drives how I think about research validity.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-3">
                  3. "Initiative creates opportunity."
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This workshop wasn't assigned. The CHI paper wasn't planned. Both happened because we <strong className="text-foreground">stepped up when nobody asked us to</strong>. The best work often starts with someone deciding it matters.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-muted/30 rounded-lg">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-3">
              What's Next
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The CHI paper opens several questions I'm still exploring: How do we design <strong className="text-foreground">hybrid methodologies</strong> that leverage both human and AI participants? Can we develop <strong className="text-foreground">bias-detection frameworks</strong> for participatory research? What does <strong className="text-foreground">"ground truth"</strong> mean when every method has its own contamination signature?
            </p>
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
                  onClick={() => navigateTo("/beyond-the-screen")}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Beyond The Screen — Field Research →
                </button>
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

export default TrustByDesign;
