// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Logo } from './Logo';

const meta = {
  component: Logo,
  title: 'Atoms/Logo',
  args: { onClick: fn() },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};