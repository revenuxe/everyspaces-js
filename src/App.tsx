import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import QuotationPopup from "./components/QuotationPopup";
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
import ServicePoojaRoom from "./pages/services/ServicePoojaRoom";
import ServiceFoyer from "./pages/services/ServiceFoyer";
import ServiceTVUnit from "./pages/services/ServiceTVUnit";
import ServiceFalseCeiling from "./pages/services/ServiceFalseCeiling";
import ServiceCrockeryUnit from "./pages/services/ServiceCrockeryUnit";
import ServiceStudyRoom from "./pages/services/ServiceStudyRoom";
import ServiceGuestRoom from "./pages/services/ServiceGuestRoom";
import ServiceBalcony from "./pages/services/ServiceBalcony";
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

// Locality pages
import Indiranagar from "./pages/localities/Indiranagar";
import Whitefield from "./pages/localities/Whitefield";
import HSRLayout from "./pages/localities/HSRLayout";
import Koramangala from "./pages/localities/Koramangala";
import JPNagar from "./pages/localities/JPNagar";
import Jayanagar from "./pages/localities/Jayanagar";
import Marathahalli from "./pages/localities/Marathahalli";
import ElectronicCity from "./pages/localities/ElectronicCity";
import SarjapurRoad from "./pages/localities/SarjapurRoad";
import Bellandur from "./pages/localities/Bellandur";
import BTMLayout from "./pages/localities/BTMLayout";
import Hebbal from "./pages/localities/Hebbal";
import Yelahanka from "./pages/localities/Yelahanka";
import Banashankari from "./pages/localities/Banashankari";
import Malleshwaram from "./pages/localities/Malleshwaram";
import Rajajinagar from "./pages/localities/Rajajinagar";
import Basavanagudi from "./pages/localities/Basavanagudi";
import Sadashivanagar from "./pages/localities/Sadashivanagar";
import RTNagar from "./pages/localities/RTNagar";
import Vijayanagar from "./pages/localities/Vijayanagar";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <QuotationPopup />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bangalore" element={<Bangalore />} />
            <Route path="/portfolio" element={<Portfolio />} />
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
            <Route path="/services/pooja-room" element={<ServicePoojaRoom />} />
            <Route path="/services/foyer-entrance" element={<ServiceFoyer />} />
            <Route path="/services/tv-unit" element={<ServiceTVUnit />} />
            <Route path="/services/false-ceiling" element={<ServiceFalseCeiling />} />
            <Route path="/services/crockery-unit" element={<ServiceCrockeryUnit />} />
            <Route path="/services/study-room" element={<ServiceStudyRoom />} />
            <Route path="/services/guest-room" element={<ServiceGuestRoom />} />
            <Route path="/services/balcony-design" element={<ServiceBalcony />} />
            <Route path="/price-calculator" element={<PriceCalculator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            
            {/* Locality Pages */}
            <Route path="/bangalore/indiranagar" element={<Indiranagar />} />
            <Route path="/bangalore/whitefield" element={<Whitefield />} />
            <Route path="/bangalore/hsr-layout" element={<HSRLayout />} />
            <Route path="/bangalore/koramangala" element={<Koramangala />} />
            <Route path="/bangalore/jp-nagar" element={<JPNagar />} />
            <Route path="/bangalore/jayanagar" element={<Jayanagar />} />
            <Route path="/bangalore/marathahalli" element={<Marathahalli />} />
            <Route path="/bangalore/electronic-city" element={<ElectronicCity />} />
            <Route path="/bangalore/sarjapur-road" element={<SarjapurRoad />} />
            <Route path="/bangalore/bellandur" element={<Bellandur />} />
            <Route path="/bangalore/btm-layout" element={<BTMLayout />} />
            <Route path="/bangalore/hebbal" element={<Hebbal />} />
            <Route path="/bangalore/yelahanka" element={<Yelahanka />} />
            <Route path="/bangalore/banashankari" element={<Banashankari />} />
            <Route path="/bangalore/malleshwaram" element={<Malleshwaram />} />
            <Route path="/bangalore/rajajinagar" element={<Rajajinagar />} />
            <Route path="/bangalore/basavanagudi" element={<Basavanagudi />} />
            <Route path="/bangalore/sadashivanagar" element={<Sadashivanagar />} />
            <Route path="/bangalore/rt-nagar" element={<RTNagar />} />
            <Route path="/bangalore/vijayanagar" element={<Vijayanagar />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
