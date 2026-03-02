import { Link, useLocation } from "react-router-dom";
import orzaIcon from "@/assets/orza-icon.webp";

const FloatingOrzaButton = () => {
  const location = useLocation();
  
  // Hide on Orza AI page and admin pages
  if (location.pathname === "/orza-ai" || location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <Link
      to="/orza-ai"
      className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-2.5 px-5 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <img src={orzaIcon} alt="Orza" className="w-7 h-7 rounded-full object-contain bg-white" />
      <span className="text-sm font-semibold">Ask Orza</span>
    </Link>
  );
};

export default FloatingOrzaButton;
