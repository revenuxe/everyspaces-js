import { MapPin, Lightbulb, Building2, TreePine } from "lucide-react";

interface LocalityLandmark {
  name: string;
  description: string;
  type: "landmark" | "lifestyle" | "residential" | "nature";
}

interface DesignTip {
  title: string;
  description: string;
}

interface LocalityContentSectionProps {
  localityName: string;
  landmarks?: LocalityLandmark[];
  designTips?: DesignTip[];
  lifestyleDescription?: string;
}

const iconMap = {
  landmark: MapPin,
  lifestyle: Building2,
  residential: Building2,
  nature: TreePine,
};

const LocalityContentSection = ({
  localityName,
  landmarks = [],
  designTips = [],
  lifestyleDescription,
}: LocalityContentSectionProps) => {
  if (landmarks.length === 0 && designTips.length === 0 && !lifestyleDescription) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container px-4">
        {/* Lifestyle Description */}
        {lifestyleDescription && (
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary font-semibold rounded-full text-sm mb-4">
              About {localityName}
            </span>
            <p className="text-muted-foreground font-body text-lg leading-relaxed locality-description">
              {lifestyleDescription}
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Local Landmarks */}
          {landmarks.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-secondary" />
                <h2 className="font-display text-2xl text-primary">
                  Life in {localityName}
                </h2>
              </div>
              <div className="space-y-4">
                {landmarks.map((landmark, index) => {
                  const Icon = iconMap[landmark.type] || MapPin;
                  return (
                    <div
                      key={index}
                      className="bg-background rounded-lg p-4 border border-border/50 hover:border-secondary/30 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                          <Icon className="w-4 h-4 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-display text-primary text-sm font-semibold mb-1">
                            {landmark.name}
                          </h3>
                          <p className="text-muted-foreground text-sm font-body leading-relaxed">
                            {landmark.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Design Tips */}
          {designTips.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5 text-secondary" />
                <h2 className="font-display text-2xl text-primary">
                  Design Tips for {localityName} Homes
                </h2>
              </div>
              <div className="space-y-4">
                {designTips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-lg p-4 border border-border/50 hover:border-secondary/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-display text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-display text-primary text-sm font-semibold mb-1">
                          {tip.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-body leading-relaxed">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocalityContentSection;
