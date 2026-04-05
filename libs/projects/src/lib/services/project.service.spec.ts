import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProjectService } from './project.service';
import { ProjectData, PROJECT_ENVIRONMENT } from '../models/project.model';

describe('ProjectService', () => {
  let service: ProjectService;
  let httpMock: HttpTestingController;

  const mockProjects: ProjectData[] = [
    {
      id: 'project-1',
      image: 'assets/images/p1.png',
      languages: ['TypeScript'],
      frameworks: ['Angular'],
      category: 'collaborations',
      local: true,
    },
    {
      id: 'project-2',
      image: 'assets/images/p2.png',
      languages: ['Java'],
      frameworks: ['Spring'],
      category: 'personal',
      production: true,
    },
    {
      id: 'project-3',
      image: 'assets/images/p3.png',
      languages: ['Python'],
      frameworks: ['Django'],
      category: 'old-projects',
      // Neither flag - not shown in any mode
    },
    {
      id: 'project-4',
      image: 'assets/images/p4.png',
      languages: ['Go'],
      frameworks: ['Gin'],
      category: 'personal',
      local: true,
      production: true, // Shown in both modes
    },
  ];

  describe('in local mode', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          ProjectService,
          { provide: PROJECT_ENVIRONMENT, useValue: { mode: 'local' } },
        ],
      });
      service = TestBed.inject(ProjectService);
      httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return only local projects', () => {
      service.getVisibleProjects().subscribe((projects) => {
        expect(projects.length).toBe(2);
        expect(projects.map((p) => p.id)).toEqual(
          expect.arrayContaining(['project-1', 'project-4'])
        );
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });

    it('should not return production-only projects', () => {
      service.getVisibleProjects().subscribe((projects) => {
        expect(projects.find((p) => p.id === 'project-2')).toBeUndefined();
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });

    it('should not return projects with no flags', () => {
      service.getVisibleProjects().subscribe((projects) => {
        expect(projects.find((p) => p.id === 'project-3')).toBeUndefined();
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });
  });

  describe('in production mode', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          ProjectService,
          { provide: PROJECT_ENVIRONMENT, useValue: { mode: 'production' } },
        ],
      });
      service = TestBed.inject(ProjectService);
      httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return only production projects', () => {
      service.getVisibleProjects().subscribe((projects) => {
        expect(projects.length).toBe(2);
        expect(projects.map((p) => p.id)).toEqual(
          expect.arrayContaining(['project-2', 'project-4'])
        );
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });

    it('should not return local-only projects', () => {
      service.getVisibleProjects().subscribe((projects) => {
        expect(projects.find((p) => p.id === 'project-1')).toBeUndefined();
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });

    it('should not return projects with no flags', () => {
      service.getVisibleProjects().subscribe((projects) => {
        expect(projects.find((p) => p.id === 'project-3')).toBeUndefined();
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });
  });

  describe('common functionality', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          ProjectService,
          { provide: PROJECT_ENVIRONMENT, useValue: { mode: 'local' } },
        ],
      });
      service = TestBed.inject(ProjectService);
      httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should cache the response and not make duplicate requests', () => {
      service.getProjectsData().subscribe();
      httpMock.expectOne('assets/data/projects.json').flush(mockProjects);

      service.getProjectsData().subscribe((data) => {
        expect(data).toEqual(mockProjects);
      });

      httpMock.expectNone('assets/data/projects.json');
    });

    it('should filter projects by category', () => {
      service.getProjectsByCategory('collaborations').subscribe((projects) => {
        expect(projects.length).toBe(1);
        expect(projects[0].id).toBe('project-1');
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });

    it('should return project by id', () => {
      service.getProjectById('collaborations', 'project-1').subscribe((project) => {
        expect(project).toBeTruthy();
        expect(project?.id).toBe('project-1');
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });

    it('should return undefined for non-existent project', () => {
      service.getProjectById('collaborations', 'non-existent').subscribe((project) => {
        expect(project).toBeUndefined();
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });

    it('should return categories from visible projects', () => {
      service.getCategories().subscribe((categories) => {
        expect(categories.length).toBe(2);
        expect(categories).toContain('collaborations');
        expect(categories).toContain('personal');
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });
  });
});