import { Project, ProjectTimeBlock } from '../models/project.model';

export const PROJECTS_HERO_IMAGE_URL = 'assets/profile/projects/projects-hero.webp';

const WORKER_PROFESSIONAL_INVESTMENT_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Professional Investment Context',
    duration: 'Initial build from September 2014 to production release in November 2015',
    note: 'Participated in use cases, requirements gathering, UML design, architecture, database design, implementation, testing, and production rollout.',
  },
  {
    label: 'Long-term evolution',
    duration:
      'More than one year of initial construction followed by a decade of functional and technological evolution',
    note: 'Progressive modernization from Access and VB.NET toward SQL Server, layered architecture, WPF, and modern .NET technologies.',
  },
];

const EXPENSUX_PROFESSIONAL_INVESTMENT_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Professional Investment Context',
    duration: 'Approximate initial build: 4 to 6 weeks',
    note: 'Participated in functional design, architecture, database design, backend API, Angular frontend, and testing.',
  },
  {
    label: 'Project summary',
    duration: 'Personal project built from scratch',
    note: 'Demonstrates modern .NET architecture, REST APIs, JWT, Dapper, SQL Server, and Angular.',
  },
];

const ITHELPCENTER_PROFESSIONAL_INVESTMENT_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Professional Investment Context',
    duration: 'Professional participation for more than 10 years',
    note: 'Contributions included backend, frontend, SQL Server, query optimization, functional evolution, new modules, smart searches, and UX improvements.',
  },
  {
    label: 'Project summary',
    duration: 'Continuous work on a real production enterprise platform',
    note: 'Scope is summarized without exposing client workflows, source code, or internal operational details.',
  },
];

const DISCOVERY_PROFESSIONAL_INVESTMENT_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Professional Investment Context',
    duration: 'Professional participation for more than 5 years',
    note: 'Contributions included SQL Server, ASP.NET, WebSockets, continuous inventory, functional evolution, and production support.',
  },
  {
    label: 'Project summary',
    duration: 'Continuous work across enterprise releases',
    note: 'Supported inventory improvements and functionality evolution while keeping proprietary implementation details private.',
  },
];

const TESTIGO_ELECTORAL_PROFESSIONAL_INVESTMENT_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Professional Investment Context',
    duration: 'Approximate build: one month',
    note: 'Participated in Angular, REST APIs, SQL Server, business rules, and information validation.',
  },
  {
    label: 'Project summary',
    duration: 'Enterprise project built for a real client',
    note: 'Delivered around specific electoral auditing requirements while keeping private client details protected.',
  },
];

const J3DEV_PORTFOLIO_PROFESSIONAL_INVESTMENT_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Professional Investment Context',
    duration: 'Active personal project',
    note: 'Participated in data-driven architecture, Angular implementation, internationalization, multi-theme UX, and responsive design.',
  },
  {
    label: 'Project summary',
    duration: 'Professional lab for modern frontend architecture',
    note: 'Demonstrates portfolio engineering discipline, full stack communication context, and maintainable Angular implementation.',
  },
];

const MANAGER_PLUS_PROFESSIONAL_INVESTMENT_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Professional Investment Context',
    duration: 'Approximately one year of professional participation inside Avances Software',
    note: 'Contributions included FoxPro to SQL Server migration, database normalization, incident correction, new functionality, reports, and Excel integrations.',
  },
  {
    label: 'Project summary',
    duration: 'Evolution of an enterprise ERP used by multiple organizations',
    note: 'Historical production context is summarized without exposing proprietary source code or client data.',
  },
];

const MANAGER_CLINIC_PROFESSIONAL_INVESTMENT_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Professional Investment Context',
    duration: 'Approximately one year of professional participation inside Avances Software',
    note: 'Contributions included FoxPro to SQL Server migration, query optimization, maintenance, functional improvements, and production support.',
  },
  {
    label: 'Project summary',
    duration: 'Clinical platform for patients, appointments, and medical history management',
    note: 'Historical production context is summarized without exposing proprietary source code or client data.',
  },
];

const ODONTOLOGY_PROFESSIONAL_INVESTMENT_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Professional Investment Context',
    duration: 'Approximately one year of professional participation inside Avances Software',
    note: 'Contributions included FoxPro to SQL Server migration, maintenance, optimization, reporting, and functional improvements.',
  },
  {
    label: 'Project summary',
    duration: 'Specialized platform for dental practice management',
    note: 'Historical production context is summarized without exposing proprietary source code or client data.',
  },
];

const PROJECT_ITEMS: Project[] = [
  {
    id: 'worker',
    slug: 'worker',
    title: 'Worker',
    typeStatus: 'Featured Project ⭐ / Production software / Enterprise internal system',
    shortDescription:
      'Long-running enterprise workflow system used in production since 2015, evolved across more than a decade from Access and VB.NET toward SQL Server, modern .NET architecture, and adaptable business workflows.',
    visualLabel: 'Enterprise workflow system visual',
    ctaLabel: 'View project details',
    context: [
      'Real enterprise system with more than a decade of evolution across production business needs.',
      'Initially created as a monolithic Access + VB.NET application using ADO.NET.',
      'Later evolved to support multi-connection scenarios with Access and SQL Server.',
      'Modernization work focuses on preserving business continuity while improving architecture, data design, reporting, and maintainability.',
      'Adapted over time to support operational workflows across multiple industries and business contexts.',
      'Source code is not exposed and no demo link is provided.',
    ],
    architectureNotes: [
      'Evolved from a legacy desktop-oriented architecture toward a layered .NET approach grounded in maintainable separation of concerns.',
      'Modernization direction includes C#, .NET 8, REST API boundaries, WPF forms, Dapper, SQL Server stored procedures, SOLID principles, and database design improvements.',
      'Migration from Access toward SQL Server strengthened experience with schema design, query behavior, reporting needs, and incremental legacy modernization.',
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
    timeBlocks: WORKER_PROFESSIONAL_INVESTMENT_BLOCKS,
    links: [
      {
        label:
          'Company that uses the product for the administration, billing, and management of its services.',
        type: 'Reference',
        typeLabel: 'PASO TV',
        actionLabel: 'Open Reference',
        url: 'https://www.pasotelevision.net/',
        isExternal: true,
      },
      {
        label: 'Product Video',
        type: 'Video',
        typeLabel: 'PRODUCT VIDEO',
        videoSrc: 'assets/project-media/worker/worker-product-demo.mp4',
        isExternal: false,
        isPlaceholder: true,
        placeholderMessage: '',
      },
    ],
    placeholders: {
      companyName: 'Paso Television',
      companyAddress: 'Carrera 15 # 18-21, Socorro, Santander, Colombia',
      companyPhone: '+57 318 5176823',
      officialWebsiteUrl: 'https://www.pasotelevision.net/',
      videoUrl: '',
    },
    referencePlaceholders: {
      companyName: 'Paso Television',
      companyAddress: 'Carrera 15 # 18-21, Socorro, Santander, Colombia',
      companyPhone: '+57 318 5176823',
    },
    sourceCodeNote: '',
    confidentialityNote:
      'This production project is described with sanitized context only. Source code, proprietary workflows, customer details, and operational data are not exposed.',
  },
  {
    id: 'expensux',
    slug: 'expensux',
    title: 'Expensux',
    typeStatus:
      'Featured Project ⭐ / Own product / Financial control application / Web demo available',
    shortDescription:
      'Own financial control product designed from scratch with Clean Architecture direction, REST APIs, JWT authentication, Dapper data access, SQL Server workflows, and an Angular frontend while preparing a public demo.',
    visualLabel: 'Financial control application visual',
    ctaLabel: 'View project details',
    context: [
      'Own product initiative designed from zero to organize practical financial workflows.',
      'Backend-oriented project that demonstrates product thinking, API boundaries, authentication, and data modeling decisions.',
    ],
    architectureNotes: [
      'Uses Clean Architecture direction and layered .NET API concepts with SQL Server data access and an Angular frontend.',
      'Designed around profiles, accounts, debts, payments, categories, movements, JWT authentication, REST API responsibilities, and Dapper-based data access.',
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
      'Clean Architecture',
      'SOLID',
    ],
    timeBlocks: EXPENSUX_PROFESSIONAL_INVESTMENT_BLOCKS,
    deploymentEvidence: {
      eyebrow: 'Deployment evidence',
      title: 'Deployment infrastructure',
      description:
        'Expensux was deployed as a decoupled fullstack application. The Angular frontend is hosted on Cloudflare Pages, the ASP.NET Core 8 API runs on Azure App Service, and the database uses Azure SQL Database. This implementation demonstrates web publishing, CORS configuration, HTTPS consumption, API deployment, and secure connection to a cloud database.',
      nodes: [
        {
          title: 'Frontend',
          details: [
            { label: 'Service', value: 'Cloudflare Pages' },
            { label: 'Application', value: 'Angular' },
            {
              label: 'Public URL',
              value: 'https://expensux.pages.dev',
              url: 'https://expensux.pages.dev',
            },
          ],
          diagramTitle: 'Cloudflare Pages',
          diagramSubtitle: 'Frontend Angular',
          connectorLabel: 'HTTPS REST',
        },
        {
          title: 'Backend API',
          details: [
            { label: 'Service', value: 'Azure App Service' },
            { label: 'Application', value: 'ASP.NET Core 8 Web API' },
            {
              label: 'REST Documentation',
              value:
                'https://api-expensux-demo-dwc2fccychb8ahbw.brazilsouth-01.azurewebsites.net/swagger/index.html',
              url: 'https://api-expensux-demo-dwc2fccychb8ahbw.brazilsouth-01.azurewebsites.net/swagger/index.html',
            },
          ],
          diagramTitle: 'Azure App Service',
          diagramSubtitle: 'ASP.NET Core 8 API',
          connectorLabel: 'Dapper / SQL Connection',
        },
        {
          title: 'Database',
          details: [
            { label: 'Service', value: 'Azure SQL Database' },
            { label: 'Engine', value: 'SQL Server' },
            { label: 'Access', value: 'secure connection from the deployed API' },
          ],
          diagramTitle: 'Azure SQL Database',
          diagramSubtitle: 'SQL Server',
        },
      ],
      actions: [
        {
          label: 'API',
          type: 'Reference',
          actionLabel: 'View API documentation',
          url: 'https://api-expensux-demo-dwc2fccychb8ahbw.brazilsouth-01.azurewebsites.net/swagger/index.html',
          isExternal: true,
        },
      ],
    },
    links: [
      {
        label: 'Product Demo',
        type: 'Demo',
        typeLabel: 'PRODUCT DEMO',
        actionLabel: 'Open Product Demo',
        url: 'https://expensux.pages.dev',
        isExternal: true,
      },
      {
        label: 'Product Video',
        type: 'Video',
        typeLabel: 'PRODUCT VIDEO',
        videoSrc: 'assets/project-media/expensux/expensux-product-demo.mp4',
        isExternal: false,
        isPlaceholder: true,
        placeholderMessage: '',
      },
    ],
    placeholders: {
      demoUrl: 'https://expensux.pages.dev',
    },
    sourceCodeNote: '',
    confidentialityNote:
      'Financial examples and implementation details are presented safely. Source code remains private for now while the demo is prepared.',
  },
  {
    id: 'ithelpcenter',
    slug: 'ithelpcenter',
    title: 'ItHelpCenter',
    typeStatus:
      'Featured Project ⭐ / LeverIT enterprise product / Help desk platform / In production',
    shortDescription:
      'Enterprise help desk platform supported in production for years through backend and frontend maintenance, SQL Server work, search optimization, new business flows, and functional evolution.',
    visualLabel: 'LeverIT help desk platform visual',
    ctaLabel: 'View project details',
    context: [
      'Professional enterprise project worked on during Jorge’s LeverIT experience.',
      'Contributions are described without exposing source code, private demos, client names, or proprietary implementation details.',
      'Work included years of production maintenance, backend and frontend improvements, new workflow support, search experience optimization, and functional evolution.',
      'Official LeverIT product reference is included for public context; private implementation access is not provided.',
    ],
    architectureNotes: [
      'Supported SPA-like navigation patterns over a single main index in general terms, preserving the confidentiality of the internal implementation.',
      'Improved reusable JavaScript class patterns and team conventions to make frontend behavior easier to maintain.',
      'Used SQL Server and backend/frontend implementation work to support new business flows and long-running production needs.',
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
    timeBlocks: ITHELPCENTER_PROFESSIONAL_INVESTMENT_BLOCKS,
    links: [
      {
        label: 'Company that owns the product',
        description: 'Enterprise product used for years within LeverIT’s solution ecosystem.',
        type: 'Reference',
        typeLabel: 'LEVERIT',
        actionLabel: 'Open Reference',
        url: 'https://www.leverit.us/ithc-mesa-de-ayuda',
        isExternal: true,
      },
      {
        label: 'Public Product Video',
        type: 'Video',
        typeLabel: 'PRODUCT VIDEO',
        embedUrl: 'https://www.youtube.com/embed/z7OTZIXesco',
        supportText: 'Official source published by LeverIT.',
        isExternal: true,
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'https://www.leverit.us/ithc-mesa-de-ayuda',
      logoLabel: '',
    },
    sourceCodeNote: 'Private product owned by LeverIT.',
    confidentialityNote:
      'This LeverIT project is represented with public-safe, generalized descriptions only. Source code, private client information, proprietary workflows, internal architecture details, and sensitive operational data are not exposed.',
  },
  {
    id: 'testigo-electoral',
    slug: 'testigo-electoral',
    title: 'Testigo Electoral',
    typeStatus:
      'Enterprise Project / Custom client project / Electoral system / Built from scratch',
    shortDescription:
      'Custom electoral auditing platform developed for a real client to collect, validate, and review voting-station evidence through a centralized solution built with SQL Server, REST APIs, and Angular.',
    visualLabel: 'LeverIT custom client project visual',
    ctaLabel: 'View project details',
    context: [
      'Professional custom client project worked on during Jorge’s LeverIT experience.',
      'Built collaboratively from scratch with two teammates using SQL Server, REST APIs, and Angular for the presentation layer.',
      'Supported electoral evidence capture, information validation, specific business rules, and centralized review workflows at a public-safe level.',
      'No source code, private demo, client names, real addresses, or confidential implementation details are exposed.',
    ],
    architectureNotes: [
      'Collaborated on a from-scratch enterprise delivery effort with clear separation between database, API, and frontend responsibilities.',
      'Used SQL Server and REST API concepts to support structured backend communication, validation rules, and electoral evidence workflows without exposing private schema or business rules.',
      'Used Angular and TypeScript for frontend implementation while keeping client-specific UI details confidential.',
      'Demonstrates real Angular enterprise experience, team collaboration, practical delivery, and maintainable backend/frontend integration.',
    ],
    technologies: [
      'SQL Server',
      'C#',
      'REST APIs',
      'Angular',
      'TypeScript',
      'Team Collaboration',
      'Enterprise Software',
      'Business Rules',
    ],
    timeBlocks: TESTIGO_ELECTORAL_PROFESSIONAL_INVESTMENT_BLOCKS,
    links: [
      {
        label: 'LeverIT company reference',
        type: 'Reference',
        url: 'https://www.leverit.us/',
        isExternal: true,
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'https://www.leverit.us/',
      logoLabel: '',
    },
    sourceCodeNote:
      'No GitHub link, private demo, source code, client data, or proprietary implementation access is available for this LeverIT custom client project.',
    confidentialityNote:
      'This LeverIT project is represented with public-safe, generalized descriptions only. Source code, private client information, proprietary workflows, internal architecture details, and sensitive operational data are not exposed.',
  },
  {
    id: 'discovery',
    slug: 'discovery',
    title: 'Discovery',
    typeStatus:
      'Enterprise Project / LeverIT enterprise platform / IT asset management / Production evolution',
    shortDescription:
      'Enterprise Discovery platform supported through production evolution, continuous inventory capabilities, SQL Server work, ASP.NET features, WebSockets, and maintainable improvements.',
    visualLabel: 'LeverIT enterprise discovery platform visual',
    ctaLabel: 'View project details',
    context: [
      'Professional enterprise platform worked on during Jorge’s LeverIT experience.',
      'Supported production evolution, continuous inventory capabilities, SQL Server work, ASP.NET features, and WebSocket-related functionality.',
      'Contributions included support and incremental improvements rather than isolated maintenance only.',
      'Official LeverIT product reference is included for public context; no private demo or source code is exposed.',
    ],
    architectureNotes: [
      'Contributed to production-oriented enterprise platform improvements inside an existing codebase.',
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
      'Continuous Inventory',
    ],
    timeBlocks: DISCOVERY_PROFESSIONAL_INVESTMENT_BLOCKS,
    links: [
      {
        label: 'Official Discovery reference',
        type: 'Reference',
        url: 'https://www.leverit.us/solucion-discovery',
        isExternal: true,
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'https://www.leverit.us/solucion-discovery',
      logoLabel: '',
    },
    sourceCodeNote:
      'No GitHub link, private demo, source code, client data, or proprietary implementation access is available for this LeverIT enterprise project.',
    confidentialityNote:
      'This LeverIT project is represented with public-safe, generalized descriptions only. Source code, private client information, proprietary workflows, internal architecture details, and sensitive operational data are not exposed.',
  },
  {
    id: 'j3dev-portfolio',
    slug: 'j3dev-portfolio',
    title: 'J3dev Portfolio',
    typeStatus: 'Enterprise Project / Public portfolio / Professional showcase / Open Source',
    shortDescription:
      'Modern Angular portfolio engineered as a data-driven, multi-language, multi-theme, responsive professional showcase for Backend .NET specialization and portfolio engineering evidence.',
    visualLabel: 'Portfolio application visual',
    ctaLabel: 'View project details',
    context: [
      'Presents Backend .NET specialization, supporting fullstack capability, technical evolution, and recruiter-focused navigation.',
      'Public portfolio and open-source showcase for professional presentation.',
      'Uses data-driven content structures, multi-language copy, a multi-theme experience, and responsive layouts without backend, API, or database logic.',
    ],
    architectureNotes: [
      'Built as a modern Angular static application with typed data sources and reusable page structures.',
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
      'Multi-language',
    ],
    timeBlocks: J3DEV_PORTFOLIO_PROFESSIONAL_INVESTMENT_BLOCKS,
    links: [
      {
        label: 'GitHub Repository',
        type: 'GitHub',
        url: 'https://github.com/jorgejaimes085GH/J3dev-portfolio/',
        isExternal: true,
      },
    ],
    placeholders: {
      githubUrl: 'https://github.com/jorgejaimes085GH/J3dev-portfolio/',
    },
    sourceCodeNote: 'Public repository link is available for implementation review.',
    confidentialityNote:
      'This portfolio is intended as a public showcase. It uses static content and client-side behavior only, with no private backend or database access.',
  },
  {
    id: 'manager-plus',
    slug: 'manager-plus',
    title: 'Manager Plus',
    typeStatus: 'Enterprise Project / Enterprise ERP / Enterprise product / In production',
    shortDescription:
      'Commercial business management platform covering billing, inventory, purchasing, sales, accounts receivable, supplier management, and operational workflows.',
    visualLabel: 'Avances Software ERP enterprise system visual',
    ctaLabel: 'View project details',
    context: [
      'Earlier enterprise product experience from Avances Software.',
      'Represents historical production exposure to commercial ERP and business management workflows.',
      'Covered billing, inventory, purchasing, sales, accounts receivable, supplier management, and operational workflows.',
      'Official Avances Software reference is included while private source code and implementation details remain protected.',
    ],
    architectureNotes: [
      'Supported FoxPro to SQL Server migration activities and SQL Server adoption.',
      'Worked on database normalization, database design, query optimization, bug fixing, functional enhancements, and reporting workflows.',
      'Supported Excel import/export processes and operational continuity during legacy modernization work.',
      'Experience is positioned as historical enterprise systems evidence and does not visually compete with Tier 1 featured projects.',
    ],
    technologies: ['FoxPro', 'SQL Server', 'Reporting', 'Database Design', 'Database Migration'],
    timeBlocks: MANAGER_PLUS_PROFESSIONAL_INVESTMENT_BLOCKS,
    links: [
      {
        label: 'Official Manager Plus reference',
        type: 'Reference',
        url: 'https://avances.com.co/software-contable-y-facturacion.php',
        isExternal: true,
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'https://avances.com.co/software-contable-y-facturacion.php',
      logoLabel: '',
    },
    sourceCodeNote:
      'No GitHub link, private demo, source code, client data, or proprietary implementation access is available for this Avances Software enterprise product.',
    confidentialityNote:
      'This Avances Software experience is represented with public-safe descriptions only. Source code, private client information, proprietary workflows, and sensitive operational data are not exposed.',
  },
  {
    id: 'manager-clinic',
    slug: 'manager-clinic',
    title: 'Manager Clinic',
    typeStatus: 'Enterprise Project / Clinical system / Enterprise product / In production',
    shortDescription:
      'Clinical management platform supporting appointments, patient records, admissions, authorizations, prescriptions, medical history tracking, and doctor scheduling.',
    visualLabel: 'Avances Software healthcare platform visual',
    ctaLabel: 'View project details',
    context: [
      'Earlier enterprise product experience from Avances Software.',
      'Represents historical production exposure to healthcare management workflows.',
      'Supported appointments, patient records, admissions, authorizations, prescriptions, medical history tracking, and doctor scheduling.',
      'Official Avances Software reference is included while private source code and implementation details remain protected.',
    ],
    architectureNotes: [
      'Supported database migration and SQL Server adoption for a healthcare management product.',
      'Worked on query improvements, data normalization, functional enhancements, production maintenance, and bug fixing.',
      'Applied database design and reporting experience in a clinical workflow context.',
      'Experience is positioned as historical enterprise systems evidence and does not visually compete with Tier 1 featured projects.',
    ],
    technologies: ['FoxPro', 'SQL Server', 'Reporting', 'Database Design', 'Database Migration'],
    timeBlocks: MANAGER_CLINIC_PROFESSIONAL_INVESTMENT_BLOCKS,
    links: [
      {
        label: 'Official Manager Clinic reference',
        type: 'Reference',
        url: 'https://avances.com.co/software-clinico-para-ips.php',
        isExternal: true,
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'https://avances.com.co/software-clinico-para-ips.php',
      logoLabel: '',
    },
    sourceCodeNote:
      'No GitHub link, private demo, source code, client data, or proprietary implementation access is available for this Avances Software healthcare product.',
    confidentialityNote:
      'This Avances Software experience is represented with public-safe descriptions only. Source code, private client information, proprietary workflows, and sensitive operational data are not exposed.',
  },
  {
    id: 'odontology',
    slug: 'odontology',
    title: 'Odontology',
    typeStatus: 'Enterprise Project / Dental system / Enterprise product / In production',
    shortDescription:
      'Dental management platform focused on clinical records, patient tracking, appointment scheduling, and dental-specific treatment workflows.',
    visualLabel: 'Avances Software dental management platform visual',
    ctaLabel: 'View project details',
    context: [
      'Earlier enterprise product experience from Avances Software.',
      'Represents historical production exposure to dental practice and patient workflow management.',
      'Focused on clinical records, patient tracking, appointment scheduling, and dental-specific treatment workflows.',
      'Official Avances Software reference is included while private source code and implementation details remain protected.',
    ],
    architectureNotes: [
      'Supported database migration and SQL Server work for a dental practice management product.',
      'Worked on functional maintenance, query optimization, reporting, and production support.',
      'Applied database design and legacy modernization practices in a specialized healthcare workflow context.',
      'Experience is positioned as historical enterprise systems evidence and does not visually compete with Tier 1 featured projects.',
    ],
    technologies: ['FoxPro', 'SQL Server', 'Reporting', 'Database Design', 'Database Migration'],
    timeBlocks: ODONTOLOGY_PROFESSIONAL_INVESTMENT_BLOCKS,
    links: [
      {
        label: 'Official Avances products reference',
        type: 'Reference',
        url: 'https://avances.com.co/software-odontologico.php',
        isExternal: true,
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'https://avances.com.co/software-odontologico.php',
      logoLabel: '',
    },
    sourceCodeNote:
      'No GitHub link, private demo, source code, client data, or proprietary implementation access is available for this Avances Software dental product.',
    confidentialityNote:
      'This Avances Software experience is represented with public-safe descriptions only. Source code, private client information, proprietary workflows, and sensitive operational data are not exposed.',
  },
];

const PROJECT_THUMBNAIL_URLS: Record<string, string> = {
  worker: 'assets/project-media/worker/worker-thumbnail.webp',
  expensux: 'assets/project-media/expensux/expensux-thumbnail.webp',
  ithelpcenter: 'assets/project-media/ithelpcenter/ithelpcenter-thumbnail.webp',
  discovery: 'assets/project-media/discovery/discovery-thumbnail.webp',
  'testigo-electoral': 'assets/project-media/testigo-electoral/testigo-electoral-thumbnail.webp',
  'manager-clinic': 'assets/project-media/manager-clinic/manager-clinic-thumbnail.webp',
  'manager-plus': 'assets/project-media/manager-plus/manager-plus-thumbnail.webp',
  odontology: 'assets/project-media/odontology/odontology-thumbnail.webp',
  'j3dev-portfolio': 'assets/project-media/j3dev-portfolio/j3dev-portfolio-thumbnail.webp',
};

const PROJECT_OVERVIEW_IMAGE_URLS: Record<string, string> = {
  worker: 'assets/project-media/worker/worker-overview.webp',
  expensux: 'assets/project-media/expensux/expensux-overview.webp',
  ithelpcenter: 'assets/project-media/ithelpcenter/ithelpcenter-overview.webp',
  discovery: 'assets/project-media/discovery/discovery-overview.webp',
  'testigo-electoral': 'assets/project-media/testigo-electoral/testigo-electoral-overview.webp',
  'manager-clinic': 'assets/project-media/manager-clinic/manager-clinic-overview.webp',
  'manager-plus': 'assets/project-media/manager-plus/manager-plus-overview.webp',
  odontology: 'assets/project-media/odontology/odontology-overview.webp',
  'j3dev-portfolio': 'assets/project-media/j3dev-portfolio/j3dev-portfolio-overview.webp',
};

const PROJECT_COMPACT_LOGO_URLS: Record<string, string> = {
  worker: 'assets/images/logos/projects/worker-compact.svg',
  expensux: 'assets/images/logos/projects/expensux-compact.svg',
  ithelpcenter: 'assets/images/logos/projects/ithelpcenter-compact.svg',
  discovery: 'assets/images/logos/projects/discovery-compact.svg',
  'testigo-electoral': 'assets/images/logos/projects/testigo-electoral-compact.svg',
  'manager-clinic': 'assets/images/logos/projects/manager-clinic-compact.svg',
  'manager-plus': 'assets/images/logos/projects/manager-plus-compact.svg',
  odontology: 'assets/images/logos/projects/odontology-compact.svg',
  'j3dev-portfolio': 'assets/images/logos/projects/j3dev-portfolio-compact.svg',
};

const PROJECT_EXPERIENCE_LOGO_URLS: Record<string, string> = {
  worker: 'assets/project-media/worker/worker-experience.webp',
  expensux: 'assets/project-media/expensux/expensux-experience.webp',
  ithelpcenter: 'assets/project-media/ithelpcenter/ithelpcenter-experience.webp',
  discovery: 'assets/project-media/discovery/discovery-experience.webp',
  'testigo-electoral': 'assets/project-media/testigo-electoral/testigo-electoral-experience.webp',
  'manager-clinic': 'assets/project-media/manager-clinic/manager-clinic-experience.webp',
  'manager-plus': 'assets/project-media/manager-plus/manager-plus-experience.webp',
  odontology: 'assets/project-media/odontology/odontology-experience.webp',
  'j3dev-portfolio': 'assets/project-media/j3dev-portfolio/j3dev-portfolio-experience.webp',
};

const PROJECT_LOGO_URLS: Record<string, string> = {
  'j3dev-portfolio': 'assets/images/logos/projects/j3dev-portfolio-compact.svg',
};

const PROJECTS_EN: Project[] = PROJECT_ITEMS.map((project) => ({
  ...project,
  thumbnailUrl: PROJECT_THUMBNAIL_URLS[project.slug],
  overviewImageUrl: PROJECT_OVERVIEW_IMAGE_URLS[project.slug],
  compactLogoUrl: PROJECT_COMPACT_LOGO_URLS[project.slug],
  experienceLogoUrl: PROJECT_EXPERIENCE_LOGO_URLS[project.slug],
  logoUrl: PROJECT_LOGO_URLS[project.slug],
}));

const projectSpanishText: Record<string, Partial<Project>> = {
  worker: {
    typeStatus: 'Proyecto destacado ⭐ / Software en producción / Sistema interno empresarial',
    shortDescription:
      'Sistema empresarial de flujo de trabajo usado en producción desde 2015, evolucionado durante más de una década desde Access y VB.NET hacia SQL Server, arquitectura .NET moderna y flujos de negocio adaptables.',
    visualLabel: 'Visual del sistema de flujo empresarial',
    ctaLabel: 'Ver detalles del proyecto',
    sourceCodeNote: '',
    confidentialityNote:
      'Este proyecto en producción se describe solo con contexto sanitizado. No se exponen código fuente, flujos propietarios, detalles de clientes ni datos operativos.',
  },
  expensux: {
    typeStatus:
      'Proyecto destacado ⭐ / Producto propio / Aplicación de control financiero / Demo disponible en la web',
    shortDescription:
      'Producto propio de control financiero diseñado desde cero con dirección Clean Architecture, REST APIs, autenticación JWT, acceso a datos con Dapper, flujos SQL Server y frontend Angular mientras se prepara una demo pública.',
    visualLabel: 'Visual de aplicación de control financiero',
    ctaLabel: 'Ver detalles del proyecto',
    sourceCodeNote: '',
    confidentialityNote:
      'Los ejemplos financieros y detalles de implementación se presentan de forma segura. El código fuente permanece privado por ahora mientras se prepara la demo.',
  },
  ithelpcenter: {
    typeStatus:
      'Proyecto destacado ⭐ / Producto empresarial LeverIT / Plataforma Help Desk / En producción',
    shortDescription:
      'Plataforma empresarial de mesa de ayuda apoyada en producción durante años mediante mantenimiento backend y frontend, trabajo con SQL Server, optimización de búsquedas, nuevos flujos de negocio y evolución funcional.',
    visualLabel: 'Visual de plataforma help desk de LeverIT',
    ctaLabel: 'Ver detalles del proyecto',
    sourceCodeNote: 'Producto privado de la empresa LeverIT.',
    confidentialityNote:
      'Este proyecto de LeverIT se representa solo con descripciones generalizadas y seguras para publicación. No se exponen código fuente, información privada de clientes, flujos propietarios, arquitectura interna ni datos operativos sensibles.',
  },
  'testigo-electoral': {
    typeStatus:
      'Proyecto empresarial / Proyecto cliente personalizado / Sistema electoral / Construido desde cero',
    shortDescription:
      'Plataforma personalizada de auditoría electoral desarrollada para un cliente real, permitiendo recopilar, validar y revisar evidencia de mesas de votación mediante una solución centralizada construida con SQL Server, REST APIs y Angular.',
    visualLabel: 'Visual de proyecto cliente personalizado LeverIT',
    ctaLabel: 'Ver detalles del proyecto',
    sourceCodeNote:
      'No hay enlace GitHub, demo privada, código fuente, datos de cliente ni acceso a implementación propietaria para este proyecto cliente de LeverIT.',
    confidentialityNote:
      'Este proyecto de LeverIT se representa solo con descripciones generalizadas y seguras para publicación. No se exponen código fuente, información privada de clientes, flujos propietarios, arquitectura interna ni datos operativos sensibles.',
  },
  discovery: {
    typeStatus:
      'Proyecto empresarial / Plataforma empresarial LeverIT / Gestión de activos TI / Evolución en producción',
    shortDescription:
      'Plataforma empresarial Discovery apoyada mediante evolución en producción, capacidades de inventario continuo, trabajo con SQL Server, funcionalidades ASP.NET, WebSockets y mejoras mantenibles.',
    visualLabel: 'Visual de plataforma Discovery empresarial LeverIT',
    ctaLabel: 'Ver detalles del proyecto',
    sourceCodeNote:
      'No hay enlace GitHub, demo privada, código fuente, datos de cliente ni acceso a implementación propietaria para este proyecto empresarial de LeverIT.',
    confidentialityNote:
      'Este proyecto de LeverIT se representa solo con descripciones generalizadas y seguras para publicación. No se exponen código fuente, información privada de clientes, flujos propietarios, arquitectura interna ni datos operativos sensibles.',
  },
  'j3dev-portfolio': {
    typeStatus: 'Proyecto empresarial / Portafolio público / Showcase profesional / Open Source',
    shortDescription:
      'Portfolio moderno en Angular construido como showcase profesional data-driven, multi-idioma, multi-tema y responsive para presentar especialización Backend .NET y evidencia de portfolio engineering.',
    visualLabel: 'Visual de aplicación portfolio',
    ctaLabel: 'Ver detalles del proyecto',
    sourceCodeNote:
      'El enlace al repositorio público está disponible para revisar la implementación.',
    confidentialityNote:
      'Este portfolio está pensado como showcase público. Usa contenido estático y comportamiento client-side únicamente, sin backend privado ni acceso a base de datos.',
  },
  'manager-plus': {
    typeStatus: 'Proyecto empresarial / ERP empresarial / Producto empresarial / En producción',
    shortDescription:
      'Plataforma comercial de gestión empresarial que cubre facturación, inventario, compras, ventas, cuentas por cobrar, gestión de proveedores y flujos operativos.',
    visualLabel: 'Visual de sistema ERP empresarial de Avances Software',
    ctaLabel: 'Ver detalles del proyecto',
    sourceCodeNote:
      'No hay enlace GitHub, demo privada, código fuente, datos de cliente ni acceso a implementación propietaria para este producto empresarial de Avances Software.',
    confidentialityNote:
      'Esta experiencia de Avances Software se representa solo con descripciones seguras para publicación. No se exponen código fuente, información privada de clientes, flujos propietarios ni datos operativos sensibles.',
  },
  'manager-clinic': {
    typeStatus: 'Proyecto empresarial / Sistema clínico / Producto empresarial / En producción',
    shortDescription:
      'Plataforma de gestión clínica que soporta citas, registros de pacientes, ingresos, autorizaciones, fórmulas, seguimiento de historia médica y agenda de doctores.',
    visualLabel: 'Visual de plataforma clínica de Avances Software',
    ctaLabel: 'Ver detalles del proyecto',
    sourceCodeNote:
      'No hay enlace GitHub, demo privada, código fuente, datos de cliente ni acceso a implementación propietaria para este producto clínico de Avances Software.',
    confidentialityNote:
      'Esta experiencia de Avances Software se representa solo con descripciones seguras para publicación. No se exponen código fuente, información privada de clientes, flujos propietarios ni datos operativos sensibles.',
  },
  odontology: {
    typeStatus:
      'Proyecto empresarial / Sistema odontológico / Producto empresarial / En producción',
    shortDescription:
      'Plataforma de gestión odontológica enfocada en registros clínicos, seguimiento de pacientes, programación de citas y flujos de tratamientos dentales específicos.',
    visualLabel: 'Visual de plataforma odontológica de Avances Software',
    ctaLabel: 'Ver detalles del proyecto',
    sourceCodeNote:
      'No hay enlace GitHub, demo privada, código fuente, datos de cliente ni acceso a implementación propietaria para este producto odontológico de Avances Software.',
    confidentialityNote:
      'Esta experiencia de Avances Software se representa solo con descripciones seguras para publicación. No se exponen código fuente, información privada de clientes, flujos propietarios ni datos operativos sensibles.',
  },
};

const projectTimeBlocksEsById: Record<string, ProjectTimeBlock[]> = {
  worker: [
    {
      label: 'Contexto de inversión profesional',
      duration:
        'Construcción inicial desde septiembre de 2014 hasta salida a producción en noviembre de 2015',
      note: 'Participación en casos de uso, levantamiento de requerimientos, diseño UML, arquitectura, diseño de base de datos, implementación, pruebas y producción.',
    },
    {
      label: 'Evolución de largo plazo',
      duration:
        'Más de un año de construcción inicial seguido por una década de evolución funcional y tecnológica',
      note: 'Modernización progresiva desde Access y VB.NET hacia SQL Server, arquitectura en capas, WPF y tecnologías .NET modernas.',
    },
  ],
  expensux: [
    {
      label: 'Contexto de inversión profesional',
      duration: 'Construcción inicial aproximada: 4 a 6 semanas',
      note: 'Participación en diseño funcional, arquitectura, diseño de base de datos, backend API, frontend Angular y pruebas.',
    },
    {
      label: 'Resumen del proyecto',
      duration: 'Proyecto personal construido desde cero',
      note: 'Demuestra arquitectura moderna .NET, APIs REST, JWT, Dapper, SQL Server y Angular.',
    },
  ],
  ithelpcenter: [
    {
      label: 'Contexto de inversión profesional',
      duration: 'Participación profesional durante más de 10 años',
      note: 'Contribuciones en backend, frontend, SQL Server, optimización de consultas, evolución funcional, nuevos módulos, búsquedas inteligentes y mejoras UX.',
    },
    {
      label: 'Resumen del proyecto',
      duration: 'Trabajo continuo en una plataforma empresarial utilizada en producción real',
      note: 'El alcance se resume sin exponer flujos de clientes, código fuente ni detalles operativos internos.',
    },
  ],
  discovery: [
    {
      label: 'Contexto de inversión profesional',
      duration: 'Participación profesional durante más de 5 años',
      note: 'Contribuciones en SQL Server, ASP.NET, WebSockets, inventario continuo, evolución funcional y soporte de producción.',
    },
    {
      label: 'Resumen del proyecto',
      duration: 'Trabajo continuo en releases empresariales',
      note: 'Apoyó mejoras de inventario y evolución de funcionalidades manteniendo privados los detalles propietarios de implementación.',
    },
  ],
  'testigo-electoral': [
    {
      label: 'Contexto de inversión profesional',
      duration: 'Construcción aproximada: un mes',
      note: 'Participación en Angular, APIs REST, SQL Server, reglas de negocio y validación de información.',
    },
    {
      label: 'Resumen del proyecto',
      duration: 'Proyecto empresarial construido para un cliente real',
      note: 'Entregado alrededor de requerimientos específicos de auditoría electoral protegiendo detalles privados del cliente.',
    },
  ],
  'j3dev-portfolio': [
    {
      label: 'Contexto de inversión profesional',
      duration: 'Proyecto personal activo',
      note: 'Participación en arquitectura data driven, Angular, internacionalización, multi-theme y responsive design.',
    },
    {
      label: 'Resumen del proyecto',
      duration: 'Laboratorio profesional para arquitectura frontend moderna',
      note: 'Demuestra disciplina de ingeniería de portfolio, contexto Full Stack y mantenibilidad en Angular.',
    },
  ],
  'manager-plus': [
    {
      label: 'Contexto de inversión profesional',
      duration:
        'Participación profesional durante aproximadamente un año dentro de Avances Software',
      note: 'Contribuciones en migración FoxPro a SQL Server, normalización de base de datos, corrección de incidencias, nuevas funcionalidades, reportes e integraciones con Excel.',
    },
    {
      label: 'Resumen del proyecto',
      duration: 'Evolución de ERP empresarial utilizado por múltiples organizaciones',
      note: 'El contexto histórico de producción se resume sin exponer código fuente propietario ni datos de clientes.',
    },
  ],
  'manager-clinic': [
    {
      label: 'Contexto de inversión profesional',
      duration:
        'Participación profesional durante aproximadamente un año dentro de Avances Software',
      note: 'Contribuciones en migración FoxPro a SQL Server, optimización de consultas, mantenimiento, mejoras funcionales y soporte de producción.',
    },
    {
      label: 'Resumen del proyecto',
      duration: 'Plataforma clínica para gestión de pacientes, citas e historia médica',
      note: 'El contexto histórico de producción se resume sin exponer código fuente propietario ni datos de clientes.',
    },
  ],
  odontology: [
    {
      label: 'Contexto de inversión profesional',
      duration:
        'Participación profesional durante aproximadamente un año dentro de Avances Software',
      note: 'Contribuciones en migración FoxPro a SQL Server, mantenimiento, optimización, reportería y mejoras funcionales.',
    },
    {
      label: 'Resumen del proyecto',
      duration: 'Plataforma especializada para gestión odontológica',
      note: 'El contexto histórico de producción se resume sin exponer código fuente propietario ni datos de clientes.',
    },
  ],
};

const projectSpanishDetails: Record<
  string,
  Pick<
    Project,
    'context' | 'architectureNotes' | 'links' | 'deploymentEvidence' | 'placeholders' | 'referencePlaceholders'
  >
> = {
  worker: {
    context: [
      'Sistema empresarial real con más de una década de evolución alrededor de necesidades de negocio en producción.',
      'Creado inicialmente como una aplicación monolítica Access + VB.NET usando ADO.NET.',
      'Luego evolucionó para soportar escenarios de múltiples conexiones con Access y SQL Server.',
      'El trabajo de modernización se enfoca en preservar continuidad de negocio mientras mejora arquitectura, diseño de datos, reportes y mantenibilidad.',
      'Adaptado con el tiempo para soportar flujos operativos en múltiples industrias y contextos de negocio.',
      'El código fuente no se expone y no se proporciona enlace de demo.',
    ],
    architectureNotes: [
      'Evolucionó desde una arquitectura legacy orientada a escritorio hacia un enfoque .NET por capas basado en separación de responsabilidades mantenible.',
      'La dirección de modernización incluye C#, .NET 8, límites REST API, formularios WPF, Dapper, procedimientos almacenados en SQL Server, principios SOLID y mejoras de diseño de base de datos.',
      'La migración desde Access hacia SQL Server fortaleció experiencia con diseño de esquema, comportamiento de consultas, necesidades de reportes y modernización legacy incremental.',
      'Los detalles del proyecto se resumen intencionalmente para evitar exponer implementación propietaria o reglas de negocio.',
    ],
    links: [
      {
        label:
          'Empresa que utiliza el producto para la administración, facturación y gestión de sus servicios.',
        type: 'Reference',
        typeLabel: 'PASO TV',
        actionLabel: 'Abrir Referencia',
        url: 'https://www.pasotelevision.net/',
        isExternal: true,
      },
      {
        label: 'Video del Producto',
        type: 'Video',
        typeLabel: 'VIDEO DEL PRODUCTO',
        videoSrc: 'assets/project-media/worker/worker-product-demo.mp4',
        isExternal: false,
        isPlaceholder: true,
        placeholderMessage: '',
      },
    ],
    placeholders: {
      companyName: 'Paso Television',
      companyAddress: 'Carrera 15 # 18-21, Socorro, Santander, Colombia',
      companyPhone: '+57 318 5176823',
      officialWebsiteUrl: 'https://www.pasotelevision.net/',
      videoUrl: '',
    },
    referencePlaceholders: {
      companyName: 'Paso Television',
      companyAddress: 'Carrera 15 # 18-21, Socorro, Santander, Colombia',
      companyPhone: '+57 318 5176823',
    },
  },
  expensux: {
    context: [
      'Iniciativa de producto propio diseñada desde cero para organizar flujos financieros prácticos.',
      'Proyecto con enfoque backend que demuestra pensamiento de producto, límites API, autenticación y decisiones de modelado de datos.',
    ],
    architectureNotes: [
      'Usa dirección Clean Architecture y conceptos de API .NET por capas con acceso a datos en SQL Server y frontend Angular.',
      'Diseñada alrededor de perfiles, cuentas, deudas, pagos, categorías, movimientos, autenticación JWT, responsabilidades REST API y acceso a datos basado en Dapper.',
    ],
    deploymentEvidence: {
      eyebrow: 'Evidencia de despliegue',
      title: 'Infraestructura de despliegue',
      description:
        'Expensux fue desplegado como una aplicación fullstack desacoplada. El frontend Angular se publica mediante Cloudflare Pages, la API ASP.NET Core 8 se ejecuta en Azure App Service y la base de datos utiliza Azure SQL Database. Esta implementación demuestra publicación web, configuración de CORS, consumo HTTPS, despliegue de API y conexión segura a base de datos cloud.',
      nodes: [
        {
          title: 'Frontend',
          details: [
            { label: 'Servicio', value: 'Cloudflare Pages' },
            { label: 'Aplicación', value: 'Angular' },
            {
              label: 'URL pública',
              value: 'https://expensux.pages.dev',
              url: 'https://expensux.pages.dev',
            },
          ],
          diagramTitle: 'Cloudflare Pages',
          diagramSubtitle: 'Frontend Angular',
          connectorLabel: 'HTTPS REST',
        },
        {
          title: 'Backend API',
          details: [
            { label: 'Servicio', value: 'Azure App Service' },
            { label: 'Aplicación', value: 'ASP.NET Core 8 Web API' },
            {
              label: 'Documentación REST',
              value:
                'https://api-expensux-demo-dwc2fccychb8ahbw.brazilsouth-01.azurewebsites.net/swagger/index.html',
              url: 'https://api-expensux-demo-dwc2fccychb8ahbw.brazilsouth-01.azurewebsites.net/swagger/index.html',
            },
          ],
          diagramTitle: 'Azure App Service',
          diagramSubtitle: 'ASP.NET Core 8 API',
          connectorLabel: 'Dapper / SQL Connection',
        },
        {
          title: 'Base de datos',
          details: [
            { label: 'Servicio', value: 'Azure SQL Database' },
            { label: 'Motor', value: 'SQL Server' },
            { label: 'Acceso', value: 'conexión segura desde la API desplegada' },
          ],
          diagramTitle: 'Azure SQL Database',
          diagramSubtitle: 'SQL Server',
        },
      ],
      actions: [
        {
          label: 'API',
          type: 'Reference',
          actionLabel: 'Ver documentación API',
          url: 'https://api-expensux-demo-dwc2fccychb8ahbw.brazilsouth-01.azurewebsites.net/swagger/index.html',
          isExternal: true,
        },
      ],
    },
    links: [
      {
        label: 'Demo del Producto',
        type: 'Demo',
        typeLabel: 'DEMO DEL PRODUCTO',
        actionLabel: 'Abrir Demo del Producto',
        url: 'https://expensux.pages.dev',
        isExternal: true,
      },
      {
        label: 'Video del Producto',
        type: 'Video',
        typeLabel: 'VIDEO DEL PRODUCTO',
        videoSrc: 'assets/project-media/expensux/expensux-product-demo.mp4',
        isExternal: false,
        isPlaceholder: true,
        placeholderMessage: '',
      },
    ],
    placeholders: { demoUrl: 'https://expensux.pages.dev' },
    referencePlaceholders: undefined as never,
  },
  ithelpcenter: {
    context: [
      'Proyecto empresarial profesional trabajado durante la experiencia de Jorge en LeverIT.',
      'Las contribuciones se describen sin exponer código fuente, demos privadas, nombres de clientes ni detalles propietarios de implementación.',
      'El trabajo incluyó años de mantenimiento en producción, mejoras backend y frontend, soporte a nuevos flujos, optimización de búsqueda y evolución funcional.',
      'Se incluye referencia oficial del producto LeverIT para contexto público; no se proporciona acceso privado a la implementación.',
    ],
    architectureNotes: [
      'Apoyó patrones de navegación tipo SPA sobre un índice principal único en términos generales, preservando la confidencialidad de la implementación interna.',
      'Mejoró patrones reutilizables de clases JavaScript y convenciones de equipo para facilitar el mantenimiento del comportamiento frontend.',
      'Usó SQL Server y trabajo de implementación backend/frontend para soportar nuevos flujos de negocio y necesidades de producción de largo plazo.',
      'Contribuyó a mejoras de experiencia de búsqueda y posteriormente a conceptos de descubrimiento de categorías / guía de usuario asistidos por IA a alto nivel.',
      'Equilibró necesidades de flujo de negocio con prácticas de software mantenible en un sistema empresarial de larga duración.',
    ],
    links: [
      {
        label: 'Empresa propietaria del producto',
        description:
          'Producto empresarial utilizado durante años dentro del ecosistema de soluciones de LeverIT.',
        type: 'Reference',
        typeLabel: 'LEVERIT',
        actionLabel: 'Abrir Referencia',
        url: 'https://www.leverit.us/ithc-mesa-de-ayuda',
        isExternal: true,
      },
      {
        label: 'Video Público del Producto',
        type: 'Video',
        typeLabel: 'VIDEO DEL PRODUCTO',
        embedUrl: 'https://www.youtube.com/embed/z7OTZIXesco',
        supportText: 'Fuente oficial publicada por LeverIT.',
        isExternal: true,
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'https://www.leverit.us/ithc-mesa-de-ayuda',
      logoLabel: '',
    },
    referencePlaceholders: undefined as never,
  },
  'testigo-electoral': {
    context: [
      'Proyecto personalizado de cliente trabajado durante la experiencia de Jorge en LeverIT.',
      'Construido colaborativamente desde cero con dos compañeros usando SQL Server, REST APIs y Angular para la capa de presentación.',
      'Soportó captura de evidencia electoral, validación de información, reglas de negocio específicas y flujos centralizados de revisión a un nivel seguro para publicación.',
      'No se exponen código fuente, demo privada, nombres de clientes, direcciones reales ni detalles confidenciales de implementación.',
    ],
    architectureNotes: [
      'Colaboró en una entrega empresarial construida desde cero con separación clara entre responsabilidades de base de datos, API y frontend.',
      'Usó conceptos de SQL Server y REST API para soportar comunicación backend estructurada, reglas de validación y flujos de evidencia electoral sin exponer esquemas privados ni reglas de negocio.',
      'Usó Angular y TypeScript para implementación frontend manteniendo confidenciales los detalles UI específicos del cliente.',
      'Demuestra experiencia Angular empresarial real, colaboración de equipo, entrega práctica e integración backend/frontend mantenible.',
    ],
    links: [
      {
        label: 'Referencia de empresa LeverIT',
        type: 'Reference',
        typeLabel: 'REFERENCIA',
        actionLabel: 'Abrir Referencia',
        url: 'https://www.leverit.us/',
        isExternal: true,
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'https://www.leverit.us/',
      logoLabel: '',
    },
    referencePlaceholders: undefined as never,
  },
  discovery: {
    context: [
      'Plataforma empresarial profesional trabajada durante la experiencia de Jorge en LeverIT.',
      'Apoyó evolución en producción, capacidades de inventario continuo, trabajo con SQL Server, funcionalidades ASP.NET y capacidades relacionadas con WebSocket.',
      'Las contribuciones incluyeron soporte y mejoras incrementales, no únicamente mantenimiento aislado.',
      'Se incluye referencia oficial del producto LeverIT para contexto público; no se expone demo privada ni código fuente.',
    ],
    architectureNotes: [
      'Contribuyó a mejoras de plataforma empresarial orientada a producción dentro de una base de código existente.',
      'Trabajó con SQL Server y áreas funcionales ASP.NET manteniendo los detalles técnicos generalizados por confidencialidad.',
      'Apoyó funcionalidad relacionada con WebSocket de forma segura para publicación, sin exponer flujos internos de mensajería ni comportamiento específico de clientes.',
      'Aplicó hábitos prácticos de mantenibilidad y resolución de problemas dentro de restricciones empresariales establecidas.',
    ],
    links: [
      {
        label: 'Referencia oficial de Discovery',
        type: 'Reference',
        typeLabel: 'REFERENCIA',
        actionLabel: 'Abrir Referencia',
        url: 'https://www.leverit.us/solucion-discovery',
        isExternal: true,
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'https://www.leverit.us/solucion-discovery',
      logoLabel: '',
    },
    referencePlaceholders: undefined as never,
  },
  'j3dev-portfolio': {
    context: [
      'Presenta especialización Backend .NET, capacidad fullstack de apoyo, evolución técnica y navegación orientada a reclutadores.',
      'Portfolio público y showcase open source para presentación profesional.',
      'Usa estructuras de contenido data-driven, copy multi-idioma, experiencia multi-tema y layouts responsive sin backend, API ni lógica de base de datos.',
    ],
    architectureNotes: [
      'Construido como aplicación Angular moderna estática con fuentes de datos tipadas y estructuras de página reutilizables.',
      'Las funciones de tema y vista previa de viewport son mejoras client-side que preservan navegación estándar y acceso al contenido.',
      'Los detalles del proyecto pueden evolucionar incrementalmente sin introducir backend, API ni lógica de base de datos.',
    ],
    links: [
      {
        label: 'Repositorio de GitHub',
        type: 'GitHub',
        url: 'https://github.com/jorgejaimes085GH/J3dev-portfolio/',
        isExternal: true,
      },
    ],
    placeholders: { githubUrl: 'https://github.com/jorgejaimes085GH/J3dev-portfolio/' },
    referencePlaceholders: undefined as never,
  },
  'manager-plus': {
    context: [
      'Experiencia empresarial anterior en producto de Avances Software.',
      'Representa exposición histórica en producción a flujos comerciales ERP y de gestión empresarial.',
      'Cubrió facturación, inventario, compras, ventas, cuentas por cobrar, gestión de proveedores y flujos operativos.',
      'Se incluye referencia oficial de Avances Software mientras el código fuente privado y los detalles de implementación permanecen protegidos.',
    ],
    architectureNotes: [
      'Apoyó actividades de migración de FoxPro a SQL Server y adopción de SQL Server.',
      'Trabajó en normalización de base de datos, diseño de base de datos, optimización de consultas, corrección de bugs, mejoras funcionales y flujos de reportes.',
      'Apoyó procesos de importación/exportación de Excel y continuidad operativa durante trabajo de modernización legacy.',
      'La experiencia se posiciona como evidencia histórica de sistemas empresariales y no compite visualmente con proyectos destacados Tier 1.',
    ],
    links: [
      {
        label: 'Referencia oficial de Manager Plus',
        type: 'Reference',
        typeLabel: 'REFERENCIA',
        actionLabel: 'Abrir Referencia',
        url: 'https://avances.com.co/software-contable-y-facturacion.php',
        isExternal: true,
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'https://avances.com.co/software-contable-y-facturacion.php',
      logoLabel: '',
    },
    referencePlaceholders: undefined as never,
  },
  'manager-clinic': {
    context: [
      'Experiencia empresarial anterior en producto de Avances Software.',
      'Representa exposición histórica en producción a flujos de gestión clínica.',
      'Soportó citas, registros de pacientes, ingresos, autorizaciones, fórmulas, seguimiento de historia médica y agenda de doctores.',
      'Se incluye referencia oficial de Avances Software mientras el código fuente privado y los detalles de implementación permanecen protegidos.',
    ],
    architectureNotes: [
      'Apoyó migración de base de datos y adopción de SQL Server para un producto de gestión clínica.',
      'Trabajó en mejoras de consultas, normalización de datos, mejoras funcionales, mantenimiento en producción y corrección de bugs.',
      'Aplicó experiencia de diseño de base de datos y reporting en un contexto de flujos clínicos.',
      'La experiencia se posiciona como evidencia histórica de sistemas empresariales y no compite visualmente con proyectos destacados Tier 1.',
    ],
    links: [
      {
        label: 'Referencia oficial de Manager Clinic',
        type: 'Reference',
        typeLabel: 'REFERENCIA',
        actionLabel: 'Abrir Referencia',
        url: 'https://avances.com.co/software-clinico-para-ips.php',
        isExternal: true,
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'https://avances.com.co/software-clinico-para-ips.php',
      logoLabel: '',
    },
    referencePlaceholders: undefined as never,
  },
  odontology: {
    context: [
      'Experiencia empresarial anterior en producto de Avances Software.',
      'Representa exposición histórica en producción a flujos odontológicos y gestión de pacientes.',
      'Enfocado en registros clínicos, seguimiento de pacientes, programación de citas y flujos de tratamientos dentales específicos.',
      'Se incluye referencia oficial de Avances Software mientras el código fuente privado y los detalles de implementación permanecen protegidos.',
    ],
    architectureNotes: [
      'Apoyó migración de base de datos y trabajo con SQL Server para un producto de gestión odontológica.',
      'Trabajó en mantenimiento funcional, optimización de consultas, reporting y soporte en producción.',
      'Aplicó diseño de base de datos y prácticas de modernización legacy en un contexto especializado de flujos de salud.',
      'La experiencia se posiciona como evidencia histórica de sistemas empresariales y no compite visualmente con proyectos destacados Tier 1.',
    ],
    links: [
      {
        label: 'Referencia oficial de productos Avances',
        type: 'Reference',
        typeLabel: 'REFERENCIA',
        actionLabel: 'Abrir Referencia',
        url: 'https://avances.com.co/software-odontologico.php',
        isExternal: true,
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'https://avances.com.co/software-odontologico.php',
      logoLabel: '',
    },
    referencePlaceholders: undefined as never,
  },
};

const getSpanishTimeBlocks = (projectId: string): ProjectTimeBlock[] =>
  projectTimeBlocksEsById[projectId];

const PROJECTS_ES: Project[] = PROJECTS_EN.map((project) => ({
  ...project,
  ...projectSpanishText[project.id],
  ...projectSpanishDetails[project.id],
  timeBlocks: getSpanishTimeBlocks(project.id),
}));

export const PROJECTS = {
  en: PROJECTS_EN,
  es: PROJECTS_ES,
} as const;
