import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/services/language.service';
import { ThemeService } from '../../core/services/theme.service';
import { PortfolioTheme, ThemeOption } from '../../themes/theme.model';

const SPANISH_THEME_TITLES: Record<PortfolioTheme, string> = {
  'light-professional': 'Claro',
  'dark-tech': 'Oscuro',
  'premium-3d': 'Premium 3D',
};

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  template: `
    <section class="theme-switcher" [attr.aria-label]="uiText().header.theme">
      <span class="theme-switcher__label">{{ uiText().header.theme }}:</span>
      <div class="theme-switcher__options" role="group" [attr.aria-label]="uiText().header.theme">
        @for (theme of themes; track theme.id) {
          <button
            class="theme-switcher__button"
            [class.theme-switcher__button--active]="themeService.isActiveTheme(theme.id)"
            type="button"
            [attr.aria-pressed]="themeService.isActiveTheme(theme.id)"
            [attr.aria-label]="getThemeAriaLabel(theme)"
            [attr.title]="getThemeTitle(theme)"
            (click)="selectTheme(theme.id)"
          >
            @if (theme.iconUrl) {
              <img
                class="theme-switcher__icon"
                [src]="theme.iconUrl"
                [alt]="''"
                aria-hidden="true"
                (error)="showIconFallback($event)"
              />
            }
            <span class="theme-switcher__fallback">{{ theme.iconFallback }}</span>
          </button>
        }
      </div>
    </section>
  `,
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {
  private readonly languageService = inject(LanguageService);

  readonly themeService = inject(ThemeService);
  readonly themes = this.themeService.themes;
  readonly uiText = this.languageService.uiText;

  selectTheme(theme: PortfolioTheme): void {
    this.themeService.setTheme(theme);
  }

  getThemeTitle(theme: ThemeOption): string {
    return this.languageService.currentLanguage() === 'es'
      ? SPANISH_THEME_TITLES[theme.id]
      : theme.label;
  }

  getThemeAriaLabel(theme: ThemeOption): string {
    return `${this.getThemeTitle(theme)}: ${theme.description}`;
  }

  showIconFallback(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.hidden = true;
    const fallback = image.nextElementSibling as HTMLElement | null;
    fallback?.classList.add('theme-switcher__fallback--visible');
    fallback?.removeAttribute('aria-hidden');
  }
}
