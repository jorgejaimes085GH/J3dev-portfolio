export interface ExperienceEntry {
  id: string;
  company: string;
  period: string;
  role: string;
  context: string;
  learned: string[];
  keyLearning: string;
  relatedProjectSlugs: string[];
}

export interface ExperienceCtaLink {
  label: string;
  route: string;
}
