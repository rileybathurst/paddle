// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SunsetTourTimes } from './SunsetTourTimes';

const meta = {
  component: SunsetTourTimes,
  title: 'Organisms/SunsetTourTimes',
  args: { onClick: fn() },
} satisfies Meta<typeof SunsetTourTimes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};