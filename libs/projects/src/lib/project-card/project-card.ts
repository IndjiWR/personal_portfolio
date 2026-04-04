import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { Tooltip } from 'ui';
import { ProjectData } from '../models/project.model';

@Component({
  selector: 'lib-project-card',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, TranslateModule, Tooltip],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  project = input.required<ProjectData>();

  onGithubClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    window.open(this.project().githubUrl, '_blank', 'noopener noreferrer');
  }
}