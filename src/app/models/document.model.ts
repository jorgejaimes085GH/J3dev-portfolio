export type DocumentType = 'CV' | 'Cover Letter' | 'Recommendation Letter';

export type DocumentLanguage = 'Spanish' | 'English';

export type DocumentGroup = 'Resume & CV' | 'Cover Letters' | 'Professional Recommendations';

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
  note?: string;
}

export interface DocumentGroupSection {
  id: string;
  title: DocumentGroup;
  intro: string;
  documents: ProfessionalDocument[];
}
