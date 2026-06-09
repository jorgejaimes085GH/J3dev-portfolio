import {
  ContinuousLearningEntry,
  EducationCtaLink,
  EducationHighlight,
  FormalEducationEntry,
} from '../models/education.model';

export const FORMAL_EDUCATION: FormalEducationEntry[] = [
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
      'Advanced studies in software engineering, architecture, project development, databases, and systems design.',
  },
];

export const CONTINUOUS_LEARNING: ContinuousLearningEntry[] = [
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
    focusAreas: ['SQL Server', 'Data modeling', 'Stored Procedures', 'Performance', 'Business rules'],
    summary: 'Designing and maintaining business databases.',
  },
  {
    id: 'enterprise-development-learning',
    title: 'Enterprise Development Learning',
    focusAreas: ['C#', 'ASP.NET', 'REST APIs', 'WebSockets', 'JavaScript', 'Enterprise maintenance'],
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
    summary: 'Integrating modern backend and frontend development practices.',
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

export const EDUCATION_HIGHLIGHTS: EducationHighlight[] = [
  {
    title: 'Formal Education',
    description: 'Completed technology degree and advanced engineering studies.',
  },
  {
    title: 'Independent Learning',
    description: 'More than a decade of self-directed technical growth.',
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

export const EDUCATION_CTA_LINKS: EducationCtaLink[] = [
  { label: 'Explore Skills', route: '/skills' },
  { label: 'View Projects', route: '/projects' },
  { label: 'View Journey', route: '/journey' },
  { label: 'View Documents', route: '/documents' },
];
