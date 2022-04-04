import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PrismicProvider } from "@prismicio/react";
import { client } from "../prismic";

import { Header } from "../components/Header";

export default {
  title: "Header",
  component: Header,
  decorators: [
    (Story) => (
      <PrismicProvider client={client}>
        <Story />
      </PrismicProvider>
    ),
  ],
} as ComponentMeta<typeof Header>;

export const Primary: ComponentStory<typeof Header> = () => <Header />;
