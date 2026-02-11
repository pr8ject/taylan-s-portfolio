import { useState } from "react";
import { usePageTransition } from "@/components/PageTransition";
import NdaGate from "@/components/NdaGate";
import { ChevronLeft } from "lucide-react";

const BeyondTheScreen = () => {
  const [rulesetHovered, setRulesetHovered] = useState(false);
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
            HERO IMAGE — FIELD RESEARCH
          </span>
        </div>
      </section>

      {/* ===== TITLE + SUBTITLE ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
            Beyond The Screen
          </h1>
          <p className="text-base text-muted-foreground">
            I Went Undercover at 4 Stores to Find Out Why 70% of Our Customers Never Come Back
          </p>
        </div>
      </section>

      {/* ===== THE HOOK ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-foreground pl-6 py-2">
            <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
              "46% of Fibabanka's new customers were coming through one channel, Vatan Bilgisayar electronics stores. And almost all of them were leaving after paying off their first loan. I grabbed my ID, walked into a store, and bought AirPods on credit to find out why."
            </p>
          </blockquote>
        </div>
      </section>

      {/* ===== RESULT BANNER ===== */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">4</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Store Visits Across Istanbul</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">3+2</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Undercover + As Employee</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">4</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Critical Trust Breakdowns</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">End</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">To End Recommendations</span>
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
                Fibabanka's Buy Now Pay Later (BNPL) product "AlışGidiş" was the bank's <strong className="text-foreground">largest customer acquisition channel</strong>, yet these customers were churning after their first loan. I designed a guerrilla field research protocol and went undercover at electronics stores to experience, firsthand, what it feels like to become a Fibabanka customer.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Team: <strong className="text-foreground">1 UX Researcher (Solo)</strong></p>
                <p>Method: <strong className="text-foreground">Undercover Field Research, Mystery Shopping</strong></p>
                <p>Locations: <strong className="text-foreground">Kadıköy, Esenkent/Piazza AVM, Maltepe, Acıbadem, Bostancı</strong></p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Challenge
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                <strong className="text-foreground">46.19%</strong> of Fibabanka's customer acquisition came through Vatan Bilgisayar alone. ~<strong className="text-foreground">70%</strong> of all customers came through shopping credits (BNPL) across all retail partners. <strong className="text-foreground">51%</strong> of customers discovered Fibabanka <em>during</em> a purchase — not before. Yet these customers were churning after paying their loans — never engaging with other banking products.
              </p>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Goal
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Answer the core question: <strong className="text-foreground">"If most customers meet us at the cash register, what is that first impression actually like?"</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1 — THE BUSINESS PROBLEM ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            01 — The Business Problem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "Our Biggest Channel Was Also Our Biggest Leak"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-black text-foreground">46%</span>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                    of customer acquisition came through <strong className="text-foreground">Vatan Bilgisayar alone</strong>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-black text-foreground">70%</span>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                    of all customers came through <strong className="text-foreground">shopping credits (BNPL)</strong> across all retail partners
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-black text-foreground">51%</span>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                    of customers discovered Fibabanka <strong className="text-foreground">during a purchase</strong>, not before
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/beyond-the-screen/customer-acquisition.png"
                alt="Customer Acquisition Summary — Vatan Bilgisayar 46.19%, Görüntülü Bankacılık 21.11%, Beko/Arçelik 10.22%"
                className="w-full rounded-lg border border-border"
              />
              <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                Customer acquisition breakdown by channel
              </p>
            </div>
          </div>

          <blockquote className="border-l-4 border-foreground pl-6 py-2">
            <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
              "If most customers meet us at the cash register, what is that first impression actually like?"
            </p>
          </blockquote>
        </div>
      </section>

      {/* ===== SECTION 2 — THE METHOD ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            02 — The Method
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "Role Play Rule Set"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Designing the Protocol
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                I didn't send a survey. I didn't run a usability test. I created a <strong className="text-foreground">covert research protocol</strong>, essentially an undercover research script — and went into the field myself.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The "Role Play Rule Set" included specific rules: pick a product over 10,000 TL, ask technical questions first to build rapport, gradually steer toward credit options, and observe how the sales rep reacts.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I conducted research in <strong className="text-foreground">two modes</strong>: visiting as a customer (3 visits) and as a Fibabanka employee (2 visits). This triangulation was intentional. It revealed how the experience changes when the store knows who you are.
              </p>
            </div>
            <div>
              <a
                href="/images/beyond-the-screen/role-play-ruleset.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[3/4] block cursor-pointer"
                onMouseEnter={() => setRulesetHovered(true)}
                onMouseLeave={() => setRulesetHovered(false)}
              >
                {/* Back card — blue info card */}
                <div
                  className="absolute inset-0 rounded-xl bg-[#2C42E7] shadow-lg overflow-hidden transition-all duration-500 ease-out"
                  style={{
                    transform: rulesetHovered
                      ? "rotate(6deg) translateX(12px) translateY(6px)"
                      : "rotate(0deg) translateX(0) translateY(0)",
                    opacity: rulesetHovered ? 1 : 0,
                  }}
                >
                  <div className="p-6 pt-10 flex flex-col gap-2">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">
                      Undercover
                    </span>
                    <span className="text-xs font-bold text-white tracking-widest uppercase">
                      Research
                    </span>
                    <span className="text-xs font-bold text-white tracking-widest uppercase mt-2">
                      Protocol
                    </span>
                    <span className="text-[10px] text-white/60 mt-4">
                      Design Office
                    </span>
                  </div>
                </div>

                {/* Front card — document image */}
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden shadow-sm border border-border bg-white transition-transform duration-500 ease-out"
                  style={{
                    transform: rulesetHovered
                      ? "rotate(-3deg) translateX(-4px)"
                      : "rotate(0deg) translateX(0)",
                  }}
                >
                  <img
                    src="/images/beyond-the-screen/role-play-ruleset.png"
                    alt="Role Play Rule Set document"
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                The undercover research protocol
              </p>
            </div>
          </div>

          <div className="p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-3">
              Why This Matters
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This methodology shows something important: <strong className="text-foreground">you don't always follow established methods. You invent methods when the situation calls for it</strong>. Guerrilla field research in fintech is rare. When the data tells you "what" but not "why," sometimes you need to become the user.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 — THE EXPERIENCE ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            03 — The Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "What It Feels Like to Be Our Customer"
          </p>

          {/* Store 1 */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-xs font-bold text-muted-foreground tracking-wider min-w-fit">STORE 01</span>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Kadıköy Vatan Bilgisayar</h3>
                <p className="text-xs text-muted-foreground">July 24, 17:00</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  I asked about AirPods Pro (8,150 TL). The sales rep mentioned the BNPL sticker on the door but <strong className="text-foreground">warned about 14% interest with life insurance</strong>. The rep essentially discouraged the product they were supposed to sell.
                </p>
                <blockquote className="border-l-2 border-muted-foreground/30 pl-4 py-1">
                  <p className="text-sm text-muted-foreground italic">
                    "It's mostly used for phones, because credit card installments don't work for those. The interest is high for 6 months with AlışGidiş."
                  </p>
                </blockquote>
              </div>
              <div>
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs text-muted-foreground tracking-[0.15em]">
                    STORE VISIT PHOTO — KADIKÖY
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                  Kadıköy Vatan Bilgisayar storefront
                </p>
              </div>
            </div>
          </div>

          {/* Store 2 */}
          <div className="mb-16 border-t border-border pt-10">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-xs font-bold text-muted-foreground tracking-wider min-w-fit">STORE 02</span>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Piazza AVM Esenkent</h3>
                <p className="text-xs text-muted-foreground">July 25, 20:40</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  I asked about payment options. The rep <strong className="text-foreground">offered credit card installments first and never mentioned BNPL proactively</strong>. When I specifically asked about the AlışGidiş sticker on the wall, the rep showed reluctance.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A brief silence followed. Then the rep eventually engaged. Even though <strong className="text-foreground">promotional banners covered the storefront</strong>, the product behind them was invisible to the staff selling it.
                </p>
              </div>
              <div>
                <img
                  src="/images/beyond-the-screen/piazza-visit.jpg"
                  alt="Selfie at Piazza Esenkent Shopping Center during field research visit"
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
                <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                  Piazza Esenkent Shopping Center visit
                </p>
              </div>
            </div>
          </div>

          {/* Store 3 */}
          <div className="border-t border-border pt-10">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-xs font-bold text-muted-foreground tracking-wider min-w-fit">STORE 03</span>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">The Full Purchase Experience</h3>
                <p className="text-xs text-muted-foreground">Complete BNPL Application & Purchase</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  I went through the entire BNPL process, applied, got approved (85,000 TL limit), and bought the AirPods. The critical finding: <strong className="text-foreground">I never held my own phone during the entire process.</strong>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  The sales rep took my phone, entered my password, navigated the app, scrolled through contracts, and completed everything on their end. The rep even called a colleague for a "code" they needed. I walked out with AirPods but feeling <strong className="text-foreground">deeply insecure</strong>.
                </p>
              </div>
              <div>
                <img
                  src="/images/beyond-the-screen/purchase-selfie.jpg"
                  alt="Selfie with AirPods receipt from Vatan Bilgisayar after completing the BNPL purchase"
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
                <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                  The complete BNPL purchase journey
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-foreground pl-6 py-2">
              <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                "Throughout this process, I felt deeply insecure. I kept questioning whether I should have used a different method."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — THE FINDINGS ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            04 — The Findings
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "Four Trust Breakdowns"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-muted-foreground tracking-wider">01</span>
                <h3 className="text-sm font-bold text-foreground">The Anti-Recommendation Problem</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Store employees <strong className="text-foreground">actively discouraged AlışGidiş</strong> because of high interest rates and long processing times. The bank's own acquisition channel was being undermined by the people supposed to promote it.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-muted-foreground tracking-wider">02</span>
                <h3 className="text-sm font-bold text-foreground">The Invisible Product Problem</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                BNPL was <strong className="text-foreground">never offered proactively</strong>. Even though promotional banners covered the storefront, sales reps defaulted to credit card installments. Customers who didn't already know about AlışGidiş would never discover it.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-muted-foreground tracking-wider">03</span>
                <h3 className="text-sm font-bold text-foreground">The Lost Control Problem</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                During the application process, the <strong className="text-foreground">customer's phone is taken by the sales rep</strong>. The customer watches passively while a stranger navigates their banking app, enters passwords, and approves contracts. This creates fundamental trust erosion at the very first touchpoint.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-muted-foreground tracking-wider">04</span>
                <h3 className="text-sm font-bold text-foreground">The Knowledge Gap Problem</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sales reps lacked clear, accurate information about AlışGidiş terms. <strong className="text-foreground">Interest rates were quoted inconsistently</strong>. One rep said 14%, another said 44%. The speed of the second answer "made me think twice."
              </p>
            </div>
          </div>

          <img
            src="/images/beyond-the-screen/bnpl-experience.png"
            alt="The Full Purchase Experience — Troubling BNPL Journey: Sales rep takes phone, enters passwords, controls banking app, calls for code, customer completes purchase"
            className="w-full rounded-lg border border-border"
          />
          <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
            The Full Purchase Experience — Troubling BNPL Journey
          </p>
        </div>
      </section>

      {/* ===== SECTION 5 — RECOMMENDATIONS ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            05 — Recommendations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "What I Proposed"
          </p>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 p-6 border border-border rounded-lg">
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Finding</p>
                <p className="text-sm text-foreground font-medium">Anti-Recommendation</p>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Recommendation</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Sales training program + aligned incentives</strong> for store reps. If reps are actively discouraging the product, the incentive structure is broken.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 p-6 border border-border rounded-lg">
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Finding</p>
                <p className="text-sm text-foreground font-medium">Invisible Product</p>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Recommendation</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Redesign in-store touchpoints</strong> and make BNPL the default payment suggestion, not a hidden alternative customers have to ask about.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 p-6 border border-border rounded-lg">
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Finding</p>
                <p className="text-sm text-foreground font-medium">Lost Control</p>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Recommendation</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Redesign the mobile application flow</strong> so customers can self-serve in-store. The customer should never lose control of their own device during a banking transaction.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 p-6 border border-border rounded-lg">
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Finding</p>
                <p className="text-sm text-foreground font-medium">Knowledge Gap</p>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Recommendation</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Create clear, simple reference materials</strong> for sales reps with accurate rates and terms. Inconsistent information destroys trust before it's built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — REFLECTION ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
            06 — Reflection
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            "What This Taught Me"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div />
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-3">
                  1. "The best research sometimes means becoming the user."
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Lab settings can't replicate the social dynamics, time pressure, and emotional weight of a real purchase decision. <strong className="text-foreground">Sometimes you need to leave the building. Literally.</strong>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-3">
                  2. "First impressions compound."
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  When 70% of your customers meet you through a broken experience, you don't have a retention problem. <strong className="text-foreground">you have an onboarding problem</strong>. The first touchpoint determines everything that follows.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-3">
                  3. "Data tells you what; the field tells you why."
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The churn numbers were available to everyone. It took <strong className="text-foreground">going into the store to understand the human reasons</strong> behind them. Analytics show the pattern; field research reveals the story.
                </p>
              </div>
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
                  onClick={() => navigateTo("/trust-by-design")}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Trust By Design — Workshop & CHI Paper →
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

export default BeyondTheScreen;
