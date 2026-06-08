import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavigationService } from '../../core/services/navigation.service';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { ViewportSwitcher } from '../viewport-switcher/viewport-switcher';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeSwitcher, ViewportSwitcher],
  template: `
    <header class="site-header">
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
}
