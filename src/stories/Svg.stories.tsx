// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Svg } from './Svg';

const meta = {
  component: Svg,
  title: 'Atoms/Svg',
  args: { onClick: fn() },
} satisfies Meta<typeof Svg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};