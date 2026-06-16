import {
  JourneyCtaLink,
  JourneyEvolutionPhase,
  JourneyInsight,
  JourneyStage,
} from '../models/journey.model';

const JOURNEY_STAGES_EN: JourneyStage[] = [
  {
    id: 'self-taught-discovery',
    yearLabel: '2008',
    title: 'Self-taught discovery',
    periodLabel: 'Before university studies',
    summary:
      'Before starting university studies, Jorge began exploring software creation from home using Windows XP, Access, Visual Basic 6, books, and printed material gathered from internet cafés to practice algorithms and small applications.',
    focusAreas: ['DFD', 'Flow diagrams', 'VB6', 'Access', 'Algorithms'],
    keyLearning:
      'Before learning frameworks, he started by learning logic, databases, and problem solving.',
  },
  {
    id: 'academic-foundations',
    yearLabel: '2010',
    title: 'Academic foundations and engineering fundamentals',
    periodLabel: 'Formal foundations stage',
    summary:
      'With the start of university studies, the learning path expanded into analysis, modeling, relational databases, basic web development, and formal software construction foundations.',
    focusAreas: ['UML', 'MySQL', 'PHP', 'HTML', 'CSS', 'Relational databases'],
    keyLearning:
      'Understanding that software should be analyzed and modeled before implementation.',
  },
  {
    id: 'first-enterprise-software-experience',
    yearLabel: '2012',
    title: 'First enterprise software experience',
    periodLabel: 'Real business users stage',
    summary:
      'The first professional experience moved learning into real users, business processes, SQL Server, VB.NET Framework 3.5, Crystal Reports, DataReader, DataTable, UML, and database normalization.',
    focusAreas: [
      'SQL Server',
      'VB.NET',
      '.NET Framework 3.5',
      'Crystal Reports',
      'DataReader',
      'DataTable',
      'UML',
      'Normalization',
    ],
    keyLearning:
      'Software exists to support real business operations, not only to execute code correctly.',
    evidenceNote:
      'This stage is intentionally described without exposing product names, internal implementation details, or private operational context.',
  },
  {
    id: 'complex-enterprise-systems',
    yearLabel: '2013',
    title: 'Complex enterprise systems',
    periodLabel: 'Production adaptation stage',
    summary:
      'At this stage Jorge worked with commercial products in FoxPro and SQL Server, including clinical, dental, and ERP systems. Although FoxPro does not represent his current stack, this experience strengthened business analysis, data migration, normalization, reporting, bug fixing, and fast adaptation to unfamiliar technologies.',
    focusAreas: [
      'FoxPro',
      'SQL Server',
      'ERP',
      'Clinical systems',
      'Dental systems',
      'Data migration',
      'Reporting',
    ],
    keyLearning:
      'Quickly adapting to unfamiliar technologies while maintaining enterprise products in production.',
    evidenceNote:
      'The FoxPro context is included as learning history only; Jorge learned the basics in about a week to begin productive maintenance without presenting it as his current stack.',
  },
  {
    id: 'building-a-product-from-scratch',
    yearLabel: '2014–2015',
    title: 'Building a product from scratch',
    periodLabel: 'Independent product stage',
    summary:
      'Freelance work gave rise to Worker, an enterprise system built from requirements, use cases, UML design, architecture, database design, coding, testing, and production release. The project started in September 2014 and entered production in November 2015.',
    focusAreas: [
      'Worker',
      'UML',
      'SQL Server',
      'VB.NET',
      'Access',
      'Reporting',
      'Excel export',
      'Production',
    ],
    keyLearning:
      'Building complete software requires understanding the business, designing carefully, and supporting evolution after the first delivery.',
    relatedProjectSlugs: ['worker'],
    evidenceNote:
      'Worker is referenced as public-safe portfolio evidence while proprietary source code and operational details remain private.',
  },
  {
    id: 'remote-engineering-enterprise-software',
    yearLabel: '2016',
    title: 'Remote engineering and enterprise software',
    periodLabel: 'Long-lived software stage',
    summary:
      'Joining LeverIT enabled remote work on long-lived enterprise software involving maintenance, improvements, SQL Server, ASP.NET, JavaScript, HTML, CSS, team conventions, and functional evolution.',
    focusAreas: [
      'ItHelpCenter',
      'Discovery',
      'SQL Server',
      'ASP.NET',
      'JavaScript',
      'HTML',
      'CSS',
      'Remote work',
      'Team conventions',
    ],
    keyLearning:
      'Working on enterprise software requires continuity, communication, conventions, and sustainable decisions.',
    evidenceNote:
      'Project names are used as high-level context only; implementation and organizational details are intentionally not disclosed.',
  },
  {
    id: 'api-first-architecture',
    yearLabel: '2020',
    title: 'API-first architecture',
    periodLabel: 'Service boundaries stage',
    summary:
      'Backend evolution moved toward REST APIs, clearer frontend/backend separation, authentication, SQL Server, and modern data access. This stage marked the shift from more monolithic approaches toward more maintainable services.',
    focusAreas: [
      'REST APIs',
      'JWT',
      'SQL Server',
      'Dapper',
      'Backend architecture',
      'Service boundaries',
    ],
    keyLearning:
      'Separating responsibilities improves maintainability, integration, and software evolution.',
    relatedProjectSlugs: ['expensux'],
  },
  {
    id: 'angular-modern-fullstack-integration',
    yearLabel: '2023',
    title: 'Angular and modern fullstack integration',
    periodLabel: 'Frontend integration stage',
    summary:
      'Through Testigo Electoral and modern practice projects, Jorge strengthened Angular and TypeScript as a complement to his Backend .NET focus, connecting interfaces with REST APIs, SQL Server, and client-specific business rules.',
    focusAreas: [
      'Angular',
      'TypeScript',
      'REST APIs',
      'SQL Server',
      'Testigo Electoral',
      'Expensux',
      'J3dev Portfolio',
    ],
    keyLearning:
      'Modern frontend work becomes more valuable when connected to clear business rules and well-defined backend services.',
    relatedProjectSlugs: ['expensux', 'j3dev-portfolio'],
  },
  {
    id: 'modern-architecture-devops-ai',
    yearLabel: '2025–2026',
    title: 'Modern architecture, DevOps, and AI-assisted development',
    periodLabel: 'Current evolution stage',
    summary:
      'The current stage integrates .NET 8, modern Angular, Git, GitHub, Azure, Docker, Entity Framework Core strengthening, clean architecture, automation, documentation, and AI-assisted development. Coding speed increases, but analysis, context, and review remain essential.',
    focusAreas: [
      '.NET 8',
      'Angular 18',
      'Git',
      'GitHub',
      'Azure',
      'Docker',
      'Entity Framework Core',
      'Clean Architecture',
      'AI-assisted development',
      'Codex',
    ],
    keyLearning:
      'AI accelerates code generation, but it does not replace analysis, architecture, or quality control.',
    relatedProjectSlugs: ['j3dev-portfolio'],
    evidenceNote:
      'This portfolio is part of the ongoing learning loop: incremental delivery, reviewable changes, documentation, and clear public presentation.',
  },
];

const JOURNEY_INSIGHTS_EN: JourneyInsight[] = [
  {
    title: 'From tools to systems',
    description:
      'The progression moved from learning individual tools toward understanding how applications, databases, workflows, and users fit together inside complete business systems.',
  },
  {
    title: 'From code to architecture',
    description:
      'Experience shifted from making code work toward defining boundaries, models, standards, and maintainable structures that support future change.',
  },
  {
    title: 'From execution to evolution',
    description:
      'Long-term product and enterprise work reinforced that useful software continues to evolve through maintenance, modernization, documentation, and careful incremental decisions.',
  },
  {
    title: 'From coding speed to context quality',
    description:
      'Experience shows that writing code is only one part of the work; the real value is understanding the problem, designing the solution, and keeping software useful over time.',
  },
];

const JOURNEY_CTA_LINKS_EN: JourneyCtaLink[] = [
  { label: 'Review project evidence', route: '/projects' },
  { label: 'Explore technical foundation', route: '/skills' },
  { label: 'How I add value', route: '/why-hire-me' },
];

const JOURNEY_STAGES_ES: JourneyStage[] = [
  {
    ...JOURNEY_STAGES_EN[0],
    title: 'Descubrimiento autodidacta',
    periodLabel: 'Antes de iniciar estudios universitarios',
    summary:
      'Antes de iniciar estudios universitarios, Jorge comenzó a interesarse por la creación de software desde casa, usando Windows XP, Access, Visual Basic 6, libros e información descargada desde cafés internet para practicar algoritmos y pequeñas aplicaciones.',
    focusAreas: ['DFD', 'Diagramas de flujo', 'VB6', 'Access', 'Algoritmos'],
    keyLearning:
      'Antes de aprender frameworks, empezó aprendiendo lógica, bases de datos y resolución de problemas.',
  },
  {
    ...JOURNEY_STAGES_EN[1],
    title: 'Formación académica y fundamentos de ingeniería',
    periodLabel: 'Etapa de fundamentos formales',
    summary:
      'Con el inicio de la universidad, el aprendizaje se amplió hacia análisis, modelado, bases de datos relacionales, programación web básica y fundamentos formales de construcción de software.',
    focusAreas: ['UML', 'MySQL', 'PHP', 'HTML', 'CSS', 'Bases de datos relacionales'],
    keyLearning: 'Comprender que el software debe analizarse y modelarse antes de programarse.',
  },
  {
    ...JOURNEY_STAGES_EN[2],
    title: 'Primer software empresarial',
    periodLabel: 'Etapa con usuarios reales de negocio',
    summary:
      'La primera experiencia laboral llevó el aprendizaje a usuarios reales, procesos de negocio, SQL Server, VB.NET Framework 3.5, Crystal Reports, DataReader, DataTable, UML y normalización de bases de datos.',
    focusAreas: [
      'SQL Server',
      'VB.NET',
      '.NET Framework 3.5',
      'Crystal Reports',
      'DataReader',
      'DataTable',
      'UML',
      'Normalización',
    ],
    keyLearning:
      'El software existe para soportar operaciones reales de negocio, no solo para ejecutar código correctamente.',
    evidenceNote:
      'Esta etapa se describe sin exponer nombres de producto, detalles internos de implementación ni contexto operativo privado.',
  },
  {
    ...JOURNEY_STAGES_EN[3],
    title: 'Sistemas empresariales complejos',
    periodLabel: 'Etapa de adaptación en producción',
    summary:
      'En esta etapa Jorge trabajó con productos comerciales en FoxPro y SQL Server, incluyendo sistemas clínicos, odontológicos y ERP. Aunque FoxPro no representa su stack actual, esta experiencia fortaleció análisis de negocio, migración de datos, normalización, reportes, corrección de bugs y adaptación rápida a tecnologías desconocidas.',
    focusAreas: [
      'FoxPro',
      'SQL Server',
      'ERP',
      'Sistemas clínicos',
      'Sistemas odontológicos',
      'Migración de datos',
      'Reporting',
    ],
    keyLearning:
      'Adaptarse rápidamente a tecnologías desconocidas y mantener productos empresariales en producción.',
    evidenceNote:
      'El contexto de FoxPro se incluye solo como historia de aprendizaje; Jorge aprendió lo básico en aproximadamente una semana para iniciar mantenimiento productivo, sin presentarlo como su stack actual.',
  },
  {
    ...JOURNEY_STAGES_EN[4],
    title: 'Construcción de producto propio',
    periodLabel: 'Etapa de producto independiente',
    summary:
      'La experiencia freelance dio origen a Worker, un sistema empresarial construido desde requerimientos, casos de uso, diseño UML, arquitectura, base de datos, codificación, pruebas y salida a producción. El producto inició en septiembre de 2014 y entró en producción en noviembre de 2015.',
    focusAreas: [
      'Worker',
      'UML',
      'SQL Server',
      'VB.NET',
      'Access',
      'Reporting',
      'Excel export',
      'Producción',
    ],
    keyLearning:
      'Construir software completo exige entender negocio, diseñar con cuidado y sostener la evolución después de la primera entrega.',
    evidenceNote:
      'Worker se referencia como evidencia del portafolio segura para publicación, mientras el código fuente propietario y los detalles operativos permanecen privados.',
  },
  {
    ...JOURNEY_STAGES_EN[5],
    title: 'Ingeniería remota y software empresarial',
    periodLabel: 'Etapa de software de larga vida útil',
    summary:
      'La entrada a LeverIT permitió trabajar de forma remota en software empresarial de larga vida útil, con mantenimiento, mejoras, SQL Server, ASP.NET, JavaScript, HTML, CSS, convenciones de equipo y evolución funcional.',
    focusAreas: [
      'ItHelpCenter',
      'Discovery',
      'SQL Server',
      'ASP.NET',
      'JavaScript',
      'HTML',
      'CSS',
      'Trabajo remoto',
      'Convenciones de equipo',
    ],
    keyLearning:
      'Trabajar en software empresarial requiere continuidad, comunicación, convenciones y decisiones sostenibles.',
    evidenceNote:
      'Los nombres de proyectos se usan solo como contexto de alto nivel; los detalles de implementación y organización no se divulgan intencionalmente.',
  },
  {
    ...JOURNEY_STAGES_EN[6],
    title: 'Arquitectura API First',
    periodLabel: 'Etapa de límites de servicio',
    summary:
      'La evolución del backend avanzó hacia APIs REST, separación más clara entre frontend y backend, autenticación, SQL Server y acceso a datos moderno. Esta etapa marcó el paso desde enfoques más monolíticos hacia servicios más mantenibles.',
    focusAreas: [
      'REST APIs',
      'JWT',
      'SQL Server',
      'Dapper',
      'Arquitectura backend',
      'Límites de servicio',
    ],
    keyLearning:
      'Separar responsabilidades mejora la mantenibilidad, la integración y la evolución del software.',
  },
  {
    ...JOURNEY_STAGES_EN[7],
    title: 'Angular y fullstack moderno',
    periodLabel: 'Etapa de integración frontend',
    summary:
      'Con Testigo Electoral y otros ejercicios modernos, Jorge fortaleció Angular y TypeScript como complemento a su foco Backend .NET, conectando interfaces con APIs REST, SQL Server y reglas de negocio específicas de clientes reales.',
    focusAreas: [
      'Angular',
      'TypeScript',
      'REST APIs',
      'SQL Server',
      'Testigo Electoral',
      'Expensux',
      'J3dev Portfolio',
    ],
    keyLearning:
      'El frontend moderno aumenta su valor cuando se conecta con reglas de negocio claras y servicios backend bien definidos.',
  },
  {
    ...JOURNEY_STAGES_EN[8],
    title: 'Arquitectura moderna, DevOps e IA',
    periodLabel: 'Etapa actual de evolución',
    summary:
      'La etapa actual integra .NET 8, Angular moderno, Git, GitHub, Azure, Docker, Entity Framework Core en fortalecimiento, arquitectura limpia, automatización, documentación y desarrollo asistido por IA. La velocidad de codificación aumenta, pero el análisis, el contexto y la revisión siguen siendo fundamentales.',
    focusAreas: [
      '.NET 8',
      'Angular 18',
      'Git',
      'GitHub',
      'Azure',
      'Docker',
      'Entity Framework Core',
      'Clean Architecture',
      'Desarrollo asistido por IA',
      'Codex',
    ],
    keyLearning:
      'La IA acelera la generación de código, pero no reemplaza el análisis, la arquitectura ni el control de calidad.',
    evidenceNote:
      'Este portafolio hace parte del ciclo de aprendizaje continuo: entrega incremental, cambios revisables, documentación y presentación pública clara.',
  },
];

const JOURNEY_EVOLUTION_PHASES_EN: JourneyEvolutionPhase[] = [
  {
    id: 'initial-foundations',
    years: '2008–2010',
    title: 'Initial foundations',
    metrics: [
      { label: 'Analysis & Architecture', level: 30 },
      { label: 'Technical Stack', level: 40 },
      { label: 'Product Experience', level: 15 },
    ],
  },
  {
    id: 'first-enterprise-software',
    years: '2012–2015',
    title: 'First enterprise software',
    metrics: [
      { label: 'Analysis & Architecture', level: 65 },
      { label: 'Technical Stack', level: 60 },
      { label: 'Product Experience', level: 70 },
    ],
  },
  {
    id: 'long-lived-enterprise-software',
    years: '2016–2023',
    title: 'Long-lived enterprise software',
    metrics: [
      { label: 'Analysis & Architecture', level: 85 },
      { label: 'Technical Stack', level: 85 },
      { label: 'Product Experience', level: 90 },
    ],
  },
  {
    id: 'modern-architecture-ai',
    years: '2025–2026',
    title: 'Modern architecture and AI',
    metrics: [
      { label: 'Analysis & Architecture', level: 95 },
      { label: 'Technical Stack', level: 95 },
      { label: 'Product Experience', level: 95 },
    ],
  },
];

export const JOURNEY_STAGES = {
  en: JOURNEY_STAGES_EN,
  es: JOURNEY_STAGES_ES,
} as const;

const JOURNEY_EVOLUTION_PHASES_ES: JourneyEvolutionPhase[] = [
  {
    ...JOURNEY_EVOLUTION_PHASES_EN[0],
    title: 'Fundamentos iniciales',
    metrics: [
      { label: 'Análisis y Arquitectura', level: 30 },
      { label: 'Stack Técnico', level: 40 },
      { label: 'Experiencia de Producto', level: 15 },
    ],
  },
  {
    ...JOURNEY_EVOLUTION_PHASES_EN[1],
    title: 'Primer software empresarial',
    metrics: [
      { label: 'Análisis y Arquitectura', level: 65 },
      { label: 'Stack Técnico', level: 60 },
      { label: 'Experiencia de Producto', level: 70 },
    ],
  },
  {
    ...JOURNEY_EVOLUTION_PHASES_EN[2],
    title: 'Software empresarial de larga vida',
    metrics: [
      { label: 'Análisis y Arquitectura', level: 85 },
      { label: 'Stack Técnico', level: 85 },
      { label: 'Experiencia de Producto', level: 90 },
    ],
  },
  {
    ...JOURNEY_EVOLUTION_PHASES_EN[3],
    title: 'Arquitectura moderna e IA',
    metrics: [
      { label: 'Análisis y Arquitectura', level: 95 },
      { label: 'Stack Técnico', level: 95 },
      { label: 'Experiencia de Producto', level: 95 },
    ],
  },
];

export const JOURNEY_EVOLUTION_PHASES = {
  en: JOURNEY_EVOLUTION_PHASES_EN,
  es: JOURNEY_EVOLUTION_PHASES_ES,
} as const;

const JOURNEY_INSIGHTS_ES: JourneyInsight[] = [
  {
    title: 'De herramientas a sistemas',
    description:
      'La progresión pasó de aprender herramientas individuales a entender cómo aplicaciones, bases de datos, flujos de trabajo y usuarios encajan dentro de sistemas completos de negocio.',
  },
  {
    title: 'De código a arquitectura',
    description:
      'La experiencia cambió de hacer que el código funcione a definir límites, modelos, estándares y estructuras mantenibles que soporten cambios futuros.',
  },
  {
    title: 'De ejecución a evolución',
    description:
      'El trabajo de producto y software empresarial a largo plazo reforzó que el software útil sigue evolucionando mediante mantenimiento, modernización, documentación y decisiones incrementales cuidadosas.',
  },
  {
    title: 'De velocidad de codificación a calidad de contexto',
    description:
      'La experiencia muestra que escribir código es solo una parte del trabajo; el valor real está en entender el problema, diseñar la solución y mantener el software útil con el paso del tiempo.',
  },
];

export const JOURNEY_INSIGHTS = {
  en: JOURNEY_INSIGHTS_EN,
  es: JOURNEY_INSIGHTS_ES,
} as const;

const JOURNEY_CTA_LINKS_ES: JourneyCtaLink[] = [
  { label: 'Ver evidencia en proyectos', route: '/projects' },
  { label: 'Explorar base técnica', route: '/skills' },
  { label: 'Cómo aporto valor', route: '/why-hire-me' },
];

export const JOURNEY_CTA_LINKS = {
  en: JOURNEY_CTA_LINKS_EN,
  es: JOURNEY_CTA_LINKS_ES,
} as const;
