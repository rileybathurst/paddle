// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BookNow } from './BookNow';

const meta = {
  component: BookNow,
  title: 'Atoms/BookNow',
} satisfies Meta<typeof BookNow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};