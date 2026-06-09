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

const LEVERIT_PLACEHOLDER_TIME_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Production maintenance and support',
    duration: 'Placeholder: multi-year professional involvement',
    note: 'Scope is summarized without exposing client workflows, source code, or internal operational details.',
  },
  {
    label: 'Feature improvements',
    duration: 'Placeholder: iterative releases',
    note: 'Enhancements are described by capability area rather than proprietary implementation details.',
  },
  {
    label: 'Database and backend work',
    duration: 'Placeholder: ongoing enterprise delivery cycles',
    note: 'SQL Server, API, and server-side responsibilities are represented at a public-safe level.',
  },
  {
    label: 'Frontend and user experience work',
    duration: 'Placeholder: incremental improvements',
    note: 'UI behavior, search, and workflow updates are generalized for confidentiality.',
  },
  {
    label: 'Team coordination and conventions',
    duration: 'Placeholder: recurring collaboration',
    note: 'Includes alignment with team practices, maintainability expectations, and handoff-friendly changes.',
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
    id: 'ithelpcenter',
    slug: 'ithelpcenter',
    title: 'ItHelpCenter',
    typeStatus: 'LeverIT enterprise project / Help desk platform',
    shortDescription:
      'Enterprise help desk platform evolved over years through maintenance, improvements, new workflows, search experience enhancements, and frontend/backend feature development.',
    visualLabel: 'LeverIT help desk platform logo placeholder',
    context: [
      'Professional enterprise project worked on during Jorge’s LeverIT experience.',
      'Contributions are described without exposing source code, private demos, client names, or proprietary implementation details.',
      'Work included maintenance, improvements, new workflow support, search experience enhancements, and frontend/backend feature development.',
      'Official LeverIT website and logo references are represented as placeholders until approved public assets are finalized.',
    ],
    architectureNotes: [
      'Supported SPA-like navigation patterns over a single main index in general terms, preserving the confidentiality of the internal implementation.',
      'Improved reusable JavaScript class patterns and team conventions to make frontend behavior easier to maintain.',
      'Used controlled lazy loading patterns to support maintainable feature delivery and user experience responsiveness.',
      'Contributed to search experience improvements and later AI-assisted category discovery/user guidance concepts at a high level.',
      'Balanced business workflow needs with maintainable software practices in a long-running enterprise system.',
    ],
    technologies: [
      'SQL Server',
      '.NET',
      'C#',
      'REST APIs',
      'JavaScript',
      'HTML',
      'CSS',
      'ASP.NET',
      'Architecture',
      'Team Conventions',
      'Search UX',
      'AI-assisted UX',
    ],
    timeBlocks: LEVERIT_PLACEHOLDER_TIME_BLOCKS,
    links: [
      {
        label: 'Official LeverIT website placeholder',
        type: 'Reference',
        isExternal: true,
        isPlaceholder: true,
        placeholderMessage:
          'Official LeverIT website link placeholder. No private demo, GitHub repository, or proprietary project access is provided.',
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'Official LeverIT website URL placeholder',
      logoLabel: 'LeverIT logo placeholder',
    },
    sourceCodeNote:
      'No GitHub link, private demo, source code, client data, or proprietary implementation access is available for this LeverIT enterprise project.',
    confidentialityNote:
      'This LeverIT project is represented with public-safe, generalized descriptions only. Source code, private client information, proprietary workflows, internal architecture details, and sensitive operational data are not exposed.',
  },
  {
    id: 'discovery',
    slug: 'discovery',
    title: 'Discovery',
    typeStatus: 'LeverIT enterprise project / Maintenance and improvements',
    shortDescription:
      'Enterprise project supported through maintenance, improvements, SQL Server work, ASP.NET features, and WebSocket-related functionality.',
    visualLabel: 'LeverIT enterprise maintenance project logo placeholder',
    context: [
      'Professional enterprise project worked on during Jorge’s LeverIT experience.',
      'Supported maintenance, improvements, SQL Server work, ASP.NET features, and WebSocket-related functionality.',
      'Descriptions remain general and non-confidential, with no private demo or source code exposure.',
      'Official LeverIT website and logo references are represented as placeholders until approved public assets are finalized.',
    ],
    architectureNotes: [
      'Contributed to enterprise maintenance and incremental improvement work within an existing production-oriented codebase.',
      'Worked with SQL Server and ASP.NET feature areas while keeping technical details generalized for confidentiality.',
      'Supported WebSocket-related functionality in a public-safe manner without exposing internal messaging flows or client-specific behavior.',
      'Applied practical maintainability and problem-solving habits while working inside established enterprise constraints.',
    ],
    technologies: [
      'SQL Server',
      'ASP.NET',
      'WebSockets',
      'C#',
      'Maintenance',
      'Enterprise Software',
    ],
    timeBlocks: LEVERIT_PLACEHOLDER_TIME_BLOCKS,
    links: [
      {
        label: 'Official LeverIT website placeholder',
        type: 'Reference',
        isExternal: true,
        isPlaceholder: true,
        placeholderMessage:
          'Official LeverIT website link placeholder. No private demo, GitHub repository, or proprietary project access is provided.',
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'Official LeverIT website URL placeholder',
      logoLabel: 'LeverIT logo placeholder',
    },
    sourceCodeNote:
      'No GitHub link, private demo, source code, client data, or proprietary implementation access is available for this LeverIT enterprise project.',
    confidentialityNote:
      'This LeverIT project is represented with public-safe, generalized descriptions only. Source code, private client information, proprietary workflows, internal architecture details, and sensitive operational data are not exposed.',
  },
  {
    id: 'testigo-electoral',
    slug: 'testigo-electoral',
    title: 'Testigo Electoral',
    typeStatus: 'LeverIT custom client project / Built from scratch',
    shortDescription:
      'Custom client project developed collaboratively from scratch using SQL Server, REST APIs, and Angular.',
    visualLabel: 'LeverIT custom client project logo placeholder',
    context: [
      'Professional custom client project worked on during Jorge’s LeverIT experience.',
      'Built collaboratively from scratch with two teammates using SQL Server, REST APIs, and Angular.',
      'No source code, private demo, client names, real addresses, or confidential implementation details are exposed.',
      'Official LeverIT website and logo references are represented as placeholders until approved public assets are finalized.',
    ],
    architectureNotes: [
      'Collaborated on a from-scratch enterprise delivery effort with clear separation between database, API, and frontend responsibilities.',
      'Used SQL Server and REST API concepts to support structured backend communication without exposing private schema or business rules.',
      'Used Angular and TypeScript for frontend implementation while keeping client-specific UI details confidential.',
      'Demonstrates team collaboration, practical delivery, and maintainable fullstack development in an enterprise context.',
    ],
    technologies: [
      'SQL Server',
      'C#',
      'REST APIs',
      'Angular',
      'TypeScript',
      'Team Collaboration',
      'Enterprise Software',
    ],
    timeBlocks: LEVERIT_PLACEHOLDER_TIME_BLOCKS,
    links: [
      {
        label: 'Official LeverIT website placeholder',
        type: 'Reference',
        isExternal: true,
        isPlaceholder: true,
        placeholderMessage:
          'Official LeverIT website link placeholder. No private demo, GitHub repository, or proprietary project access is provided.',
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'Official LeverIT website URL placeholder',
      logoLabel: 'LeverIT logo placeholder',
    },
    sourceCodeNote:
      'No GitHub link, private demo, source code, client data, or proprietary implementation access is available for this LeverIT custom client project.',
    confidentialityNote:
      'This LeverIT project is represented with public-safe, generalized descriptions only. Source code, private client information, proprietary workflows, internal architecture details, and sensitive operational data are not exposed.',
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
