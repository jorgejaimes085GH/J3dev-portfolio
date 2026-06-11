import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  template: `<article>
    <p>{{ sharedText().skillCardPending }}</p>
  </article>`,
})
export class SkillCard {
  private readonly languageService = inject(LanguageService);

  protected readonly sharedText = computed(() => this.languageService.uiText().pages.shared);
}
