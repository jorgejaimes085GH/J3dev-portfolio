import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

import type { NavigationItem } from '../../core/constants/navigation.constants';

import { NAVBAR_ASSET_URLS } from '../../data/layout-assets.data';
import { LanguageService } from '../../core/services/language.service';
import { NavigationService } from '../../core/services/navigation.service';
import { ViewportPreviewService } from '../../core/services/viewport-preview.service';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { ViewportSwitcher } from '../viewport-switcher/viewport-switcher';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink, RouterLinkActive, ThemeSwitcher, ViewportSwitcher],
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
          (click)="closeAllMenus()"
          [attr.aria-label]="uiText().header.portfolioHome"
        >
          <span class="site-header__logo-frame" aria-hidden="true">
            <img
              class="site-header__logo"
              [src]="brandLogoUrl"
              alt=""
              aria-hidden="true"
              (error)="showBrandLogoFallback($event)"
            />
            <span class="site-header__logo-fallback" aria-hidden="true">J3</span>
          </span>
          <span class="site-header__brand-text">J3dev Portfolio</span>
        </a>

        <nav
          class="site-header__nav site-nav premium-dock"
          [class.site-nav--mobile-open]="isMobileMenuOpen()"
          [class.site-nav--preview-mobile]="currentViewport() === 'mobile'"
          [attr.aria-label]="uiText().nav.home + ' ' + uiText().header.navigation"
        >
          <button
            class="site-nav__menu-toggle"
            type="button"
            [attr.aria-expanded]="isMobileMenuOpen()"
            [attr.aria-controls]="mobileMenuId"
            [attr.aria-label]="mobileMenuAriaLabel"
            (click)="toggleMobileMenu()"
            (keydown.escape)="closeMobileMenu()"
          >
            <span class="site-nav__menu-icon" aria-hidden="true">☰</span>
            <span>{{ uiText().nav.menu }}</span>
          </button>

          <ul class="site-nav__list premium-dock__list" [id]="mobileMenuId">
            @for (item of navigationItems(); track item.path) {
              <li
                class="site-nav__item premium-dock__item"
                [class.site-nav__item--has-children]="item.children?.length"
                [class.site-nav__item--submenu-open]="isDropdownOpen(item.path)"
                (mouseenter)="openDropdown(item.path, !!item.children?.length)"
                (mouseleave)="closeDropdown(item.path, 'hover')"
                (focusout)="handleDropdownFocusOut($event, item.path)"
              >
                @if (item.children?.length) {
                  <button
                    class="site-nav__link premium-dock__link"
                    type="button"
                    [class.site-nav__link--long]="item.labelKey === 'value'"
                    [class.site-nav__link--active]="isNavigationItemActive(item)"
                    [attr.aria-label]="item.label"
                    [attr.data-label]="item.label"
                    aria-haspopup="true"
                    [attr.aria-expanded]="isDropdownOpen(item.path)"
                    [attr.aria-controls]="submenuId(item.path)"
                    (click)="toggleDropdown(item.path)"
                    (keydown.escape)="closeAllMenus()"
                  >
                    <ng-container
                      [ngTemplateOutlet]="navigationLinkContent"
                      [ngTemplateOutletContext]="{ $implicit: item, hasChildren: true }"
                    />
                  </button>
                } @else {
                  <a
                    class="site-nav__link premium-dock__link"
                    [class.site-nav__link--long]="item.labelKey === 'value'"
                    [routerLink]="item.path"
                    routerLinkActive="site-nav__link--active"
                    [routerLinkActiveOptions]="{
                      exact: item.path === '/' || item.path === '/about',
                    }"
                    [attr.aria-label]="item.label"
                    [attr.data-label]="item.label"
                    (click)="handleNavigationClick()"
                    (keydown.escape)="closeAllMenus()"
                  >
                    <ng-container
                      [ngTemplateOutlet]="navigationLinkContent"
                      [ngTemplateOutletContext]="{ $implicit: item, hasChildren: false }"
                    />
                  </a>
                }

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
                          (click)="handleNavigationClick()"
                          (keydown.escape)="closeAllMenus()"
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

          <ng-template #navigationLinkContent let-item let-hasChildren="hasChildren">
            <span class="site-nav__icon-frame premium-dock__icon-frame" aria-hidden="true">
              @if (item.iconUrl) {
                <img
                  class="site-nav__icon premium-dock__icon"
                  [src]="item.iconUrl"
                  [alt]="''"
                  aria-hidden="true"
                  (error)="showIconFallback($event)"
                />
                <span class="site-nav__icon-fallback site-header__icon-fallback premium-dock__icon" aria-hidden="true">
                  {{ item.iconFallback }}
                </span>
              } @else {
                <span
                  class="site-nav__icon-fallback site-header__icon-fallback site-header__icon-fallback--visible premium-dock__icon"
                  aria-hidden="true"
                >
                  {{ item.iconFallback }}
                </span>
              }
            </span>
            <span class="site-nav__label premium-dock__label">{{ item.label }}</span>
            @if (hasChildren) {
              <span class="site-nav__chevron premium-dock__chevron" aria-hidden="true">▾</span>
            }
          </ng-template>
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

  protected readonly brandLogoUrl = NAVBAR_ASSET_URLS.brandLogo;
  protected readonly pinIconUrl = NAVBAR_ASSET_URLS.pin;
  protected readonly pinOffIconUrl = NAVBAR_ASSET_URLS.pinOff;
  protected readonly openDropdownPath = signal<string | null>(null);
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly mobileMenuId = 'site-nav-mobile-menu';
  private readonly openDropdownSource = signal<'click' | 'hover' | null>(null);
  private readonly currentPath = signal(this.router.url.split(/[?#]/)[0]);
  private readonly mobileNavigationMediaQuery = globalThis.matchMedia?.('(max-width: 480px)');

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath.set(event.urlAfterRedirects.split(/[?#]/)[0]);
        this.closeAllMenus();
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

  protected get mobileMenuAriaLabel(): string {
    return `${this.uiText().nav.menu} ${this.uiText().header.navigation}`;
  }

  protected submenuId(path: string): string {
    return `site-nav-submenu-${path.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'home'}`;
  }

  protected isDropdownOpen(path: string): boolean {
    return this.openDropdownPath() === path;
  }

  protected openDropdown(
    path: string,
    hasChildren: boolean,
    source: 'click' | 'hover' = 'hover',
  ): void {
    if (!hasChildren || (source === 'hover' && this.isMobileNavigationMode())) {
      return;
    }

    if (this.isDropdownOpen(path) && this.openDropdownSource() === 'click' && source === 'hover') {
      return;
    }

    this.openDropdownPath.set(path);
    this.openDropdownSource.set(source);
  }

  protected closeDropdown(path?: string, source?: 'click' | 'hover'): void {
    if (source === 'hover' && this.isMobileNavigationMode()) {
      return;
    }

    if (source && this.openDropdownSource() !== source) {
      return;
    }

    if (!path || this.openDropdownPath() === path) {
      this.openDropdownPath.set(null);
      this.openDropdownSource.set(null);
    }
  }

  protected toggleDropdown(path: string): void {
    if (this.isDropdownOpen(path) && this.openDropdownSource() === 'click') {
      this.closeDropdown(path);
      return;
    }

    this.openDropdown(path, true, 'click');
  }

  protected toggleMobileMenu(): void {
    const willOpen = !this.isMobileMenuOpen();

    this.isMobileMenuOpen.set(willOpen);

    if (!willOpen) {
      this.closeDropdown();
    }
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    this.closeDropdown();
  }

  protected closeAllMenus(): void {
    this.closeDropdown();
    this.closeMobileMenu();
  }

  protected handleNavigationClick(): void {
    this.closeAllMenus();
  }

  protected isNavigationItemActive(item: NavigationItem): boolean {
    const currentPath = this.currentPath();

    if (item.children?.some((child) => this.isNavigationPathActive(child.path, currentPath))) {
      return true;
    }

    return this.isNavigationPathActive(item.path, currentPath);
  }

  private isNavigationPathActive(itemPath: string, currentPath: string): boolean {
    return itemPath === currentPath || (itemPath === '/why-hire-me' && currentPath === '/value');
  }

  protected handleDropdownFocusOut(event: FocusEvent, path: string): void {
    const nextFocusedElement = event.relatedTarget as Node | null;
    const currentItem = event.currentTarget as HTMLElement;

    if (this.isMobileNavigationMode()) {
      return;
    }

    if (!nextFocusedElement || !currentItem.contains(nextFocusedElement)) {
      this.closeDropdown(path);
    }
  }

  private isMobileNavigationMode(): boolean {
    return this.currentViewport() === 'mobile' || this.mobileNavigationMediaQuery?.matches === true;
  }

  @HostListener('document:pointerdown', ['$event'])
  protected closeDropdownOnOutsidePointer(event: PointerEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.closeAllMenus();
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
