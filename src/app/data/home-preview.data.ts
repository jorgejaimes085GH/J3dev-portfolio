import {
  HomeProjectPreview,
  HomeSkillPreview,
  HomeValuePreview,
} from '../models/home-preview.model';

const HOME_VALUE_PREVIEWS_EN: readonly HomeValuePreview[] = [
  {
    title: 'Think before building',
    label: 'Problem first',
    description:
      'Jorge starts by clarifying the business need, constraints, and maintainability expectations before selecting a technical solution.',
  },
  {
    title: 'Architecture before code',
    label: 'Design matters',
    description:
      'He prefers simple, well-structured solutions that keep responsibilities clear and make future changes easier to reason about.',
  },
  {
    title: 'Software that evolves',
    label: 'Long-term value',
    description:
      'The focus is on systems that can be maintained, extended, and modernized without unnecessary complexity or risky rewrites.',
  },
];

const HOME_PROJECT_PREVIEWS_EN: readonly HomeProjectPreview[] = [
  {
    name: 'Worker',
    statusLabel: 'Production software · Private source',
    description:
      'Operational software experience presented through business context, screenshots, and impact without exposing source code.',
    technologies: ['.NET', 'C#', 'SQL Server', 'WinForms'],
    route: '/projects',
    thumbnailUrl: 'assets/project-media/worker/worker-thumbnail.webp',
  },
  {
    name: 'Expensux',
    statusLabel: 'Backend API demo · Source private',
    description:
      'Expense management showcase focused on .NET API structure, authentication, SQL-backed workflows, and maintainable implementation decisions.',
    technologies: ['ASP.NET Core', 'REST APIs', 'JWT', 'Angular'],
    route: '/projects',
    thumbnailUrl: 'assets/project-media/expensux/expensux-thumbnail.webp',
  },
  {
    name: 'ItHelpCenter',
    statusLabel: 'Contribution-focused · Confidential details protected',
    description:
      'Help center experience described through responsibilities, technologies, and lessons learned while avoiding proprietary information.',
    technologies: ['.NET', 'SQL Server', 'Dapper', 'LINQ'],
    route: '/projects',
    thumbnailUrl: 'assets/project-media/ithelpcenter/ithelpcenter-thumbnail.webp',
  },
];

const HOME_SKILL_PREVIEWS_EN: readonly HomeSkillPreview[] = [
  { name: '.NET', context: 'Backend and enterprise application development' },
  { name: 'SQL Server', context: 'Relational modeling, querying, and data-driven features' },
  { name: 'REST APIs', context: 'Service contracts and integration-focused design' },
  { name: 'JWT', context: 'Token-based authentication flows' },
  { name: 'Dapper', context: 'Lightweight data access for SQL-centered applications' },
  { name: 'LINQ', context: 'Readable C# querying and data transformations' },
  { name: 'Angular', context: 'Complementary UI layer for backend-driven workflows' },
  { name: 'SOLID', context: 'Maintainable object-oriented design principles' },
];

const HOME_VALUE_PREVIEWS_ES: readonly HomeValuePreview[] = [
  {
    title: 'Pensar antes de construir',
    label: 'Problema primero',
    description:
      'Jorge inicia aclarando la necesidad de negocio, las restricciones y las expectativas de mantenibilidad antes de elegir una solución técnica.',
  },
  {
    title: 'Arquitectura antes que código',
    label: 'El diseño importa',
    description:
      'Prefiere soluciones simples y bien estructuradas que mantengan responsabilidades claras y faciliten razonar sobre cambios futuros.',
  },
  {
    title: 'Software que evoluciona',
    label: 'Valor a largo plazo',
    description:
      'El enfoque está en sistemas que puedan mantenerse, extenderse y modernizarse sin complejidad innecesaria ni reescrituras riesgosas.',
  },
];

export const HOME_VALUE_PREVIEWS = {
  en: HOME_VALUE_PREVIEWS_EN,
  es: HOME_VALUE_PREVIEWS_ES,
} as const;

const HOME_PROJECT_PREVIEWS_ES: readonly HomeProjectPreview[] = [
  {
    name: 'Worker',
    statusLabel: 'Software en producción · Código privado',
    description:
      'Experiencia en software operativo presentada con contexto de negocio, capturas e impacto sin exponer código fuente.',
    technologies: ['.NET', 'C#', 'SQL Server', 'WinForms'],
    route: '/projects',
    thumbnailUrl: 'assets/project-media/worker/worker-thumbnail.webp',
  },
  {
    name: 'Expensux',
    statusLabel: 'Demo de Backend API · Código privado',
    description:
      'Muestra de gestión de gastos enfocada en estructura de API .NET, autenticación, flujos con SQL y decisiones de implementación mantenibles.',
    technologies: ['ASP.NET Core', 'REST APIs', 'JWT', 'Angular'],
    route: '/projects',
    thumbnailUrl: 'assets/project-media/expensux/expensux-thumbnail.webp',
  },
  {
    name: 'ItHelpCenter',
    statusLabel: 'Enfoque en contribución · Detalles confidenciales protegidos',
    description:
      'Experiencia de mesa de ayuda descrita mediante responsabilidades, tecnologías y aprendizajes, evitando información propietaria.',
    technologies: ['.NET', 'SQL Server', 'Dapper', 'LINQ'],
    route: '/projects',
    thumbnailUrl: 'assets/project-media/ithelpcenter/ithelpcenter-thumbnail.webp',
  },
];

export const HOME_PROJECT_PREVIEWS = {
  en: HOME_PROJECT_PREVIEWS_EN,
  es: HOME_PROJECT_PREVIEWS_ES,
} as const;

const HOME_SKILL_PREVIEWS_ES: readonly HomeSkillPreview[] = [
  { name: '.NET', context: 'Desarrollo backend y aplicaciones empresariales' },
  {
    name: 'SQL Server',
    context: 'Modelado relacional, consultas y funcionalidades basadas en datos',
  },
  { name: 'REST APIs', context: 'Contratos de servicio y diseño orientado a integración' },
  { name: 'JWT', context: 'Flujos de autenticación basados en tokens' },
  { name: 'Dapper', context: 'Acceso liviano a datos para aplicaciones centradas en SQL' },
  { name: 'LINQ', context: 'Consultas y transformaciones legibles en C#' },
  { name: 'Angular', context: 'Capa UI complementaria para flujos impulsados por backend' },
  { name: 'SOLID', context: 'Principios de diseño orientado a objetos mantenible' },
];

export const HOME_SKILL_PREVIEWS = {
  en: HOME_SKILL_PREVIEWS_EN,
  es: HOME_SKILL_PREVIEWS_ES,
} as const;
