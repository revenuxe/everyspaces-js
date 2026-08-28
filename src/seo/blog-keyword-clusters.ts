export type KeywordCluster = {
  slug: string;
  title: string;
  intent: "informational" | "transactional" | "comparison";
  targetKeyword: string;
  supportingKeywords: string[];
  targetUrl: string;
};

export const BANGALORE_KEYWORD_CLUSTERS: KeywordCluster[] = [
  {
    slug: "interior-design-cost",
    title: "Bangalore interior design cost guides",
    intent: "transactional",
    targetKeyword: "interior design cost in bangalore",
    supportingKeywords: [
      "2bhk interior cost bangalore",
      "3bhk interior cost bangalore",
      "modular kitchen cost bangalore",
    ],
    targetUrl: "/services/full-home-design",
  },
  {
    slug: "modular-kitchen",
    title: "Modular kitchen design in Bangalore",
    intent: "transactional",
    targetKeyword: "modular kitchen bangalore",
    supportingKeywords: [
      "u shaped kitchen bangalore",
      "parallel kitchen bangalore",
      "kitchen interior designers bangalore",
    ],
    targetUrl: "/services/modular-kitchen",
  },
  {
    slug: "locality-interiors",
    title: "Bangalore locality interior experts",
    intent: "comparison",
    targetKeyword: "best interior designers in bangalore localities",
    supportingKeywords: [
      "interior designers near me bangalore",
      "home interiors in whitefield",
      "indiranagar interior designers",
    ],
    targetUrl: "/bangalore",
  },
];
