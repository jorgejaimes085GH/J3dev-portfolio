import { isPlatformBrowser } from '@angular/common';
import { Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigationScrollService {
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  initializeNavigationScroll(): void {
    if (!this.isBrowser) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd) || this.hasFragment(event.urlAfterRedirects)) {
          return;
        }

        window.requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        });
      });
    });
  }

  private hasFragment(url: string): boolean {
    return this.router.parseUrl(url).fragment !== null;
  }
}
