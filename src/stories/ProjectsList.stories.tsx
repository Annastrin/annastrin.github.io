import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PrismicProvider } from "@prismicio/react";
import { client } from "../prismic";

import { ProjectsList } from "../components/ProjectsList";

export default {
  title: "ProjectsList",
  component: ProjectsList,
  decorators: [
    (Story) => (
      <PrismicProvider client={client}>
        <Story />
      </PrismicProvider>
    ),
  ],
} as ComponentMeta<typeof ProjectsList>;

export const Primary: ComponentStory<typeof ProjectsList> = () => (
  <ProjectsList />
);
