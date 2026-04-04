import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from 'ui';
import { ProjectCard } from '../project-card/project-card';
import { ProjectData } from '../models/project.model';

@Component({
  selector: 'lib-project-section',
  imports: [CommonModule, Section, ProjectCard],
  templateUrl: './project-section.html',
  styleUrl: './project-section.scss',
})
export class ProjectSection {
  id = input<string>('');
  title = input<string>('');
  projects = input.required<ProjectData[]>();
}