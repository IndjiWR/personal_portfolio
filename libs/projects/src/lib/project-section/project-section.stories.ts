import type { Meta, StoryObj } from '@storybook/angular';
import { ProjectSection } from './project-section';
import { ProjectData } from '../models/project.model';

const meta: Meta<ProjectSection> = {
  component: ProjectSection,
  title: 'UI/ProjectSection',
};

export default meta;

type Story = StoryObj<ProjectSection>;

const sampleProjects: ProjectData[] = [
  {
    id: 'project-1',
    image: 'https://placehold.co/400x300/1a1a1a/ffffff?text=Project+1',
    languages: ['TypeScript'],
    frameworks: ['Angular'],
    githubUrl: 'https://github.com/example/project-1',
    category: 'personal',
  },
  {
    id: 'project-2',
    image: 'https://placehold.co/400x300/1a1a1a/ffffff?text=Project+2',
    languages: ['Python'],
    frameworks: ['FastAPI'],
    category: 'personal',
  },
];

export const Default: Story = {
  args: {
    id: 'personal',
    title: 'Personal Projects',
    projects: sampleProjects,
  },
};

export const SingleProject: Story = {
  args: {
    id: 'single',
    title: 'Single Project',
    projects: [sampleProjects[0]],
  },
};

export const ManyProjects: Story = {
  args: {
    id: 'many',
    title: 'All Projects',
    projects: [
      ...sampleProjects,
      {
        id: 'project-3',
        image: 'https://placehold.co/400x300/1a1a1a/ffffff?text=Project+3',
        languages: ['JavaScript'],
        frameworks: ['React'],
        githubUrl: 'https://github.com/example/project-3',
        category: 'personal',
      },
    ],
  },
};