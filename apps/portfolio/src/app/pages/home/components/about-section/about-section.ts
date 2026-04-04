import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Section } from 'ui';

@Component({
  selector: 'app-about-section',
  imports: [TranslateModule, Section],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {}