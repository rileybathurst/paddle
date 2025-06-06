// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Flight } from './Flight';

const meta = {
  component: Flight,
  title: 'Organisms/Flight',
  args: {},
} satisfies Meta<typeof Flight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};