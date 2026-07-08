import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  DestroyRef,
  Injectable,
  Renderer2,
  RendererFactory2,
  computed,
  inject,
  signal,
} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

import {
  SUPPORTED_VIEWPORT_PREVIEWS,
  ViewportPreviewId,
} from '../../models/viewport-preview.model';

const VIEWPORT_PREVIEW_STORAGE_KEY = 'j3dev-portfolio-viewport-preview';
const VIEWPORT_PREVIEW_CLASS_PREFIX = 'viewport-preview--';
const DEFAULT_VIEWPORT_PREVIEW: ViewportPreviewId = 'desktop';
const REAL_MOBILE_VIEWPORT_QUERY = '(max-width: 760px) and (pointer: coarse)';

@Injectable({ providedIn: 'root' })
export class ViewportPreviewService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
  private readonly viewportIds = SUPPORTED_VIEWPORT_PREVIEWS.map((viewport) => viewport.id);
  private readonly viewportClasses = this.viewportIds.map(
    (viewportId) => `${VIEWPORT_PREVIEW_CLASS_PREFIX}${viewportId}`,
  );
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly selectedViewport = signal<ViewportPreviewId>(DEFAULT_VIEWPORT_PREVIEW);
  private readonly realMobileDevice = signal(false);
  private mobileDeviceMediaQuery: MediaQueryList | null = null;

  readonly isRealMobileDevice = this.realMobileDevice.asReadonly();
  readonly currentViewport = computed<ViewportPreviewId | null>(() =>
    this.realMobileDevice() ? null : this.selectedViewport(),
  );
  readonly viewportOptions = SUPPORTED_VIEWPORT_PREVIEWS;

  initializeViewportPreview(): void {
    this.initializeRealMobileDetection();

    const viewport = this.getStoredViewport() ?? DEFAULT_VIEWPORT_PREVIEW;

    this.applyViewport(viewport, false);
  }

  setViewport(viewport: ViewportPreviewId): void {
    if (this.realMobileDevice() || !this.isSupportedViewport(viewport)) {
      return;
    }

    this.applyViewport(viewport, true);
  }

  isActiveViewport(viewport: ViewportPreviewId): boolean {
    return !this.realMobileDevice() && this.currentViewport() === viewport;
  }

  getViewportClass(viewport: ViewportPreviewId | null = this.currentViewport()): string {
    return viewport ? `${VIEWPORT_PREVIEW_CLASS_PREFIX}${viewport}` : '';
  }

  private applyViewport(viewport: ViewportPreviewId, persistViewport: boolean): void {
    this.selectedViewport.set(viewport);
    this.applyViewportClass(this.realMobileDevice() ? null : viewport);

    if (persistViewport) {
      this.storeViewport(viewport);
    }
  }

  private applyViewportClass(viewport: ViewportPreviewId | null): void {
    const rootElement = this.document.documentElement;

    for (const viewportClass of this.viewportClasses) {
      this.renderer.removeClass(rootElement, viewportClass);
    }

    const viewportClass = this.getViewportClass(viewport);

    if (viewportClass) {
      this.renderer.addClass(rootElement, viewportClass);
    }
  }

  private initializeRealMobileDetection(): void {
    if (!this.isBrowser || this.mobileDeviceMediaQuery) {
      return;
    }

    this.mobileDeviceMediaQuery = window.matchMedia(REAL_MOBILE_VIEWPORT_QUERY);
    this.updateRealMobileDeviceState(this.mobileDeviceMediaQuery.matches);

    const handleMobileDeviceChange = (event: MediaQueryListEvent): void => {
      this.updateRealMobileDeviceState(event.matches);
    };

    this.mobileDeviceMediaQuery.addEventListener('change', handleMobileDeviceChange);

    this.destroyRef.onDestroy(() => {
      this.mobileDeviceMediaQuery?.removeEventListener('change', handleMobileDeviceChange);
    });
  }

  private updateRealMobileDeviceState(isRealMobileDevice: boolean): void {
    this.realMobileDevice.set(isRealMobileDevice);
    this.applyViewportClass(isRealMobileDevice ? null : this.selectedViewport());
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
