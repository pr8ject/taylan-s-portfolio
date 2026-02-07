import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <Link
      to="/work"
      className="group hidden lg:block absolute top-32 right-12 xl:right-24 w-72 bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      {/* Project Image Placeholder */}
      <div className="aspect-[4/3] bg-muted flex items-center justify-center">
        <span className="font-syne text-xs text-muted-foreground tracking-wider">
          CASE STUDY
        </span>
      </div>
      
      {/* Project Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-syne text-sm font-medium text-foreground">
              Fintech App Redesign
            </h3>
            <p className="font-syne text-xs text-muted-foreground mt-1">
              UX Research & Strategy
            </p>
          </div>
          <ArrowUpRight 
            size={16} 
            className="text-muted-foreground group-hover:text-foreground transition-colors mt-1" 
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
