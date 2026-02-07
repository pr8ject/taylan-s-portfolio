import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fintech App Redesign",
    category: "UX Research & Strategy",
    year: "2024",
  },
  {
    id: 2,
    title: "Banking Experience Audit",
    category: "User Research",
    year: "2024",
  },
  {
    id: 3,
    title: "Investment Platform",
    category: "Product Design",
    year: "2023",
  },
  {
    id: 4,
    title: "Mobile Payments Flow",
    category: "Interaction Design",
    year: "2023",
  },
];

const Work = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <h1 className="font-syne text-4xl md:text-6xl font-bold text-foreground mb-4">
          WORK
        </h1>
        <p className="font-syne text-lg text-muted-foreground mb-16 max-w-xl">
          Selected projects showcasing user-centered design solutions and research methodologies.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                <span className="font-syne text-sm text-muted-foreground tracking-wider">
                  PROJECT {project.id}
                </span>
              </div>

              {/* Project Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-syne text-xl font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h2>
                  <p className="font-syne text-sm text-muted-foreground mt-1">
                    {project.category} — {project.year}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-foreground transition-colors mt-1"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
