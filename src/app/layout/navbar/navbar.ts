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
    <header>
      <nav aria-label="Main navigation">
        <a routerLink="/">J3dev Portfolio</a>
        <ul>
          @for (item of navigationItems; track item.path) {
            <li>
              <a
                [routerLink]="item.path"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: item.path === '/' }"
              >
                {{ item.label }}
              </a>
            </li>
          }
        </ul>
      </nav>
      <app-theme-switcher />
      <app-viewport-switcher />
    </header>
  `,
})
export class Navbar {
  private readonly navigationService = inject(NavigationService);

  readonly navigationItems = this.navigationService.getMainNavigation();
}
