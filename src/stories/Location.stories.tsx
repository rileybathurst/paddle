// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Location } from './Location';

const meta = {
  component: Location,
  title: 'Molecules/Location',
  args: { onClick: fn() },
} satisfies Meta<typeof Location>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backed: true,
  },
};