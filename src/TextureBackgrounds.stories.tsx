// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { TextureBackgrounds } from './TextureBackgrounds';

const meta = {
  component: TextureBackgrounds,
  title: 'Atoms/TextureBackgrounds',
  args: {},
} satisfies Meta<typeof TextureBackgrounds>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};