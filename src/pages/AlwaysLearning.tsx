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
    date: "2025",
    description: "Deep dive into interaction design principles, information architecture, and user-centered design processes.",
    image: "/images/certificates/nngroup-certificate.png",
    verifyUrl: "https://www.credential.net/124892631",
  },
  {
    title: "Conversation Design: Practical Tips for AI Design",
    issuer: "Interaction Design Foundation (IxDF)",
    date: "2025",
    description: "Master Class on designing conversational AI experiences, covering practical approaches to conversation design and AI-driven interactions.",
    image: "/images/certificates/ixdf-conversation-design.png",
    verifyUrl: "https://www.interaction-design.org/members/ozgur-taylan-celik/certificate/masterclass/mcc_5d72290bf2444fe6a1cc1e772d2fa629",
  },
  {
    title: "Design for AI Agents: Healthcare and High-Stakes Systems",
    issuer: "Interaction Design Foundation (IxDF)",
    date: "2025",
    description: "Master Class on designing AI agent experiences for healthcare and high-stakes systems, covering safety, trust, and responsible AI design patterns.",
    image: "/images/certificates/ixdf-ai-agents-healthcare.png",
    verifyUrl: "https://www.interaction-design.org/members/ozgur-taylan-celik/certificate/masterclass/mcc_81647da2a2f1426895af5388dbcf72e4",
  },
  {
    title: "Personas and User Research: Design Products and Services People Need and Want",
    issuer: "Interaction Design Foundation (IxDF)",
    date: "2025",
    description: "Top 10% Distinction. Mastery in creating effective design personas based on real user research, conducting qualitative research, applying grounded theory principles, and using affinity diagramming to develop actionable personas.",
    image: "/images/certificates/ixdf-personas-user-research.png",
    verifyUrl: "https://www.interaction-design.org/members/ozgur-taylan-celik/certificate/course/0167bcc0-81ad-416d-ba65-7fe2c7246739",
  },
  {
    title: "UX Research",
    issuer: "Uxcel",
    date: "May 2025",
    description: "Completed the intermediate-level UX Research course, equivalent to 6+ hours of professional training. Credentials verified.",
    image: "/images/certificates/uxcel-ux-research.png",
    verifyUrl: "https://app.uxcel.com/certificates/084YS2CKHUXA",
  },
  {
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM",
    date: "January 2025",
    description: "Foundational credential in applying Enterprise Design Thinking, covering empathy, ideation, and user-centered design in everyday practice.",
    image: "/images/certificates/ibm-design-thinking.png",
    verifyUrl: "https://www.credly.com/badges/350e2524-5ca0-4838-af47-5e8cf4f0b3eb/linked_in_profile",
  },
  {
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    date: "July 2024",
    description: "Developed practical skills for the future of work including the McKinsey approach to problem-solving, effective communication, and building adaptable and resilient mindsets.",
    image: "/images/certificates/mckinsey-forward.png",
    verifyUrl: "https://www.credly.com/badges/ae26896f-0da0-421f-8d29-a8770add2cbf",
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
