import { DocumentGroupSection, ProfessionalDocument } from '../models/document.model';

const spanishRecommendationNote = 'Original document in Spanish.';

const spanishRecommendationNoteEs = 'Documento original en español.';

const PROFESSIONAL_DOCUMENTS_EN: ProfessionalDocument[] = [
  {
    id: 'cv-es',
    title: 'Spanish CV',
    description:
      'Primary curriculum vitae for Latin American selection processes, summarizing professional experience, relevant projects, technical skills, and career progression in Backend .NET and business software environments.',
    type: 'CV',
    language: 'Spanish',
    group: 'Resume & CV',
    statusLabel: 'PDF',
    filePath: 'assets/documents/resumes/cv-es.pdf',
    iconUrl: 'assets/images/logos/documents/document-resume.svg',
    viewLabel: 'View Spanish CV online',
    downloadLabel: 'Download Spanish CV PDF',
    printLabel: 'Print Spanish CV',
  },
  {
    id: 'cv-en',
    title: 'CV English',
    description:
      'English resume for international recruiters, remote opportunities, and technical interviews, highlighting production experience, backend capabilities, project evidence, and long-term professional growth.',
    type: 'CV',
    language: 'English',
    group: 'Resume & CV',
    statusLabel: 'PDF',
    filePath: 'assets/documents/resumes/cv-en.pdf',
    iconUrl: 'assets/images/logos/documents/document-resume.svg',
    viewLabel: 'View CV English online',
    downloadLabel: 'Download CV English PDF',
    printLabel: 'Print CV English',
  },
  {
    id: 'cover-letter-es',
    title: 'Spanish Cover Letter',
    description:
      'Professional introduction for Spanish-speaking selection processes, connecting Backend .NET experience with enterprise software, architecture awareness, product evolution, and practical contribution to teams.',
    type: 'Cover Letter',
    language: 'Spanish',
    group: 'Cover Letters',
    statusLabel: 'PDF',
    filePath: 'assets/documents/cover-letters/cover-letter-es.pdf',
    iconUrl: 'assets/images/logos/documents/document-cover-letter.svg',
    viewLabel: 'View Spanish Cover Letter online',
    downloadLabel: 'Download Spanish Cover Letter PDF',
    printLabel: 'Print Spanish Cover Letter',
  },
  {
    id: 'cover-letter-en',
    title: 'Cover Letter English',
    description:
      'Role-oriented introduction for international opportunities, framing Backend .NET experience, software modernization, maintainable engineering practices, and motivation for remote technical collaboration.',
    type: 'Cover Letter',
    language: 'English',
    group: 'Cover Letters',
    statusLabel: 'PDF',
    filePath: 'assets/documents/cover-letters/cover-letter-en.pdf',
    iconUrl: 'assets/images/logos/documents/document-cover-letter.svg',
    viewLabel: 'View Cover Letter English online',
    downloadLabel: 'Download Cover Letter English PDF',
    printLabel: 'Print Cover Letter English',
  },
  {
    id: 'recommendation-leverit',
    title: 'LeverIT Recommendation',
    description:
      'Recommendation issued by LeverIT recognizing nearly 10 years of contribution to enterprise products and systems used in production.',
    type: 'Recommendation Letter',
    language: 'Spanish',
    group: 'Professional Recommendations',
    statusLabel: 'PDF',
    filePath: 'assets/documents/recommendations/recommendation-leverit.pdf',
    iconUrl: 'assets/images/logos/documents/document-recommendation.svg',
    viewLabel: 'View LeverIT Recommendation online',
    downloadLabel: 'Download LeverIT Recommendation PDF',
    printLabel: 'Print LeverIT Recommendation',
    note: spanishRecommendationNote,
  },
  {
    id: 'recommendation-netcom',
    title: 'Netcom Recommendation',
    description:
      'Recommendation from Jorge’s first professional experience in enterprise software development.',
    type: 'Recommendation Letter',
    language: 'Spanish',
    group: 'Professional Recommendations',
    statusLabel: 'PDF',
    filePath: 'assets/documents/recommendations/recommendation-netcom.pdf',
    iconUrl: 'assets/images/logos/documents/document-recommendation.svg',
    viewLabel: 'View Netcom Recommendation online',
    downloadLabel: 'Download Netcom Recommendation PDF',
    printLabel: 'Print Netcom Recommendation',
    note: spanishRecommendationNote,
  },
  {
    id: 'recommendation-avances',
    title: 'Avances Software Recommendation',
    description:
      'Recommendation associated with work on medical, administrative, and accounting solutions for multiple clients.',
    type: 'Recommendation Letter',
    language: 'Spanish',
    group: 'Professional Recommendations',
    statusLabel: 'PDF',
    filePath: 'assets/documents/recommendations/recommendation-avances.pdf',
    iconUrl: 'assets/images/logos/documents/document-recommendation.svg',
    viewLabel: 'View Avances Software Recommendation online',
    downloadLabel: 'Download Avances Software Recommendation PDF',
    printLabel: 'Print Avances Software Recommendation',
    note: spanishRecommendationNote,
  },
  {
    id: 'recommendation-worker',
    title: 'Myssas / Worker Client Recommendation',
    description:
      'Recommendation issued from the client-supplier context of the Worker project, an enterprise system developed and maintained for more than a decade.',
    type: 'Recommendation Letter',
    language: 'Spanish',
    group: 'Professional Recommendations',
    statusLabel: 'PDF',
    filePath: 'assets/documents/recommendations/recommendation-myssas-worker.pdf',
    iconUrl: 'assets/images/logos/documents/document-recommendation.svg',
    viewLabel: 'View Myssas / Worker Client Recommendation online',
    downloadLabel: 'Download Myssas / Worker Client Recommendation PDF',
    printLabel: 'Print Myssas / Worker Client Recommendation',
    note: spanishRecommendationNote,
  },
];

const DOCUMENT_GROUPS_EN: DocumentGroupSection[] = [
  {
    id: 'resume-cv',
    title: 'Resume & CV',
    intro:
      'Updated professional profiles used in local and international selection processes. These documents summarize experience, technical skills, highlighted projects, and career progression.',
    documents: PROFESSIONAL_DOCUMENTS_EN.filter((document) => document.group === 'Resume & CV'),
  },
  {
    id: 'cover-letters',
    title: 'Cover Letters',
    intro:
      'Role-aware introductions that help recruiters and hiring managers understand the professional context behind Jorge’s experience, technical strengths, and motivation for each opportunity.',
    documents: PROFESSIONAL_DOCUMENTS_EN.filter((document) => document.group === 'Cover Letters'),
  },
  {
    id: 'professional-recommendations',
    title: 'Professional Recommendations',
    intro:
      'References from employers and clients that support the quality of delivered work, technical capability, and experience gained in real business environments.',
    documents: PROFESSIONAL_DOCUMENTS_EN.filter(
      (document) => document.group === 'Professional Recommendations',
    ),
  },
];

const PROFESSIONAL_DOCUMENTS_ES: ProfessionalDocument[] = [
  {
    ...PROFESSIONAL_DOCUMENTS_EN[0],
    description:
      'Documento principal para procesos de selección en Latinoamérica. Resume experiencia profesional, proyectos relevantes, habilidades técnicas y evolución en entornos Backend .NET y software empresarial.',
    language: 'Español',
    group: 'Hoja de vida y CV',
    statusLabel: 'PDF',
    viewLabel: 'Ver CV Español en línea',
    downloadLabel: 'Descargar CV Español PDF',
    printLabel: 'Imprimir CV Español',
  },
  {
    ...PROFESSIONAL_DOCUMENTS_EN[1],
    title: 'CV Inglés',
    description:
      'Perfil en inglés para reclutadores internacionales, oportunidades remotas y entrevistas técnicas. Destaca experiencia en producción, capacidades backend, evidencia de proyectos y crecimiento profesional sostenido.',
    language: 'Inglés',
    group: 'Hoja de vida y CV',
    statusLabel: 'PDF',
    viewLabel: 'Ver CV Inglés en línea',
    downloadLabel: 'Descargar CV Inglés PDF',
    printLabel: 'Imprimir CV Inglés',
  },
  {
    ...PROFESSIONAL_DOCUMENTS_EN[2],
    description:
      'Presentación profesional para procesos en español, conectando experiencia Backend .NET con software empresarial, criterio arquitectónico, evolución de productos y contribución práctica a equipos.',
    type: 'Carta de Presentación',
    language: 'Español',
    group: 'Cartas de presentación',
    statusLabel: 'PDF',
    viewLabel: 'Ver Carta de Presentación Español en línea',
    downloadLabel: 'Descargar Carta de Presentación Español PDF',
    printLabel: 'Imprimir Carta de Presentación Español',
  },
  {
    ...PROFESSIONAL_DOCUMENTS_EN[3],
    title: 'Carta de Presentación Inglés',
    description:
      'Introducción orientada a oportunidades internacionales, contextualizando experiencia Backend .NET, modernización de software, prácticas mantenibles y motivación para colaborar con equipos remotos.',
    type: 'Carta de Presentación',
    language: 'Inglés',
    group: 'Cartas de presentación',
    statusLabel: 'PDF',
    viewLabel: 'Ver Carta de Presentación Inglés en línea',
    downloadLabel: 'Descargar Carta de Presentación Inglés PDF',
    printLabel: 'Imprimir Carta de Presentación Inglés',
  },
  {
    ...PROFESSIONAL_DOCUMENTS_EN[4],
    title: 'Recomendación LeverIT',
    description:
      'Recomendación expedida por LeverIT en reconocimiento a casi 10 años de participación en productos empresariales y sistemas utilizados en producción.',
    type: 'Carta de Recomendación',
    language: 'Español',
    group: 'Recomendaciones profesionales',
    statusLabel: 'PDF',
    viewLabel: 'Ver Recomendación LeverIT en línea',
    downloadLabel: 'Descargar Recomendación LeverIT PDF',
    printLabel: 'Imprimir Recomendación LeverIT',
    note: spanishRecommendationNoteEs,
  },
  {
    ...PROFESSIONAL_DOCUMENTS_EN[5],
    title: 'Recomendación Netcom',
    description:
      'Recomendación correspondiente a la primera experiencia profesional de Jorge en desarrollo de software empresarial.',
    type: 'Carta de Recomendación',
    language: 'Español',
    group: 'Recomendaciones profesionales',
    statusLabel: 'PDF',
    viewLabel: 'Ver Recomendación Netcom en línea',
    downloadLabel: 'Descargar Recomendación Netcom PDF',
    printLabel: 'Imprimir Recomendación Netcom',
    note: spanishRecommendationNoteEs,
  },
  {
    ...PROFESSIONAL_DOCUMENTS_EN[6],
    title: 'Recomendación Avances Software',
    description:
      'Recomendación asociada al trabajo realizado en soluciones médicas, administrativas y contables para múltiples clientes.',
    type: 'Carta de Recomendación',
    language: 'Español',
    group: 'Recomendaciones profesionales',
    statusLabel: 'PDF',
    viewLabel: 'Ver Recomendación Avances Software en línea',
    downloadLabel: 'Descargar Recomendación Avances Software PDF',
    printLabel: 'Imprimir Recomendación Avances Software',
    note: spanishRecommendationNoteEs,
  },
  {
    ...PROFESSIONAL_DOCUMENTS_EN[7],
    title: 'Recomendación Cliente Myssas / Worker',
    description:
      'Recomendación emitida desde el contexto cliente-proveedor del proyecto Worker, sistema empresarial desarrollado y mantenido durante más de una década.',
    type: 'Carta de Recomendación',
    language: 'Español',
    group: 'Recomendaciones profesionales',
    statusLabel: 'PDF',
    viewLabel: 'Ver Recomendación Cliente Myssas / Worker en línea',
    downloadLabel: 'Descargar Recomendación Cliente Myssas / Worker PDF',
    printLabel: 'Imprimir Recomendación Cliente Myssas / Worker',
    note: spanishRecommendationNoteEs,
  },
];

export const PROFESSIONAL_DOCUMENTS = {
  en: PROFESSIONAL_DOCUMENTS_EN,
  es: PROFESSIONAL_DOCUMENTS_ES,
} as const;

const DOCUMENT_GROUPS_ES: DocumentGroupSection[] = [
  {
    id: 'resume-cv',
    title: 'Hoja de vida y CV',
    intro:
      'Versiones actualizadas del perfil profesional utilizadas en procesos de selección nacionales e internacionales. Incluyen experiencia, habilidades técnicas, proyectos destacados y evolución profesional.',
    documents: PROFESSIONAL_DOCUMENTS_ES.filter(
      (document) => document.group === 'Hoja de vida y CV',
    ),
  },
  {
    id: 'cover-letters',
    title: 'Cartas de presentación',
    intro:
      'Documentos orientados a presentar el perfil profesional según el contexto de la oportunidad, resaltando experiencia relevante, fortalezas técnicas y motivaciones profesionales.',
    documents: PROFESSIONAL_DOCUMENTS_ES.filter(
      (document) => document.group === 'Cartas de presentación',
    ),
  },
  {
    id: 'professional-recommendations',
    title: 'Recomendaciones profesionales',
    intro:
      'Referencias emitidas por empleadores y clientes que respaldan la calidad del trabajo realizado, la capacidad técnica y la experiencia obtenida en entornos reales de negocio.',
    documents: PROFESSIONAL_DOCUMENTS_ES.filter(
      (document) => document.group === 'Recomendaciones profesionales',
    ),
  },
];

export const DOCUMENT_GROUPS = {
  en: DOCUMENT_GROUPS_EN,
  es: DOCUMENT_GROUPS_ES,
} as const;
