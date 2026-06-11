export type SkillCategory =
  | 'Backend'
  | 'Database'
  | 'Frontend'
  | 'Architecture'
  | 'Legacy & Desktop'
  | 'Dev Tools / Cloud'
  | 'Soft Skills'
  | 'Enterprise Practices'
  | 'Base de datos'
  | 'Arquitectura'
  | 'Legacy y Desktop'
  | 'Herramientas Dev / Cloud'
  | 'Habilidades blandas'
  | 'Prácticas empresariales';

export type BackendSkillGroup =
  | 'Platform & Language'
  | 'Application Frameworks'
  | 'Data Access & Querying'
  | 'API & Communication'
  | 'Backend Tooling'
  | 'Plataforma y lenguaje'
  | 'Frameworks de aplicación'
  | 'Acceso a datos y consultas'
  | 'API y comunicación'
  | 'Herramientas Backend';

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
