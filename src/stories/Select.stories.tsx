// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  component: Select,
  title: 'Atoms/Select',
  args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};