// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { ReactMarkdown } from './react-markdown';

const meta = {
  component: ReactMarkdown,
  title: 'Atoms/ReactMarkdown',
  args: {},
} satisfies Meta<typeof ReactMarkdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};