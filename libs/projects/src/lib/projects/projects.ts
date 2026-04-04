import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../services/project.service';
import { ProjectSection } from '../project-section/project-section';
import { ProjectData, ProjectCategory } from '../models/project.model';

@Component({
  selector: 'lib-projects',
  imports: [TranslateModule, ProjectSection],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly projectService = inject(ProjectService);

  private readonly collaborations$ = this.projectService.getProjectsByCategory('collaborations');
  private readonly personal$ = this.projectService.getProjectsByCategory('personal');
  private readonly oldProjects$ = this.projectService.getProjectsByCategory('old-projects');

  collaborations = toSignal(this.collaborations$, { initialValue: [] });
  personal = toSignal(this.personal$, { initialValue: [] });
  oldProjects = toSignal(this.oldProjects$, { initialValue: [] });

  sections: { category: ProjectCategory; titleKey: string }[] = [
    { category: 'collaborations', titleKey: 'projects.sections.collaborations' },
    { category: 'personal', titleKey: 'projects.sections.personal' },
    { category: 'old-projects', titleKey: 'projects.sections.old-projects' },
  ];

  getProjects(category: ProjectCategory): ProjectData[] {
    switch (category) {
      case 'collaborations':
        return this.collaborations();
      case 'personal':
        return this.personal();
      case 'old-projects':
        return this.oldProjects();
    }
  }
}