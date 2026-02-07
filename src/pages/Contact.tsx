import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Page Header */}
        <h1 className="font-syne text-4xl md:text-6xl font-bold text-foreground mb-8">
          LET'S TALK
        </h1>
        <p className="font-syne text-lg text-muted-foreground mb-16 max-w-xl">
          Have a project in mind or want to discuss user research? I'd love to hear from you.
        </p>

        {/* Contact Links */}
        <div className="space-y-6">
          <a
            href="mailto:hello@taylan.com"
            className="group flex items-center gap-4 py-4 border-b border-border hover:border-foreground transition-colors"
          >
            <Mail size={24} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            <div className="flex-1">
              <span className="font-syne text-xl text-foreground">
                hello@taylan.com
              </span>
            </div>
            <ArrowUpRight
              size={20}
              className="text-muted-foreground group-hover:text-foreground transition-colors"
            />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 py-4 border-b border-border hover:border-foreground transition-colors"
          >
            <Linkedin size={24} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            <div className="flex-1">
              <span className="font-syne text-xl text-foreground">
                LinkedIn
              </span>
            </div>
            <ArrowUpRight
              size={20}
              className="text-muted-foreground group-hover:text-foreground transition-colors"
            />
          </a>
        </div>

        {/* Location */}
        <div className="mt-16">
          <span className="font-syne text-sm text-muted-foreground tracking-wider uppercase">
            Based in
          </span>
          <p className="font-syne text-2xl text-foreground mt-2">
            Istanbul, Turkey
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
