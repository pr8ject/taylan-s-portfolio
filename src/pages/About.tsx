const About = () => {
  return (
    <div className="bg-[#2C42E7]">
      <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-16">
            ABOUT
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Photo Placeholder */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-sm text-white/50 tracking-wider">
                  PHOTO
                </span>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-white mb-4">
                  Hello, I'm Taylan
                </h2>
                <p className="text-base text-white/70 leading-relaxed mb-4">
                  I'm a research-led experience designer who discovers opportunities, aligns stakeholders through workshops, and turns insights into tested, shippable product experiences. I specialize in fintech and digital banking — leading product discovery research, facilitating concept workshops, designing interaction flows, and running moderated usability tests to iterate on the final solution.
                </p>
                <p className="text-base text-white/70 leading-relaxed">
                  I frame problems in product language — risks, metrics, constraints — and use research to choose a direction, not just refine an existing one. My workshops align stakeholders and de-risk decisions; my flows and prototypes embody those decisions; and I measure what changed in the product, the business, and user behavior.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Product Discovery",
                    "UX Research",
                    "Stakeholder Workshops",
                    "Interaction Design",
                    "Usability Testing",
                    "Design Thinking",
                    "Prototyping",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-white/70 px-4 py-2 border border-white/20 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">
                  Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-base text-white">Experience Designer</p>
                    <p className="text-sm text-white/50">Fintech Company — 2022–Present</p>
                  </div>
                  <div>
                    <p className="text-base text-white">Experience Designer</p>
                    <p className="text-sm text-white/50">Digital Agency — 2019–2022</p>
                  </div>
                </div>
              </div>
            </div>

              {/* Contact */}
              <div className="pt-4">
                <h3 className="text-lg font-medium text-white mb-6">
                  Let's Talk
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@taylan.com"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  >
                    <span className="text-base">hello@taylan.com</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  >
                    <span className="text-base">LinkedIn</span>
                  </a>
                </div>
                <div className="mt-6">
                  <span className="text-xs text-white/40 tracking-wider uppercase">
                    Based in
                  </span>
                  <p className="text-base text-white mt-1">
                    Istanbul, Turkey
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Footer — About page only */}
      <footer className="px-6 md:px-12 lg:px-24 pb-8">
        {/* Shapes — placeholders for now */}
        <div className="flex items-center justify-center gap-8 md:gap-16 py-16 md:py-24">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-2xl flex items-center justify-center">
            <span className="text-[10px] text-white/30 tracking-wider">SHAPE</span>
          </div>
          <div className="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-2xl flex items-center justify-center">
            <span className="text-[10px] text-white/30 tracking-wider">SHAPE</span>
          </div>
          <div className="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-2xl flex items-center justify-center">
            <span className="text-[10px] text-white/30 tracking-wider">SHAPE</span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pt-8 border-t border-white/10">
          <div>
            <p className="text-xs text-white/50 tracking-wider leading-relaxed">
              SITE CONTENT © ÖZGÜR TAYLAN ÇELİK
              <br />
              ALL RIGHTS RESERVED
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
