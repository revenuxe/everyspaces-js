import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="container px-4 py-3 md:py-4"
    >
      <ol className="flex items-center flex-wrap gap-1 text-sm font-body">
        <li className="flex items-center">
          <Link 
            href="/" 
            className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-1"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only md:not-sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-muted-foreground/50 mx-1" aria-hidden="true" />
            {item.href ? (
              <Link 
                href={item.href} 
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
