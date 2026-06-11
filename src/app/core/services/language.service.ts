import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

import { UI_TEXT } from '../../data/ui-text.data';
import {
  DEFAULT_PORTFOLIO_LANGUAGE,
  PortfolioLanguage,
  SUPPORTED_PORTFOLIO_LANGUAGES,
} from '../../models/language.model';

const LANGUAGE_STORAGE_KEY = 'j3dev-portfolio-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly languageIds = SUPPORTED_PORTFOLIO_LANGUAGES;
  private readonly selectedLanguage = signal<PortfolioLanguage>(DEFAULT_PORTFOLIO_LANGUAGE);

  readonly currentLanguage = this.selectedLanguage.asReadonly();
  readonly uiText = computed(() => UI_TEXT[this.currentLanguage()]);

  initializeLanguage(): void {
    this.selectedLanguage.set(this.getStoredLanguage() ?? DEFAULT_PORTFOLIO_LANGUAGE);
  }

  setLanguage(language: PortfolioLanguage): void {
    if (!this.isSupportedLanguage(language)) {
      return;
    }

    this.selectedLanguage.set(language);
    this.storeLanguage(language);
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLanguage() === 'en' ? 'es' : 'en');
  }

  getLanguageCodeLabel(language: PortfolioLanguage = this.currentLanguage()): 'ENG' | 'ESP' {
    return language === 'en' ? 'ENG' : 'ESP';
  }

  private getStoredLanguage(): PortfolioLanguage | null {
    if (!this.isBrowser) {
      return null;
    }

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    return this.isSupportedLanguage(storedLanguage) ? storedLanguage : null;
  }

  private storeLanguage(language: PortfolioLanguage): void {
    if (!this.isBrowser) {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }

  private isSupportedLanguage(language: string | null): language is PortfolioLanguage {
    return this.languageIds.includes(language as PortfolioLanguage);
  }
}
