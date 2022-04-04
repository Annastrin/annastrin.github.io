import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PrismicProvider } from "@prismicio/react";
import { client } from "../prismic";

import { Footer } from "../components/Footer";

export default {
  title: "Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <PrismicProvider client={client}>
        <Story />
      </PrismicProvider>
    ),
  ],
} as ComponentMeta<typeof Footer>;

export const Primary: ComponentStory<typeof Footer> = () => <Footer />;
