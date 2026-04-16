import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { Section, ScrollReveal } from 'ui';

@Component({
  selector: 'app-contact-section',
  imports: [TranslateModule, MatIconModule, Section, ScrollReveal],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  readonly socialLinks = [
    {
      nameKey: 'footer.instagram',
      url: 'https://www.instagram.com/indji_00/',
      icon: 'photo_camera',
    },
    {
      nameKey: 'footer.github',
      url: 'https://github.com/IndjiWR?tab=repositories',
      icon: 'code',
    },
    {
      nameKey: 'footer.linkedin',
      url: 'https://it.linkedin.com/in/indji-israel-gbohou-78097a223/it',
      icon: 'work',
    },
  ];

  get currentYear(): number {
    return new Date().getFullYear();
  }
}