// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Panels } from './Panels';

const meta = {
  component: Panels,
  title: 'Atoms/Panels',
  args: {},
} satisfies Meta<typeof Panels>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};