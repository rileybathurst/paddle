// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Deck } from './deck';

const meta = {
  component: Deck,
  title: 'Organisms/Deck',
  args: {},
} satisfies Meta<typeof Deck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};