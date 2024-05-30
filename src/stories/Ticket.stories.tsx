// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Ticket } from './Ticket';

const meta = {
  component: Ticket,
  title: 'Molecules/Ticket',
  args: { onClick: fn() },
} satisfies Meta<typeof Ticket>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};