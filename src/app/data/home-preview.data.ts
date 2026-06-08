import { HomeProjectPreview, HomeSkillPreview, HomeValuePreview } from '../models/home-preview.model';

export const HOME_VALUE_PREVIEWS: readonly HomeValuePreview[] = [
  {
    title: 'Think before building',
    label: 'Problem first',
    description:
      'I start by clarifying the business need, constraints, and maintainability expectations before selecting a technical solution.',
  },
  {
    title: 'Architecture before code',
    label: 'Design matters',
    description:
      'I prefer simple, well-structured solutions that keep responsibilities clear and make future changes easier to reason about.',
  },
  {
    title: 'Software that evolves',
    label: 'Long-term value',
    description:
      'I focus on systems that can be maintained, extended, and modernized without unnecessary complexity or risky rewrites.',
  },
];

export const HOME_PROJECT_PREVIEWS: readonly HomeProjectPreview[] = [
  {
    name: 'Worker',
    statusLabel: 'Production software · Private source',
    description:
      'Operational software experience presented through business context, screenshots, and impact without exposing source code.',
    technologies: ['.NET', 'C#', 'SQL Server', 'WinForms'],
    route: '/projects',
  },
  {
    name: 'Expensux',
    statusLabel: 'Demo-oriented · Source private',
    description:
      'Expense management showcase focused on practical workflows, API structure, authentication, and maintainable implementation decisions.',
    technologies: ['ASP.NET Core', 'REST APIs', 'JWT', 'Angular'],
    route: '/projects',
  },
  {
    name: 'ItHelpCenter',
    statusLabel: 'Contribution-focused · Confidential details protected',
    description:
      'Help center experience described through responsibilities, technologies, and lessons learned while avoiding proprietary information.',
    technologies: ['.NET', 'SQL Server', 'Dapper', 'LINQ'],
    route: '/projects',
  },
];

export const HOME_SKILL_PREVIEWS: readonly HomeSkillPreview[] = [
  { name: '.NET', context: 'Backend and enterprise application development' },
  { name: 'SQL Server', context: 'Relational modeling, querying, and data-driven features' },
  { name: 'REST APIs', context: 'Service contracts and integration-focused design' },
  { name: 'JWT', context: 'Token-based authentication flows' },
  { name: 'Dapper', context: 'Lightweight data access for SQL-centered applications' },
  { name: 'LINQ', context: 'Readable C# querying and data transformations' },
  { name: 'Angular', context: 'Structured front-end features and responsive UI' },
  { name: 'SOLID', context: 'Maintainable object-oriented design principles' },
];
