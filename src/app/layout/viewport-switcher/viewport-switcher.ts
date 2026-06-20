import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/services/language.service';
import { ViewportPreviewService } from '../../core/services/viewport-preview.service';
import { ViewportPreviewId } from '../../models/viewport-preview.model';

@Component({
  selector: 'app-viewport-switcher',
  standalone: true,
  template: `
    <section class="viewport-switcher" [attr.aria-label]="uiText().header.preview">
      <span class="viewport-switcher__label">{{ uiText().header.preview }}:</span>
      <div
        class="viewport-switcher__options"
        role="group"
        [attr.aria-label]="uiText().header.preview"
      >
        @for (viewport of viewportOptions; track viewport.id) {
          <button
            type="button"
            class="viewport-switcher__button"
            [class.viewport-switcher__button--active]="isActiveViewport(viewport.id)"
            [attr.aria-pressed]="isActiveViewport(viewport.id)"
            [attr.aria-label]="viewportLabel(viewport.id) + ' ' + uiText().header.viewportPreviewSuffix"
            [attr.title]="viewportLabel(viewport.id) + ' ' + uiText().header.previewTitleSuffix"
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
  private readonly languageService = inject(LanguageService);
  private readonly viewportPreviewService = inject(ViewportPreviewService);

  readonly viewportOptions = this.viewportPreviewService.viewportOptions;
  readonly uiText = this.languageService.uiText;

  selectViewport(viewport: ViewportPreviewId): void {
    this.viewportPreviewService.setViewport(viewport);
  }

  viewportLabel(viewport: ViewportPreviewId): string {
    return this.uiText().header[viewport];
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
