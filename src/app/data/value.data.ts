import { ValuePageData } from '../models/value.model';

export const VALUE_PAGE_DATA: ValuePageData = {
  introduction: {
    title: 'How I Add Value',
    introduction:
      'Jorge contributes to teams by connecting practical software delivery with Backend .NET design, SQL Server experience, and a careful approach to evolving existing systems.',
    supportingStatement:
      'The focus is evidence-based: production systems, legacy modernization, enterprise maintenance, backend-first fullstack collaboration, and steady technical growth without exposing private implementation details.',
  },
  valuePillars: [
    {
      title: 'Understand Before Building',
      description:
        'Clarifies the business context, existing workflows, data needs, and constraints before committing to an implementation path.',
      categoryLabel: 'Analysis',
    },
    {
      title: 'Architecture Before Code',
      description:
        'Looks for clear boundaries, responsible layering, and service contracts so solutions can be tested, maintained, and extended.',
      categoryLabel: 'Design',
    },
    {
      title: 'Maintainability First',
      description:
        'Prioritizes readable code, practical conventions, and incremental improvements that reduce long-term maintenance risk.',
      categoryLabel: 'Quality',
    },
    {
      title: 'Continuous Learning',
      description:
        'Builds on experience from VB6, Access, WinForms, SQL Server, enterprise .NET systems, REST APIs, Angular, and modern development tools.',
      categoryLabel: 'Growth',
    },
    {
      title: 'Production Experience',
      description:
        'Understands that production systems require stability, confidentiality, careful changes, and respect for real operational workflows.',
      categoryLabel: 'Delivery',
    },
    {
      title: 'Problem Solving',
      description:
        'Breaks issues into understandable parts, traces behavior through data and application layers, and moves toward practical fixes.',
      categoryLabel: 'Execution',
    },
  ],
  contributionAreas: [
    {
      title: 'Legacy System Modernization',
      description:
        'Helps move existing systems forward responsibly by preserving useful behavior while improving structure and technology direction.',
    },
    {
      title: 'Backend Development',
      description:
        'Contributes to Backend .NET application services, SQL-centered data access flows, authentication concepts, and maintainable business logic.',
    },
    {
      title: 'API Design',
      description:
        'Supports REST API boundaries that separate frontend needs from backend responsibilities and make integrations easier to understand.',
    },
    {
      title: 'Database Design',
      description:
        'Applies SQL Server experience to organize data, stored procedures, and relational workflows around business use cases.',
    },
    {
      title: 'Technical Analysis',
      description:
        'Reviews requirements, existing behavior, data movement, and implementation tradeoffs before recommending changes.',
    },
    {
      title: 'Software Maintenance',
      description:
        'Works inside established systems with attention to regression risk, continuity, documentation, and future maintainability.',
    },
  ],
  teamContributions: [
    {
      title: 'Collaboration',
      description:
        'Works with teammates and stakeholders to align technical decisions with delivery needs and system constraints.',
    },
    {
      title: 'Knowledge Sharing',
      description:
        'Makes technical context easier to transfer through clear explanations, reusable patterns, and practical examples.',
    },
    {
      title: 'Documentation',
      description:
        'Records relevant decisions, behavior, and availability notes so project context is easier to preserve over time.',
    },
    {
      title: 'Long-Term Thinking',
      description:
        'Considers how today’s implementation will affect future maintenance, onboarding, troubleshooting, and modernization.',
    },
  ],
  philosophySummary: {
    title: 'Engineering Philosophy Summary',
    description:
      'Useful software starts with understanding the problem, choosing a maintainable structure, protecting production context, and improving systems over time.',
    principles: [
      'Understand problems first',
      'Design before implementation',
      'Build maintainable software',
      'Keep learning',
    ],
  },
  evidenceLinks: [
    { label: 'View Projects', route: '/projects' },
    { label: 'Explore Skills', route: '/skills' },
    { label: 'My Journey', route: '/journey' },
  ],
};
