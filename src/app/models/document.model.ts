export type DocumentType =
  | 'CV'
  | 'Cover Letter'
  | 'Recommendation Letter'
  | 'Carta de presentación'
  | 'Carta de recomendación';

export type DocumentLanguage = 'Spanish' | 'English' | 'Español' | 'Inglés';

export type DocumentGroup =
  | 'Resume & CV'
  | 'Cover Letters'
  | 'Professional Recommendations'
  | 'Hoja de vida y CV'
  | 'Cartas de presentación'
  | 'Recomendaciones profesionales';

export interface ProfessionalDocument {
  id: string;
  title: string;
  description: string;
  type: DocumentType;
  language: DocumentLanguage;
  group: DocumentGroup;
  statusLabel: string;
  filePath: string;
  viewLabel: string;
  downloadLabel: string;
  printLabel: string;
  iconUrl?: string;
  note?: string;
}

export interface DocumentGroupSection {
  id: string;
  title: DocumentGroup;
  intro: string;
  documents: ProfessionalDocument[];
}
