export type SkillCategory =
  | 'Backend'
  | 'Database'
  | 'Frontend'
  | 'Architecture'
  | 'Legacy & Desktop'
  | 'Dev Tools / Cloud'
  | 'Soft Skills'
  | 'Enterprise Practices';

export type BackendSkillGroup =
  | 'Platform & Language'
  | 'Application Frameworks'
  | 'Data Access & Querying'
  | 'API & Communication'
  | 'Backend Tooling';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  backendGroup?: BackendSkillGroup;
  shortDescription: string;
  iconLabel: string;
  iconUrl?: string;
  relatedProjectSlugs: string[];
  evidenceSummary: string;
  contextNotes?: string[];
}
