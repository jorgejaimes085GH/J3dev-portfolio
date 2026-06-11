import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `<article>
    <p>{{ sharedText().projectCardPending }}</p>
  </article>`,
})
export class ProjectCard {
  private readonly languageService = inject(LanguageService);

  protected readonly sharedText = computed(() => this.languageService.uiText().pages.shared);
}
