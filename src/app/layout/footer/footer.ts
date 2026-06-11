import { Component, inject } from '@angular/core';

import { ViewportPreviewService } from '../../core/services/viewport-preview.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  host: {
    '[class.site-footer-shell--preview-desktop]': "currentViewport() === 'desktop'",
    '[class.site-footer-shell--preview-tablet]': "currentViewport() === 'tablet'",
    '[class.site-footer-shell--preview-mobile]': "currentViewport() === 'mobile'",
  },
  template: `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <p class="site-footer__project">J3dev Portfolio</p>
        <p class="site-footer__copyright">Copyright information pending final publication.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly viewportPreviewService = inject(ViewportPreviewService);

  readonly currentViewport = this.viewportPreviewService.currentViewport;
}
