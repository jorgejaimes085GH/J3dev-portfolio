import { Component, computed, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { PROJECTS } from '../../../data/projects.data';
import { getLocalizedData } from '../../../data/localized-data';
import { LanguageService } from '../../../core/services/language.service';
import { Project, ProjectLink } from '../../../models/project.model';
import { getProjectStatusDisplay } from '../project-status.util';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly languageService = inject(LanguageService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly projectId = this.route.snapshot.paramMap.get('projectId');
  private readonly failedVideoSources = new Set<string>();

  protected readonly text = computed(() => this.languageService.uiText().pages.projectDetail);

  protected readonly project = computed(() =>
    getLocalizedData(PROJECTS, this.languageService.currentLanguage()).find(
      (project) => project.slug === this.projectId || project.id === this.projectId,
    ),
  );

  protected safeEmbedUrl(embedUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  protected defaultActionLabel(type: string): string {
    return [this.text().openLinkPrefix, type, this.text().openLinkSuffix].filter(Boolean).join(' ');
  }

  protected placeholderText(projectLink: ProjectLink): string {
    return projectLink.placeholderMessage || this.text().defaultPlaceholder;
  }

  protected isFailedVideo(videoSrc: string): boolean {
    return this.failedVideoSources.has(videoSrc);
  }

  protected markFailedVideo(videoSrc: string): void {
    this.failedVideoSources.add(videoSrc);
  }

  protected projectStatus(project: Project): { category: string; lines: string[] } {
    return getProjectStatusDisplay(project, this.languageService.currentLanguage());
  }

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
