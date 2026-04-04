import type { Meta, StoryObj } from '@storybook/angular';
import { Section } from './section';

const meta: Meta<Section> = {
  component: Section,
  title: 'UI/Section',
};

export default meta;

type Story = StoryObj<Section>;

export const Default: Story = {
  args: {
    id: 'example-section',
    title: 'Section Title',
  },
  render: (args) => ({
    template: `
      <lib-section [id]="id" [title]="title">
        <p>Section content goes here</p>
      </lib-section>
    `,
    props: args,
  }),
};

export const NoTitle: Story = {
  args: {
    id: 'section-without-title',
  },
  render: (args) => ({
    template: `
      <lib-section [id]="id">
        <p>Content without a title</p>
      </lib-section>
    `,
    props: args,
  }),
};