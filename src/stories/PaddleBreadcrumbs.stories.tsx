// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { PaddleBreadcrumbs } from './PaddleBreadcrumbs';

const meta = {
  component: PaddleBreadcrumbs,
  title: 'Molecules/PaddleBreadcrumbs',
  args: { onClick: fn() },
} satisfies Meta<typeof PaddleBreadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};