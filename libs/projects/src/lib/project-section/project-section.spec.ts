import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { ProjectSection } from './project-section';
import { ProjectData } from '../models/project.model';

describe('ProjectSection', () => {
  let fixture: ComponentFixture<ProjectSection>;
  let component: ProjectSection;

  const mockProjects: ProjectData[] = [
    {
      id: 'project-1',
      image: 'image1.png',
      languages: ['TypeScript'],
      frameworks: ['Angular'],
      category: 'personal',
    },
    {
      id: 'project-2',
      image: 'image2.png',
      languages: ['Python'],
      frameworks: ['FastAPI'],
      category: 'personal',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideTranslateService({
          defaultLanguage: 'en',
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectSection);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-section');
    fixture.componentRef.setInput('title', 'Test Section');
    fixture.componentRef.setInput('projects', mockProjects);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display section title', () => {
    const titleEl = fixture.nativeElement.querySelector('.section-title');
    expect(titleEl.textContent).toBe('Test Section');
  });

  it('should render all project cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('lib-project-card');
    expect(cards.length).toBe(2);
  });

  it('should apply section id', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section.getAttribute('id')).toBe('test-section');
  });
});