import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Tooltip } from 'ui';
import { ProjectService } from '../services/project.service';
import { ProjectData, ProjectCategory } from '../models/project.model';

@Component({
  selector: 'lib-project-detail',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, TranslateModule, Tooltip],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly projectService = inject(ProjectService);

  private readonly category$ = this.route.params.pipe(
    map((p) => p['category'] as ProjectCategory)
  );
  private readonly id$ = this.route.params.pipe(map((p) => p['id'] as string));

  category = toSignal(this.category$);
  id = toSignal(this.id$);

  private readonly project$ = this.projectService.getProjectById(
    this.category() ?? 'personal',
    this.id() ?? ''
  );

  project = toSignal(this.project$);

  goBack(): void {
    this.router.navigate(['/projects']);
  }
}