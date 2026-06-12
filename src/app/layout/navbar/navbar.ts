import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

import { LanguageService } from '../../core/services/language.service';
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
        <a
          class="site-header__brand"
          routerLink="/"
          (click)="closeDropdown()"
          [attr.aria-label]="uiText().header.portfolioHome"
        >
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

        <nav
          class="site-header__nav site-nav"
          [attr.aria-label]="uiText().nav.home + ' ' + uiText().header.navigation"
        >
          <ul class="site-nav__list">
            @for (item of navigationItems(); track item.path) {
              <li
                class="site-nav__item"
                [class.site-nav__item--has-children]="item.children?.length"
                [class.site-nav__item--submenu-open]="isDropdownOpen(item.path)"
                (mouseenter)="openDropdown(item.path, !!item.children?.length)"
                (mouseleave)="closeDropdown(item.path)"
                (focusin)="openDropdown(item.path, !!item.children?.length)"
                (focusout)="handleDropdownFocusOut($event, item.path)"
              >
                <a
                  class="site-nav__link"
                  [class.site-nav__link--long]="item.labelKey === 'value'"
                  [routerLink]="item.path"
                  routerLinkActive="site-nav__link--active"
                  [routerLinkActiveOptions]="{ exact: item.path === '/' || item.path === '/about' }"
                  [attr.aria-label]="item.label"
                  [attr.title]="item.label"
                  [attr.aria-haspopup]="item.children?.length ? 'true' : null"
                  [attr.aria-expanded]="item.children?.length ? isDropdownOpen(item.path) : null"
                  [attr.aria-controls]="item.children?.length ? submenuId(item.path) : null"
                  (click)="handleNavigationClick(item.path, !!item.children?.length)"
                  (keydown.escape)="closeDropdown(item.path)"
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
                  @if (item.children?.length) {
                    <span class="site-nav__chevron" aria-hidden="true">▾</span>
                  }
                </a>

                @if (item.children?.length) {
                  <ul
                    class="site-nav__submenu"
                    [id]="submenuId(item.path)"
                    [attr.aria-label]="item.label"
                  >
                    @for (child of item.children; track child.path) {
                      <li class="site-nav__submenu-item">
                        <a
                          class="site-nav__submenu-link"
                          [class.site-nav__submenu-link--long]="child.labelKey === 'value'"
                          [routerLink]="child.path"
                          routerLinkActive="site-nav__submenu-link--active"
                          [routerLinkActiveOptions]="{ exact: true }"
                          [attr.aria-label]="child.label"
                          [attr.title]="child.label"
                          (click)="closeDropdown(item.path)"
                          (keydown.escape)="closeDropdown(item.path)"
                        >
                          {{ child.label }}
                        </a>
                      </li>
                    }
                  </ul>
                }
              </li>
            }
          </ul>
        </nav>

        <div
          class="site-header__tools"
          [attr.aria-label]="uiText().header.theme + ' / ' + uiText().header.preview"
        >
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
          <button
            class="site-header__language-toggle"
            type="button"
            (click)="toggleLanguage()"
            [attr.aria-label]="languageToggleLabel"
            [attr.title]="languageToggleLabel"
          >
            {{ languageCodeLabel }}
          </button>
        </div>
      </div>
    </header>
  `,
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly languageService = inject(LanguageService);
  private readonly navigationService = inject(NavigationService);
  private readonly viewportPreviewService = inject(ViewportPreviewService);
  private readonly router = inject(Router);

  readonly navigationItems = this.navigationService.mainNavigation;
  readonly uiText = this.languageService.uiText;
  readonly currentLanguage = this.languageService.currentLanguage;
  readonly isHeaderPinned = this.navigationService.isHeaderPinned;
  readonly currentViewport = this.viewportPreviewService.currentViewport;

  protected readonly pinIconUrl = 'assets/images/icons/actions/pin.svg';
  protected readonly pinOffIconUrl = 'assets/images/icons/actions/pin-off.svg';
  protected readonly openDropdownPath = signal<string | null>(null);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeDropdown();
      }
    });
  }

  protected get pinToggleLabel(): string {
    return this.isHeaderPinned() ? this.uiText().header.unpin : this.uiText().header.pin;
  }

  protected get languageCodeLabel(): string {
    return this.languageService.getLanguageCodeLabel();
  }

  protected get languageToggleLabel(): string {
    const nextLanguage =
      this.currentLanguage() === 'en' ? this.uiText().header.spanish : this.uiText().header.english;

    return `${this.uiText().header.language}: ${nextLanguage}`;
  }

  protected submenuId(path: string): string {
    return `site-nav-submenu-${path.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'home'}`;
  }

  protected isDropdownOpen(path: string): boolean {
    return this.openDropdownPath() === path;
  }

  protected openDropdown(path: string, hasChildren: boolean): void {
    if (!hasChildren) {
      return;
    }

    this.openDropdownPath.set(path);
  }

  protected closeDropdown(path?: string): void {
    if (!path || this.openDropdownPath() === path) {
      this.openDropdownPath.set(null);
    }
  }

  protected handleNavigationClick(path: string, hasChildren: boolean): void {
    if (!hasChildren) {
      this.closeDropdown();
      return;
    }

    this.openDropdown(path, true);
  }

  protected handleDropdownFocusOut(event: FocusEvent, path: string): void {
    const nextFocusedElement = event.relatedTarget as Node | null;
    const currentItem = event.currentTarget as HTMLElement;

    if (!nextFocusedElement || !currentItem.contains(nextFocusedElement)) {
      this.closeDropdown(path);
    }
  }

  @HostListener('document:pointerdown', ['$event'])
  protected closeDropdownOnOutsidePointer(event: PointerEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.closeDropdown();
    }
  }

  protected toggleHeaderPinned(): void {
    this.navigationService.toggleHeaderPinned();
  }

  protected toggleLanguage(): void {
    this.languageService.toggleLanguage();
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
