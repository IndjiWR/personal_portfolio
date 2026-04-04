import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { ProjectCard } from './project-card';
import { ProjectData } from '../models/project.model';

describe('ProjectCard', () => {
  let fixture: ComponentFixture<ProjectCard>;
  let component: ProjectCard;

  const mockProject: ProjectData = {
    id: 'test-project',
    image: 'test-image.png',
    languages: ['TypeScript'],
    frameworks: ['Angular'],
    githubUrl: 'https://github.com/test/project',
    category: 'personal',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideTranslateService({
          defaultLanguage: 'en',
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', mockProject);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct project input', () => {
    expect(component.project()).toEqual(mockProject);
  });
});