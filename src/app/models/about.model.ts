export interface AboutIntroduction {
  professionalTitle: string;
  shortIntroduction: string;
  profileImageAlt: string;
}

export interface AboutTimelineMilestone {
  title: string;
  description: string;
}

export interface AboutCard {
  title: string;
  description: string;
}

export interface AboutAdaptabilitySection {
  summary: string;
  evidence: readonly AboutCard[];
}

export interface AboutPageData {
  introduction: AboutIntroduction;
  professionalMindset: readonly AboutCard[];
  adaptability: AboutAdaptabilitySection;
  journeyMilestones: readonly AboutTimelineMilestone[];
  engineeringPhilosophy: readonly AboutCard[];
  professionalValues: readonly AboutCard[];
}
