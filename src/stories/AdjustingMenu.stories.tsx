// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { AdjustingMenu } from './AdjustingMenu';

const meta = {
  component: AdjustingMenu,
  title: 'Molecules/AdjustingMenu',
  args: {},
} satisfies Meta<typeof AdjustingMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};