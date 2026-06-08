import { Component } from '@angular/core';

import { HERO_SLIDES } from '../../data/hero-slides.data';
import { HeroSlider } from '../../shared/components/hero-slider/hero-slider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSlider],
  template: `
    <app-hero-slider [slides]="heroSlides" />

    <section class="home-preview" aria-labelledby="how-i-add-value-title">
      <p class="home-preview__label">Preview</p>
      <h2 id="how-i-add-value-title">How I Add Value</h2>
      <p>
        Placeholder for evidence-based strengths in backend engineering, modernization, and
        long-term maintainability.
      </p>
    </section>

    <section class="home-preview" aria-labelledby="featured-projects-title">
      <p class="home-preview__label">Preview</p>
      <h2 id="featured-projects-title">Featured Projects</h2>
      <p>Placeholder for selected production and showcase projects.</p>
    </section>

    <section class="home-preview" aria-labelledby="core-skills-title">
      <p class="home-preview__label">Preview</p>
      <h2 id="core-skills-title">Core Skills</h2>
      <p>Placeholder for .NET, SQL Server, APIs, Angular, and related engineering practices.</p>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .home-preview {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .home-preview__label {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .home-preview h2 {
        margin: 0;
        font-size: clamp(1.75rem, 4vw, 2.75rem);
      }

      .home-preview p:last-child {
        max-width: 42rem;
        margin-bottom: 0;
      }

      @media (max-width: 760px) {
        .home-preview {
          padding: 2.5rem 1rem;
        }
      }
    `,
  ],
})
export class Home {
  protected readonly heroSlides = HERO_SLIDES;
}
