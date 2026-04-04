import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutSection } from './components/about-section/about-section';
import { ProjectsSection } from './components/projects-section/projects-section';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, MatIconModule, AboutSection, ProjectsSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}