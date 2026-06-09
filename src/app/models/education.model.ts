export interface FormalEducationEntry {
  id: string;
  institution: string;
  location: string;
  achievement?: string;
  program?: string;
  year?: string;
  period?: string;
  status?: string;
  summary: string;
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
