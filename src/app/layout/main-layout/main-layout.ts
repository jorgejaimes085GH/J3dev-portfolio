import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ViewportPreviewService } from '../../core/services/viewport-preview.service';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Footer, Navbar, RouterOutlet],
  template: `
    <div class="app-shell">
      <app-navbar />

      <main class="app-shell__main" id="main-content">
        <div class="viewport-preview" [class]="viewportPreviewClasses()">
          <div class="app-shell__content">
            <router-outlet />
          </div>
        </div>
      </main>

      <app-footer />
    </div>
  `,
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  private readonly viewportPreviewService = inject(ViewportPreviewService);

  readonly viewportPreviewClasses = computed(
    () =>
      `viewport-preview ${this.viewportPreviewService.getViewportClass(this.viewportPreviewService.currentViewport())}`,
  );
}
