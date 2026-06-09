import { Project, ProjectTimeBlock } from '../models/project.model';

const PLACEHOLDER_TIME_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Database architecture',
    duration: 'Placeholder: 2-4 weeks',
    note: 'Data modeling and storage decisions are summarized without exposing private schema details.',
  },
  {
    label: 'API implementation',
    duration: 'Placeholder: 3-6 weeks',
    note: 'Backend implementation scope is described at a high level only.',
  },
  { label: 'Swagger/API testing', duration: 'Placeholder: 1-2 weeks' },
  { label: 'Frontend implementation', duration: 'Placeholder: 4-8 weeks' },
  { label: 'Frontend testing', duration: 'Placeholder: 1-3 weeks' },
  {
    label: 'Documentation / review',
    duration: 'Placeholder: 1-2 weeks',
    note: 'Review time includes notes for maintainability and future handoff.',
  },
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
      'Used in production since 2015.',
      'Source code is not exposed and no demo link is provided.',
    ],
    architectureNotes: [
      'Evolved from a legacy desktop-oriented architecture toward a layered .NET approach.',
      'Modernization direction includes C#, .NET 8, REST API boundaries, WPF forms, Dapper, SQL Server stored procedures, SOLID principles, and maintainable separation of concerns.',
      'Project details are intentionally summarized to avoid exposing proprietary implementation or business rules.',
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
    links: [
      {
        label: 'Video availability placeholder',
        type: 'Video',
        isExternal: false,
        isPlaceholder: true,
        placeholderMessage:
          'A safe overview video may be added later without exposing source code.',
      },
      {
        label: 'Company reference placeholder',
        type: 'Reference',
        isExternal: false,
        isPlaceholder: true,
        placeholderMessage:
          'Real company reference details will be added later when approved for public use.',
      },
    ],
    placeholders: {
      companyName: 'Company name placeholder',
      companyAddress: 'Company address placeholder',
      companyPhone: 'Company phone placeholder',
      videoUrl: 'Video URL placeholder',
    },
    referencePlaceholders: {
      companyName: 'Company name placeholder',
      companyAddress: 'Address placeholder',
      companyPhone: 'Phone placeholder',
      availabilityNote: 'Real company details will be added later after review and approval.',
    },
    sourceCodeNote: 'Private production source code is not publicly available.',
    confidentialityNote:
      'This production project is described with sanitized context only. Source code, proprietary workflows, customer details, and operational data are not exposed.',
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
      'Demo-oriented financial control application for organizing financial workflows.',
      'Demo link will be added later.',
      'Source code remains private for now.',
    ],
    architectureNotes: [
      'Uses layered API concepts and an Angular frontend to organize financial control workflows.',
      'Designed around profiles, accounts, debts, payments, categories, movements, authentication, and clear API responsibilities.',
      'Current public detail remains intentionally high-level while the demo experience is prepared.',
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
    links: [
      {
        label: 'Demo link placeholder',
        type: 'Demo',
        isExternal: true,
        isPlaceholder: true,
        placeholderMessage: 'Demo link will be added later when the public demo is ready.',
      },
    ],
    placeholders: {
      demoUrl: 'Demo URL placeholder',
    },
    sourceCodeNote: 'Source code is private while the demo is being prepared.',
    confidentialityNote:
      'Financial examples and implementation details are presented safely. Source code remains private for now while the demo is prepared.',
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
      'Public portfolio and open-source showcase for professional presentation.',
      'Uses static data and a theme system without backend, API, or database logic.',
    ],
    architectureNotes: [
      'Built as a static Angular application with typed data sources and reusable page structures.',
      'Theme and viewport preview features are client-side enhancements that preserve standard navigation and content access.',
      'Project details can evolve incrementally without introducing backend, API, or database logic.',
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
    links: [
      {
        label: 'GitHub repository placeholder',
        type: 'GitHub',
        isExternal: true,
        isPlaceholder: true,
        placeholderMessage:
          'GitHub repository link will be updated when the final public URL is available.',
      },
    ],
    placeholders: {
      githubUrl: 'GitHub URL placeholder',
    },
    sourceCodeNote: 'Public repository link can be updated when the final URL is available.',
    confidentialityNote:
      'This portfolio is intended as a public showcase. Placeholder repository details will be replaced with the correct public link when finalized.',
  },
];
