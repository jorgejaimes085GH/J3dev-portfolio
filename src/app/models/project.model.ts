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
  availabilityNote: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  typeStatus: string;
  shortDescription: string;
  visualLabel: string;
  overviewImageUrl?: string;
  thumbnailUrl?: string;
  logoUrl?: string;
  context: string[];
  architectureNotes: string[];
  technologies: string[];
  timeBlocks: ProjectTimeBlock[];
  links?: ProjectLink[];
  placeholders?: ProjectPlaceholders;
  referencePlaceholders?: ProjectReferencePlaceholders;
  sourceCodeNote: string;
  confidentialityNote: string;
}
