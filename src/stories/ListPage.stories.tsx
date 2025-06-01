// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ListPage } from './ListPage';

const meta = {
  component: ListPage,
  title: 'Templates/ListPage',
  args: { onClick: fn() },
} satisfies Meta<typeof ListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};