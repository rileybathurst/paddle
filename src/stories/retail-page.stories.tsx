// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { RetailPage } from './retail-page';

const meta = {
  component: RetailPage,
  title: 'Templates/RetailPage',
  args: {},
} satisfies Meta<typeof RetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};