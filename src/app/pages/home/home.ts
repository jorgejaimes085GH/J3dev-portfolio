import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HERO_SLIDES } from '../../data/hero-slides.data';
import {
  HOME_PROJECT_PREVIEWS,
  HOME_SKILL_PREVIEWS,
  HOME_VALUE_PREVIEWS,
} from '../../data/home-preview.data';
import { HeroSlider } from '../../shared/components/hero-slider/hero-slider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSlider, RouterLink],
  template: `
    <app-hero-slider [slides]="heroSlides" />

    <section class="home-section" aria-labelledby="how-i-add-value-title">
      <div class="home-section__header">
        <p class="home-section__eyebrow">How I Add Value</p>
        <h2 id="how-i-add-value-title">Practical engineering habits for long-term teams</h2>
        <p>
          A recruiter-focused overview of the way I approach software work: understand the
          problem, keep architecture clear, and build solutions that can keep evolving.
        </p>
      </div>

      <div class="preview-grid preview-grid--three">
        @for (value of valuePreviews; track value.title) {
          <article class="preview-card">
            @if (value.label) {
              <p class="preview-card__label">{{ value.label }}</p>
            }
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </article>
        }
      </div>
    </section>

    <section class="home-section" aria-labelledby="featured-projects-title">
      <div class="home-section__header">
        <p class="home-section__eyebrow">Featured Projects</p>
        <h2 id="featured-projects-title">Selected work with confidentiality respected</h2>
        <p>
          These previews introduce the main project stories without exposing private source code,
          client-sensitive implementation details, or proprietary information.
        </p>
      </div>

      <div class="preview-grid preview-grid--three">
        @for (project of projectPreviews; track project.name) {
          <article class="preview-card project-preview">
            <p class="preview-card__label">{{ project.statusLabel }}</p>
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>

            <ul class="badge-list" [attr.aria-label]="project.name + ' key technologies'">
              @for (technology of project.technologies; track technology) {
                <li>{{ technology }}</li>
              }
            </ul>

            <a class="text-link" [routerLink]="project.route">View {{ project.name }} context</a>
          </article>
        }
      </div>
    </section>

    <section class="home-section" aria-labelledby="core-skills-title">
      <div class="home-section__header">
        <p class="home-section__eyebrow">Core Skills</p>
        <h2 id="core-skills-title">Backend-centered skills with fullstack support</h2>
        <p>
          The skills preview avoids percentages and vague levels. Each item is presented as a
          practical capability connected to production-minded software work.
        </p>
      </div>

      <div class="skill-grid" aria-label="Core skill preview list">
        @for (skill of skillPreviews; track skill.name) {
          <article class="skill-card">
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.context }}</p>
          </article>
        }
      </div>
    </section>

    <section class="home-cta" aria-labelledby="home-cta-title">
      <div>
        <p class="home-section__eyebrow">Explore More</p>
        <h2 id="home-cta-title">Continue into the project and skills evidence</h2>
        <p>
          Review selected project context or explore the technical skills that support Jorge's
          backend and fullstack development work.
        </p>
      </div>

      <div class="home-cta__actions" aria-label="Home exploration links">
        <a class="button-link button-link--primary" routerLink="/projects">View Projects</a>
        <a class="button-link" routerLink="/skills">Explore Skills</a>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .home-section,
      .home-cta {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .home-section__header {
        max-width: 48rem;
        margin-bottom: 1.5rem;
      }

      .home-section__eyebrow,
      .preview-card__label {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .preview-card__label {
        font-size: 0.85rem;
      }

      .home-section h2,
      .home-cta h2 {
        margin: 0;
      }

      .home-section__header p:last-child,
      .home-cta p:last-child,
      .preview-card p:last-child,
      .skill-card p:last-child {
        margin-bottom: 0;
      }

      .preview-grid,
      .skill-grid {
        display: grid;
        gap: 1rem;
      }

      .preview-grid--three {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .skill-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .preview-card,
      .skill-card {
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.75rem;
      }

      .preview-card h3,
      .skill-card h3 {
        margin: 0;
      }

      .project-preview {
        display: flex;
        flex-direction: column;
      }

      .badge-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
        padding: 0;
        list-style: none;
      }

      .badge-list li {
        padding: 0.35rem 0.55rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        font-size: 0.9rem;
      }

      .text-link {
        margin-top: auto;
        font-weight: 700;
      }

      .home-cta {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        justify-content: space-between;
      }

      .home-cta > div:first-child {
        max-width: 44rem;
      }

      .home-cta__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: flex-end;
      }

      .button-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.75rem;
        padding: 0.7rem 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.5rem;
        text-decoration: none;
      }

      .button-link--primary {
        color: var(--app-background-color);
        background: var(--app-link-color);
        border-color: var(--app-link-color);
      }

      @media (max-width: 900px) {
        .preview-grid--three,
        .skill-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .home-cta {
          align-items: flex-start;
          flex-direction: column;
        }

        .home-cta__actions {
          justify-content: flex-start;
        }
      }

      @media (max-width: 600px) {
        .home-section,
        .home-cta {
          padding: 2.5rem 1rem;
        }

        .preview-grid--three,
        .skill-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class Home {
  protected readonly heroSlides = HERO_SLIDES;
  protected readonly valuePreviews = HOME_VALUE_PREVIEWS;
  protected readonly projectPreviews = HOME_PROJECT_PREVIEWS;
  protected readonly skillPreviews = HOME_SKILL_PREVIEWS;
}
