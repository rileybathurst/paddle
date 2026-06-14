// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { RetailTemplate } from './retail-template';

const meta = {
  component: RetailTemplate,
  title: 'Templates/RetailTemplate',
  args: {},
} satisfies Meta<typeof RetailTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};