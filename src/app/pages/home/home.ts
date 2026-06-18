import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HERO_SLIDES } from '../../data/hero-slides.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';
import {
  HOME_PAGE_COPY,
  HOME_PROJECT_PREVIEWS,
  HOME_SKILL_PREVIEWS,
  HOME_VALUE_PREVIEWS,
} from '../../data/home-preview.data';
import { HeroSlider } from '../../shared/components/hero-slider/hero-slider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSlider, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly languageService = inject(LanguageService);

  protected readonly homeCopy = computed(() =>
    getLocalizedData(HOME_PAGE_COPY, this.languageService.currentLanguage()),
  );
  protected readonly heroSlides = computed(() =>
    getLocalizedData(HERO_SLIDES, this.languageService.currentLanguage()),
  );
  protected readonly valuePreviews = computed(() =>
    getLocalizedData(HOME_VALUE_PREVIEWS, this.languageService.currentLanguage()),
  );
  protected readonly projectPreviews = computed(() =>
    getLocalizedData(HOME_PROJECT_PREVIEWS, this.languageService.currentLanguage()),
  );
  protected readonly skillPreviews = computed(() =>
    getLocalizedData(HOME_SKILL_PREVIEWS, this.languageService.currentLanguage()),
  );

  protected getProjectContextLabel(projectName: string): string {
    const { contextLinkPrefix, contextLinkSuffix } = this.homeCopy().projects;
    return [contextLinkPrefix, projectName, contextLinkSuffix].filter(Boolean).join(' ');
  }

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
