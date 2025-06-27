// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Badges } from './Badges';

const meta = {
  component: Badges,
  title: 'Atoms/Badges',
  args: {},
} satisfies Meta<typeof Badges>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};