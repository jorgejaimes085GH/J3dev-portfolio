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

export interface AboutPageData {
  introduction: AboutIntroduction;
  journeyMilestones: readonly AboutTimelineMilestone[];
  engineeringPhilosophy: readonly AboutCard[];
  professionalValues: readonly AboutCard[];
}
