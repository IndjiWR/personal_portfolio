import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Section } from 'ui';

@Component({
  selector: 'app-projects-section',
  imports: [TranslateModule, RouterModule, MatButtonModule, MatIconModule, Section],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {}