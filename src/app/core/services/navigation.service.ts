import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

import { MAIN_NAVIGATION, NavigationItem } from '../constants/navigation.constants';
import { LanguageService } from './language.service';

const HEADER_PINNED_STORAGE_KEY = 'j3dev-portfolio-header-pinned';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private readonly languageService = inject(LanguageService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly headerPinned = signal<boolean>(true);

  readonly isHeaderPinned = this.headerPinned.asReadonly();
  readonly mainNavigation = computed<NavigationItem[]>(() => {
    const navText = this.languageService.uiText().nav;

    return MAIN_NAVIGATION.map((item) => ({
      ...item,
      label: navText[item.labelKey],
    }));
  });

  constructor() {
    this.headerPinned.set(this.getStoredHeaderPinned());
  }

  toggleHeaderPinned(): void {
    this.setHeaderPinned(!this.headerPinned());
  }

  setHeaderPinned(isPinned: boolean): void {
    this.headerPinned.set(isPinned);
    this.storeHeaderPinned(isPinned);
  }

  private getStoredHeaderPinned(): boolean {
    if (!this.isBrowser) {
      return true;
    }

    return window.localStorage.getItem(HEADER_PINNED_STORAGE_KEY) !== 'false';
  }

  private storeHeaderPinned(isPinned: boolean): void {
    if (!this.isBrowser) {
      return;
    }

    window.localStorage.setItem(HEADER_PINNED_STORAGE_KEY, String(isPinned));
  }
}
