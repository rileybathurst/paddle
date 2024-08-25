// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TourPage } from './TourPage';

const meta = {
  component: TourPage,
  title: 'Templates/TourPage',
  args: { onClick: fn() },
} satisfies Meta<typeof TourPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};