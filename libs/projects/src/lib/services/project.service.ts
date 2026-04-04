import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';
import { ProjectData, ProjectCategory } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly http = inject(HttpClient);
  private projectsData$?: Observable<ProjectData[]>;

  getProjectsData(): Observable<ProjectData[]> {
    if (!this.projectsData$) {
      this.projectsData$ = this.http
        .get<ProjectData[]>('assets/data/projects.json')
        .pipe(shareReplay(1));
    }
    return this.projectsData$;
  }

  getProjectsByCategory(category: ProjectCategory): Observable<ProjectData[]> {
    return this.getProjectsData().pipe(
      map((projects) => projects.filter((p) => p.category === category))
    );
  }

  getProjectById(category: ProjectCategory, id: string): Observable<ProjectData | undefined> {
    return this.getProjectsData().pipe(
      map(
        (projects) =>
          projects.find((p) => p.category === category && p.id === id)
      )
    );
  }

  getCategories(): Observable<ProjectCategory[]> {
    return this.getProjectsData().pipe(
      map((projects) => [...new Set(projects.map((p) => p.category))])
    );
  }
}