import { Component, signal, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero-section',
  imports: [TranslateModule, MatButtonModule, MatIconModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection implements OnDestroy {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  taglines = [
    'home.hero.tagline1',
    'home.hero.tagline2',
    'home.hero.tagline3',
  ];

  currentTaglineIndex = signal(0);
  TAGLINE_DISPLAY_MS = 3000;

  private taglineInterval: ReturnType<typeof setInterval> | null = null;
  private animationFrameId: number | null = null;
  private canvasCtx: CanvasRenderingContext2D | null = null;
  private particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
  private mouseX = 0;
  private mouseY = 0;

  constructor() {
    if (this.isBrowser) {
      this.startTaglineCycle();
    }
  }

  startTaglineCycle(): void {
    this.taglineInterval = setInterval(() => {
      this.currentTaglineIndex.update((i) => (i + 1) % this.taglines.length);
    }, this.TAGLINE_DISPLAY_MS);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.initCanvas();
  }

  private initCanvas(): void {
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    try {
      this.canvasCtx = canvas.getContext('2d');
    } catch {
      return;
    }
    if (!this.canvasCtx) return;

    this.resizeCanvas(canvas);
    this.createParticles(canvas);
    this.startAnimation(canvas);

    window.addEventListener('resize', () => this.resizeCanvas(canvas));
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    });
  }

  private resizeCanvas(canvas: HTMLCanvasElement): void {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  private createParticles(canvas: HTMLCanvasElement): void {
    const count = window.innerWidth < 768 ? 0 : 50;
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
      });
    }
  }

  private startAnimation(canvas: HTMLCanvasElement): void {
    const animate = () => {
      if (!this.canvasCtx) return;
      const ctx = this.canvasCtx;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Draw grid
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 40;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw particles
      this.particles.forEach((p) => {
        const dx = this.mouseX - p.x;
        const dy = this.mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.vx += dx * 0.0001;
          p.vy += dy * 0.0001;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        p.vx *= 0.999;
        p.vy *= 0.999;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 197, 94, 0.4)';
        ctx.fill();
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.08)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(this.particles[i].x, this.particles[i].y);
            ctx.lineTo(this.particles[j].x, this.particles[j].y);
            ctx.stroke();
          }
        }
      }

      this.animationFrameId = requestAnimationFrame(animate);
    };
    this.animationFrameId = requestAnimationFrame(animate);
  }

  scrollToProjects(): void {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToContact(): void {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy(): void {
    if (this.taglineInterval) clearInterval(this.taglineInterval);
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
  }
}