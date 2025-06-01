// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Composition } from './Composition';

const meta = {
  component: Composition,
  title: 'Molecules/Composition',
  args: { onClick: fn() },
} satisfies Meta<typeof Composition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};