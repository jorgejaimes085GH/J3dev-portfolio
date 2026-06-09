import { DocumentGroupSection, ProfessionalDocument } from '../models/document.model';

const spanishRecommendationNote =
  'Original document in Spanish. English summary can be prepared if required.';

export const PROFESSIONAL_DOCUMENTS: ProfessionalDocument[] = [
  {
    id: 'cv-es',
    title: 'CV Español',
    description:
      'Spanish curriculum vitae prepared for Spanish-speaking recruiters, hiring managers, and professional contacts.',
    type: 'CV',
    language: 'Spanish',
    group: 'Resume & CV',
    statusLabel: 'PDF pending publication',
    filePath: 'assets/documents/cv-es.pdf',
    viewLabel: 'View CV Español online',
    downloadLabel: 'Download CV Español PDF',
    printLabel: 'Print CV Español',
  },
  {
    id: 'cv-en',
    title: 'CV English',
    description:
      'English curriculum vitae prepared for international recruiters, hiring managers, and technical teams.',
    type: 'CV',
    language: 'English',
    group: 'Resume & CV',
    statusLabel: 'PDF pending publication',
    filePath: 'assets/documents/cv-en.pdf',
    viewLabel: 'View CV English online',
    downloadLabel: 'Download CV English PDF',
    printLabel: 'Print CV English',
  },
  {
    id: 'cover-letter-es',
    title: 'Carta de Presentación Español',
    description:
      'Spanish cover letter prepared for role-specific professional introductions and application context; PDF publication is pending.',
    type: 'Cover Letter',
    language: 'Spanish',
    group: 'Cover Letters',
    statusLabel: 'PDF pending publication',
    filePath: 'assets/documents/cover-letter-es.pdf',
    viewLabel: 'View Carta de Presentación Español online',
    downloadLabel: 'Download Carta de Presentación Español PDF',
    printLabel: 'Print Carta de Presentación Español',
  },
  {
    id: 'cover-letter-en',
    title: 'Cover Letter English',
    description:
      'English cover letter prepared for role-specific professional introductions and application context; PDF publication is pending.',
    type: 'Cover Letter',
    language: 'English',
    group: 'Cover Letters',
    statusLabel: 'PDF pending publication',
    filePath: 'assets/documents/cover-letter-en.pdf',
    viewLabel: 'View Cover Letter English online',
    downloadLabel: 'Download Cover Letter English PDF',
    printLabel: 'Print Cover Letter English',
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
    filePath: 'assets/documents/recommendation-leverit.pdf',
    viewLabel: 'View LeverIT Recommendation online',
    downloadLabel: 'Download LeverIT Recommendation PDF',
    printLabel: 'Print LeverIT Recommendation',
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
    filePath: 'assets/documents/recommendation-netcom.pdf',
    viewLabel: 'View Netcom Recommendation online',
    downloadLabel: 'Download Netcom Recommendation PDF',
    printLabel: 'Print Netcom Recommendation',
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
    filePath: 'assets/documents/recommendation-avances.pdf',
    viewLabel: 'View Avances Software Recommendation online',
    downloadLabel: 'Download Avances Software Recommendation PDF',
    printLabel: 'Print Avances Software Recommendation',
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
    filePath: 'assets/documents/recommendation-myssas-worker.pdf',
    viewLabel: 'View Myssas / Worker Client Recommendation online',
    downloadLabel: 'Download Myssas / Worker Client Recommendation PDF',
    printLabel: 'Print Myssas / Worker Client Recommendation',
    note: spanishRecommendationNote,
  },
];

export const DOCUMENT_GROUPS: DocumentGroupSection[] = [
  {
    id: 'resume-cv',
    title: 'Resume & CV',
    intro: 'Curriculum vitae documents prepared for Spanish and English professional audiences.',
    documents: PROFESSIONAL_DOCUMENTS.filter((document) => document.group === 'Resume & CV'),
  },
  {
    id: 'cover-letters',
    title: 'Cover Letters',
    intro:
      'Cover letters prepared for role-specific professional introductions; PDF publication is pending.',
    documents: PROFESSIONAL_DOCUMENTS.filter((document) => document.group === 'Cover Letters'),
  },
  {
    id: 'professional-recommendations',
    title: 'Professional Recommendations',
    intro:
      'Recommendation letters intended to provide professional evidence from prior work contexts; PDF publication is pending.',
    documents: PROFESSIONAL_DOCUMENTS.filter(
      (document) => document.group === 'Professional Recommendations',
    ),
  },
];
