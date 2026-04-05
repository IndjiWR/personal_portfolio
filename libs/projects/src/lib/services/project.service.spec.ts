import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProjectService } from './project.service';
import { ProjectData, ProjectCategory } from '../models/project.model';

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectService],
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

  describe('getProjectsData', () => {
    it('should fetch projects data from assets', () => {
      service.getProjectsData().subscribe((data) => {
        expect(data).toEqual(mockProjects);
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockProjects);
    });

    it('should cache the response and not make duplicate requests', () => {
      // First call
      service.getProjectsData().subscribe();
      httpMock.expectOne('assets/data/projects.json').flush(mockProjects);

      // Second call should use cache (shareReplay)
      service.getProjectsData().subscribe((data) => {
        expect(data).toEqual(mockProjects);
      });

      // No new request should be made
      httpMock.expectNone('assets/data/projects.json');
    });
  });

  describe('getProjectsByCategory', () => {
    it('should return filtered projects for collaborations category', () => {
      service.getProjectsByCategory('collaborations').subscribe((projects) => {
        expect(projects.length).toBe(1);
        expect(projects[0].id).toBe('project-1');
        expect(projects[0].category).toBe('collaborations');
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });

    it('should return filtered projects for personal category', () => {
      service.getProjectsByCategory('personal').subscribe((projects) => {
        expect(projects.length).toBe(1);
        expect(projects[0].id).toBe('project-2');
        expect(projects[0].category).toBe('personal');
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });

    it('should return empty array for category with no projects', () => {
      service.getProjectsByCategory('old-projects' as ProjectCategory).subscribe((projects) => {
        // Should return project-3
        expect(projects.length).toBe(1);
        expect(projects[0].id).toBe('project-3');
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });
  });

  describe('getProjectById', () => {
    it('should return project by category and id', () => {
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

    it('should return undefined for wrong category', () => {
      service.getProjectById('personal', 'project-1').subscribe((project) => {
        expect(project).toBeUndefined();
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });
  });

  describe('getCategories', () => {
    it('should return unique categories', () => {
      service.getCategories().subscribe((categories) => {
        expect(categories.length).toBe(3);
        expect(categories).toContain('collaborations');
        expect(categories).toContain('personal');
        expect(categories).toContain('old-projects');
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush(mockProjects);
    });
  });
});