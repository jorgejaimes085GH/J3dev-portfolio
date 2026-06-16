import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  JOURNEY_CTA_LINKS,
  JOURNEY_EVOLUTION_PHASES,
  JOURNEY_INSIGHTS,
  JOURNEY_STAGES,
} from '../../data/journey.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';
import { PROJECTS } from '../../data/projects.data';
import { JourneyStage } from '../../models/journey.model';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="journey-page" aria-labelledby="journey-page-title">
      <section class="journey-section journey-hero" aria-labelledby="journey-page-title">
        <div class="journey-section__header journey-hero__content">
          <p class="journey-section__eyebrow">{{ text().eyebrow }}</p>
          <h1 id="journey-page-title">{{ text().title }}</h1>
          <p class="journey-hero__summary">{{ text().summary }}</p>
        </div>
      </section>

      <section class="journey-section" aria-labelledby="journey-timeline-title">
        <div class="journey-section__header">
          <p class="journey-section__eyebrow">{{ text().timelineEyebrow }}</p>
          <h2 id="journey-timeline-title">{{ text().timelineTitle }}</h2>
          <p>{{ text().timelineIntro }}</p>
        </div>

        <ol class="journey-timeline" [attr.aria-label]="text().timelineAria">
          @for (stage of stages(); track stage.id; let stageIndex = $index) {
            <li class="journey-stage">
              <article class="journey-stage__card" [attr.aria-labelledby]="stage.id + '-title'">
                <div class="journey-stage__meta">
                  <span class="journey-stage__year">{{ stage.yearLabel }}</span>
                  <span class="journey-stage__number"
                    >{{ text().stagePrefix }} {{ stageIndex }}</span
                  >
                  <span class="journey-stage__period">{{ stage.periodLabel }}</span>
                </div>

                <div class="journey-stage__body">
                  <h3 [id]="stage.id + '-title'">{{ stage.title }}</h3>
                  <p>{{ stage.summary }}</p>

                  <div class="journey-stage__group" [attr.aria-label]="text().focusAria">
                    <h4>{{ text().focus }}</h4>
                    <ul class="tag-list">
                      @for (focusArea of stage.focusAreas; track focusArea) {
                        <li>{{ focusArea }}</li>
                      }
                    </ul>
                  </div>

                  <div class="journey-stage__learning">
                    <h4>{{ text().keyLearning }}</h4>
                    <p>{{ stage.keyLearning }}</p>
                  </div>

                  @if (getRelatedProjects(stage).length) {
                    <div class="journey-stage__group">
                      <h4>{{ text().relatedEvidence }}</h4>
                      <ul class="journey-stage__links">
                        @for (project of getRelatedProjects(stage); track project.id) {
                          <li>
                            <a [routerLink]="['/projects', project.slug]">
                              {{ text().viewProjectDetailsPrefix }} {{ project.title }}
                              {{ text().viewProjectDetailsSuffix }}
                            </a>
                          </li>
                        }
                      </ul>
                    </div>
                  }

                  @if (stage.evidenceNote) {
                    <p class="journey-stage__evidence">{{ stage.evidenceNote }}</p>
                  }
                </div>
              </article>
            </li>
          }
        </ol>
      </section>

      <section class="journey-section" aria-labelledby="journey-insights-title">
        <div class="journey-section__header">
          <p class="journey-section__eyebrow">{{ text().insightsEyebrow }}</p>
          <h2 id="journey-insights-title">{{ text().insightsTitle }}</h2>
        </div>

        <div class="journey-insight-grid">
          @for (insight of insights(); track insight.title) {
            <article class="journey-insight-card">
              <h3>{{ insight.title }}</h3>
              <p>{{ insight.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="journey-section journey-evolution" aria-labelledby="journey-evolution-title">
        <div class="journey-section__header">
          <p class="journey-section__eyebrow">Growth Pattern</p>
          <h2 id="journey-evolution-title">Professional Evolution</h2>
          <p>
            Visual representation of how architecture thinking, technical capabilities and product
            experience evolved across major stages of the career.
          </p>
        </div>

        <div
          class="journey-evolution__grid"
          aria-label="Relative professional evolution by career stage"
        >
          @for (phase of evolutionPhases; track phase.id) {
            <article class="journey-evolution-card" [attr.aria-labelledby]="phase.id + '-title'">
              <div class="journey-evolution-card__header">
                <p class="journey-evolution-card__years">{{ phase.years }}</p>
                <h3 [id]="phase.id + '-title'">{{ phase.title }}</h3>
              </div>

              <div class="journey-evolution-card__metrics">
                @for (metric of phase.metrics; track metric.label) {
                  <div class="journey-evolution-metric">
                    <span class="journey-evolution-metric__label">{{ metric.label }}</span>
                    <span
                      class="journey-evolution-metric__track"
                      role="img"
                      [attr.aria-label]="metric.label + ' relative growth during ' + phase.title"
                    >
                      <span
                        class="journey-evolution-metric__fill"
                        [style.width.%]="metric.level"
                      ></span>
                    </span>
                  </div>
                }
              </div>
            </article>
          }
        </div>
      </section>

      <section class="journey-cta" aria-labelledby="journey-next-title">
        <div>
          <p class="journey-section__eyebrow">{{ text().ctaEyebrow }}</p>
          <h2 id="journey-next-title">{{ text().ctaTitle }}</h2>
          <p>{{ text().ctaIntro }}</p>
        </div>

        <nav class="journey-cta__actions" [attr.aria-label]="text().ctaAria">
          @for (link of ctaLinks(); track link.route) {
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

      .journey-section,
      .journey-cta {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .journey-hero {
        padding-top: 4rem;
      }

      .journey-section__header {
        max-width: 54rem;
        margin-bottom: 1.5rem;
      }

      .journey-hero__content {
        margin-bottom: 0;
      }

      .journey-section__eyebrow,
      .journey-stage__number {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .journey-section h1,
      .journey-section h2,
      .journey-cta h2,
      .journey-stage h3,
      .journey-insight-card h3,
      .journey-stage h4 {
        margin: 0;
      }

      .journey-hero__summary {
        font-size: 1.15rem;
      }

      .journey-timeline {
        position: relative;
        display: grid;
        gap: 1rem;
        margin: 0;
        padding: 0 0 0 1.5rem;
        list-style: none;
      }

      .journey-timeline::before {
        position: absolute;
        top: 0.75rem;
        bottom: 0.75rem;
        left: 0.35rem;
        width: 1px;
        background: var(--app-border-color);
        content: '';
      }

      .journey-stage {
        position: relative;
      }

      .journey-stage::before {
        position: absolute;
        top: 1.75rem;
        left: -1.35rem;
        width: 0.7rem;
        height: 0.7rem;
        border: 2px solid var(--app-link-color);
        border-radius: 999px;
        background: var(--app-background-color);
        content: '';
      }

      .journey-stage__card {
        display: grid;
        grid-template-columns: minmax(10rem, 0.35fr) minmax(0, 1fr);
        gap: 1.25rem;
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.875rem;
      }

      .journey-stage__meta,
      .journey-stage__body,
      .journey-stage__group,
      .journey-stage__learning {
        display: grid;
        gap: 0.65rem;
      }

      .journey-stage__number,
      .journey-stage__period,
      .journey-stage__year {
        display: block;
      }

      .journey-stage__year {
        color: var(--app-text-color);
        font-size: clamp(1.35rem, 3vw, 2rem);
        font-weight: 800;
        letter-spacing: -0.03em;
        line-height: 1;
      }

      .journey-stage__period,
      .journey-stage__evidence {
        font-size: 0.95rem;
      }

      .journey-stage__body p,
      .journey-section__header p:last-child,
      .journey-insight-card p,
      .journey-cta p:last-child {
        margin-bottom: 0;
      }

      .tag-list,
      .journey-stage__links {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .tag-list li {
        padding: 0.35rem 0.65rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        font-size: 0.92rem;
      }

      .journey-stage__links {
        display: grid;
        gap: 0.35rem;
      }

      .journey-stage__links a {
        font-weight: 700;
      }

      .journey-stage__evidence {
        padding: 0.85rem 1rem;
        border: 1px dashed var(--app-border-color);
        border-radius: 0.75rem;
      }

      .journey-insight-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
      }

      .journey-insight-card {
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.75rem;
      }

      .journey-evolution__grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
      }

      .journey-evolution-card {
        display: grid;
        gap: 1.25rem;
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.875rem;
        background: color-mix(in srgb, var(--app-background-color) 92%, var(--app-link-color));
      }

      .journey-evolution-card__header {
        display: grid;
        gap: 0.35rem;
      }

      .journey-evolution-card__years {
        margin: 0;
        color: var(--app-link-color);
        font-size: 0.92rem;
        font-weight: 800;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      .journey-evolution-card h3 {
        margin: 0;
      }

      .journey-evolution-card__metrics {
        display: grid;
        gap: 1rem;
      }

      .journey-evolution-metric {
        display: grid;
        gap: 0.45rem;
      }

      .journey-evolution-metric__label {
        font-weight: 700;
      }

      .journey-evolution-metric__track {
        display: block;
        height: 0.75rem;
        overflow: hidden;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        background: color-mix(in srgb, var(--app-border-color) 36%, transparent);
      }

      .journey-evolution-metric__fill {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(
          90deg,
          var(--app-link-color),
          color-mix(in srgb, var(--app-link-color) 62%, #ffffff)
        );
      }

      :host-context(html.theme-premium-3d) .journey-evolution-card {
        box-shadow: 0 1.25rem 3rem rgba(196, 167, 255, 0.14);
      }

      :host-context(html.theme-premium-3d) .journey-evolution-metric__fill {
        box-shadow: 0 0 1rem rgba(196, 167, 255, 0.5);
        animation: evolutionFill 900ms ease-out both;
      }

      @keyframes evolutionFill {
        from {
          transform: scaleX(0);
          transform-origin: left;
        }
        to {
          transform: scaleX(1);
          transform-origin: left;
        }
      }

      .journey-cta {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        justify-content: space-between;
      }

      .journey-cta > div:first-child {
        max-width: 44rem;
      }

      .journey-cta__actions {
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
        padding: 0.65rem 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: inherit;
        text-decoration: none;
      }

      .button-link--primary,
      .button-link:hover,
      .button-link:focus-visible {
        border-color: var(--app-link-color);
        color: var(--app-link-color);
      }

      @media (max-width: 900px) {
        .journey-stage__card,
        .journey-cta {
          grid-template-columns: 1fr;
        }

        .journey-stage__card {
          display: grid;
        }

        .journey-timeline {
          padding-left: 1.1rem;
        }

        .journey-stage::before {
          left: -0.95rem;
        }

        .journey-insight-grid,
        .journey-evolution__grid {
          grid-template-columns: 1fr;
        }

        .journey-cta {
          display: grid;
          align-items: start;
        }

        .journey-cta__actions {
          justify-content: flex-start;
        }
      }

      @media (max-width: 640px) {
        .journey-section,
        .journey-cta {
          padding: 2.25rem 1rem;
        }

        .journey-stage__card {
          padding: 1rem;
        }

        .journey-cta__actions {
          display: grid;
        }
      }
    `,
  ],
})
export class Journey {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => this.languageService.uiText().pages.journey);

  readonly evolutionPhases = JOURNEY_EVOLUTION_PHASES;

  readonly stages = computed(() =>
    getLocalizedData(JOURNEY_STAGES, this.languageService.currentLanguage()),
  );
  readonly insights = computed(() =>
    getLocalizedData(JOURNEY_INSIGHTS, this.languageService.currentLanguage()),
  );
  readonly ctaLinks = computed(() =>
    getLocalizedData(JOURNEY_CTA_LINKS, this.languageService.currentLanguage()),
  );
  private readonly projects = computed(() =>
    getLocalizedData(PROJECTS, this.languageService.currentLanguage()),
  );
  private readonly projectsBySlug = computed(
    () => new Map(this.projects().map((project) => [project.slug, project])),
  );

  getRelatedProjects(stage: JourneyStage): Project[] {
    return (stage.relatedProjectSlugs ?? [])
      .map((projectSlug) => this.projectsBySlug().get(projectSlug))
      .filter((project): project is Project => Boolean(project));
  }
}
