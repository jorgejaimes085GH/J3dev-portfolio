export interface FormalEducationEntry {
  id: string;
  institution: string;
  institutionUrl?: string;
  logoUrl?: string;
  institutionLogoSrc?: string;
  institutionLogoAlt?: string;
  location: string;
  achievement?: string;
  program?: string;
  year?: string;
  period?: string;
  status?: string;
  summary: string;
}

export interface SelfTaughtEducationEntry {
  id: string;
  period: string;
  title: string;
  description: string;
  focusAreas: string[];
  keyLearning: string;
}

export interface ContinuousLearningEntry {
  id: string;
  title: string;
  focusAreas: string[];
  summary: string;
}

export interface EducationHighlight {
  title: string;
  description: string;
}

export interface EducationCtaLink {
  label: string;
  route: string;
}
