import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  JOURNEY_CTA_LINKS,
  JOURNEY_EVOLUTION_PHASES,
  JOURNEY_HERO_IMAGE_URL,
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
  templateUrl: './journey.html',
  styleUrl: './journey.css',
})
export class Journey {
  private readonly languageService = inject(LanguageService);

  protected readonly heroImageUrl = JOURNEY_HERO_IMAGE_URL;
  protected readonly text = computed(() => this.languageService.uiText().pages.journey);
  protected readonly openMetricHelpId = signal<string | null>(null);

  readonly evolutionPhases = computed(() =>
    getLocalizedData(JOURNEY_EVOLUTION_PHASES, this.languageService.currentLanguage()),
  );

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

  @HostListener('document:click')
  closeMetricHelp(): void {
    this.openMetricHelpId.set(null);
  }

  getMetricHelpId(phaseId: string, metricIndex: number): string {
    return `journey-evolution-help-${phaseId}-${metricIndex}`;
  }

  isMetricHelpOpen(phaseId: string, metricIndex: number): boolean {
    return this.openMetricHelpId() === this.getMetricHelpId(phaseId, metricIndex);
  }

  toggleMetricHelp(phaseId: string, metricIndex: number, event: MouseEvent): void {
    event.stopPropagation();
    const helpId = this.getMetricHelpId(phaseId, metricIndex);
    this.openMetricHelpId.update((currentHelpId) => (currentHelpId === helpId ? null : helpId));
  }

  getMetricExplanation(metricIndex: number): string {
    const explanations = this.text().evolutionMetricExplanations;
    const explanationByMetricIndex = [
      explanations.analysisArchitecture,
      explanations.technicalStack,
      explanations.productExperience,
    ];

    return explanationByMetricIndex[metricIndex] ?? explanations.productExperience;
  }

  getMetricFillClasses(metricLevel: number): string {
    return `journey-evolution-metric__fill journey-evolution-metric__fill--level-${metricLevel}`;
  }

  getRelatedProjects(stage: JourneyStage): Project[] {
    return (stage.relatedProjectSlugs ?? [])
      .map((projectSlug) => this.projectsBySlug().get(projectSlug))
      .filter((project): project is Project => Boolean(project));
  }

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
