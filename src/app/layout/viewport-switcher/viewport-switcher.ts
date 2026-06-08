import { Component } from '@angular/core';

@Component({
  selector: 'app-viewport-switcher',
  standalone: true,
  template: `
    <section class="viewport-switcher" aria-label="Viewport switcher placeholder">
      <span class="viewport-switcher__label">Preview:</span>
      <div
        class="viewport-switcher__options"
        role="group"
        aria-label="Available viewport placeholders"
      >
        <button type="button">Mobile</button>
        <button type="button">Tablet</button>
        <button type="button">Desktop</button>
      </div>
    </section>
  `,
  styleUrl: './viewport-switcher.scss',
})
export class ViewportSwitcher {}
