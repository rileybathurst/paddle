// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Breadcrumb } from './Breadcrumb';

const meta = {
  component: Breadcrumb,
  title: 'Atoms/Breadcrumb',
  args: { onClick: fn() },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};