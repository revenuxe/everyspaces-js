import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, TrendingDown, Home, Building2, Castle } from "lucide-react";
import { StructuredData, createBreadcrumbSchema } from "@/components/StructuredData";
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Interior Design Cost Calculator",
  "description": "Calculate your home interior design cost instantly with Intorza's free calculator",
  "url": "https://intorza.com/price-calculator",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "provider": {
    "@type": "Organization",
    "name": "Intorza"
  }
};
const propertyTypes = [{
  id: "1bhk",
  label: "1 BHK",
  icon: Home,
  basePrice: 250000
}, {
  id: "2bhk",
  label: "2 BHK",
  icon: Home,
  basePrice: 400000
}, {
  id: "3bhk",
  label: "3 BHK",
  icon: Building2,
  basePrice: 600000
}, {
  id: "4bhk",
  label: "4 BHK",
  icon: Building2,
  basePrice: 850000
}, {
  id: "villa",
  label: "Villa",
  icon: Castle,
  basePrice: 1200000
}];
const packageTypes = [{
  id: "essential",
  label: "Essential",
  description: "Quality basics for budget-conscious homeowners",
  multiplier: 1,
  features: ["Modular Kitchen", "Wardrobes", "Basic Lighting", "Paint"]
}, {
  id: "premium",
  label: "Premium",
  description: "Elevated design with quality materials",
  multiplier: 1.5,
  features: ["Modular Kitchen", "Wardrobes", "False Ceiling", "Designer Lighting", "Premium Paint", "Wooden Flooring"]
}, {
  id: "luxury",
  label: "Luxury",
  description: "Bespoke interiors with finest finishes",
  multiplier: 2.2,
  features: ["Italian Modular Kitchen", "Walk-in Wardrobes", "Complete False Ceiling", "Chandeliers", "Wallpapers", "Imported Flooring", "Smart Home Integration"]
}];
const PriceCalculator = () => {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const calculatePrice = () => {
    if (!selectedProperty || !selectedPackage) return null;
    const property = propertyTypes.find(p => p.id === selectedProperty);
    const pkg = packageTypes.find(p => p.id === selectedPackage);
    if (!property || !pkg) return null;
    const competitorPrice = Math.round(property.basePrice * pkg.multiplier);
    const ourPrice = Math.round(competitorPrice * 0.9); // 10% lower
    const savings = competitorPrice - ourPrice;
    return {
      competitorPrice,
      ourPrice,
      savings
    };
  };
  const priceData = calculatePrice();
  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    }
    return `₹${price.toLocaleString("en-IN")}`;
  };
  return <>
      <Helmet>
        <title>Interior Design Cost Calculator | Get Instant Quote | Intorza Bangalore</title>
        <meta name="description" content="Calculate your home interior design cost instantly. 10% lower than competitors! Free estimates for 1BHK, 2BHK, 3BHK & Villa interiors in Bangalore." />
        <link rel="canonical" href="https://intorza.com/price-calculator" />
      </Helmet>
      <StructuredData data={[calculatorSchema, createBreadcrumbSchema([{
      name: "Home",
      url: "https://intorza.com"
    }, {
      name: "Price Calculator",
      url: "https://intorza.com/price-calculator"
    }])]} />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-32 md:pb-16">
          <div className="container px-4">
            {/* Hero Section */}
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                <TrendingDown className="w-3 h-3 mr-1" />
                10% Lower Than Competitors
              </Badge>
              <h1 className="font-display text-3xl md:text-5xl text-foreground mb-4 tracking-[-0.03em]">
                Interior Design
                <span className="block text-secondary">Price Calculator</span>
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Get instant estimates for your dream home. Transparent pricing with no hidden costs.
              </p>
            </div>

            {/* Calculator Card */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-lg">
                {/* Step 1: Property Type */}
                <div className="mb-8">
                  <h2 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-sm font-bold">1</span>
                    Select Property Type
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {propertyTypes.map(property => {
                    const Icon = property.icon;
                    return <button key={property.id} onClick={() => setSelectedProperty(property.id)} className={`relative p-4 rounded-2xl border-2 transition-all duration-300 ${selectedProperty === property.id ? "border-secondary bg-secondary/10 shadow-md" : "border-border hover:border-secondary/50 bg-background"}`}>
                          {selectedProperty === property.id && <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                              <Check className="w-4 h-4 text-secondary-foreground" />
                            </div>}
                          <Icon className={`w-8 h-8 mx-auto mb-2 ${selectedProperty === property.id ? "text-secondary" : "text-muted-foreground"}`} />
                          <span className={`text-sm font-medium ${selectedProperty === property.id ? "text-foreground" : "text-muted-foreground"}`}>
                            {property.label}
                          </span>
                        </button>;
                  })}
                  </div>
                </div>

                {/* Step 2: Package Type */}
                <div className="mb-8">
                  <h2 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-sm font-bold">2</span>
                    Choose Package
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {packageTypes.map(pkg => <button key={pkg.id} onClick={() => setSelectedPackage(pkg.id)} className={`relative p-5 rounded-2xl border-2 text-left transition-all duration-300 ${selectedPackage === pkg.id ? "border-secondary bg-secondary/10 shadow-md" : "border-border hover:border-secondary/50 bg-background"}`}>
                        {selectedPackage === pkg.id && <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                            <Check className="w-4 h-4 text-secondary-foreground" />
                          </div>}
                        <h3 className={`font-display text-lg mb-1 ${selectedPackage === pkg.id ? "text-foreground" : "text-muted-foreground"}`}>
                          {pkg.label}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-3">{pkg.description}</p>
                        <ul className="space-y-1">
                          {pkg.features.slice(0, 4).map((feature, i) => <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                              <Check className="w-3 h-3 text-accent" />
                              {feature}
                            </li>)}
                          {pkg.features.length > 4 && <li className="text-xs text-secondary">+{pkg.features.length - 4} more</li>}
                        </ul>
                      </button>)}
                  </div>
                </div>

                {/* Price Display */}
                {priceData && <div className="bg-gradient-to-br from-secondary/10 via-accent/5 to-secondary/10 rounded-2xl p-6 border border-secondary/20 animate-fade-up">
                    <div className="text-center mb-4">
                      <p className="text-sm text-muted-foreground mb-1">Estimated Price</p>
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-xl text-muted-foreground line-through">
                          {formatPrice(priceData.competitorPrice)}
                        </span>
                        <span className="font-display text-4xl md:text-5xl text-secondary">
                          {formatPrice(priceData.ourPrice)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <Badge className="bg-accent text-accent-foreground">
                        <TrendingDown className="w-3 h-3 mr-1" />
                        Save {formatPrice(priceData.savings)}
                      </Badge>
                      <Badge variant="outline" className="border-secondary/30 text-secondary">
                        10% Lower
                      </Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl py-6" onClick={() => window.location.href = "/contact"}>
                        Get Free Consultation
                      </Button>
                      <Button variant="outline" className="flex-1 border-secondary/30 text-secondary hover:bg-secondary/10 rounded-xl py-6" onClick={() => {
                    const message = `Hi! I'm interested in ${selectedProperty?.toUpperCase()} ${selectedPackage} package interior design. Estimated budget: ${formatPrice(priceData.ourPrice)}`;
                    window.open(`https://wa.me/919886579923?text=${encodeURIComponent(message)}`, "_blank");
                  }}>
                        WhatsApp Us
                      </Button>
                    </div>
                  </div>}

                {!priceData && <div className="text-center py-8 text-muted-foreground">
                    <p>Select property type and package to see your estimate</p>
                  </div>}
              </div>

              {/* Trust Badges */}
              
            </div>
          </div>
        </main>

        <Footer />
        <BottomNav />
      </div>
    </>;
};
export default PriceCalculator;