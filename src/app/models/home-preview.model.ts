export interface HomeValuePreview {
  title: string;
  description: string;
  label?: string;
}

export interface HomeProjectPreview {
  name: string;
  statusLabel: string;
  description: string;
  technologies: readonly string[];
  route: string;
  thumbnailUrl?: string;
}

export interface HomeSkillPreview {
  name: string;
  context: string;
}

export interface HomeSectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

export interface HomeProjectSectionCopy extends HomeSectionCopy {
  thumbnailAriaSuffix: string;
  thumbnailAltSuffix: string;
  technologyListSuffix: string;
  contextLinkPrefix: string;
  contextLinkSuffix: string;
}

export interface HomeSkillsSectionCopy extends HomeSectionCopy {
  listAriaLabel: string;
}

export interface HomeCtaCopy extends HomeSectionCopy {
  actionsAriaLabel: string;
  projectsLabel: string;
  skillsLabel: string;
}

export interface HomePageCopy {
  value: HomeSectionCopy;
  projects: HomeProjectSectionCopy;
  skills: HomeSkillsSectionCopy;
  cta: HomeCtaCopy;
}
