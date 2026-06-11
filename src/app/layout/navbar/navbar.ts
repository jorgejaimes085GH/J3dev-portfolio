import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavigationService } from '../../core/services/navigation.service';
import { ViewportPreviewService } from '../../core/services/viewport-preview.service';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { ViewportSwitcher } from '../viewport-switcher/viewport-switcher';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeSwitcher, ViewportSwitcher],
  host: {
    '[class.site-header-shell--sticky]': 'isHeaderPinned()',
    '[class.site-header-shell--static]': '!isHeaderPinned()',
    '[class.site-header-shell--preview-desktop]': "currentViewport() === 'desktop'",
    '[class.site-header-shell--preview-tablet]': "currentViewport() === 'tablet'",
    '[class.site-header-shell--preview-mobile]': "currentViewport() === 'mobile'",
  },
  template: `
    <header
      class="site-header"
      [class.site-header--sticky]="isHeaderPinned()"
      [class.site-header--pinned]="isHeaderPinned()"
      [class.site-header--unpinned]="!isHeaderPinned()"
      [class.site-header--preview-tablet]="currentViewport() === 'tablet'"
      [class.site-header--preview-mobile]="currentViewport() === 'mobile'"
    >
      <div class="site-header__inner">
        <a class="site-header__brand" routerLink="/" aria-label="J3dev Portfolio home">
          <span class="site-header__logo-frame" aria-hidden="true">
            <img
              class="site-header__logo"
              src="assets/images/logos/projects/j3dev-portfolio-logo.svg"
              alt=""
              aria-hidden="true"
              (error)="showBrandLogoFallback($event)"
            />
            <span class="site-header__logo-fallback" aria-hidden="true">J3</span>
          </span>
          <span class="site-header__brand-text">J3dev Portfolio</span>
        </a>

        <nav class="site-header__nav site-nav" aria-label="Main navigation">
          <ul class="site-nav__list">
            @for (item of navigationItems; track item.path) {
              <li class="site-nav__item">
                <a
                  class="site-nav__link"
                  [class.site-nav__link--long]="item.label === 'How I Add Value'"
                  [routerLink]="item.path"
                  routerLinkActive="site-nav__link--active"
                  [routerLinkActiveOptions]="{ exact: item.path === '/' }"
                  [attr.aria-label]="item.label"
                  [attr.title]="item.label"
                >
                  <span class="site-nav__icon-frame" aria-hidden="true">
                    @if (item.iconUrl) {
                      <img
                        class="site-nav__icon"
                        [src]="item.iconUrl"
                        [alt]="''"
                        aria-hidden="true"
                        (error)="showIconFallback($event)"
                      />
                      <span
                        class="site-nav__icon-fallback site-header__icon-fallback"
                        aria-hidden="true"
                      >
                        {{ item.iconFallback }}
                      </span>
                    } @else {
                      <span
                        class="site-nav__icon-fallback site-header__icon-fallback site-header__icon-fallback--visible"
                        aria-hidden="true"
                      >
                        {{ item.iconFallback }}
                      </span>
                    }
                  </span>
                  <span class="site-nav__label">{{ item.label }}</span>
                </a>
              </li>
            }
          </ul>
        </nav>

        <div class="site-header__tools" aria-label="Display options">
          <app-theme-switcher />
          <app-viewport-switcher />
          <button
            class="site-header__pin-toggle"
            type="button"
            (click)="toggleHeaderPinned()"
            [attr.aria-label]="pinToggleLabel"
            [attr.aria-pressed]="isHeaderPinned()"
            [attr.title]="pinToggleLabel"
          >
            <img
              class="site-header__pin-icon"
              [src]="isHeaderPinned() ? pinOffIconUrl : pinIconUrl"
              [alt]="''"
              aria-hidden="true"
              (error)="showIconFallback($event)"
            />
            <span class="site-header__icon-fallback" aria-hidden="true">
              {{ isHeaderPinned() ? 'U' : 'P' }}
            </span>
          </button>
        </div>
      </div>
    </header>
  `,
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly navigationService = inject(NavigationService);
  private readonly viewportPreviewService = inject(ViewportPreviewService);

  readonly navigationItems = this.navigationService.getMainNavigation();
  readonly isHeaderPinned = this.navigationService.isHeaderPinned;
  readonly currentViewport = this.viewportPreviewService.currentViewport;

  protected readonly pinIconUrl = 'assets/images/icons/actions/pin.svg';
  protected readonly pinOffIconUrl = 'assets/images/icons/actions/pin-off.svg';

  protected get pinToggleLabel(): string {
    return this.isHeaderPinned()
      ? 'Unpin header so it scrolls with the page'
      : 'Pin header so it remains visible while scrolling';
  }

  protected toggleHeaderPinned(): void {
    this.navigationService.toggleHeaderPinned();
  }

  protected showIconFallback(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.hidden = true;
    const fallback = image.nextElementSibling as HTMLElement | null;
    fallback?.classList.add('site-header__icon-fallback--visible');
  }

  protected showBrandLogoFallback(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.hidden = true;
    const fallback = image.nextElementSibling as HTMLElement | null;
    fallback?.classList.add('site-header__logo-fallback--visible');
  }
}
