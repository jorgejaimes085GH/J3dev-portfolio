import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
        <div class="app-shell__content">
          <router-outlet />
        </div>
      </main>

      <app-footer />
    </div>
  `,
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
