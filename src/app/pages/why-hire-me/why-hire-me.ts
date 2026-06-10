import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { VALUE_PAGE_DATA } from '../../data/value.data';

@Component({
  selector: 'app-why-hire-me',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="value-page" aria-labelledby="value-page-title">
      <section class="value-section value-introduction" aria-labelledby="value-page-title">
        <div class="value-section__header value-introduction__content">
          <p class="value-section__eyebrow">Professional Impact</p>
          <h1 id="value-page-title">{{ valueData.introduction.title }}</h1>
          <p class="value-introduction__summary">{{ valueData.introduction.introduction }}</p>
          <p>{{ valueData.introduction.supportingStatement }}</p>
        </div>
      </section>

      <section class="value-section" aria-labelledby="value-pillars-title">
        <div class="value-section__header">
          <p class="value-section__eyebrow">Value Pillars</p>
          <h2 id="value-pillars-title">Practical habits that support delivery</h2>
          <p>
            These habits connect technical decisions with production reliability, maintainability,
            and clear business context.
          </p>
        </div>

        <div class="value-card-grid value-card-grid--three">
          @for (pillar of valueData.valuePillars; track pillar.title) {
            <article class="value-card">
              @if (pillar.categoryLabel) {
                <p class="value-card__label">{{ pillar.categoryLabel }}</p>
              }
              <h3>{{ pillar.title }}</h3>
              <p>{{ pillar.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="value-section" aria-labelledby="contribution-areas-title">
        <div class="value-section__header">
          <p class="value-section__eyebrow">Real-World Contribution Areas</p>
          <h2 id="contribution-areas-title">Areas where technical work becomes team value</h2>
          <p>
            These contribution areas reflect the types of work Jorge has handled across backend
            development, databases, modernization, and enterprise systems.
          </p>
        </div>

        <div class="value-card-grid value-card-grid--three">
          @for (area of valueData.contributionAreas; track area.title) {
            <article class="value-card">
              <h3>{{ area.title }}</h3>
              <p>{{ area.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="value-section" aria-labelledby="team-contribution-title">
        <div class="value-section__header">
          <p class="value-section__eyebrow">Team Contribution</p>
          <h2 id="team-contribution-title">Value beyond writing code</h2>
          <p>
            Team value also comes from communication, documentation, knowledge sharing, and
            decisions that make future maintenance easier.
          </p>
        </div>

        <div class="value-card-grid value-card-grid--four">
          @for (contribution of valueData.teamContributions; track contribution.title) {
            <article class="value-card">
              <h3>{{ contribution.title }}</h3>
              <p>{{ contribution.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="value-section value-highlight" aria-labelledby="philosophy-summary-title">
        <div class="value-highlight__content">
          <p class="value-section__eyebrow">Engineering Philosophy</p>
          <h2 id="philosophy-summary-title">{{ valueData.philosophySummary.title }}</h2>
          <p>{{ valueData.philosophySummary.description }}</p>
        </div>

        <ul class="philosophy-list" aria-label="Engineering philosophy principles">
          @for (principle of valueData.philosophySummary.principles; track principle) {
            <li>{{ principle }}</li>
          }
        </ul>
      </section>

      <section class="value-cta" aria-labelledby="evidence-navigation-title">
        <div>
          <p class="value-section__eyebrow">Evidence Navigation</p>
          <h2 id="evidence-navigation-title">Continue toward supporting portfolio evidence</h2>
          <p>
            Continue into the supporting sections to review project context, skill evidence, and the
            technical journey behind the portfolio narrative.
          </p>
        </div>

        <nav class="value-cta__actions" aria-label="Evidence navigation links">
          @for (link of valueData.evidenceLinks; track link.route) {
            <a class="button-link" [class.button-link--primary]="$first" [routerLink]="link.route">
              {{ link.label }}
            </a>
          }
        </nav>
      </section>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .value-section,
      .value-cta {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .value-introduction {
        padding-top: 4rem;
      }

      .value-section__header {
        max-width: 48rem;
        margin-bottom: 1.5rem;
      }

      .value-introduction__content {
        margin-bottom: 0;
      }

      .value-section__eyebrow,
      .value-card__label {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .value-card__label {
        font-size: 0.85rem;
      }

      .value-section h1,
      .value-section h2,
      .value-cta h2 {
        margin: 0;
      }

      .value-introduction__summary {
        font-size: 1.15rem;
      }

      .value-card-grid {
        display: grid;
        gap: 1rem;
      }

      .value-card-grid--three {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .value-card-grid--four {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .value-card {
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.75rem;
      }

      .value-card h3 {
        margin: 0;
      }

      .value-highlight {
        display: grid;
        grid-template-columns: minmax(0, 1.5fr) minmax(16rem, 0.8fr);
        gap: 1.5rem;
        align-items: start;
        border: 1px solid var(--app-border-color);
        border-radius: 1rem;
      }

      .value-highlight__content {
        max-width: 44rem;
      }

      .philosophy-list {
        display: grid;
        gap: 0.75rem;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .philosophy-list li {
        padding: 0.75rem 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
      }

      .value-section__header p:last-child,
      .value-introduction__content p:last-child,
      .value-card p:last-child,
      .value-highlight p:last-child,
      .value-cta p:last-child {
        margin-bottom: 0;
      }

      .value-cta {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        justify-content: space-between;
      }

      .value-cta > div:first-child {
        max-width: 44rem;
      }

      .value-cta__actions {
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
        .value-card-grid--three,
        .value-card-grid--four,
        .value-highlight {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .value-cta {
          align-items: flex-start;
          flex-direction: column;
        }

        .value-cta__actions {
          justify-content: flex-start;
        }
      }

      @media (max-width: 600px) {
        .value-section,
        .value-cta {
          padding: 2.5rem 1rem;
        }

        .value-card-grid--three,
        .value-card-grid--four,
        .value-highlight {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class WhyHireMe {
  protected readonly valueData = VALUE_PAGE_DATA;
}
