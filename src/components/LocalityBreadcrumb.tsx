import { ChevronRight, Home } from "lucide-react";

interface LocalityBreadcrumbProps {
  localityName: string;
}

const LocalityBreadcrumb = ({ localityName }: LocalityBreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="bg-muted/50 border-b border-border">
      <div className="container px-4 py-3">
        <ol className="flex items-center gap-2 text-sm font-body">
          <li>
            <a 
              href="https://everyspaces.com/" 
              className="flex items-center gap-1 text-muted-foreground hover:text-secondary transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
          </li>
          <li>
            <a 
              href="/hyderabad" 
              className="text-muted-foreground hover:text-secondary transition-colors"
            >
              Hyderabad
            </a>
          </li>
          <li>
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
          </li>
          <li>
            <span className="text-foreground font-medium">{localityName}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default LocalityBreadcrumb;

