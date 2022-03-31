import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PrismicProvider } from "@prismicio/react";
import { client } from "../prismic";

import { About } from "../components/About";

export default {
  title: "About",
  component: About,
  decorators: [
    (Story) => (
      <PrismicProvider client={client}>
        <Story />
      </PrismicProvider>
    ),
  ],
} as ComponentMeta<typeof About>;

export const Primary: ComponentStory<typeof About> = () => <About />;
