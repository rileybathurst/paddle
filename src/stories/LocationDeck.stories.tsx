// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LocationDeck } from './LocationDeck';

const meta = {
  component: LocationDeck,
  title: 'Organisms/LocationDeck',
} satisfies Meta<typeof LocationDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    background: true,
  },
};