// this is the MultiButton.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { MultiButton } from './MultiButton';

const meta = {
    component: MultiButton,
    title: 'Molecules/MultiButton',
    args: { onClick: fn() },
} satisfies Meta<typeof MultiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { 
    args: {
        primary: true,
    },
};