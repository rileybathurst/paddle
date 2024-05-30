// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BookNow } from './BookNow';

const meta = {
  component: BookNow,
  title: 'Atoms/BookNow',
  args: { onClick: fn() },
} satisfies Meta<typeof BookNow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};