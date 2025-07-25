import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    "@storybook/addon-a11y"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
