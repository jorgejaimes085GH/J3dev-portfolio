import { AboutPageData } from '../models/about.model';

export const ABOUT_PAGE_DATA: AboutPageData = {
  introduction: {
    professionalTitle: 'Software Engineer',
    shortIntroduction:
      'Jorge Jaimes is a backend-centered Software Engineer whose work has evolved from desktop business systems and SQL Server data workflows into modern .NET, REST API, and Angular application development.',
    profileImageAlt: 'Professional profile image area for Jorge Jaimes',
  },
  journeyMilestones: [
    {
      title: 'Early technology curiosity',
      description:
        'Built an early foundation by exploring how technology can solve practical problems for real users.',
    },
    {
      title: 'VB6 / Access',
      description:
        'Worked with desktop and data-driven applications, gaining direct experience with business workflows, forms, reports, and legacy constraints.',
    },
    {
      title: 'WinForms',
      description:
        'Expanded into structured desktop interfaces where usability, data entry, reporting, and operational reliability mattered.',
    },
    {
      title: 'SQL Server',
      description:
        'Developed stronger relational database habits around queries, stored procedures, data organization, and business information integrity.',
    },
    {
      title: 'Enterprise software',
      description:
        'Contributed to production-oriented systems where maintenance, incremental delivery, team conventions, and confidentiality were part of daily engineering work.',
    },
    {
      title: 'Architecture',
      description:
        'Moved from isolated implementation toward clearer boundaries, maintainable layers, and design decisions that support future change.',
    },
    {
      title: 'Modern .NET',
      description:
        'Continued evolving backend practice with C#, .NET 8, REST API direction, Dapper, SQL Server, and SOLID principles.',
    },
    {
      title: 'Angular',
      description:
        'Added frontend capability through Angular and TypeScript to connect usable interfaces with backend services and application workflows.',
    },
  ],
  engineeringPhilosophy: [
    {
      title: 'Understand the problem first',
      description:
        'Clarify business needs, constraints, and existing system behavior before choosing an implementation approach.',
    },
    {
      title: 'Architecture before implementation',
      description:
        'Define responsibilities, boundaries, and data flow early so code remains easier to reason about as requirements change.',
    },
    {
      title: 'Maintainable software',
      description:
        'Favor readable solutions, practical structure, and incremental improvement over unnecessary complexity.',
    },
    {
      title: 'Continuous learning',
      description:
        'Treat each project as part of a long-term technical evolution across legacy systems, enterprise delivery, and modern tooling.',
    },
  ],
  professionalValues: [
    {
      title: 'Responsibility',
      description:
        'Take ownership of assigned work while respecting production constraints, team practices, and confidentiality.',
    },
    {
      title: 'Maintainability',
      description:
        'Reduce avoidable complexity so future changes can be completed with less risk and clearer technical context.',
    },
    {
      title: 'Teamwork',
      description:
        'Contribute through clear communication, shared standards, and practical support for teammates and stakeholders.',
    },
    {
      title: 'Documentation',
      description:
        'Preserve useful context around decisions, behavior, and handoff needs so systems are easier to maintain.',
    },
    {
      title: 'Continuous improvement',
      description:
        'Use each iteration to refine technical judgment, improve delivery habits, and keep the work aligned with business needs.',
    },
  ],
};
