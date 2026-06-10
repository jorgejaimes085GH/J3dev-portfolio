import { Component, inject } from '@angular/core';

import { ThemeService } from '../../core/services/theme.service';
import { PortfolioTheme } from '../../themes/theme.model';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  template: `
    <section class="theme-switcher" aria-label="Theme switcher">
      <span class="theme-switcher__label">Theme:</span>
      <div class="theme-switcher__options" role="group" aria-label="Available themes">
        @for (theme of themes; track theme.id) {
          <button
            class="theme-switcher__button"
            [class.theme-switcher__button--active]="themeService.isActiveTheme(theme.id)"
            type="button"
            [attr.aria-pressed]="themeService.isActiveTheme(theme.id)"
            [attr.aria-label]="theme.label + ': ' + theme.description"
            [attr.title]="theme.description"
            (click)="selectTheme(theme.id)"
          >
            {{ theme.label }}
          </button>
        }
      </div>
    </section>
  `,
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {
  readonly themeService = inject(ThemeService);
  readonly themes = this.themeService.themes;

  selectTheme(theme: PortfolioTheme): void {
    this.themeService.setTheme(theme);
  }
}
