// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Four0Four } from './404';

const meta = {
  component: Four0Four,
  title: 'Templates/404',
  args: {},
} satisfies Meta<typeof Four0Four>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};