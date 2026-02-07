const articles = [
  {
    id: 1,
    title: "The Psychology of Trust in Digital Banking",
    excerpt: "Exploring how cognitive biases influence user trust in fintech applications.",
    date: "January 2024",
  },
  {
    id: 2,
    title: "Behavioral Patterns in Mobile Payments",
    excerpt: "A deep dive into user behavior when making financial transactions on mobile devices.",
    date: "December 2023",
  },
  {
    id: 3,
    title: "Accessibility in Financial Services",
    excerpt: "How inclusive design practices can improve financial product adoption.",
    date: "November 2023",
  },
];

const Research = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <h1 className="font-syne text-4xl md:text-6xl font-bold text-foreground mb-4">
          RESEARCH
        </h1>
        <p className="font-syne text-lg text-muted-foreground mb-16 max-w-xl">
          Insights and methodologies from my work in user experience research.
        </p>

        {/* Articles List */}
        <div className="space-y-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer border-b border-border pb-12 last:border-b-0"
            >
              <span className="font-syne text-xs text-muted-foreground tracking-wider uppercase">
                {article.date}
              </span>
              <h2 className="font-syne text-2xl md:text-3xl font-medium text-foreground mt-3 mb-3 group-hover:text-muted-foreground transition-colors">
                {article.title}
              </h2>
              <p className="font-syne text-base text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
