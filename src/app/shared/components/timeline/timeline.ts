import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  template: `<section>
    <p>{{ sharedText().timelinePending }}</p>
  </section>`,
})
export class Timeline {
  private readonly languageService = inject(LanguageService);

  protected readonly sharedText = computed(() => this.languageService.uiText().pages.shared);
}
