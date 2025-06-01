// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Socials } from './Socials';

const meta = {
  component: Socials,
  title: 'Molecules/Socials',
  args: { onClick: fn() },
} satisfies Meta<typeof Socials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};