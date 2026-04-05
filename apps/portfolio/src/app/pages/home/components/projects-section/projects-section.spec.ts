import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsSection } from './projects-section';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

describe('ProjectsSection', () => {
  let component: ProjectsSection;
  let fixture: ComponentFixture<ProjectsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsSection, TranslateModule.forRoot()],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with id "projects"', () => {
    const sectionElement = fixture.nativeElement.querySelector('lib-section');
    expect(sectionElement).toBeTruthy();
  });

  it('should render projects summary', () => {
    const summaryElement = fixture.nativeElement.querySelector('.projects-summary');
    expect(summaryElement).toBeTruthy();
  });

  it('should render view all button', () => {
    const button = fixture.nativeElement.querySelector('.view-all-btn');
    expect(button).toBeTruthy();
  });

  it('should render arrow icon in button', () => {
    const icon = fixture.nativeElement.querySelector('.view-all-btn mat-icon');
    expect(icon).toBeTruthy();
    expect(icon.textContent.trim()).toBe('arrow_forward');
  });
});