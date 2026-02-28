import { usePageTransition } from "@/components/PageTransition";
import { ChevronLeft, ExternalLink } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  verifyUrl?: string;
}

// Placeholder data — replace with your real certificates
const certificates: Certificate[] = [
  {
    title: "Professional Certificate in User Research",
    issuer: "Glasgow Caledonian University via UXDI",
    date: "January 2026",
    description: "University credit-rated qualification in User Research demonstrating mastery in understanding user needs, formulating research plans, extracting insights, and driving actionable outcomes through user-centric methodologies. SCQF credit-rated by Glasgow Caledonian University.",
    image: "/images/certificates/uxdi-user-research.png",
    verifyUrl: "https://www.credential.net/171868578",
  },
  {
    title: "Professional Diploma in UX Design",
    issuer: "Glasgow Caledonian University via UXDI",
    date: "2023",
    description: "Deep dive into interaction design principles, information architecture, and user-centered design processes.",
    image: "/images/certificates/nngroup-certificate.png",
    verifyUrl: "https://www.credential.net/124892631",
  },
  {
    title: "Design Thinking Certificate",
    issuer: "IDEO U",
    date: "2023",
    description: "Human-centered design methodology training focused on empathy, ideation, and rapid prototyping.",
    verifyUrl: "",
  },
  {
    title: "Service Design Fundamentals",
    issuer: "NNGroup",
    date: "2022",
    description: "End-to-end service design covering journey mapping, blueprinting, and organizational alignment.",
    verifyUrl: "",
  },
];

const AlwaysLearning = () => {
  const { navigateTo } = usePageTransition();

  return (
    <div className="bg-background min-h-screen">
      {/* Nav */}
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

      {/* Title */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
            Always Learning
          </h1>
          <p className="text-base text-muted-foreground">
            Certificates, diplomas, and continuous learning milestones that shape my practice.
          </p>
        </div>
      </section>

      {/* Certificates */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-16">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index < certificates.length - 1 ? "pb-16 border-b border-border" : ""
                }`}
              >
                {/* Image */}
                {cert.image ? (
                  <a
                    href={cert.verifyUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 hover:opacity-90 transition-opacity"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="max-w-xs w-full rounded shadow-lg"
                    />
                  </a>
                ) : null}

                {/* Details */}
                <div className="flex flex-col justify-center">
                  <span className="text-[11px] font-bold text-muted-foreground tracking-[0.15em] uppercase mb-2">
                    {cert.date}
                  </span>
                  <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-foreground font-medium tracking-wide mt-4 hover:opacity-70 transition-opacity"
                    >
                      Verify credential
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlwaysLearning;
