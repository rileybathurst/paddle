// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Location } from './Location';

const meta = {
  component: Location,
  title: 'Molecules/Location',
} satisfies Meta<typeof Location>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hover: true,
  },
};