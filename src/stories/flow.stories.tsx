// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Flow } from './flow';

const meta = {
  component: Flow,
  title: 'Organisms/Flow',
  args: {},
} satisfies Meta<typeof Flow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};