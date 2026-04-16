import { Component, inject, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Section, ScrollReveal, TiltCard } from 'ui';
import { ProjectService, ProjectData, ProjectCategory } from 'projects';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-projects-section',
  imports: [TranslateModule, RouterModule, MatButtonModule, MatIconModule, Section, ScrollReveal, TiltCard],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  private projectService = inject(ProjectService);

  readonly allProjects = toSignal(this.projectService.getVisibleProjects(), { initialValue: [] });
  readonly categories = toSignal(this.projectService.getCategories(), { initialValue: [] });

  activeFilter = signal<string>('all');

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const projects = this.allProjects();
    if (filter === 'all') return projects;
    return projects.filter((p) => p.category === filter);
  });

  setFilter(category: string): void {
    this.activeFilter.set(category);
  }

  getCategoryLabel(category: string): string {
    return `projects.sections.${category}`;
  }
}