// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Spec } from './Spec';

const meta = {
  component: Spec,
  title: 'Molecules/Spec',
  args: { onClick: fn() },
} satisfies Meta<typeof Spec>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};