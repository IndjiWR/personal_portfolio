import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollProgress } from './scroll-progress';

describe('ScrollProgress', () => {
  let fixture: ComponentFixture<ScrollProgress>;
  let component: ScrollProgress;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScrollProgress],
    });
    fixture = TestBed.createComponent(ScrollProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start at 0% progress', () => {
    expect(component.progress()).toBe(0);
  });

  it('should compute progress from scroll position', () => {
    component['updateProgress']({ scrollY: 500, scrollHeight: 2000, innerHeight: 1000 });
    expect(component.progress()).toBe(50);
  });
});