import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-section',
  imports: [CommonModule],
  templateUrl: './section.html',
  styleUrl: './section.scss',
})
export class Section {
  id = input<string>('');
  title = input<string>('');
}