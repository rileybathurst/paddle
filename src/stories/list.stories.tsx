import type { Meta, StoryObj } from "@storybook/react-vite";

import { List } from "./list";

const meta = {
  title: "Organisms/List",
  component: List,
  parameters: {
    layout: "fullscreen",
  }
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
