// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta = {
  component: Menu,
  title: 'Molecules/Menu',
  args: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};