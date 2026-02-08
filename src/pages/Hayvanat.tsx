import { usePageTransition } from "@/components/PageTransition";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

const Hayvanat = () => {
  const { navigateTo } = usePageTransition();
  const [homeHovered, setHomeHovered] = useState(false);

  return (
    <div className="bg-background min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center h-20 md:h-24">
            <button
              onClick={() => navigateTo("/")}
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              className="flex items-center gap-1 text-foreground font-bold text-base md:text-lg tracking-wide hover:opacity-70 transition-opacity"
            >
              <ChevronLeft size={20} strokeWidth={3} />
              {homeHovered ? "Country roads, take me home" : "Home"}
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO IMAGE ===== */}
      <section className="pt-24">
        <img
          src="/images/hayvanat/hero-mockup.png"
          alt="Hayvanat website redesign mockup"
          className="w-full object-cover"
        />
      </section>

      {/* ===== TITLE + SUBTITLE ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
            Hayvanat
          </h1>
          <p className="text-base text-muted-foreground">
            Redesigning a research platform for a study group exploring the role of animals in history
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
                Hayvanat is a study group dedicated to exploring the fascinating role of animals throughout human history. When joining the project, their WordPress website had <strong className="text-foreground">outdated content, poor navigation, and an inconsistent visual identity</strong>. It struggled to communicate the depth of their research and was hard for users to explore. The role was to redesign the website from the ground up.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Team: <strong className="text-foreground">1 UX Designer (Solo)</strong></p>
                <p>Tools: <strong className="text-foreground">Figma, Miro, Balsamiq, Wix</strong></p>
              </div>
            </div>

            {/* Right — Challenge + Goal */}
            <div>
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Challenge
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                The main challenge was creating a website that effectively communicates Hayvanat's unique mission while addressing technical requests like data search. The platform needed to resonate with <strong className="text-foreground">diverse users, from academics seeking resources to casual visitors</strong> intrigued by the fascinating stories of animal history.
              </p>

              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Goal
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                My goal was to <strong className="text-foreground">redesign the website from scratch, understand the group's goals, research user needs, and craft a platform</strong> that would bring their stories to life with an intuitive, search-first experience.
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
                Understanding The Users
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The first priority was to uncover who Hayvanat's users were and what they needed. I held <strong className="text-foreground">extensive meetings with the study group</strong> to understand their vision and audience.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complementing this with <strong className="text-foreground">competitive research analyzing websites of similar niche organizations</strong>, I developed a clear picture of what the platform needed to achieve.
              </p>
            </div>
            <div>
              <img
                src="/images/hayvanat/miro-workshop.png"
                alt="Miro workshop session"
                className="w-full rounded-lg"
              />
              <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                Miro Workshop
              </p>
            </div>
          </div>

          <img
            src="/images/hayvanat/portfolio-hq.avif"
            alt="Hayvanat portfolio showcase"
            className="w-full rounded-lg object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
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
            Creating User Personas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <p className="text-sm text-muted-foreground leading-relaxed">
              After grouping insights from meetings and research, I identified <strong className="text-foreground">what the potential users would say, think, do and feel</strong>. Three different personas were curated with a user-centered approach.
            </p>
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                01 — Melissa, <strong className="text-foreground">the Academic Researcher</strong>, is a historian or university professor looking for <strong className="text-foreground">detailed, credible resources</strong> on animals in history.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                02 — Arda, <strong className="text-foreground">the University Student</strong>, is a young learner seeking <strong className="text-foreground">accessible, engaging content</strong> for their academic studies.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                03 — Joe, <strong className="text-foreground">the Curious Enthusiast</strong>, is an animal lover exploring <strong className="text-foreground">compelling stories and visuals</strong> about animals throughout history.
              </p>
            </div>
          </div>

          {/* Persona images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center">
              <img
                src="/images/hayvanat/persona-academic.png"
                alt="Academic Researcher persona"
                className="w-full max-w-[200px] object-contain mb-3"
                style={{ mixBlendMode: "multiply" }}
              />
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">The Academic Researcher</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/hayvanat/persona-student.png"
                alt="University Student persona"
                className="w-full max-w-[200px] object-contain mb-3"
                style={{ mixBlendMode: "multiply" }}
              />
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">The University Student</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/hayvanat/persona-curious.png"
                alt="Curious Enthusiast persona"
                className="w-full max-w-[200px] object-contain mb-3"
                style={{ mixBlendMode: "multiply" }}
              />
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">The Curious Enthusiast</p>
            </div>
          </div>

          {/* How Might We + Key Features — 2 col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border pt-10">
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                How We Can Help Our Users
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                To conclude the research, I came up with a few How Might We statements to focus on user pain points:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                <li>How might we make historical animal research accessible to diverse audiences?</li>
                <li>How might we help users discover content through intuitive search?</li>
                <li>How might we communicate credibility while keeping the experience engaging?</li>
                <li>How might we build a platform that grows with the study group's research?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Identifying Key Features
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                After synthesizing the research, I prioritized user stories to figure out the Minimum Viable Product (MVP):
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                As Melissa/Arda/Joe I want to:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                <li>search and discover content about animals in history</li>
                <li>browse a visually engaging and credible resource</li>
                <li>access content easily on any device</li>
                <li>explore the study group's database and publications</li>
                <li>understand the mission and story behind Hayvanat</li>
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
              From Wireframes to Design
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              From low-fidelity wireframes to medium-fidelity sketches, every design decision was guided by user personas. The challenge of working within a <strong className="text-foreground">no-code website builder</strong> was solved by hacking a way through with <strong className="text-foreground">low-code solutions</strong>. The UI aimed to feel calm and inviting — emotions associated with academic discovery and exploration.
            </p>
          </div>

          {/* Wireframes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <img
                src="/images/hayvanat/wireframe.png"
                alt="Balsamiq wireframe"
                className="w-full rounded-lg bg-white p-4"
              />
              <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                Balsamiq Wireframe
              </p>
            </div>
            <div>
              <img
                src="/images/hayvanat/sketch-1.jpg"
                alt="First landing page concept"
                className="w-full rounded-lg"
              />
              <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                First Landing Page Concept
              </p>
            </div>
          </div>

          <div className="mb-16">
            <img
              src="/images/hayvanat/sketch-2.jpg"
              alt="Early design exploration"
              className="w-full rounded-lg"
            />
            <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
              Early Design Exploration
            </p>
          </div>

          {/* Bringing designs to life */}
          <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
            Bringing The Designs To Life
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            The redesign featured a visually compelling homepage with Hayvanat's mission and an intuitive search-first approach. Large, visually engaging call-to-actions like 'Discover Our Database' encouraged users to explore content while maintaining a calming design flow.
          </p>

          <img
            src="/images/hayvanat/hayvanat-web.png"
            alt="Hayvanat website redesign"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* ===== 04 — DELIVER ===== */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-16">
            04 — Deliver
          </h2>

          <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
            Results & Impact
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            Compared to the previous period (January 2 — December 31, 2024), the redesigned platform showed <strong className="text-foreground">massive growth across all key metrics</strong>. The mobile-first approach ensured accessibility across all devices, and the intuitive search-first experience brought users from all over the world.
          </p>

          {/* Metrics row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">3,302</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Site Sessions</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground text-green-600">1,745%</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Session Growth</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground">1,962</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Unique Visitors</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-foreground text-green-600">1,700%</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Visitor Growth</span>
            </div>
          </div>

          {/* Traffic sources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-6">
                Sessions by Source
              </h4>
              <div className="space-y-4">
                {[
                  { source: "Direct", sessions: 1688, growth: "1,677%" },
                  { source: "Google (Organic)", sessions: 1096, growth: "2,944%" },
                  { source: "Instagram (Organic)", sessions: 228, growth: "1,420%" },
                  { source: "Yandex (Organic)", sessions: 58, growth: "5,700%" },
                ].map((item) => (
                  <div key={item.source} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{item.source}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-green-600 font-medium">+{item.growth}</span>
                      <span className="text-sm font-bold text-foreground w-16 text-right">{item.sessions.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-6">
                Sessions by Country
              </h4>
              <div className="space-y-4">
                {[
                  { country: "Turkey", sessions: 2427 },
                  { country: "Cambodia", sessions: 168 },
                  { country: "United States", sessions: 100 },
                  { country: "Thailand", sessions: 79 },
                  { country: "Russia", sessions: 63 },
                ].map((item) => (
                  <div key={item.country}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{item.country}</span>
                      <span className="text-sm font-bold text-foreground">{item.sessions.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-foreground/60 rounded-full"
                        style={{ width: `${(item.sessions / 2427) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
                <p className="text-[11px] text-muted-foreground/50 mt-4 tracking-wider uppercase">
                  2,427 sessions from Turkey — reaching users worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Visual proof — analytics screenshots */}
          <div className="space-y-8 mb-16">
            <div>
              <img
                src="/images/hayvanat/traffic-overview.png"
                alt="Traffic overview — 3,302 site sessions, 1,745% growth"
                className="w-full rounded-lg border border-border"
              />
              <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                Traffic Overview — Compared to Previous Period (Jan 2 — Dec 31, 2024)
              </p>
            </div>
            <div>
              <img
                src="/images/hayvanat/sessions-by-country.png"
                alt="Sessions by country — 2,427 from Turkey"
                className="w-full rounded-lg border border-border"
              />
              <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-wider uppercase">
                Sessions by Country — Global Reach
              </p>
            </div>
          </div>
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
                This project reinforced the importance of <strong className="text-foreground">deeply understanding the users before jumping into design</strong>. Working with a niche research group meant I had to immerse myself in a world I wasn't familiar with — and that process of discovery made the final product far more authentic.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                What I'm most proud of is the ability to take a platform with <strong className="text-foreground">outdated content and poor navigation</strong> and turn it into something that the study group and their audience could genuinely be proud of.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Moving forward</strong>, I would continue to conduct user interviews and usability testing to better understand how different audience segments interact with the platform post-launch.
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

export default Hayvanat;
