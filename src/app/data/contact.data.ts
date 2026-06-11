import { ContactBadge, ContactMethod } from '../models/contact.model';

const PROFESSIONAL_CONTACT_METHODS_EN: ContactMethod[] = [
  {
    id: 'email',
    title: 'Email',
    description: 'Preferred channel for professional communication and interview coordination.',
    value: 'jorge.jaimes.085@gmail.com',
    actionLabel: 'Send Email',
    actionUrl: 'mailto:jorge.jaimes.085@gmail.com',
    iconPlaceholder: 'Email contact icon',
    iconUrl: 'assets/images/icons/actions/email.svg',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    description: 'Available for quick professional conversations and interview scheduling.',
    value: '+57 316 759 1878',
    actionLabel: 'Open WhatsApp',
    actionUrl: 'https://wa.me/573167591878',
    iconPlaceholder: 'WhatsApp contact icon',
    iconUrl: 'assets/images/icons/actions/whatsapp.svg',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    description: 'Professional profile, career history, experience, and recommendations.',
    value: 'Jorge Jaimes Jerez',
    actionLabel: 'View LinkedIn Profile',
    actionUrl: 'https://www.linkedin.com/in/jorge-jaimes-jerez-b472902b5/',
    iconPlaceholder: 'LinkedIn contact icon',
    iconUrl: 'assets/images/icons/actions/linkedin.svg',
  },
];

const PROFESSIONAL_AVAILABILITY_EN: ContactBadge[] = [
  { id: 'remote-opportunities', label: 'Remote Opportunities' },
  { id: 'hybrid-opportunities', label: 'Hybrid Opportunities' },
  { id: 'backend-dotnet-roles', label: 'Backend .NET Roles' },
  { id: 'fullstack-dotnet-angular-roles', label: 'Backend-first .NET + Angular Roles' },
  { id: 'software-architecture-discussions', label: 'Software Architecture Discussions' },
  { id: 'technical-leadership-growth', label: 'Technical Leadership Growth' },
];

const TECHNICAL_INTERESTS_EN: ContactBadge[] = [
  { id: 'sql-server', label: 'SQL Server' },
  { id: 'dotnet-8', label: '.NET 8' },
  { id: 'rest-apis', label: 'REST APIs' },
  { id: 'angular', label: 'Angular' },
  { id: 'dapper', label: 'Dapper' },
  { id: 'solid', label: 'SOLID' },
  { id: 'software-architecture', label: 'Software Architecture' },
  { id: 'modernization-legacy-systems', label: 'Modernization of Legacy Systems' },
  { id: 'azure-learning', label: 'Azure Learning' },
  { id: 'ai-assisted-development', label: 'AI-Assisted Development' },
];

const PROFESSIONAL_CONTACT_METHODS_ES: ContactMethod[] = [
  {
    ...PROFESSIONAL_CONTACT_METHODS_EN[0],
    description: 'Canal preferido para comunicación profesional y coordinación de entrevistas.',
    actionLabel: 'Enviar Email',
    iconPlaceholder: 'Ícono de contacto por email',
  },
  {
    ...PROFESSIONAL_CONTACT_METHODS_EN[1],
    description:
      'Disponible para conversaciones profesionales rápidas y programación de entrevistas.',
    actionLabel: 'Abrir WhatsApp',
    iconPlaceholder: 'Ícono de contacto por WhatsApp',
  },
  {
    ...PROFESSIONAL_CONTACT_METHODS_EN[2],
    description: 'Perfil profesional, trayectoria, experiencia y recomendaciones.',
    actionLabel: 'Ver Perfil de LinkedIn',
    iconPlaceholder: 'Ícono de contacto de LinkedIn',
  },
];

export const PROFESSIONAL_CONTACT_METHODS = {
  en: PROFESSIONAL_CONTACT_METHODS_EN,
  es: PROFESSIONAL_CONTACT_METHODS_ES,
} as const;

const PROFESSIONAL_AVAILABILITY_ES: ContactBadge[] = [
  { id: 'remote-opportunities', label: 'Oportunidades Remotas' },
  { id: 'hybrid-opportunities', label: 'Oportunidades Híbridas' },
  { id: 'backend-dotnet-roles', label: 'Roles Backend .NET' },
  { id: 'fullstack-dotnet-angular-roles', label: 'Roles .NET + Angular con prioridad Backend' },
  { id: 'software-architecture-discussions', label: 'Conversaciones de Arquitectura de Software' },
  { id: 'technical-leadership-growth', label: 'Crecimiento en Liderazgo Técnico' },
];

export const PROFESSIONAL_AVAILABILITY = {
  en: PROFESSIONAL_AVAILABILITY_EN,
  es: PROFESSIONAL_AVAILABILITY_ES,
} as const;

const TECHNICAL_INTERESTS_ES: ContactBadge[] = [
  { id: 'sql-server', label: 'SQL Server' },
  { id: 'dotnet-8', label: '.NET 8' },
  { id: 'rest-apis', label: 'REST APIs' },
  { id: 'angular', label: 'Angular' },
  { id: 'dapper', label: 'Dapper' },
  { id: 'solid', label: 'SOLID' },
  { id: 'software-architecture', label: 'Arquitectura de Software' },
  { id: 'modernization-legacy-systems', label: 'Modernización de Sistemas Legacy' },
  { id: 'azure-learning', label: 'Aprendizaje de Azure' },
  { id: 'ai-assisted-development', label: 'Desarrollo Asistido por IA' },
];

export const TECHNICAL_INTERESTS = {
  en: TECHNICAL_INTERESTS_EN,
  es: TECHNICAL_INTERESTS_ES,
} as const;
