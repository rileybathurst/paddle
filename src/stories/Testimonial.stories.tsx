// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Testimonial } from './Testimonial';

const meta = {
  component: Testimonial,
  title: 'Molecules/Testimonial',
  args: { onClick: fn() },
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};