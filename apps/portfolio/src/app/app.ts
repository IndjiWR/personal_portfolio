import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Toolbar } from './components/toolbar/toolbar';
import { ScrollProgress } from './components/scroll-progress/scroll-progress';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Toolbar, ScrollProgress],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}