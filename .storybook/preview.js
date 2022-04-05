import { useStyles } from "../src/components/App/app-styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
};

const withGlobalStyles = (Story) => {
  useStyles();
  return (
    <div>
      <Story />
    </div>
  );
};

export const decorators = [withGlobalStyles];
