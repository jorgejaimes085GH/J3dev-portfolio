import { ContactBadge, ContactMethod } from '../models/contact.model';

export const PROFESSIONAL_CONTACT_METHODS: ContactMethod[] = [
  {
    id: 'email',
    title: 'Email',
    description: 'Preferred channel for professional communication and interview coordination.',
    value: 'jorge.jaimes.085@gmail.com',
    actionLabel: 'Send Email',
    actionUrl: 'mailto:jorge.jaimes.085@gmail.com',
    iconPlaceholder: 'Email contact icon',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    description: 'Available for quick professional conversations and interview scheduling.',
    value: '+57 316 759 1878',
    actionLabel: 'Open WhatsApp',
    actionUrl: 'https://wa.me/573167591878',
    iconPlaceholder: 'WhatsApp contact icon',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    description: 'Professional profile, career history, experience, and recommendations.',
    value: 'Jorge Jaimes Jerez',
    actionLabel: 'View LinkedIn Profile',
    actionUrl: 'https://www.linkedin.com/in/jorge-jaimes-jerez-b472902b5/',
    iconPlaceholder: 'LinkedIn contact icon',
  },
];

export const PROFESSIONAL_AVAILABILITY: ContactBadge[] = [
  { id: 'remote-opportunities', label: 'Remote Opportunities' },
  { id: 'hybrid-opportunities', label: 'Hybrid Opportunities' },
  { id: 'backend-dotnet-roles', label: 'Backend .NET Roles' },
  { id: 'fullstack-dotnet-angular-roles', label: 'Fullstack .NET + Angular Roles' },
  { id: 'software-architecture-discussions', label: 'Software Architecture Discussions' },
  { id: 'technical-leadership-growth', label: 'Technical Leadership Growth' },
];

export const TECHNICAL_INTERESTS: ContactBadge[] = [
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
