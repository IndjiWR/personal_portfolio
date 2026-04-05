import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class Home {
  private route = inject(ActivatedRoute);

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });
  }
}