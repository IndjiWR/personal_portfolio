import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';
import { ProjectData, ProjectCategory, PROJECT_ENVIRONMENT } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly http = inject(HttpClient);
  private readonly env = inject(PROJECT_ENVIRONMENT);
  private projectsData$?: Observable<ProjectData[]>;

  getProjectsData(): Observable<ProjectData[]> {
    if (!this.projectsData$) {
      this.projectsData$ = this.http
        .get<ProjectData[]>('assets/data/projects.json')
        .pipe(shareReplay(1));
    }
    return this.projectsData$;
  }

  /**
   * Returns projects filtered by environment mode.
   *
   * Visibility rules:
   * - `mode: 'production'` → shows projects with `production: true`
   * - `mode: 'local'` → shows projects with `local: true`
   * - Projects can have both flags to appear in both modes
   * - Projects with neither flag are not shown in any mode
   */
  getVisibleProjects(): Observable<ProjectData[]> {
    return this.getProjectsData().pipe(
      map((projects) => {
        const mode = this.env.mode;

        if (mode === 'production') {
          return projects.filter((p) => p.production === true);
        } else {
          return projects.filter((p) => p.local === true);
        }
      })
    );
  }

  getProjectsByCategory(category: ProjectCategory): Observable<ProjectData[]> {
    return this.getVisibleProjects().pipe(
      map((projects) => projects.filter((p) => p.category === category))
    );
  }

  getProjectById(category: ProjectCategory, id: string): Observable<ProjectData | undefined> {
    return this.getVisibleProjects().pipe(
      map((projects) => projects.find((p) => p.category === category && p.id === id))
    );
  }

  getCategories(): Observable<ProjectCategory[]> {
    return this.getVisibleProjects().pipe(
      map((projects) => [...new Set(projects.map((p) => p.category))])
    );
  }
}