export interface JourneyStage {
  id: string;
  yearLabel: string;
  title: string;
  periodLabel: string;
  summary: string;
  focusAreas: string[];
  keyLearning: string;
  relatedProjectSlugs?: string[];
  evidenceNote?: string;
}

export interface JourneyInsight {
  title: string;
  description: string;
}

export interface JourneyCtaLink {
  label: string;
  route: string;
}
