// import type { Preview } from "@storybook/react-vite";
import { Preview, ReactRenderer } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";

import "../src/styles/app.css";

// * this is kinda a mess and maybe causing issues
import "color-cards/src/styles/app.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        clean: "clean",
        tahoeCity: "tahoe-city",
        southTahoe: "south-tahoe",
      },
      defaultTheme: "tahoeCity",
    }),
  ],
};

export default preview;
