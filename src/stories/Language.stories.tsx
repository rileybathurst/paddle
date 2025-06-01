// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Language } from './Language';

const meta = {
  title: 'Atoms/Language',
  component: Language,
  args: { onClick: fn() },
} satisfies Meta<typeof Language>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};