export type SkillCategory =
  | 'Backend'
  | 'Database'
  | 'Frontend'
  | 'Architecture'
  | 'Legacy & Desktop'
  | 'Dev Tools / Cloud'
  | 'Soft Skills'
  | 'Enterprise Practices';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  shortDescription: string;
  iconLabel: string;
  iconUrl?: string;
  relatedProjectSlugs: string[];
  evidenceSummary: string;
  contextNotes?: string[];
}
