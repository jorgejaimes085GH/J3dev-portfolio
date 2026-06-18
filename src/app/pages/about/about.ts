import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ABOUT_PAGE_DATA } from '../../data/about.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => this.languageService.uiText().pages.about);
  protected readonly navText = computed(() => this.languageService.uiText().nav);

  protected readonly aboutData = computed(() =>
    getLocalizedData(ABOUT_PAGE_DATA, this.languageService.currentLanguage()),
  );

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
