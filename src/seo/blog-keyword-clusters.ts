export type KeywordCluster = {
  slug: string;
  title: string;
  intent: "informational" | "transactional" | "comparison";
  targetKeyword: string;
  supportingKeywords: string[];
  targetUrl: string;
};

export const HYDERABAD_KEYWORD_CLUSTERS: KeywordCluster[] = [
  {
    slug: "interior-design-cost",
    title: "Hyderabad interior design cost guides",
    intent: "transactional",
    targetKeyword: "interior design cost in hyderabad",
    supportingKeywords: [
      "2bhk interior cost hyderabad",
      "3bhk interior cost hyderabad",
      "modular kitchen cost hyderabad",
    ],
    targetUrl: "/services/full-home-design",
  },
  {
    slug: "modular-kitchen",
    title: "Modular kitchen design in Hyderabad",
    intent: "transactional",
    targetKeyword: "modular kitchen hyderabad",
    supportingKeywords: [
      "u shaped kitchen hyderabad",
      "parallel kitchen hyderabad",
      "kitchen interior designers hyderabad",
    ],
    targetUrl: "/services/modular-kitchen",
  },
  {
    slug: "locality-interiors",
    title: "Hyderabad locality interior experts",
    intent: "comparison",
    targetKeyword: "best interior designers in hyderabad localities",
    supportingKeywords: [
      "interior designers near me hyderabad",
      "home interiors in hitech city",
      "gachibowli interior designers",
    ],
    targetUrl: "/hyderabad",
  },
];
