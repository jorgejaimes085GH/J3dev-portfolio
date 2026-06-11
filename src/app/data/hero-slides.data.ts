import { HeroSlide } from '../models/hero-slide.model';

const HERO_SLIDES_EN: readonly HeroSlide[] = [
  {
    id: 'backend-dotnet-specialization',
    eyebrow: 'Backend .NET specialization',
    title: 'Enterprise backend development with .NET and SQL Server.',
    subtitle:
      'C#, .NET, SQL Server, APIs, data access, authentication, and maintainable server-side systems.',
    description:
      'Jorge focuses on backend solutions with clear business rules, reliable data handling, and practical architecture for real production needs.',
    primaryActionLabel: 'View Projects',
    primaryActionRoute: '/projects',
    secondaryActionLabel: 'Explore Skills',
    secondaryActionRoute: '/skills',
    visualLabel: 'Backend systems visual reference pending final asset',
    backgroundImageUrl: 'assets/images/backgrounds/hero/hero-backend-systems.webp',
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
    backgroundImageUrl: 'assets/images/backgrounds/hero/hero-architecture-planning.webp',
  },
  {
    id: 'fullstack-capability',
    eyebrow: 'Fullstack support',
    title: 'Angular used to support backend-driven workflows.',
    subtitle: 'Frontend integration with TypeScript, responsive UI, and API-driven flows.',
    description:
      'Angular complements Jorge’s Backend .NET profile by helping deliver user-facing features that communicate clearly with service layers and business processes.',
    primaryActionLabel: 'See Core Skills',
    primaryActionRoute: '/skills',
    secondaryActionLabel: 'Contact Jorge',
    secondaryActionRoute: '/contact',
    visualLabel: 'Frontend integration visual reference pending final asset',
    backgroundImageUrl: 'assets/images/backgrounds/hero/hero-frontend-integration.webp',
  },
];

const HERO_SLIDES_ES: readonly HeroSlide[] = [
  {
    id: 'backend-dotnet-specialization',
    eyebrow: 'Especialización Backend .NET',
    title: 'Desarrollo backend empresarial con .NET y SQL Server.',
    subtitle:
      'C#, .NET, SQL Server, APIs, acceso a datos, autenticación y sistemas server-side mantenibles.',
    description:
      'Jorge se enfoca en soluciones backend con reglas de negocio claras, manejo confiable de datos y arquitectura práctica para necesidades reales de producción.',
    primaryActionLabel: 'Ver Proyectos',
    primaryActionRoute: '/projects',
    secondaryActionLabel: 'Explorar Habilidades',
    secondaryActionRoute: '/skills',
    visualLabel: 'Referencia visual de sistemas backend pendiente de arte final',
    backgroundImageUrl: 'assets/images/backgrounds/hero/hero-backend-systems.webp',
  },
  {
    id: 'software-that-evolves',
    eyebrow: 'Software que evoluciona',
    title: 'Arquitectura antes que código para sistemas de largo plazo.',
    subtitle: 'Mantenibilidad, modernización y decisiones que facilitan el cambio futuro.',
    description:
      'La experiencia con sistemas legacy y aplicaciones empresariales forma un enfoque práctico: entender el problema, diseñar con cuidado y mantener la solución adaptable.',
    primaryActionLabel: 'Cómo aporto valor',
    primaryActionRoute: '/why-hire-me',
    secondaryActionLabel: 'Ver Trayectoria',
    secondaryActionRoute: '/journey',
    visualLabel: 'Referencia visual de planeación de arquitectura pendiente de arte final',
    backgroundImageUrl: 'assets/images/backgrounds/hero/hero-architecture-planning.webp',
  },
  {
    id: 'fullstack-capability',
    eyebrow: 'Apoyo fullstack',
    title: 'Angular como apoyo para flujos impulsados por backend.',
    subtitle: 'Integración frontend con TypeScript, UI responsive y flujos basados en APIs.',
    description:
      'Angular complementa el perfil Backend .NET de Jorge al ayudar a entregar funcionalidades visibles para usuarios que se comunican con capas de servicio y procesos de negocio.',
    primaryActionLabel: 'Ver Habilidades Clave',
    primaryActionRoute: '/skills',
    secondaryActionLabel: 'Contactar a Jorge',
    secondaryActionRoute: '/contact',
    visualLabel: 'Referencia visual de integración frontend pendiente de arte final',
    backgroundImageUrl: 'assets/images/backgrounds/hero/hero-frontend-integration.webp',
  },
];

export const HERO_SLIDES = {
  en: HERO_SLIDES_EN,
  es: HERO_SLIDES_ES,
} as const;
