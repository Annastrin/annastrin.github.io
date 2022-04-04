import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PrismicProvider } from "@prismicio/react";
import { client } from "../prismic";

import { Contacts } from "../components/Contacts";

export default {
  title: "Contacts",
  component: Contacts,
  decorators: [
    (Story) => (
      <PrismicProvider client={client}>
        <Story />
      </PrismicProvider>
    ),
  ],
} as ComponentMeta<typeof Contacts>;

export const Primary: ComponentStory<typeof Contacts> = () => <Contacts />;
