export type ProjectCategory = 'collaborations' | 'personal' | 'old-projects';

export interface ProjectData {
  id: string;
  image: string;
  languages: string[];
  frameworks: string[];
  githubUrl?: string;
  category: ProjectCategory;
}