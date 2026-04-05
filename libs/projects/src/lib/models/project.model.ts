import { InjectionToken } from '@angular/core';

export type ProjectCategory = 'collaborations' | 'personal' | 'old-projects';

export interface ProjectData {
  id: string;
  image: string;
  languages: string[];
  frameworks: string[];
  githubUrl?: string;
  category: ProjectCategory;
  /**
   * If true, project is shown when environment mode is 'production'.
   * Use this for completed, deployed projects.
   */
  production?: boolean;
  /**
   * If true, project is shown when environment mode is 'local'.
   * Use this for work-in-progress or personal projects not yet deployed.
   */
  local?: boolean;
}

/**
 * Environment mode configuration.
 * Determines which projects are visible.
 */
export interface ProjectEnvironment {
  /**
   * Current mode - affects which projects are shown.
   * - 'production': shows projects with `production: true`
   * - 'local': shows projects with `local: true`
   */
  mode: 'production' | 'local';
}

/**
 * Injection token for project environment configuration.
 * Provide this in your app module to configure visibility mode.
 *
 * Example:
 * ```typescript
 * providers: [
 *   { provide: PROJECT_ENVIRONMENT, useValue: { mode: 'local' } }
 * ]
 * ```
 */
export const PROJECT_ENVIRONMENT = new InjectionToken<ProjectEnvironment>('PROJECT_ENVIRONMENT', {
  factory: () => ({ mode: 'local' }),
  providedIn: 'root',
});