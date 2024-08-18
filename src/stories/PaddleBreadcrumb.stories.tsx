// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PaddleBreadcrumb } from './PaddleBreadcrumb';

const meta = {
  component: PaddleBreadcrumb,
  title: 'Atoms/PaddleBreadcrumb',
  args: { onClick: fn() },
} satisfies Meta<typeof PaddleBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};