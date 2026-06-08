import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './core/services/theme.service';
import { ViewportPreviewService } from './core/services/viewport-preview.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly themeService = inject(ThemeService);
  private readonly viewportPreviewService = inject(ViewportPreviewService);

  constructor() {
    this.themeService.initializeTheme();
    this.viewportPreviewService.initializeViewportPreview();
  }
}
