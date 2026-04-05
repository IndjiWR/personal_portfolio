import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projects } from './projects';
import { ProjectService } from '../services/project.service';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { ProjectData } from '../models/project.model';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;
  let projectServiceMock: { getProjectsByCategory: jest.Mock };

  const mockProjects: ProjectData[] = [
    {
      id: 'project-1',
      image: 'assets/images/p1.png',
      languages: ['TypeScript'],
      frameworks: ['Angular'],
      category: 'collaborations',
    },
    {
      id: 'project-2',
      image: 'assets/images/p2.png',
      languages: ['Java'],
      frameworks: ['Spring'],
      category: 'personal',
    },
    {
      id: 'project-3',
      image: 'assets/images/p3.png',
      languages: ['Python'],
      frameworks: ['Django'],
      category: 'old-projects',
    },
  ];

  beforeEach(async () => {
    projectServiceMock = {
      getProjectsByCategory: jest.fn((category: string) => {
        return of(mockProjects.filter((p) => p.category === category));
      }),
    };

    await TestBed.configureTestingModule({
      imports: [Projects, TranslateModule.forRoot()],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        { provide: ProjectService, useValue: projectServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three sections defined', () => {
    expect(component.sections.length).toBe(3);
  });

  it('should have correct section categories', () => {
    const categories = component.sections.map((s) => s.category);
    expect(categories).toContain('collaborations');
    expect(categories).toContain('personal');
    expect(categories).toContain('old-projects');
  });

  it('should have translation keys for section titles', () => {
    const titleKeys = component.sections.map((s) => s.titleKey);
    expect(titleKeys).toContain('projects.sections.collaborations');
    expect(titleKeys).toContain('projects.sections.personal');
    expect(titleKeys).toContain('projects.sections.old-projects');
  });

  describe('getProjects', () => {
    it('should return collaborations projects', () => {
      const result = component.getProjects('collaborations');
      expect(result.length).toBe(1);
      expect(result[0].category).toBe('collaborations');
    });

    it('should return personal projects', () => {
      const result = component.getProjects('personal');
      expect(result.length).toBe(1);
      expect(result[0].category).toBe('personal');
    });

    it('should return old-projects projects', () => {
      const result = component.getProjects('old-projects');
      expect(result.length).toBe(1);
      expect(result[0].category).toBe('old-projects');
    });
  });

  it('should call projectService.getProjectsByCategory for each category', () => {
    expect(projectServiceMock.getProjectsByCategory).toHaveBeenCalledWith('collaborations');
    expect(projectServiceMock.getProjectsByCategory).toHaveBeenCalledWith('personal');
    expect(projectServiceMock.getProjectsByCategory).toHaveBeenCalledWith('old-projects');
  });
});