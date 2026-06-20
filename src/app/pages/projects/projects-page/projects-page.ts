import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROJECTS_HERO_IMAGE_URL, PROJECTS } from '../../../data/projects.data';
import { getLocalizedData } from '../../../data/localized-data';
import { LanguageService } from '../../../core/services/language.service';
import { Project } from '../../../models/project.model';
import { getProjectStatusDisplay } from '../project-status.util';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  private readonly languageService = inject(LanguageService);

  protected readonly heroImageUrl = PROJECTS_HERO_IMAGE_URL;
  protected readonly text = computed(() => this.languageService.uiText().pages.projects);

  protected readonly projects = computed(() =>
    getLocalizedData(PROJECTS, this.languageService.currentLanguage()),
  );

  protected projectStatus(project: Project): { category: string; lines: string[] } {
    return getProjectStatusDisplay(project, this.languageService.currentLanguage());
  }

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
