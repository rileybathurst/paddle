// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { CollageHero } from './collage-hero';

const meta = {
  component: CollageHero,
  title: 'Organisms/Collage Hero',
  args: { onClick: fn() },
} satisfies Meta<typeof CollageHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};