export interface ProjectTimeBlock {
  label: string;
  duration: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  isExternal: boolean;
}

export interface ProjectPlaceholders {
  companyName?: string;
  companyAddress?: string;
  companyPhone?: string;
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  typeStatus: string;
  shortDescription: string;
  visualLabel: string;
  context: string[];
  technologies: string[];
  timeBlocks: ProjectTimeBlock[];
  placeholders?: ProjectPlaceholders;
  primaryLink?: ProjectLink;
  sourceCodeNote: string;
}
