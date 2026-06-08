import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, Renderer2, RendererFactory2, inject, signal } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

import {
  SUPPORTED_VIEWPORT_PREVIEWS,
  ViewportPreviewId,
} from '../../models/viewport-preview.model';

const VIEWPORT_PREVIEW_STORAGE_KEY = 'j3dev-portfolio-viewport-preview';
const VIEWPORT_PREVIEW_CLASS_PREFIX = 'viewport-preview--';
const DEFAULT_VIEWPORT_PREVIEW: ViewportPreviewId = 'desktop';

@Injectable({ providedIn: 'root' })
export class ViewportPreviewService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
  private readonly viewportIds = SUPPORTED_VIEWPORT_PREVIEWS.map((viewport) => viewport.id);
  private readonly viewportClasses = this.viewportIds.map(
    (viewportId) => `${VIEWPORT_PREVIEW_CLASS_PREFIX}${viewportId}`,
  );
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly selectedViewport = signal<ViewportPreviewId>(DEFAULT_VIEWPORT_PREVIEW);

  readonly currentViewport = this.selectedViewport.asReadonly();
  readonly viewportOptions = SUPPORTED_VIEWPORT_PREVIEWS;

  initializeViewportPreview(): void {
    const viewport = this.getStoredViewport() ?? DEFAULT_VIEWPORT_PREVIEW;

    this.applyViewport(viewport, false);
  }

  setViewport(viewport: ViewportPreviewId): void {
    if (!this.isSupportedViewport(viewport)) {
      return;
    }

    this.applyViewport(viewport, true);
  }

  isActiveViewport(viewport: ViewportPreviewId): boolean {
    return this.currentViewport() === viewport;
  }

  getViewportClass(viewport: ViewportPreviewId = this.currentViewport()): string {
    return `${VIEWPORT_PREVIEW_CLASS_PREFIX}${viewport}`;
  }

  private applyViewport(viewport: ViewportPreviewId, persistViewport: boolean): void {
    this.selectedViewport.set(viewport);
    this.applyViewportClass(viewport);

    if (persistViewport) {
      this.storeViewport(viewport);
    }
  }

  private applyViewportClass(viewport: ViewportPreviewId): void {
    const rootElement = this.document.documentElement;

    for (const viewportClass of this.viewportClasses) {
      this.renderer.removeClass(rootElement, viewportClass);
    }

    this.renderer.addClass(rootElement, this.getViewportClass(viewport));
  }

  private getStoredViewport(): ViewportPreviewId | null {
    if (!this.isBrowser) {
      return null;
    }

    const storedViewport = window.localStorage.getItem(VIEWPORT_PREVIEW_STORAGE_KEY);

    return this.isSupportedViewport(storedViewport) ? storedViewport : null;
  }

  private storeViewport(viewport: ViewportPreviewId): void {
    if (!this.isBrowser) {
      return;
    }

    window.localStorage.setItem(VIEWPORT_PREVIEW_STORAGE_KEY, viewport);
  }

  private isSupportedViewport(viewport: string | null): viewport is ViewportPreviewId {
    return this.viewportIds.includes(viewport as ViewportPreviewId);
  }
}
