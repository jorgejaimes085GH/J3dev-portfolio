import { Skill, SkillCategory } from '../models/skill.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  'Backend',
  'Database',
  'Frontend',
  'Architecture',
  'Legacy & Desktop',
  'Dev Tools / Cloud',
  'Soft Skills',
];

export const SKILLS: Skill[] = [
  {
    id: 'dotnet',
    name: '.NET',
    category: 'Backend',
    shortDescription: 'Backend platform experience across production modernization and API direction.',
    iconLabel: '.N',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      '.NET appears in the Worker modernization path, where legacy desktop architecture is being evolved toward maintainable service and application boundaries.',
    contextNotes: ['Public details stay high-level to avoid exposing proprietary production logic.'],
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'Backend',
    shortDescription: 'Primary language for modern backend and maintainable application code.',
    iconLabel: 'C#',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'C# supports the Worker modernization direction, including clearer application layers and maintainable backend-oriented implementation.',
  },
  {
    id: 'aspnet-core',
    name: 'ASP.NET Core',
    category: 'Backend',
    shortDescription: 'API-focused backend framework for structured application services.',
    iconLabel: 'API',
    relatedProjectSlugs: ['expensux'],
    evidenceSummary:
      'Expensux uses ASP.NET Core concepts to organize financial workflows behind API layers and authentication boundaries.',
  },
  {
    id: 'rest-apis',
    name: 'REST APIs',
    category: 'Backend',
    shortDescription: 'HTTP API boundaries for separating frontend and backend responsibilities.',
    iconLabel: '↔',
    relatedProjectSlugs: ['worker', 'expensux'],
    evidenceSummary:
      'REST API concepts are part of both the Worker modernization direction and the Expensux layered application approach.',
  },
  {
    id: 'jwt',
    name: 'JWT',
    category: 'Backend',
    shortDescription: 'Token-based authentication concepts for API-protected workflows.',
    iconLabel: 'JWT',
    relatedProjectSlugs: ['expensux'],
    evidenceSummary:
      'Expensux includes JWT authentication as part of its financial control workflow and API responsibility design.',
  },
  {
    id: 'dapper',
    name: 'Dapper',
    category: 'Backend',
    shortDescription: 'Lightweight data access for SQL-backed application flows.',
    iconLabel: 'DP',
    relatedProjectSlugs: ['worker', 'expensux'],
    evidenceSummary:
      'Dapper is connected to SQL Server and stored procedure usage in Worker modernization and Expensux API data access concepts.',
  },
  {
    id: 'ado-net',
    name: 'ADO.NET',
    category: 'Backend',
    shortDescription: 'Legacy data access experience from production desktop systems.',
    iconLabel: 'ADO',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'Worker began as an Access and VB.NET application using ADO.NET, providing practical experience maintaining and evolving legacy data access code.',
  },
  {
    id: 'linq',
    name: 'LINQ',
    category: 'Backend',
    shortDescription: 'Query and transformation patterns for readable C# application logic.',
    iconLabel: 'LQ',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'LINQ is represented as part of the C#/.NET application development skill set used to keep business logic readable and maintainable.',
  },
  {
    id: 'sql-server',
    name: 'SQL Server',
    category: 'Database',
    shortDescription: 'Relational database work for production and demo application workflows.',
    iconLabel: 'SQL',
    relatedProjectSlugs: ['worker', 'expensux'],
    evidenceSummary:
      'SQL Server supports Worker multi-connection modernization and Expensux financial workflow data storage concepts.',
  },
  {
    id: 'stored-procedures',
    name: 'Stored Procedures',
    category: 'Database',
    shortDescription: 'Database-side routines used where they support maintainable data operations.',
    iconLabel: 'SP',
    relatedProjectSlugs: ['worker', 'expensux'],
    evidenceSummary:
      'Stored procedures appear in Worker and Expensux as part of SQL Server-centered data operation design.',
  },
  {
    id: 'microsoft-access',
    name: 'Microsoft Access',
    category: 'Database',
    shortDescription: 'Legacy database experience from production desktop application history.',
    iconLabel: 'ACC',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'Worker started with Microsoft Access data storage, creating direct experience with legacy database constraints and migration planning.',
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'Frontend',
    shortDescription: 'Frontend application structure for professional, navigable user experiences.',
    iconLabel: 'NG',
    relatedProjectSlugs: ['expensux', 'j3dev-portfolio'],
    evidenceSummary:
      'Angular is used in Expensux frontend concepts and this portfolio application, including routes, static data, themes, and reusable page structures.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    shortDescription: 'Typed frontend code for clearer data contracts and maintainable UI logic.',
    iconLabel: 'TS',
    relatedProjectSlugs: ['expensux', 'j3dev-portfolio'],
    evidenceSummary:
      'TypeScript supports the typed data model approach used in the portfolio and Angular application work represented by Expensux.',
  },
  {
    id: 'scss',
    name: 'SCSS',
    category: 'Frontend',
    shortDescription: 'Theme-friendly styling with responsive layouts and readable structure.',
    iconLabel: 'CSS',
    relatedProjectSlugs: ['expensux', 'j3dev-portfolio'],
    evidenceSummary:
      'SCSS is used for readable, responsive UI styling in the portfolio and is part of the Expensux frontend technology stack.',
  },
  {
    id: 'responsive-design',
    name: 'Responsive Design',
    category: 'Frontend',
    shortDescription: 'Layouts that remain usable across desktop, tablet, and mobile contexts.',
    iconLabel: '↕',
    relatedProjectSlugs: ['j3dev-portfolio'],
    evidenceSummary:
      'The portfolio includes responsive page layouts and a viewport preview feature to keep recruiter-facing content readable across screen sizes.',
  },
  {
    id: 'solid',
    name: 'SOLID',
    category: 'Architecture',
    shortDescription: 'Design principles used to reduce coupling and improve maintainability.',
    iconLabel: 'SOL',
    relatedProjectSlugs: ['worker', 'expensux'],
    evidenceSummary:
      'SOLID principles guide the Worker modernization direction and Expensux layered API concepts, especially around separation of responsibilities.',
  },
  {
    id: 'layered-architecture',
    name: 'Layered Architecture',
    category: 'Architecture',
    shortDescription: 'Organizing applications so UI, API, business logic, and data concerns stay clear.',
    iconLabel: 'LAY',
    relatedProjectSlugs: ['worker', 'expensux'],
    evidenceSummary:
      'Layered architecture is central to the Worker modernization path and Expensux API/frontend separation.',
  },
  {
    id: 'clean-code',
    name: 'Clean Code',
    category: 'Architecture',
    shortDescription: 'Readable naming, focused responsibilities, and practical maintainability habits.',
    iconLabel: 'CC',
    relatedProjectSlugs: ['worker', 'j3dev-portfolio'],
    evidenceSummary:
      'Clean code practices are represented through the portfolio typed data structure and the maintainability focus in Worker modernization.',
  },
  {
    id: 'api-design',
    name: 'API Design',
    category: 'Architecture',
    shortDescription: 'Planning API boundaries around clear responsibilities and business workflows.',
    iconLabel: 'AD',
    relatedProjectSlugs: ['worker', 'expensux'],
    evidenceSummary:
      'API design appears in Worker modernization goals and Expensux workflows for authentication, accounts, payments, categories, and movements.',
  },
  {
    id: 'vb-net',
    name: 'VB.NET',
    category: 'Legacy & Desktop',
    shortDescription: 'Production desktop and legacy application experience.',
    iconLabel: 'VB',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'Worker was initially created as a VB.NET application, providing long-term production experience with legacy desktop code.',
  },
  {
    id: 'winforms',
    name: 'WinForms',
    category: 'Legacy & Desktop',
    shortDescription: 'Desktop UI experience connected to operational business workflows.',
    iconLabel: 'WF',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'WinForms represents desktop application experience gained through production workflow software and legacy system evolution.',
  },
  {
    id: 'wpf',
    name: 'WPF',
    category: 'Legacy & Desktop',
    shortDescription: 'Desktop UI direction for modernized .NET application forms.',
    iconLabel: 'WPF',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'WPF is part of the Worker modernization direction for desktop forms while preserving business workflow continuity.',
  },
  {
    id: 'foxpro',
    name: 'FoxPro',
    category: 'Legacy & Desktop',
    shortDescription: 'Legacy technology awareness for understanding older business systems.',
    iconLabel: 'FP',
    relatedProjectSlugs: [],
    evidenceSummary:
      'FoxPro is currently listed as legacy-system familiarity and will be connected to public-safe project evidence when available.',
    contextNotes: ['No public project detail is linked yet.'],
  },
  {
    id: 'visual-basic-6',
    name: 'Visual Basic 6',
    category: 'Legacy & Desktop',
    shortDescription: 'Legacy desktop context useful for modernization discussions.',
    iconLabel: 'VB6',
    relatedProjectSlugs: [],
    evidenceSummary:
      'Visual Basic 6 is currently represented as legacy modernization context and will be tied to public-safe examples when available.',
    contextNotes: ['No proprietary or private legacy implementation details are exposed.'],
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Dev Tools / Cloud',
    shortDescription: 'Version control habits for incremental, reviewable change.',
    iconLabel: 'Git',
    relatedProjectSlugs: ['j3dev-portfolio'],
    evidenceSummary:
      'Git supports the incremental development workflow used for this portfolio and public project evolution.',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Dev Tools / Cloud',
    shortDescription: 'Repository hosting and collaboration workflow familiarity.',
    iconLabel: 'GH',
    relatedProjectSlugs: ['j3dev-portfolio'],
    evidenceSummary:
      'GitHub is part of the portfolio project workflow and will host the public repository link when finalized.',
  },
  {
    id: 'codex',
    name: 'Codex',
    category: 'Dev Tools / Cloud',
    shortDescription: 'AI-assisted development workflow with reviewable, incremental changes.',
    iconLabel: 'AI',
    relatedProjectSlugs: ['j3dev-portfolio'],
    evidenceSummary:
      'Codex is used as part of an incremental portfolio development process while keeping changes buildable and reviewable.',
  },
  {
    id: 'swagger',
    name: 'Swagger',
    category: 'Dev Tools / Cloud',
    shortDescription: 'API documentation and testing support for backend workflows.',
    iconLabel: 'SWG',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'Swagger/API testing appears in the project implementation blocks and supports clearer API validation workflows.',
  },
  {
    id: 'azure-placeholder',
    name: 'Azure placeholder',
    category: 'Dev Tools / Cloud',
    shortDescription: 'Cloud deployment topic reserved for future verified evidence.',
    iconLabel: 'AZ',
    relatedProjectSlugs: [],
    evidenceSummary:
      'Azure is intentionally marked as a placeholder until public-safe project evidence or deployment context is available.',
    contextNotes: ['This avoids overstating cloud experience before evidence is added.'],
  },
  {
    id: 'docker-placeholder',
    name: 'Docker placeholder',
    category: 'Dev Tools / Cloud',
    shortDescription: 'Container workflow topic reserved for future verified evidence.',
    iconLabel: 'DK',
    relatedProjectSlugs: [],
    evidenceSummary:
      'Docker is intentionally marked as a placeholder until it can be connected to public-safe project evidence.',
    contextNotes: ['Placeholder status keeps the skills page evidence-based.'],
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    category: 'Soft Skills',
    shortDescription: 'Breaking down business needs, technical constraints, and maintainable solutions.',
    iconLabel: 'PS',
    relatedProjectSlugs: ['worker', 'expensux'],
    evidenceSummary:
      'Problem solving is demonstrated through legacy modernization, production workflow support, and financial control workflow design.',
  },
  {
    id: 'technical-analysis',
    name: 'Technical Analysis',
    category: 'Soft Skills',
    shortDescription: 'Understanding existing systems before proposing technical changes.',
    iconLabel: 'TA',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'Technical analysis is represented by Worker modernization, where existing Access/VB.NET behavior must be understood before safe evolution.',
  },
  {
    id: 'documentation',
    name: 'Documentation',
    category: 'Soft Skills',
    shortDescription: 'Capturing decisions and context for maintainability and handoff.',
    iconLabel: 'DOC',
    relatedProjectSlugs: ['worker', 'j3dev-portfolio'],
    evidenceSummary:
      'Documentation appears through safe public project summaries, placeholder notes, and review-oriented implementation blocks.',
  },
  {
    id: 'team-collaboration',
    name: 'Team Collaboration',
    category: 'Soft Skills',
    shortDescription: 'Communicating technical tradeoffs in a practical, team-oriented way.',
    iconLabel: 'TC',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'Team collaboration is connected to long-term production software work where technical decisions must support business users and maintainers.',
  },
  {
    id: 'continuous-learning',
    name: 'Continuous Learning',
    category: 'Soft Skills',
    shortDescription: 'Evolving from legacy systems toward modern frameworks and practices.',
    iconLabel: 'CL',
    relatedProjectSlugs: ['worker', 'j3dev-portfolio'],
    evidenceSummary:
      'Continuous learning is shown by the transition from legacy desktop technologies toward modern .NET, Angular, typed data, and maintainable architecture.',
  },
  {
    id: 'maintainability-mindset',
    name: 'Maintainability Mindset',
    category: 'Soft Skills',
    shortDescription: 'Prioritizing readable, sustainable software decisions over short-term complexity.',
    iconLabel: 'MM',
    relatedProjectSlugs: ['worker', 'expensux', 'j3dev-portfolio'],
    evidenceSummary:
      'Maintainability is a repeated theme across Worker modernization, Expensux API organization, and the portfolio static data architecture.',
  },
];
