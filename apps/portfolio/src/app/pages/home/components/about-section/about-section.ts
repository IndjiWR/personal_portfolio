import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Section, ScrollReveal } from 'ui';

@Component({
  selector: 'app-about-section',
  imports: [TranslateModule, Section, ScrollReveal],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  readonly techStack = [
    { name: 'Java', type: 'language' as const },
    { name: 'TypeScript', type: 'language' as const },
    { name: 'C#', type: 'language' as const },
    { name: 'Python', type: 'language' as const },
    { name: 'SQL', type: 'language' as const },
    { name: 'Angular', type: 'framework' as const },
    { name: 'Spring', type: 'framework' as const },
    { name: '.NET', type: 'framework' as const },
    { name: 'Tailwind', type: 'framework' as const },
    { name: 'Docker', type: 'framework' as const },
    { name: 'Git', type: 'framework' as const },
    { name: 'AWS', type: 'framework' as const },
  ];
}