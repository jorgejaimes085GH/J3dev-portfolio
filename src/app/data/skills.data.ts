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
    category: 'Backend',
    backendGroup: 'Backend Tooling',
    shortDescription: 'API documentation and testing support for backend workflows.',
    iconLabel: 'SWG',
    relatedProjectSlugs: ['worker'],
    evidenceSummary:
      'Swagger/API testing appears in the project implementation blocks and supports clearer API validation workflows.',
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
      'SQL Server aparece en Worker, Expensux y proyectos empresariales de LeverIT, con foco en integridad de datos y necesidades de negocio.',
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
      'Aprendizaje constante para evolucionar desde tecnologías legacy hacia herramientas modernas.',
    evidenceSummary:
      'El aprendizaje continuo conecta experiencia VB6, Access, WinForms y SQL Server con .NET moderno, APIs y Angular.',
  },
  'enterprise-maintenance': {
    shortDescription:
      'Soporte a sistemas de producción de largo plazo mediante mejoras seguras e incrementales.',
    evidenceSummary:
      'El mantenimiento empresarial se demuestra en soporte a proyectos LeverIT y evolución de Worker, con detalles sanitizados para presentación pública.',
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
  foxpro: {
    shortDescription:
      'Conocimiento de tecnología legacy útil para entender sistemas de negocio antiguos.',
    evidenceSummary:
      'FoxPro se presenta actualmente como familiaridad con sistemas legacy y se conectará con evidencia pública segura cuando esté disponible.',
    contextNotes: ['Aún no hay detalle público de proyecto vinculado.'],
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
      'Pensamiento orientado a que el software siga siendo comprensible y modificable.',
    evidenceSummary:
      'La mentalidad de mantenibilidad se refleja en modernización, arquitectura por capas, documentación y cambios incrementales.',
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
