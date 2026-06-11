import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-document-card',
  standalone: true,
  template: `<article>
    <p>{{ sharedText().documentCardPending }}</p>
  </article>`,
})
export class DocumentCard {
  private readonly languageService = inject(LanguageService);

  protected readonly sharedText = computed(() => this.languageService.uiText().pages.shared);
}
