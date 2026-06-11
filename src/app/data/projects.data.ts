import { Project, ProjectTimeBlock } from '../models/project.model';

const ESTIMATED_TIME_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Database architecture',
    duration: 'Estimated planning range: 2-4 weeks',
    note: 'Data modeling and storage decisions are summarized without exposing private schema details.',
  },
  {
    label: 'API implementation',
    duration: 'Estimated implementation range: 3-6 weeks',
    note: 'Backend implementation scope is described at a high level only.',
  },
  { label: 'Swagger/API testing', duration: 'Estimated review range: 1-2 weeks' },
  { label: 'Frontend implementation', duration: 'Estimated implementation range: 4-8 weeks' },
  { label: 'Frontend testing', duration: 'Estimated validation range: 1-3 weeks' },
  {
    label: 'Documentation / review',
    duration: 'Estimated review range: 1-2 weeks',
    note: 'Review time includes notes for maintainability and future handoff.',
  },
];

const LEVERIT_ESTIMATED_TIME_BLOCKS: ProjectTimeBlock[] = [
  {
    label: 'Production maintenance and support',
    duration: 'Multi-year professional involvement',
    note: 'Scope is summarized without exposing client workflows, source code, or internal operational details.',
  },
  {
    label: 'Feature improvements',
    duration: 'Iterative enterprise release work',
    note: 'Enhancements are described by capability area rather than proprietary implementation details.',
  },
  {
    label: 'Database and backend work',
    duration: 'Ongoing enterprise delivery cycles',
    note: 'SQL Server, API, and server-side responsibilities are represented at a public-safe level.',
  },
  {
    label: 'Frontend and user experience work',
    duration: 'Incremental improvement work',
    note: 'UI behavior, search, and workflow updates are generalized for confidentiality.',
  },
  {
    label: 'Team coordination and conventions',
    duration: 'Recurring team collaboration',
    note: 'Includes alignment with team practices, maintainability expectations, and handoff-friendly changes.',
  },
];

const PROJECT_ITEMS: Project[] = [
  {
    id: 'worker',
    slug: 'worker',
    title: 'Worker',
    typeStatus: 'Production software / Enterprise internal system',
    shortDescription:
      'Business workflow and operational management system evolved from legacy desktop architecture into a modern .NET-based solution.',
    visualLabel: 'Enterprise workflow system visual reference pending final asset',
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
    timeBlocks: ESTIMATED_TIME_BLOCKS,
    links: [
      {
        label: 'Video availability note',
        type: 'Video',
        isExternal: false,
        isPlaceholder: true,
        placeholderMessage:
          'A safe overview video may be published in a future update without exposing source code.',
      },
      {
        label: 'Company reference pending approval',
        type: 'Reference',
        isExternal: false,
        isPlaceholder: true,
        placeholderMessage:
          'Real company reference details will be published only after approval for public use.',
      },
    ],
    placeholders: {
      companyName: 'Company name pending approval',
      companyAddress: 'Company address pending approval',
      companyPhone: 'Company phone pending approval',
      videoUrl: 'Video URL pending publication',
    },
    referencePlaceholders: {
      companyName: 'Company name pending approval',
      companyAddress: 'Address pending approval',
      companyPhone: 'Phone pending approval',
      availabilityNote: 'Real company details will be published only after review and approval.',
    },
    sourceCodeNote: 'Private production source code is not publicly available.',
    confidentialityNote:
      'This production project is described with sanitized context only. Source code, proprietary workflows, customer details, and operational data are not exposed.',
  },
  {
    id: 'expensux',
    slug: 'expensux',
    title: 'Expensux',
    typeStatus: 'Backend API demo / Financial control application',
    shortDescription:
      'Financial control application centered on a .NET API, SQL Server workflows, JWT authentication, Dapper data access, and an Angular interface as the supporting presentation layer.',
    visualLabel: 'Financial control application visual reference pending final asset',
    context: [
      'Backend-oriented financial control application for organizing practical financial workflows.',
      'Public demo link is pending publication.',
      'Source code remains private for now.',
    ],
    architectureNotes: [
      'Uses layered .NET API concepts with SQL Server data access and an Angular frontend to organize financial control workflows.',
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
    timeBlocks: ESTIMATED_TIME_BLOCKS,
    links: [
      {
        label: 'Demo availability note',
        type: 'Demo',
        isExternal: true,
        isPlaceholder: true,
        placeholderMessage: 'Public demo link will be published when the demo is ready for review.',
      },
    ],
    placeholders: {
      demoUrl: 'Demo URL pending publication',
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
    visualLabel: 'LeverIT help desk platform visual reference pending approved asset',
    context: [
      'Professional enterprise project worked on during Jorge’s LeverIT experience.',
      'Contributions are described without exposing source code, private demos, client names, or proprietary implementation details.',
      'Work included maintenance, improvements, new workflow support, search experience enhancements, and frontend/backend feature development.',
      'Official LeverIT website and logo references will be added after approved public assets are finalized.',
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
    timeBlocks: LEVERIT_ESTIMATED_TIME_BLOCKS,
    links: [
      {
        label: 'Official LeverIT website reference pending approval',
        type: 'Reference',
        isExternal: true,
        isPlaceholder: true,
        placeholderMessage:
          'Official LeverIT website reference pending approval. No private demo, GitHub repository, or proprietary project access is provided.',
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'Official LeverIT website URL pending approval',
      logoLabel: 'LeverIT logo pending approved public asset',
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
    visualLabel: 'LeverIT enterprise maintenance project visual reference pending approved asset',
    context: [
      'Professional enterprise project worked on during Jorge’s LeverIT experience.',
      'Supported maintenance, improvements, SQL Server work, ASP.NET features, and WebSocket-related functionality.',
      'Descriptions remain general and non-confidential, with no private demo or source code exposure.',
      'Official LeverIT website and logo references will be added after approved public assets are finalized.',
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
    timeBlocks: LEVERIT_ESTIMATED_TIME_BLOCKS,
    links: [
      {
        label: 'Official LeverIT website reference pending approval',
        type: 'Reference',
        isExternal: true,
        isPlaceholder: true,
        placeholderMessage:
          'Official LeverIT website reference pending approval. No private demo, GitHub repository, or proprietary project access is provided.',
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'Official LeverIT website URL pending approval',
      logoLabel: 'LeverIT logo pending approved public asset',
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
      'Custom client project developed collaboratively from scratch using SQL Server, REST APIs, and Angular as a supporting UI layer.',
    visualLabel: 'LeverIT custom client project visual reference pending approved asset',
    context: [
      'Professional custom client project worked on during Jorge’s LeverIT experience.',
      'Built collaboratively from scratch with two teammates using SQL Server, REST APIs, and Angular for the presentation layer.',
      'No source code, private demo, client names, real addresses, or confidential implementation details are exposed.',
      'Official LeverIT website and logo references will be added after approved public assets are finalized.',
    ],
    architectureNotes: [
      'Collaborated on a from-scratch enterprise delivery effort with clear separation between database, API, and frontend responsibilities.',
      'Used SQL Server and REST API concepts to support structured backend communication without exposing private schema or business rules.',
      'Used Angular and TypeScript for frontend implementation while keeping client-specific UI details confidential.',
      'Demonstrates team collaboration, practical delivery, and maintainable backend/frontend integration in an enterprise context.',
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
    timeBlocks: LEVERIT_ESTIMATED_TIME_BLOCKS,
    links: [
      {
        label: 'Official LeverIT website reference pending approval',
        type: 'Reference',
        isExternal: true,
        isPlaceholder: true,
        placeholderMessage:
          'Official LeverIT website reference pending approval. No private demo, GitHub repository, or proprietary project access is provided.',
      },
    ],
    placeholders: {
      officialWebsiteUrl: 'Official LeverIT website URL pending approval',
      logoLabel: 'LeverIT logo pending approved public asset',
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
      'Professional Angular portfolio built to present Backend .NET specialization, supporting fullstack capability, project evidence, technical evolution, and recruiter-focused navigation.',
    visualLabel: 'Portfolio application visual reference pending final asset',
    context: [
      'Presents Backend .NET specialization, supporting fullstack capability, technical evolution, and recruiter-focused navigation.',
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
    timeBlocks: ESTIMATED_TIME_BLOCKS,
    links: [
      {
        label: 'GitHub repository availability note',
        type: 'GitHub',
        isExternal: true,
        isPlaceholder: true,
        placeholderMessage:
          'GitHub repository link will be updated when the final public URL is available.',
      },
    ],
    placeholders: {
      githubUrl: 'GitHub URL pending publication',
    },
    sourceCodeNote: 'Public repository link can be updated when the final URL is available.',
    confidentialityNote:
      'This portfolio is intended as a public showcase. Repository availability details will be updated with the correct public link when finalized.',
  },
];

const PROJECTS_EN: Project[] = PROJECT_ITEMS.map((project) => ({
  ...project,
  overviewImageUrl: `assets/project-media/${project.slug}/${project.slug}-overview.webp`,
  thumbnailUrl: `assets/project-media/${project.slug}/${project.slug}-thumbnail.webp`,
  logoUrl: `assets/images/logos/projects/${project.slug}-logo.svg`,
}));

const projectSpanishText: Record<string, Partial<Project>> = {
  worker: {
    typeStatus: 'Software en producción / Sistema interno empresarial',
    shortDescription:
      'Sistema de flujo de trabajo y gestión operativa de negocio que evolucionó desde arquitectura desktop legacy hacia una solución moderna basada en .NET.',
    visualLabel: 'Referencia visual de sistema de flujo empresarial pendiente de arte final',
    sourceCodeNote: 'El código fuente privado de producción no está disponible públicamente.',
    confidentialityNote:
      'Este proyecto en producción se describe solo con contexto sanitizado. No se exponen código fuente, flujos propietarios, detalles de clientes ni datos operativos.',
  },
  expensux: {
    typeStatus: 'Demo Backend API / Aplicación de control financiero',
    shortDescription:
      'Aplicación de control financiero centrada en una API .NET, flujos con SQL Server, autenticación JWT, acceso a datos con Dapper y una interfaz Angular como capa de presentación de apoyo.',
    visualLabel: 'Referencia visual de aplicación de control financiero pendiente de arte final',
    sourceCodeNote: 'El código fuente es privado mientras se prepara la demo.',
    confidentialityNote:
      'Los ejemplos financieros y detalles de implementación se presentan de forma segura. El código fuente permanece privado por ahora mientras se prepara la demo.',
  },
  ithelpcenter: {
    typeStatus: 'Proyecto empresarial LeverIT / Plataforma help desk',
    shortDescription:
      'Plataforma empresarial de mesa de ayuda evolucionada durante años mediante mantenimiento, mejoras, nuevos flujos, mejoras de búsqueda y desarrollo frontend/backend.',
    visualLabel:
      'Referencia visual de plataforma help desk de LeverIT pendiente de activo aprobado',
    sourceCodeNote:
      'No hay enlace GitHub, demo privada, código fuente, datos de cliente ni acceso a implementación propietaria para este proyecto empresarial de LeverIT.',
    confidentialityNote:
      'Este proyecto de LeverIT se representa solo con descripciones generalizadas y seguras para publicación. No se exponen código fuente, información privada de clientes, flujos propietarios, arquitectura interna ni datos operativos sensibles.',
  },
  discovery: {
    typeStatus: 'Proyecto empresarial LeverIT / Mantenimiento y mejoras',
    shortDescription:
      'Proyecto empresarial apoyado mediante mantenimiento, mejoras, trabajo con SQL Server, funcionalidades ASP.NET y capacidades relacionadas con WebSocket.',
    visualLabel:
      'Referencia visual de proyecto empresarial de mantenimiento LeverIT pendiente de activo aprobado',
    sourceCodeNote:
      'No hay enlace GitHub, demo privada, código fuente, datos de cliente ni acceso a implementación propietaria para este proyecto empresarial de LeverIT.',
    confidentialityNote:
      'Este proyecto de LeverIT se representa solo con descripciones generalizadas y seguras para publicación. No se exponen código fuente, información privada de clientes, flujos propietarios, arquitectura interna ni datos operativos sensibles.',
  },
  'testigo-electoral': {
    typeStatus: 'Proyecto cliente personalizado LeverIT / Construido desde cero',
    shortDescription:
      'Proyecto cliente personalizado desarrollado colaborativamente desde cero usando SQL Server, REST APIs y Angular como capa UI de apoyo.',
    visualLabel:
      'Referencia visual de proyecto cliente personalizado LeverIT pendiente de activo aprobado',
    sourceCodeNote:
      'No hay enlace GitHub, demo privada, código fuente, datos de cliente ni acceso a implementación propietaria para este proyecto cliente de LeverIT.',
    confidentialityNote:
      'Este proyecto de LeverIT se representa solo con descripciones generalizadas y seguras para publicación. No se exponen código fuente, información privada de clientes, flujos propietarios, arquitectura interna ni datos operativos sensibles.',
  },
  'j3dev-portfolio': {
    typeStatus: 'Portfolio público / Showcase open source',
    shortDescription:
      'Portfolio profesional en Angular construido para presentar especialización Backend .NET, capacidad fullstack de apoyo, evidencia de proyectos, evolución técnica y navegación orientada a reclutadores.',
    visualLabel: 'Referencia visual de aplicación portfolio pendiente de arte final',
    sourceCodeNote:
      'El enlace al repositorio público puede actualizarse cuando la URL final esté disponible.',
    confidentialityNote:
      'Este portfolio está pensado como showcase público. Los detalles de disponibilidad del repositorio se actualizarán con el enlace público correcto cuando esté finalizado.',
  },
};

const projectTimeBlocksEs: ProjectTimeBlock[] = [
  {
    label: 'Arquitectura de base de datos',
    duration: 'Rango estimado de planeación: 2-4 semanas',
    note: 'Las decisiones de modelado y almacenamiento se resumen sin exponer detalles privados de esquema.',
  },
  {
    label: 'Implementación de API',
    duration: 'Rango estimado de implementación: 3-6 semanas',
    note: 'El alcance de implementación backend se describe solo a alto nivel.',
  },
  { label: 'Swagger / pruebas de API', duration: 'Rango estimado de revisión: 1-2 semanas' },
  { label: 'Implementación frontend', duration: 'Rango estimado de implementación: 4-8 semanas' },
  { label: 'Pruebas frontend', duration: 'Rango estimado de validación: 1-3 semanas' },
  {
    label: 'Documentación / revisión',
    duration: 'Rango estimado de revisión: 1-2 semanas',
    note: 'La revisión incluye notas de mantenibilidad y transferencia futura.',
  },
];

const PROJECTS_ES: Project[] = PROJECTS_EN.map((project) => ({
  ...project,
  ...projectSpanishText[project.id],
  context: project.context.map((item) =>
    item
      .replace('Initially created as', 'Creado inicialmente como')
      .replace('Later evolved to support', 'Luego evolucionó para soportar')
      .replace('Used in production since 2015.', 'Usado en producción desde 2015.')
      .replace(
        'Source code is not exposed and no demo link is provided.',
        'El código fuente no se expone y no se proporciona enlace de demo.',
      )
      .replace('Private source code is not public.', 'El código fuente privado no es público.')
      .replace(
        'Public information is limited to capability-level descriptions.',
        'La información pública se limita a descripciones por capacidad.',
      ),
  ),
  architectureNotes: project.architectureNotes.map((note) =>
    note
      .replace(
        'Project details are intentionally summarized',
        'Los detalles del proyecto se resumen intencionalmente',
      )
      .replace(
        'Source code, demos, and proprietary details remain private.',
        'El código fuente, las demos y los detalles propietarios permanecen privados.',
      )
      .replace(
        'Architecture details are generalized',
        'Los detalles de arquitectura se generalizan',
      ),
  ),
  timeBlocks:
    project.timeBlocks === ESTIMATED_TIME_BLOCKS ? projectTimeBlocksEs : project.timeBlocks,
}));

export const PROJECTS = {
  en: PROJECTS_EN,
  es: PROJECTS_ES,
} as const;
