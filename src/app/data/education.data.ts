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

const FORMAL_EDUCATION_ES: FormalEducationEntry[] = FORMAL_EDUCATION_EN.map((entry) => ({
  ...entry,
  achievement: entry.achievement
    ?.replace('Completed', 'Completado')
    .replace('pending formal degree', 'título formal pendiente'),
  status: entry.status?.replace('Completed', 'Completado').replace('In Progress', 'En progreso'),
  summary: entry.summary
    .replace('Formal education foundation', 'Base de educación formal')
    .replace('Professional training', 'Formación profesional')
    .replace('focused on', 'enfocada en')
    .replace('software development', 'desarrollo de software'),
}));

export const FORMAL_EDUCATION = {
  en: FORMAL_EDUCATION_EN,
  es: FORMAL_EDUCATION_ES,
} as const;

const CONTINUOUS_LEARNING_ES: ContinuousLearningEntry[] = CONTINUOUS_LEARNING_EN.map((entry) => ({
  ...entry,
  title: entry.title
    .replace('Modern Backend .NET', 'Backend .NET moderno')
    .replace('Frontend Integration', 'Integración Frontend')
    .replace('Architecture and Maintainability', 'Arquitectura y mantenibilidad'),
  focusAreas: entry.focusAreas.map((area) =>
    area
      .replace('Application architecture', 'Arquitectura de aplicaciones')
      .replace('Data access', 'Acceso a datos')
      .replace('API design', 'Diseño de APIs')
      .replace('Responsive UI', 'UI responsive')
      .replace('Maintainability', 'Mantenibilidad'),
  ),
  summary: entry.summary
    .replace('Current learning', 'Aprendizaje actual')
    .replace('supports', 'apoya')
    .replace('backend', 'backend')
    .replace('maintainable', 'mantenible'),
}));

export const CONTINUOUS_LEARNING = {
  en: CONTINUOUS_LEARNING_EN,
  es: CONTINUOUS_LEARNING_ES,
} as const;

const EDUCATION_HIGHLIGHTS_ES: EducationHighlight[] = EDUCATION_HIGHLIGHTS_EN.map((highlight) => ({
  ...highlight,
  title: highlight.title
    .replace('Practical foundation', 'Base práctica')
    .replace('Continuous improvement', 'Mejora continua')
    .replace('Backend specialization', 'Especialización Backend'),
  description: highlight.description
    .replace('Learning is connected', 'El aprendizaje está conectado')
    .replace('production', 'producción')
    .replace('modernization', 'modernización')
    .replace('maintainability', 'mantenibilidad'),
}));

export const EDUCATION_HIGHLIGHTS = {
  en: EDUCATION_HIGHLIGHTS_EN,
  es: EDUCATION_HIGHLIGHTS_ES,
} as const;

const EDUCATION_CTA_LINKS_ES: EducationCtaLink[] = [
  { label: 'Ver Habilidades', route: '/skills' },
  { label: 'Ver Proyectos', route: '/projects' },
  { label: 'Contactar a Jorge', route: '/contact' },
];

export const EDUCATION_CTA_LINKS = {
  en: EDUCATION_CTA_LINKS_EN,
  es: EDUCATION_CTA_LINKS_ES,
} as const;
