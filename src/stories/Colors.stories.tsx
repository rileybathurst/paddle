// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Colors } from './Colors';

const meta = {
  component: Colors,
  title: 'Atoms/Colors',
  args: { onClick: fn() },
} satisfies Meta<typeof Colors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};