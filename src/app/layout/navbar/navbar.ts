import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavigationService } from '../../core/services/navigation.service';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { ViewportSwitcher } from '../viewport-switcher/viewport-switcher';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeSwitcher, ViewportSwitcher],
  host: {
    '[class.site-header-shell--sticky]': 'isHeaderPinned()',
    '[class.site-header-shell--static]': '!isHeaderPinned()',
  },
  template: `
    <header
      class="site-header"
      [class.site-header--sticky]="isHeaderPinned()"
      [class.site-header--pinned]="isHeaderPinned()"
      [class.site-header--unpinned]="!isHeaderPinned()"
    >
      <div class="site-header__inner">
        <a class="site-header__brand" routerLink="/" aria-label="J3dev Portfolio home">
          J3dev Portfolio
        </a>

        <nav class="site-nav" aria-label="Main navigation">
          <ul class="site-nav__list">
            @for (item of navigationItems; track item.path) {
              <li class="site-nav__item">
                <a
                  class="site-nav__link"
                  [routerLink]="item.path"
                  routerLinkActive="site-nav__link--active"
                  [routerLinkActiveOptions]="{ exact: item.path === '/' }"
                >
                  {{ item.label }}
                </a>
              </li>
            }
          </ul>
        </nav>

        <div class="site-header__tools" aria-label="Display options">
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
              {{ isHeaderPinned() ? 'Unpin' : 'Pin' }}
            </span>
          </button>
          <app-theme-switcher />
          <app-viewport-switcher />
        </div>
      </div>
    </header>
  `,
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly navigationService = inject(NavigationService);

  readonly navigationItems = this.navigationService.getMainNavigation();
  readonly isHeaderPinned = this.navigationService.isHeaderPinned;

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
    fallback?.removeAttribute('aria-hidden');
  }
}
