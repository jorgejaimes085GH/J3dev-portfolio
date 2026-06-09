import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { JOURNEY_CTA_LINKS, JOURNEY_INSIGHTS, JOURNEY_STAGES } from '../../data/journey.data';
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
          <p class="journey-section__eyebrow">Technical Evolution</p>
          <h1 id="journey-page-title">Journey</h1>
          <p class="journey-hero__summary">
            This page is not a traditional employment timeline. It shows Jorge's evolution as a
            software engineer: what changed in his technical mindset, what he learned from each
            stage, and how those stages support his current backend and fullstack profile.
          </p>
        </div>
      </section>

      <section class="journey-section" aria-labelledby="journey-timeline-title">
        <div class="journey-section__header">
          <p class="journey-section__eyebrow">Evolution Timeline</p>
          <h2 id="journey-timeline-title">Learning stages that shaped the engineering profile</h2>
          <p>
            Each stage focuses on capability growth and practical learning rather than listing roles,
            employers, or confidential implementation details.
          </p>
        </div>

        <ol class="journey-timeline" aria-label="Technical and professional evolution stages">
          @for (stage of stages; track stage.id; let stageIndex = $index) {
            <li class="journey-stage">
              <article class="journey-stage__card" [attr.aria-labelledby]="stage.id + '-title'">
                <div class="journey-stage__meta">
                  <span class="journey-stage__number">Stage {{ stageIndex + 1 }}</span>
                  <span class="journey-stage__period">{{ stage.periodLabel }}</span>
                </div>

                <div class="journey-stage__body">
                  <h3 [id]="stage.id + '-title'">{{ stage.title }}</h3>
                  <p>{{ stage.summary }}</p>

                  <div class="journey-stage__group" aria-label="Focus technologies and areas">
                    <h4>Focus</h4>
                    <ul class="tag-list">
                      @for (focusArea of stage.focusAreas; track focusArea) {
                        <li>{{ focusArea }}</li>
                      }
                    </ul>
                  </div>

                  <div class="journey-stage__learning">
                    <h4>Key learning</h4>
                    <p>{{ stage.keyLearning }}</p>
                  </div>

                  @if (getRelatedProjects(stage).length) {
                    <div class="journey-stage__group">
                      <h4>Related project evidence</h4>
                      <ul class="journey-stage__links">
                        @for (project of getRelatedProjects(stage); track project.id) {
                          <li>
                            <a [routerLink]="['/projects', project.slug]">
                              View {{ project.title }} project details
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
          <p class="journey-section__eyebrow">Journey Insights</p>
          <h2 id="journey-insights-title">How the mindset has changed</h2>
        </div>

        <div class="journey-insight-grid">
          @for (insight of insights; track insight.title) {
            <article class="journey-insight-card">
              <h3>{{ insight.title }}</h3>
              <p>{{ insight.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="journey-cta" aria-labelledby="journey-next-title">
        <div>
          <p class="journey-section__eyebrow">Continue Exploring</p>
          <h2 id="journey-next-title">Connect the journey to evidence and documents</h2>
          <p>
            Use these links to review supporting projects, skills, value areas, and professional
            documents through the standard navigation experience.
          </p>
        </div>

        <nav class="journey-cta__actions" aria-label="Journey related navigation links">
          @for (link of ctaLinks; track link.route) {
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
        line-height: 1.15;
      }

      .journey-section h1 {
        font-size: clamp(2.25rem, 6vw, 4.5rem);
      }

      .journey-section h2,
      .journey-cta h2 {
        font-size: clamp(1.75rem, 4vw, 2.75rem);
      }

      .journey-hero__summary {
        font-size: 1.15rem;
      }

      .journey-timeline {
        display: grid;
        gap: 1rem;
        margin: 0;
        padding: 0;
        list-style: none;
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
      .journey-stage__period {
        display: block;
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
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
      }

      .journey-insight-card {
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.75rem;
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

        .journey-insight-grid {
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
  readonly stages = JOURNEY_STAGES;
  readonly insights = JOURNEY_INSIGHTS;
  readonly ctaLinks = JOURNEY_CTA_LINKS;

  private readonly projectsBySlug = new Map(PROJECTS.map((project) => [project.slug, project]));

  getRelatedProjects(stage: JourneyStage): Project[] {
    return (stage.relatedProjectSlugs ?? [])
      .map((projectSlug) => this.projectsBySlug.get(projectSlug))
      .filter((project): project is Project => Boolean(project));
  }
}
