import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, Renderer2, RendererFactory2, inject, signal } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

import { PortfolioTheme, SUPPORTED_THEMES } from '../../themes/theme.model';

const THEME_STORAGE_KEY = 'j3dev-portfolio-theme';
const THEME_CLASS_PREFIX = 'theme-';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
  private readonly themeIds = SUPPORTED_THEMES.map((theme) => theme.id);
  private readonly themeClasses = this.themeIds.map((themeId) => `${THEME_CLASS_PREFIX}${themeId}`);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly selectedTheme = signal<PortfolioTheme>('light-professional');

  readonly currentTheme = this.selectedTheme.asReadonly();
  readonly themes = SUPPORTED_THEMES;

  initializeTheme(): void {
    const theme = this.getStoredTheme() ?? this.getSystemDefaultTheme();

    this.applyTheme(theme, false);
  }

  setTheme(theme: PortfolioTheme): void {
    this.applyTheme(theme, true);
  }

  isActiveTheme(theme: PortfolioTheme): boolean {
    return this.currentTheme() === theme;
  }

  private applyTheme(theme: PortfolioTheme, persistTheme: boolean): void {
    this.selectedTheme.set(theme);
    this.applyThemeClass(theme);

    if (persistTheme) {
      this.storeTheme(theme);
    }
  }

  private applyThemeClass(theme: PortfolioTheme): void {
    const rootElement = this.document.documentElement;

    for (const themeClass of this.themeClasses) {
      this.renderer.removeClass(rootElement, themeClass);
    }

    this.renderer.addClass(rootElement, `${THEME_CLASS_PREFIX}${theme}`);
  }

  private getStoredTheme(): PortfolioTheme | null {
    if (!this.isBrowser) {
      return null;
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    return this.isSupportedTheme(storedTheme) ? storedTheme : null;
  }

  private storeTheme(theme: PortfolioTheme): void {
    if (!this.isBrowser) {
      return;
    }

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  private getSystemDefaultTheme(): PortfolioTheme {
    if (!this.isBrowser) {
      return 'light-professional';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark-tech'
      : 'light-professional';
  }

  private isSupportedTheme(theme: string | null): theme is PortfolioTheme {
    return this.themeIds.includes(theme as PortfolioTheme);
  }
}
