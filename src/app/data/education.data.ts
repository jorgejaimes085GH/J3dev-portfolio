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
    status: 'Studies completed through semester 9.',
    summary:
      'Advanced studies in software engineering, systems analysis, databases, software architecture, and enterprise application development.',
  },
  {
    id: 'unad-systems-engineering-completion',
    institution: 'UNAD',
    location: 'Bucaramanga, Santander, Colombia',
    program: 'Systems Engineering',
    period: '2026',
    status: 'Degree completion process resumed.',
    summary:
      'Homologation process currently underway to complete the professional engineering degree.',
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
    id: 'modern-backend-engineering',
    title: 'Modern Backend Engineering',
    focusAreas: [
      '.NET 8',
      'C#',
      'Clean Architecture',
      'REST APIs',
      'JWT',
      'Dependency Injection',
      'SOLID',
      'Testing',
    ],
    summary: 'Building maintainable backend systems using modern .NET practices.',
  },
  {
    id: 'cloud-platform-architecture',
    title: 'Cloud & Platform Architecture',
    focusAreas: [
      'Azure',
      'Docker',
      'CI/CD',
      'Git workflows',
      'API First Design',
      'Distributed Systems',
      'AI-assisted development',
    ],
    summary: 'Expanding backend solutions toward cloud-ready, secure, and scalable platforms.',
  },
  {
    id: 'product-evolution-architecture',
    title: 'Product Evolution & Architecture',
    focusAreas: [
      'Legacy modernization',
      'WPF',
      'SQL Server',
      'Backend APIs',
      'Angular',
      'Multi-client architecture',
      'Business software evolution',
    ],
    summary: 'Modernizing legacy desktop systems into scalable multi-client business platforms.',
  },
];

const EDUCATION_HIGHLIGHTS_EN: EducationHighlight[] = [
  {
    title: 'Formal Education',
    description:
      'Completed technology studies and resumed the systems engineering degree completion process.',
  },
  {
    title: 'Independent Learning',
    description:
      'Self-directed growth from legacy desktop systems toward modern Backend .NET, APIs, architecture, and cloud-ready practices.',
  },
  {
    title: 'Production Experience',
    description:
      'Learning reinforced through long-term real-world software projects used in business operations.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'Active learning mindset focused on better architecture, maintainability, scalability, and product evolution.',
  },
];

const EDUCATION_CTA_LINKS_EN: EducationCtaLink[] = [
  { label: 'Skills', route: '/skills' },
  { label: 'Projects', route: '/projects' },
  { label: 'Journey', route: '/journey' },
  { label: 'Documents', route: '/documents' },
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
    status: 'Estudios completados hasta noveno semestre.',
    summary:
      'Estudios avanzados enfocados en ingeniería de software, análisis de sistemas, bases de datos, arquitectura de software y desarrollo de aplicaciones empresariales.',
  },
  {
    ...FORMAL_EDUCATION_EN[3],
    program: 'Ingeniería de Sistemas',
    status: 'Proceso de finalización reactivado.',
    summary:
      'Actualmente en proceso de homologación para completar el título profesional de Ingeniería de Sistemas.',
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
    title: 'Ingeniería Backend Moderna',
    focusAreas: [
      '.NET 8',
      'C#',
      'Clean Architecture',
      'REST APIs',
      'JWT',
      'Dependency Injection',
      'SOLID',
      'Testing',
    ],
    summary: 'Construcción de sistemas backend mantenibles usando prácticas modernas de .NET.',
  },
  {
    ...CONTINUOUS_LEARNING_EN[4],
    title: 'Arquitectura Cloud y Plataforma',
    focusAreas: [
      'Azure',
      'Docker',
      'CI/CD',
      'Git workflows',
      'API First Design',
      'Distributed Systems',
      'AI-assisted development',
    ],
    summary:
      'Evolución de soluciones backend hacia plataformas preparadas para cloud, seguridad y escalabilidad.',
  },
  {
    ...CONTINUOUS_LEARNING_EN[5],
    title: 'Evolución de Producto y Arquitectura',
    focusAreas: [
      'Legacy modernization',
      'WPF',
      'SQL Server',
      'Backend APIs',
      'Angular',
      'Multi-client architecture',
      'Business software evolution',
    ],
    summary:
      'Modernización de sistemas desktop legacy hacia plataformas empresariales escalables y multi-cliente.',
  },
];

export const CONTINUOUS_LEARNING = {
  en: CONTINUOUS_LEARNING_EN,
  es: CONTINUOUS_LEARNING_ES,
} as const;

const EDUCATION_HIGHLIGHTS_ES: EducationHighlight[] = [
  {
    title: 'Educación Formal',
    description:
      'Estudios tecnológicos completados y proceso de finalización de Ingeniería de Sistemas retomado.',
  },
  {
    title: 'Aprendizaje Independiente',
    description:
      'Crecimiento autodirigido desde sistemas desktop legacy hacia Backend .NET moderno, APIs, arquitectura y prácticas preparadas para cloud.',
  },
  {
    title: 'Experiencia en Producción',
    description:
      'Aprendizaje reforzado mediante proyectos reales de software usados en operaciones de negocio.',
  },
  {
    title: 'Mejora Continua',
    description:
      'Mentalidad activa de aprendizaje enfocada en mejor arquitectura, mantenibilidad, escalabilidad y evolución de producto.',
  },
];

export const EDUCATION_HIGHLIGHTS = {
  en: EDUCATION_HIGHLIGHTS_EN,
  es: EDUCATION_HIGHLIGHTS_ES,
} as const;

const EDUCATION_CTA_LINKS_ES: EducationCtaLink[] = [
  { label: 'Habilidades', route: '/skills' },
  { label: 'Proyectos', route: '/projects' },
  { label: 'Trayectoria', route: '/journey' },
  { label: 'Documentos', route: '/documents' },
];

export const EDUCATION_CTA_LINKS = {
  en: EDUCATION_CTA_LINKS_EN,
  es: EDUCATION_CTA_LINKS_ES,
} as const;
