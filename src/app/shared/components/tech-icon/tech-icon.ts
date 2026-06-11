import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-tech-icon',
  standalone: true,
  template: `<span>{{ sharedText().techIconPending }}</span>`,
})
export class TechIcon {
  private readonly languageService = inject(LanguageService);

  protected readonly sharedText = computed(() => this.languageService.uiText().pages.shared);
}
