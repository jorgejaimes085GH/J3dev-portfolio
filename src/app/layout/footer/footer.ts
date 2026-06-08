import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <p class="site-footer__project">J3dev Portfolio</p>
        <p class="site-footer__copyright">Copyright placeholder.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.scss',
})
export class Footer {}
