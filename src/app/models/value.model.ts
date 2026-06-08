export interface ValueIntroduction {
  title: string;
  introduction: string;
  supportingStatement: string;
}

export interface ValueCard {
  title: string;
  description: string;
  categoryLabel?: string;
}

export interface ValuePhilosophySummary {
  title: string;
  description: string;
  principles: readonly string[];
}

export interface ValueNavigationLink {
  label: string;
  route: string;
}

export interface ValuePageData {
  introduction: ValueIntroduction;
  valuePillars: readonly ValueCard[];
  contributionAreas: readonly ValueCard[];
  teamContributions: readonly ValueCard[];
  philosophySummary: ValuePhilosophySummary;
  evidenceLinks: readonly ValueNavigationLink[];
}
