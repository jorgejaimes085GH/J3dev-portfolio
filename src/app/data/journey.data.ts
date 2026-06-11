import { JourneyCtaLink, JourneyInsight, JourneyStage } from '../models/journey.model';

const JOURNEY_STAGES_EN: JourneyStage[] = [
  {
    id: 'business-software-foundations',
    title: 'Business Software Foundations',
    periodLabel: 'Early foundation stage',
    summary:
      'Initial experience centered on practical business applications where software had to support day-to-day operations and real users.',
    focusAreas: ['FoxPro', 'SQL', 'Accounting systems', 'Medical software', 'Gas billing systems'],
    keyLearning: 'Understanding real business processes before focusing on implementation details.',
    evidenceNote:
      'This stage is summarized by domains and technologies only, without exposing private business data or proprietary workflows.',
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy Modernization',
    periodLabel: 'Modernization stage',
    summary:
      'Work shifted toward extending existing systems and moving legacy tools forward while keeping operational continuity in mind.',
    focusAreas: ['VB6', 'Access', 'VB.NET', 'SQL Server'],
    keyLearning: 'Modernizing existing systems without losing operational continuity.',
    evidenceNote:
      'The emphasis is on the engineering challenge of safe modernization rather than a company-by-company timeline.',
  },
  {
    id: 'independent-product-development',
    title: 'Independent Product Development',
    periodLabel: 'Long-term product stage',
    summary:
      'Product work expanded into building, maintaining, and adapting a system across changing operational needs over multiple years, showing autonomy without making freelancing the main professional identity.',
    focusAreas: ['Worker', 'VB.NET', 'Access', 'SQL Server', 'Reports', 'Excel export'],
    keyLearning:
      'Building and maintaining software that evolves over years while preserving business continuity.',
    relatedProjectSlugs: ['worker'],
    evidenceNote:
      'Worker is referenced as public-safe portfolio evidence while proprietary source code and operational details remain private.',
  },
  {
    id: 'enterprise-software-development',
    title: 'Enterprise Software Development',
    periodLabel: 'Enterprise collaboration stage',
    summary:
      'Experience grew through enterprise systems where maintenance, improvements, integration points, and team conventions became central to delivery.',
    focusAreas: [
      'ItHelpCenter',
      'Discovery',
      'Testigo Electoral',
      'SQL Server',
      'C#',
      'APIs',
      'JavaScript',
      'Angular',
      'WebSockets',
    ],
    keyLearning:
      'Working with enterprise systems, maintenance, improvements, and team development conventions.',
    evidenceNote:
      'Project names are used as high-level context only; implementation and organizational details are intentionally not disclosed.',
  },
  {
    id: 'architecture-mindset',
    title: 'Architecture Mindset',
    periodLabel: 'Architecture growth stage',
    summary:
      'The focus matured from completing isolated tasks toward organizing code, boundaries, and standards so systems can remain understandable.',
    focusAreas: [
      'SOLID',
      'Layered architecture',
      'Reusable patterns',
      'Development standards',
      'Maintainability',
    ],
    keyLearning: 'Thinking beyond isolated features and designing software that can evolve.',
    relatedProjectSlugs: ['worker', 'expensux'],
    evidenceNote:
      'Related projects show architectural direction through sanitized summaries and public-safe implementation context.',
  },
  {
    id: 'modern-fullstack-development',
    title: 'Modern Fullstack Development',
    periodLabel: 'Modern application stage',
    summary:
      'Current work keeps Backend .NET as the center while adding frontend integration through typed APIs, authentication, data access, and Angular interfaces.',
    focusAreas: ['.NET 8', 'REST APIs', 'JWT', 'Dapper', 'Angular', 'TypeScript', 'SQL Server'],
    keyLearning:
      'Building modern applications with backend depth first and frontend integration as a complement.',
    relatedProjectSlugs: ['expensux', 'j3dev-portfolio'],
    evidenceNote:
      'Expensux and this portfolio provide safe examples of modern fullstack direction without adding backend logic to the portfolio itself.',
  },
  {
    id: 'continuous-evolution',
    title: 'Continuous Evolution',
    periodLabel: 'Ongoing evolution stage',
    summary:
      'The current stage emphasizes disciplined use of modern development tools while keeping maintainability, architecture, and professional judgment first.',
    focusAreas: [
      'Git',
      'GitHub',
      'Azure learning',
      'AI-assisted development',
      'Codex',
      'Cloud mindset',
    ],
    keyLearning:
      'Using modern tools responsibly while keeping architecture and maintainability first.',
    relatedProjectSlugs: ['j3dev-portfolio'],
    evidenceNote:
      'This portfolio is part of the ongoing learning loop: incremental delivery, reviewable changes, and clear public presentation.',
  },
];

const JOURNEY_INSIGHTS_EN: JourneyInsight[] = [
  {
    title: 'From tools to systems',
    description:
      'The progression moved from learning individual tools toward understanding how applications, databases, workflows, and users fit together inside complete business systems.',
  },
  {
    title: 'From coding to architecture',
    description:
      'Experience shifted from completing isolated features toward defining boundaries, layers, standards, and conventions that make future work easier to maintain.',
  },
  {
    title: 'From execution to evolution',
    description:
      'Long-term project work reinforced that useful software continues to evolve through maintenance, modernization, documentation, and careful incremental decisions.',
  },
];

const JOURNEY_CTA_LINKS_EN: JourneyCtaLink[] = [
  { label: 'View Projects', route: '/projects' },
  { label: 'Explore Skills', route: '/skills' },
  { label: 'How I Add Value', route: '/why-hire-me' },
  { label: 'View Documents', route: '/documents' },
];

const JOURNEY_STAGES_ES: JourneyStage[] = [
  {
    ...JOURNEY_STAGES_EN[0],
    title: 'Bases en software de negocio',
    periodLabel: 'Etapa de fundamentos iniciales',
    summary:
      'La experiencia inicial se centró en aplicaciones prácticas de negocio donde el software debía apoyar operaciones diarias y usuarios reales.',
    focusAreas: [
      'FoxPro',
      'SQL',
      'Sistemas contables',
      'Software médico',
      'Sistemas de facturación de gas',
    ],
    keyLearning:
      'Entender procesos reales de negocio antes de enfocarse en detalles de implementación.',
    evidenceNote:
      'Esta etapa se resume solo por dominios y tecnologías, sin exponer datos privados de negocio ni flujos propietarios.',
  },
  {
    ...JOURNEY_STAGES_EN[1],
    title: 'Modernización legacy',
    periodLabel: 'Etapa de modernización',
    summary:
      'El trabajo avanzó hacia extender sistemas existentes y llevar herramientas legacy hacia adelante, manteniendo presente la continuidad operativa.',
    focusAreas: ['VB6', 'Access', 'VB.NET', 'SQL Server'],
    keyLearning: 'Modernizar sistemas existentes sin perder continuidad operativa.',
    evidenceNote:
      'El énfasis está en el reto de ingeniería de una modernización segura, no en una línea de tiempo empresa por empresa.',
  },
  {
    ...JOURNEY_STAGES_EN[2],
    title: 'Desarrollo independiente de producto',
    periodLabel: 'Etapa de producto a largo plazo',
    summary:
      'El trabajo de producto se amplió hacia construir, mantener y adaptar un sistema durante varios años ante necesidades operativas cambiantes, mostrando autonomía sin convertir el freelance en la identidad profesional principal.',
    focusAreas: ['Worker', 'VB.NET', 'Access', 'SQL Server', 'Reportes', 'Exportación a Excel'],
    keyLearning:
      'Construir y mantener software que evoluciona durante años preservando continuidad de negocio.',
    evidenceNote:
      'Worker se referencia como evidencia del portafolio segura para publicación, mientras el código fuente propietario y los detalles operativos permanecen privados.',
  },
  {
    ...JOURNEY_STAGES_EN[3],
    title: 'Desarrollo de software empresarial',
    periodLabel: 'Etapa de colaboración empresarial',
    summary:
      'La experiencia creció en sistemas empresariales donde mantenimiento, mejoras, puntos de integración y convenciones de equipo se volvieron centrales para la entrega.',
    focusAreas: [
      'ItHelpCenter',
      'Discovery',
      'Testigo Electoral',
      'SQL Server',
      'C#',
      'APIs',
      'JavaScript',
      'Angular',
      'WebSockets',
    ],
    keyLearning:
      'Trabajar con sistemas empresariales, mantenimiento, mejoras y convenciones de desarrollo en equipo.',
    evidenceNote:
      'Los nombres de proyectos se usan solo como contexto de alto nivel; los detalles de implementación y organización no se divulgan intencionalmente.',
  },
  {
    ...JOURNEY_STAGES_EN[4],
    title: 'Mentalidad de arquitectura',
    periodLabel: 'Etapa de crecimiento en arquitectura',
    summary:
      'El enfoque maduró desde completar tareas aisladas hacia organizar código, límites y estándares para que los sistemas sigan siendo comprensibles.',
    focusAreas: [
      'SOLID',
      'Arquitectura por capas',
      'Patrones reutilizables',
      'Estándares de desarrollo',
      'Mantenibilidad',
    ],
    keyLearning:
      'Pensar más allá de funcionalidades aisladas y diseñar software que pueda evolucionar.',
    evidenceNote:
      'Los proyectos relacionados muestran dirección arquitectónica mediante resúmenes sanitizados y contexto de implementación seguro para publicación.',
  },
  {
    ...JOURNEY_STAGES_EN[5],
    title: 'Desarrollo fullstack moderno',
    periodLabel: 'Etapa de aplicación moderna',
    summary:
      'El trabajo actual mantiene Backend .NET como centro y suma integración frontend mediante APIs tipadas, autenticación, acceso a datos e interfaces Angular.',
    focusAreas: ['.NET 8', 'REST APIs', 'JWT', 'Dapper', 'Angular', 'TypeScript', 'SQL Server'],
    keyLearning:
      'Construir aplicaciones modernas con profundidad backend primero e integración frontend como complemento.',
    evidenceNote:
      'Expensux y este portafolio aportan ejemplos seguros de dirección fullstack moderna sin agregar lógica backend al portafolio en sí.',
  },
  {
    ...JOURNEY_STAGES_EN[6],
    title: 'Evolución continua',
    periodLabel: 'Etapa de evolución en curso',
    summary:
      'La etapa actual enfatiza el uso disciplinado de herramientas modernas de desarrollo, manteniendo primero la mantenibilidad, la arquitectura y el criterio profesional.',
    focusAreas: [
      'Git',
      'GitHub',
      'Aprendizaje de Azure',
      'Desarrollo asistido por IA',
      'Codex',
      'Mentalidad cloud',
    ],
    keyLearning:
      'Usar herramientas modernas con responsabilidad, manteniendo arquitectura y mantenibilidad como prioridad.',
    evidenceNote:
      'Este portafolio hace parte del ciclo de aprendizaje continuo: entrega incremental, cambios revisables y presentación pública clara.',
  },
];

export const JOURNEY_STAGES = {
  en: JOURNEY_STAGES_EN,
  es: JOURNEY_STAGES_ES,
} as const;

const JOURNEY_INSIGHTS_ES: JourneyInsight[] = [
  {
    title: 'De herramientas a sistemas',
    description:
      'La progresión pasó de aprender herramientas individuales a entender cómo aplicaciones, bases de datos, flujos de trabajo y usuarios encajan dentro de sistemas completos de negocio.',
  },
  {
    title: 'De codificar a pensar en arquitectura',
    description:
      'La experiencia cambió de completar funcionalidades aisladas a definir límites, capas, estándares y convenciones que facilitan el mantenimiento futuro.',
  },
  {
    title: 'De ejecutar a evolucionar',
    description:
      'El trabajo de proyectos a largo plazo reforzó que el software útil sigue evolucionando mediante mantenimiento, modernización, documentación y decisiones incrementales cuidadosas.',
  },
];

export const JOURNEY_INSIGHTS = {
  en: JOURNEY_INSIGHTS_EN,
  es: JOURNEY_INSIGHTS_ES,
} as const;

const JOURNEY_CTA_LINKS_ES: JourneyCtaLink[] = [
  { label: 'Ver Proyectos', route: '/projects' },
  { label: 'Explorar Habilidades', route: '/skills' },
  { label: 'Cómo aporto valor', route: '/why-hire-me' },
];

export const JOURNEY_CTA_LINKS = {
  en: JOURNEY_CTA_LINKS_EN,
  es: JOURNEY_CTA_LINKS_ES,
} as const;
