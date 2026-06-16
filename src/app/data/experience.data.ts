import { ExperienceCtaLink, ExperienceEntry } from '../models/experience.model';

const EXPERIENCE_ENTRIES_EN: ExperienceEntry[] = [
  {
    id: 'netcom-sa',
    company: 'Netcom SA',
    logoUrl: 'assets/images/logos/companies/netcom.webp',
    companyInitials: 'NS',
    period: '2012 – 2013',
    startYear: '2012',
    role: 'Junior Developer',
    context:
      'Participation in a management system for a transportation company. The project was developed by a small team using UML, SQL Server, VB.NET, and Crystal Reports to support administrative operations related to logistics and merchandise control.',
    learned: [
      'Team collaboration',
      'UML applied to real projects',
      'SQL Server',
      'VB.NET Framework 3.5',
      'Crystal Reports',
      'Modular enterprise development',
    ],
    keyLearning:
      'The step from student to professional developer happened when software stopped being an academic exercise and started solving real problems.',
    relatedProjectSlugs: [],
    recommendationLabel: 'View Netcom recommendation',
    recommendationAnchor: 'recommendation-netcom',
  },
  {
    id: 'avances',
    company: 'Avances',
    companyUrl: 'https://avances.com.co/',
    logoUrl: 'assets/images/logos/companies/avances.webp',
    companyInitials: 'AV',
    period: '2013 – 2014',
    startYear: '2013',
    role: 'Junior Developer',
    context:
      'Participation in enterprise products already deployed for medical, dental, and administrative sectors. Work focused on feature evolution, database migration, and support for multiple clients.',
    learned: [
      'Multi-company systems',
      'Multi-user systems',
      'SQL Server',
      'Migrations from FoxPro',
      'Role-based permissions',
      'Production product evolution',
    ],
    keyLearning:
      'A successful enterprise product is not built once; it evolves constantly to adapt to each client.',
    relatedProjectSlugs: ['manager-clinic', 'manager-plus', 'odontology'],
    recommendationLabel: 'View Avances recommendation',
    recommendationAnchor: 'recommendation-avances',
  },
  {
    id: 'worker-freelance',
    company: 'Worker Freelance',
    logoUrl: 'assets/images/logos/companies/worker.webp',
    companyInitials: 'WF',
    period: '2014 – 2016',
    startYear: '2014',
    role: 'Independent Software Developer',
    context:
      'Design and complete construction of an enterprise system for a television and internet company, participating from requirements discovery through production deployment.',
    learned: [
      'Business analysis',
      'Database design',
      'UML',
      'Initial architecture',
      'Billing and accounting',
      'Post-production support',
    ],
    keyLearning:
      'Building software is a skill. Maintaining and evolving it for years is where architecture is truly learned.',
    relatedProjectSlugs: ['worker'],
    recommendationLabel: 'View Worker recommendation',
    recommendationAnchor: 'recommendation-worker',
  },
  {
    id: 'leverit',
    company: 'LeverIT',
    companyUrl: 'https://www.leverit.us/',
    logoUrl: 'assets/images/logos/companies/leverit.webp',
    companyInitials: 'LI',
    period: '2016 – 2026',
    startYear: '2016',
    role: 'Fullstack Developer',
    context:
      'Participation for a decade in enterprise platforms used in real production, including ticket management, technology inventory, process automation, and specialized web solutions.',
    learned: [
      'REST APIs',
      'JWT Authentication',
      'WebSockets',
      'SQL Server',
      'Team conventions',
      'Enterprise frontend',
      'Angular',
      'Performance optimization',
      'AI integration in business processes',
    ],
    keyLearning:
      'The most valuable experience does not come from building new software only, but from understanding how to maintain, improve, and modernize systems used daily by hundreds of users.',
    relatedProjectSlugs: ['ithelpcenter', 'discovery', 'testigo-electoral'],
    recommendationLabel: 'View LeverIT recommendation',
    recommendationAnchor: 'recommendation-leverit',
  },
];

const EXPERIENCE_ENTRIES_ES: ExperienceEntry[] = [
  {
    id: 'netcom-sa',
    company: 'Netcom SA',
    logoUrl: 'assets/images/logos/companies/netcom.webp',
    companyInitials: 'NS',
    period: '2012 – 2013',
    startYear: '2012',
    role: 'Junior Developer',
    context:
      'Participación en un sistema de gestión para una empresa de transporte. El proyecto fue desarrollado por un equipo pequeño utilizando UML, SQL Server, VB.NET y Crystal Reports para apoyar operaciones administrativas relacionadas con logística y control de mercancía.',
    learned: [
      'Trabajo en equipo',
      'UML aplicado a proyectos reales',
      'SQL Server',
      'VB.NET Framework 3.5',
      'Crystal Reports',
      'Desarrollo modular empresarial',
    ],
    keyLearning:
      'El paso de estudiante a desarrollador profesional ocurrió cuando el software dejó de ser un ejercicio académico y comenzó a resolver problemas reales.',
    relatedProjectSlugs: [],
    recommendationLabel: 'Ver recomendación Netcom',
    recommendationAnchor: 'recommendation-netcom',
  },
  {
    id: 'avances',
    company: 'Avances',
    companyUrl: 'https://avances.com.co/',
    logoUrl: 'assets/images/logos/companies/avances.webp',
    companyInitials: 'AV',
    period: '2013 – 2014',
    startYear: '2013',
    role: 'Junior Developer',
    context:
      'Participación en productos empresariales ya desplegados para sectores médicos, odontológicos y administrativos. El trabajo se enfocó en evolución de funcionalidades, migración de bases de datos y soporte a múltiples clientes.',
    learned: [
      'Sistemas multiempresa',
      'Sistemas multiusuario',
      'SQL Server',
      'Migraciones desde FoxPro',
      'Control de permisos por rol',
      'Evolución de productos en producción',
    ],
    keyLearning:
      'Un producto empresarial exitoso no se construye una sola vez; evoluciona constantemente para adaptarse a cada cliente.',
    relatedProjectSlugs: ['manager-clinic', 'manager-plus', 'odontology'],
    recommendationLabel: 'Ver recomendación Avances',
    recommendationAnchor: 'recommendation-avances',
  },
  {
    id: 'worker-freelance',
    company: 'Worker Freelance',
    logoUrl: 'assets/images/logos/companies/worker.webp',
    companyInitials: 'WF',
    period: '2014 – 2016',
    startYear: '2014',
    role: 'Independent Software Developer',
    context:
      'Diseño y construcción completa de un sistema empresarial para una empresa de televisión e internet, participando desde el levantamiento de requerimientos hasta el despliegue en producción.',
    learned: [
      'Análisis de negocio',
      'Diseño de base de datos',
      'UML',
      'Arquitectura inicial',
      'Facturación y contabilidad',
      'Soporte postproducción',
    ],
    keyLearning:
      'Construir software es una habilidad. Mantenerlo y evolucionarlo durante años es donde realmente se aprende arquitectura.',
    relatedProjectSlugs: ['worker'],
    recommendationLabel: 'Ver recomendación Worker',
    recommendationAnchor: 'recommendation-worker',
  },
  {
    id: 'leverit',
    company: 'LeverIT',
    companyUrl: 'https://www.leverit.us/',
    logoUrl: 'assets/images/logos/companies/leverit.webp',
    companyInitials: 'LI',
    period: '2016 – 2026',
    startYear: '2016',
    role: 'Fullstack Developer',
    context:
      'Participación durante una década en plataformas empresariales utilizadas en producción real, incluyendo gestión de tickets, inventario tecnológico, automatización de procesos y soluciones web especializadas.',
    learned: [
      'APIs REST',
      'JWT Authentication',
      'WebSockets',
      'SQL Server',
      'Convenciones de equipo',
      'Frontend empresarial',
      'Angular',
      'Optimización de rendimiento',
      'Integración de IA en procesos de negocio',
    ],
    keyLearning:
      'La experiencia más valiosa no proviene de construir software nuevo, sino de entender cómo mantener, mejorar y modernizar sistemas utilizados diariamente por cientos de usuarios.',
    relatedProjectSlugs: ['ithelpcenter', 'discovery', 'testigo-electoral'],
    recommendationLabel: 'Ver recomendación LeverIT',
    recommendationAnchor: 'recommendation-leverit',
  },
];

export const EXPERIENCE_ENTRIES = {
  en: EXPERIENCE_ENTRIES_EN,
  es: EXPERIENCE_ENTRIES_ES,
} as const;

export const EXPERIENCE_CTA_LINKS = {
  en: [
    { label: 'Review related projects', route: '/projects' },
    { label: 'Explore skills', route: '/skills' },
    { label: 'View technical journey', route: '/journey' },
  ] satisfies ExperienceCtaLink[],
  es: [
    { label: 'Revisar proyectos relacionados', route: '/projects' },
    { label: 'Explorar habilidades', route: '/skills' },
    { label: 'Ver trayectoria técnica', route: '/journey' },
  ] satisfies ExperienceCtaLink[],
} as const;
