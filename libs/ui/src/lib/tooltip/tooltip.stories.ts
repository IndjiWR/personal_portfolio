import type { Meta, StoryObj } from '@storybook/angular';
import { Tooltip } from './tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<Tooltip> = {
  component: Tooltip,
  title: 'UI/Tooltip',
  decorators: [
    (story) => ({
      moduleMetadata: {
        imports: [MatButtonModule, MatIconModule],
      },
    }),
  ],
};
export default meta;

type Story = StoryObj<Tooltip>;

export const Top: Story = {
  args: {
    text: 'Tooltip on top',
    position: 'top',
  },
  render: (args) => ({
    template: `
      <div style="padding: 60px; display: flex; justify-content: center;">
        <lib-tooltip [text]="text" [position]="position">
          <button mat-icon-button>
            <mat-icon>info</mat-icon>
          </button>
        </lib-tooltip>
      </div>
    `,
    props: args,
  }),
};

export const Bottom: Story = {
  args: {
    text: 'Tooltip on bottom',
    position: 'bottom',
  },
  render: (args) => ({
    template: `
      <div style="padding: 60px; display: flex; justify-content: center;">
        <lib-tooltip [text]="text" [position]="position">
          <button mat-icon-button>
            <mat-icon>info</mat-icon>
          </button>
        </lib-tooltip>
      </div>
    `,
    props: args,
  }),
};

export const Left: Story = {
  args: {
    text: 'Tooltip on left',
    position: 'left',
  },
  render: (args) => ({
    template: `
      <div style="padding: 60px; display: flex; justify-content: center;">
        <lib-tooltip [text]="text" [position]="position">
          <button mat-icon-button>
            <mat-icon>info</mat-icon>
          </button>
        </lib-tooltip>
      </div>
    `,
    props: args,
  }),
};

export const Right: Story = {
  args: {
    text: 'Tooltip on right',
    position: 'right',
  },
  render: (args) => ({
    template: `
      <div style="padding: 60px; display: flex; justify-content: center;">
        <lib-tooltip [text]="text" [position]="position">
          <button mat-icon-button>
            <mat-icon>info</mat-icon>
          </button>
        </lib-tooltip>
      </div>
    `,
    props: args,
  }),
};

export const SocialIcon: Story = {
  args: {
    text: 'GitHub',
    position: 'top',
  },
  render: (args) => ({
    template: `
      <div style="padding: 60px; display: flex; justify-content: center; gap: 16px;">
        <lib-tooltip text="Instagram" position="top">
          <button mat-icon-button>
            <mat-icon>photo_camera</mat-icon>
          </button>
        </lib-tooltip>
        <lib-tooltip text="GitHub" position="top">
          <button mat-icon-button>
            <mat-icon>code</mat-icon>
          </button>
        </lib-tooltip>
        <lib-tooltip text="LinkedIn" position="top">
          <button mat-icon-button>
            <mat-icon>work</mat-icon>
          </button>
        </lib-tooltip>
      </div>
    `,
    props: args,
  }),
};