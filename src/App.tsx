import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Bangalore from "./pages/Bangalore";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Service2BHK from "./pages/services/Service2BHK";
import Service3BHK from "./pages/services/Service3BHK";
import ServiceVilla from "./pages/services/ServiceVilla";
import ServiceFullHome from "./pages/services/ServiceFullHome";
import ServiceModularKitchen from "./pages/services/ServiceModularKitchen";
import ServiceBedroom from "./pages/services/ServiceBedroom";
import ServiceLivingRoom from "./pages/services/ServiceLivingRoom";
import ServiceWardrobe from "./pages/services/ServiceWardrobe";
import ServiceHomeOffice from "./pages/services/ServiceHomeOffice";
import ServiceKidsRoom from "./pages/services/ServiceKidsRoom";
import ServiceDiningRoom from "./pages/services/ServiceDiningRoom";
import ServiceBathroom from "./pages/services/ServiceBathroom";
import PriceCalculator from "./pages/PriceCalculator";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bangalore" element={<Bangalore />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/2bhk-interiors" element={<Service2BHK />} />
            <Route path="/services/3bhk-interiors" element={<Service3BHK />} />
            <Route path="/services/villa-interiors" element={<ServiceVilla />} />
            <Route path="/services/full-home-design" element={<ServiceFullHome />} />
            <Route path="/services/modular-kitchen" element={<ServiceModularKitchen />} />
            <Route path="/services/bedroom-design" element={<ServiceBedroom />} />
            <Route path="/services/living-room" element={<ServiceLivingRoom />} />
            <Route path="/services/wardrobe-design" element={<ServiceWardrobe />} />
            <Route path="/services/home-office" element={<ServiceHomeOffice />} />
            <Route path="/services/kids-room" element={<ServiceKidsRoom />} />
            <Route path="/services/dining-room" element={<ServiceDiningRoom />} />
            <Route path="/services/bathroom-design" element={<ServiceBathroom />} />
            <Route path="/price-calculator" element={<PriceCalculator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
