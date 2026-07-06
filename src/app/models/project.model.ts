export interface ProjectTimeBlock {
  label: string;
  duration: string;
  note?: string;
}

export type ProjectLinkType = 'Demo' | 'GitHub' | 'Video' | 'Reference';

export interface ProjectLink {
  label: string;
  type: ProjectLinkType;
  url?: string;
  isExternal: boolean;
  isPlaceholder?: boolean;
  placeholderMessage?: string;
  typeLabel?: string;
  actionLabel?: string;
  description?: string;
  videoSrc?: string;
  embedUrl?: string;
  supportText?: string;
}

export interface ProjectDeploymentNode {
  title: string;
  details: {
    label: string;
    value: string;
    url?: string;
  }[];
  diagramTitle: string;
  diagramSubtitle: string;
  connectorLabel?: string;
}

export interface ProjectDeploymentEvidence {
  eyebrow: string;
  title: string;
  description: string;
  nodes: ProjectDeploymentNode[];
  actions: ProjectLink[];
}

export interface ProjectPlaceholders {
  companyName?: string;
  companyAddress?: string;
  companyPhone?: string;
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  officialWebsiteUrl?: string;
  logoLabel?: string;
}

export interface ProjectReferencePlaceholders {
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  availabilityNote?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  typeStatus: string;
  shortDescription: string;
  visualLabel: string;
  ctaLabel: string;
  overviewImageUrl?: string;
  thumbnailUrl?: string;
  compactLogoUrl?: string;
  experienceLogoUrl?: string;
  relatedLogoUrl?: string;
  logoUrl?: string;
  context: string[];
  architectureNotes: string[];
  technologies: string[];
  timeBlocks: ProjectTimeBlock[];
  links?: ProjectLink[];
  deploymentEvidence?: ProjectDeploymentEvidence;
  placeholders?: ProjectPlaceholders;
  referencePlaceholders?: ProjectReferencePlaceholders;
  sourceCodeNote: string;
  confidentialityNote: string;
}
