// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Pricing } from './Pricing';

const meta = {
  component: Pricing,
  title: 'Molecules/Pricing',
} satisfies Meta<typeof Pricing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    book: true,
  },
};