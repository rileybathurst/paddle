// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Purchase } from './Purchase';

const meta = {
  component: Purchase,
  title: 'Molecules/Purchase',
  args: {},
} satisfies Meta<typeof Purchase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};