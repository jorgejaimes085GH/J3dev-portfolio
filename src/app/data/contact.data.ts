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
  { id: 'full-time-roles', label: 'Full-Time Roles' },
  { id: 'product-oriented-teams', label: 'Product-Oriented Teams' },
  { id: 'engineering-team-collaboration', label: 'Engineering Team Collaboration' },
  { id: 'long-term-growth', label: 'Long-Term Growth' },
];

const TECHNICAL_INTERESTS_EN: ContactBadge[] = [
  { id: 'team-collaboration', label: 'Team Collaboration' },
  { id: 'maintainable-software', label: 'Maintainable Software' },
  { id: 'product-oriented-delivery', label: 'Product-Oriented Delivery' },
  { id: 'business-context', label: 'Business Context' },
  { id: 'continuous-learning', label: 'Continuous Learning' },
  { id: 'clear-communication', label: 'Clear Communication' },
  { id: 'production-support', label: 'Production Support' },
  { id: 'long-term-ownership', label: 'Long-Term Ownership' },
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
  { id: 'remote-opportunities', label: 'Oportunidades remotas' },
  { id: 'hybrid-opportunities', label: 'Oportunidades híbridas' },
  { id: 'full-time-roles', label: 'Roles de tiempo completo' },
  { id: 'product-oriented-teams', label: 'Equipos orientados a producto' },
  { id: 'engineering-team-collaboration', label: 'Colaboración con equipos de ingeniería' },
  { id: 'long-term-growth', label: 'Crecimiento de largo plazo' },
];

export const PROFESSIONAL_AVAILABILITY = {
  en: PROFESSIONAL_AVAILABILITY_EN,
  es: PROFESSIONAL_AVAILABILITY_ES,
} as const;

const TECHNICAL_INTERESTS_ES: ContactBadge[] = [
  { id: 'team-collaboration', label: 'Colaboración en equipo' },
  { id: 'maintainable-software', label: 'Software mantenible' },
  { id: 'product-oriented-delivery', label: 'Entrega orientada a producto' },
  { id: 'business-context', label: 'Contexto de negocio' },
  { id: 'continuous-learning', label: 'Aprendizaje continuo' },
  { id: 'clear-communication', label: 'Comunicación clara' },
  { id: 'production-support', label: 'Soporte a producción' },
  { id: 'long-term-ownership', label: 'Responsabilidad de largo plazo' },
];

export const TECHNICAL_INTERESTS = {
  en: TECHNICAL_INTERESTS_EN,
  es: TECHNICAL_INTERESTS_ES,
} as const;
