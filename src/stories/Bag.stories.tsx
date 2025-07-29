// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Bag } from './Bag';

const meta = {
  component: Bag,
  title: 'Organisms/Bag',
  args: {},
} satisfies Meta<typeof Bag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};