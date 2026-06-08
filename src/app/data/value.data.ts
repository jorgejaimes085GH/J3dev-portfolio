import { ValuePageData } from '../models/value.model';

export const VALUE_PAGE_DATA: ValuePageData = {
  introduction: {
    title: 'How I Add Value',
    introduction:
      'Placeholder introduction explaining that this page focuses on practical contribution to software teams and projects.',
    supportingStatement:
      'Placeholder supporting statement for recruiters, architects, technical leads, and hiring managers.',
  },
  valuePillars: [
    {
      title: 'Understand Before Building',
      description: 'Placeholder description about clarifying context before implementation.',
      categoryLabel: 'Analysis',
    },
    {
      title: 'Architecture Before Code',
      description: 'Placeholder description about considering structure before writing code.',
      categoryLabel: 'Design',
    },
    {
      title: 'Maintainability First',
      description: 'Placeholder description about readable, adaptable, long-lived software.',
      categoryLabel: 'Quality',
    },
    {
      title: 'Continuous Learning',
      description: 'Placeholder description about steady technical growth and adaptation.',
      categoryLabel: 'Growth',
    },
    {
      title: 'Production Experience',
      description: 'Placeholder description about working with production-oriented constraints.',
      categoryLabel: 'Delivery',
    },
    {
      title: 'Problem Solving',
      description: 'Placeholder description about breaking down issues into practical steps.',
      categoryLabel: 'Execution',
    },
  ],
  contributionAreas: [
    {
      title: 'Legacy System Modernization',
      description: 'Placeholder description for improving existing systems responsibly.',
    },
    {
      title: 'Backend Development',
      description: 'Placeholder description for backend application development contribution.',
    },
    {
      title: 'API Design',
      description: 'Placeholder description for designing clear service boundaries.',
    },
    {
      title: 'Database Design',
      description: 'Placeholder description for organizing relational data with care.',
    },
    {
      title: 'Technical Analysis',
      description: 'Placeholder description for reviewing requirements and system behavior.',
    },
    {
      title: 'Software Maintenance',
      description: 'Placeholder description for sustaining and improving existing software.',
    },
  ],
  teamContributions: [
    {
      title: 'Collaboration',
      description: 'Placeholder description for working with teammates and stakeholders.',
    },
    {
      title: 'Knowledge Sharing',
      description: 'Placeholder description for helping technical understanding move across a team.',
    },
    {
      title: 'Documentation',
      description: 'Placeholder description for preserving context and decisions.',
    },
    {
      title: 'Long-Term Thinking',
      description: 'Placeholder description for decisions that support future maintenance.',
    },
  ],
  philosophySummary: {
    title: 'Engineering Philosophy Summary',
    description:
      'Placeholder summary connecting problem understanding, design, maintainability, and ongoing learning.',
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
