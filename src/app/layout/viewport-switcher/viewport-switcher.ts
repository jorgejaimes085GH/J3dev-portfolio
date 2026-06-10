import { Component, inject } from '@angular/core';

import { ViewportPreviewService } from '../../core/services/viewport-preview.service';
import { ViewportPreviewId } from '../../models/viewport-preview.model';

@Component({
  selector: 'app-viewport-switcher',
  standalone: true,
  template: `
    <section class="viewport-switcher" aria-label="Viewport preview selector">
      <span class="viewport-switcher__label">Preview:</span>
      <div class="viewport-switcher__options" role="group" aria-label="Available viewport previews">
        @for (viewport of viewportOptions; track viewport.id) {
          <button
            type="button"
            class="viewport-switcher__button"
            [class.viewport-switcher__button--active]="isActiveViewport(viewport.id)"
            [attr.aria-pressed]="isActiveViewport(viewport.id)"
            [attr.aria-label]="viewport.label + ' viewport preview'"
            [attr.title]="viewport.label + ' preview'"
            (click)="selectViewport(viewport.id)"
          >
            @if (viewport.iconUrl) {
              <img
                class="viewport-switcher__icon"
                [src]="viewport.iconUrl"
                [alt]="''"
                aria-hidden="true"
                (error)="showIconFallback($event)"
              />
            }
            <span class="viewport-switcher__fallback">{{ viewport.iconFallback }}</span>
          </button>
        }
      </div>
    </section>
  `,
  styleUrl: './viewport-switcher.scss',
})
export class ViewportSwitcher {
  private readonly viewportPreviewService = inject(ViewportPreviewService);

  readonly viewportOptions = this.viewportPreviewService.viewportOptions;

  selectViewport(viewport: ViewportPreviewId): void {
    this.viewportPreviewService.setViewport(viewport);
  }

  isActiveViewport(viewport: ViewportPreviewId): boolean {
    return this.viewportPreviewService.isActiveViewport(viewport);
  }

  showIconFallback(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.hidden = true;
    const fallback = image.nextElementSibling as HTMLElement | null;
    fallback?.classList.add('viewport-switcher__fallback--visible');
    fallback?.removeAttribute('aria-hidden');
  }
}
