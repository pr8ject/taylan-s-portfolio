const About = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <h1 className="font-syne text-4xl md:text-6xl font-bold text-foreground mb-16">
          ABOUT
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Photo Placeholder */}
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
              <span className="font-syne text-sm text-muted-foreground tracking-wider">
                PHOTO
              </span>
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-syne text-2xl font-medium text-foreground mb-4">
                Hello, I'm Taylan
              </h2>
              <p className="font-syne text-base text-muted-foreground leading-relaxed mb-4">
                I'm a UX Researcher specializing in fintech and digital banking experiences. With a background in behavioral psychology and human-computer interaction, I help organizations understand their users and create products that truly resonate.
              </p>
              <p className="font-syne text-base text-muted-foreground leading-relaxed">
                My approach combines quantitative data analysis with qualitative research methods to uncover deep insights about user behavior and motivation.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-syne text-lg font-medium text-foreground mb-4">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "User Research",
                  "Usability Testing",
                  "Behavioral Analysis",
                  "Design Thinking",
                  "Data Analysis",
                  "Prototyping",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="font-syne text-sm text-muted-foreground px-4 py-2 border border-border rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-syne text-lg font-medium text-foreground mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-syne text-base text-foreground">Senior UX Researcher</p>
                  <p className="font-syne text-sm text-muted-foreground">Fintech Company — 2022–Present</p>
                </div>
                <div>
                  <p className="font-syne text-base text-foreground">UX Researcher</p>
                  <p className="font-syne text-sm text-muted-foreground">Digital Agency — 2019–2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
