import { Component, computed, inject, signal } from '@angular/core';

import {
  DOCUMENTS_HERO_IMAGE_URL,
  DOCUMENT_ACTION_ICON_URLS,
  DOCUMENT_GROUPS,
} from '../../data/documents.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';
import { DocumentGroupSection, ProfessionalDocument } from '../../models/document.model';

@Component({
  selector: 'app-documents',
  standalone: true,
  templateUrl: './documents.html',
  styleUrl: './documents.css',
})
export class Documents {
  private readonly languageService = inject(LanguageService);

  protected readonly heroImageUrl = DOCUMENTS_HERO_IMAGE_URL;
  protected readonly text = computed(() => this.languageService.uiText().pages.documents);
  private readonly failedIconIds = signal<ReadonlySet<string>>(new Set());
  protected readonly uiCommon = computed(() => this.languageService.uiText().common);

  protected hasIconFailed(documentId: string): boolean {
    return this.failedIconIds().has(documentId);
  }

  protected markIconFailed(documentId: string): void {
    this.failedIconIds.update((failedIds) => new Set(failedIds).add(documentId));
  }

  readonly documentGroups = computed(() =>
    getLocalizedData(DOCUMENT_GROUPS, this.languageService.currentLanguage()),
  );
  protected readonly viewActionIconUrl = DOCUMENT_ACTION_ICON_URLS.view;
  protected readonly downloadActionIconUrl = DOCUMENT_ACTION_ICON_URLS.download;
  protected readonly printActionIconUrl = DOCUMENT_ACTION_ICON_URLS.print;

  downloadFileName(document: ProfessionalDocument): string {
    return document.filePath.split('/').pop() ?? `${document.id}.pdf`;
  }

  openForPrint(document: ProfessionalDocument): void {
    window.open(document.filePath, '_blank', 'noopener,noreferrer');
  }

  protected isRecommendationDocument(document: ProfessionalDocument): boolean {
    return document.id.startsWith('recommendation-');
  }

  protected getDocumentIconFallback(document: ProfessionalDocument): string {
    if (document.id.startsWith('cover-letter-')) {
      return 'CL';
    }

    if (document.id.startsWith('recommendation-')) {
      return 'RL';
    }

    return document.type.slice(0, 2).toUpperCase();
  }

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
