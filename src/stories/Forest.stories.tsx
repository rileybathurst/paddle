// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Forest } from './Forest.tsx';

const meta = {
  component: Forest,
  title: 'Atoms/Forest',
  args: { onClick: fn() },
} satisfies Meta<typeof Forest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    location: 'tahoe-city',
  },
};