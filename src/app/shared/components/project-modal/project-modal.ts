import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  template: `<section>
    <p>{{ sharedText().projectModalPending }}</p>
  </section>`,
})
export class ProjectModal {
  private readonly languageService = inject(LanguageService);

  protected readonly sharedText = computed(() => this.languageService.uiText().pages.shared);
}
