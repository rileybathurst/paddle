// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Margin } from './Margin';

const meta = {
  component: Margin,
  title: 'Atoms/Margin',
  args: {},
} satisfies Meta<typeof Margin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};