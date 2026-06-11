import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-skill-project-list',
  standalone: true,
  template: `<section>
    <p>{{ sharedText().skillProjectListPending }}</p>
  </section>`,
})
export class SkillProjectList {
  private readonly languageService = inject(LanguageService);

  protected readonly sharedText = computed(() => this.languageService.uiText().pages.shared);
}
