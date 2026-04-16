import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutSection } from './components/about-section/about-section';
import { ProjectsSection } from './components/projects-section/projects-section';
import { HeroSection } from './components/hero-section/hero-section';
import { ContactSection } from './components/contact-section/contact-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, AboutSection, ProjectsSection, ContactSection],
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