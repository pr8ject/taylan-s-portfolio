import { usePageTransition } from "@/components/PageTransition";
import { ChevronLeft } from "lucide-react";

const HumanCentered = () => {
  const { navigateTo } = usePageTransition();

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

      {/* ===== TITLE + SUBTITLE ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
            Human Centered
          </h1>
          <p className="text-base text-muted-foreground">
            Going Where Our Customers Work and Live to Understand the Real "Efsane Kredi" Experience
          </p>
        </div>
      </section>

      {/* ===== THE HOOK ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-foreground pl-6 py-2">
            <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
              "We had the data, we had the usability tests. But we still didn't truly understand our Efsane Kredi customers. So I went to where they work — their shops, their offices, their daily lives — to see what we were missing."
            </p>
          </blockquote>
        </div>
      </section>

      {/* ===== RESULT BANNER ===== */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">Field</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">On-Site Usability Tests</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">Calls</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Team-Wide User Calls</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">5</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Key Findings</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">Loan</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Product for Business Owners</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW / CHALLENGE / GOAL ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto border-t border-border pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Overview
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "Efsane Kredi" is Fibabanka's loan product dedicated to <strong className="text-foreground">business owners</strong>, also usable across various e-commerce sites. Despite existing usability test data, the team lacked deep empathy for who these customers really were. I took full responsibility to organize and lead a research initiative that combined <strong className="text-foreground">field visits</strong> with <strong className="text-foreground">team-wide user calls</strong>.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Role: <strong className="text-foreground">Research Lead — Full Ownership</strong></p>
                <p>Method: <strong className="text-foreground">Contextual Inquiry, Field Usability Testing, User Calls</strong></p>
                <p>Product: <strong className="text-foreground">Efsane Kredi (Business Loan + E-Commerce)</strong></p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Challenge
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                We had usability test results, but they weren't enough. The team needed to <strong className="text-foreground">hear directly from customers</strong> — to understand their world, their pain points, and why they behaved the way they did. These were business owners with unique financial rhythms, and we needed to go beyond lab settings.
              </p>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Goal
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deep dive into the minds of Efsane Kredi customers: <strong className="text-foreground">understand their pain points, behaviors, and unmet needs</strong> so the whole team could develop better products for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1 — THE APPROACH ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            01 — The Approach
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "Two Phases: First Observe, Then Include the Team"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Phase 1: Field Usability Tests
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                I conducted <strong className="text-foreground">on-site usability tests</strong> where customers work and live. Going to their natural environments — shops, offices, workplaces — allowed me to observe context that a lab could never replicate.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Watching a business owner navigate a loan application <strong className="text-foreground">between serving customers</strong> reveals fundamentally different needs than testing in a quiet room.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Phase 2: Team-Wide User Calls
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                With the field test results in hand, we moved to <strong className="text-foreground">user calls that the entire team could participate in</strong>. This was deliberate — I wanted every team member to hear the customers' voices firsthand.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The goal was to <strong className="text-foreground">close the empathy gap</strong> between the product team and the real people using Efsane Kredi, so decisions would be grounded in lived experience.
              </p>
            </div>
          </div>

          <div className="p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-3">
              Why This Matters
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Research shouldn't live in a report. By <strong className="text-foreground">bringing the team into direct contact with users</strong>, the findings became shared knowledge — not a handoff document that gets archived.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — KEY FINDINGS ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            02 — Key Findings
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "What We Learned from Their World"
          </p>

          {/* Finding 1 */}
          <div className="mb-12 pb-12 border-b border-border">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-xs font-bold text-muted-foreground tracking-wider min-w-fit">FINDING 01</span>
              <h3 className="text-lg font-bold text-foreground">Hızlı Erişim — Ani Nakit İhtiyacı</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Business owners need <strong className="text-foreground">instant access to cash</strong>. Their financial needs are urgent and unpredictable — a supplier payment, a sudden opportunity, a gap between receivables. Speed isn't a feature preference; it's a survival mechanism.
            </p>
          </div>

          {/* Finding 2 */}
          <div className="mb-12 pb-12 border-b border-border">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-xs font-bold text-muted-foreground tracking-wider min-w-fit">FINDING 02</span>
              <h3 className="text-lg font-bold text-foreground">Kullanıcıya Özel İmkanlar (Esneklik)</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Customers strongly value <strong className="text-foreground">personalized, flexible options</strong>. A one-size-fits-all loan structure doesn't reflect the reality of running a business. They want terms that adapt to their unique cash flow patterns and seasonal rhythms.
            </p>
          </div>

          {/* Finding 3 */}
          <div className="mb-12 pb-12 border-b border-border">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-xs font-bold text-muted-foreground tracking-wider min-w-fit">FINDING 03</span>
              <h3 className="text-lg font-bold text-foreground">Tanıdıklık ve İletişimin Önemi</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Familiarity and personal communication</strong> are critical trust drivers. These customers want to feel known — a banker who understands their business, not a call center reading a script. The human relationship is often the deciding factor.
            </p>
          </div>

          {/* Finding 4 */}
          <div className="mb-12 pb-12 border-b border-border">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-xs font-bold text-muted-foreground tracking-wider min-w-fit">FINDING 04</span>
              <h3 className="text-lg font-bold text-foreground">Farklı İmkanları Değerlendirme Kapasitesi</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Many customers <strong className="text-foreground">lack the capacity to evaluate different financial options</strong>. They don't compare products or rates — they go with what's familiar or what's offered first. This isn't laziness; it's cognitive overload in the context of running a business.
            </p>
          </div>

          {/* Finding 5 */}
          <div className="mb-12 pb-12 border-b border-border">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-xs font-bold text-muted-foreground tracking-wider min-w-fit">FINDING 05</span>
              <h3 className="text-lg font-bold text-foreground">Sadece Kredi İçin Geliyorlar</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These customers <strong className="text-foreground">come only for the loan</strong>. They don't explore other banking products. They don't see Fibabanka as their bank — they see it as a credit tool. The relationship begins and ends with the loan transaction.
            </p>
          </div>

          {/* Bonus insight */}
          <div className="p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-3">
              Bonus Insight
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">They track their finances on Excel.</strong> Despite running businesses of various sizes, spreadsheets remain the primary financial management tool. This reveals both a gap in the market and an opportunity to meet users where they already are.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 — REFLECTION ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            03 — Reflection
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "What This Project Taught Me"
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-foreground mb-2">
                1. "Context changes everything."
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Watching someone use your product in a busy shop, between customers, with a ringing phone — that's the real test. Lab settings filter out the chaos that shapes real behavior.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-2">
                2. "Research is a team sport."
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The user calls weren't just for data collection — they were for <strong className="text-foreground">organizational empathy</strong>. When developers and product managers hear a customer struggle firsthand, the prioritization conversations change.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-2">
                3. "Take ownership."
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This project happened because I took full responsibility to organize and lead it. Initiative isn't just a soft skill — it's how meaningful research gets done.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanCentered;
