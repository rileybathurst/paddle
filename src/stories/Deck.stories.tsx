// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Deck } from './Deck';

const meta = {
  component: Deck,
  title: 'Organisms/Deck',
  args: { onClick: fn() },
} satisfies Meta<typeof Deck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};