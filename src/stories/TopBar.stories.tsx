// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopBar } from './TopBar';

const meta = {
  component: TopBar,
  title: 'Atoms/TopBar',
  args: {},
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    location: 'tahoe-city',
  },
};