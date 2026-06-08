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
}

export interface HomeSkillPreview {
  name: string;
  context: string;
}
