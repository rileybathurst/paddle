// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { ComparePage } from './compare-page';

const meta = {
  component: ComparePage,
  title: 'Templates/ComparePage',
  args: {},
} satisfies Meta<typeof ComparePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};