// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TopBar } from './TopBar';

const meta = {
  component: TopBar,
  title: 'Atoms/TopBar',
  args: { onClick: fn() },
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};