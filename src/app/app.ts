import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LanguageService } from './core/services/language.service';
import { ThemeService } from './core/services/theme.service';
import { ViewportPreviewService } from './core/services/viewport-preview.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);
  private readonly viewportPreviewService = inject(ViewportPreviewService);

  constructor() {
    this.languageService.initializeLanguage();
    this.themeService.initializeTheme();
    this.viewportPreviewService.initializeViewportPreview();
  }
}
