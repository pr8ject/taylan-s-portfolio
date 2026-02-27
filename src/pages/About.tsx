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
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-white/10 rounded-lg overflow-hidden">
                <img
                  src="/images/about-photo.jpg"
                  alt="Özgür Taylan Çelik"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-white mb-4">
                  Hello, I'm Taylan
                </h2>
                <p className="text-base text-white/70 leading-relaxed mb-4">
                  I'm an experience designer who believes great products start with understanding people. Whether it's uncovering how users interact with fintech platforms, mapping the journey through a redesigned website, or designing an AI-native research toolI start with real problems and real conversations, not assumptions.
                </p>
                <p className="text-base text-white/70 leading-relaxed">
                  I bring stakeholders together through workshops to align on what matters, then validate those insights through research and prototyping. I care about the gapsbetween what users need and what teams build, between business goals and user behavior, between design intention and reality. My work bridges those gaps by turning research into decisions, decisions into products, and products into measurable change.
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
                    "Product Design",
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

              {/* Experience & Let's Talk */}
              <div className="space-y-8">
                {/* Experience */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">
                    Experience
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-base text-white font-medium">Fibabanka</p>
                      <p className="text-sm text-white/50">2022 to Present</p>
                      <p className="text-sm text-white/70 mt-1">Leading design and research initiatives in fintech</p>
                    </div>
                    <div>
                      <p className="text-base text-white font-medium">Local Leader, IxDF Ankara</p>
                      <p className="text-sm text-white/50">Dec 2024 to Present</p>
                      <p className="text-sm text-white/70 mt-1">Building the design community and mentoring emerging designers</p>
                    </div>
                    <div>
                      <p className="text-base text-white font-medium">Consultant, Experience Design Initiative</p>
                      <p className="text-sm text-white/50">2022 to Present</p>
                      <p className="text-sm text-white/70 mt-1">Advising on research-driven product and service design</p>
                    </div>
                  </div>
                </div>

                {/* Let's Talk */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-6">
                    Let's Talk
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://www.linkedin.com/in/ozgur-taylan-celik/"
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
          </div>
        </div>
      </section>

      {/* Footer  About page only */}
      <footer className="px-6 md:px-12 lg:px-24 pb-8">
        {/* Shapes  placeholders for now */}
        <div className="flex items-center justify-center gap-8 md:gap-16 py-16 md:py-24">
          <img src="/images/eye.png" alt="Eye" className="w-64 h-64 md:w-96 md:h-96 object-contain" />
          <img src="/images/nail-clipper.png" alt="Nail Clipper" className="w-64 h-64 md:w-96 md:h-96 object-contain" />
          <img src="/images/macbook.png" alt="Macbook" className="w-64 h-64 md:w-96 md:h-96 object-contain" />
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
            <a href="https://www.instagram.com/celiktaylan/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/ozgur-taylan-celik/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
