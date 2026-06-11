import {
  ContinuousLearningEntry,
  EducationCtaLink,
  EducationHighlight,
  FormalEducationEntry,
} from '../models/education.model';

const FORMAL_EDUCATION_EN: FormalEducationEntry[] = [
  {
    id: 'cedefoc-high-school-diploma',
    institution: 'CEDEFOC',
    location: 'Floridablanca, Santander, Colombia',
    achievement: 'Academic High School Diploma',
    year: '2004',
    summary: 'Foundational academic education and development of logical reasoning skills.',
  },
  {
    id: 'unad-systems-technology',
    institution: 'UNAD',
    location: 'Bucaramanga, Santander, Colombia',
    program: 'Systems Technology',
    period: '2010 - 2014',
    status: 'Completed',
    summary:
      'Formal education in software development, databases, systems analysis, and programming fundamentals.',
  },
  {
    id: 'unad-systems-engineering',
    institution: 'UNAD',
    location: 'Bucaramanga, Santander, Colombia',
    program: 'Systems Engineering',
    period: '2015 - 2019',
    status: 'Completed through semester 9',
    summary:
      'Further studies in software engineering, architecture, project development, databases, and systems design.',
  },
];

const CONTINUOUS_LEARNING_EN: ContinuousLearningEntry[] = [
  {
    id: 'business-software-learning',
    title: 'Business Software Learning',
    focusAreas: [
      'Business processes',
      'Accounting systems',
      'Medical software',
      'Billing systems',
      'Real-world software operations',
    ],
    summary: 'Understanding how software supports organizations and daily operations.',
  },
  {
    id: 'desktop-development-learning',
    title: 'Desktop Development Learning',
    focusAreas: ['Visual Basic 6', 'VB.NET', 'WinForms', 'Access', 'Reports', 'Excel automation'],
    summary: 'Building complete desktop business applications.',
  },
  {
    id: 'database-learning',
    title: 'Database Learning',
    focusAreas: [
      'SQL Server',
      'Data modeling',
      'Stored Procedures',
      'Performance',
      'Business rules',
    ],
    summary: 'Designing and maintaining business databases.',
  },
  {
    id: 'enterprise-development-learning',
    title: 'Enterprise Development Learning',
    focusAreas: [
      'C#',
      'ASP.NET',
      'REST APIs',
      'WebSockets',
      'JavaScript',
      'Enterprise maintenance',
    ],
    summary: 'Building and evolving enterprise software platforms.',
  },
  {
    id: 'software-architecture-learning',
    title: 'Software Architecture Learning',
    focusAreas: [
      'SOLID',
      'Layered Architecture',
      'Reusable components',
      'Maintainability',
      'Clean code',
    ],
    summary: 'Designing software that can evolve over time.',
  },
  {
    id: 'modern-fullstack-learning',
    title: 'Modern Fullstack Learning',
    focusAreas: ['Angular', 'TypeScript', 'JWT', 'Dapper', '.NET 8', 'Responsive Design'],
    summary: 'Integrating modern Backend .NET practices with frontend collaboration where needed.',
  },
  {
    id: 'current-learning-focus',
    title: 'Current Learning Focus',
    focusAreas: [
      'Azure',
      'Cloud concepts',
      'Git workflows',
      'Docker',
      'AI-assisted development',
      'Modern engineering practices',
    ],
    summary: 'Continuous adaptation to new technologies and development approaches.',
  },
];

const EDUCATION_HIGHLIGHTS_EN: EducationHighlight[] = [
  {
    title: 'Formal Education',
    description: 'Completed technology degree and advanced engineering studies.',
  },
  {
    title: 'Independent Learning',
    description:
      'Self-directed technical growth from legacy systems toward modern Backend .NET practices.',
  },
  {
    title: 'Production Experience',
    description: 'Learning reinforced through real-world software projects.',
  },
  {
    title: 'Continuous Improvement',
    description: 'Active learning mindset maintained throughout career.',
  },
];

const EDUCATION_CTA_LINKS_EN: EducationCtaLink[] = [
  { label: 'Explore Skills', route: '/skills' },
  { label: 'View Projects', route: '/projects' },
  { label: 'View Journey', route: '/journey' },
  { label: 'View Documents', route: '/documents' },
];

const FORMAL_EDUCATION_ES: FormalEducationEntry[] = [
  {
    ...FORMAL_EDUCATION_EN[0],
    achievement: 'Bachiller Académico',
    summary: 'Educación académica base y desarrollo de habilidades de razonamiento lógico.',
  },
  {
    ...FORMAL_EDUCATION_EN[1],
    program: 'Tecnología de Sistemas',
    status: 'Completado',
    summary:
      'Educación formal en desarrollo de software, bases de datos, análisis de sistemas y fundamentos de programación.',
  },
  {
    ...FORMAL_EDUCATION_EN[2],
    program: 'Ingeniería de Sistemas',
    status: 'Completado hasta noveno semestre',
    summary:
      'Estudios adicionales en ingeniería de software, arquitectura, desarrollo de proyectos, bases de datos y diseño de sistemas.',
  },
];

export const FORMAL_EDUCATION = {
  en: FORMAL_EDUCATION_EN,
  es: FORMAL_EDUCATION_ES,
} as const;

const CONTINUOUS_LEARNING_ES: ContinuousLearningEntry[] = [
  {
    ...CONTINUOUS_LEARNING_EN[0],
    title: 'Aprendizaje en software de negocio',
    focusAreas: [
      'Procesos de negocio',
      'Sistemas contables',
      'Software médico',
      'Sistemas de facturación',
      'Operación de software real',
    ],
    summary: 'Comprender cómo el software apoya a las organizaciones y sus operaciones diarias.',
  },
  {
    ...CONTINUOUS_LEARNING_EN[1],
    title: 'Aprendizaje en desarrollo desktop',
    focusAreas: [
      'Visual Basic 6',
      'VB.NET',
      'WinForms',
      'Access',
      'Reportes',
      'Automatización de Excel',
    ],
    summary: 'Construcción de aplicaciones desktop empresariales completas.',
  },
  {
    ...CONTINUOUS_LEARNING_EN[2],
    title: 'Aprendizaje en bases de datos',
    focusAreas: [
      'SQL Server',
      'Modelado de datos',
      'Stored Procedures',
      'Rendimiento',
      'Reglas de negocio',
    ],
    summary: 'Diseño y mantenimiento de bases de datos de negocio.',
  },
  {
    ...CONTINUOUS_LEARNING_EN[3],
    title: 'Aprendizaje en desarrollo empresarial',
    focusAreas: [
      'C#',
      'ASP.NET',
      'REST APIs',
      'WebSockets',
      'JavaScript',
      'Mantenimiento empresarial',
    ],
    summary: 'Construcción y evolución de plataformas de software empresarial.',
  },
  {
    ...CONTINUOUS_LEARNING_EN[4],
    title: 'Aprendizaje en arquitectura de software',
    focusAreas: [
      'SOLID',
      'Layered Architecture',
      'Componentes reutilizables',
      'Mantenibilidad',
      'Clean code',
    ],
    summary: 'Diseño de software que puede evolucionar con el tiempo.',
  },
  {
    ...CONTINUOUS_LEARNING_EN[5],
    title: 'Aprendizaje fullstack moderno',
    focusAreas: ['Angular', 'TypeScript', 'JWT', 'Dapper', '.NET 8', 'Diseño responsive'],
    summary:
      'Integración de prácticas Backend .NET modernas con colaboración frontend cuando se requiere.',
  },
  {
    ...CONTINUOUS_LEARNING_EN[6],
    title: 'Enfoque actual de aprendizaje',
    focusAreas: [
      'Azure',
      'Conceptos cloud',
      'Flujos Git',
      'Docker',
      'Desarrollo asistido por IA',
      'Prácticas modernas de ingeniería',
    ],
    summary: 'Adaptación continua a nuevas tecnologías y enfoques de desarrollo.',
  },
];

export const CONTINUOUS_LEARNING = {
  en: CONTINUOUS_LEARNING_EN,
  es: CONTINUOUS_LEARNING_ES,
} as const;

const EDUCATION_HIGHLIGHTS_ES: EducationHighlight[] = [
  {
    title: 'Educación formal',
    description: 'Tecnología completada y estudios avanzados de ingeniería.',
  },
  {
    title: 'Aprendizaje independiente',
    description:
      'Crecimiento técnico autodirigido desde sistemas legacy hacia prácticas modernas de Backend .NET.',
  },
  {
    title: 'Experiencia en producción',
    description: 'Aprendizaje reforzado mediante proyectos de software reales.',
  },
  {
    title: 'Mejora continua',
    description: 'Mentalidad de aprendizaje activo mantenida durante la trayectoria profesional.',
  },
];

export const EDUCATION_HIGHLIGHTS = {
  en: EDUCATION_HIGHLIGHTS_EN,
  es: EDUCATION_HIGHLIGHTS_ES,
} as const;

const EDUCATION_CTA_LINKS_ES: EducationCtaLink[] = [
  { label: 'Explorar Habilidades', route: '/skills' },
  { label: 'Ver Proyectos', route: '/projects' },
  { label: 'Ver Trayectoria', route: '/journey' },
  { label: 'Ver Documentos', route: '/documents' },
];

export const EDUCATION_CTA_LINKS = {
  en: EDUCATION_CTA_LINKS_EN,
  es: EDUCATION_CTA_LINKS_ES,
} as const;
