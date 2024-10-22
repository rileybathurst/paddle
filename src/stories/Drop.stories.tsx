// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Drop } from './Drop';

const meta = {
  component: Drop,
  title: 'Atoms/Drop',
  args: { onClick: fn() },
} satisfies Meta<typeof Drop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};