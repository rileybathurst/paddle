// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LocationColumn } from './LocationColumn';

const meta = {
  component: LocationColumn,
  title: 'Organisms/LocationColumn',
} satisfies Meta<typeof LocationColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    background: true,
  },
};