// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BrandList } from './BrandList';

const meta = {
  component: BrandList,
  title: 'Organisms/BrandList',
  args: { onClick: fn() },
} satisfies Meta<typeof BrandList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};