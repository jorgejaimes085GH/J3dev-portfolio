import { ValuePageData } from '../models/value.model';

const VALUE_PAGE_DATA_EN: ValuePageData = {
  introduction: {
    title: 'How I Add Value',
    introduction:
      'Jorge brings practical experience with real business systems that must keep operating while they evolve. His contribution is strongest where existing software needs careful improvement, clearer structure, and dependable delivery.',
    supportingStatement:
      'He approaches technical decisions through business context, operational continuity, maintainability, and risk reduction, supported by production experience in Backend .NET, SQL Server, modernization, and enterprise maintenance without exposing private implementation details.',
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
      title: 'Useful Technology Adaptation',
      description:
        'Adapts to newer tools and patterns when they support business goals, continuity, maintainability, or clearer delivery instead of chasing change for its own sake.',
      categoryLabel: 'Adaptation',
    },
    {
      title: 'Production Experience',
      description:
        'Understands that production systems require stability, confidentiality, careful changes, and respect for real operational workflows.',
      categoryLabel: 'Delivery',
    },
    {
      title: 'Lower-Risk Troubleshooting',
      description:
        'Breaks issues into understandable parts, traces behavior through data and application layers, and moves toward fixes that reduce regression risk.',
      categoryLabel: 'Continuity',
    },
  ],
  contributionAreas: [
    {
      title: 'Modernize Without Disrupting Operations',
      description:
        'Helps existing systems evolve in controlled steps, preserving useful behavior while improving structure, maintainability, and technology direction.',
    },
    {
      title: 'Turn Business Rules into Maintainable Services',
      description:
        'Uses Backend .NET practices to organize workflows, validation, authentication concepts, and business logic into services the team can understand and extend.',
    },
    {
      title: 'Make Integrations Easier to Understand',
      description:
        'Supports REST API boundaries that separate frontend needs from backend responsibilities, reducing confusion between systems and consumers.',
    },
    {
      title: 'Protect the Data Behind Business Workflows',
      description:
        'Applies SQL Server experience to organize relational data, stored procedures, and data access decisions around reliability and business use cases.',
    },
    {
      title: 'Reduce Uncertainty Before Changing Code',
      description:
        'Reviews requirements, existing behavior, data movement, dependencies, and tradeoffs before recommending implementation changes.',
    },
    {
      title: 'Support Systems That Must Keep Running',
      description:
        'Works inside established software with attention to regression risk, operational continuity, documentation, and future maintenance needs.',
    },
  ],
  teamContributions: [
    {
      title: 'Alignment That Reduces Rework',
      description:
        'Works with teammates and stakeholders to clarify expectations early, align technical decisions with constraints, and avoid avoidable rework.',
    },
    {
      title: 'Shared Context for Continuity',
      description:
        'Makes technical context easier to transfer through clear explanations, reusable patterns, and practical examples that help others continue the work.',
    },
    {
      title: 'Decisions the Team Can Revisit',
      description:
        'Records relevant decisions, behaviors, assumptions, and availability notes so project context remains visible after implementation.',
    },
    {
      title: 'More Sustainable Delivery',
      description:
        'Considers how today’s implementation will affect future maintenance, onboarding, troubleshooting, and modernization work.',
    },
  ],
  philosophySummary: {
    title: 'Engineering Choices That Protect Continuity',
    description:
      'Useful software starts with understanding business impact, choosing a maintainable structure, protecting production context, and improving systems in controlled steps.',
    principles: [
      'Reduce uncertainty before delivery',
      'Design around maintainable boundaries',
      'Protect production workflows',
      'Adapt technology when it helps the business',
    ],
  },
  evidenceLinks: [
    { label: 'Review project evidence', route: '/projects' },
    { label: 'Validate technical foundation', route: '/skills' },
    { label: 'See professional evolution', route: '/journey' },
  ],
};

const VALUE_PAGE_DATA_ES: ValuePageData = {
  introduction: {
    title: 'Cómo aporto valor',
    introduction:
      'Jorge aporta experiencia práctica con sistemas reales de negocio que deben seguir operando mientras evolucionan. Su contribución es más fuerte cuando el software existente necesita mejora cuidadosa, estructura más clara y entrega confiable.',
    supportingStatement:
      'Aborda las decisiones técnicas desde el contexto del negocio, la continuidad operativa, la mantenibilidad y la reducción de riesgo, con soporte en experiencia de producción en Backend .NET, SQL Server, modernización y mantenimiento empresarial sin exponer detalles privados de implementación.',
  },
  valuePillars: [
    {
      title: 'Entender antes de construir',
      description:
        'Aclara el contexto de negocio, los flujos existentes, las necesidades de datos y las restricciones antes de definir una ruta de implementación.',
      categoryLabel: 'Análisis',
    },
    {
      title: 'Arquitectura antes que código',
      description:
        'Busca límites claros, capas responsables y contratos de servicio para que las soluciones puedan probarse, mantenerse y extenderse.',
      categoryLabel: 'Diseño',
    },
    {
      title: 'Mantenibilidad primero',
      description:
        'Prioriza código legible, convenciones prácticas y mejoras incrementales que reducen el riesgo de mantenimiento a largo plazo.',
      categoryLabel: 'Calidad',
    },
    {
      title: 'Adaptación tecnológica útil',
      description:
        'Adopta herramientas y patrones nuevos cuando apoyan objetivos de negocio, continuidad, mantenibilidad o una entrega más clara, no por cambiar sin propósito.',
      categoryLabel: 'Adaptación',
    },
    {
      title: 'Experiencia en producción',
      description:
        'Entiende que los sistemas en producción requieren estabilidad, confidencialidad, cambios cuidadosos y respeto por flujos operativos reales.',
      categoryLabel: 'Entrega',
    },
    {
      title: 'Diagnóstico con menor riesgo',
      description:
        'Divide los problemas en partes comprensibles, rastrea el comportamiento entre datos y capas de aplicación, y avanza hacia correcciones que reducen riesgo de regresión.',
      categoryLabel: 'Continuidad',
    },
  ],
  contributionAreas: [
    {
      title: 'Modernizar sin interrumpir la operación',
      description:
        'Ayuda a evolucionar sistemas existentes en pasos controlados, preservando comportamiento útil mientras mejora estructura, mantenibilidad y dirección tecnológica.',
    },
    {
      title: 'Convertir reglas de negocio en servicios mantenibles',
      description:
        'Usa prácticas Backend .NET para organizar flujos, validaciones, conceptos de autenticación y lógica de negocio en servicios que el equipo pueda entender y extender.',
    },
    {
      title: 'Hacer las integraciones más fáciles de entender',
      description:
        'Apoya límites REST API que separan necesidades frontend de responsabilidades backend, reduciendo confusión entre sistemas y consumidores.',
    },
    {
      title: 'Proteger los datos detrás de los flujos de negocio',
      description:
        'Aplica experiencia en SQL Server para organizar datos relacionales, procedimientos almacenados y decisiones de acceso a datos alrededor de confiabilidad y casos de uso de negocio.',
    },
    {
      title: 'Reducir incertidumbre antes de cambiar código',
      description:
        'Revisa requisitos, comportamiento existente, movimiento de datos, dependencias y tradeoffs antes de recomendar cambios de implementación.',
    },
    {
      title: 'Apoyar sistemas que deben seguir funcionando',
      description:
        'Trabaja dentro de software establecido con atención al riesgo de regresión, continuidad operativa, documentación y necesidades futuras de mantenimiento.',
    },
  ],
  teamContributions: [
    {
      title: 'Alineación que reduce retrabajo',
      description:
        'Trabaja con compañeros y stakeholders para aclarar expectativas temprano, alinear decisiones técnicas con restricciones y evitar retrabajo innecesario.',
    },
    {
      title: 'Contexto compartido para la continuidad',
      description:
        'Facilita transferir contexto técnico mediante explicaciones claras, patrones reutilizables y ejemplos prácticos que ayudan a otros a continuar el trabajo.',
    },
    {
      title: 'Decisiones que el equipo puede retomar',
      description:
        'Registra decisiones relevantes, comportamientos, supuestos y notas de disponibilidad para que el contexto del proyecto siga visible después de implementar.',
    },
    {
      title: 'Entregas más sostenibles',
      description:
        'Considera cómo la implementación de hoy afectará mantenimiento, onboarding, diagnóstico y trabajo de modernización futuros.',
    },
  ],
  philosophySummary: {
    title: 'Decisiones de ingeniería que protegen la continuidad',
    description:
      'El software útil empieza por entender el impacto en el negocio, elegir una estructura mantenible, proteger el contexto de producción y mejorar sistemas en pasos controlados.',
    principles: [
      'Reducir incertidumbre antes de entregar',
      'Diseñar alrededor de límites mantenibles',
      'Proteger flujos de producción',
      'Adaptar tecnología cuando ayuda al negocio',
    ],
  },
  evidenceLinks: [
    { label: 'Revisar evidencia en proyectos', route: '/projects' },
    { label: 'Validar base técnica', route: '/skills' },
    { label: 'Ver evolución profesional', route: '/journey' },
  ],
};

export const VALUE_PAGE_DATA = {
  en: VALUE_PAGE_DATA_EN,
  es: VALUE_PAGE_DATA_ES,
} as const;
