export interface ExperienceEntry {
  id: string;
  company: string;
  companyUrl?: string;
  logoUrl?: string;
  companyLogoSrc?: string;
  companyLogoAlt?: string;
  companyInitials?: string;
  period: string;
  startYear: string;
  role: string;
  context: string;
  learned: string[];
  keyLearning: string;
  relatedProjectSlugs: string[];
  recommendationLabel: string;
  recommendationAnchor: string;
}

export interface ExperienceCtaLink {
  label: string;
  route: string;
}
