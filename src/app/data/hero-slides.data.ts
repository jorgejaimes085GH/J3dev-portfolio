import { HeroSlide } from '../models/hero-slide.model';

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    id: 'backend-dotnet-specialization',
    eyebrow: 'Backend .NET specialization',
    title: 'Enterprise backend development with .NET and SQL Server.',
    subtitle: 'APIs, data access, authentication, and maintainable server-side systems.',
    description:
      'Jorge builds backend solutions focused on clear business rules, reliable data handling, and practical architecture for real production needs.',
    primaryActionLabel: 'View Projects',
    primaryActionRoute: '/projects',
    secondaryActionLabel: 'Explore Skills',
    secondaryActionRoute: '/skills',
    visualLabel: 'Backend systems visual reference pending final asset',
  },
  {
    id: 'software-that-evolves',
    eyebrow: 'Software that evolves',
    title: 'Architecture before code for long-term systems.',
    subtitle: 'Maintainability, modernization, and decisions that support future change.',
    description:
      'Experience with legacy systems and enterprise applications shapes a practical approach: understand the problem, design with care, and keep the solution adaptable.',
    primaryActionLabel: 'How I Add Value',
    primaryActionRoute: '/why-hire-me',
    secondaryActionLabel: 'See Journey',
    secondaryActionRoute: '/journey',
    visualLabel: 'Architecture planning visual reference pending final asset',
  },
  {
    id: 'fullstack-capability',
    eyebrow: 'Fullstack capability',
    title: 'Angular interfaces connected to backend services.',
    subtitle: 'Frontend integration with TypeScript, responsive UI, and API-driven flows.',
    description:
      'Jorge combines backend depth with Angular experience to build user-facing features that communicate clearly with service layers and business processes.',
    primaryActionLabel: 'See Core Skills',
    primaryActionRoute: '/skills',
    secondaryActionLabel: 'Contact Jorge',
    secondaryActionRoute: '/contact',
    visualLabel: 'Frontend integration visual reference pending final asset',
  },
];
