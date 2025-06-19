// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { SmallMenu } from './SmallMenu';

const meta = {
  component: SmallMenu,
  title: 'Molecules/SmallMenu',
  args: {},
} satisfies Meta<typeof SmallMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};