import { BackendSkillGroup, Skill, SkillCategory } from '../models/skill.model';

const SKILL_CATEGORIES_EN: SkillCategory[] = [
  'Backend',
  'Database',
  'Frontend',
  'Architecture',
  'Legacy & Desktop',
  'Dev Tools / Cloud',
  'Soft Skills',
  'Enterprise Practices',
];

const BACKEND_SKILL_GROUPS_EN: BackendSkillGroup[] = [
  'Platform & Language',
  'Application Frameworks',
  'Data Access & Querying',
  'API & Communication',
  'Backend Tooling',
];

const SKILL_ITEMS: Skill[] = [
  {
    id: 'dotnet',
    name: '.NET',
    category: 'Backend',
    backendGroup: 'Platform & Language',
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
    backendGroup: 'Platform & Language',
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
    backendGroup: 'Application Frameworks',
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
    backendGroup: 'API & Communication',
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
    backendGroup: 'API & Communication',
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
    backendGroup: 'Data Access & Querying',
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
    backendGroup: 'Data Access & Querying',
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
    backendGroup: 'Data Access & Querying',
    shortDescription: 'Query and transformation patterns for readable C# application logic.',
    iconLabel: 'LQ',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'LINQ is represented as part of the C#/.NET application development skill set used to keep business logic readable and maintainable.',
  },
  {
    id: 'entity-framework-core',
    name: 'Entity Framework Core',
    category: 'Backend',
    backendGroup: 'Data Access & Querying',
    shortDescription:
      'ORM technology currently being strengthened through training, architecture exercises, and modern .NET project practice.',
    iconLabel: 'EF',
    relatedProjectSlugs: [],
    evidenceSummary:
      'Entity Framework Core is listed as an active strengthening area for modern .NET data access. It is not presented as strong production experience yet.',
    contextNotes: [
      'Current focus: training, architecture exercises, and practice projects before linking public-safe production evidence.',
    ],
  },
  {
    id: 'sql-server',
    name: 'SQL Server',
    category: 'Database',
    shortDescription: 'Relational database work for production and demo application workflows.',
    iconLabel: 'SQL',
    relatedProjectSlugs: [
      'worker',
      'expensux',
      'ithelpcenter',
      'discovery',
      'testigo-electoral',
      'manager-plus',
      'manager-clinic',
      'odontology',
    ],
    evidenceSummary:
      'SQL Server supports 8 project contexts across Worker, Expensux, LeverIT enterprise projects, and Avances Software products, including production maintenance, migrations, business workflows, and clinical systems.',
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
    id: 'database-design',
    name: 'Database Design',
    category: 'Database',
    shortDescription:
      'Designing normalized relational models that support maintainable business workflows and long-term growth.',
    iconLabel: 'DBD',
    relatedProjectSlugs: ['worker', 'expensux', 'manager-plus', 'manager-clinic', 'odontology'],
    evidenceSummary:
      'Database design is connected to 5 project contexts: Worker, Expensux, Manager Plus, Manager Clinic, and Odontology through normalized SQL Server models planned around maintainable operational, financial, ERP, and healthcare workflows.',
  },
  {
    id: 'database-migration',
    name: 'Database Migration',
    category: 'Database',
    shortDescription:
      'Migrating legacy systems from Access and FoxPro-based environments to SQL Server while preserving business continuity.',
    iconLabel: 'MIG',
    relatedProjectSlugs: ['worker', 'manager-plus', 'manager-clinic', 'odontology'],
    evidenceSummary:
      'Database migration is represented by Worker modernization from Access toward SQL Server plus Avances Software products migrated from FoxPro-oriented environments toward SQL Server.',
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
    shortDescription: 'Complementary frontend structure for backend-driven user workflows.',
    iconLabel: 'NG',
    relatedProjectSlugs: ['expensux', 'j3dev-portfolio', 'testigo-electoral'],
    evidenceSummary:
      'Angular supports Expensux frontend concepts, this portfolio application, and the from-scratch LeverIT Testigo Electoral project while Backend .NET remains the primary profile focus.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    shortDescription: 'Typed frontend code that clarifies API contracts and maintainable UI logic.',
    iconLabel: 'TS',
    relatedProjectSlugs: ['expensux', 'j3dev-portfolio', 'testigo-electoral'],
    evidenceSummary:
      'TypeScript supports clearer API-facing models in the portfolio and Angular work represented by Expensux and Testigo Electoral.',
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
    id: 'requirements-analysis',
    name: 'Requirements Analysis',
    category: 'Architecture',
    shortDescription:
      'Translating business needs and operational workflows into technical plans before implementation begins.',
    iconLabel: 'REQ',
    relatedProjectSlugs: ['worker', 'expensux', 'manager-plus', 'manager-clinic', 'odontology'],
    evidenceSummary:
      'Requirements analysis is represented by Worker, Expensux, Manager Plus, Manager Clinic, and Odontology planning work where business workflows, operational constraints, and technical implementation choices must align before coding.',
  },
  {
    id: 'uml-modeling',
    name: 'UML & Modeling',
    category: 'Architecture',
    shortDescription:
      'Use cases, flow diagrams, process analysis, and solution modeling used to plan software before coding.',
    iconLabel: 'UML',
    relatedProjectSlugs: ['worker', 'expensux', 'manager-plus', 'manager-clinic', 'odontology'],
    evidenceSummary:
      'UML and modeling are connected to Worker, Expensux, Manager Plus, Manager Clinic, and Odontology through use cases, flow diagrams, process analysis, and solution planning before implementation.',
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
    id: 'crystal-reports',
    name: 'Crystal Reports',
    category: 'Legacy & Desktop',
    shortDescription:
      'Production reporting experience for operational and business workflows in desktop environments.',
    iconLabel: 'CR',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'Crystal Reports is connected to Worker through production reporting needs for operational and business workflows in a desktop software context.',
  },
  {
    id: 'reporting',
    name: 'Reporting',
    category: 'Database',
    shortDescription:
      'Operational reporting workflows connected to production, ERP, clinical, and dental business systems.',
    iconLabel: 'REP',
    relatedProjectSlugs: ['worker', 'manager-plus', 'manager-clinic', 'odontology'],
    evidenceSummary:
      'Reporting is connected to Worker and Avances Software enterprise products through operational, ERP, clinical, and dental workflows that required public-safe reporting support and data review.',
  },
  {
    id: 'foxpro',
    name: 'FoxPro',
    category: 'Legacy & Desktop',
    shortDescription: 'Legacy technology awareness for understanding older business systems.',
    iconLabel: 'FP',
    relatedProjectSlugs: ['manager-plus', 'manager-clinic', 'odontology'],
    evidenceSummary:
      'FoxPro is connected to Avances Software enterprise products where legacy business systems, database migration support, and SQL Server adoption were part of the professional context.',
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
    category: 'Backend',
    backendGroup: 'Backend Tooling',
    shortDescription: 'API documentation and testing support for backend workflows.',
    iconLabel: 'SWG',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'Swagger/API testing appears in the project implementation blocks and supports clearer API validation workflows.',
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'Backend',
    backendGroup: 'Backend Tooling',
    shortDescription:
      'API testing and endpoint validation used during enterprise backend work before Swagger became the primary workflow.',
    iconLabel: 'PM',
    relatedProjectSlugs: ['ithelpcenter', 'discovery'],
    evidenceSummary:
      'Postman is connected to ItHelpCenter and Discovery as API testing and endpoint validation support during enterprise backend work before Swagger became the primary workflow.',
  },
  {
    id: 'unit-testing',
    name: 'Unit Testing',
    category: 'Backend',
    backendGroup: 'Backend Tooling',
    shortDescription:
      'Focused validation of business logic through automated test scenarios using modern .NET testing frameworks.',
    iconLabel: 'UT',
    relatedProjectSlugs: ['expensux'],
    evidenceSummary:
      'Unit Testing is connected to Expensux as an active strengthening area for validating business logic with focused automated test scenarios in modern .NET.',
    contextNotes: [
      'This skill is presented as currently being strengthened while remaining tied to practical backend validation needs.',
    ],
  },
  {
    id: 'azure-learning',
    name: 'Azure Learning',
    category: 'Dev Tools / Cloud',
    shortDescription: 'Cloud deployment topic reserved for future verified evidence.',
    iconLabel: 'AZ',
    relatedProjectSlugs: [],
    evidenceSummary:
      'Azure is listed as a current learning area until public-safe project evidence or deployment context is available.',
    contextNotes: ['This avoids overstating cloud experience before evidence is added.'],
  },
  {
    id: 'docker-learning',
    name: 'Docker Learning',
    category: 'Dev Tools / Cloud',
    shortDescription: 'Container workflow topic reserved for future verified evidence.',
    iconLabel: 'DK',
    relatedProjectSlugs: [],
    evidenceSummary:
      'Docker is listed as a current learning area until it can be connected to public-safe project evidence.',
    contextNotes: ['Current-learning status keeps the skills page evidence-based.'],
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
      'Documentation appears through safe public project summaries, availability notes, and review-oriented implementation blocks.',
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
    name: 'Technology Adaptability',
    category: 'Soft Skills',
    shortDescription:
      'Learning and applying the tools required by the problem, from legacy environments to modern .NET and frontend integration.',
    iconLabel: 'TA',
    relatedProjectSlugs: ['worker', 'j3dev-portfolio'],
    evidenceSummary:
      'Technology adaptability is shown by the transition from legacy desktop technologies toward modern .NET, Angular, typed data, and maintainable architecture.',
  },
  {
    id: 'maintainability-mindset',
    name: 'Long-Term Thinking',
    category: 'Soft Skills',
    shortDescription:
      'Prioritizing software decisions that remain understandable, maintainable, and useful beyond the first delivery.',
    iconLabel: 'LT',
    relatedProjectSlugs: ['worker', 'expensux', 'j3dev-portfolio', 'ithelpcenter', 'discovery'],
    evidenceSummary:
      'Long-term thinking is a repeated theme across Worker modernization, Expensux API organization, the portfolio static data architecture, and LeverIT enterprise maintenance work.',
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
    backendGroup: 'Application Frameworks',
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
    backendGroup: 'API & Communication',
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
    id: 'legacy-modernization',
    name: 'Legacy Modernization',
    category: 'Enterprise Practices',
    shortDescription:
      'Evolving production systems toward modern architectures without disrupting business operations.',
    iconLabel: 'LM',
    relatedProjectSlugs: ['worker', 'expensux', 'manager-plus', 'manager-clinic', 'odontology'],
    evidenceSummary:
      'Legacy modernization is connected to Worker, Expensux, Manager Plus, Manager Clinic, and Odontology through incremental evolution toward modern architectures and SQL Server-backed workflows while preserving business continuity.',
  },
  {
    id: 'enterprise-maintenance',
    name: 'Enterprise Maintenance',
    category: 'Enterprise Practices',
    shortDescription:
      'Supporting long-running production systems through safe, incremental improvements.',
    iconLabel: 'ENT',
    relatedProjectSlugs: [
      'ithelpcenter',
      'discovery',
      'worker',
      'manager-plus',
      'manager-clinic',
      'odontology',
    ],
    evidenceSummary:
      'Enterprise maintenance is demonstrated through LeverIT project support, Worker production evolution, and Avances Software ERP, clinical, and dental products, with details sanitized for public presentation.',
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
const SKILLS_EN: Skill[] = SKILL_ITEMS.map((skill) => ({
  ...skill,
  iconUrl: `assets/images/logos/skills/${skill.id}.svg`,
}));

const skillCategoryEsMap: Record<SkillCategory, SkillCategory> = {
  Backend: 'Backend',
  Database: 'Base de datos',
  Frontend: 'Frontend',
  Architecture: 'Arquitectura',
  'Legacy & Desktop': 'Legacy y Desktop',
  'Dev Tools / Cloud': 'Herramientas Dev / Cloud',
  'Soft Skills': 'Habilidades blandas',
  'Enterprise Practices': 'Prácticas empresariales',
  'Base de datos': 'Base de datos',
  Arquitectura: 'Arquitectura',
  'Legacy y Desktop': 'Legacy y Desktop',
  'Herramientas Dev / Cloud': 'Herramientas Dev / Cloud',
  'Habilidades blandas': 'Habilidades blandas',
  'Prácticas empresariales': 'Prácticas empresariales',
};

const backendSkillGroupEsMap: Record<BackendSkillGroup, BackendSkillGroup> = {
  'Platform & Language': 'Plataforma y lenguaje',
  'Application Frameworks': 'Frameworks de aplicación',
  'Data Access & Querying': 'Acceso a datos y consultas',
  'API & Communication': 'API y comunicación',
  'Backend Tooling': 'Herramientas Backend',
  'Plataforma y lenguaje': 'Plataforma y lenguaje',
  'Frameworks de aplicación': 'Frameworks de aplicación',
  'Acceso a datos y consultas': 'Acceso a datos y consultas',
  'API y comunicación': 'API y comunicación',
  'Herramientas Backend': 'Herramientas Backend',
};

const SKILL_CATEGORIES_ES: SkillCategory[] = SKILL_CATEGORIES_EN.map(
  (category) => skillCategoryEsMap[category],
);

const BACKEND_SKILL_GROUPS_ES: BackendSkillGroup[] = BACKEND_SKILL_GROUPS_EN.map(
  (group) => backendSkillGroupEsMap[group],
);

const skillNameEsMap: Record<string, string> = {
  'responsive-design': 'Diseño responsive',
  'layered-architecture': 'Arquitectura por capas',
  'clean-code': 'Clean code',
  'api-design': 'Diseño de API',
  'azure-learning': 'Aprendizaje de Azure',
  'docker-learning': 'Aprendizaje de Docker',
  'problem-solving': 'Resolución de problemas',
  'technical-analysis': 'Análisis técnico',
  documentation: 'Documentación',
  'team-collaboration': 'Colaboración en equipo',
  'continuous-learning': 'Adaptabilidad tecnológica',
  'maintainability-mindset': 'Pensamiento de largo plazo',
  'database-design': 'Diseño de base de datos',
  'database-migration': 'Migración de base de datos',
  'requirements-analysis': 'Análisis de requerimientos',
  'uml-modeling': 'UML y modelado',
  'legacy-modernization': 'Modernización legacy',
  'search-ux': 'UX de búsqueda',
  'spa-like-architecture': 'Arquitectura tipo SPA',
  'lazy-loading': 'Lazy loading',
  'ai-assisted-ux': 'UX asistida por IA',
  'enterprise-maintenance': 'Mantenimiento empresarial',
  'team-conventions': 'Convenciones de equipo',
  reporting: 'Reportes',
};

const skillSpanishDescriptions: Record<
  string,
  Pick<Skill, 'shortDescription' | 'evidenceSummary'> & { contextNotes?: string[] }
> = {
  dotnet: {
    shortDescription:
      'Experiencia en plataforma backend para modernización en producción y dirección API.',
    evidenceSummary:
      '.NET aparece en la ruta de modernización de Worker y en trabajo empresarial de ItHelpCenter, donde los límites de aplicación y la mantenibilidad importan en contextos de producción.',
    contextNotes: [
      'Los detalles públicos se mantienen a alto nivel para evitar exponer lógica propietaria de producción.',
    ],
  },
  csharp: {
    shortDescription: 'Lenguaje principal para backend moderno y código de aplicación mantenible.',
    evidenceSummary:
      'C# apoya la modernización de Worker y trabajo empresarial en LeverIT, incluyendo implementación orientada a backend y responsabilidades REST API.',
  },
  'aspnet-core': {
    shortDescription:
      'Framework backend enfocado en APIs para servicios de aplicación estructurados.',
    evidenceSummary:
      'La experiencia con ASP.NET y ASP.NET Core se representa mediante conceptos de API en Expensux y trabajo de mantenimiento y funcionalidades empresariales en LeverIT.',
  },
  'rest-apis': {
    shortDescription: 'Límites HTTP API para separar responsabilidades frontend y backend.',
    evidenceSummary:
      'Los conceptos REST API hacen parte de la modernización de Worker, Expensux y trabajo empresarial en LeverIT que separa responsabilidades backend de flujos frontend.',
  },
  jwt: {
    shortDescription: 'Conceptos de autenticación basada en tokens para flujos protegidos por API.',
    evidenceSummary:
      'Expensux incluye autenticación JWT como parte de su flujo de control financiero y diseño de responsabilidades API.',
  },
  dapper: {
    shortDescription: 'Acceso liviano a datos para flujos de aplicación respaldados por SQL.',
    evidenceSummary:
      'Dapper se conecta con SQL Server y procedimientos almacenados en la modernización de Worker y conceptos de acceso a datos de Expensux.',
  },
  'sql-server': {
    shortDescription:
      'Experiencia en base de datos relacional para flujos de negocio, consultas y procedimientos almacenados.',
    evidenceSummary:
      'SQL Server aparece en 8 contextos de proyecto: Worker, Expensux, proyectos empresariales LeverIT y productos de Avances Software, con foco en integridad de datos, migraciones, flujos de negocio y sistemas clínicos.',
  },
  'database-design': {
    shortDescription:
      'Diseño de modelos relacionales normalizados que soportan flujos de negocio mantenibles y crecimiento a largo plazo.',
    evidenceSummary:
      'Database Design se conecta con 5 contextos de proyecto: Worker, Expensux, Manager Plus, Manager Clinic y Odontology mediante modelos SQL Server normalizados alrededor de flujos operativos, financieros, ERP y de salud mantenibles.',
  },
  'database-migration': {
    shortDescription:
      'Migración de sistemas legacy desde Access y entornos basados en FoxPro hacia SQL Server preservando continuidad operativa.',
    evidenceSummary:
      'Database Migration se representa en la modernización de Worker desde Access hacia SQL Server y en productos de Avances Software migrados desde entornos orientados a FoxPro hacia SQL Server.',
  },
  angular: {
    shortDescription:
      'Framework frontend usado como capacidad complementaria para flujos impulsados por backend.',
    evidenceSummary:
      'Angular apoya Expensux, Testigo Electoral y este portfolio, conectando interfaces usables con servicios y reglas de negocio backend.',
  },
  typescript: {
    shortDescription: 'Lenguaje tipado para construir interfaces Angular mantenibles.',
    evidenceSummary:
      'TypeScript aparece en trabajo Angular y en este portfolio como apoyo a componentes más claros y mantenibles.',
  },
  solid: {
    shortDescription: 'Principios de diseño para código orientado a objetos mantenible.',
    evidenceSummary:
      'SOLID guía la modernización y el diseño backend donde la separación de responsabilidades mejora mantenimiento y evolución.',
  },
  'layered-architecture': {
    shortDescription:
      'Separación de responsabilidades para que las soluciones sean más fáciles de mantener y extender.',
    evidenceSummary:
      'La arquitectura por capas se refleja en modernización .NET, APIs y decisiones de diseño orientadas a sistemas de largo plazo.',
  },
  git: {
    shortDescription: 'Control de versiones para seguimiento de cambios y colaboración.',
    evidenceSummary:
      'Git apoya el trabajo profesional y este portfolio mediante cambios incrementales, trazabilidad y entrega ordenada.',
  },
  github: {
    shortDescription:
      'Plataforma para repositorios públicos y evidencia de trabajo cuando puede compartirse.',
    evidenceSummary:
      'GitHub se usa para publicar trabajo seguro como este portfolio y enlaces disponibles cuando el contexto lo permite.',
  },
  'problem-solving': {
    shortDescription:
      'Análisis práctico de problemas entre datos, aplicación y necesidades de negocio.',
    evidenceSummary:
      'La resolución de problemas se evidencia en mantenimiento, modernización y soporte de sistemas existentes sin exponer detalles privados.',
  },
  'technical-analysis': {
    shortDescription:
      'Revisión de requisitos, comportamiento existente y tradeoffs antes de implementar.',
    evidenceSummary:
      'El análisis técnico conecta necesidades de negocio, datos y restricciones del sistema antes de proponer cambios.',
  },
  documentation: {
    shortDescription: 'Notas y explicaciones para preservar decisiones y facilitar continuidad.',
    evidenceSummary:
      'La documentación apoya handoff, mantenibilidad y claridad en proyectos empresariales y públicos.',
  },
  'team-collaboration': {
    shortDescription:
      'Trabajo con equipos y stakeholders para alinear decisiones técnicas con la entrega.',
    evidenceSummary:
      'La colaboración aparece en proyectos de LeverIT, soporte empresarial y construcción de soluciones con convenciones compartidas.',
  },
  'continuous-learning': {
    shortDescription:
      'Aprendizaje y aplicación de las herramientas que exige el problema, desde entornos legacy hasta .NET moderno e integración frontend.',
    evidenceSummary:
      'La adaptabilidad tecnológica conecta experiencia VB6, Access, WinForms y SQL Server con .NET moderno, APIs, Angular e integración frontend.',
  },
  'legacy-modernization': {
    shortDescription:
      'Evolución de sistemas en producción hacia arquitecturas modernas sin interrumpir la operación del negocio.',
    evidenceSummary:
      'Legacy Modernization se conecta con Worker, Expensux, Manager Plus, Manager Clinic y Odontology mediante evolución incremental hacia arquitecturas modernas y flujos basados en SQL Server mientras se preserva la continuidad del negocio.',
  },
  'enterprise-maintenance': {
    shortDescription:
      'Soporte a sistemas de producción de largo plazo mediante mejoras seguras e incrementales.',
    evidenceSummary:
      'El mantenimiento empresarial se demuestra en soporte a proyectos LeverIT, evolución de Worker y productos ERP, clínicos y odontológicos de Avances Software, con detalles sanitizados para presentación pública.',
  },
  'team-conventions': {
    shortDescription:
      'Seguir y mejorar prácticas compartidas para que el equipo mantenga software de forma consistente.',
    evidenceSummary:
      'Las convenciones de equipo se conectan con trabajo empresarial en LeverIT, patrones reutilizables y entregas mantenibles.',
  },

  'ado-net': {
    shortDescription: 'Experiencia de acceso a datos legacy desde sistemas desktop en producción.',
    evidenceSummary:
      'Worker inició como aplicación Access y VB.NET usando ADO.NET, aportando experiencia práctica en mantenimiento y evolución de acceso a datos legacy.',
  },
  linq: {
    shortDescription: 'Patrones de consulta y transformación para lógica C# legible.',
    evidenceSummary:
      'LINQ se representa como parte del conjunto de habilidades de desarrollo C#/.NET usado para mantener lógica de negocio legible y mantenible.',
  },
  'entity-framework-core': {
    shortDescription:
      'Tecnología ORM actualmente fortalecida mediante formación, ejercicios de arquitectura y práctica con proyectos .NET modernos.',
    evidenceSummary:
      'Entity Framework Core se presenta como un área activa de fortalecimiento para acceso a datos .NET moderno. Todavía no se presenta como experiencia fuerte en producción.',
    contextNotes: [
      'Enfoque actual: formación, ejercicios de arquitectura y proyectos de práctica antes de vincular evidencia pública segura de producción.',
    ],
  },
  'stored-procedures': {
    shortDescription:
      'Rutinas del lado de base de datos usadas cuando apoyan operaciones de datos mantenibles.',
    evidenceSummary:
      'Stored Procedures aparecen en Worker y Expensux como parte del diseño de operaciones de datos centradas en SQL Server.',
  },
  'microsoft-access': {
    shortDescription:
      'Experiencia en base de datos legacy desde historia de aplicaciones desktop en producción.',
    evidenceSummary:
      'Worker inició con almacenamiento en Microsoft Access, creando experiencia directa con restricciones de bases de datos legacy y planeación de migración.',
  },
  scss: {
    shortDescription: 'Estilos estructurados para mantener UI Angular con mejor organización.',
    evidenceSummary:
      'SCSS apoya este portfolio y flujos Angular al mantener estilos organizados y componentes visuales más fáciles de sostener.',
  },
  'responsive-design': {
    shortDescription:
      'Diseño adaptable para que las interfaces funcionen en diferentes tamaños de pantalla.',
    evidenceSummary:
      'Responsive Design se evidencia en este portfolio y en el enfoque de UI que mantiene acceso claro al contenido.',
  },
  'clean-code': {
    shortDescription: 'Hábitos de código legible orientados a mantenimiento y transferencia.',
    evidenceSummary:
      'Clean code apoya modernización, trabajo empresarial y entregas incrementales donde la claridad reduce riesgo futuro.',
  },
  'api-design': {
    shortDescription:
      'Planeación de límites API alrededor de responsabilidades claras y flujos de negocio.',
    evidenceSummary:
      'API Design aparece en la modernización de Worker, flujos de Expensux y trabajo empresarial LeverIT que requirió límites backend alrededor de necesidades reales de negocio.',
  },
  'requirements-analysis': {
    shortDescription:
      'Traducción de necesidades de negocio y flujos operativos en planes técnicos antes de iniciar la implementación.',
    evidenceSummary:
      'Requirements Analysis se representa en Worker, Expensux, Manager Plus, Manager Clinic y Odontology mediante planeación que alinea flujos de negocio, restricciones operativas y decisiones técnicas antes de codificar.',
  },
  'uml-modeling': {
    shortDescription:
      'Casos de uso, diagramas de flujo, análisis de procesos y modelado de soluciones usados para planear software antes de codificar.',
    evidenceSummary:
      'UML & Modeling se conecta con Worker, Expensux, Manager Plus, Manager Clinic y Odontology mediante casos de uso, diagramas de flujo, análisis de procesos y modelado de soluciones previo a la implementación.',
  },
  'vb-net': {
    shortDescription: 'Experiencia en aplicaciones desktop y legacy en producción.',
    evidenceSummary:
      'Worker fue creado inicialmente como aplicación VB.NET, aportando experiencia de largo plazo con código desktop legacy en producción.',
  },
  winforms: {
    shortDescription: 'Experiencia UI desktop conectada con flujos operativos de negocio.',
    evidenceSummary:
      'WinForms representa experiencia de aplicaciones desktop obtenida mediante software de flujos en producción y evolución de sistemas legacy.',
  },
  wpf: {
    shortDescription: 'Dirección UI desktop para formularios modernizados en aplicaciones .NET.',
    evidenceSummary:
      'WPF hace parte de la dirección de modernización de Worker para formularios desktop mientras preserva continuidad de flujos de negocio.',
  },
  'crystal-reports': {
    shortDescription:
      'Experiencia en reportes de producción para flujos operativos y de negocio en entornos desktop.',
    evidenceSummary:
      'Crystal Reports se conecta con Worker mediante necesidades de reportes de producción para flujos operativos y de negocio en contexto de software desktop.',
  },
  reporting: {
    shortDescription:
      'Flujos de reportes operativos conectados con sistemas de producción, ERP, clínicos y odontológicos.',
    evidenceSummary:
      'Reporting se conecta con Worker y productos empresariales de Avances Software mediante flujos operativos, ERP, clínicos y odontológicos que requirieron soporte de reportes y revisión de datos segura para publicación.',
  },
  foxpro: {
    shortDescription:
      'Tecnología legacy conectada con sistemas empresariales antiguos y migraciones hacia SQL Server.',
    evidenceSummary:
      'FoxPro se conecta con productos empresariales de Avances Software donde sistemas de negocio legacy, soporte de migración y adopción de SQL Server hicieron parte del contexto profesional.',
  },
  'visual-basic-6': {
    shortDescription: 'Contexto desktop legacy útil para conversaciones de modernización.',
    evidenceSummary:
      'Visual Basic 6 se representa actualmente como contexto de modernización legacy y se vinculará a ejemplos públicos seguros cuando estén disponibles.',
    contextNotes: ['No se exponen detalles propietarios ni implementaciones legacy privadas.'],
  },
  codex: {
    shortDescription: 'Flujo de desarrollo asistido por IA con cambios incrementales y revisables.',
    evidenceSummary:
      'Codex se usa como parte de un proceso incremental de desarrollo del portfolio, manteniendo cambios buildables y revisables.',
  },
  swagger: {
    shortDescription: 'Soporte de documentación y pruebas de API para flujos backend.',
    evidenceSummary:
      'Swagger / pruebas de API aparecen en los bloques de implementación de proyectos y apoyan una validación API más clara.',
  },
  postman: {
    shortDescription:
      'Pruebas de APIs y validación de endpoints usadas en trabajo backend empresarial antes de adoptar Swagger como flujo principal.',
    evidenceSummary:
      'Postman se conecta con ItHelpCenter y Discovery como apoyo para pruebas de APIs y validación de endpoints durante trabajo backend empresarial antes de adoptar Swagger como flujo principal.',
  },
  'unit-testing': {
    shortDescription:
      'Validación enfocada de lógica de negocio mediante escenarios de prueba automatizados con frameworks modernos de .NET.',
    evidenceSummary:
      'Unit Testing se conecta con Expensux como área actualmente en fortalecimiento para validar lógica de negocio mediante escenarios automatizados enfocados en .NET moderno.',
    contextNotes: [
      'Esta habilidad se presenta como actualmente en fortalecimiento y conectada con necesidades prácticas de validación backend.',
    ],
  },
  'azure-learning': {
    shortDescription: 'Tema cloud reservado para evidencia futura verificada.',
    evidenceSummary:
      'Azure se lista como área actual de aprendizaje hasta que exista evidencia pública segura de proyecto o contexto de despliegue.',
    contextNotes: ['Esto evita exagerar experiencia cloud antes de agregar evidencia.'],
  },
  'docker-learning': {
    shortDescription: 'Tema de flujos con contenedores reservado para evidencia futura verificada.',
    evidenceSummary:
      'Docker se lista como área actual de aprendizaje hasta que pueda conectarse con evidencia pública segura de proyecto.',
    contextNotes: [
      'El estado de aprendizaje actual mantiene la página de habilidades basada en evidencia.',
    ],
  },
  'maintainability-mindset': {
    shortDescription:
      'Priorización de decisiones de software que sigan siendo comprensibles, mantenibles y útiles después de la primera entrega.',
    evidenceSummary:
      'El pensamiento de largo plazo se refleja en modernización, arquitectura por capas, documentación y cambios incrementales.',
  },
  javascript: {
    shortDescription:
      'Lenguaje frontend usado en proyectos empresariales y mejoras de comportamiento UI.',
    evidenceSummary:
      'JavaScript aparece en trabajo empresarial LeverIT, incluyendo patrones reutilizables y mantenimiento frontend.',
  },
  html: {
    shortDescription: 'Estructura de contenido web para interfaces claras y accesibles.',
    evidenceSummary:
      'HTML apoya interfaces Angular y empresariales donde la estructura clara facilita usabilidad y mantenimiento.',
  },
  css: {
    shortDescription: 'Estilos web para interfaces mantenibles y legibles.',
    evidenceSummary:
      'CSS se conecta con trabajo frontend complementario y presentación profesional del portfolio.',
  },
  aspnet: {
    shortDescription: 'Experiencia ASP.NET en funcionalidades empresariales y mantenimiento.',
    evidenceSummary:
      'ASP.NET aparece en proyectos LeverIT con trabajo de mantenimiento, mejoras y áreas funcionales empresariales.',
  },
  websockets: {
    shortDescription:
      'Capacidad relacionada con comunicación en tiempo real en contexto empresarial.',
    evidenceSummary:
      'WebSockets se menciona en Discovery a nivel público seguro, sin exponer flujos internos de mensajería.',
  },
  'search-ux': {
    shortDescription:
      'Mejoras de experiencia de búsqueda para ayudar a usuarios a encontrar información.',
    evidenceSummary:
      'Search UX se representa en mejoras de ItHelpCenter descritas de forma general por confidencialidad.',
  },
  'spa-like-architecture': {
    shortDescription:
      'Patrones de navegación tipo SPA resumidos sin exponer implementación interna.',
    evidenceSummary:
      'SPA-like architecture se representa mediante patrones de navegación de ItHelpCenter sobre un índice principal único, resumidos sin exponer código interno.',
  },
  'lazy-loading': {
    shortDescription:
      'Patrones de carga controlada usados para interfaces mantenibles y responsivas.',
    evidenceSummary:
      'Lazy Loading se conecta con patrones controlados de ItHelpCenter usados como parte de mejoras mantenibles de arquitectura frontend.',
  },
  'ai-assisted-ux': {
    shortDescription:
      'Conceptos de guía asistida por IA para ayudar al usuario a encontrar la ruta o categoría adecuada.',
    evidenceSummary:
      'AI-assisted UX se representa en conceptos posteriores de descubrimiento de categorías y guía de usuario en ItHelpCenter, mantenidos a alto nivel por confidencialidad.',
  },
};

const SKILLS_ES: Skill[] = SKILLS_EN.map((skill) => ({
  ...skill,
  name: skillNameEsMap[skill.id] ?? skill.name,
  category: skillCategoryEsMap[skill.category],
  backendGroup: skill.backendGroup ? backendSkillGroupEsMap[skill.backendGroup] : undefined,
  ...(skillSpanishDescriptions[skill.id] ?? {
    shortDescription: skill.shortDescription
      .replace('Backend', 'Backend')
      .replace('Frontend', 'Frontend')
      .replace('experience', 'experiencia')
      .replace('development', 'desarrollo')
      .replace('maintainable', 'mantenible'),
    evidenceSummary: skill.evidenceSummary
      .replace('is represented', 'se representa')
      .replace('is connected', 'se conecta')
      .replace('experience', 'experiencia')
      .replace('production', 'producción')
      .replace('maintenance', 'mantenimiento'),
  }),
}));

export const SKILL_CATEGORIES = {
  en: SKILL_CATEGORIES_EN,
  es: SKILL_CATEGORIES_ES,
} as const;

export const BACKEND_SKILL_GROUPS = {
  en: BACKEND_SKILL_GROUPS_EN,
  es: BACKEND_SKILL_GROUPS_ES,
} as const;

export const SKILLS = {
  en: SKILLS_EN,
  es: SKILLS_ES,
} as const;
