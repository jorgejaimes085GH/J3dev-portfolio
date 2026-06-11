export interface AboutIntroduction {
  professionalTitle: string;
  shortIntroduction: string;
  profileImageAlt: string;
  profileImageUrl?: string;
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
  adaptability: AboutAdaptabilitySection;
  journeyMilestones: readonly AboutTimelineMilestone[];
  howJorgeWorks: readonly AboutCard[];
  professionalValues: readonly AboutCard[];
}
