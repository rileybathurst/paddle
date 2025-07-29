// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Time } from './time';

const meta = {
  component: Time,
  title: 'atoms/Time',
  args: {},
} satisfies Meta<typeof Time>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};