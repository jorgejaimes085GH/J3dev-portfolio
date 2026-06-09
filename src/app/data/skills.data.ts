import { Skill, SkillCategory } from '../models/skill.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  'Backend',
  'Database',
  'Frontend',
  'Architecture',
  'Legacy & Desktop',
  'Dev Tools / Cloud',
  'Soft Skills',
  'Enterprise Practices',
];

export const SKILLS: Skill[] = [
  {
    id: 'dotnet',
    name: '.NET',
    category: 'Backend',
    shortDescription:
      'Backend platform experience across production modernization and API direction.',
    iconLabel: '.N',
    relatedProjectSlugs: ['worker', 'ithelpcenter'],
    evidenceSummary:
      '.NET appears in the Worker modernization path and ItHelpCenter enterprise work, where application boundaries and maintainability matter in production contexts.',
    contextNotes: [
      'Public details stay high-level to avoid exposing proprietary production logic.',
    ],
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'Backend',
    shortDescription: 'Primary language for modern backend and maintainable application code.',
    iconLabel: 'C#',
    relatedProjectSlugs: ['worker', 'ithelpcenter', 'discovery', 'testigo-electoral'],
    evidenceSummary:
      'C# supports Worker modernization and LeverIT enterprise work, including maintainable backend-oriented implementation and REST API responsibilities.',
  },
  {
    id: 'aspnet-core',
    name: 'ASP.NET Core',
    category: 'Backend',
    shortDescription: 'API-focused backend framework for structured application services.',
    iconLabel: 'API',
    relatedProjectSlugs: ['expensux', 'ithelpcenter', 'discovery'],
    evidenceSummary:
      'ASP.NET and ASP.NET Core experience is represented through Expensux API concepts plus LeverIT enterprise feature and maintenance work.',
  },
  {
    id: 'rest-apis',
    name: 'REST APIs',
    category: 'Backend',
    shortDescription: 'HTTP API boundaries for separating frontend and backend responsibilities.',
    iconLabel: '↔',
    relatedProjectSlugs: ['worker', 'expensux', 'ithelpcenter', 'testigo-electoral'],
    evidenceSummary:
      'REST API concepts are part of Worker modernization, Expensux, and LeverIT enterprise work that separated backend responsibilities from frontend workflows.',
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
    relatedProjectSlugs: ['worker', 'expensux', 'ithelpcenter', 'discovery', 'testigo-electoral'],
    evidenceSummary:
      'SQL Server supports Worker, Expensux, and LeverIT enterprise projects through public-safe database, maintenance, and application workflow evidence.',
  },
  {
    id: 'stored-procedures',
    name: 'Stored Procedures',
    category: 'Database',
    shortDescription:
      'Database-side routines used where they support maintainable data operations.',
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
    shortDescription:
      'Frontend application structure for professional, navigable user experiences.',
    iconLabel: 'NG',
    relatedProjectSlugs: ['expensux', 'j3dev-portfolio', 'testigo-electoral'],
    evidenceSummary:
      'Angular is used in Expensux frontend concepts, this portfolio application, and the from-scratch LeverIT Testigo Electoral project.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    shortDescription: 'Typed frontend code for clearer data contracts and maintainable UI logic.',
    iconLabel: 'TS',
    relatedProjectSlugs: ['expensux', 'j3dev-portfolio', 'testigo-electoral'],
    evidenceSummary:
      'TypeScript supports the typed data model approach used in the portfolio and Angular application work represented by Expensux and Testigo Electoral.',
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
    shortDescription:
      'Organizing applications so UI, API, business logic, and data concerns stay clear.',
    iconLabel: 'LAY',
    relatedProjectSlugs: ['worker', 'expensux'],
    evidenceSummary:
      'Layered architecture is central to the Worker modernization path and Expensux API/frontend separation.',
  },
  {
    id: 'clean-code',
    name: 'Clean Code',
    category: 'Architecture',
    shortDescription:
      'Readable naming, focused responsibilities, and practical maintainability habits.',
    iconLabel: 'CC',
    relatedProjectSlugs: ['worker', 'j3dev-portfolio'],
    evidenceSummary:
      'Clean code practices are represented through the portfolio typed data structure and the maintainability focus in Worker modernization.',
  },
  {
    id: 'api-design',
    name: 'API Design',
    category: 'Architecture',
    shortDescription:
      'Planning API boundaries around clear responsibilities and business workflows.',
    iconLabel: 'AD',
    relatedProjectSlugs: ['worker', 'expensux', 'ithelpcenter', 'testigo-electoral'],
    evidenceSummary:
      'API design appears in Worker modernization, Expensux workflows, and LeverIT enterprise work that required backend boundaries around practical business needs.',
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
    shortDescription:
      'Breaking down business needs, technical constraints, and maintainable solutions.',
    iconLabel: 'PS',
    relatedProjectSlugs: ['worker', 'expensux', 'ithelpcenter', 'discovery', 'testigo-electoral'],
    evidenceSummary:
      'Problem solving is demonstrated through legacy modernization, production workflow support, financial control workflow design, and LeverIT enterprise delivery.',
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
    relatedProjectSlugs: ['worker', 'ithelpcenter', 'discovery', 'testigo-electoral'],
    evidenceSummary:
      'Team collaboration is connected to long-term production software work and LeverIT projects, including a custom client project built with two teammates.',
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
    shortDescription:
      'Prioritizing readable, sustainable software decisions over short-term complexity.',
    iconLabel: 'MM',
    relatedProjectSlugs: ['worker', 'expensux', 'j3dev-portfolio', 'ithelpcenter', 'discovery'],
    evidenceSummary:
      'Maintainability is a repeated theme across Worker modernization, Expensux API organization, the portfolio static data architecture, and LeverIT enterprise maintenance work.',
  },

  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    shortDescription:
      'Frontend behavior and reusable client-side patterns for enterprise workflows.',
    iconLabel: 'JS',
    relatedProjectSlugs: ['ithelpcenter'],
    evidenceSummary:
      'JavaScript is connected to ItHelpCenter through SPA-like navigation, reusable class patterns, controlled lazy loading, and search experience improvements described at a public-safe level.',
    contextNotes: [
      'Implementation details remain generalized to protect proprietary LeverIT project information.',
    ],
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Frontend',
    shortDescription:
      'Semantic page structure for maintainable enterprise and portfolio interfaces.',
    iconLabel: 'HTML',
    relatedProjectSlugs: ['ithelpcenter', 'j3dev-portfolio'],
    evidenceSummary:
      'HTML is represented through ItHelpCenter frontend feature work and the portfolio’s accessible static page structure.',
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Frontend',
    shortDescription:
      'Readable styling foundations for enterprise interfaces and professional presentation.',
    iconLabel: 'CSS',
    relatedProjectSlugs: ['ithelpcenter', 'j3dev-portfolio'],
    evidenceSummary:
      'CSS is connected to ItHelpCenter frontend improvements and the portfolio’s theme-friendly, readable styling approach.',
  },
  {
    id: 'aspnet',
    name: 'ASP.NET',
    category: 'Backend',
    shortDescription:
      'Enterprise web application feature and maintenance experience in the Microsoft stack.',
    iconLabel: 'ASP',
    relatedProjectSlugs: ['ithelpcenter', 'discovery'],
    evidenceSummary:
      'ASP.NET is represented through LeverIT enterprise feature development, maintenance, and improvements described without proprietary implementation details.',
    contextNotes: [
      'This skill is separate from ASP.NET Core to reflect enterprise project maintenance context.',
    ],
  },
  {
    id: 'websockets',
    name: 'WebSockets',
    category: 'Backend',
    shortDescription: 'Real-time communication concepts connected to enterprise functionality.',
    iconLabel: 'WS',
    relatedProjectSlugs: ['discovery'],
    evidenceSummary:
      'WebSocket-related functionality is represented through Discovery maintenance and improvements while keeping internal message flows confidential.',
  },
  {
    id: 'search-ux',
    name: 'Search UX',
    category: 'Frontend',
    shortDescription: 'Improving how users discover categories, records, and workflow guidance.',
    iconLabel: 'SRCH',
    relatedProjectSlugs: ['ithelpcenter'],
    evidenceSummary:
      'Search UX is connected to ItHelpCenter search experience enhancements and category discovery improvements described in general terms.',
  },
  {
    id: 'spa-like-architecture',
    name: 'SPA-like Architecture',
    category: 'Architecture',
    shortDescription:
      'Client-side navigation patterns that improve continuity without replacing accessible navigation.',
    iconLabel: 'SPA',
    relatedProjectSlugs: ['ithelpcenter'],
    evidenceSummary:
      'SPA-like architecture is represented by ItHelpCenter navigation patterns over a single main index, summarized without exposing internal code.',
  },
  {
    id: 'lazy-loading',
    name: 'Lazy Loading',
    category: 'Architecture',
    shortDescription:
      'Controlled loading patterns used to support maintainable and responsive interfaces.',
    iconLabel: 'LOAD',
    relatedProjectSlugs: ['ithelpcenter'],
    evidenceSummary:
      'Lazy loading is connected to ItHelpCenter controlled loading patterns used as part of maintainable frontend architecture improvements.',
  },
  {
    id: 'ai-assisted-ux',
    name: 'AI-assisted UX',
    category: 'Frontend',
    shortDescription:
      'Using AI-assisted guidance concepts to help users discover the right path or category.',
    iconLabel: 'AIUX',
    relatedProjectSlugs: ['ithelpcenter'],
    evidenceSummary:
      'AI-assisted UX is represented by later ItHelpCenter category discovery and user guidance concepts, kept at a high level for confidentiality.',
  },
  {
    id: 'enterprise-maintenance',
    name: 'Enterprise Maintenance',
    category: 'Enterprise Practices',
    shortDescription:
      'Supporting long-running production systems through safe, incremental improvements.',
    iconLabel: 'ENT',
    relatedProjectSlugs: ['ithelpcenter', 'discovery', 'worker'],
    evidenceSummary:
      'Enterprise maintenance is demonstrated through LeverIT project support and Worker production evolution, with details sanitized for public presentation.',
  },
  {
    id: 'team-conventions',
    name: 'Team Conventions',
    category: 'Enterprise Practices',
    shortDescription:
      'Following and improving shared practices so teams can maintain software consistently.',
    iconLabel: 'TEAM',
    relatedProjectSlugs: ['ithelpcenter', 'discovery', 'testigo-electoral'],
    evidenceSummary:
      'Team conventions are connected to LeverIT enterprise work, including reusable JavaScript patterns, collaborative delivery, and maintainable handoff practices.',
  },
];
