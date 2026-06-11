import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `<h2>{{ sharedText().sectionTitlePending }}</h2>`,
})
export class SectionTitle {
  private readonly languageService = inject(LanguageService);

  protected readonly sharedText = computed(() => this.languageService.uiText().pages.shared);
}
