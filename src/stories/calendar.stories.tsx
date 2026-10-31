// * named CalendarAtom to remove confusion with react-aria-components Calendar component`
import type { Meta, StoryObj } from '@storybook/react';
import { CalendarAtom } from './calendar';

const meta = {
  component: CalendarAtom,
  title: 'Atoms/Calendar',
  args: {},
} satisfies Meta<typeof CalendarAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};