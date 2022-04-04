import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PrismicProvider } from "@prismicio/react";
import { client } from "../prismic";

import { Hero } from "../components/Hero";

export default {
  title: "Hero",
  component: Hero,
  decorators: [
    (Story) => (
      <PrismicProvider client={client}>
        <Story />
      </PrismicProvider>
    ),
  ],
} as ComponentMeta<typeof Hero>;

export const Primary: ComponentStory<typeof Hero> = () => <Hero />;
