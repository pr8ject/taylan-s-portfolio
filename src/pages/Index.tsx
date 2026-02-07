import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
      {/* Floating Project Card */}
      <ProjectCard />

      {/* Hero Content */}
      <div className="max-w-4xl">
        {/* Intro Paragraph */}
        <p className="font-syne text-base md:text-xl font-normal text-muted-foreground leading-relaxed max-w-xl mb-8 md:mb-12">
          UX Researcher crafting human-centered experiences through behavioral insights and design thinking. Bridging fintech innovation with user needs.
        </p>

        {/* Massive Hero Text */}
        <h1 className="font-syne text-[80px] md:text-[140px] lg:text-[200px] font-extrabold text-foreground leading-[0.85] tracking-[-0.02em]">
          TAYLAN
        </h1>

        {/* Subtle Tagline */}
        <p className="font-syne text-sm md:text-lg font-light text-muted-foreground mt-6 md:mt-8 tracking-wide">
          For today's users. For tomorrow's experiences.®
        </p>
      </div>
    </section>
  );
};

export default Index;
