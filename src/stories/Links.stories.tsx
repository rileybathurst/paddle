// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Links } from './Links';

const meta = {
  component: Links,
  title: 'Atoms/Links',
  args: { onClick: fn() },
} satisfies Meta<typeof Links>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};