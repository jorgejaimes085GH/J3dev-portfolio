import { DocumentGroupSection, ProfessionalDocument } from '../models/document.model';

const spanishRecommendationNote =
  'Original document in Spanish. English summary can be prepared if required.';

const PROFESSIONAL_DOCUMENTS_EN: ProfessionalDocument[] = [
  {
    id: 'cv-es',
    title: 'CV Español',
    description:
      'Spanish curriculum vitae prepared for Backend .NET roles, Spanish-speaking recruiters, hiring managers, and professional contacts.',
    type: 'CV',
    language: 'Spanish',
    group: 'Resume & CV',
    statusLabel: 'PDF pending publication',
    filePath: 'assets/documents/resumes/cv-es.pdf',
    viewLabel: 'View CV Español online',
    downloadLabel: 'Download CV Español PDF',
    printLabel: 'Print CV Español',
    iconUrl: 'assets/images/logos/documents/document-resume.svg',
  },
  {
    id: 'cv-en',
    title: 'CV English',
    description:
      'English curriculum vitae prepared for Backend .NET roles, international recruiters, hiring managers, and technical teams.',
    type: 'CV',
    language: 'English',
    group: 'Resume & CV',
    statusLabel: 'PDF pending publication',
    filePath: 'assets/documents/resumes/cv-en.pdf',
    viewLabel: 'View CV English online',
    downloadLabel: 'Download CV English PDF',
    printLabel: 'Print CV English',
    iconUrl: 'assets/images/logos/documents/document-resume.svg',
  },
  {
    id: 'cover-letter-es',
    title: 'Carta de Presentación Español',
    description:
      'Spanish cover letter prepared for Backend .NET role introductions and application context; PDF publication is pending.',
    type: 'Cover Letter',
    language: 'Spanish',
    group: 'Cover Letters',
    statusLabel: 'PDF pending publication',
    filePath: 'assets/documents/cover-letters/cover-letter-es.pdf',
    viewLabel: 'View Carta de Presentación Español online',
    downloadLabel: 'Download Carta de Presentación Español PDF',
    printLabel: 'Print Carta de Presentación Español',
    iconUrl: 'assets/images/logos/documents/document-cover-letter.svg',
  },
  {
    id: 'cover-letter-en',
    title: 'Cover Letter English',
    description:
      'English cover letter prepared for Backend .NET role introductions and application context; PDF publication is pending.',
    type: 'Cover Letter',
    language: 'English',
    group: 'Cover Letters',
    statusLabel: 'PDF pending publication',
    filePath: 'assets/documents/cover-letters/cover-letter-en.pdf',
    viewLabel: 'View Cover Letter English online',
    downloadLabel: 'Download Cover Letter English PDF',
    printLabel: 'Print Cover Letter English',
    iconUrl: 'assets/images/logos/documents/document-cover-letter.svg',
  },
  {
    id: 'recommendation-leverit',
    title: 'LeverIT Recommendation',
    description:
      'Professional recommendation letter from LeverIT, provided as verifiable supporting evidence.',
    type: 'Recommendation Letter',
    language: 'Spanish',
    group: 'Professional Recommendations',
    statusLabel: 'PDF pending publication',
    filePath: 'assets/documents/recommendations/recommendation-leverit.pdf',
    viewLabel: 'View LeverIT Recommendation online',
    downloadLabel: 'Download LeverIT Recommendation PDF',
    printLabel: 'Print LeverIT Recommendation',
    iconUrl: 'assets/images/logos/documents/document-recommendation.svg',
    note: spanishRecommendationNote,
  },
  {
    id: 'recommendation-netcom',
    title: 'Netcom Recommendation',
    description:
      'Professional recommendation letter from Netcom, provided as verifiable supporting evidence.',
    type: 'Recommendation Letter',
    language: 'Spanish',
    group: 'Professional Recommendations',
    statusLabel: 'PDF pending publication',
    filePath: 'assets/documents/recommendations/recommendation-netcom.pdf',
    viewLabel: 'View Netcom Recommendation online',
    downloadLabel: 'Download Netcom Recommendation PDF',
    printLabel: 'Print Netcom Recommendation',
    iconUrl: 'assets/images/logos/documents/document-recommendation.svg',
    note: spanishRecommendationNote,
  },
  {
    id: 'recommendation-avances',
    title: 'Avances Software Recommendation',
    description:
      'Professional recommendation letter from Avances Software, provided as verifiable supporting evidence.',
    type: 'Recommendation Letter',
    language: 'Spanish',
    group: 'Professional Recommendations',
    statusLabel: 'PDF pending publication',
    filePath: 'assets/documents/recommendations/recommendation-avances.pdf',
    viewLabel: 'View Avances Software Recommendation online',
    downloadLabel: 'Download Avances Software Recommendation PDF',
    printLabel: 'Print Avances Software Recommendation',
    iconUrl: 'assets/images/logos/documents/document-recommendation.svg',
    note: spanishRecommendationNote,
  },
  {
    id: 'recommendation-myssas-worker',
    title: 'Myssas / Worker Client Recommendation',
    description:
      'Professional recommendation letter from the Myssas / Worker client context, provided as supporting evidence.',
    type: 'Recommendation Letter',
    language: 'Spanish',
    group: 'Professional Recommendations',
    statusLabel: 'PDF pending publication',
    filePath: 'assets/documents/recommendations/recommendation-myssas-worker.pdf',
    viewLabel: 'View Myssas / Worker Client Recommendation online',
    downloadLabel: 'Download Myssas / Worker Client Recommendation PDF',
    printLabel: 'Print Myssas / Worker Client Recommendation',
    iconUrl: 'assets/images/logos/documents/document-recommendation.svg',
    note: spanishRecommendationNote,
  },
];

const DOCUMENT_GROUPS_EN: DocumentGroupSection[] = [
  {
    id: 'resume-cv',
    title: 'Resume & CV',
    intro: 'Curriculum vitae documents prepared for Spanish and English professional audiences.',
    documents: PROFESSIONAL_DOCUMENTS_EN.filter((document) => document.group === 'Resume & CV'),
  },
  {
    id: 'cover-letters',
    title: 'Cover Letters',
    intro:
      'Cover letters prepared for role-specific professional introductions; PDF publication is pending.',
    documents: PROFESSIONAL_DOCUMENTS_EN.filter((document) => document.group === 'Cover Letters'),
  },
  {
    id: 'professional-recommendations',
    title: 'Professional Recommendations',
    intro:
      'Recommendation letters intended to provide professional evidence from prior work contexts; PDF publication is pending.',
    documents: PROFESSIONAL_DOCUMENTS_EN.filter(
      (document) => document.group === 'Professional Recommendations',
    ),
  },
];

const PROFESSIONAL_DOCUMENTS_ES: ProfessionalDocument[] = PROFESSIONAL_DOCUMENTS_EN.map(
  (document) => ({
    ...document,
    description: document.description
      .replace(
        'Spanish curriculum vitae prepared for Backend .NET roles, Colombian recruiters, hiring managers, and technical teams.',
        'Hoja de vida en español preparada para roles Backend .NET, reclutadores en Colombia, hiring managers y equipos técnicos.',
      )
      .replace(
        'English curriculum vitae prepared for Backend .NET roles, international recruiters, hiring managers, and technical teams.',
        'Curriculum vitae en inglés preparado para roles Backend .NET, reclutadores internacionales, hiring managers y equipos técnicos.',
      )
      .replace(
        'Spanish cover letter prepared for Backend .NET role introductions and application context; PDF publication is pending.',
        'Carta de presentación en español preparada para introducciones a roles Backend .NET y contexto de aplicación; la publicación del PDF está pendiente.',
      )
      .replace(
        'English cover letter prepared for Backend .NET role introductions and application context; PDF publication is pending.',
        'Carta de presentación en inglés preparada para introducciones a roles Backend .NET y contexto de aplicación; la publicación del PDF está pendiente.',
      )
      .replace('Professional recommendation letter from', 'Carta de recomendación profesional de')
      .replace(
        'provided as verifiable supporting evidence.',
        'presentada como evidencia de apoyo verificable.',
      )
      .replace('provided as supporting evidence.', 'presentada como evidencia de apoyo.'),
    statusLabel: 'PDF pendiente de publicación',
    viewLabel: document.viewLabel.replace('View', 'Ver').replace('online', 'en línea'),
    downloadLabel: document.downloadLabel.replace('Download', 'Descargar'),
    printLabel: document.printLabel.replace('Print', 'Imprimir'),
  }),
);

export const PROFESSIONAL_DOCUMENTS = {
  en: PROFESSIONAL_DOCUMENTS_EN,
  es: PROFESSIONAL_DOCUMENTS_ES,
} as const;

const DOCUMENT_GROUPS_ES: DocumentGroupSection[] = [
  {
    id: 'resume-cv',
    title: 'Resume & CV',
    intro:
      'Documentos de hoja de vida y curriculum vitae preparados para audiencias profesionales en español e inglés.',
    documents: PROFESSIONAL_DOCUMENTS_ES.filter((document) => document.group === 'Resume & CV'),
  },
  {
    id: 'cover-letters',
    title: 'Cover Letters',
    intro:
      'Cartas de presentación preparadas para introducciones profesionales por rol; la publicación de PDFs está pendiente.',
    documents: PROFESSIONAL_DOCUMENTS_ES.filter((document) => document.group === 'Cover Letters'),
  },
  {
    id: 'professional-recommendations',
    title: 'Professional Recommendations',
    intro:
      'Cartas de recomendación orientadas a aportar evidencia profesional de contextos laborales previos; la publicación de PDFs está pendiente.',
    documents: PROFESSIONAL_DOCUMENTS_ES.filter(
      (document) => document.group === 'Professional Recommendations',
    ),
  },
];

export const DOCUMENT_GROUPS = {
  en: DOCUMENT_GROUPS_EN,
  es: DOCUMENT_GROUPS_ES,
} as const;
