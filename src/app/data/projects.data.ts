import { Project, ProjectTimeBlock } from '../models/project.model';

const PLACEHOLDER_TIME_BLOCKS: ProjectTimeBlock[] = [
  { label: 'Database architecture', duration: 'Placeholder: 2-4 weeks' },
  { label: 'API implementation', duration: 'Placeholder: 3-6 weeks' },
  { label: 'Swagger/API testing', duration: 'Placeholder: 1-2 weeks' },
  { label: 'Frontend implementation', duration: 'Placeholder: 4-8 weeks' },
  { label: 'Frontend testing', duration: 'Placeholder: 1-3 weeks' },
  { label: 'Documentation / review', duration: 'Placeholder: 1-2 weeks' },
];

export const PROJECTS: Project[] = [
  {
    id: 'worker',
    slug: 'worker',
    title: 'Worker',
    typeStatus: 'Production software / Enterprise internal system',
    shortDescription:
      'Business workflow and operational management system evolved from legacy desktop architecture into a modern .NET-based solution.',
    visualLabel: 'Enterprise workflow system visual placeholder',
    context: [
      'Initially created as a monolithic Access + VB.NET application using ADO.NET.',
      'Later evolved to support multi-connection scenarios with Access and SQL Server.',
      'Later evolved toward C#, .NET 8, REST API, WPF forms, Dapper, SQL Server stored procedures, SOLID principles, and layered architecture.',
      'Used in production since 2015.',
      'Source code is not exposed and no demo link is provided.',
    ],
    technologies: [
      'Access',
      'VB.NET',
      'ADO.NET',
      'SQL Server',
      'C#',
      '.NET 8',
      'REST API',
      'WPF',
      'Dapper',
      'Stored Procedures',
      'SOLID',
      'Layered Architecture',
      'Excel Export',
      'Reporting',
    ],
    timeBlocks: PLACEHOLDER_TIME_BLOCKS,
    placeholders: {
      companyName: 'Company name placeholder',
      companyAddress: 'Company address placeholder',
      companyPhone: 'Company phone placeholder',
      videoUrl: 'Video URL placeholder',
    },
    sourceCodeNote: 'Private production source code is not publicly available.',
  },
  {
    id: 'expensux',
    slug: 'expensux',
    title: 'Expensux',
    typeStatus: 'Demo-oriented financial control application',
    shortDescription:
      'Personal and business expense control application focused on financial organization, profiles, accounts, debts, payments, categories, movements, JWT authentication, API layers, and Angular frontend.',
    visualLabel: 'Financial control application visual placeholder',
    context: [
      'Demo link will be added later.',
      'Source code remains private for now.',
      'Uses layered API concepts and an Angular frontend to organize financial control workflows.',
    ],
    technologies: [
      'SQL Server',
      'Stored Procedures',
      'ASP.NET Core',
      'REST API',
      'JWT',
      'Dapper',
      'Angular',
      'TypeScript',
      'SCSS',
      'SOLID',
    ],
    timeBlocks: PLACEHOLDER_TIME_BLOCKS,
    placeholders: {
      demoUrl: 'Demo URL placeholder',
    },
    sourceCodeNote: 'Source code is private while the demo is being prepared.',
  },
  {
    id: 'j3dev-portfolio',
    slug: 'j3dev-portfolio',
    title: 'J3dev Portfolio',
    typeStatus: 'Public portfolio / Open source showcase',
    shortDescription:
      'Professional Angular portfolio built to present backend specialization, fullstack capability, project evidence, technical evolution, and recruiter-focused navigation.',
    visualLabel: 'Portfolio application visual placeholder',
    context: [
      'Presents backend specialization, fullstack capability, technical evolution, and recruiter-focused navigation.',
      'Can link to the GitHub repository when the public repository URL is finalized.',
      'Uses static data and a theme system without backend, API, or database logic.',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'SCSS',
      'Git',
      'GitHub',
      'Codex',
      'Responsive Design',
      'Theme System',
      'Static Data',
    ],
    timeBlocks: PLACEHOLDER_TIME_BLOCKS,
    placeholders: {
      githubUrl: 'GitHub URL placeholder',
    },
    primaryLink: {
      label: 'GitHub repository placeholder',
      url: 'https://github.com/placeholder/j3dev-portfolio',
      isExternal: true,
    },
    sourceCodeNote: 'Public repository link can be updated when the final URL is available.',
  },
];
