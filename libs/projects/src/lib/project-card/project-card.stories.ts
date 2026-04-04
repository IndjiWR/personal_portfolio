import type { Meta, StoryObj } from '@storybook/angular';
import { ProjectCard } from './project-card';
import { ProjectData } from '../models/project.model';

const meta: Meta<ProjectCard> = {
  component: ProjectCard,
  title: 'UI/ProjectCard',
};

export default meta;

type Story = StoryObj<ProjectCard>;

const sampleProject: ProjectData = {
  id: 'sample-project',
  image: 'https://placehold.co/400x300/1a1a1a/ffffff?text=Project+Image',
  languages: ['TypeScript', 'Python'],
  frameworks: ['Angular', 'FastAPI'],
  githubUrl: 'https://github.com/example/sample-project',
  category: 'personal',
};

export const Default: Story = {
  args: {
    project: sampleProject,
  },
};

export const WithoutGitHub: Story = {
  args: {
    project: {
      ...sampleProject,
      githubUrl: undefined,
    },
  },
};

export const Collaboration: Story = {
  args: {
    project: {
      ...sampleProject,
      id: 'collab-project',
      category: 'collaborations',
    },
  },
};

export const OldProject: Story = {
  args: {
    project: {
      ...sampleProject,
      id: 'old-project',
      languages: ['JavaScript', 'HTML'],
      frameworks: ['React', 'Bootstrap'],
      category: 'old-projects',
    },
  },
};