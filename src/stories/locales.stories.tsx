// this is the Locales.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Locales } from './locales';

const meta = {
  component: Locales,
  title: 'Organisms/Locales',
  args: { onClick: fn() },
} satisfies Meta<typeof Locales>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};