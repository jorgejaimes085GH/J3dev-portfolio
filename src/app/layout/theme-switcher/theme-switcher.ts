import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  template: `
    <section class="theme-switcher" aria-label="Theme switcher placeholder">
      <span class="theme-switcher__label">Theme:</span>
      <div class="theme-switcher__options" role="group" aria-label="Available theme placeholders">
        <button type="button">Dark Tech</button>
        <button type="button">Light Professional</button>
        <button type="button">Premium 3D</button>
      </div>
    </section>
  `,
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {}
