// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Moonlight } from './Moonlight';

const meta = {
  component: Moonlight,
  title: 'Molecules/Moonlight',
  args: {},
} satisfies Meta<typeof Moonlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};