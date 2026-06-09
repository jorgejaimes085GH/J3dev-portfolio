import { JourneyCtaLink, JourneyInsight, JourneyStage } from '../models/journey.model';

export const JOURNEY_STAGES: JourneyStage[] = [
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
      'Product work expanded into building, maintaining, and adapting a system across changing operational needs over multiple years.',
    focusAreas: ['Worker', 'VB.NET', 'Access', 'SQL Server', 'Reports', 'Excel export'],
    keyLearning: 'Building and maintaining software that evolves over years.',
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
      'Current work combines backend depth with frontend integration, using typed APIs, authentication, data access, and Angular interfaces.',
    focusAreas: ['.NET 8', 'REST APIs', 'JWT', 'Dapper', 'Angular', 'TypeScript', 'SQL Server'],
    keyLearning: 'Building modern applications with backend depth and frontend integration.',
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

export const JOURNEY_INSIGHTS: JourneyInsight[] = [
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

export const JOURNEY_CTA_LINKS: JourneyCtaLink[] = [
  { label: 'View Projects', route: '/projects' },
  { label: 'Explore Skills', route: '/skills' },
  { label: 'How I Add Value', route: '/why-hire-me' },
  { label: 'View Documents', route: '/documents' },
];
