// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Rentals } from './Rentals';

const meta = {
  component: Rentals,
  title: 'Templates/Rentals',
  args: {},
} satisfies Meta<typeof Rentals>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};